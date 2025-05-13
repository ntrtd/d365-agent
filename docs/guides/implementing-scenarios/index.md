# Implementing Scenarios

This section provides illustrative scenarios demonstrating how the Dynamics 365 AI Agent system can assist various users with Dynamics 365 related tasks.

The examples assume a **CopilotKit UI** (from `d365-agent-ui`) interacts with the **Application Orchestration Layer** (repo: [`d365-agent-orchestrator`](https://github.com/ntrtd/d365-agent-orchestrator)). This TypeScript/Node.js layer hosts the **CopilotKit Runtime** and uses **LangGraph (TypeScript)** to define specific agents (e.g., Purchase Agent, Sales Agent) that orchestrate workflows. These LangGraph agents use the **`d365-agent-mcpclient-ts`** (TypeScript MCP Client Library) to interact with a deployed **D365 MCP Server** (specifically `d365-agent-mcpserver-dotnet`) via MCP tool calls. Document parsing for scenarios like PO ingestion is handled directly by the LangGraph agent using OpenAI services.

Below are links to detailed scenarios:

*   **[Scenario 1: External Customer - Purchase Order Submission via Email/UI](./scenario-1-po-submission.md)**
*   **[Scenario 2: Internal Sales Rep - Quick Credit Check via CopilotKit UI](./scenario-2-credit-check.md)**
*   **[Scenario 3: Internal Purchaser - Convert Approved Requisition to PO via CopilotKit UI](./scenario-3-requisition-to-po.md)**
*   **[Scenario 4: External Vendor - Invoice Status Inquiry via CopilotKit UI (Portal)](./scenario-4-invoice-status.md)**
*   **[Scenario 5: Internal Technician - Request Asset Maintenance via Voice (CopilotKit UI)](./scenario-5-asset-maintenance.md)**
*   **[Scenario 6: End-to-End Cut-to-Size (CTS) Order Processing](./scenario-6-cut-to-size-order.md)**

These scenarios demonstrate the flexibility of the architecture in handling diverse users, channels (primarily CopilotKit UI), and business processes through LangGraph orchestration and standardized D365 MCP tool integration.
