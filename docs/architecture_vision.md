# Architecture Vision: Dynamics 365 AI Agent via MCP

## 1. Introduction

This document outlines the architectural vision for a system designed to facilitate AI-driven interactions with Microsoft Dynamics 365 (D365) and related systems. The system aims to automate and assist with business processes across various functional domains (e.g., Sales, Procurement, Finance), serving both internal employees and external partners/customers.

**The core integration strategy leverages the Model Context Protocol (MCP)**. MCP acts as a standardized interface ("USB-C for AI") allowing orchestration layers (**Application Backends using the `d365-agent-mcpclient` SDK**) to discover and interact with external tools and data sources (like D365 via the `d365-agent-mcpserver`) in a consistent, AI-centric way. This approach is chosen over traditional bespoke APIs or platform-specific connectors alone because MCP offers:
*   **Standardization & Discoverability:** Any MCP-compliant host (e.g., the `d365-agent-mcpclient` SDK, Claude Desktop, VS Code extensions) can automatically discover and understand the capabilities (tools, data resources) exposed by an MCP server.
*   **Composability:** Capabilities from multiple MCP servers (e.g., the `d365-agent-mcpserver`, third-party services like Stripe) can potentially be seamlessly combined within a single orchestration session without complex integration code.
*   **Reduced Boilerplate:** Common needs like capability negotiation, function schemas (using JSON Schema for type safety), progress updates, streaming results (via JSON-RPC over HTTP+SSE), and cancellation are built into the protocol, reducing implementation effort.
*   **Core MCP Concepts:** Servers expose capabilities primarily as:
    *   **Tools:** Typed functions the agent can invoke (e.g., `create_sales_order`).
    *   **Resources:** Contextual data the agent can read (e.g., product catalogs, parsed documents).
    *   **Prompts:** Reusable prompt templates hosted by the server, often containing business logic.

The architecture prioritizes using Microsoft Azure's PaaS and AI services (where applicable, e.g., for hosting, LLM calls, infrastructure) for a scalable, secure, and maintainable solution, with MCP providing the crucial link between the orchestration layer and the D365 business logic/data layer.

## 2. Guiding Principles

*   **Microsoft Native:** Leverage Azure PaaS services (Container Apps, Logic Apps, Functions, Entra ID, D365 OData) where appropriate for hosting and infrastructure. Utilize Azure AI services (like Azure OpenAI) for optional LLM interactions within the orchestration layer.
*   **Modularity:** Decompose complex processes into smaller, reusable components: orchestration logic within the `d365-agent-mcpclient` SDK, and MCP tools within the `d365-agent-mcpserver`.
*   **Standardization:** Utilize MCP as the primary interface standard between the **orchestration layer (`d365-agent-mcpclient` SDK used by Application Backends)** and backend business logic/data sources (`d365-agent-mcpserver`). This involves the server implementing the MCP specification.
*   **Security:** Employ robust security practices: **Entra ID Client Credentials** for server-to-D365 authentication (secrets stored in Key Vault), secure communication between client and server, proper authorization within Application Backends. No sensitive credentials exposed to frontends or embedded directly in orchestration logic.
*   **Scalability & Resilience:** Utilize scalable Azure services (Container Apps with KEDA, Service Bus, Functions) and incorporate patterns for handling load spikes and failures (queues, retries, DLQs).
*   **Observability:** Implement end-to-end tracing and monitoring using Application Insights and Azure Monitor.
*   **Maintainability:** Support CI/CD processes within each repository for automated testing and deployment of infrastructure (`d365-agent-infra`), MCP Server (`d365-agent-mcpserver`), Client SDK (`d365-agent-mcpclient`), documentation (`d365-agent`), etc.

## 3. Core Architecture Layers & Components

The proposed architecture follows a layered approach:

```mermaid
graph TD
    subgraph User Channels
        direction LR
        UC1[Email / Outlook]
        UC2[Web Chat / Teams]
        UC3[Voice / ACS]
        UC4[External Portals]
    end

    subgraph Integration Layer
        direction LR
        IE1[Logic Apps / Power Automate] --> IE2(Azure Blob Storage)
        IE2 --> IE3(Event Grid) --> IE4(Service Bus Queues/Topics)
    end

    subgraph Optional Ingestion Processing
        direction LR
        DP1(Azure Function w/ Document Intelligence)
        IE4 --> DP1
    end

    subgraph Application Backend Layer
        direction LR
        AB1[App Backend 1 (e.g., Web/Teams)]
        AB2[App Backend 2 (e.g., Email/Voice)]
        AB1 -- Uses --> SDK[d365-agent-mcpclient SDK]
        AB2 -- Uses --> SDK
        SDK -- Invokes --> MCP_TOOLS[MCP Tools via Server]
    end

    subgraph MCP Server Layer (`d365-agent-mcpserver` Repo)
        direction LR
        BL1(MCP Server on Azure Container Apps)
        BL1 -- Exposes --> MCP_TOOLS
        BL1 -- Contains --> BL2[Auth Clients - D365(Client Creds)/External]
        BL1 -- Contains --> BL3[Business Logic / Tool Implementation]
        BL1 -- Contains --> BL4[Multi-Instance Router]
    end

    subgraph Backend Systems & Data
        direction TB
        BS1[Dynamics 365 FO/AX via OData]
        BS2[Dynamics 365 CE/Dataverse via API]
        BS3[External APIs / MCP Servers] %% Simplified Label %%
        BS4[External Data (e.g., CSV Catalogues)] %% Simplified Label %%
        BS5[Azure Cache for Redis]
        BL1 --> BS1 & BS2 & BS3 & BS4 & BS5
    end

    subgraph Observability & Learning
        direction LR
        OB1(Application Insights / Azure Monitor)
        OB2(Azure Data Lake / Synapse)
        OB3(Azure ML for Analysis / Tool Suggestion)
        AB1 & AB2 & BL1 & DP1 --> OB1 %% App Backends + MCP Server + Doc Proc
        OB1 --> OB2 --> OB3
    end

    subgraph Security & Identity
        direction LR
        SEC1(Microsoft Entra ID - Client Credentials / User Identity)
        SEC2(Azure Key Vault)
        SEC3(VNet / Private Endpoints)
        BL1 -- Uses --> SEC1(Client Creds via KV) & SEC2 & SEC3
        AB1 & AB2 -- Authenticates Users --> SEC1
    end

    subgraph DevOps (Multiple Repos)
        direction LR
        DEV1(GitHub / Azure DevOps - Repos: d365-agent, infra, mcpserver, mcpclient)
        DEV2(CI/CD Pipelines - Actions/Pipelines)
        DEV3(Azure CLI / Bicep)
        DEV1 --> DEV2
        DEV2 --> BL1(MCP Server Deployment)
        DEV2 --> DP1(Function Deployment)
        DEV2 --> |Infra Deployment| SEC3
        DEV2 -- Uses --> DEV3
    end

    %% Connections between layers
    User Channels --> IE1
    DP1 --> IE4 %% Doc Proc output to Service Bus
    User Channels --> AB1 & AB2 %% Direct interaction with App Backends
    IE4 --> AB1 & AB2 %% Trigger App Backends via Service Bus
```

**Component Breakdown:**

1.  **User Channels:** Interfaces (Email, Chat, Voice) where users interact.
2.  **Ingestion & Eventing:** Logic Apps/Power Automate capture inputs, store artifacts (like PDFs) in Blob Storage. Event Grid triggers Service Bus queues for reliable, decoupled processing, potentially triggering Application Backends.
3.  **Document Processing:** (Optional) Azure Functions triggered by Service Bus use Document Intelligence to parse unstructured data/documents into JSON, outputting results to Service Bus.
4.  **Application Backend & Orchestration Layer:** Server-side components handling user requests and orchestrating workflows.
    *   **Application Backends (e.g., Web App Backend, Teams Bot Backend):** Receive input from User Channels or Integration Layer. Manage channel-specific state. **Use the `d365-agent-mcpclient` SDK** for core logic. Handle secure configuration.
    *   **`d365-agent-mcpclient` SDK (Library - in `d365-agent-mcpclient` repo):** Contains the orchestration logic (workflows), state management primitives, and the MCP client implementation to communicate with the MCP Server. May optionally interact with LLMs.
5.  **MCP Server Layer (`d365-agent-mcpserver` Repo):**
    *   Hosted on Azure Container Apps for scalability.
    *   Implements the **MCP Server** interface using `@modelcontextprotocol/sdk`.
    *   Exposes D365 business logic as **MCP Tools**.
    *   Contains client logic and authentication handlers (using **Entra ID Client Credentials** via Key Vault) for interacting with various backend systems (D365 FO/AX OData, Dataverse API, external APIs).
    *   Includes routing logic to target specific D365 instances/legal entities based on context passed in MCP tool calls.
6.  **Backend Systems & Data:** The actual systems of record (multiple D365 instances, external services) and supporting data sources (catalogues, cache).
7.  **Observability & Learning:** Application Insights captures logs and traces across Application Backends, the SDK, and the MCP Server. Data Lake/Synapse stores telemetry for analysis. Azure ML jobs can mine this data to suggest improvements or new tools (feedback loop).
8.  **Security & Identity:** Entra ID provides user identity authentication for Application Backends and service identity via Client Credentials for the MCP Server's access to D365. Key Vault stores secrets. Network security is enforced via VNet integration and Private Endpoints.
9.  **DevOps - Multiple Repositories:** Code for different components resides in separate Git repositories (`d365-agent`, `d365-agent-infra`, `d365-agent-mcpserver`, `d365-agent-mcpclient`, etc.). CI/CD pipelines (GitHub Actions or Azure DevOps) in each repository automate testing and deployment.

## 4. Key Architectural Patterns

*   **Split Architecture:** Orchestration logic (the "what" and "when") resides in the **Application Backend layer, utilizing the `d365-agent-mcpclient` SDK**. The implementation details and privileged operations (the "how") reside in the external **MCP Server (`d365-agent-mcpserver`)**. This separation keeps sensitive operations, complex dependencies, and D365 authentication securely isolated within the scalable, independently deployable MCP Server (Container App), while allowing flexibility in the orchestration implementation.
*   **Modular Orchestration & Specialized Logic:** While not using a managed "Agent" service, the orchestration logic within the `d365-agent-mcpclient` SDK can be organized modularly by functional domain (e.g., Sales workflows, Procurement workflows). This specialization improves maintainability and aligns with functional expertise. These orchestration flows utilize the shared MCP Server, enabling reuse of common tools.
*   **Parameterized & Routed Tools:** Tools within the **MCP Server (`d365-agent-mcpserver`)** are designed to accept context parameters (e.g., `company`, `instance_url`) allowing a single tool implementation to interact with multiple D365 instances or legal entities via internal routing logic.
*   **Event-Driven Ingestion:** Using Event Grid and Service Bus ensures asynchronous, reliable handling of incoming requests from various channels, smoothing load and enabling retries.
*   **Dual User Context:** The orchestration logic (within the SDK/Application Backends) and underlying MCP tools adapt behavior and apply appropriate permissions based on whether the interacting user is internal or external, using mechanisms like Entra ID authentication and context passed through the interaction.
*   **Code-Based Orchestration:** Business process workflows (DAGs) are implemented in code within the `d365-agent-mcpclient` SDK. This provides flexibility for complex logic, error handling, and state management, potentially leveraging libraries like `pydantic-graph` if needed, or using simpler procedural/state machine patterns.

## 5. Technology Stack Summary

*   **Orchestration:** Custom logic within **`d365-agent-mcpclient` SDK** (e.g., TypeScript/Python), potentially using libraries like `pydantic-graph`. Optional LLM calls via Azure OpenAI or other providers, hosted within **Application Backends**.
*   **Business Logic/MCP Server:** Azure Container Apps (hosting the **`d365-agent-mcpserver` MCP Server**, likely built with Node.js/TypeScript and `@modelcontextprotocol/sdk`).
*   **Application Backends:** Hosted on Azure services like Web Apps, Functions, Bot Service, etc.
*   **Integration Components:** Azure Functions (e.g., for Document Processing), Logic Apps.
*   **ERP/CRM:** Dynamics 365 (FO, AX, CE/Dataverse) via OData/API.
*   **Messaging/Eventing:** Azure Service Bus, Azure Event Grid.
*   **Data Storage:** Azure Blob Storage, Azure Data Lake, Azure Cache for Redis.
*   **Intelligence:** Azure AI Document Intelligence, Azure OpenAI (optional, used by Application Backends).
*   **Observability:** Azure Application Insights, Azure Monitor, Log Analytics.
*   **Security:** Microsoft Entra ID (Client Credentials & User Identity), Azure Key Vault, Azure Networking (VNet, Private Endpoints).
*   **DevOps:** GitHub / Azure DevOps, Azure CLI, Bicep.

## 6. Deployment and Operations

*   Infrastructure is provisioned using Bicep/ARM templates from the `d365-agent-infra` repository.
*   The **MCP Server (`d365-agent-mcpserver`)** container image is deployed via its CI/CD pipeline to Azure Container Apps.
*   The **Client SDK (`d365-agent-mcpclient`)** is published as a library package (e.g., npm, PyPI) via its CI/CD pipeline.
*   **Application Backends** consume the SDK library and are deployed using their respective methods (e.g., Web Apps, Function Apps, Bot Service deployment).
*   Monitoring dashboards in Azure Monitor provide insights into performance and errors across the deployed components.
*   Autoscaling rules (KEDA on Container Apps for the MCP Server, App Service Plans/Consumption plans for Application Backends/Functions) handle varying loads.

## 7. Future Considerations

*   Implement the self-learning loop using Azure ML to analyze telemetry and suggest new **MCP tools** or orchestration logic improvements.
*   Explore richer state management patterns within the Client SDK or Application Backends if needed.
*   Consider adding a REST/OpenAPI interface alongside MCP on the `d365-agent-mcpserver` if direct integration with non-MCP clients becomes necessary.

This architecture provides a robust foundation for building AI-driven, orchestrated interactions with Dynamics 365, leveraging the strengths of Microsoft Azure PaaS and the MCP standard for communication between the orchestration layer and the D365 business logic server.
