# Business Architecture: As-Is vs. To-Be with Dynamics 365 Interaction

This document outlines the current ("As-Is") business processes related to Dynamics 365 interactions and contrasts them with the envisioned future state ("To-Be") enabled by AI-driven orchestration leveraging the Model Context Protocol (MCP).

## 1. As-Is Business Architecture (Current State)

**Overview:** Current processes often involve significant manual effort, fragmented communication channels, and potentially bespoke or limited integrations between Dynamics 365 modules, instances, and external systems.

**Key Characteristics:**

*   **Manual Data Entry & Processing:**
    *   Internal staff often manually enter data from emails, PDFs (like POs), or other documents into Dynamics 365.
    *   Processing tasks like matching customer item numbers, validating orders against complex rules (credit, inventory, unit conversion), and creating related documents (e.g., POs for non-stock items) require manual lookups and actions within D365.
*   **Fragmented User Interaction:**
    *   Internal users rely on navigating multiple D365 screens or modules to gather information or perform tasks.
    *   External users (customers, vendors) interact through separate channels (email, phone calls, specific portal logins) often requiring manual follow-up from internal staff. Information retrieval (e.g., order status, pricing) can be slow.
*   **Siloed Information & Processes:**
    *   Accessing information or executing processes that span multiple D365 modules (e.g., checking SCM inventory availability while creating a Finance sales order) or multiple D365 instances (different legal entities in FO/AX) can be complex and require switching contexts or manual coordination.
    *   Integration with external systems (vendor catalogues, shipping carriers, payment providers) may be limited, non-existent, or rely on custom point-to-point integrations requiring ongoing maintenance.
*   **Inconsistent Rule Application:**
    *   Business rules (pricing, credit checks, validation logic) may be applied inconsistently depending on the user, channel, or manual process adherence. Updates to rules can be slow to propagate.
*   **Limited Proactivity:**
    *   Systems are primarily reactive. Identifying issues (e.g., potential stock-outs based on open requisitions, overdue invoices needing follow-up) relies heavily on manual reporting and user diligence.
*   **High Operational Overhead:**
    *   Significant time is spent on repetitive tasks, data reconciliation, error correction, and responding to routine inquiries, impacting efficiency and increasing operational costs.

## 2. To-Be Business Architecture (Future State with Orchestrated D365 Interaction)

**Overview:** The future state involves **Application Backend services** (e.g., for Web Chat, Teams Bot, Email processing) acting as intelligent, conversational interfaces and automation engines. These backends leverage the appropriate **Client Library** ([`d365-agent-mcpclient-ts`](https://github.com/ntrtd/d365-agent-mcpclient-ts) or [`d365-agent-mcpclient-dotnet`](https://github.com/ntrtd/d365-agent-mcpclient-dotnet)) to orchestrate interactions with Dynamics 365 and connected systems via the deployed **MCP Server** ([`d365-agent-mcpserver-ts`](https://github.com/ntrtd/d365-agent-mcpserver-ts) or [`d365-agent-mcpserver-dotnet`](https://github.com/ntrtd/d365-agent-mcpserver-dotnet)). This streamlines processes for both internal and external users, using MCP for standardized access to D365 data and functions exposed by the MCP Server.

**Key Characteristics:**

*   **Automated Data Ingestion & Processing:**
    *   Application Backends automatically ingest and parse information from various channels and formats (emails, PDFs, chat messages) potentially using AI services like Document Intelligence.
    *   The **Client Library's (`d365-agent-mcpclient-*`) orchestration logic (AutoGen or DAG)** automates domain-specific tasks like item matching, price lookups, validation against complex rules, and creation of D365 documents by invoking appropriate **MCP Tools** on the deployed MCP Server (`d365-agent-mcpserver-*`).
*   **Unified Conversational Interface (Per Channel):**
    *   Internal and external users interact with D365 capabilities through consistent conversational interfaces (Web Chat, Teams, etc.).
    *   Application Backends, using the Client Library, provide a focused point of contact for inquiries and task execution relevant to their channel, reducing the need to navigate complex D365 UIs. The library's orchestration logic routes requests to appropriate internal workflows based on user intent.
*   **Seamless Cross-Module & Cross-Instance Operations (via MCP Server):**
    *   The orchestration logic within the Client Library can invoke MCP Tools on the deployed MCP Server (`d365-agent-mcpserver-*`) that interact with data or processes across different D365 modules or instances. The MCP Server handles the underlying routing and interaction logic.
    *   **Composability:** MCP allows easy integration and composition of capabilities from diverse sources (first-party D365 via the deployed Server, third-party MCP servers, custom logic), enabling orchestrated workflows to leverage cross-functional tools.
*   **Consistent & Flexible Rule Enforcement:**
    *   Business rules are consistently applied during validation steps within the orchestration logic (in the Client Library) or within the MCP Tools themselves (on the MCP Server).
    *   Flexibility can be introduced by allowing certain rules to be configured or potentially adjusted via LLM prompts (within defined guardrails) invoked by the orchestration layer.
*   **Proactive Assistance & Insights:**
    *   Orchestration logic can potentially monitor D365 data (leveraging MCP tools via the Server) and proactively alert users or suggest actions (e.g., suggesting PO creation for requisitions, suggesting follow-up on overdue accounts).
    *   The system provides quick answers to complex queries, synthesizing information retrieved via the deployed MCP Server (`d365-agent-mcpserver-*`).
*   **Reduced Operational Overhead & Improved User Experience:**
    *   Automation of repetitive tasks frees up internal staff for higher-value activities.
    *   Faster response times and self-service capabilities improve the user experience.
    *   Standardized integration via MCP reduces overall complexity and cost compared to numerous disparate solutions.
*   **Enhanced Governance & Observability:**
    *   Code-based orchestration logic (AutoGen/DAG) and comprehensive telemetry provide clear audit trails and insights into automated processes.
    *   Centralized business logic within the MCP Server (`d365-agent-mcpserver-*`) for privileged D365 operations ensures consistency and control.

**Transition:** Moving from "As-Is" to "To-Be" involves implementing the common technical architecture (choosing and setting up the MCP Server `d365-agent-mcpserver-*`, Client Library `d365-agent-mcpclient-*`, Application Backends, OData Client `d365-agent-odataclient-*`, and integrations) and progressively developing and rolling out orchestration workflows and corresponding MCP Tools based on business value and user feedback.
