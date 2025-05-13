# Architecture Fundamentals

This section outlines the fundamental architectural principles and the overall vision for the Dynamics 365 AI Agent system.

## 1. Vision & Core Strategy

The goal is to facilitate AI-driven interactions with Microsoft Dynamics 365 (D365) and related systems, automating and assisting business processes across various domains (e.g., Sales, Procurement, Finance) for both internal and external users.

**The core strategy involves:**
*   A **CopilotKit-based User Interface** (developed in the [`d365-agent-ui`](https://github.com/ntrtd/d365-agent-ui) repository) providing a rich, interactive chat experience with support for file uploads and real-time state display.
*   An **Application Orchestration Layer** (developed in the [`d365-agent-orchestrator`](https://github.com/ntrtd/d365-agent-orchestrator) repository). This layer is a TypeScript/Node.js application that:
    *   Hosts the **CopilotKit Runtime** to manage UI interactions and LLM communications.
    *   Employs **LangGraph (TypeScript)** to define and execute stateful, multi-step business process agents. This includes a **Master Orchestrator Agent** responsible for initial request routing and potentially managing overarching conversations, which then invokes specialized **Domain-Specific LangGraph Agents** (e.g., for Purchase Order Processing, Sales Quote Management, CTS Orders).
    *   Domain-Specific LangGraph Agents integrate direct calls to AI services (e.g., OpenAI) for tasks like PDF document content extraction.
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

### 3.1. Orchestrator and Domain-Specific Agents

Within the **Application Orchestration Layer (`d365-agent-orchestrator`)**, the LangGraph implementation typically follows a tiered approach:

*   **Master Orchestrator Agent (LangGraph):**
    *   This is often the primary entry point for requests coming from the CopilotKit Runtime.
    *   Its main responsibilities can include:
        *   Understanding the overall user intent from the initial interaction.
        *   Routing the request to the appropriate Domain-Specific LangGraph Agent.
        *   Managing overarching conversation state if a task spans multiple domain agents or requires a sequence of specialized agents.
        *   Handling initial context gathering or authentication steps before dispatching to a domain agent.

*   **Domain-Specific LangGraph Agents (e.g., `CTSOrderAgent`, `POProcessingAgent`, `SalesQuoteAgent`):**
    *   These are individual, specialized LangGraph state machines, each designed to handle a particular end-to-end business process or a complex task within a specific domain (e.g., the phases A-G of a CTS order as detailed in Scenario 6).
    *   They encapsulate the detailed logic, states, tools, and transitions for their area of responsibility.
    *   They are typically invoked by the Master Orchestrator Agent based on the nature of the user's request.
    *   They utilize the `d365-agent-mcpclient-ts` to interact with D365 tools and may make direct calls to services like OpenAI for specific sub-tasks (e.g., document parsing, data transformation).
    *   The state and progress of these domain-specific agents are what the CopilotKit UI primarily reflects to the user via shared state mechanisms.

This separation allows for a modular and scalable design, where complex business processes are broken down into manageable, specialized agents, all coordinated by a central orchestrating agent. The exact implementation (e.g., one master agent vs. a more distributed routing graph) can vary based on complexity.

## 3. Core Architecture Layers (Detailed View)

The following diagram illustrates the key components and their interactions within the `d365-agent` ecosystem, incorporating the full capabilities of CopilotKit:

```mermaid
graph TD
    subgraph UserInterface_d365_agent_ui ["User Interface Layer (d365-agent-ui)"]
        direction TB
        CopilotKitUI_SDK["Frontend SDK (CopilotKit)"]
        
        subgraph CopilotKitUI_Components ["Copilot UI Components"]
            direction LR
            UI_Chat["Chat"]
            UI_Generative["Generative UI"]
            UI_Voice["Voice Support"]
            UI_Suggestions["Suggestions"]
            UI_Headless["Headless UI Options"]
        end

        subgraph CopilotOS_Frontend ["Copilot OS (Frontend)"]
            direction LR
            Frontend_RAG["Frontend RAG"]
            Frontend_Actions["Frontend Actions"]
        end
        CoAgents_Socket["CoAgents Socket"]
        
        CopilotKitUI_SDK --> CopilotKitUI_Components
        CopilotKitUI_SDK --> CopilotOS_Frontend
        CopilotKitUI_SDK --> CoAgents_Socket
    end

    subgraph AppOrchestration_d365_agent_orchestrator ["Application Orchestration Layer (d365-agent-orchestrator - Node.js/TS)"]
        direction TB
        CopilotRuntime["Copilot Runtime"]
        CopilotOS_Backend["Copilot OS (Backend)"]

        subgraph LangGraph_Agents_TS ["LangGraph Agents (TypeScript)"]
            direction TB
            MasterOrchestratorAgent["Master Orchestrator Agent"]
            DomainSpecificAgents["Domain-Specific Agents<br/>(e.g., CTSOrderAgent, POProcessingAgent)"]
            LangGraph_BackendActions["Backend Actions (Agent Logic)"]
            LangGraph_BackendRAG["Backend RAG (e.g., OpenAI for Doc Parsing)"]
            D365_MCP_Client_TS["d365-agent-mcpclient-ts"]
        end
        
        CopilotRuntime --> CopilotOS_Backend
        CopilotRuntime -- "Invokes/Manages" --> MasterOrchestratorAgent
        MasterOrchestratorAgent -- "Routes to/Invokes" --> DomainSpecificAgents
        DomainSpecificAgents -- "Uses" --> D365_MCP_Client_TS
        DomainSpecificAgents -- "Uses" --> LangGraph_BackendActions
        DomainSpecificAgents -- "Uses" --> LangGraph_BackendRAG
    end

    subgraph D365Tooling_d365_agent_mcpserver_dotnet [".NET D365 MCP Server Layer (d365-agent-mcpserver-dotnet)"]
        direction TB
        D365_MCP_Server["D365 MCP Server (.NET Core)<br/>(Model Context Protocol Endpoint)"]
        D365_OData_Client_DotNet["d365-agent-odataclient-dotnet<br/>(C# OData Client Library)"]
        
        D365_MCP_Server -- "Uses" --> D365_OData_Client_DotNet
    end

    subgraph ExternalSystems ["External Systems & Services"]
        direction TB
        D365_Instance["Dynamics 365"]
        OpenAI_Service["OpenAI / Azure OpenAI"]
        LangSmith_Service["LangSmith (Observability)"]
        FTP_Blob_Storage["(Optional) FTP/Blob Storage"]
        Email_Ingestion_Service["(Optional) Email Ingestion Service"]
    end

    subgraph Optional_CopilotCloud ["Optional: Copilot Cloud Integration"]
        direction TB
        CopilotCloud_KnowledgeBase["Knowledge Base<br/>(SharePoint, SQL, Google Drive, etc.)"]
        CopilotCloud_AIRouter["AI Router"]
        CopilotCloud_Memory["Memory"]
        CopilotCloud_Guardrails["Guardrails"]
        CopilotCloud_Analytics["Analytics & ROI"]
    end

    %% Connections
    UserInterface_d365_agent_ui -- "Connects (GraphQL/HTTP, WebSocket for CoAgents Socket)" --> CopilotRuntime;
    
    D365_MCP_Client_TS -- "MCP Protocol" --> D365_MCP_Server;
    D365_OData_Client_DotNet -- "OData/API" --> D365_Instance;

    LangGraph_BackendRAG -- "API Call" --> OpenAI_Service;
    DomainSpecificAgents -- "Sends Traces" --> LangSmith_Service;
    DomainSpecificAgents -- "File I/O" --> FTP_Blob_Storage
    Email_Ingestion_Service -- "Triggers" --> CopilotRuntime % or MasterOrchestratorAgent

    CopilotRuntime -- "Integrates with (Optional)" --> Optional_CopilotCloud;

    %% Styling
    classDef ui fill:#D1E8FF,stroke:#333,color:#000;
    classDef orchestrator fill:#E8DAFF,stroke:#333,color:#000;
    classDef d365mcp fill:#FFE0B2,stroke:#333,color:#000;
    classDef externals fill:#D4F8D4,stroke:#333,color:#000;
    classDef copilotcloud fill:#FFF0F5,stroke:#333,color:#000;

    class UserInterface_d365_agent_ui ui;
    class AppOrchestration_d365_agent_orchestrator orchestrator;
    class D365Tooling_d365_agent_mcpserver_dotnet d365mcp;
    class ExternalSystems externals;
    class Optional_CopilotCloud copilotcloud;
```

**Explanation of Layers and Components (Inspired by Full CopilotKit Capabilities):**

*   **User Interface Layer (`d365-agent-ui`):**
    *   Leverages the **CopilotKit Frontend SDK** to deliver a rich, interactive user experience.
    *   **Copilot UI Components:** Provides standard elements like `Chat`, `Suggestions`, and `Voice Support`. A key feature is **Generative UI**, allowing LangGraph agents to render dynamic React components directly within the chat, offering more than just text-based interactions. `Headless UI` options allow for complete customization.
    *   **Copilot OS (Frontend):** This conceptual part of the SDK enables powerful client-side capabilities:
        *   **Frontend RAG:** Could be used for instant responses from client-side cached data or small, local knowledge sources (e.g., product FAQs, UI guides) without needing a backend roundtrip.
        *   **Frontend Actions:** Simple UI-specific actions (e.g., changing themes, client-side form validation, navigating the UI) can be defined and executed locally, making the UI more responsive.
    *   **CoAgents Socket:** Crucial for real-time, bidirectional communication with the backend LangGraph agents. This facilitates the seamless streaming of shared state updates and enables the dynamic rendering of Generative UI components as the agent progresses.
    *   Communicates with the `d365-agent-orchestrator` via GraphQL/HTTP for standard requests and the CoAgents Socket (WebSocket) for real-time agent interactions.

*   **Application Orchestration Layer (`d365-agent-orchestrator`):**
    *   Hosts the central **Copilot Runtime**, which acts as the main entry point from the UI and manages the overall agentic execution flow.
    *   **Copilot OS (Backend):** Conceptually, this is the core intelligence within the Runtime. It handles LLM interactions, context management, tool invocation, and the lifecycle of LangGraph agents.
    *   **LangGraph Agents (TypeScript):**
        *   **Master Orchestrator Agent:** As described in section 3.1, this agent typically handles initial user intent, routes to appropriate domain agents, and may manage cross-domain conversational state.
        *   **Domain-Specific Agents (e.g., `CTSOrderAgent`, `POProcessingAgent`):** These are the workhorses, each a LangGraph state machine for a specific business process.
            *   **Backend Actions (Agent Logic):** Encapsulate the steps, transitions, and tool calls for their domain.
            *   **Backend RAG:** Domain agents frequently use RAG by calling OpenAI (or other LLMs) to parse uploaded documents (PDFs, emails), query unstructured data sources, or extract information relevant to their current task. This is more powerful than Frontend RAG as it can access larger, secure data.
            *   Interaction with D365 is performed via the `d365-agent-mcpclient-ts`, which calls the D365 MCP Server.
            *   Can also integrate with other third-party APIs or services as needed, beyond D365.

*   **D365 Tooling Layer (`d365-agent-mcpserver-dotnet`):**
    *   Functions as a specialized **Remote Endpoint** in the CopilotKit architecture, communicating via the **Model Context Protocol (MCP)**.
    *   The **D365 MCP Server (.NET Core)** provides a secure and standardized set of tools for D365 operations.
    *   It uses the generated C# **`d365-agent-odataclient-dotnet`** for reliable and type-safe interaction with the Dynamics 365 OData API.

*   **External Systems & Services:**
    *   **Dynamics 365:** The primary target ERP system.
    *   **OpenAI / Azure OpenAI:** Crucial for LLM-driven understanding, generation, RAG, and decision-making within LangGraph agents.
    *   **LangSmith:** Essential for tracing, debugging, and monitoring LangGraph agent executions.
    *   **FTP/Blob Storage, Email Ingestion:** Examples of auxiliary services that can trigger or support agent workflows.

*   **Optional Copilot Cloud Integration:**
    *   The `d365-agent-orchestrator` (specifically its Copilot Runtime) is designed to be compatible with **Copilot Cloud**. This offers a path to leverage powerful managed services:
        *   **Managed Knowledge Bases:** Instead of (or in addition to) custom Backend RAG, connect to SharePoint, SQL DBs, Google Drive, etc., through Copilot Cloud for robust, scalable RAG over enterprise data.
        *   **AI Router:** Intelligently route different tasks or sub-tasks to the most appropriate (or cost-effective) LLM, managed by Copilot Cloud.
        *   **Persistent Memory:** Enable agents to remember context across sessions or users, enhancing personalization and long-term task management.
        *   **Guardrails:** Implement advanced safety, compliance, and ethical AI policies centrally.
        *   **Analytics & ROI:** Gain insights into agent usage, performance, and business impact.
    *   This integration provides a significant boost in operational maturity, scalability, and feature richness without requiring extensive custom development for these platform-level capabilities.

This architecture emphasizes modularity, leveraging CopilotKit for the frontend and core runtime, LangGraph for sophisticated agentic orchestration, and a dedicated .NET server for robust D365 interactions. The optional integration with Copilot Cloud offers further scalability and advanced features.

Refer to the detailed **[Key Components](./key-components.md)** document for a breakdown of component responsibilities.
