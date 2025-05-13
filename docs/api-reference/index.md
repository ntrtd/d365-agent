# API Reference

This section provides a high-level overview and links to reference documentation for the core components, libraries, and SDKs that constitute the Dynamics 365 AI Agent system. The system architecture involves a CopilotKit-based UI (`d365-agent-ui`), a TypeScript-based Application Orchestration Layer (`d365-agent-orchestrator`) using LangGraph, and a .NET Core D365 MCP Server (`d365-agent-mcpserver-dotnet`).

*Note: The ultimate goal is for this section to link to detailed, auto-generated API documentation (e.g., from TypeDoc for TypeScript and DocFX for .NET) for each relevant repository and submodule.*

## Key Components & Libraries

### 1. Application Orchestration Layer (`d365-agent-orchestrator`) Components

This Node.js/TypeScript layer hosts:

*   **CopilotKit Runtime (`@copilotkit/runtime`):**
    *   Manages interaction with the `d365-agent-ui`.
    *   Handles LLM communication (or delegates to agents).
    *   Serves as the entry point for LangGraph CoAgent interactions via defined `langgraphAgentUrl`s.
    *   Refer to official [CopilotKit Runtime Documentation](https://docs.copilotkit.ai/) for its API.

*   **LangGraph (`@langchain/langgraph` and related LangChain packages):**
    *   Used to build stateful, multi-step **Master Orchestrator Agent** and **Domain-Specific Agents** (e.g., `POProcessingAgent`, `SalesAgent`) in TypeScript.
    *   Refer to official [LangChain/LangGraph Documentation](https://js.langchain.com/docs/langgraph) for its API.

*   **CopilotKit SDK for LangGraph Integration (e.g., `@copilotkit/sdk-js/langgraph`):**
    *   Provides utilities to integrate LangGraph agents seamlessly with CopilotKit's shared state and Generative UI features.
    *   Key elements include state annotations (e.g., `CopilotKitStateAnnotation`) for defining agent state shareable with `useCoAgent`, and functions like `copilotkitEmitState` for predictive state updates.
    *   Refer to official [CopilotKit CoAgents Documentation](https://docs.copilotkit.ai/coagents) for details.

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
    *   **`<CopilotKitProvider />`:** Core provider for connecting to the backend and enabling CopilotKit features. Configured with `chatApiEndpoint` and `langgraphAgentUrl`(s).
    *   **Chat Components (`<CopilotChat />`, etc.):** Pre-built UI for chat interactions.
    *   **Core Hooks (`useCoAgent`, `useCopilotReadable`, `useCopilotAction`):**
        *   `useCoAgent`: Primary hook for interacting with LangGraph CoAgents (getting `state`, using `setState`, `run`). Relies on the **CoAgents Socket** for real-time updates.
        *   `useCopilotReadable`: Provides UI context to agents.
        *   `useCopilotAction`: Can define **Frontend Actions** as part of **Copilot OS (Frontend)** capabilities.
    *   **Generative UI Components & `useCoAgentStateRender`:** For rendering agent-driven dynamic UI within the chat.
    *   **Frontend RAG Capabilities (Copilot OS Frontend):** Potential for client-side RAG.
    *   Refer to official [CopilotKit React Core](https://docs.copilotkit.ai/reference/hooks) and [React UI](https://docs.copilotkit.ai/reference/components) documentation.

### Other Relevant Libraries/SDKs (Not part of the core "D365 Agent SDK" but used in the solution)

*   **`d365-agent-odataclient-ts` (TypeScript OData Client Generator):**
    *   While the generated client from this is currently not used for D365 interaction due to reported issues, the repository exists for generating TypeScript OData clients (e.g., using `odata2ts`). If it becomes functional, it could be an alternative for direct D365 access from TypeScript components if the MCP server layer was also in TypeScript.

---

*To get detailed information on the specific APIs of `@copilotkit/*`, `langgraph`, and the MCP SDKs, please refer to their respective official documentation and the source code within the submodules or dedicated repositories.*
