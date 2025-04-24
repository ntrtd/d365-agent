# Architecture Fundamentals

This section outlines the fundamental architectural principles and the overall vision for the Dynamics 365 AI Agent SDK system.

## 1. Vision & Core Strategy

The goal is to facilitate AI-driven interactions with Microsoft Dynamics 365 (D365) and related systems, automating and assisting business processes across various domains (e.g., Sales, Procurement, Finance) for both internal and external users.

**The core integration strategy leverages the Model Context Protocol (MCP)**. MCP acts as a standardized interface allowing orchestration layers (**Application Backends using a Client Library**) to discover and interact with external tools and data sources (like D365 via an **MCP Server**) in a consistent, AI-centric way.

Key benefits of using MCP include:
*   **Standardization & Discoverability:** MCP clients can automatically understand the capabilities exposed by any compliant MCP server.
*   **Composability & Interoperability:** Capabilities from multiple MCP servers (D365, third-party services) can be combined seamlessly, regardless of implementation language.
*   **Reduced Boilerplate:** Handles protocol details like capability negotiation, schemas, progress updates, streaming, and cancellation.

The architecture prioritizes using Microsoft Azure PaaS and AI services for scalability, security, and maintainability.

## 2. Guiding Principles

*   **Microsoft Native:** Leverage Azure PaaS and AI services where appropriate.
*   **Modularity:** Decompose logic into orchestration (Client Libraries) and tool implementation (MCP Servers).
*   **Standardization:** Use MCP as the primary interface between orchestration and backend logic.
*   **Technology Flexibility:** Support **TypeScript/Node.js** or **C#/.NET** for key components (MCP Server, Client Library), using respective SDKs (`submodules/typescript-sdk`, `submodules/csharp-sdk`) and OData client generators ([`d365-agent-odataclient-ts`](https://github.com/ntrtd/d365-agent-odataclient-ts), [`d365-agent-odataclient-dotnet`](https://github.com/ntrtd/d365-agent-odataclient-dotnet)).
*   **Orchestration Flexibility:** Support various patterns like **AutoGen** (`submodules/autogen`), explicit **DAGs**, or potentially **CopilotKit CoAgents** (`submodules/CopilotKit`).
*   **Frontend Integration:** Facilitate rich in-app experiences using frameworks like **CopilotKit** or standard client-server patterns.
*   **Security:** Use Entra ID Client Credentials for service-to-service auth (D365), secure client-server communication, and user auth in Application Backends. Store secrets in Key Vault.
*   **Scalability & Resilience:** Utilize scalable Azure services and patterns like queues/retries.
*   **Observability:** Implement end-to-end monitoring with Application Insights.
*   **Maintainability:** Support CI/CD for all components via separate repositories.
*   **Partner Extensibility:** Design components to be extensible by partners, allowing them to tailor solutions to specific customer needs. This includes:
    *   Regenerating D365 OData clients ([`d365-agent-odataclient-*`](https://github.com/ntrtd/d365-agent-odataclient-ts)) against customer-specific D365 metadata (including customizations).
    *   Adding custom MCP tools to the MCP Server ([`d365-agent-mcpserver-*`](https://github.com/ntrtd/d365-agent-mcpserver-ts)) implementation 
    *   Extending or building custom orchestration logic within Application Backends using the Client Libraries ([`d365-agent-mcpclient-*`](https://github.com/ntrtd/d365-agent-mcpclient-ts)).

## 3. Core Architecture Layers (Simplified View)

```mermaid
graph TD
    subgraph User Channels
        direction LR
        UC1[Web/Mobile UI]
        UC2[Teams/Chat Bots]
        UC3[Email/Voice/Events]
    end

    subgraph Application Backend Layer
        direction LR
        AB1[App Backend (e.g., Web API, Bot Service, Function)]
        AB1 -- Uses --> SDK[Client Lib (d365-agent-mcpclient-*)]
    end

    subgraph MCP Server Layer
        direction LR
        MCP_SVR[MCP Server (d365-agent-mcpserver-*)]
        MCP_SVR -- Exposes --> MCP_TOOLS[MCP Tools]
    end

    subgraph Backend Systems
        direction TB
        D365[Dynamics 365 (FO/CE/...)]
        EXT[External APIs/Services]
    end

    User Channels --> AB1;
    AB1 -- via SDK --> MCP_SVR;
    MCP_SVR --> D365;
    MCP_SVR --> EXT;

```
*   **Presentation Layer / User Channels:** User interaction points.
*   **Application Backend Layer:** Handles requests, contains orchestration logic (using the Client Library), interacts with MCP Server.
*   **MCP Server Layer:** Exposes D365 operations as standardized MCP tools, handling direct interaction with D365 APIs.
*   **Backend Systems:** Dynamics 365 instances and other external services.

Refer to the detailed **[Application Architecture](./key-components.md)** document (derived from `docs/application_architecture.md`) for a breakdown of component responsibilities and interactions.
