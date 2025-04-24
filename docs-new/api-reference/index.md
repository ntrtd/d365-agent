# API Reference

This section provides reference documentation for the core components of the Dynamics 365 AI Agent SDK.

*Note: Detailed, auto-generated API documentation (e.g., from TypeDoc or DocFX) based on the source code in the `submodules/typescript-sdk` and `submodules/csharp-sdk` repositories is the ideal goal for this section.*

## Key SDK Components

The SDK is primarily composed of libraries for building the **Client (Orchestration) Layer** and the **MCP Server (Tool Implementation) Layer**.

### 1. Client Libraries (`d365-agent-mcpclient-*`)

These libraries are used within your **Application Backend** to orchestrate interactions with MCP Servers.

*   **TypeScript Client (`@d365-agent/mcp-client-ts`)** (likely sourced from `submodules/typescript-sdk`)
    *   **`McpClient` Class:** The primary class for connecting to and interacting with an MCP Server.
        *   `constructor(options)`: Initialization options (server URL, authentication hooks, etc.).
        *   `execute(request)`: Sends an `McpRequest` and returns an `McpResponse`.
        *   `discover()`: Retrieves the capabilities description from the MCP Server.
        *   *(Other methods for streaming, cancellation, etc.)*
    *   **Core Types:**
        *   `McpRequest`: Structure for invoking a tool.
        *   `McpResponse`: Structure for receiving results or errors.
        *   `McpContent`: Represents different content types within requests/responses (text, JSON, images).
        *   `McpError`: Standard error structure.
        *   `McpToolDescription`: Describes a tool's inputs, outputs, and function.
        *   `McpServerDescription`: Describes the server and its tools.
    *   **Orchestration Helpers:** (May include utilities for common patterns, e.g., integrating with AutoGen or LangChain - *details depend on specific implementation*)

*   **C# Client (`D365.Agent.McpClientDotnet`)** (likely sourced from `submodules/csharp-sdk`)
    *   **`McpClient` Class:** Core class for MCP interactions.
        *   `McpClient(HttpClient httpClient, McpClientOptions options)`: Constructor.
        *   `Task<McpResponse> ExecuteAsync(McpRequest request, CancellationToken cancellationToken)`: Executes a tool request.
        *   `Task<McpServerDescription> DiscoverAsync(CancellationToken cancellationToken)`: Gets server capabilities.
        *   *(Other methods)*
    *   **Core Types:**
        *   `McpRequest`, `McpResponse`, `McpContent`, `McpError`, `McpToolDescription`, `McpServerDescription`: Equivalent .NET record/class definitions.
    *   **Orchestration Helpers:** (Potential utilities for .NET-based orchestration - *details depend on specific implementation*)

### 2. MCP Server Libraries (`d365-agent-mcpserver-*`)

These libraries provide the foundation for building your **MCP Server** that exposes Dynamics 365 (or other) operations as tools.

*   **TypeScript Server (`@d365-agent/mcp-server-ts`)** (likely sourced from `submodules/typescript-sdk`)
    *   **`McpServer` Class:** The core server implementation.
        *   `constructor(options)`: Server configuration (port, name, description).
        *   `tool(name, schema, implementation)`: Defines an MCP tool with Zod schema validation.
        *   `start()`: Starts the MCP server listener.
    *   **Decorators/Utilities:** (Potential helpers for defining tools, e.g., `@McpTool` decorator - *details depend on specific implementation*)
    *   **Core Types:** `McpRequest`, `McpResponse`, etc. (Shared or compatible with client types).

*   **C# Server (`D365.Agent.McpServerDotnet`)** (likely sourced from `submodules/csharp-sdk`)
    *   **`McpServerBuilder` / `McpServer`:** Classes for configuring and running the server (e.g., using ASP.NET Core integration).
    *   **Attributes:**
        *   `[McpServerTool]`: Marks a static method as an MCP tool.
        *   `[McpServerToolType]`: Groups related tools within a static class.
        *   `[Description]`: Provides descriptions for tools and parameters (used for discovery).
    *   **Core Types:** `McpRequest`, `McpResponse`, etc.
    *   **Dependency Injection:** Integration with .NET DI for injecting services (like D365 connection services) into tools.

### 3. Generated OData Clients (`d365-agent-odataclient-*`)

These are not part of the core SDK but are crucial dependencies for the MCP Server implementations.

*   **TypeScript Client (`@your-org/d365-odata-client`):** Generated using tools like `@sap-cloud-sdk/generator`. Provides entity types and fluent API builders. (See [Connecting to D365 Guide](../guides/connecting-d365.md)).
*   **.NET Client (`Your.Generated.ODataClient.PackageName`):** Generated using OData Connected Service or `Microsoft.OData.Client.Design`. Provides entity classes and a `DataServiceContext`. (See [Connecting to D365 Guide](../guides/connecting-d365.md)).

---

*To get detailed information, please refer to the source code and any generated documentation artifacts within the respective SDK submodules.*
