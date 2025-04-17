import fs from 'fs/promises';
import path from 'path';
import { execSync } from 'child_process';
// Path relative to the script's new location inside src/mcp_hub/scripts
import { getD365Url, getD365AuthToken } from '../src/core/auth';
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
    // 1. Get URL and Token
    console.log('Fetching D365 URL and Auth Token...');
    const d365Url = await getD365Url();
    const token = await getD365AuthToken();
    const metadataUrl = `${d365Url}/data/$metadata`;
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
if (!process.env.AZURE_TENANT_ID || !process.env.AZURE_CLIENT_ID || !process.env.KEYVAULT_URI) {
    console.error("ERROR: Required environment variables (AZURE_TENANT_ID, AZURE_CLIENT_ID, KEYVAULT_URI) are not set.");
    console.error("Please run 'source scripts/setup_local_env.sh' first.");
    process.exit(1);
}

generateClient();
