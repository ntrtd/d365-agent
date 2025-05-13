# Guide: Connecting to Dynamics 365 via the D365 MCP Server

This guide explains how the Dynamics 365 AI Agent system, specifically the **Application Orchestration Layer** (`d365-agent-orchestrator`), interacts with your Dynamics 365 environment. This interaction is facilitated by the **D365 MCP Server** (`d365-agent-mcpserver-dotnet`), which uses a generated .NET OData client.

## Architecture Overview

1.  **Application Orchestration Layer (`d365-agent-orchestrator` - TypeScript/Node.js):**
    *   Hosts the CopilotKit Runtime and LangGraph agents (TypeScript).
    *   Uses the **`d365-agent-mcpclient-ts`** (TypeScript MCP Client library) to make requests to the D365 MCP Server.
    *   LangGraph agents or simpler CopilotKit actions within this layer decide which D365 MCP tool to call and with what parameters.

2.  **D365 MCP Server (`d365-agent-mcpserver-dotnet` - .NET Core):**
    *   Receives MCP requests from the `d365-agent-mcpclient-ts`.
    *   Implements MCP tools (e.g., `getCustomerByName`, `simulateInvoicePostToD365`).
    *   Uses the **`d365-agent-odataclient-dotnet`** (a generated C# OData client) to perform the actual data operations (queries, creates, updates, deletes) against the Dynamics 365 OData API.
    *   Handles D365 authentication and OData communication details.

3.  **D365 OData Client (`d365-agent-odataclient-dotnet` - C# Library):**
    *   Generated from your D365 instance's OData metadata.
    *   Provides type-safe methods to interact with D365 entities.
    *   Used exclusively by the `d365-agent-mcpserver-dotnet`.

## 1. Implementing D365 MCP Tools in `d365-agent-mcpserver-dotnet`

The `d365-agent-mcpserver-dotnet` is where you define MCP tools that encapsulate D365 operations. These tools use the generated .NET OData client.

### a. Consuming the .NET OData Client Package

Ensure your `d365-agent-mcpserver-dotnet` project references the NuGet package produced by the `d365-agent-odataclient-dotnet` project.

### b. Authentication and `DataServiceContext` Setup

The MCP Server will need to instantiate the generated `DataServiceContext` (from the .NET OData client) and configure it for authentication (typically OAuth 2.0 Client Credentials flow). This usually involves handling the `SendingRequest2` event to attach an authorization header.

```csharp
// Example within d365-agent-mcpserver-dotnet (simplified)
// YourProject.GeneratedODataClient refers to the namespace from d365-agent-odataclient-dotnet
using YourProject.GeneratedODataClient; 
using Microsoft.OData.Client;
// ... other necessary usings for MCP SDK, configuration, auth helpers ...

public class D365Service // A helper service within the MCP Server
{
    private readonly IConfiguration _configuration; // For D365 URL, App Reg details
    private readonly IHttpClientFactory _httpClientFactory; // For MSAL

    public D365Service(IConfiguration configuration, IHttpClientFactory httpClientFactory)
    {
        _configuration = configuration;
        _httpClientFactory = httpClientFactory;
    }

    public async Task<YourD365DataContext> CreateD365ContextAsync(string companyId = null)
    {
        // Fetch D365 URL, client ID, secret, tenant ID from configuration
        var d365Url = _configuration["D365_URL"]; // e.g., https://yourorg.operations.dynamics.com
        var clientId = _configuration["D365_CLIENT_ID"];
        // ... fetch other credentials securely (e.g., from Key Vault)

        // Ensure URL includes /data endpoint
        Uri serviceRoot = new Uri(d365Url.EndsWith("/data") ? d365Url : $"{d365Url.TrimEnd('/')}/data");
        
        var context = new YourD365DataContext(serviceRoot); // Replace YourD365DataContext with your actual generated context class name

        context.SendingRequest2 += async (sender, eventArgs) => {
            // Implement robust token acquisition and caching using MSAL.NET
            string accessToken = await GetOAuthTokenAsync(d365Url, clientId, clientSecret, tenantId);
            eventArgs.RequestMessage.SetHeader("Authorization", $"Bearer {accessToken}");
            if (!string.IsNullOrEmpty(companyId)) {
                 // For D365 FO, company can be set via query string or header depending on API version
                 // This is a simplified example; actual implementation might vary
                if (eventArgs.RequestMessage.Url.Query.Contains("cross-company=true")) {
                    // If cross-company is already true, do nothing or ensure company is part of the filter
                } else if (!eventArgs.RequestMessage.Url.AbsoluteUri.Contains($"({companyId})")) { // Avoid adding if already part of key
                     eventArgs.RequestMessage.SetHeader("msdyn_company", companyId); // Or use query param if appropriate
                }
            }
        };
        return context;
    }

    private async Task<string> GetOAuthTokenAsync(string resource, string clientId, string clientSecret, string tenantId)
    {
        // Simplified: Use MSAL.NET to acquire a token for the D365 resource
        // IConfidentialClientApplication app = ConfidentialClientApplicationBuilder
        //     .Create(clientId)
        //     .WithClientSecret(clientSecret)
        //     .WithAuthority(new Uri($"https://login.microsoftonline.com/{tenantId}"))
        //     .Build();
        // string[] scopes = new string[] { $"{resource}/.default" };
        // AuthenticationResult result = await app.AcquireTokenForClient(scopes).ExecuteAsync();
        // return result.AccessToken;
        return "DUMMY_ACCESS_TOKEN"; // Placeholder
    }
}

// Example MCP Tool implementation in d365-agent-mcpserver-dotnet
// This would use the .NET MCP SDK attributes and structures
public static class CustomerTools
{
    // D365Service would be injected or accessible
    // [McpTool("getCustomerByName")]
    public static async Task<McpResponse> GetCustomerByName(McpRequest request, D365Service d365Service)
    {
        var customerName = request.Parameters["customerName"].ToString();
        var company = request.Parameters["company"]?.ToString(); // Optional company

        var context = await d365Service.CreateD365ContextAsync(company);
        
        // Example using LINQ with the generated OData client
        var query = context.CustomersV3 // Assuming an entity set named CustomersV3
            .AddQueryOption("$filter", $"Name eq '{Uri.EscapeDataString(customerName)}'")
            .AddQueryOption("$top", "1");

        var customers = await Task.Factory.FromAsync(query.BeginExecute(null, null), (ar) => query.EndExecute(ar));
        var customer = customers.FirstOrDefault();

        if (customer == null) {
            return new McpResponse { Content = [{ Type = "text", Text = $"Customer '{customerName}' not found." }] };
        }
        // Return McpResponse with customer data
        return new McpResponse { Content = [{ Type = "json", Data = customer }] }; // Simplified
    }
}
```

### c. Performing Operations (Querying, Creating, Updating, Deleting)
Within your MCP tool implementations in `d365-agent-mcpserver-dotnet`, you use the instantiated `DataServiceContext` (e.g., `YourD365DataContext`) and LINQ queries or `AddObject`, `UpdateObject`, `DeleteObject` methods, followed by `SaveChangesAsync`. Refer to Microsoft's OData Client documentation for .NET for detailed examples.

## 2. Calling D365 MCP Tools from `d365-agent-orchestrator` (LangGraph Agent)

The LangGraph agents (TypeScript) running in the `d365-agent-orchestrator` will use the `d365-agent-mcpclient-ts` library to call the tools exposed by the `d365-agent-mcpserver-dotnet`.

```typescript
// Conceptual code within a LangGraph node in d365-agent-orchestrator/src/agents/poAgent.ts
import { McpClient, McpRequest, McpResponse } from "@d365-agent/mcpclient-ts"; // Adjust import path

// Assume mcpClient is initialized (e.g., in the agent's constructor or passed in)
// const mcpClient = new McpClient({ baseUrl: "http://localhost:PORT_OF_DOTNET_MCP_SERVER" });

async function validatePoDataWithD365(extractedPoData: any, mcpClient: McpClient): Promise<any> {
  try {
    const request: McpRequest = {
      toolName: "simulateInvoicePostToD365", // Tool defined in d365-agent-mcpserver-dotnet
      parameters: {
        invoiceData: extractedPoData 
        // any other parameters the MCP tool expects
      }
    };
    const response: McpResponse = await mcpClient.executeTool(request.toolName, request.parameters);

    if (response.isError || (response.content && response.content.some(c => c.type === 'error'))) {
      // Handle error reported by MCP tool
      const errorContent = response.content?.find(c => c.type === 'error' || c.type === 'text');
      throw new Error(`D365 validation failed: ${errorContent?.text || 'Unknown error'}`);
    }
    
    // Process successful response
    // response.content might contain validation results or confirmed data
    return { success: true, validationDetails: response.content };

  } catch (error) {
    console.error("Error calling D365 MCP tool 'simulateInvoicePostToD365':", error);
    throw error; // Re-throw or handle as appropriate for the LangGraph flow
  }
}
```

## Error Handling
*   **D365 MCP Server (`.NET`):** Tool implementations should catch exceptions from the OData client (e.g., `DataServiceQueryException`, `DataServiceClientException`) and return structured `McpResponse` objects with `isError: true` and informative error content.
*   **Application Orchestration Layer (TypeScript LangGraph):** When using `d365-agent-mcpclient-ts`, check `response.isError` and handle errors appropriately within the LangGraph nodes to manage the state machine's flow (e.g., transition to an error state, retry, or request human intervention).

This layered approach ensures that D365 interactions are robustly handled by the .NET OData client within a dedicated MCP server, while the TypeScript-based orchestration layer can interact with it in a standardized way.
