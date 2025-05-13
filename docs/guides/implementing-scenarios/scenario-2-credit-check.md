# Scenario 2: Internal Sales Rep - Quick Credit Check via CopilotKit UI

*   **User:** Internal Sales Representative
*   **UI Channel:** CopilotKit UI (`d365-agent-ui`)
*   **Orchestrator:** Sales Agent (LangGraph) within `d365-agent-orchestrator`.
*   **Interaction Flow:**
    1.  Sales Rep asks in CopilotKit UI: "Credit status for Contoso (USMF)?"
    2.  **Application Orchestration Layer (`d365-agent-orchestrator`):** CopilotKit Runtime routes to Sales Agent LangGraph (or a simpler direct CopilotKit action if this is a single-step query).
    3.  **Orchestration Logic (Sales Agent - LangGraph or direct action):** Initiates `CheckCredit` workflow/node/action.
        *   Calls `Get_Customer_Remaining_Credit` D365 MCP tool on `d365-agent-mcpserver-dotnet` (using `d365-agent-mcpclient-ts`) with customer name/ID and company.
    4.  Receives credit info from the D365 MCP Server.
    5.  **Application Orchestration Layer (`d365-agent-orchestrator`):** Formats response and streams it back to the CopilotKit UI.
*   **Key Concepts:** Conversational UI (CopilotKit), LangGraph orchestration (or simple action), read-only D365 MCP tool.
