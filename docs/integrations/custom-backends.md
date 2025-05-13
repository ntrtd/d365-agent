# Integration: Custom Backends & Headless Services

This guide discusses how to integrate Dynamics 365 AI Agent capabilities into custom backend applications, services, or daemons for non-interactive, server-to-server automation, or as specialized components within the overall architecture. The primary interaction point for such services will typically be the **`d365-agent-orchestrator`**.

## Architectural Context

*   **`d365-agent-orchestrator`:** The central hub hosting CopilotKit Runtime and LangGraph agents. It exposes APIs that custom backends can call to trigger complex business processes.
*   **`d365-agent-mcpserver-dotnet`:** The .NET Core server providing D365 tools via MCP. Custom backends needing direct D365 interaction (and not going through the LangGraph orchestrator) could potentially use the `d365-agent-mcpclient-dotnet` to call this server.
*   **Custom Backend Services:** These are any additional services you might build, e.g., an Email Ingestion Service, a reporting service, etc. These should be **containerized**.

## Patterns for Custom Backend Integration

1.  **Custom Backend as a Client to `d365-agent-orchestrator`:**
    *   **Use Case:** Your custom backend needs to initiate a complex, stateful business process managed by a LangGraph agent (e.g., PO Processing, Sales Workflow).
    *   **Implementation:**
        *   The custom backend (e.g., a .NET Core Worker Service, a Python script, a Node.js microservice) makes an HTTP API call to a dedicated endpoint on `d365-agent-orchestrator`.
        *   This endpoint on the orchestrator triggers the appropriate LangGraph agent.
        *   The orchestrator can return an immediate acknowledgment with a job/task ID. The custom backend can then poll for status or receive a callback/webhook if the orchestrator is designed to provide one.
    *   **Example:** An overnight batch job (custom backend) identifies overdue invoices and calls an API on `d365-agent-orchestrator` to trigger a "Collections Follow-up" LangGraph agent for each.

2.  **Custom Backend as a Direct Client to `d365-agent-mcpserver-dotnet` (for simple D365 operations):**
    *   **Use Case:** Your custom backend needs to perform simple, stateless D365 operations and does not require the complex orchestration logic of LangGraph or the conversational interface of CopilotKit.
    *   **Implementation:**
        *   The custom backend (if .NET) can use the `d365-agent-mcpclient-dotnet` library to directly call tools on the `d365-agent-mcpserver-dotnet`.
        *   If the custom backend is in another language (e.g., Python), it would need a corresponding MCP client library for that language or make raw MCP JSON-RPC calls.
    *   **Example:** A simple .NET Core monitoring service that periodically queries D365 for specific data points using a tool on `d365-agent-mcpserver-dotnet`.

    ```csharp
    // Example: .NET Core Worker Service calling d365-agent-mcpserver-dotnet directly
    // This assumes d365-agent-mcpclient-dotnet is available and configured.
    public class D365MonitorWorker : BackgroundService
    {
        private readonly ILogger<D365MonitorWorker> _logger;
        private readonly McpHttpClient _mcpClient; // From d365-agent-mcpclient-dotnet

        public D365MonitorWorker(ILogger<D365MonitorWorker> logger, McpHttpClient mcpClient)
        {
            _logger = logger;
            _mcpClient = mcpClient; // Configured to point to d365-agent-mcpserver-dotnet
        }

        protected override async Task ExecuteAsync(CancellationToken stoppingToken)
        {
            while (!stoppingToken.IsCancellationRequested)
            {
                _logger.LogInformation("D365 Monitor Worker running at: {time}", DateTimeOffset.Now);
                try
                {
                    // Example: Call a simple read-only tool on the .NET MCP Server
                    var request = new McpRequest { ToolName = "getOpenSalesOrderCount", Parameters = new { company = "USMF" } };
                    var response = await _mcpClient.ExecuteToolAsync(request.ToolName, request.Parameters);
                    if (!response.IsError && response.Content.FirstOrDefault()?.Type == "json") {
                        // Process response.Content.First().Data
                        _logger.LogInformation("Open Sales Orders: {count}", response.Content.First().Data.ToString());
                    } else {
                        _logger.LogError("Error fetching data from MCP Server: {error}", response.Content.FirstOrDefault()?.Text);
                    }
                }
                catch (Exception ex)
                {
                    _logger.LogError(ex, "Error in D365 Monitor Worker.");
                }
                await Task.Delay(TimeSpan.FromMinutes(30), stoppingToken);
            }
        }
    }
    ```

## Hosting Custom Backends

*   **Containerization:** All custom backend services should be packaged as Docker containers.
*   **Deployment:** Deploy these containers to Azure Container Apps (ACA) or Azure Kubernetes Service (AKS) for scalability and manageability, consistent with the rest of the D365 AI Agent system's backend components.

## Considerations

*   **Authentication:** Custom backends calling `d365-agent-orchestrator` or `d365-agent-mcpserver-dotnet` must authenticate securely (e.g., using client credentials flow with Azure AD app registrations).
*   **API Contracts:** If exposing APIs from `d365-agent-orchestrator` for custom backends, define clear and versioned API contracts.
*   **Error Handling & Retries:** Implement robust error handling and retry mechanisms in custom backend services, especially for calls to other services.
*   **Logging and Monitoring:** Ensure custom backends integrate with Application Insights for observability.
*   **Purpose of `d365-agent-orchestrator`:** For most automated business processes involving D365, it's generally preferable to implement the logic within a LangGraph agent in `d365-agent-orchestrator` and trigger it via its API, rather than having many small custom backends directly calling the D365 MCP Server. This centralizes orchestration logic. Direct calls to the MCP server are more suited for very simple, isolated D365 tasks performed by other existing systems.
