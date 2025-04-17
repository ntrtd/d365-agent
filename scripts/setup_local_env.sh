#!/bin/bash

# Script to set up environment variables for local development and testing.
# Usage: source scripts/setup_local_env.sh
# (Run using 'source' or '.' so variables are exported to your current shell)

echo "Setting up local development environment variables..."

# --- Configuration - **UPDATE PLACEHOLDERS** ---

# Azure AD App Registration Details (From your previous input)
export AZURE_TENANT_ID="440db723-e133-4e07-8b3d-b37a469096a9"
export AZURE_CLIENT_ID="1accea65-7cb7-452c-b439-3f581442ef89"
# !! IMPORTANT: Set your client secret securely.
# Option 1: Set it manually in your shell BEFORE running this script:
#   export AZURE_CLIENT_SECRET='<Your_Actual_Client_Secret>'
# Option 2: Uncomment and set it here (NOT RECOMMENDED FOR COMMITING)
# export AZURE_CLIENT_SECRET='<Your_Actual_Client_Secret_Value_Here>'

# Key Vault URI (Retrieve from Azure deployment output if needed)
# Example: export KEYVAULT_URI="https://d365agentdevkv........vault.azure.net/"
if [ -z "$KEYVAULT_URI" ]; then
    echo "WARNING: KEYVAULT_URI is not set. Please set it manually."
    # Replace with your actual Key Vault URI:
    # export KEYVAULT_URI='<Your_Key_Vault_URI>'
fi

# D365 Metadata URL (From your previous input)
export D365_METADATA_URL="https://sus019b165923ff1087d8devaos.cloudax.eu.dynamics.com/data/\$metadata"

# Secret Names (Should match config.ts and Key Vault entries)
export D365_URL_SECRET_NAME="d365-url"
export AZURE_CLIENT_SECRET_NAME="d365-app-client-secret"

# MCP Transport Mode (Optional - for index.ts logic)
# export MCP_TRANSPORT="http" # or "stdio" (default)

# --- Verification ---
echo "Verifying required variables..."

REQUIRED_VARS=("AZURE_TENANT_ID" "AZURE_CLIENT_ID" "KEYVAULT_URI" "D365_METADATA_URL")
MISSING_VARS=0

for VAR_NAME in "${REQUIRED_VARS[@]}"; do
    if [ -z "${!VAR_NAME}" ]; then
        echo "ERROR: Required environment variable $VAR_NAME is not set."
        MISSING_VARS=1
    fi
done

# Check client secret specifically, as it might be set manually outside this script
if [ -z "$AZURE_CLIENT_SECRET" ]; then
    echo "WARNING: AZURE_CLIENT_SECRET is not set. Ensure it is set manually if needed for local auth."
    # You might not need AZURE_CLIENT_SECRET locally if you use `az login`
    # ManagedIdentityCredential and ClientSecretCredential might pick up CLI context.
fi

if [ $MISSING_VARS -ne 0 ]; then
    echo "Please set the missing variables above and re-run using 'source scripts/setup_local_env.sh'"
    return 1 # Use return instead of exit for sourced scripts
fi

echo "Local environment variables set/verified."
echo "You can now run commands like 'npm run generate:odata' (in src/mcp_hub) or 'npm run dev' (in src/mcp_hub)."
