import fs from 'fs/promises';
import path from 'path';
import { execSync } from 'child_process';
import { ClientSecretCredential } from '@azure/identity'; // Added import
// Need to assert type for node-fetch v2 with CommonJS/ESM interop
import _fetch from 'node-fetch';
const fetch = _fetch as unknown as typeof global.fetch;

// Paths relative to the script's new location inside src/mcp_hub/scripts
const metadataTempFile = path.resolve(__dirname, '../metadata.temp.xml'); // Temp file in src/mcp_hub
const outputDir = path.resolve(__dirname, '../src/core/generated/odata');
const mcpHubDir = path.resolve(__dirname, '..'); // The src/mcp_hub directory

async function generateClient() {
  console.log('Attempting to generate OData client...');

  try {
    // 1. Get URL and Token from environment variables
    console.log('Getting auth details and metadata URL from environment variables...');
    const tenantId = process.env.AZURE_TENANT_ID;
    const clientId = process.env.AZURE_CLIENT_ID;
    const clientSecret = process.env.AZURE_CLIENT_SECRET;
    // Use the direct metadata URL from env var
    const metadataUrl = process.env.D365_METADATA_URL;

    if (!tenantId || !clientId || !clientSecret || !metadataUrl) {
        throw new Error('Missing required environment variables for authentication or metadata URL (AZURE_TENANT_ID, AZURE_CLIENT_ID, AZURE_CLIENT_SECRET, D365_METADATA_URL)');
    }

    // Extract the base URL to use for the token scope
    const d365BaseUrlMatch = metadataUrl.match(/^(https?:\/\/[^\/]+)/);
    if (!d365BaseUrlMatch) {
        throw new Error('Could not extract base URL from D365_METADATA_URL to determine token scope.');
    }
    const d365BaseUrl = d365BaseUrlMatch[1];
    const tokenScope = `${d365BaseUrl}/.default`;

    console.log(`Acquiring token for scope: ${tokenScope}`);
    const credential = new ClientSecretCredential(tenantId, clientId, clientSecret);
    const tokenResponse = await credential.getToken(tokenScope);
    if (!tokenResponse?.token) {
        throw new Error('Failed to acquire token using Client Secret Credential.');
    }
    const token = tokenResponse.token;
    console.log('Token acquired successfully.');
    console.log(`Fetching metadata from: ${metadataUrl}`);

    // 2. Fetch Metadata with Auth
    const response = await fetch(metadataUrl, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/xml', // Request XML format
        'OData-MaxVersion': '4.0',
        'OData-Version': '4.0',
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Failed to fetch metadata: ${response.status} ${response.statusText}\nResponse: ${errorText}`);
    }

    const metadataXml = await response.text();
    console.log('Metadata XML fetched successfully.');

    // 3. Save Metadata to Temporary File
    console.log(`Saving metadata to temporary file: ${metadataTempFile}`);
    await fs.writeFile(metadataTempFile, metadataXml, 'utf8');

    // 4. Run odata-ts against the temporary file
    // Ensure output directory exists
    await fs.mkdir(outputDir, { recursive: true });
    const command = `npx odata-ts -i "${metadataTempFile}" -o "${outputDir}" --prettier`;
    console.log(`Executing odata-ts command: ${command}`);
    // Execute from the mcp_hub directory context so npx finds the local installation
    execSync(command, { stdio: 'inherit', cwd: mcpHubDir });
    console.log('odata-ts generation completed.');

  } catch (error) {
    console.error('OData client generation failed:', error);
    process.exitCode = 1; // Indicate failure
  } finally {
    // 5. Clean up temporary file
    try {
      // Check if file exists before attempting delete
      await fs.access(metadataTempFile); // Throws if doesn't exist
      console.log(`Cleaning up temporary file: ${metadataTempFile}`);
      await fs.unlink(metadataTempFile);
      console.log('Temporary file deleted.');
    } catch (cleanupError: any) {
      // Ignore error if file doesn't exist (ENOENT), log others
      if (cleanupError.code !== 'ENOENT') {
        console.warn(`Warning: Failed to delete temporary metadata file '${metadataTempFile}': ${cleanupError.message}`);
      }
    }
  }
}

// Ensure environment variables are loaded if run directly (e.g. source setup script first)
// Adjusted check for variables needed by this script
if (!process.env.AZURE_TENANT_ID || !process.env.AZURE_CLIENT_ID || !process.env.AZURE_CLIENT_SECRET || !process.env.D365_METADATA_URL) {
    console.error("ERROR: Required environment variables (AZURE_TENANT_ID, AZURE_CLIENT_ID, AZURE_CLIENT_SECRET, D365_METADATA_URL) are not set.");
    console.error("If running locally, please run 'source scripts/setup_local_env.sh' first.");
    process.exit(1);
}

generateClient();
