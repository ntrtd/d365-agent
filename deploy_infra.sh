#!/bin/bash

# Exit script on any error
set -e

# --- Configuration ---
RESOURCE_GROUP="d365-mcp"
LOCATION="westeurope" # <-- UPDATE THIS to your preferred Azure region
BASE_NAME="d365agent"
ENVIRONMENT_NAME="dev"
TEMPLATE_FILE="infra/main.bicep"

# --- Login & Subscription (Optional - Uncomment if needed) ---
# echo "Logging in to Azure..."
# az login
# echo "Setting subscription..."
# az account set --subscription "<YourSubscriptionId>" # <-- UPDATE THIS if you have multiple subscriptions

# --- Deployment Steps ---
echo "Ensuring resource group '$RESOURCE_GROUP' exists in location '$LOCATION'..."
az group create --name "$RESOURCE_GROUP" --location "$LOCATION" --output none

echo "Starting Bicep deployment to resource group '$RESOURCE_GROUP'..."
az deployment group create \
  --resource-group "$RESOURCE_GROUP" \
  --template-file "$TEMPLATE_FILE" \
  --parameters environmentName="$ENVIRONMENT_NAME" baseName="$BASE_NAME" \
  --output none # Use --output json for detailed output

echo "Infrastructure deployment script completed."

# --- Make Executable ---
# Run 'chmod +x deploy_infra.sh' in your terminal to make this script executable.
# Then run './deploy_infra.sh' to execute it.
