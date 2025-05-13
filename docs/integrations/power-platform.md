# Integration: Power Platform

Integrate the capabilities of your Dynamics 365 AI Agent system with Power Apps and Power Automate. This typically involves these platforms interacting with API endpoints exposed by the **`d365-agent-orchestrator`** (which hosts the CopilotKit Runtime and LangGraph agents).

## Power Automate

*   **Creating a Custom Connector:**
    *   Define a custom connector in Power Platform that targets the API endpoints exposed by your `d365-agent-orchestrator`.
    *   These endpoints would be designed to trigger specific LangGraph agents (e.g., PO Processing, Sales Quote Generation) or simpler actions within the orchestrator.
    *   Specify request/response schemas for the custom connector based on your orchestrator's API.
*   **Calling the Orchestrator from a Flow:**
    *   Use the custom connector within your Power Automate flows.
    *   Alternatively, use the built-in HTTP action to directly call the API endpoints on `d365-agent-orchestrator`.
*   **Passing Data:** Send data from the flow (e.g., trigger details, data from other systems) as parameters to the orchestrator's API. Receive responses (e.g., status, results of D365 operations) back into the flow.
*   **Example Flow (Email PO Ingestion):**
    1.  A Power Automate flow is triggered when a new email with a "PO" subject arrives in a specific inbox.
    2.  The flow extracts the PDF attachment.
    3.  (Optional) Stores the PDF in Azure Blob Storage.
    4.  The flow calls a custom connector (or HTTP action) pointing to an endpoint like `/api/initiate-po-processing` on `d365-agent-orchestrator`, passing the PDF content or a reference to it.
    5.  `d365-agent-orchestrator` invokes the Purchase Order LangGraph agent.
    6.  The flow can wait for a synchronous response or the orchestrator can provide a job ID for later status checks if the process is long-running.

## Power Apps (Canvas Apps & Model-Driven Apps)

*   **Using a Custom Connector:**
    *   Add the custom connector (pointing to `d365-agent-orchestrator` APIs) to your Power App.
*   **Calling the Orchestrator from Power Fx:**
    *   Use Power Fx formulas to call the custom connector's actions, triggering LangGraph agents or simpler actions in `d365-agent-orchestrator`.
    *   Example: A button in a Power App could trigger a "Get Customer Credit Status" action, which calls an endpoint on `d365-agent-orchestrator` that invokes a Sales LangGraph agent node (which in turn calls the D365 MCP Server).
*   **Displaying Responses:** Bind data returned from `d365-agent-orchestrator` to controls in your Power App.
*   **Embedding CopilotKit UI:** For a richer chat experience directly within Power Apps, consider embedding the `d365-agent-ui` (CopilotKit frontend) as an iframe or using Power Apps component framework (PCF) controls if feasible, though direct API calls via connectors are more straightforward for discrete actions.

## Power Pages / Portals

*   **API Integration:**
    *   Use JavaScript within Power Pages to make authenticated calls to API endpoints exposed by `d365-agent-orchestrator`.
    *   Alternatively, a Power Page can trigger a Power Automate flow (as described above) which then interacts with the orchestrator.
*   **Embedding Chat:** Similar to Power Apps, consider embedding the `d365-agent-ui` if a full chat experience is desired within the portal.

## Considerations

*   **API Design on `d365-agent-orchestrator`:** Expose clear, secure, and well-documented API endpoints on `d365-agent-orchestrator` specifically for Power Platform integration. These endpoints should be distinct from the GraphQL endpoint used by the CopilotKit UI for its internal communication.
*   **Authentication:** Secure the API endpoints on `d365-agent-orchestrator` (e.g., using Azure AD app registrations and OAuth). Configure custom connectors in Power Platform to use appropriate authentication methods.
*   **Asynchronous Operations:** For long-running LangGraph processes triggered from Power Automate or Power Apps, implement a polling mechanism or callbacks if the platform supports it, or design the orchestrator API to return an immediate acknowledgment with a job ID for status tracking.
*   **Error Handling:** Ensure proper error propagation from `d365-agent-orchestrator` back to the Power Platform flow or app for graceful error handling.
*   **Licensing:** Be mindful of Power Platform licensing (especially for premium connectors or per-flow runs if using Power Automate extensively) and any API call limits on the D365 side.
