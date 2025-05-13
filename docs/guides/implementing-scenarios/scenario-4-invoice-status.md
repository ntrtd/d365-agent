# Scenario 4: External Vendor - Invoice Status Inquiry via CopilotKit UI (Portal)

*   **User:** Vendor Accounts Receivable Clerk (External)
*   **UI Channel:** A supplier portal built with `d365-agent-ui` (using CopilotKit).
*   **Orchestrator:** A domain-specific "VendorInquiryAgent" (LangGraph agent) or a simpler direct CopilotKit action within `d365-agent-orchestrator`. This would be invoked by a Master Orchestrator Agent or directly by the CopilotKit Runtime after user authentication.
*   **Interaction Flow:**
    1.  Vendor authenticates and asks in the portal chat (CopilotKit UI): "What is the status of my invoice INV-98765?"
    2.  **Application Orchestration Layer (`d365-agent-orchestrator`):** The CopilotKit Runtime, after ensuring user authentication (potentially handled by a Master Orchestrator or an initial auth step), routes the request.
        *   If a `VendorInquiryAgent` (LangGraph) is used: The request is passed to this agent.
        *   If a simpler CopilotKit action is sufficient: The action is invoked directly.
    3.  **Orchestration Logic (`VendorInquiryAgent` or direct action):**
        *   Identifies the intent (invoice status inquiry) and extracts the invoice number.
        *   **(Agent Enhancement - Predictive State):** Emits an intermediate state: "Fetching status for invoice INV-98765..."
        *   Calls the `Get_Invoice_Status` D365 MCP tool on `d365-agent-mcpserver-dotnet` (using `d365-agent-mcpclient-ts`), providing the invoice number and vendor context. This tool should return comprehensive details (status, dates, amount).
    4.  The D365 MCP Server returns the detailed invoice status information.
    5.  **Application Orchestration Layer (`d365-agent-orchestrator`):** The `VendorInquiryAgent` (or action) receives the data.
        *   **(UI Enhancement - Generative UI):** The agent triggers a **Generative UI** component to display the invoice information clearly:
            *   Invoice Number: INV-98765
            *   Status: Paid / Pending Payment / Overdue (with visual cues)
            *   Invoice Date: YYYY-MM-DD
            *   Due Date: YYYY-MM-DD
            *   Amount: $X
            *   Payment Date (if paid): YYYY-MM-DD
            *   Action Button (optional): "Download PDF" (if a tool `Get_Invoice_Document` exists)
            *   Action Button (optional): "Ask a question about this invoice" (initiates further dialogue)
        *   This rich UI is streamed back to the CopilotKit UI in the supplier portal.
*   **Key Architectural Concepts & Envisioned Capabilities:**
    *   **CopilotKit UI with Frontend Enhancements:** `Frontend Suggestions` could offer recent invoice numbers for the authenticated vendor.
    *   **Authentication:** Critical for securing vendor-specific data.
    *   **LangGraph Orchestration (Optional but powerful):** A `VendorInquiryAgent` can handle multi-turn conversations, follow-up questions, or guide users through disputes if the Generative UI includes such actions.
    *   **D365 MCP Tools:** Provide secure, granular access to D365 financial data.
    *   **Generative UI:** Transforms a simple status query into a rich, actionable information display, significantly improving user experience in the portal.
    *   **Predictive State Updates:** Informs the user while data is being fetched.
    *   **(Potential Copilot Cloud Enhancement):** A Copilot Cloud Knowledge Base could handle common vendor FAQs (e.g., "How do I submit an invoice?", "What are your payment terms?") before escalating to D365 queries.
