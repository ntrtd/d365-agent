import dotenv from 'dotenv';
import fs from 'node:fs';
import path from 'node:path';
import { pipeline } from 'node:stream/promises';

// Load environment variables from .env file in the project root
dotenv.config({ path: path.resolve(process.cwd(), '.env') });

const {
  AZURE_TENANT_ID,
  AZURE_CLIENT_ID,
  AZURE_CLIENT_SECRET,
  D365_BASE_URL,     // Base URL of your D365 env, e.g., https://your-org.operations.dynamics.com (used as resource for token)
  D365_METADATA_URL, // Full metadata URL, e.g., https://your-org.operations.dynamics.com/data/$metadata
  OUTPUT_FILE = 'd365_metadata_downloaded.xml', // Default output filename
} = process.env;

// Validate required environment variables
if (!AZURE_TENANT_ID || !AZURE_CLIENT_ID || !AZURE_CLIENT_SECRET || !D365_BASE_URL || !D365_METADATA_URL) {
  console.error('Error: Missing required environment variables in .env file.');
  console.error('Please ensure AZURE_TENANT_ID, AZURE_CLIENT_ID, AZURE_CLIENT_SECRET, D365_BASE_URL, and D365_METADATA_URL are set.');
  process.exit(1);
}

async function getAccessToken() {
  console.log(`Requesting access token for resource: ${D365_BASE_URL}`);
  const tokenUrl = `https://login.microsoftonline.com/${AZURE_TENANT_ID}/oauth2/token`;
  const params = new URLSearchParams();
  params.append('grant_type', 'client_credentials');
  params.append('client_id', AZURE_CLIENT_ID);
  params.append('client_secret', AZURE_CLIENT_SECRET);
  params.append('resource', D365_BASE_URL); // Use D365_BASE_URL as the resource for v1.0 endpoint

  try {
    const response = await fetch(tokenUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params,
    });

    if (!response.ok) {
      const errorData = await response.text();
      throw new Error(`Failed to get access token: ${response.status} ${response.statusText} - ${errorData}`);
    }

    const data = await response.json();
    console.log('Successfully obtained access token.');
    return data.access_token;
  } catch (error) {
    console.error('Error getting access token:', error);
    throw error; // Re-throw to stop the script
  }
}

async function downloadMetadata(token) {
  console.log(`Downloading metadata from: ${D365_METADATA_URL}`);
  console.log(`Output file: ${OUTPUT_FILE}`);

  try {
    const response = await fetch(D365_METADATA_URL, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/xml', // Specify we want XML
      },
    });

    if (!response.ok) {
       const errorText = await response.text();
      throw new Error(`Failed to download metadata: ${response.status} ${response.statusText} - ${errorText}`);
    }

    if (!response.body) {
        throw new Error('Response body is null.');
    }

    // Stream the response body to the output file
    const fileStream = fs.createWriteStream(OUTPUT_FILE);
    await pipeline(response.body, fileStream); // Use pipeline for robust stream handling

    console.log(`Successfully downloaded metadata to ${OUTPUT_FILE}`);

  } catch (error) {
    console.error('Error downloading metadata:', error);
    throw error; // Re-throw
  }
}

// Main execution
(async () => {
  try {
    const accessToken = await getAccessToken();
    await downloadMetadata(accessToken);
  } catch (error) {
    console.error('Script failed.');
    process.exit(1);
  }
})();
