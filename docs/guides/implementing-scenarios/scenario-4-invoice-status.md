# Scenario 4: External Vendor - Invoice Status Inquiry via CopilotKit UI (Portal)

*   **User:** Vendor Accounts Receivable Clerk (External)
*   **UI Channel:** A supplier portal built with CopilotKit UI (`d365-agent-ui`).
*   **Orchestrator:** A specific LangGraph agent for vendor inquiries within `d365-agent-orchestrator`.
*   **Interaction Flow:**
    1.  Vendor asks in portal chat: "Status of invoice INV-98765?"
    2.  **Application Orchestration Layer (`d365-agent-orchestrator`):** Authenticates vendor, CopilotKit Runtime routes to Vendor Inquiry LangGraph agent.
    3.  **Orchestration Logic (Vendor Inquiry LangGraph):** Initiates `InvoiceStatus` workflow.
        *   Calls `Get_Invoice_Status` D365 MCP tool (on `d365-agent-mcpserver-dotnet` via `d365-agent-mcpclient-ts`).
    4.  Receives status from the D365 MCP Server.
    5.  **Application Orchestration Layer (`d365-agent-orchestrator`):** Formats response and streams back to CopilotKit UI.
*   **Key Concepts:** Authenticated external user interaction via CopilotKit, simple LangGraph orchestration, read-only D365 MCP tool.
