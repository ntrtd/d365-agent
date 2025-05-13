# Scenario 2: Internal Sales Rep - Quick Credit Check via CopilotKit UI

*   **User:** Internal Sales Representative
*   **UI Channel:** `d365-agent-ui` (built with CopilotKit).
*   **Orchestrator:** A domain-specific "SalesInfoAgent" (LangGraph agent) or a simpler direct CopilotKit action within `d365-agent-orchestrator`. This might be invoked by a Master Orchestrator Agent (e.g., for initial query disambiguation) or directly by the CopilotKit Runtime.
*   **Interaction Flow:**
    1.  Sales Rep types in the CopilotKit UI: "Credit status for Contoso (USMF)?".
        *   **(UI Enhancement - Frontend Suggestions):** As the rep types "Credit status for...", CopilotKit's `Frontend Suggestions` could offer a list of recently accessed or key customers.
        *   **(UI Enhancement - Frontend Action):** A client-side `Frontend Action` could parse "Contoso (USMF)" into structured data `{ customer: "Contoso", company: "USMF" }` before sending.
    2.  **Application Orchestration Layer (`d365-agent-orchestrator`):** The CopilotKit Runtime routes the (potentially pre-structured) request.
        *   If a `SalesInfoAgent` (LangGraph) is used: The request is passed to this agent. It might first confirm the customer if parsing was ambiguous.
        *   If a simpler CopilotKit action is sufficient: The action is invoked.
    3.  **Orchestration Logic (`SalesInfoAgent` or direct action):**
        *   Identifies the intent (credit check).
        *   Calls the `Get_Customer_Remaining_Credit` D365 MCP tool on `d365-agent-mcpserver-dotnet` (using `d365-agent-mcpclient-ts`) with the customer name/ID and company.
        *   **(Agent Enhancement - Predictive State):** The agent could emit an intermediate state: "Fetching credit status for Contoso (USMF)..."
    4.  The D365 MCP Server returns the credit information (e.g., limit, balance, hold status).
    5.  **Application Orchestration Layer (`d365-agent-orchestrator`):** The `SalesInfoAgent` (or action) receives the data.
        *   **(UI Enhancement - Generative UI):** Instead of a plain text response, the agent formats the data and triggers a **Generative UI** component. This component renders a structured card in the chat displaying:
            *   Customer Name: Contoso
            *   Company: USMF
            *   Credit Limit: $X
            *   Remaining Credit: $Y
            *   Status: On Hold / OK (with visual indicator)
            *   Button: "View Full Account Details" (triggers another action/navigation).
        *   This rich UI is streamed back to the CopilotKit UI via the `CoAgents Socket` and shared state.
*   **Key Architectural Concepts & Envisioned Capabilities:**
    *   **CopilotKit UI with Frontend Enhancements:** `Frontend Suggestions` and `Frontend Actions` for a smoother, more responsive query experience.
    *   **LangGraph Orchestration (Optional but powerful):** A `SalesInfoAgent` can handle disambiguation, multi-turn clarifications, and orchestrate follow-up actions. Simpler queries can use direct CopilotKit actions.
    *   **D365 MCP Tools:** Secure and standardized access to D365 data.
    *   **Generative UI:** Provides a much richer and more actionable display of credit information than plain text.
    *   **Predictive State Updates:** Offers transparency during data retrieval.
    *   **(Potential Copilot Cloud Enhancement):** Copilot Cloud Memory could remember frequently checked customers or user preferences for displaying credit information.
