# Scenario 5: Internal Technician - Request Asset Maintenance via Voice (CopilotKit UI)

*   **User:** Field Service Technician (Internal)
*   **UI Channel:** CopilotKit UI (`d365-agent-ui`) with voice input capabilities.
*   **Orchestrator:** Asset Management Agent (LangGraph) within `d365-agent-orchestrator`.
*   **Interaction Flow:**
    1.  Technician speaks into CopilotKit UI: "Need maintenance for ASSET-007 at Contoso, error E5."
    2.  **(UI `d365-agent-ui`):** Captures audio, sends to Speech-to-Text service (e.g., Azure Cognitive Services, or browser-native). Transcribed text sent to CopilotKit Runtime.
    3.  **Application Orchestration Layer (`d365-agent-orchestrator`):** CopilotKit Runtime routes to Asset Management LangGraph agent.
    4.  **Orchestration Logic (Asset Management LangGraph):** Initiates `CreateMaintenanceWorkOrder` workflow.
        *   Calls `get_asset_details` D365 MCP tool (on `d365-agent-mcpserver-dotnet` via `d365-agent-mcpclient-ts`).
        *   Calls `find_available_resources` D365 MCP tool.
        *   Calls `create_asset_management_work_order` / `create_field_service_work_order` D365 MCP tools.
    5.  Receives confirmation from the D365 MCP Server.
    6.  **Application Orchestration Layer (`d365-agent-orchestrator`):** Formats text response.
    7.  **(UI `d365-agent-ui`):** Receives text response, uses Text-to-Speech service (e.g., Azure Cognitive Services, or browser-native) to play audio response.
*   **Key Concepts:** Voice channel integration via CopilotKit UI, Speech-to-Text/Text-to-Speech, multi-step LangGraph orchestration, transactional D365 MCP tools.
