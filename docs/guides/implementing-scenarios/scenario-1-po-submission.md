# Scenario 1: External Customer - Purchase Order Submission via Email/UI

*   **User:** Customer Procurement Agent (External)
*   **UI Channel:** CopilotKit UI (`d365-agent-ui`) for direct upload, or an Email Ingestion Service for email submissions.
*   **Orchestrator:** Purchase Agent (LangGraph) within `d365-agent-orchestrator`.
*   **Interaction Flow (Email Triggered):**
    1.  Customer emails a PDF purchase order.
    2.  **(Integration):** An Email Ingestion Service (e.g., Logic App, custom containerized service) ingests the email, stores the PDF (e.g., Blob Storage).
    3.  The Email Ingestion Service calls a dedicated API endpoint on `d365-agent-orchestrator` to initiate the PO processing LangGraph agent.
    4.  **Orchestration Logic (Purchase Agent - LangGraph in `d365-agent-orchestrator`):** Executes the PO Processing state machine:
        *   **Receive:** Gets PDF reference.
        *   **Extraction:** A LangGraph node directly calls **OpenAI services** (e.g., GPT-4 with vision or other document processing capabilities) to extract structured data from the PDF.
        *   **Test Posting Invoice (OData D365):** Calls the `simulateInvoicePostToD365` MCP tool on `d365-agent-mcpserver-dotnet` (using `d365-agent-mcpclient-ts`).
        *   **Create XML:** Generates invoice XML based on extracted and validated data.
        *   **Post to FTP/Blob:** Uploads XML for D365 async ingestion.
    5.  **Application Orchestration Layer (`d365-agent-orchestrator`):** Sends confirmation/error email back to the customer (or updates status for UI if initiated there).
*   **Interaction Flow (UI Upload):**
    1.  User uploads PDF PO via CopilotKit UI (`d365-agent-ui`).
    2.  UI sends file/command to CopilotKit Runtime in `d365-agent-orchestrator`.
    3.  CopilotKit Runtime invokes the Purchase Agent LangGraph.
    4.  The LangGraph agent in `d365-agent-orchestrator` executes the same PO Processing state machine as above (including direct OpenAI calls for extraction and MCP calls to `d365-agent-mcpserver-dotnet` for D365 steps).
    5.  Status updates are streamed back to the CopilotKit UI via shared state.
*   **Key Concepts:** Headless integration (email), interactive UI (CopilotKit), document processing via direct OpenAI calls within LangGraph, multi-step stateful orchestration with LangGraph, D365 MCP tool calls (to `.NET` server) for validation.
