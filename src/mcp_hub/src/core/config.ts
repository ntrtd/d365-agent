import dotenv from 'dotenv'; // Added dotenv import
import path from 'path'; // Added path import
// Load .env file from the project root (two levels up from core)
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

// Simple configuration loader from environment variables
export const config = {
  // Azure AD App Registration Details (used for local ClientSecretCredential)
  tenantId: process.env.AZURE_TENANT_ID || "",
  clientId: process.env.AZURE_CLIENT_ID || "",
  clientSecret: process.env.AZURE_CLIENT_SECRET || "", // Read directly for local auth

  // Key Vault URI (used by Managed Identity in deployed env)
  keyVaultUri: process.env.KEYVAULT_URI || "",

  // D365 Base URL (needed for token scope and potentially API calls)
  d365BaseUrl: process.env.D365_BASE_URL || "",

  // D365 Metadata URL (used by generation script)
  d365MetadataUrl: process.env.D365_METADATA_URL || "",

  // Secret Names (used by Managed Identity in deployed env)
  d365UrlSecretName: process.env.D365_URL_SECRET_NAME || "d365-url",
  clientSecretName: process.env.AZURE_CLIENT_SECRET_NAME || "d365-app-client-secret",

  // Add other config variables as needed
};

// Basic validation for values needed at runtime (adjust as needed)
if (!config.tenantId || !config.clientId) {
  console.warn(`WARNING: Key Azure AD configuration variables are missing: AZURE_TENANT_ID, AZURE_CLIENT_ID`);
}
if (!config.d365BaseUrl) {
  console.warn(`WARNING: D365_BASE_URL environment variable is missing.`);
}
