lets plan for ano# Application Architecture: Dynamics 365 AI Agent

This document details the application architecture for the Dynamics 365 AI Agent, specifying the key software components, their responsibilities, and interactions. It builds upon the high-level vision outlined in `architecture_vision.md`.

## 1. Overview

The application architecture is designed as a distributed system composed of microservices and managed Azure services, emphasizing loose coupling, scalability, and maintainability. **Application Backend services** (e.g., a web app backend, Teams bot backend) act as the primary orchestrators. They leverage the **`d365-agent-mcpclient` library**, which acts as an **MCP Client**, to interact with the backend business logic server (`d365-agent-mcpserver`) via the Model Context Protocol (MCP).

**Technology Flexibility:** Key components, notably the `d365-agent-mcpserver` and the `d365-agent-mcpclient` library, can be implemented using **either C#/.NET or TypeScript/Node.js**, leveraging the respective official MCP SDKs. Clients and servers implemented with different SDKs are **fully interoperable** due to adherence to the MCP standard.

**Orchestration Flexibility:** The orchestration of business logic and MCP tool calls within the Application Backend / `d365-agent-mcpclient` layer can be implemented using different strategies, primarily:
1.  **Agent-based Orchestration:** Utilizing frameworks like **Microsoft AutoGen** (`submodules/autogen`) to define collaborating AI agents that dynamically manage the workflow.
2.  **DAG-based Orchestration:** Defining explicit Directed Acyclic Graphs (DAGs) in code or configuration (e.g., YAML) that prescribe the sequence of operations, potentially leveraging workflow engines for execution if needed.

## 2. Key Application Components

```mermaid
graph TD
    subgraph Presentation Layer
        UI1[Web Chat UI (React/Blazor)]
        UI2[Teams Bot Framework App]
        UI3[Voice Gateway (ACS + Bot Framework)]
        UI4[Email Adapter (Logic App/Function)]
    end

    subgraph Integration Layer
        INT1[API Gateway (Optional - APIM)]
        INT2[Ingestion Logic Apps/Power Automate]
        INT3[Event Grid]
        INT4[Service Bus]
    end

    subgraph Application Backend Layer
        APP_BACKEND1[Web App Backend (Node.js, etc.)]
        APP_BACKEND2[Teams Bot Backend]
        APP_BACKEND3[...]
        APP_BACKEND1 -- Uses --> SDK
        APP_BACKEND2 -- Uses --> SDK
        APP_BACKEND3 -- Uses --> SDK
        SDK[Client Lib (d365-agent-mcpclient-*)]
        SDK -- Contains --> ORCH[Orchestration Logic (AutoGen or DAG)]
        SDK -- Contains --> MCP_CLIENT[MCP Client (TS or C# SDK)]
        SDK -- Contains --> STATE[State Management]
        SDK -- Contains --> LLM_INT[LLM Interaction (Optional)]
    end

    subgraph Optional Ingestion Processing
        PROC1[Document Parsing Function (Azure Function + Doc Intelligence)]
    end

    subgraph MCP Server Layer (Repos: d365-agent-mcpserver-*)
        MCPSERVER[MCP Server (Azure Container App)]
        MCPSERVER -- Hosts --> MCP1[MCP Server Impl. (TS or C#)]
        MCPSERVER -- Contains --> MCP2[D365 Client Adapters (Generated in d365-agent-odataclient-*)]
        MCPSERVER -- Contains --> MCP3[External API Client Adapters]
        MCPSERVER -- Contains --> MCP4[Tool Implementations]
        MCPSERVER -- Contains --> MCP5[Instance/Company Router Logic]
    end

    subgraph Backend Systems (Data Plane)
        BE1[Dynamics 365 APIs (OData/Custom)]
        BE2[External MCP Servers]
        BE3[Third-Party REST/SOAP APIs]
        BE4[Data Sources (CSV/DBs)]
    end

    subgraph Cross-Cutting Concerns
        SEC[Security Services (Entra ID, Key Vault, Managed Identity)]
        LOG[Monitoring & Logging (App Insights, Log Analytics)]
        CACHE[Caching Service (Azure Cache for Redis)]
        STORE[Data Storage (Blob Storage, Data Lake)]
    end

    %% Interactions
    UI1 -->|User Input/Requests| APP_BACKEND1
    UI2 -->|User Input/Requests| APP_BACKEND2
    UI3 -->|User Input/Requests| APP_BACKEND3 %% Example connection
    UI4 -->|Email Data| INT2
    INT2 --> STORE --> INT3 --> INT4 --> PROC1
    PROC1 -->|Parsed Data| INT4 --> APP_BACKEND1 %% Example trigger

    APP_BACKEND1 -- Uses --> SDK
    APP_BACKEND2 -- Uses --> SDK
    SDK -- Orchestrates --> SDK %% Internal SDK logic
    ORCH -->|Identify Tool Need| MCP_CLIENT
    MCP_CLIENT -->|Invoke MCP Tool| MCPSERVER
    MCPSERVER -->|API Calls| BE1 & BE2 & BE3 & BE4
    MCPSERVER -->|Cache Lookup/Store| CACHE
    MCPSERVER -->|Secrets| SEC
    MCPSERVER -->|Auth via Entra ID (Client Creds)| SEC %% Client Creds from Key Vault
    APP_BACKEND1 -->|Return Response| UI1 %% Example response flow
    APP_BACKEND2 -->|Return Response| UI2 %% Example response flow

    APP_BACKEND1 & APP_BACKEND2 & SDK & MCPSERVER & PROC1 & INT2 -->|Logs & Telemetry| LOG
    MCPSERVER -->|Read Config/Secrets| SEC

    %% Style/Grouping (Conceptual)
    classDef azureService fill:#DCEFFA,stroke:#0078D4,stroke-width:1px;
    class INT1,INT2,INT3,INT4,PROC1,MCPSERVER,BE1,BE2,BE3,BE4,SEC,LOG,CACHE,STORE azureService;
    classDef appBackendComponent fill:#E1DFEC,stroke:#502064,stroke-width:1px;
    class APP_BACKEND1,APP_BACKEND2,APP_BACKEND3 appBackendComponent;
    classDef sdkComponent fill:#E2F0D9,stroke:#548235,stroke-width:1px;
    class SDK,ORCH,MCP_CLIENT,STATE,LLM_INT sdkComponent;
    classDef uiComponent fill:#FFF4CE,stroke:#FFA500,stroke-width:1px;
    class UI1,UI2,UI3,UI4 uiComponent;

```

## 3. Component Responsibilities

1.  **Presentation Layer:**
    *   Provides user interfaces for interaction (chat, voice).
    *   Adapts non-interactive channels (email) into processable inputs.
    *   Authenticates users (delegating to Entra ID).
    *   Communicates user requests to the corresponding **Application Backend** service.
    *   Renders responses received from the Application Backend.

2.  **Integration Layer:**
    *   **(Optional) API Gateway:** Provides a single entry point, handles routing, rate limiting, and potentially some initial auth/validation for API-based interactions.
    *   **Ingestion Services (Logic Apps, Event Grid, Service Bus):** Handle asynchronous intake of data (especially from email/batch), buffer requests, decouple components, and trigger processing workflows reliably.
    *   Stores raw artifacts (like PDFs) in Blob Storage.
    *   Can trigger Application Backends via Service Bus messages (e.g., after document parsing).

3.  **Application Backend Layer:**
    *   **Application Backend Services (e.g., Web App Backend, Teams Bot Backend):** Server-side components responsible for handling requests from specific Presentation Layer UIs or Integration Layer triggers. Implemented in languages like Node.js, C# (ASP.NET Core), etc.
        *   Receives user input or event data.
        *   Manages user session state specific to the channel.
        *   **Crucially, uses the Client Library** ([`d365-agent-mcpclient-ts`](https://github.com/ntrtd/d365-agent-mcpclient-ts) or [`d365-agent-mcpclient-dotnet`](https://github.com/ntrtd/d365-agent-mcpclient-dotnet)) to orchestrate the required business workflow.
        *   Handles secure configuration (LLM keys, MCP Server endpoint).
        *   Formats final responses and sends them back to the Presentation Layer.
    *   **MCP Client Libraries (Repos: [`d365-agent-mcpclient-ts`](https://github.com/ntrtd/d365-agent-mcpclient-ts) / [`d365-agent-mcpclient-dotnet`](https://github.com/ntrtd/d365-agent-mcpclient-dotnet)):** Libraries providing reusable orchestration logic and MCP client capabilities. Choose the appropriate repository based on the consuming Application Backend's language.
        *   **Implementation:** Use **TypeScript/JavaScript** (`d365-agent-mcpclient-ts` repo, using `@modelcontextprotocol/sdk` from `submodules/typescript-sdk`) or **C#/.NET** (`d365-agent-mcpclient-dotnet` repo, using `ModelContextProtocol` from `submodules/csharp-sdk`).
        *   **Orchestration Logic:** Implements business process workflows. This logic can be structured using:
            *   **AutoGen:** Defining collaborating agents (`submodules/autogen`).
            *   **DAG Definition:** Explicitly defining workflows in code or configuration.
        *   **State Management:** Provides mechanisms or relies on the hosting Application Backend to manage conversation/workflow state.
        *   **MCP Client:** Contains the specific MCP client implementation using the chosen SDK (`@modelcontextprotocol/sdk` or `ModelContextProtocol`) to communicate with the deployed MCP Server instance ([`d365-agent-mcpserver-ts`](https://github.com/ntrtd/d365-agent-mcpserver-ts) or [`d365-agent-mcpserver-dotnet`](https://github.com/ntrtd/d365-agent-mcpserver-dotnet)).
        *   **(Optional) LLM Interaction:** May interact directly with LLMs (e.g., Azure OpenAI) or leverage frameworks like AutoGen/Semantic Kernel for intent recognition, response generation, or within the orchestration logic itself.

4.  **Optional Ingestion Processing:**
    *   **Document Parsing Function:** An Azure Function containing logic to call Azure AI Document Intelligence, extract structured data from documents (PDFs, images), and place the results onto Service Bus, potentially triggering an Application Backend.

5.  **MCP Server Layer (Services/Repos: [`d365-agent-mcpserver-ts`](https://github.com/ntrtd/d365-agent-mcpserver-ts) / [`d365-agent-mcpserver-dotnet`](https://github.com/ntrtd/d365-agent-mcpserver-dotnet)):**
    *   Hosts the MCP Server implementation, typically on **Azure Container Apps** or other container hosting platforms. Only one implementation (TS or C#) needs to be deployed, but both repositories exist for flexibility.
    *   **MCP Server Implementation:**
        *   **Implementation Choice:** Implement using the **TypeScript SDK** (`d365-agent-mcpserver-ts` repo, using `@modelcontextprotocol/sdk` from `submodules/typescript-sdk`) or the **C#/.NET SDK** (`d365-agent-mcpserver-dotnet` repo, using `ModelContextProtocol` from `submodules/csharp-sdk`).
        *   Handles the MCP protocol (`initialize`, `tools/call`, etc.) via a supported transport (e.g., `StreamableHTTPServerTransport`).
        *   Advertises available D365-related MCP Tools.
        *   Uses appropriate libraries for schema validation (e.g., **`zod`** for TypeScript, attributes/reflection for C#).
    *   **Tool Implementations (within chosen `d365-agent-mcpserver-*` repo):** The actual logic behind the MCP Tools, written in the chosen SDK language (TypeScript or C#). These functions interact with D365 via generated client adapters.
    *   **D365 Client Adapters (Generated):** Contains typed clients for interacting with D365 OData APIs. Generated and published from dedicated repositories:
        *   **TypeScript:** Generated in [`d365-agent-odataclient-ts`](https://github.com/ntrtd/d365-agent-odataclient-ts) using **SAP Cloud SDK generator** / `odata2ts` (from `submodules/odata2ts`). Consumed as an npm package (e.g., `@d365-agent/odataclient`) by `d365-agent-mcpserver-ts`.
        *   **C#/.NET:** Generated in [`d365-agent-odataclient-dotnet`](https://github.com/ntrtd/d365-agent-odataclient-dotnet) using **OData Connected Service** (`submodules/ODataConnectedService`) or `Microsoft.OData.Client.Design`. Consumed as a NuGet package by `d365-agent-mcpserver-dotnet`.
        *   Both adapters handle authentication using **Entra ID Client Credentials grant flow** (retrieving secrets from Azure Key Vault).
    *   **Instance/Company Router Logic (within chosen `d365-agent-mcpserver-*` repo):** Selects the correct D365 instance/company endpoint based on parameters in the MCP tool call, implemented in the chosen SDK language. This logic uses the appropriate generated D365 client adapter package.

6.  **Backend Systems (Data Plane):** (Responsibilities unchanged)
    *   The actual Dynamics 365 instances (FO, AX, CE) exposing OData or custom APIs.
    *   Other external MCP servers providing specialized capabilities.
    *   Third-party systems accessed via standard REST/SOAP APIs.
    *   Static or semi-static data sources (e.g., CSV files served via a simple API).

7.  **Cross-Cutting Concerns:**
    *   **Security Services:** Entra ID for user identity and service identity (e.g., for LLM calls in Application Backends). Azure Key Vault for storing secrets (like D365 Client Credentials, LLM Keys). Network security via VNet/Private Endpoints.
    *   **Monitoring & Logging:** Application Insights for distributed tracing, logging, and performance monitoring across all components (**Application Backends**, SDK, **MCP Server**, etc.). Log Analytics for querying.
    *   **Caching Service:** Azure Cache for Redis used by the **MCP Server (`d365-agent-mcpserver`)** to cache frequently accessed, relatively static data from D365 (e.g., configurations, potentially some pricing/item data) to reduce latency and load.
    *   **Data Storage:** Azure Blob Storage for raw documents/attachments, Azure Data Lake for storing enriched telemetry/traces for analysis and potentially feeding the self-learning loop.

## 4. Key Interactions & Data Flow (Example: PO Processing)

1.  User emails a PO PDF (UI4 -> INT2 -> STORE -> INT3 -> INT4 -> PROC1).
2.  Document Parsing Function (PROC1) uses Document Intelligence, puts structured JSON onto Service Bus (INT4).
3.  The **Application Backend** service (e.g., APP_BACKEND1) is triggered by the message from Service Bus. It uses the **`d365-agent-mcpclient` SDK**.
4.  The SDK's **Orchestration Logic** executes the PO Processing workflow:
    *   Calls MCP tool `resolve_item` via the embedded **MCP Client** (SDK -> MCPSERVER).
    *   **MCP Server (`d365-agent-mcpserver`)** receives the call, uses router logic (MCP5), gets D365 client (MCP2), authenticates using **Client Credentials** (SEC), calls D365 API (BE1), returns item details via MCP response (MCPSERVER -> SDK).
    *   Orchestration Logic calls `check_credit` MCP tool (SDK -> MCPSERVER).
    *   MCP Server calls D365 Finance API (BE1), returns credit status (MCPSERVER -> SDK).
    *   Orchestration Logic calls `create_sales_order` MCP tool (SDK -> MCPSERVER).
    *   MCP Server calls D365 API (BE1), returns SO number (MCPSERVER -> SDK).
5.  The **Client SDK/Application Backend** formats the confirmation message (potentially using an LLM) and sends it back to the user channel (APP_BACKEND1 -> UI4/Logic App).
6.  All relevant components (Application Backends, SDK, MCP Server) log detailed telemetry (including MCP request/response pairs with trace IDs) to Application Insights (LOG). This data can be exported to Azure Data Lake (STORE) for long-term storage and analysis.
7.  **(Self-Learning Loop):** A separate process (e.g., scheduled Azure ML job) can analyze the telemetry in Data Lake/Synapse, cluster failed interactions or common fallback scenarios, use an LLM (like Azure OpenAI) to suggest new MCP tools or prompt improvements, and potentially raise PRs against the **`d365-agent-mcpserver`** repository for human review and integration via CI/CD.

## 5. Deployment & Scalability

*   Components are deployed independently from their respective repositories:
    *   **[`d365-agent-infra`](https://github.com/ntrtd/d365-agent-infra):** Infrastructure deployed via Bicep/ARM.
    *   **[`d365-agent-mcpserver-ts`](https://github.com/ntrtd/d365-agent-mcpserver-ts) / [`d365-agent-mcpserver-dotnet`](https://github.com/ntrtd/d365-agent-mcpserver-dotnet):** The chosen MCP Server implementation is built via CI/CD and deployed as a container image to Azure Container Apps or another host.
    *   **[`d365-agent-mcpclient-ts`](https://github.com/ntrtd/d365-agent-mcpclient-ts) / [`d365-agent-mcpclient-dotnet`](https://github.com/ntrtd/d365-agent-mcpclient-dotnet):** The chosen Client library is deployed via the relevant package manager (**npm** or **NuGet**) or bundled within Application Backend deployments.
    *   **Application Backends:** Deployed based on their specific technology.
    *   **`d365-agent-functions` (if used):** Deployed via standard Azure Function deployment methods.
*   Scalability is handled by the underlying Azure services: Container Apps (suitable for both TS and .NET MCP Servers) scales based on KEDA rules, Application Backend services scale based on their hosting model, Service Bus scales automatically.
*   The MCP Server (from `d365-agent-mcpserver-*` repos) can be designed stateless or stateful depending on requirements. The `StreamableHTTPServerTransport` (available in both SDKs) supports session management if needed. Azure Container Apps allows for easy horizontal scaling based on traffic or other metrics.

This application architecture provides a decoupled, scalable, and secure foundation for orchestrating interactions with Dynamics 365, leveraging Azure services and the MCP standard for robust and reusable integration between the custom client SDK and the backend MCP server, with flexibility in the implementation language (TypeScript or C#/.NET) for key components.

## 6. Further Reading

*   **[Model Context Protocol (MCP) Documentation](https://modelcontextprotocol.io/)**: Official documentation for the core protocol.
*   **MCP TypeScript SDK:** Source code/examples at `submodules/typescript-sdk`. Used by [`d365-agent-mcpserver-ts`](https://github.com/ntrtd/d365-agent-mcpserver-ts) and [`d365-agent-mcpclient-ts`](https://github.com/ntrtd/d365-agent-mcpclient-ts). (GitHub: [https://github.com/modelcontextprotocol/typescript-sdk](https://github.com/modelcontextprotocol/typescript-sdk), NPM: `@modelcontextprotocol/sdk`).
*   **MCP C# SDK:** Source code/examples at `submodules/csharp-sdk`. Used by [`d365-agent-mcpserver-dotnet`](https://github.com/ntrtd/d365-agent-mcpserver-dotnet) and [`d365-agent-mcpclient-dotnet`](https://github.com/ntrtd/d365-agent-mcpclient-dotnet). (GitHub: [https://github.com/modelcontextprotocol/csharp-sdk](https://github.com/modelcontextprotocol/csharp-sdk), NuGet: `ModelContextProtocol`).
*   **Microsoft AutoGen:** Framework for multi-agent orchestration. Source code at `submodules/autogen`. Can be used within [`d365-agent-mcpclient-ts`](https://github.com/ntrtd/d365-agent-mcpclient-ts) (if using Python via interop) or [`d365-agent-mcpclient-dotnet`](https://github.com/ntrtd/d365-agent-mcpclient-dotnet). (GitHub: [https://github.com/microsoft/autogen](https://github.com/microsoft/autogen)).
*   **Dynamics 365 OData Client Generation:**
    *   **TypeScript:** Repo: [`d365-agent-odataclient-ts`](https://github.com/ntrtd/d365-agent-odataclient-ts), using tools like `submodules/odata2ts`.
    *   **C#/.NET:** Repo: [`d365-agent-odataclient-dotnet`](https://github.com/ntrtd/d365-agent-odataclient-dotnet), using tools like `submodules/ODataConnectedService`.
*   **[MCP Specification](https://spec.modelcontextprotocol.io)**: Formal details of the protocol versions.
