# Scenario 5: Internal Technician - Request Asset Maintenance via Voice (CopilotKit UI)

*   **User:** Field Service Technician (Internal)
*   **UI Channel:** `d365-agent-ui` (built with CopilotKit), enhanced with voice input/output capabilities.
*   **Orchestrator:** A domain-specific "AssetMaintenanceAgent" (LangGraph agent) within `d365-agent-orchestrator`. This agent would be invoked by a Master Orchestrator Agent or directly by the CopilotKit Runtime.
*   **Interaction Flow:**
    1.  Technician speaks into the CopilotKit UI: "Need maintenance for ASSET-007 at Contoso, error code E5."
    2.  **UI (`d365-agent-ui`):**
        *   Captures audio.
        *   Uses a Speech-to-Text service to transcribe.
        *   **(UI Enhancement - Frontend RAG):** As "error code E5" is transcribed, `Frontend RAG` might instantly display "E5: Low Pressure Warning" from a local error code database/file, providing immediate context to the technician.
        *   Sends the transcribed text (and potentially structured entities if client-side parsing occurs) to the CopilotKit Runtime.
    3.  **Application Orchestration Layer (`d365-agent-orchestrator`):** The CopilotKit Runtime routes the request to the `AssetMaintenanceAgent`.
    4.  **Orchestration Logic (`AssetMaintenanceAgent` - LangGraph):** Initiates its `CreateMaintenanceWorkOrder` workflow.
        *   **Parse & Clarify Request (Generative UI):** Extracts asset ID, location, error code. If any are ambiguous (e.g., multiple assets match "ASSET-007" at "Contoso"), uses **Generative UI** to present options for the technician to select. Emits state "Awaiting clarification on asset/location...".
        *   **Fetch Asset Details:** Once clarified, emits state "Fetching details for ASSET-007...". Calls `get_asset_details` D365 MCP tool.
        *   **(Optional) Troubleshooting (Copilot Cloud KB):** Before WO creation, the agent could query a Copilot Cloud Knowledge Base for "Error E5 on Asset Type X" to suggest quick troubleshooting steps via Generative UI. Technician can indicate if resolved or to proceed.
        *   **Resource Check (Optional):** Emits state "Checking resource availability...". Calls `find_available_resources` D365 MCP tool.
        *   **Confirmation (Generative UI):** Presents a summary: "Create WO for ASSET-007 (Pump XYZ) at Contoso Main Site, Error E5 (Low Pressure). Notes: [Technician can add notes here via input field in GenUI]". Technician confirms.
        *   **Create Work Order:** Emits state "Creating work order...". Calls `create_asset_management_work_order` D365 MCP tool.
    5.  The D365 MCP Server returns confirmation (e.g., WO_NUMBER) or errors.
    6.  **Application Orchestration Layer (`d365-agent-orchestrator`):** The `AssetMaintenanceAgent` formats the final response (e.g., "Work order [WO_NUMBER] created for ASSET-007.") and updates its state.
    7.  **UI (`d365-agent-ui`):**
        *   Displays the final text response and any intermediate Generative UI components.
        *   Uses Text-to-Speech to play the final confirmation.
*   **Key Architectural Concepts & Envisioned Capabilities:**
    *   **CopilotKit UI with Voice & Frontend RAG:** For quick, contextual information (like error code descriptions) directly in the UI.
    *   **LangGraph for Orchestration:** Manages a potentially interactive workflow with clarification steps.
    *   **Generative UI:** Essential for disambiguation (selecting correct asset/location) and for final confirmation before committing to D365, allowing technicians to add crucial notes.
    *   **Predictive State Updates:** Keeps the technician informed during each phase (fetching details, checking resources, creating WO).
    *   **D365 MCP Tools:** For reliable D365 interactions.
    *   **(Potential Copilot Cloud Enhancement):** A Knowledge Base for troubleshooting common asset issues could reduce unnecessary work orders. Memory could recall past issues with the specific asset.
