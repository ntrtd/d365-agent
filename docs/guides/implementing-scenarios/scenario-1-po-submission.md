# Scenario 1: External Customer - Purchase Order Submission via Email/UI

*   **User:** Customer Procurement Agent (External)
*   **UI Channel:** `d365-agent-ui` (built with CopilotKit) for direct upload, or an Email Ingestion Service for email submissions.
*   **Orchestrator:** A domain-specific "POProcessingAgent" (LangGraph agent) within the `d365-agent-orchestrator`. This agent might be invoked by a Master Orchestrator Agent or directly by the CopilotKit Runtime based on user intent.
*   **Interaction Flow (Email Triggered):**
    1.  Customer emails a PDF purchase order.
    2.  **(Integration):** An Email Ingestion Service (e.g., Logic App, custom containerized service) ingests the email, stores the PDF (e.g., Blob Storage).
    3.  The Email Ingestion Service calls a dedicated API endpoint on `d365-agent-orchestrator` (which hosts the CopilotKit Runtime) to initiate the `POProcessingAgent`.
    4.  **Orchestration Logic (`POProcessingAgent` - LangGraph in `d365-agent-orchestrator`):** Executes its PO Processing state machine:
        *   **Receive & Initial Acknowledgment:** Gets PDF reference. (UI: Could use a `Frontend Action` for immediate "Upload received, processing..." message).
        *   **Extraction:** A LangGraph node directly calls **OpenAI services** to extract structured data. The agent emits intermediate state updates (e.g., "Extracting header data...", "Processing line items...").
        *   **Data Review (Generative UI - for UI flow):** If submitted via UI, the agent uses **Generative UI** to present the extracted PO data (vendor, items, quantities, dates) in a structured format within the chat. The user can review and confirm. If discrepancies are noted, the user can provide corrections, which updates the agent's state.
        *   **Validation/D365 Interaction:** After confirmation (or directly for email flow), calls relevant D365 MCP tools (e.g., `validateVendor`, `checkItemAvailability`, `simulateInvoicePostToD365`). Each step's progress (e.g., "Vendor validated.", "Item availability confirmed.") can be streamed to the UI using predictive state updates (`copilotkit_emit_state`).
        *   **Create XML/Integration Format:** Generates the required format.
        *   **Post to FTP/Blob:** Uploads the file.
    5.  **Notification & Final Status:** The `POProcessingAgent` updates its final state (e.g., "PO successfully submitted for processing" or "Error: [details]"). This state is reflected in the UI. For email submissions, a notification email is sent.
*   **Interaction Flow (UI Upload):**
    1.  User uploads PDF PO via the CopilotKit UI (`d365-agent-ui`). (UI: A `Frontend Action` could provide immediate feedback like "File selected: your_po.pdf. Ready to submit?").
    2.  The UI, through the CopilotKit Runtime in `d365-agent-orchestrator`, invokes the `POProcessingAgent` LangGraph, passing the file reference.
    3.  The `POProcessingAgent` executes its state machine:
        *   **Extraction:** As above, with intermediate state updates.
        *   **Generative UI for Review:** Presents extracted data. User confirms/corrects.
        *   **Validation & D365 Interaction:** As above, with predictive state updates.
        *   **Final Processing & Status Update:** Completes XML generation and FTP upload.
    4.  The final status and any relevant confirmation details (e.g., internal processing ID) from the `POProcessingAgent` are streamed back to the CopilotKit UI via CopilotKit's shared state mechanism and displayed.
*   **Key Architectural Concepts & Envisioned Capabilities:**
    *   **CopilotKit UI with Frontend Actions:** For responsive client-side feedback during submission.
    *   **LangGraph for Orchestration:** The `POProcessingAgent` manages the stateful workflow.
    *   **Direct OpenAI Integration & Backend RAG:** For robust PDF data extraction.
    *   **Generative UI:** Crucial for user review and confirmation of extracted PO data, enhancing accuracy before D365 interaction.
    *   **Predictive State Updates:** Provides transparency to the user during multi-step D365 validation processes.
    *   **D365 MCP Tools:** Standardized D365 interactions.
    *   **Headless Integration:** Supported via email.
    *   **(Potential Copilot Cloud Enhancement):** Use Copilot Cloud Analytics to track PO processing times, extraction accuracy rates, and common validation errors to identify areas for process or agent improvement.
