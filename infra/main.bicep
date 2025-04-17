@description('The base name for resources.')
param baseName string = 'd365agent'

@description('The environment name (e.g., dev, test, prod).')
param environmentName string = 'dev'

@description('The Azure region for resource deployment.')
param location string = resourceGroup().location

// --- Variables ---
var uniqueSuffix = uniqueString(resourceGroup().id, baseName, environmentName) // Standard suffix for most resources
var storageUniqueSuffix = substring(uniqueString(resourceGroup().id, baseName, environmentName, 'storage'), 0, 13) // Potentially shorter/different suffix for storage if needed, ensure still unique enough. Kept 13 for now.
// Removed commonPrefix variable and resourceName function due to linter context errors
// Removed unused resourceGroupName variable

// --- Shared Resources ---

@description('Log Analytics Workspace for monitoring.')
resource logAnalyticsWorkspace 'Microsoft.OperationalInsights/workspaces@2022-10-01' = {
  name: '${baseName}-${environmentName}-log-${uniqueSuffix}' // Construct name directly
  location: location
  tags: { // Define tags inline
    environment: environmentName
    project: baseName
  }
  properties: {
    sku: {
      name: 'PerGB2018'
    }
    retentionInDays: 30
  }
}

@description('Application Insights instance for application monitoring.')
resource applicationInsights 'Microsoft.Insights/components@2020-02-02' = {
  name: '${baseName}-${environmentName}-appi-${uniqueSuffix}' // Construct name directly
  location: location
  tags: { // Define tags inline
    environment: environmentName
    project: baseName
  }
  kind: 'web'
  properties: {
    Application_Type: 'web'
    WorkspaceResourceId: logAnalyticsWorkspace.id
  }
}

@description('Azure Key Vault for storing secrets.')
resource keyVault 'Microsoft.KeyVault/vaults@2023-07-01' = {
  // Constructing a shorter name (max 24 chars), alphanumeric only, ensuring lowercase.
  name: toLower('${baseName}${environmentName}kv${substring(uniqueSuffix, 0, 10)}')
  location: location
  tags: { // Define tags inline
    environment: environmentName
    project: baseName
  }
  properties: {
    sku: {
      family: 'A'
      name: 'standard'
    }
    tenantId: subscription().tenantId
    enableRbacAuthorization: true // Use RBAC for permissions
    // accessPolicies: [] // Or configure accessPolicies if not using RBAC primarily
  }
}

// --- Container Apps Resources (MCP Hub) ---

@description('Azure Container Apps Environment (Managed Environment).')
resource containerAppsEnvironment 'Microsoft.App/managedEnvironments@2023-05-01' = {
  name: '${baseName}-${environmentName}-cae-${uniqueSuffix}' // Construct name directly
  location: location
  tags: { // Define tags inline
    environment: environmentName
    project: baseName
  }
  properties: {
    appLogsConfiguration: {
      destination: 'log-analytics'
      logAnalyticsConfiguration: {
        customerId: logAnalyticsWorkspace.properties.customerId
        sharedKey: logAnalyticsWorkspace.listKeys().primarySharedKey
      }
    }
  }
  // Consider VNet integration for production environments
  // properties: {
  //   vnetConfiguration: {
  //     internal: false // Set to true if only internal access is needed
  //     infrastructureSubnetId: '<your-infra-subnet-resource-id>'
  //     runtimeSubnetId: '<your-runtime-subnet-resource-id>'
  //   }
  // }
}

@description('Azure Container App for the MCP Hub service.')
resource mcpHubContainerApp 'Microsoft.App/containerApps@2023-05-01' = {
  // Constructing a shorter name (max 32 chars)
  name: toLower('${baseName}-${environmentName}-mcphub-${substring(uniqueSuffix, 0, 6)}')
  location: location
  tags: { // Define tags inline
    environment: environmentName
    project: baseName
  }
  identity: {
    type: 'SystemAssigned' // Enable Managed Identity
  }
  properties: {
    managedEnvironmentId: containerAppsEnvironment.id
    configuration: {
      ingress: {
        external: true // Expose externally
        targetPort: 8000 // Default port for FastAPI/MCP Hub example
        transport: 'auto' // Or 'http', 'tcp' for SSE
      }
      secrets: [
        // Example: Secrets from Key Vault can be referenced here later
        // {
        //   name: 'd365-client-secret'
        //   keyVaultUrl: '<keyvault-secret-uri>'
        //   identity: 'system'
        // }
      ]
      registries: [
        // Define container registry info here later (e.g., ACR)
      ]
      // Dapr configuration can be added here if needed
      // ActiveRevisionsMode: 'multiple' // Optional: For blue/green deployments
    }
    template: {
      containers: [
        {
          name: 'mcp-hub'
          image: 'mcr.microsoft.com/azuredocs/containerapps-helloworld:latest' // Placeholder image
          resources: {
            cpu: json('0.5') // Adjust as needed
            memory: '1.0Gi' // Adjust as needed
          }
          env: [
            {
              name: 'APPINSIGHTS_INSTRUMENTATIONKEY'
              value: applicationInsights.properties.InstrumentationKey
            }
            {
              name: 'APPLICATIONINSIGHTS_CONNECTION_STRING'
              value: applicationInsights.properties.ConnectionString
            }
            // Add other environment variables (e.g., Key Vault URI, D365 URLs)
            {
              name: 'KEYVAULT_URI'
              value: keyVault.properties.vaultUri
            }
            // Example: Referencing a Key Vault secret defined above
            // {
            //   name: 'D365_CLIENT_SECRET'
            //   secretRef: 'd365-client-secret'
            // }
          ]
        }
      ]
      scale: {
        minReplicas: 1 // Scale to 0 possible if allowed by CAE SKU & config
        maxReplicas: 3 // Adjust as needed
        // Add KEDA scaling rules later (e.g., based on HTTP traffic or Service Bus queue length)
      }
    }
  }
}

// --- Service Bus ---

@description('Azure Service Bus Namespace for messaging.')
resource serviceBusNamespace 'Microsoft.ServiceBus/namespaces@2022-10-01-preview' = {
  name: '${baseName}-${environmentName}-sb-${uniqueSuffix}' // Construct name directly
  location: location
  tags: { // Define tags inline
    environment: environmentName
    project: baseName
  }
  sku: {
    name: 'Standard' // Or 'Premium' for VNet integration, larger messages etc.
  }
  properties: {}
}

// Queues/Topics can be defined as sub-resources or separately later
// resource incomingPoQueue 'Microsoft.ServiceBus/namespaces/queues@2022-10-01-preview' = {
//   parent: serviceBusNamespace
//   name: 'incoming-po'
//   properties: {
//     // Configure properties like lock duration, TTL, dead-lettering etc.
//   }
// }

// --- Storage Account (Function App & Blobs) ---

@description('Azure Storage Account for Azure Functions state and Blob storage.')
resource storageAccount 'Microsoft.Storage/storageAccounts@2023-01-01' = {
  // Constructing a shorter name (max 24 chars) and ensuring lowercase. Removed environmentName component.
  name: toLower('${baseName}st${storageUniqueSuffix}')
  location: location
  tags: { // Define tags inline
    environment: environmentName
    project: baseName
  }
  sku: {
    name: 'Standard_LRS' // Or 'Standard_GRS', 'Premium_LRS' etc.
  }
  kind: 'StorageV2' // General-purpose v2
  properties: {
    // Enable hierarchical namespace for Data Lake Gen2 capabilities if needed
    // isHnsEnabled: true
    accessTier: 'Hot'
    minimumTlsVersion: 'TLS1_2'
    allowBlobPublicAccess: false
    supportsHttpsTrafficOnly: true
  }
}

// Container for PO PDFs (example)
resource blobServices 'Microsoft.Storage/storageAccounts/blobServices@2023-01-01' = {
  parent: storageAccount
  name: 'default'
}

resource poContainer 'Microsoft.Storage/storageAccounts/blobServices/containers@2023-01-01' = {
  parent: blobServices
  name: 'po-documents'
  properties: {
    publicAccess: 'None'
  }
}

// --- Azure Function App (Document Parser) ---

@description('App Service Plan for the Azure Function App.')
resource functionAppPlan 'Microsoft.Web/serverfarms@2022-09-01' = {
  name: '${baseName}-${environmentName}-plan-func-${uniqueSuffix}' // Construct name directly
  location: location
  tags: { // Define tags inline
    environment: environmentName
    project: baseName
  }
  kind: 'functionapp'
  sku: {
    name: 'Y1' // Dynamic Consumption plan
    tier: 'Dynamic'
  }
  properties: {
    reserved: true // Required for Linux Consumption plan
  }
}

@description('Azure Function App for document parsing.')
resource documentParserFunctionApp 'Microsoft.Web/sites@2022-09-01' = {
  name: '${baseName}-${environmentName}-func-docparser-${uniqueSuffix}' // Construct name directly
  location: location
  tags: { // Define tags inline
    environment: environmentName
    project: baseName
  }
  kind: 'functionapp,linux' // Linux Consumption plan
  identity: {
    type: 'SystemAssigned' // Enable Managed Identity
  }
  properties: {
    serverFarmId: functionAppPlan.id
    siteConfig: {
      linuxFxVersion: 'Python|3.11' // Specify runtime, adjust as needed
      appSettings: [
        {
          name: 'AzureWebJobsStorage' // Connection string for function state
          value: 'DefaultEndpointsProtocol=https;AccountName=${storageAccount.name};AccountKey=${storageAccount.listKeys().keys[0].value};EndpointSuffix=${environment().suffixes.storage}'
        }
        {
          name: 'WEBSITE_CONTENTAZUREFILECONNECTIONSTRING' // Connection string for deployment package
          value: 'DefaultEndpointsProtocol=https;AccountName=${storageAccount.name};AccountKey=${storageAccount.listKeys().keys[0].value};EndpointSuffix=${environment().suffixes.storage}'
        }
        {
          name: 'WEBSITE_CONTENTSHARE' // File share name
          value: toLower('${baseName}-${environmentName}-func-docparser-${uniqueSuffix}') // Construct name directly
        }
        {
          name: 'FUNCTIONS_EXTENSION_VERSION'
          value: '~4'
        }
        {
          name: 'FUNCTIONS_WORKER_RUNTIME'
          value: 'python'
        }
        {
          name: 'APPINSIGHTS_INSTRUMENTATIONKEY'
          value: applicationInsights.properties.InstrumentationKey
        }
        {
          name: 'APPLICATIONINSIGHTS_CONNECTION_STRING'
          value: applicationInsights.properties.ConnectionString
        }
        // Add connection strings/endpoints for Service Bus, Document Intelligence, Key Vault URI etc.
        {
          name: 'KEYVAULT_URI'
          value: keyVault.properties.vaultUri
        }
        {
          name: 'SERVICEBUS_CONNECTION_STRING' // Consider MSI for Service Bus connection instead
          value: listKeys('${serviceBusNamespace.id}/AuthorizationRules/RootManageSharedAccessKey', serviceBusNamespace.apiVersion).primaryConnectionString
        }
        // Document Intelligence Endpoint/Key (store key in Key Vault ideally)
        // { name: 'DOC_INTELLIGENCE_ENDPOINT', value: '<your-doc-intelligence-endpoint>'}
        // { name: 'DOC_INTELLIGENCE_KEY', value: '<reference-key-vault-secret>'}
      ]
      ftpsState: 'FtpsOnly'
      minTlsVersion: '1.2'
    }
    httpsOnly: true
    reserved: true // Required for Linux Consumption plan
  }
}

// --- Azure AI Resources ---
// Note: Deployment might require specific role assignments (e.g., Contributor) and provider registrations.
// API versions are previews and might change.

@description('Azure AI Hub workspace.')
resource aiHub 'Microsoft.MachineLearningServices/workspaces@2023-08-01-preview' = {
  name: '${baseName}-${environmentName}-aihub-${uniqueSuffix}' // Construct name directly
  location: location
  tags: { // Define tags inline
    environment: environmentName
    project: baseName
  }
  kind: 'Hub' // Specify Hub kind
  identity: { type: 'SystemAssigned' }
  sku: { name: 'Basic' } // Use 'Basic' or 'Enterprise' based on needs
  properties: {
    // Link shared resources
    storageAccount: storageAccount.id
    keyVault: keyVault.id
    applicationInsights: applicationInsights.id
    // description: 'AI Hub for D365 Agent project'
    friendlyName: '${baseName}-${environmentName}-aihub'
    // hbiWorkspace: false // Set true if dealing with High Business Impact data
  }
}

@description('Azure AI Project workspace linked to the Hub.')
resource aiProject 'Microsoft.MachineLearningServices/workspaces@2023-08-01-preview' = {
  name: '${baseName}-${environmentName}-aiproj-${uniqueSuffix}' // Construct name directly
  location: location
  tags: { // Define tags inline
    environment: environmentName
    project: baseName
  }
  kind: 'Project' // Specify Project kind
  identity: { type: 'SystemAssigned' }
  // Project SKU is inherited from the Hub
  properties: {
    // Link to the AI Hub
    hubResourceId: aiHub.id
    // description: 'AI Project for D365 Agent'
    friendlyName: '${baseName}-${environmentName}-aiproj'
    // If not inheriting all associated resources from Hub, specify them:
    // storageAccount: storageAccount.id
    // keyVault: keyVault.id
    // applicationInsights: applicationInsights.id
  }
}

// --- RBAC Assignments (Examples) ---
// Grant MCP Hub's Managed Identity access to Key Vault secrets
// resource mcpHubKvReader 'Microsoft.Authorization/roleAssignments@2022-04-01' = {
//   scope: keyVault
//   name: guid(keyVault.id, mcpHubContainerApp.id, 'kv-secrets-user') // Unique name for assignment
//   properties: {
//     roleDefinitionId: subscriptionResourceId('Microsoft.Authorization/roleDefinitions', '4633458b-17de-408a-b874-0445c86b69e6') // Key Vault Secrets User role
//     principalId: mcpHubContainerApp.identity.principalId
//     principalType: 'ServicePrincipal'
//   }
// }

// Grant Function App's Managed Identity access to Key Vault secrets
// resource funcKvReader 'Microsoft.Authorization/roleAssignments@2022-04-01' = {
//   scope: keyVault
//   name: guid(keyVault.id, documentParserFunctionApp.id, 'kv-secrets-user')
//   properties: {
//     roleDefinitionId: subscriptionResourceId('Microsoft.Authorization/roleDefinitions', '4633458b-17de-408a-b874-0445c86b69e6')
//     principalId: documentParserFunctionApp.identity.principalId
//     principalType: 'ServicePrincipal'
//   }
// }

// Grant Function App's Managed Identity access to Service Bus (e.g., Data Sender/Receiver)
// resource funcSbSender 'Microsoft.Authorization/roleAssignments@2022-04-01' = {
//   scope: serviceBusNamespace
//   name: guid(serviceBusNamespace.id, documentParserFunctionApp.id, 'sb-data-sender')
//   properties: {
//     roleDefinitionId: subscriptionResourceId('Microsoft.Authorization/roleDefinitions', '69a216fc-b8fb-44d8-8227-8060230ac736') // Azure Service Bus Data Sender
//     principalId: documentParserFunctionApp.identity.principalId
//     principalType: 'ServicePrincipal'
//   }
// }

// --- Outputs ---

output aiHubName string = aiHub.name
output aiProjectName string = aiProject.name

output mcpHubContainerAppName string = mcpHubContainerApp.name
output mcpHubContainerAppHostname string = mcpHubContainerApp.properties.configuration.ingress.fqdn
output keyVaultName string = keyVault.name
output keyVaultUri string = keyVault.properties.vaultUri
output logAnalyticsWorkspaceId string = logAnalyticsWorkspace.id
output applicationInsightsInstrumentationKey string = applicationInsights.properties.InstrumentationKey
output serviceBusNamespaceName string = serviceBusNamespace.name
output storageAccountName string = storageAccount.name
output documentParserFunctionAppName string = documentParserFunctionApp.name
