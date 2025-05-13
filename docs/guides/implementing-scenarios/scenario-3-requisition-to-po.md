# Scenario 3: Internal Purchaser - Convert Approved Requisition to PO via CopilotKit UI

*   **User:** Internal Purchaser
*   **UI Channel:** `d365-agent-ui` (built with CopilotKit).
*   **Orchestrator:** A domain-specific "ProcurementAgent" (LangGraph agent) within `d365-agent-orchestrator`. This agent would be invoked by a Master Orchestrator Agent or directly by the CopilotKit Runtime.
*   **Interaction Flow:**
    1.  Purchaser asks in the CopilotKit UI: "Create POs for my approved requisitions in company FR01."
        *   **(UI Enhancement - Frontend Action/RAG):** If "FR01" is a common company for the user, it could be pre-filled or suggested via `Frontend Action` or `Frontend RAG` from user settings.
    2.  **Application Orchestration Layer (`d365-agent-orchestrator`):** The CopilotKit Runtime routes the request to the `ProcurementAgent`.
    3.  **Orchestration Logic (`ProcurementAgent` - LangGraph):** Initiates its `RequisitionToPO` workflow/state machine.
        *   **Fetch Requisitions:** Emits state "Fetching approved requisitions for FR01...". Calls the `Get_Open_Requisitions` D365 MCP tool.
        *   **Review & Select Requisitions (Generative UI):**
            *   The agent receives the list of requisitions.
            *   It uses **Generative UI** to display a selectable list of these requisitions in the chat (e.g., Req ID, Description, Amount, Date).
            *   The purchaser reviews and selects the requisitions to proceed with (or confirms all). This interaction updates the agent's state via the `CoAgents Socket`.
        *   **Vendor Logic (Optional):** For selected requisitions, if they lack vendors or require re-evaluation, the agent emits state "Performing vendor assignment...". It then invokes D365 MCP tools for vendor selection/assignment. This step might involve further conditional logic or even sub-dialogues if vendor choices are ambiguous.
        *   **Create Purchase Orders:** For each confirmed requisition, the agent emits state "Creating PO for Req [Req_ID]...". It calls the `Create_Purchase_Orders_from_Requisitions` D365 MCP tool.
    4.  The D365 MCP Server returns confirmation of PO creation or any errors for each attempt.
    5.  **Application Orchestration Layer (`d365-agent-orchestrator`):** The `ProcurementAgent` aggregates results.
        *   **(UI Enhancement - Generative UI for Results):** It uses **Generative UI** to present a summary:
            *   List of successfully created POs (with links or numbers).
            *   List of any requisitions that failed conversion, with error messages and potential actions (e.g., "Retry", "Edit Requisition", "Notify Admin").
        *   This final state/summary is streamed back to the CopilotKit UI.
*   **Key Architectural Concepts & Envisioned Capabilities:**
    *   **CopilotKit UI with Frontend Enhancements:** For smarter input and suggestions.
    *   **LangGraph for Orchestration:** The `ProcurementAgent` manages a complex, potentially interactive workflow.
    *   **Generative UI:** Empowers the user with review, selection, and detailed error reporting capabilities directly within the chat.
    *   **Predictive State Updates:** Keeps the user informed throughout the fetching, vendor assignment, and PO creation steps.
    *   **D365 MCP Tools:** Provides robust transactional capabilities.
    *   **Shared State & CoAgents Socket:** Enables the interactive review and selection process.
    *   **(Potential Copilot Cloud Enhancement):** If vendor selection involves complex rules or external data (e.g., supplier risk scores), Copilot Cloud's AI Router could direct this sub-task to a specialized model, or a Knowledge Base could provide supplier information.
