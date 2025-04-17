#!/bin/bash

# Exit script on any error
set -e

# --- Configuration ---
RESOURCE_GROUP="d365-mcp"
LOCATION="westeurope" # <-- UPDATE THIS to your preferred Azure region
BASE_NAME="d365agent"
ENVIRONMENT_NAME="dev"
TEMPLATE_FILE="infra/main.bicep"

D365_URL="https://sus019b165923ff1087d8devaos.cloudax.eu.dynamics.com"
KEYVAULT_SECRET_NAME_URL="d365-url"
KEYVAULT_SECRET_NAME_APP_SECRET="d365-app-client-secret"

# --- Check for Client Secret Environment Variable ---
if [ -z "$D365_APP_CLIENT_SECRET_VALUE" ]; then
  echo "ERROR: Environment variable D365_APP_CLIENT_SECRET_VALUE is not set."
  echo "Please set it before running the script:"
  echo "export D365_APP_CLIENT_SECRET_VALUE='<your-client-secret>'"
  exit 1
fi

# --- Login & Subscription (Optional - Uncomment if needed) ---
# echo "Logging in to Azure..."
# az login
# echo "Setting subscription..."
# az account set --subscription "<YourSubscriptionId>" # <-- UPDATE THIS if you have multiple subscriptions

# --- Deployment Steps ---
echo "Ensuring resource group '$RESOURCE_GROUP' exists in location '$LOCATION'..."
az group create --name "$RESOURCE_GROUP" --location "$LOCATION" --output none

echo "Starting Bicep deployment to resource group '$RESOURCE_GROUP'..."
# Deploy and capture outputs
deploymentOutput=$(az deployment group create \
  --resource-group "$RESOURCE_GROUP" \
  --template-file "$TEMPLATE_FILE" \
  --parameters environmentName="$ENVIRONMENT_NAME" baseName="$BASE_NAME")
  # --output json # Use json output to parse values

echo "Infrastructure deployment completed."

# --- Post-Deployment Configuration ---

echo "Retrieving deployment outputs..."
KEYVAULT_NAME=$(echo "$deploymentOutput" | jq -r '.properties.outputs.keyVaultName.value')
MCP_HUB_CONTAINER_APP_NAME=$(echo "$deploymentOutput" | jq -r '.properties.outputs.mcpHubContainerAppName.value')

if [ -z "$KEYVAULT_NAME" ] || [ "$KEYVAULT_NAME" == "null" ]; then
  echo "ERROR: Could not retrieve Key Vault name from deployment output."
  exit 1
fi
if [ -z "$MCP_HUB_CONTAINER_APP_NAME" ] || [ "$MCP_HUB_CONTAINER_APP_NAME" == "null" ]; then
  echo "ERROR: Could not retrieve MCP Hub Container App name from deployment output."
  exit 1
fi

echo "Setting secrets in Key Vault '$KEYVAULT_NAME'..."
az keyvault secret set \
  --vault-name "$KEYVAULT_NAME" \
  --name "$KEYVAULT_SECRET_NAME_URL" \
  --value "$D365_URL" \
  --output none

az keyvault secret set \
  --vault-name "$KEYVAULT_NAME" \
  --name "$KEYVAULT_SECRET_NAME_APP_SECRET" \
  --value "$D365_APP_CLIENT_SECRET_VALUE" \
  --output none

echo "Secrets set."

echo "Assigning Key Vault access role to MCP Hub Managed Identity..."
# Get Principal ID of the Container App's Managed Identity
MCP_HUB_PRINCIPAL_ID=$(az containerapp show --name "$MCP_HUB_CONTAINER_APP_NAME" --resource-group "$RESOURCE_GROUP" --query identity.principalId -o tsv)

if [ -z "$MCP_HUB_PRINCIPAL_ID" ] || [ "$MCP_HUB_PRINCIPAL_ID" == "null" ]; then
  echo "ERROR: Could not retrieve Principal ID for MCP Hub Container App '$MCP_HUB_CONTAINER_APP_NAME'."
  exit 1
fi

# Get Key Vault Resource ID
KEYVAULT_ID=$(az keyvault show --name "$KEYVAULT_NAME" --query id -o tsv)

# Assign 'Key Vault Secrets User' role
# Check if assignment already exists first to avoid errors on re-runs
EXISTING_ASSIGNMENT=$(az role assignment list --assignee "$MCP_HUB_PRINCIPAL_ID" --role "Key Vault Secrets User" --scope "$KEYVAULT_ID" --query "[].id" -o tsv)
if [ -z "$EXISTING_ASSIGNMENT" ]; then
  echo "Assigning 'Key Vault Secrets User' role to MCP Hub Managed Identity ($MCP_HUB_PRINCIPAL_ID) on Key Vault ($KEYVAULT_ID)..."
  az role assignment create \
    --assignee "$MCP_HUB_PRINCIPAL_ID" \
    --role "Key Vault Secrets User" \
    --scope "$KEYVAULT_ID" \
    --output none
  echo "Role assigned."
else
  echo "Role 'Key Vault Secrets User' already assigned to MCP Hub Managed Identity."
fi

echo "Script completed successfully."

# --- Make Executable ---
# Run 'chmod +x scripts/deploy_infra.sh' in your terminal to make this script executable.
# Then run 'export D365_APP_CLIENT_SECRET_VALUE='<your-secret>' && ./scripts/deploy_infra.sh' to execute it.
