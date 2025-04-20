# Architecture Vision: Dynamics 365 AI Agent via MCP

## 1. Introduction

This document outlines the architectural vision for a suite of specialized AI-powered agents (e.g., Sales Agent, Procurement Agent, Finance Agent) designed to interact with Microsoft Dynamics 365 (D365) and related systems. Each agent aims to automate and assist with business processes within its specific functional domain, serving both internal employees and external partners/customers. While specialized, these agents leverage a common underlying architecture and integration patterns.

**The core integration strategy leverages the Model Context Protocol (MCP)**. MCP acts as a standardized interface ("USB-C for AI") allowing AI models (like those in Azure AI Agent Service) to discover and interact with external tools and data sources (like D365 via an MCP Hub) in a consistent way. This approach is chosen over traditional bespoke APIs or platform-specific connectors (like Power Platform Custom Connectors alone) because MCP offers:
*   **Standardization & Discoverability:** Any MCP-compliant host (Azure AI Studio, Copilot Studio, Claude Desktop, VS Code extensions, etc.) can automatically discover and understand the capabilities (tools, data resources) exposed by an MCP server.
*   **Composability:** Capabilities from multiple MCP servers (e.g., first-party D365 actions provided by Microsoft for Finance/SCM, third-party services like Stripe, custom internal logic) can be seamlessly combined within a single agent session without complex integration code.
*   **Reduced Boilerplate:** Common needs like capability negotiation, function schemas (using JSON Schema for type safety), progress updates, streaming results (via JSON-RPC over HTTP+SSE), and cancellation are built into the protocol, reducing implementation effort.
*   **Core MCP Concepts:** Servers expose capabilities primarily as:
    *   **Tools:** Typed functions the agent can invoke (e.g., `create_sales_order`).
    *   **Resources:** Contextual data the agent can read (e.g., product catalogs, parsed documents).
    *   **Prompts:** Reusable prompt templates hosted by the server, often containing business logic.

The architecture prioritizes using Microsoft Azure's PaaS and AI services for a scalable, secure, and maintainable solution, with MCP providing the crucial link between the AI orchestration layer and the business logic/data layer.

## 2. Guiding Principles

*   **Microsoft Native:** Leverage Azure PaaS and AI services (Agent Service, Container Apps, Logic Apps, Functions, Entra ID, D365 OData) wherever possible.
*   **Modularity:** Decompose complex processes into smaller, reusable, and independently deployable components (Agent Flows/DAGs, MCP tools).
*   **Standardization:** Utilize MCP as the primary interface standard between the AI orchestration layer (Azure AI Agent Service) and backend business logic/data sources (MCP Hub). This involves the hub implementing the MCP specification (JSON-RPC 2.0 methods like `initialize`, `tools/call`, `resources/read` over HTTP/SSE). The interaction typically uses OAuth 2.0 client credentials flow via Azure AD for headless server authentication.
*   **Security:** Employ robust security practices, including Managed Identities, Entra ID authentication, Key Vault for secrets, and network isolation (VNet injection, Private Endpoints). No credentials in prompts or agent logic. Explicit user consent, granular permissions (via RBAC on Azure resources and potentially within D365), and sandboxing (where applicable) are crucial to mitigate risks like prompt injection or data exfiltration inherent in exposing capabilities to AI models.
*   **Scalability & Resilience:** Utilize scalable Azure services (Container Apps with KEDA, Service Bus, Functions) and incorporate patterns for handling load spikes and failures (queues, retries, DLQs).
*   **Observability:** Implement end-to-end tracing and monitoring using Application Insights and Azure Monitor.
*   **Maintainability:** Support CI/CD processes for automated testing and deployment of both agent logic (DAGs) and backend services (MCP Hub).

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

    subgraph Ingestion & Eventing
        direction LR
        IE1[Logic Apps / Power Automate] --> IE2(Azure Blob Storage)
        IE2 --> IE3(Event Grid) --> IE4(Service Bus Queues/Topics)
    end

    subgraph Document Processing
        direction LR
        DP1(Azure Function w/ Document Intelligence)
        IE4 --> DP1
    end

    subgraph AI Orchestration
        direction LR
        AO1(Azure AI Agent Service)
        AO1 -- Manages --> AO2(Agent Flows / DAGs - YAML)
        AO1 -- Invokes --> AO3[MCP Tools via Hub]
    end

    subgraph Business Logic & Integration Hub
        direction LR
        BL1(MCP Hub on Azure Container Apps)
        BL1 -- Exposes --> AO3
        BL1 -- Contains --> BL2[Auth Clients - D365/External]
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
        AO1 & BL1 & DP1 --> OB1
        OB1 --> OB2 --> OB3
    end

    subgraph Security & Identity
        direction LR
        SEC1(Microsoft Entra ID - Managed Identities)
        SEC2(Azure Key Vault)
        SEC3(VNet / Private Endpoints)
        BL1 -- Uses --> SEC1 & SEC2 & SEC3
        AO1 -- Uses --> SEC1 & SEC2
    end

    subgraph DevOps
        direction LR
        DEV1(GitHub / Azure DevOps - Repos)
        DEV2(CI/CD Pipelines - Actions/Pipelines)
        DEV3(Azure CLI / ML CLI / Bicep)
        DEV1 --> DEV2 --> AO1 & BL1 & DP1
        DEV2 -- Uses --> DEV3
    end

    %% Connections between layers
    User Channels --> IE1
    DP1 --> AO1
    User Channels --> AO1
```

**Component Breakdown:**

1.  **User Channels:** Interfaces (Email, Chat, Voice) where users interact with the agent.
2.  **Ingestion & Eventing:** Logic Apps/Power Automate capture inputs, store artifacts (like PDFs) in Blob Storage. Event Grid triggers Service Bus queues for reliable, decoupled processing.
3.  **Document Processing:** Azure Functions triggered by Service Bus use Document Intelligence to parse unstructured data/documents into JSON.
4.  **AI Orchestration:** Azure AI Agent Service hosts the core AI models and orchestration logic for the *various specialized agents* (e.g., Sales Agent, Procurement Agent). It manages the execution of specific business processes defined as modular Agent Flows (DAGs in YAML), which are mapped to specific agent capabilities (e.g., a `Process_Sales_Quote` flow for the Sales Agent, `Create_Purchase_Order` flow for the Procurement Agent). It interacts with the shared MCP Hub to invoke underlying tools required by these flows.
5.  **Business Logic & Integration Hub (MCP Hub):**
    *   Hosted on Azure Container Apps for scalability and Managed Identity support.
    *   Exposes business logic and data access capabilities as MCP tools (Resources, Tools, Prompts).
    *   Contains client logic and authentication handlers (using Managed Identity via Entra ID) for interacting with various backend systems (D365 FO/AX OData, Dataverse API, external APIs).
    *   Includes routing logic to target specific D365 instances/legal entities based on context.
6.  **Backend Systems & Data:** The actual systems of record (multiple D365 instances, external services) and supporting data sources (catalogues, cache).
7.  **Observability & Learning:** Application Insights captures logs and traces. Data Lake/Synapse stores telemetry for analysis. Azure ML jobs can mine this data to suggest improvements or new tools (feedback loop).
8.  **Security & Identity:** Entra ID provides authentication via Managed Identities. Key Vault stores secrets. Network security is enforced via VNet integration and Private Endpoints.
9.  **DevOps:** Code (agent DAGs, hub implementation, function code) is stored in Git. CI/CD pipelines automate testing and deployment to Azure using tools like Azure CLI and Bicep.

## 4. Key Architectural Patterns

*   **Split Architecture:** Orchestration logic (the "what" and "when") resides in Azure AI Agent Service (DAGs), while the implementation details and privileged operations (the "how") reside in the external MCP Hub. This separation is preferred over embedding all logic in the agent service or creating a "fat" hub because it leverages Agent Service's strengths in managing conversational state, DAG execution, and multi-LLM orchestration, while keeping sensitive operations, complex dependencies, and D365 authentication securely isolated within the scalable, independently deployable MCP Hub (Container App).
*   **Specialized Agents & Modular Flows:** The system comprises multiple, functionally-focused agents (Sales, Procurement, etc.). Each agent's capabilities are implemented as distinct Agent Flows (DAGs) within the Azure AI Agent Service. These flows group the logic relevant to that agent's domain (e.g., Sales Agent flows handle opportunities, quotes, orders). This specialization improves maintainability, aligns with functional expertise, and allows for targeted deployment and refinement of agent capabilities. While agents are specialized, they utilize the shared MCP Hub, enabling reuse of common tools (e.g., a `Get_Customer_Details` tool might be used by both Sales and Finance agents). A single user interaction might primarily engage one agent, but complex scenarios could potentially involve orchestrated handoffs or tool calls spanning different functional domains via the hub.
*   **Parameterized & Routed Tools:** Tools within the MCP Hub are designed to accept context parameters (e.g., `company`, `instance_url`) allowing a single tool implementation to interact with multiple D365 instances or legal entities via internal routing logic.
*   **Event-Driven Ingestion:** Using Event Grid and Service Bus ensures asynchronous, reliable handling of incoming requests from various channels, smoothing load and enabling retries.
*   **Dual User Context:** The agent and underlying tools adapt behavior and apply appropriate permissions based on whether the interacting user is internal or external, using mechanisms like Entra ID authentication and context passed through the interaction.
*   **Structured Agent Execution:** Leverage Azure AI Agent Service's capabilities (Agent Flows/DAGs) to enforce predictable, traceable execution sequences, rather than relying solely on less deterministic prompt chaining. This aligns with patterns like Planner-Executor or graph-based execution, providing better governance for complex business processes compared to simple ReAct loops alone, especially when multiple tools or conditional logic are involved.

## 5. Technology Stack Summary

*   **AI Orchestration:** Azure AI Agent Service, Azure OpenAI
*   **Business Logic/Integration:** Azure Container Apps (hosting Python/FastAPI/FastMCP server), Azure Functions
*   **ERP/CRM:** Dynamics 365 (FO, AX, CE/Dataverse) via OData/API
*   **Messaging/Eventing:** Azure Service Bus, Azure Event Grid
*   **Data Storage:** Azure Blob Storage, Azure Data Lake, Azure Cache for Redis
*   **Intelligence:** Azure AI Document Intelligence
*   **Observability:** Azure Application Insights, Azure Monitor, Log Analytics
*   **Security:** Microsoft Entra ID, Azure Key Vault, Azure Networking (VNet, Private Endpoints)
*   **DevOps:** GitHub / Azure DevOps, Azure CLI, Bicep

## 6. Deployment and Operations

*   Infrastructure is provisioned using Bicep/ARM templates.
*   Agent DAGs (YAML) and MCP Hub container images are deployed via CI/CD pipelines (GitHub Actions or Azure DevOps).
*   Monitoring dashboards in Azure Monitor provide insights into performance and errors.
*   Autoscaling rules (KEDA on Container Apps, Consumption plan for Functions) handle varying loads.

## 7. Future Considerations

*   Implement the self-learning loop using Azure ML to analyze telemetry and suggest new tools or prompt improvements, further enhancing agent capabilities over time.
*   Explore deeper integration with Power Platform components where applicable (e.g., using Power Automate flows as agent actions if complexity remains low).

This architecture provides a robust foundation for building a suite of specialized, secure, and scalable AI agents integrated with Dynamics 365, leveraging the strengths of Microsoft Azure and the MCP standard for common integration needs.
