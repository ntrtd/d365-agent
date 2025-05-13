# Architecture Fundamentals

This section outlines the fundamental architectural principles and the overall vision for the Dynamics 365 AI Agent system.

## 1. Vision & Core Strategy

The goal is to facilitate AI-driven interactions with Microsoft Dynamics 365 (D365) and related systems, automating and assisting business processes across various domains (e.g., Sales, Procurement, Finance) for both internal and external users.

**The core strategy involves:**
*   A **CopilotKit-based User Interface** (developed in the [`d365-agent-ui`](https://github.com/ntrtd/d365-agent-ui) repository) providing a rich, interactive chat experience with support for file uploads and real-time state display.
*   An **Application Orchestration Layer** (developed in the [`d365-agent-orchestrator`](https://github.com/ntrtd/d365-agent-orchestrator) repository). This layer is a TypeScript/Node.js application that:
    *   Hosts the **CopilotKit Runtime** to manage UI interactions and LLM communications.
    *   Employs **LangGraph (TypeScript)** to define and execute stateful, multi-step business process agents (e.g., for Purchase Order Processing, Sales Quote Management).
    *   Integrates direct calls to AI services (e.g., OpenAI) within LangGraph agents for tasks like PDF document content extraction.
    *   Uses the **`d365-agent-mcpclient-ts`** library to enable LangGraph agents (and simpler direct CopilotKit actions) to interact with D365-specific tools.
*   A **D365 MCP Server** (developed in the [`d365-agent-mcpserver-dotnet`](https://github.com/ntrtd/d365-agent-mcpserver-dotnet) repository). This is a .NET Core application that:
    *   Exposes Dynamics 365 business logic as standardized MCP (Model Context Protocol) tools.
    *   Utilizes the working **`d365-agent-odataclient-dotnet`** (generated C# OData client) for all underlying D365 data operations.

Key benefits of this approach include:
*   **Rich User Experience:** Leveraging CopilotKit for modern chat UIs with features like generative UI and shared state reflecting LangGraph agent progress.
*   **Powerful Orchestration:** Using LangGraph for robust, stateful, and potentially multi-agent business process automation, with integrated AI capabilities for tasks like document understanding.
*   **Standardized & Reliable D365 Tooling:** MCP provides a consistent way to expose D365 capabilities, leveraging the stable .NET OData client via the .NET MCP Server.
*   **Modularity and Scalability:** Clear separation of UI, orchestration, and D365 access layers, each in their dedicated repositories and deployable as distinct services (likely containers).

The architecture prioritizes using Microsoft Azure PaaS and AI services for hosting, scalability, security, and maintainability.

### Business Drivers: From Manual Effort to Orchestrated Interaction

Traditional interactions with complex systems like Dynamics 365 often involve:
*   Manual data entry, validation, and process management.
*   Fragmented communication channels.
*   Siloed information across different modules or systems.

The vision enabled by this architecture aims to transition towards:
*   **AI-Driven Automation:** LangGraph agents in `d365-agent-orchestrator` automate complex workflows like PO ingestion (including PDF parsing via direct OpenAI calls) and sales processes, by invoking D365 MCP tools.
*   **Unified Interaction via CopilotKit:** The `d365-agent-ui` provides a consistent, conversational interface.
*   **Consistent Rule Application:** Business logic is embedded within LangGraph agent workflows and D365 MCP tools.

## 2. Guiding Principles

*   **Microsoft Native:** Leverage Azure PaaS (e.g., Azure Container Apps) and AI services (Azure OpenAI).
*   **Modularity & Defined Repositories:**
    *   **UI Layer:** `d365-agent-ui` (CopilotKit, React/TypeScript).
    *   **Application Orchestration Layer:** `d365-agent-orchestrator` (Node.js/TypeScript, hosting CopilotKit Runtime and LangGraph agents; uses `d365-agent-mcpclient-ts`). LangGraph agents handle document parsing via direct OpenAI calls.
    *   **D365 Tooling Layer:** `d365-agent-mcpserver-dotnet` (.NET Core, exposing D365 tools via MCP, using `d365-agent-odataclient-dotnet`).
    *   **D365 OData Client Generation:** `d365-agent-odataclient-dotnet` (C# client generator).
    *   **Infrastructure:** `d365-agent-infra`.
*   **Standardization:** Use MCP as the interface between the `d365-agent-orchestrator` (specifically, its `d365-agent-mcpclient-ts` component) and the `d365-agent-mcpserver-dotnet`.
*   **Technology Stack:**
    *   UI: React/TypeScript with CopilotKit.
    *   Orchestrator: Node.js/TypeScript with CopilotKit Runtime and LangGraph (TypeScript).
    *   D365 MCP Client: TypeScript (`d365-agent-mcpclient-ts`).
    *   D365 MCP Server: .NET Core (`d365-agent-mcpserver-dotnet`).
    *   D365 OData Client for MCP Server: C# (`d365-agent-odataclient-dotnet`).
*   **Stateful Orchestration:** Utilize LangGraph for managing complex, multi-step business processes.
*   **Rich Frontend Integration:** Employ CopilotKit for interactive chat UIs, shared state with LangGraph, and generative UI.
*   **Security:** Entra ID for service-to-service auth, secure communication, user auth in UI/Orchestrator. Secrets in Key Vault.
*   **Observability:** Application Insights for all services, LangSmith for LangGraph agents.

## 3. Core Architecture Layers (Simplified View)

```mermaid
graph TD
    subgraph UserInterfaceLayer ["User Interface Layer (d365-agent-ui)"]
        direction LR
        CopilotKitUI["CopilotKit React UI"]
    end

    subgraph AppOrchestrationLayer ["Application Orchestration Layer (d365-agent-orchestrator)"]
        direction LR
        CopilotKitRuntime["CopilotKit Runtime (Node.js/TS)"]
        LangGraphAgent["LangGraph Agent(s) (TS)<br/>(e.g., PO Processor, Sales Agent)<br/>- Handles Document Parsing via OpenAI<br/>- Uses D365 MCP Client"]
        D365MCPClient["d365-agent-mcpclient-ts"]
    end

    subgraph D365ToolingLayer [".NET D365 MCP Server Layer (d365-agent-mcpserver-dotnet)"]
        direction LR
        D365MCPServer["D365 MCP Server (.NET Core)<br/>(Uses .NET OData Client)"]
        D365ODataClientDotNet["d365-agent-odataclient-dotnet<br/>(C# OData Client Library)"]
    end

    subgraph BackendSystems ["Backend Systems & External APIs"]
        direction TB
        D365["Dynamics 365"]
        OpenAI_Svc["OpenAI / Azure OpenAI"]
        FTPBlob["FTP/Blob Storage"]
        EmailIngestion["(Optional) Email Ingestion Service"]
        LangSmith_Svc["LangSmith (Monitoring)"]
    end

    %% Connections
    UserInterfaceLayer -- "GraphQL/HTTP" --> CopilotKitRuntime;
    CopilotKitRuntime -- "Manages/Invokes" --> LangGraphAgent;
    
    LangGraphAgent -- "Uses" --> D365MCPClient;
    D365MCPClient -- "MCP Protocol" --> D365MCPServer;
    D365MCPServer -- "Uses Library" --> D365ODataClientDotNet;
    D365ODataClientDotNet -- "OData/API" --> D365;

    LangGraphAgent -- "API Call for Document Parsing" --> OpenAI_Svc;

    LangGraphAgent -- "File Upload" --> FTPBlob;
    D365 -- "Async Ingestion from" --> FTPBlob;

    EmailIngestion -- "HTTP Call to Orchestrator API" --> LangGraphAgent; %% Or an API on CopilotKitRuntime
    LangGraphAgent -- "Sends Traces" --> LangSmith_Svc;

    %% Styling
    classDef ui fill:#D1E8FF,stroke:#333;
    classDef orchestrator fill:#E8DAFF,stroke:#333;
    classDef d365mcp fill:#FFE0B2,stroke:#333; /* Orange for .NET MCP Server */
    classDef externals fill:#D4F8D4,stroke:#333;

    class CopilotKitUI ui;
    class CopilotKitRuntime,LangGraphAgent,D365MCPClient orchestrator;
    class D365MCPServer,D365ODataClientDotNet d365mcp;
    class D365,OpenAI_Svc,FTPBlob,EmailIngestion,LangSmith_Svc externals;
```

*   **User Interface Layer (`d365-agent-ui`):** Provides the interactive chat experience using CopilotKit.
*   **Application Orchestration Layer (`d365-agent-orchestrator`):**
    *   **CopilotKit Runtime:** Manages UI communication and LLM interactions.
    *   **LangGraph Agent(s) (TypeScript):** Implements stateful business logic (e.g., PO processing, sales processes).
        *   Directly calls **OpenAI services** for document parsing.
        *   Uses the **`d365-agent-mcpclient-ts`** library to make calls to the D365 MCP Server.
    *   Can also define simpler CopilotKit actions for direct D365 MCP tool calls.
*   **D365 Tooling Layer (`d365-agent-mcpserver-dotnet`):**
    *   **D365 MCP Server (.NET Core):** Exposes Dynamics 365 operations as standardized MCP tools.
    *   Uses the **`d365-agent-odataclient-dotnet`** (C# OData client) for direct D365 API interaction.
*   **Backend Systems & External APIs:** Dynamics 365, OpenAI, FTP/Blob storage, etc.

This architecture uses a TypeScript-based orchestration layer with LangGraph for flexibility and state management, a .NET-based MCP server for robust D365 connectivity using the proven .NET OData client, and a CopilotKit UI for a modern user experience.

Refer to the detailed **[Key Components](./key-components.md)** document for a breakdown of component responsibilities.
