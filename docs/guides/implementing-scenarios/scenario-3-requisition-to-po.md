# Scenario 3: Internal Purchaser - Convert Approved Requisition to PO via CopilotKit UI

*   **User:** Internal Purchaser
*   **UI Channel:** CopilotKit UI (`d365-agent-ui`)
*   **Orchestrator:** Purchase Agent (LangGraph) within `d365-agent-orchestrator`.
*   **Interaction Flow:**
    1.  Purchaser asks in CopilotKit UI: "Create POs for my approved reqs in FR01."
    2.  **Application Orchestration Layer (`d365-agent-orchestrator`):** CopilotKit Runtime routes to Purchase Agent LangGraph.
    3.  **Orchestration Logic (Purchase Agent - LangGraph):** Initiates `RequisitionToPO` workflow.
        *   Calls `Get_Open_Requisitions` D365 MCP tool (on `d365-agent-mcpserver-dotnet` via `d365-agent-mcpclient-ts`).
        *   (Optional) Calls vendor selection/assignment D365 MCP tools if needed.
        *   Calls `Create_Purchase_Orders_from_Requisitions` D365 MCP tool.
    4.  Receives confirmation/errors from the D365 MCP Server.
    5.  **Application Orchestration Layer (`d365-agent-orchestrator`):** Formats response and streams it back to CopilotKit UI.
*   **Key Concepts:** Conversational UI (CopilotKit), multi-step LangGraph orchestration, potentially conditional logic, transactional D365 MCP tools.
