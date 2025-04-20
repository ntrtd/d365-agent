import { ClientSecretCredential, ManagedIdentityCredential } from "@azure/identity";
import { SecretClient } from "@azure/keyvault-secrets";
import { config } from "./config"; // Imports config loaded with dotenv

// --- Reusable Credential and Client Instances ---
// Managed Identity is primarily for Key Vault access in deployed envs
let kvCredential: ManagedIdentityCredential | null = null;
let secretClient: SecretClient | null = null;
// Client Secret Credential for D365 access (used locally and potentially deployed)
let d365Credential: ClientSecretCredential | null = null;

let d365Url: string | null = config.d365BaseUrl; // Initialize from config/env first
let d365TokenScope: string | null = d365Url ? `${d365Url}/.default` : null;

// --- Key Vault Access (Fallback for URL if needed) ---
function getKvCredential(): ManagedIdentityCredential | null { // Allow null return
  // Only initialize if Key Vault URI is configured (likely in deployed env)
  if (!kvCredential && config.keyVaultUri) {
    console.log("Attempting to initialize ManagedIdentityCredential for Key Vault access...");
    try {
      kvCredential = new ManagedIdentityCredential();
      console.log("ManagedIdentityCredential initialized.");
    } catch (error: any) {
      console.warn(`ManagedIdentityCredential initialization failed (this is expected locally): ${error.message}`);
      // Prevent retries if it fails once
      kvCredential = null; // Ensure it stays null if failed
    }
  }
  if (!kvCredential) {
      // Provide a dummy or null implementation if Managed Identity is unavailable
      // or throw if KV access is strictly required even after checking config.keyVaultUri
      console.warn("ManagedIdentityCredential not available.");
      // Depending on strictness, you might throw here or return null/undefined
      // For now, let's allow continuing, assuming URL might come from config
  }
  return kvCredential;
}

function getSecretClient(): SecretClient | null {
  if (!secretClient && config.keyVaultUri) {
    const cred = getKvCredential();
    if (cred) { // Only create client if credential was successful
        console.log(`Initializing SecretClient for Key Vault: ${config.keyVaultUri}`);
        secretClient = new SecretClient(config.keyVaultUri, cred);
        console.log("SecretClient initialized.");
    } else {
        console.warn("SecretClient not initialized because Key Vault credential failed.");
    }
  }
  return secretClient;
}

// --- D365 URL Retrieval ---
/**
 * Retrieves the D365 base URL, prioritizing environment variable, then Key Vault.
 * @returns The Dynamics 365 base URL.
 */
export async function getD365Url(): Promise<string> {
  if (d365Url) {
    return d365Url; // Return cached/env value
  }

  console.log(`D365_BASE_URL not found in environment, attempting Key Vault fallback...`);
  const client = getSecretClient();
  if (client && config.d365UrlSecretName) {
    try {
      console.log(`Fetching secret '${config.d365UrlSecretName}' from Key Vault...`);
      const secret = await client.getSecret(config.d365UrlSecretName);
      if (secret.value) {
        // Remove trailing slash if present
        d365Url = secret.value.endsWith('/') ? secret.value.slice(0, -1) : secret.value;
        console.log(`D365 URL retrieved from Key Vault: ${d365Url}`);
        d365TokenScope = `${d365Url}/.default`; // Update scope
        return d365Url;
      }
    } catch (error: any) {
      console.error(`Failed to retrieve D365 URL from Key Vault fallback: ${error.message}`);
      // Fall through to error below
    }
  } else {
      console.warn("Key Vault client not available or D365_URL_SECRET_NAME not set; cannot fetch URL from Key Vault.");
  }

  throw new Error("Failed to determine D365 Base URL from environment (D365_BASE_URL) or Key Vault.");
}

// --- D365 Authentication Token ---
/**
 * Gets an OAuth 2.0 access token for Dynamics 365 using Client Secret Credential from config.
 * @returns The access token string.
 */
export async function getD365AuthToken(): Promise<string> {
  // Ensure URL and scope are initialized (prioritizes env var via getD365Url)
  const targetUrl = await getD365Url(); // Gets URL (from env or KV)
  if (!d365TokenScope) {
      d365TokenScope = `${targetUrl}/.default`; // Ensure scope is set based on resolved URL
  }

  if (!config.tenantId || !config.clientId || !config.clientSecret) {
    throw new Error("Missing required Azure AD credentials in configuration (AZURE_TENANT_ID, AZURE_CLIENT_ID, AZURE_CLIENT_SECRET). Check .env file.");
  }

  // Initialize credential if not already done
  if (!d365Credential) {
      console.log("Initializing ClientSecretCredential for D365 access using config...");
      d365Credential = new ClientSecretCredential(config.tenantId, config.clientId, config.clientSecret);
      console.log("ClientSecretCredential initialized.");
  }

  try {
    console.log(`Requesting D365 token with scope: ${d365TokenScope}...`);
    const tokenResponse = await d365Credential.getToken(d365TokenScope);
    if (!tokenResponse?.token) {
      throw new Error("Failed to acquire D365 token: Token response was empty.");
    }
    console.log("D365 token acquired successfully using Client Secret from config.");
    return tokenResponse.token;
  } catch (error: any) {
    console.error("Failed to acquire D365 token using Client Secret:", error.message);
    throw new Error(`Failed to acquire D365 token using Client Secret. Check .env file values and App Registration permissions. Error: ${error.message}`);
  }
}
