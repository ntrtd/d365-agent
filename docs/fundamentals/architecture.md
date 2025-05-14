# Architecture Fundamentals

This section outlines the fundamental architectural principles and the overall vision for the Dynamics 365 AI Agent system, reflecting a refined 3-tier approach.

## 1. Vision & Core Strategy

The goal is to facilitate AI-driven interactions with Microsoft Dynamics 365 (D365) and related systems, automating and assisting business processes across various domains for both internal and external users.

**The refined core strategy involves:**
*   A **CopilotKit-based User Interface** (repo: [`d365-agent-ui`](https://github.com/ntrtd/d365-agent-ui)). This React/TypeScript application provides a rich, interactive chat experience and connects to the `CopilotRuntime` hosted by the Application Orchestration Layer.
*   An **Application Orchestration Layer** (repo: [`d365-agent-orchestrator`](https://github.com/ntrtd/d365-agent-orchestrator)). This layer is a TypeScript/Node.js application (e.g., using Express.js) that:
    *   Hosts the central **CopilotKit Runtime** to manage UI interactions, LLM communications, and serve as the primary backend for the UI.
    *   May define simple, stateless backend actions directly within its runtime. These actions can use the `d365-agent-mcpclient-ts` for straightforward D365 calls.
    *   Connects to the **LangGraph Agent Layer** (`d365-agent-agents`) via `remoteEndpoints` (specifically using `langGraphPlatformEndpoint`) to integrate complex, stateful business process agents.
*   A **LangGraph Agent Layer** (new repo: `d365-agent-agents`). This layer is a TypeScript/Node.js application that:
    *   Defines and serves stateful, multi-step **LangGraph Agents** (e.g., a Master Orchestrator Agent for routing, and various Domain-Specific Agents for Purchase Order Processing, Sales Quote Management, etc.).
    *   Is typically developed and run using `langgraph-cli`.
    *   These LangGraph agents use the **`d365-agent-mcpclient-ts`** library to interact with D365 tools by calling the D365 MCP Server.
    *   May also integrate direct calls to AI services (e.g., OpenAI) for tasks like document content extraction within the agent logic.
*   A **D365 MCP Server** (repo: [`d365-agent-mcpserver-dotnet`](https://github.com/ntrtd/d365-agent-mcpserver-dotnet)). This is a .NET Core application that:
    *   Exposes Dynamics 365 business logic as standardized MCP (Model Context Protocol) tools.
    *   Utilizes the **`d365-agent-odataclient-dotnet`** (generated C# OData client) for all underlying D365 data operations.

Key benefits of this approach include:
*   **Rich User Experience:** Leveraging CopilotKit for modern chat UIs.
*   **Clear Separation of Concerns:**
    *   UI (`d365-agent-ui`) for presentation.
    *   Orchestrator (`d365-agent-orchestrator`) for runtime hosting, simple actions, and routing to complex workflows.
    *   Agents (`d365-agent-agents`) for complex, stateful agent logic using LangGraph.
    *   MCP Server (`d365-agent-mcpserver-dotnet`) for standardized D365 tooling.
*   **Powerful Workflow Automation:** Using LangGraph in a dedicated service for robust business process automation.
*   **Standardized & Reliable D365 Tooling:** MCP provides a consistent interface to D365.
*   **Modularity and Scalability:** Each layer is in a dedicated repository and deployable as a distinct service.

The architecture prioritizes using Microsoft Azure PaaS and AI services for hosting, scalability, security, and maintainability.

### Business Drivers: From Manual Effort to Orchestrated Interaction

Traditional interactions with Dynamics 365 involve manual effort. This architecture aims for:
*   **AI-Driven Automation:** LangGraph agents in `d365-agent-agents` automate complex processes by invoking D365 MCP tools (via `d365-agent-mcpclient-ts`). Simpler automations can be handled by actions in `d365-agent-orchestrator`.
*   **Unified Interaction via CopilotKit:** The `d365-agent-ui` connects to `d365-agent-orchestrator`, which provides a unified view of available agents and actions.
*   **Consistent Rule Application:** Business logic is embedded within LangGraph agent workflows, orchestrator actions, and D365 MCP tools.

## 2. Guiding Principles

*   **Microsoft Native:** Leverage Azure PaaS and AI services.
*   **Modularity & Defined Repositories:**
    *   **UI Layer:** `d365-agent-ui` (CopilotKit React Frontend).
    *   **Application Orchestration Layer (Runtime Host):** `d365-agent-orchestrator` (Node.js/TypeScript, e.g., Express.js, hosting CopilotKit Runtime; connects to `d365-agent-agents`; can use `d365-agent-mcpclient-ts` for its own simple actions).
    *   **LangGraph Agent Layer (Agent Server):** `d365-agent-agents` (Node.js/TypeScript, LangGraph agents; uses `d365-agent-mcpclient-ts`; served by `langgraph-cli`).
    *   **D365 Tooling Layer (MCP Server):** `d365-agent-mcpserver-dotnet` (.NET Core, exposing D365 tools via MCP, using `d365-agent-odataclient-dotnet`).
    *   **D365 MCP Client Generation:** `d365-agent-mcpclient-ts` (TypeScript client library).
    *   **D365 OData Client Generation:** `d365-agent-odataclient-dotnet` (C# client generator).
    *   **Infrastructure:** `d365-agent-infra`.
*   **Standardization:**
    *   CopilotKit protocols between `d365-agent-ui` and `d365-agent-orchestrator`.
    *   LangGraph agent protocols (e.g., via `langGraphPlatformEndpoint`) between `d365-agent-orchestrator` and `d365-agent-agents`.
    *   MCP between consumers (`d365-agent-agents` or `d365-agent-orchestrator`) and `d365-agent-mcpserver-dotnet`.
*   **Technology Stack:**
    *   UI: React/TypeScript with CopilotKit.
    *   Orchestrator (Runtime Host): Node.js/TypeScript (e.g., Express.js) with CopilotKit Runtime.
    *   Agents (Agent Server): Node.js/TypeScript with LangGraph.
    *   D365 MCP Client: TypeScript (`d365-agent-mcpclient-ts`).
    *   D365 MCP Server: .NET Core (`d365-agent-mcpserver-dotnet`).
    *   D365 OData Client for MCP Server: C# (`d365-agent-odataclient-dotnet`).
*   **Stateful Orchestration:** Utilize LangGraph in `d365-agent-agents` for complex business processes.
*   **Security & Observability:** As previously defined.

### 3.1. LangGraph Agents in `d365-agent-agents`

The **LangGraph Agent Layer (`d365-agent-agents`)** is where complex, stateful agent logic resides:

*   **Master Orchestrator Agent (LangGraph):**
    *   This agent, running within `d365-agent-agents`, can be invoked by the `d365-agent-orchestrator`.
    *   Responsibilities: understanding overall user intent (passed from orchestrator), routing to appropriate Domain-Specific LangGraph Agents within `d365-agent-agents`, managing cross-domain state if needed.
*   **Domain-Specific LangGraph Agents (e.g., `CTSOrderAgent`, `POProcessingAgent`):**
    *   These specialized LangGraph state machines also run within `d365-agent-agents`.
    *   They handle specific business processes, using `d365-agent-mcpclient-ts` to call tools on `d365-agent-mcpserver-dotnet`.
    *   Their state and progress are communicated back to the `d365-agent-orchestrator`'s CopilotKit Runtime, which then updates the `d365-agent-ui`.

This structure centralizes complex agent logic in `d365-agent-agents`, making `d365-agent-orchestrator` a leaner runtime host and simple action provider.

## 3. Core Architecture Layers (Detailed View - Refined)

The following diagram illustrates the key components and their interactions within the `d365-agent` ecosystem, reflecting the new 3-tier structure:

```mermaid
graph TD
    subgraph UserInterface_d365_agent_ui ["User Interface Layer (d365-agent-ui)"]
        direction TB
        CopilotKitUI_SDK["Frontend SDK & UI Components<br/>(CopilotKit: Chat, Sidebar, Generative UI)"]
    end

    subgraph AppOrchestration_d365_agent_orchestrator ["Application Orchestration Layer (d365-agent-orchestrator - Node.js/TS Express App)"]
        direction TB
        CopilotRuntime["Copilot Runtime"]
        SimpleBackendActions["Simple Backend Actions<br/>(Optional, can use MCP Client)"]
        D365_MCP_Client_TS_Orch["d365-agent-mcpclient-ts<br/>(for Simple Actions)"]
        
        CopilotRuntime --> SimpleBackendActions
        SimpleBackendActions -- "Uses" --> D365_MCP_Client_TS_Orch
    end

    subgraph LangGraphAgents_d365_agent_agents ["LangGraph Agent Layer (d365-agent-agents - Node.js/TS LangGraph Server)"]
        direction TB
        LangGraphServer["LangGraph Agent Server<br/>(run via langgraph-cli)"]
        MasterOrchestratorAgent_LG["Master Orchestrator Agent (LangGraph)"]
        DomainSpecificAgents_LG["Domain-Specific Agents (LangGraph)<br/>(e.g., CTSOrderAgent, POProcessingAgent)"]
        D365_MCP_Client_TS_LG["d365-agent-mcpclient-ts<br/>(for LangGraph Agents)"]

        LangGraphServer -- "Serves" --> MasterOrchestratorAgent_LG
        LangGraphServer -- "Serves" --> DomainSpecificAgents_LG
        MasterOrchestratorAgent_LG -- "Invokes" --> DomainSpecificAgents_LG
        DomainSpecificAgents_LG -- "Uses" --> D365_MCP_Client_TS_LG
        MasterOrchestratorAgent_LG -- "Uses" --> D365_MCP_Client_TS_LG
    end

    subgraph D365Tooling_d365_agent_mcpserver_dotnet [".NET D365 MCP Server Layer (d365-agent-mcpserver-dotnet)"]
        direction TB
        D365_MCP_Server["D365 MCP Server (.NET Core)<br/>(MCP Tool Endpoint)"]
        D365_OData_Client_DotNet["d365-agent-odataclient-dotnet<br/>(C# OData Client)"]
        
        D365_MCP_Server -- "Uses" --> D365_OData_Client_DotNet
    end

    subgraph ExternalSystems ["External Systems & Services"]
        direction TB
        D365_Instance["Dynamics 365"]
        OpenAI_Service["OpenAI / Azure OpenAI"]
        LangSmith_Service["LangSmith (Observability)"]
    end

    %% Connections
    UserInterface_d365_agent_ui -- "Connects (HTTP/WebSocket)" --> CopilotRuntime;
    
    CopilotRuntime -- "Invokes Remote Agents (langGraphPlatformEndpoint)" --> LangGraphServer;

    D365_MCP_Client_TS_Orch -- "MCP Protocol" --> D365_MCP_Server;
    D365_MCP_Client_TS_LG -- "MCP Protocol" --> D365_MCP_Server;
    D365_OData_Client_DotNet -- "OData/API" --> D365_Instance;

    MasterOrchestratorAgent_LG -- "Uses LLM" --> OpenAI_Service;
    DomainSpecificAgents_LG -- "Uses LLM" --> OpenAI_Service;
    CopilotRuntime -- "Uses LLM (for general chat, routing)" --> OpenAI_Service;
    
    MasterOrchestratorAgent_LG -- "Sends Traces" --> LangSmith_Service;
    DomainSpecificAgents_LG -- "Sends Traces" --> LangSmith_Service;

    %% Styling
    classDef ui fill:#D1E8FF,stroke:#333,color:#000;
    classDef orchestrator fill:#E8DAFF,stroke:#333,color:#000;
    classDef agents fill:#DFFFE0,stroke:#333,color:#000; # Changed from workflows to agents
    classDef d365mcp fill:#FFE0B2,stroke:#333,color:#000;
    classDef externals fill:#D4F8D4,stroke:#333,color:#000;

    class UserInterface_d365_agent_ui ui;
    class AppOrchestration_d365_agent_orchestrator orchestrator;
    class LangGraphAgents_d365_agent_agents agents; # Changed from workflows to agents
    class D365Tooling_d365_agent_mcpserver_dotnet d365mcp;
    class ExternalSystems externals;
```

**Explanation of Refined Layers and Components:**

*   **User Interface Layer (`d365-agent-ui`):**
    *   Purely a frontend application using CopilotKit React components.
    *   Connects to the `CopilotRuntime` hosted by `d365-agent-orchestrator`.
    *   Can be put into "agent lock mode" to target specific agents advertised by the orchestrator.

*   **Application Orchestration Layer (`d365-agent-orchestrator`):**
    *   Hosts the central **CopilotKit Runtime**. This is the primary backend the UI interacts with.
    *   Manages LLM interactions for general chat when no specific agent is targeted, or for routing.
    *   Can define **Simple Backend Actions**: For stateless operations or simple D365 queries using `d365-agent-mcpclient-ts` directly.
    *   Connects to `d365-agent-agents` via `remoteEndpoints` (using `langGraphPlatformEndpoint`) to make complex LangGraph agents available to the UI. It lists available remote agents and proxies requests to them.

*   **LangGraph Agent Layer (`d365-agent-agents`):**
    *   A dedicated Node.js/TypeScript service for defining and serving **LangGraph Agents**.
    *   Contains the `MasterOrchestratorAgent` (LangGraph) and various `DomainSpecificAgents` (LangGraphs).
    *   These agents encapsulate complex, stateful business logic.
    *   They use `d365-agent-mcpclient-ts` to call tools on the `d365-agent-mcpserver-dotnet`.
    *   Served by `langgraph-cli`, providing an HTTP endpoint for each registered LangGraph agent.

*   **D365 Tooling Layer (`d365-agent-mcpserver-dotnet`):**
    *   Functions as the MCP Server, exposing D365 operations as tools.
    *   Uses `d365-agent-odataclient-dotnet` for D365 interaction.

*   **External Systems & Services:**
    *   Includes Dynamics 365, OpenAI/Azure OpenAI (used by CopilotRuntime and LangGraph agents), and LangSmith.

This refined architecture clearly separates the CopilotKit Runtime hosting from the complex LangGraph agent definitions, aligning with the `coagents-starter` pattern where the UI's runtime connects to a remote agent server. It also clarifies how MCP tools are consumed by both direct actions in the orchestrator and LangGraph agents in the agent server.

Refer to the detailed **[Key Components](./key-components.md)** document for a breakdown of component responsibilities (this document may also need updates to reflect this refined architecture).
