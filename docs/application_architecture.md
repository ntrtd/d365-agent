# Application Architecture: Dynamics 365 AI Agent

This document details the application architecture for the Dynamics 365 AI Agent, specifying the key software components, their responsibilities, and interactions. It builds upon the high-level vision outlined in `architecture_vision.md`.

## 1. Overview

The application architecture is designed as a distributed system composed of microservices and managed Azure services, emphasizing loose coupling, scalability, and maintainability. Interactions between the AI orchestration layer and backend business logic are standardized via the Model Context Protocol (MCP).

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

    subgraph Processing & Intelligence Layer
        PROC1[Document Parsing Function (Azure Function + Doc Intelligence)]
        PROC2[AI Agent Service (Orchestrator)]
        PROC3[Agent Flows/DAGs (YAML Definitions)]
        PROC2 -- Manages --> PROC3
    end

    subgraph Business Logic & MCP Layer
        MCPHUB[MCP Hub Service (Azure Container App)]
        MCPHUB -- Hosts --> MCP1[MCP Server Implementation (Python/FastAPI)]
        MCPHUB -- Contains --> MCP2[D365 Client Adapters (FO/AX/CE)]
        MCPHUB -- Contains --> MCP3[External API Client Adapters]
        MCPHUB -- Contains --> MCP4[Tool Implementations]
        MCPHUB -- Contains --> MCP5[Instance/Company Router Logic]
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
    UI1 & UI2 & UI3 -->|User Input/Requests| PROC2
    UI4 -->|Email Data| INT2
    INT2 --> STORE --> INT3 --> INT4 --> PROC1
    PROC1 -->|Parsed Data| INT4 --> PROC2

    PROC2 -->|Invoke MCP Tool| MCPHUB
    MCPHUB -->|API Calls| BE1 & BE2 & BE3 & BE4
    MCPHUB -->|Cache Lookup/Store| CACHE
    MCPHUB -->|Secrets| SEC
    MCPHUB -->|Auth via Managed ID| SEC

    PROC2 & MCPHUB & PROC1 & INT2 -->|Logs & Telemetry| LOG
    MCPHUB -->|Read Config/Secrets| SEC

    %% Style/Grouping (Conceptual)
    classDef azureService fill:#DCEFFA,stroke:#0078D4,stroke-width:1px;
    class INT1,INT2,INT3,INT4,PROC1,PROC2,MCPHUB,BE1,BE2,BE3,BE4,SEC,LOG,CACHE,STORE azureService;
    classDef uiComponent fill:#FFF4CE,stroke:#FFA500,stroke-width:1px;
    class UI1,UI2,UI3,UI4 uiComponent;
    classDef definition fill:#E2F0D9,stroke:#548235,stroke-width:1px;
    class PROC3 definition;

```

## 3. Component Responsibilities

1.  **Presentation Layer:**
    *   Provides user interfaces for interaction (chat, voice).
    *   Adapts non-interactive channels (email) into processable inputs.
    *   Authenticates users (delegating to Entra ID).
    *   Communicates user requests to the AI Agent Service.
    *   Renders agent responses, confirmations, and requests for clarification.

2.  **Integration Layer:**
    *   **(Optional) API Gateway:** Provides a single entry point, handles routing, rate limiting, and potentially some initial auth/validation for API-based interactions.
    *   **Ingestion Services (Logic Apps, Event Grid, Service Bus):** Handle asynchronous intake of data (especially from email/batch), buffer requests, decouple components, and trigger processing workflows reliably.
    *   Stores raw artifacts (like PDFs) in Blob Storage.

3.  **Processing & Intelligence Layer:**
    *   **Document Parsing Function:** An Azure Function containing logic to call Azure AI Document Intelligence, extract structured data from documents (PDFs, images), and place the results onto Service Bus for the agent.
    *   **AI Agent Service:** The core orchestration engine.
        *   Hosts the Large Language Model (LLM).
        *   Manages user sessions and conversation state.
        *   Executes defined Agent Flows/DAGs (YAML) based on user intent or triggers.
        *   Interprets user requests and decides which tools/flows to invoke.
        *   Communicates with the MCP Hub via the MCP protocol (JSON-RPC 2.0 over HTTP/SSE) to call tools, initiated by an `initialize` handshake to discover capabilities.
        *   Orchestrates the execution sequence based on the selected Agent Flow/DAG, potentially using Planner-Executor or Graph-based execution patterns managed by the service.
        *   Formats LLM responses for the Presentation Layer.
    *   **Agent Flows/DAGs:** YAML definitions specifying the sequence of steps (LLM prompts, MCP tool calls via `tools/call`, MCP resource access via `resources/read`, conditional logic) for specific business processes, organized by D365 module (e.g., `AR_CheckCredit.yaml`, `SCM_CreatePO.yaml`).

4.  **Business Logic & MCP Layer (MCP Hub Service):**
    *   A stateless service hosted on **Azure Container Apps**. This is generally preferred over Azure Functions for MCP hubs due to native support for long-running requests, Server-Sent Events (SSE) for streaming progress/results, KEDA-based autoscaling, and easier management of dependencies and Managed Identity contexts.
    *   **MCP Server Implementation:** Implements the MCP specification. Listens for JSON-RPC 2.0 requests (typically on a single `/mcp` HTTP endpoint) from the AI Agent Service. Handles the `initialize` handshake to advertise available `tools`, `resources`, and `prompts` (with JSON Schema definitions for type safety). Executes `tools/call` requests by routing them to the correct tool implementation. Streams results and progress updates back using HTTP+SSE if necessary.
    *   **D365/External Client Adapters:** Contains typed clients or wrappers for interacting with D365 OData/APIs and external system APIs. Handles authentication token acquisition (using Managed Identity via Entra ID) and caching. Implements retry logic for transient API errors.
    *   **Tool Implementations:** Code implementing the specific actions exposed as MCP tools (e.g., `get_trade_price`, `create_sales_order`). Contains the business logic that interacts with backend systems via the client adapters.
    *   **Instance/Company Router Logic:** Selects the correct D365 instance/company endpoint and authentication context based on parameters passed in the MCP tool call (`company`, `instance_url`).

5.  **Backend Systems (Data Plane):**
    *   The actual Dynamics 365 instances (FO, AX, CE) exposing OData or custom APIs.
    *   Other external MCP servers providing specialized capabilities.
    *   Third-party systems accessed via standard REST/SOAP APIs.
    *   Static or semi-static data sources (e.g., CSV files served via a simple API).

6.  **Cross-Cutting Concerns:**
    *   **Security Services:** Entra ID for user and service identity (Managed Identity), Azure Key Vault for storing secrets securely. Network security via VNet/Private Endpoints.
    *   **Monitoring & Logging:** Application Insights for distributed tracing, logging, and performance monitoring across all components. Log Analytics for querying.
    *   **Caching Service:** Azure Cache for Redis used by the MCP Hub to cache frequently accessed, relatively static data from D365 (e.g., configurations, potentially some pricing/item data) to reduce latency and load.
    *   **Data Storage:** Azure Blob Storage for raw documents/attachments, Azure Data Lake for storing enriched telemetry/traces for analysis and potentially feeding the self-learning loop.

## 4. Key Interactions & Data Flow (Example: PO Processing)

1.  User emails a PO PDF (UI4 -> INT2 -> STORE -> INT3 -> INT4 -> PROC1).
2.  Document Parsing Function (PROC1) uses Document Intelligence, puts structured JSON onto Service Bus (INT4).
3.  AI Agent Service (PROC2) is triggered, loads the relevant Agent Flow (e.g., `SCM_ProcessPO.yaml`) (PROC3).
4.  Agent Flow executes:
    *   Calls MCP tool `resolve_item` via MCP Hub (PROC2 -> MCPHUB).
    *   MCP Hub (MCPHUB) uses router logic (MCP5), gets D365 client (MCP2), authenticates via Managed ID (SEC), calls D365 API (BE1), returns item details (MCPHUB -> PROC2).
    *   Agent Flow calls `check_credit` (PROC2 -> MCPHUB).
    *   MCP Hub calls D365 Finance API (BE1), returns credit status (MCPHUB -> PROC2).
    *   Agent Flow calls `create_sales_order` (PROC2 -> MCPHUB).
    *   MCP Hub calls D365 API (BE1), returns SO number (MCPHUB -> PROC2).
5.  Agent Service (PROC2) formats confirmation message, sends to user channel (PROC2 -> UI4/Logic App).
6.  All components log detailed telemetry (including MCP request/response pairs with trace IDs) to Application Insights (LOG). This data can be exported to Azure Data Lake (STORE) for long-term storage and analysis.
7.  **(Self-Learning Loop):** A separate process (e.g., scheduled Azure ML job) can analyze the telemetry in Data Lake/Synapse, cluster failed interactions or common fallback scenarios, use an LLM (like Azure OpenAI) to suggest new MCP tools or prompt improvements, and potentially raise PRs against the MCP Hub repository for human review and integration via CI/CD.

## 5. Deployment & Scalability

*   Components are deployed independently. Agent Flows (YAML) are updated via `az ml capability-host update`. The MCP Hub is deployed as a container image update to Container Apps. Azure Functions and Logic Apps are deployed via standard Azure mechanisms.
*   Scalability is handled by the underlying Azure services: Container Apps scales based on KEDA rules (e.g., HTTP traffic, queue length), Functions scale on demand (Consumption plan), Service Bus scales automatically.
*   Stateless design of the MCP Hub allows for easy horizontal scaling.

This application architecture provides a decoupled, scalable, and secure foundation for the Dynamics 365 AI Agent, leveraging Azure services and the MCP standard for robust integration.
