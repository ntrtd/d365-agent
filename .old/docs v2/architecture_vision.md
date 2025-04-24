# Architecture Vision: Dynamics 365 AI Agent via MCP

## 1. Introduction

This document outlines the architectural vision for a system designed to facilitate AI-driven interactions with Microsoft Dynamics 365 (D365) and related systems. The system aims to automate and assist with business processes across various functional domains (e.g., Sales, Procurement, Finance), serving both internal employees and external partners/customers.

**The core integration strategy leverages the Model Context Protocol (MCP)**. MCP acts as a standardized interface ("USB-C for AI") allowing orchestration layers (**Application Backends using a Client Library** - [`d365-agent-mcpclient-ts`](https://github.com/ntrtd/d365-agent-mcpclient-ts) or [`d365-agent-mcpclient-dotnet`](https://github.com/ntrtd/d365-agent-mcpclient-dotnet)) to discover and interact with external tools and data sources (like D365 via an **MCP Server** - [`d365-agent-mcpserver-ts`](https://github.com/ntrtd/d365-agent-mcpserver-ts) or [`d365-agent-mcpserver-dotnet`](https://github.com/ntrtd/d365-agent-mcpserver-dotnet)) in a consistent, AI-centric way. This approach is chosen over traditional bespoke APIs or platform-specific connectors alone because MCP offers:
*   **Standardization & Discoverability:** Any MCP-compliant host (e.g., the `d365-agent-mcpclient-*` libraries, Claude Desktop, VS Code extensions) can automatically discover and understand the capabilities (tools, data resources) exposed by an MCP server.
*   **Composability & Interoperability:** Capabilities from multiple MCP servers (e.g., a deployed `d365-agent-mcpserver-*`, third-party services) can potentially be seamlessly combined within a single orchestration session, regardless of the implementation language of the client or server.
*   **Reduced Boilerplate:** Common needs like capability negotiation, function schemas (using JSON Schema), progress updates, streaming results, and cancellation are built into the protocol, reducing implementation effort.
*   **Core MCP Concepts:** Servers expose capabilities primarily as:
    *   **Tools:** Typed functions the agent can invoke (e.g., `create_sales_order`).
    *   **Resources:** Contextual data the agent can read (e.g., product catalogs, parsed documents).
    *   **Prompts:** Reusable prompt templates hosted by the server, often containing business logic.

The architecture prioritizes using Microsoft Azure's PaaS and AI services (where applicable, e.g., for hosting, LLM calls, infrastructure) for a scalable, secure, and maintainable solution, with MCP providing the crucial link between the orchestration layer and the D365 business logic/data layer.

## 2. Guiding Principles

*   **Microsoft Native:** Leverage Azure PaaS services (Container Apps, Logic Apps, Functions, Entra ID, D365 OData) where appropriate for hosting and infrastructure. Utilize Azure AI services (like Azure OpenAI) for optional LLM interactions within the orchestration layer.
*   **Modularity:** Decompose complex processes into smaller, reusable components: orchestration logic within the Client Libraries ([`d365-agent-mcpclient-ts`](https://github.com/ntrtd/d365-agent-mcpclient-ts) / [`d365-agent-mcpclient-dotnet`](https://github.com/ntrtd/d365-agent-mcpclient-dotnet)), and MCP tools within the MCP Servers ([`d365-agent-mcpserver-ts`](https://github.com/ntrtd/d365-agent-mcpserver-ts) / [`d365-agent-mcpserver-dotnet`](https://github.com/ntrtd/d365-agent-mcpserver-dotnet)).
*   **Standardization:** Utilize MCP as the primary interface standard between the **orchestration layer (Client Libraries used by Application Backends)** and backend business logic/data sources (MCP Servers). This involves the server implementing the MCP specification.
*   **Technology Flexibility:** Allow implementation of MCP Server and Client Library components in either **TypeScript/Node.js** or **C#/.NET**, using the respective official SDKs (`submodules/typescript-sdk`, `submodules/csharp-sdk`) and OData client generators ([`d365-agent-odataclient-ts`](https://github.com/ntrtd/d365-agent-odataclient-ts), [`d365-agent-odataclient-dotnet`](https://github.com/ntrtd/d365-agent-odataclient-dotnet)).
*   **Orchestration Flexibility:** Support different orchestration patterns within the Client Library/Application Backend, including **AutoGen** (`submodules/autogen`) agent-based collaboration or explicit **DAG** definitions.
*   **Security:** Employ robust security practices: **Entra ID Client Credentials** for server-to-D365 authentication (secrets stored in Key Vault), secure communication between client and server, proper authorization within Application Backends. No sensitive credentials exposed to frontends or embedded directly in orchestration logic.
*   **Scalability & Resilience:** Utilize scalable Azure services (Container Apps with KEDA, Service Bus, Functions) and incorporate patterns for handling load spikes and failures (queues, retries, DLQs).
*   **Observability:** Implement end-to-end tracing and monitoring using Application Insights and Azure Monitor.
*   **Maintainability:** Support CI/CD processes within each repository for automated testing and deployment of infrastructure ([`d365-agent-infra`](https://github.com/ntrtd/d365-agent-infra)), MCP Servers (`d365-agent-mcpserver-*`), Client Libraries (`d365-agent-mcpclient-*`), OData Clients (`d365-agent-odataclient-*`), documentation ([`d365-agent`](https://github.com/ntrtd/d365-agent)), etc.

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
        AB1 -- Uses --> SDK[Client Lib (d365-agent-mcpclient-*)]
        AB2 -- Uses --> SDK
        SDK -- Invokes --> MCP_TOOLS[MCP Tools via Server]
    end

    subgraph MCP Server Layer (Repos: d365-agent-mcpserver-*)
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
        DEV1(GitHub / Azure DevOps - Repos: d365-agent, infra, mcpserver-*, mcpclient-*, odataclient-*)
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
    *   **Application Backends (e.g., Web App Backend, Teams Bot Backend):** Receive input from User Channels or Integration Layer. Manage channel-specific state. **Use the appropriate Client Library** ([`d365-agent-mcpclient-ts`](https://github.com/ntrtd/d365-agent-mcpclient-ts) or [`d365-agent-mcpclient-dotnet`](https://github.com/ntrtd/d365-agent-mcpclient-dotnet)) for core logic. Handle secure configuration.
    *   **Client Libraries (Repos: [`d365-agent-mcpclient-ts`](https://github.com/ntrtd/d365-agent-mcpclient-ts) / [`d365-agent-mcpclient-dotnet`](https://github.com/ntrtd/d365-agent-mcpclient-dotnet)):** Contains the orchestration logic (AutoGen or DAG), state management primitives, and the MCP client implementation to communicate with the MCP Server. May optionally interact with LLMs.
5.  **MCP Server Layer (Repos: [`d365-agent-mcpserver-ts`](https://github.com/ntrtd/d365-agent-mcpserver-ts) / [`d365-agent-mcpserver-dotnet`](https://github.com/ntrtd/d365-agent-mcpserver-dotnet)):**
    *   Hosted on Azure Container Apps for scalability.
    *   Implements the **MCP Server** interface using the appropriate SDK (`@modelcontextprotocol/sdk` for TS, `ModelContextProtocol` for C#).
    *   Exposes D365 business logic as **MCP Tools**.
    *   Contains client logic (using generated clients from [`d365-agent-odataclient-ts`](https://github.com/ntrtd/d365-agent-odataclient-ts) / [`d365-agent-odataclient-dotnet`](https://github.com/ntrtd/d365-agent-odataclient-dotnet)) and authentication handlers (using **Entra ID Client Credentials** via Key Vault) for interacting with D365.
    *   Includes routing logic to target specific D365 instances/legal entities based on context passed in MCP tool calls.
6.  **Backend Systems & Data:** The actual systems of record (multiple D365 instances, external services) and supporting data sources (catalogues, cache).
7.  **Observability & Learning:** Application Insights captures logs and traces across Application Backends, the Client Library, and the MCP Server. Data Lake/Synapse stores telemetry for analysis. Azure ML jobs can mine this data to suggest improvements or new tools (feedback loop).
8.  **Security & Identity:** Entra ID provides user identity authentication for Application Backends and service identity via Client Credentials for the MCP Server's access to D365. Key Vault stores secrets. Network security is enforced via VNet integration and Private Endpoints.
9.  **DevOps - Multiple Repositories:** Code for different components resides in separate Git repositories ([`d365-agent`](https://github.com/ntrtd/d365-agent), [`d365-agent-infra`](https://github.com/ntrtd/d365-agent-infra), `d365-agent-mcpserver-*`, `d365-agent-mcpclient-*`, `d365-agent-odataclient-*`, etc.). CI/CD pipelines in each repository automate testing and deployment.

## 4. Key Architectural Patterns

*   **Split Architecture:** Orchestration logic (the "what" and "when") resides in the **Application Backend layer, utilizing the Client Libraries** (`d365-agent-mcpclient-*`). The implementation details and privileged D365 operations (the "how") reside in the external **MCP Server** (`d365-agent-mcpserver-*`). This separation isolates sensitive operations and D365 authentication within the scalable MCP Server, while allowing flexibility (AutoGen vs. DAG, TS vs. C#) in the orchestration implementation.
*   **Modular Orchestration & Shared Tools:** Orchestration logic within the Client Libraries can be organized modularly by functional domain (e.g., Sales, Procurement). These orchestrations utilize the tools exposed by the *single deployed* MCP Server instance, enabling reuse of common D365 interaction logic.
*   **Parameterized & Routed Tools:** Tools within the MCP Server (`d365-agent-mcpserver-*`) are designed to accept context parameters (e.g., `company`) allowing a single tool implementation to interact with multiple D365 instances via internal routing logic.
*   **Event-Driven Ingestion:** Using Event Grid and Service Bus ensures asynchronous, reliable handling of incoming requests.
*   **Dual User Context:** Orchestration logic and MCP tools adapt behavior and permissions based on user context (internal/external).
*   **Flexible Orchestration:** Business process workflows can be implemented using **AutoGen** agents or explicit **DAGs** within the Client Libraries (`d365-agent-mcpclient-*`).

## 5. Technology Stack Summary

*   **Orchestration:** Custom logic within **Client Libraries** ([`d365-agent-mcpclient-ts`](https://github.com/ntrtd/d365-agent-mcpclient-ts) / [`d365-agent-mcpclient-dotnet`](https://github.com/ntrtd/d365-agent-mcpclient-dotnet)) using **TypeScript** or **C#/.NET**. May utilize **AutoGen** (`submodules/autogen`). Optional LLM calls via Azure OpenAI hosted within **Application Backends**.
*   **Business Logic/MCP Server:** Azure Container Apps hosting the chosen MCP Server implementation ([`d365-agent-mcpserver-ts`](https://github.com/ntrtd/d365-agent-mcpserver-ts) with **Node.js/TypeScript** and `@modelcontextprotocol/sdk` OR [`d365-agent-mcpserver-dotnet`](https://github.com/ntrtd/d365-agent-mcpserver-dotnet) with **C#/.NET** and `ModelContextProtocol`).
*   **D365 Client:** Generated via [`d365-agent-odataclient-ts`](https://github.com/ntrtd/d365-agent-odataclient-ts) (using `submodules/odata2ts`) or [`d365-agent-odataclient-dotnet`](https://github.com/ntrtd/d365-agent-odataclient-dotnet) (using `submodules/ODataConnectedService`).
*   **Application Backends:** Hosted on Azure services like Web Apps, Functions, Bot Service, etc. (Language choice depends on Client Library).
*   **Integration Components:** Azure Functions (e.g., for Document Processing), Logic Apps.
*   **ERP/CRM:** Dynamics 365 (FO, AX, CE/Dataverse) via OData/API.
*   **Messaging/Eventing:** Azure Service Bus, Azure Event Grid.
*   **Data Storage:** Azure Blob Storage, Azure Data Lake, Azure Cache for Redis.
*   **Intelligence:** Azure AI Document Intelligence, Azure OpenAI (optional, used by Application Backends).
*   **Observability:** Azure Application Insights, Azure Monitor, Log Analytics.
*   **Security:** Microsoft Entra ID (Client Credentials & User Identity), Azure Key Vault, Azure Networking (VNet, Private Endpoints).
*   **DevOps:** GitHub / Azure DevOps, Azure CLI, Bicep.

## 6. Deployment and Operations

*   Infrastructure is provisioned using Bicep/ARM templates from the [`d365-agent-infra`](https://github.com/ntrtd/d365-agent-infra) repository.
*   The chosen **MCP Server** ([`d365-agent-mcpserver-ts`](https://github.com/ntrtd/d365-agent-mcpserver-ts) or [`d365-agent-mcpserver-dotnet`](https://github.com/ntrtd/d365-agent-mcpserver-dotnet)) container image is deployed via its CI/CD pipeline to Azure Container Apps.
*   The chosen **Client Library** ([`d365-agent-mcpclient-ts`](https://github.com/ntrtd/d365-agent-mcpclient-ts) or [`d365-agent-mcpclient-dotnet`](https://github.com/ntrtd/d365-agent-mcpclient-dotnet)) is published as a package (npm or NuGet) via its CI/CD pipeline.
*   **Application Backends** consume the appropriate Client Library package and are deployed using their respective methods.
*   Monitoring dashboards in Azure Monitor provide insights into performance and errors across the deployed components.
*   Autoscaling rules (KEDA on Container Apps for the MCP Server, App Service Plans/Consumption plans for Application Backends/Functions) handle varying loads.

## 7. Future Considerations

*   Implement the self-learning loop using Azure ML to analyze telemetry and suggest improvements for **MCP tools** (in `d365-agent-mcpserver-*`) or orchestration logic (in `d365-agent-mcpclient-*`).
*   Explore richer state management patterns within the Client Libraries or Application Backends if needed.
*   Consider adding a REST/OpenAPI interface alongside MCP on the deployed `d365-agent-mcpserver-*` instance if direct integration with non-MCP clients becomes necessary.

This architecture provides a robust and flexible foundation for building AI-driven, orchestrated interactions with Dynamics 365, leveraging Microsoft Azure PaaS and the MCP standard for communication, while offering choices in implementation language and orchestration strategy.
