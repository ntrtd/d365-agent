# API Reference

This section provides reference documentation for the core components and libraries used within the Dynamics 365 AI Agent system. The primary architecture involves a TypeScript-based **Application Orchestration Layer** (`d365-agent-orchestrator`) communicating with a **.NET Core D365 MCP Server** (`d365-agent-mcpserver-dotnet`).

*Note: Detailed, auto-generated API documentation (e.g., from TypeDoc for TypeScript and DocFX for .NET) based on the source code in the respective SDK submodules and project repositories is the ideal goal for this section.*

## Key SDK Components & Libraries

### 1. Application Orchestration Layer (`d365-agent-orchestrator`) Components

This layer is built with Node.js/TypeScript and hosts:

*   **CopilotKit Runtime (`@copilotkit/runtime`):**
    *   Manages interaction with the `d365-agent-ui` (CopilotKit frontend).
    *   Handles LLM communication.
    *   Dispatches requests to LangGraph agents or simpler CopilotKit actions.
    *   Refer to official CopilotKit documentation for its API.

*   **LangGraph (`@langchain/langgraph`):**
    *   Used to build stateful, multi-step agents (e.g., Purchase Agent, Sales Agent) in TypeScript.
    *   Nodes within these LangGraph agents orchestrate business processes.
    *   Refer to official LangChain/LangGraph documentation for its API.

*   **D365 MCP Client Library (`d365-agent-mcpclient-ts`):**
    *   **Purpose:** Used by LangGraph agents and simpler CopilotKit actions within the `d365-agent-orchestrator` to communicate with the `d365-agent-mcpserver-dotnet`.
    *   **Source:** Likely from `submodules/typescript-sdk/packages/mcp-client` or a dedicated `d365-agent-mcpclient-ts` repository.
    *   **Key Class: `McpClient`**
        *   `constructor(options: { baseUrl: string; ... })`: Initializes the client with the URL of the `d365-agent-mcpserver-dotnet`.
        *   `async executeTool(toolName: string, parameters: any): Promise<McpResponse>`: Sends a request to execute a specific tool on the MCP server.
        *   `async discover(): Promise<McpServerDescription>`: Retrieves the list of available tools and their schemas from the MCP server.
    *   **Core Types (Shared MCP Concepts):**
        *   `McpRequest`: Structure for invoking a tool.
        *   `McpResponse`: Structure for receiving results or errors.
        *   `McpContent`: Represents different content types (text, JSON).
        *   `McpError`: Standard error structure.
        *   `McpToolDescription`: Describes a tool's inputs, outputs, and function.
        *   `McpServerDescription`: Describes the server and its tools.

### 2. D365 MCP Server (`d365-agent-mcpserver-dotnet`) Components

This layer is a .NET Core application responsible for exposing D365 operations as MCP tools.

*   **.NET MCP Server SDK (from `submodules/csharp-sdk`):**
    *   Provides the foundation for building the MCP server.
    *   **Key Classes/Attributes:**
        *   `McpServerBuilder` / `McpServer`: For configuring and running the ASP.NET Core based MCP server.
        *   `[McpServerTool]`: Attribute to mark static methods as MCP tools.
        *   `[McpServerToolType]`: Attribute to group related tools.
        *   `[Description]`: Attribute for tool and parameter descriptions.
    *   **Core Types:** `McpRequest`, `McpResponse`, etc. (compatible with the TypeScript client types).

*   **D365 OData Client Library (`d365-agent-odataclient-dotnet`):**
    *   **Purpose:** A generated C# library providing type-safe access to Dynamics 365 OData endpoints. This is the working OData client used by the `d365-agent-mcpserver-dotnet`.
    *   **Generation:** Created by the `d365-agent-odataclient-dotnet` project using OData Connected Service or `Microsoft.OData.Client.Design`.
    *   **Key Components:**
        *   `YourD365DataContext` (actual name depends on generation): The `DataServiceContext` subclass for interacting with D365.
        *   Entity classes (e.g., `CustomerV3`, `SalesOrderHeaderV2`).
        *   LINQ-to-OData query capabilities.
    *   **Usage:** Instantiated and used within the MCP tool implementations in `d365-agent-mcpserver-dotnet` to perform CRUD operations against D365.

### 3. User Interface (`d365-agent-ui`) Components

This layer is a React/TypeScript application.

*   **CopilotKit UI Libraries (`@copilotkit/react-ui`, `@copilotkit/react-core`):**
    *   **`<CopilotKitProvider />`:** Wraps the application to provide context and connection to the `d365-agent-orchestrator`.
    *   **`<CopilotChat />` (and variants):** Provides the chat interface.
    *   **`useCoAgentState` Hook:** Used to subscribe to and display the state of LangGraph agents running in the `d365-agent-orchestrator`.
    *   **Generative UI Components:** For rendering custom UI based on agent state or data.
    *   Refer to official CopilotKit documentation for detailed API of these components.

### Other Relevant Libraries/SDKs (Not part of the core "D365 Agent SDK" but used in the solution)

*   **`d365-agent-odataclient-ts` (TypeScript OData Client Generator):**
    *   While the generated client from this is currently not used for D365 interaction due to reported issues, the repository exists for generating TypeScript OData clients (e.g., using `odata2ts`). If it becomes functional, it could be an alternative for direct D365 access from TypeScript components if the MCP server layer was also in TypeScript.

---

*To get detailed information on the specific APIs of `@copilotkit/*`, `langgraph`, and the MCP SDKs, please refer to their respective official documentation and the source code within the submodules or dedicated repositories.*
