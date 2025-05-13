# Guide: Embedding the CopilotKit UI into Line of Business (LOB) Systems

The `d365-agent-ui`, built with CopilotKit, is designed not only as a standalone chat interface but can also be embedded within existing Line of Business (LOB) applications such as CRM, ERP, or e-commerce platforms. This allows users to access AI-driven assistance and automate Dynamics 365 tasks directly within their familiar work environments.

## Core Principle: Contextual Assistance

The primary goal of embedding the UI is to provide **contextual assistance**. The CopilotKit UI, when embedded, should be aware of what the user is currently doing or viewing in the LOB system. This context is then passed to the **Application Orchestration Layer** (`d365-agent-orchestrator`), enabling its LangGraph agents to provide highly relevant information and actions.

## Integration Strategies

Here are several strategies for embedding the `d365-agent-ui`:

### 1. Iframe Embedding
*   **Description:** The `d365-agent-ui` is deployed as a standalone web application, and the LOB system embeds it using an `<iframe>`. This is often the quickest way to integrate.
*   **Context Passing:**
    *   **Initial Context:** Pass data like current record ID, entity type, or user role via URL parameters in the iframe's `src` attribute.
    *   **Dynamic Context:** Use `window.postMessage()` for secure cross-origin communication between the LOB application and the iframe to update context as the user navigates or interacts with the LOB system. The `d365-agent-ui` would listen for these messages.
*   **Pros:** Simple to implement; strong isolation.
*   **Cons:** Can feel less integrated; styling to match the host LOB app can be challenging; `postMessage` communication requires careful implementation.

### 2. Web Component
*   **Description:** Package the core chat functionality of `d365-agent-ui` as a custom Web Component. The LOB application can then import and use this component like any native HTML element.
*   **Context Passing:** Use attributes/properties to pass data into the Web Component and custom events to communicate data or actions back to the LOB application.
*   **Pros:** Better encapsulation and potential for more seamless visual integration than iframes.
*   **Cons:** More complex to package; LOB system must support Web Components.

### 3. Direct Library Integration (for React-based LOBs)
*   **Description:** If the LOB system's frontend is also built with React, the core CopilotKit components (`@copilotkit/react-ui`, `@copilotkit/react-core`) and relevant UI logic from `d365-agent-ui` could be directly integrated into the LOB application's codebase.
*   **Context Passing:** Utilize React Context API or component props for deep, native context sharing.
*   **Pros:** Highest degree of integration and potentially the most seamless UX.
*   **Cons:** Only feasible if LOB is React-based and its source code is accessible for modification; potential for dependency conflicts.

### 4. Browser Extension
*   **Description:** A browser extension can inject the `d365-agent-ui` (e.g., as a sidebar or a floating action button) onto the pages of web-based LOB systems.
*   **Context Passing:** The extension's content scripts can read data from the LOB application's DOM or URL to infer context. This context is then passed to the injected UI.
*   **Pros:** Works with many web LOBs without needing LOB system code changes.
*   **Cons:** Can be brittle if LOB UI changes; requires user installation; security considerations for DOM access.

### 5. Headless CopilotKit with Native LOB UI Elements
*   **Description:** Instead of embedding the pre-built chat UI, the LOB system implements its own native UI elements for chat interactions. These native elements then communicate directly with an API exposed by the `d365-agent-orchestrator` (which hosts the CopilotKit Runtime).
*   **Context Passing:** The LOB system's native UI has direct access to its own context and can include it in API calls to the orchestrator.
*   **Pros:** Maximum control over UI look & feel for perfect LOB system integration.
*   **Cons:** More UI development effort within the LOB system; need to handle streaming and rendering of agent responses manually.

## Leveraging CopilotKit Features for LOB Integration

Regardless of the embedding strategy, these CopilotKit features are key:

*   **`<CopilotKitProvider>`:** Configured with the URL of your `d365-agent-orchestrator`. This allows the embedded UI to connect to the central orchestration logic.
*   **`useCopilotReadable` (Contextual Awareness):** The embedded `d365-agent-ui` (or the LOB system itself in headless scenarios) uses this hook to provide real-time context from the LOB application (e.g., "current_customer_id", "viewing_product_page") to the LangGraph agents in `d365-agent-orchestrator`.
*   **`useCoAgentState` (Shared State with LangGraph):** Allows the embedded UI to display the real-time state, progress, and intermediate results from the backend LangGraph agents. This is crucial for showing users what the agent is doing during multi-step processes like PO processing.
*   **Generative UI:** LangGraph agents can instruct the CopilotKit UI to render custom React components. When embedded, these components can be designed to display LOB-specific data or provide interactive elements relevant to the LOB context (e.g., a mini-form for D365 data entry, a list of related D365 records).
*   **Frontend Actions (`useCopilotAction` in frontend):** If the LangGraph agent needs to trigger an action directly within the LOB system's frontend (e.g., pre-fill a form field on the LOB page, navigate the LOB UI), this can be defined in the embedded UI and called by the agent.

## Use Case Example: Embedded Copilot in a CRM System

Imagine the `d365-agent-ui` is embedded as a sidebar in a Dynamics 365 Sales Hub application.

*   **Scenario:** A sales representative is viewing an "Opportunity" record in the D365 Sales Hub.
*   **Context Passing:** The CRM page (or an adapter like a PCF control) passes the current `Opportunity ID` and `Customer ID` to the embedded CopilotKit UI.
*   **User Interaction:**
    *   The sales rep types into the embedded chat: "What are the recent communications with this opportunity's primary contact?"
    *   Or, "Draft a follow-up email for this opportunity based on the last meeting notes."
    *   Or, "Add a new task to follow up next week."
*   **Processing:**
    1.  The `d365-agent-ui` sends the prompt and the contextual `Opportunity ID` / `Customer ID` (via `useCopilotReadable`) to the `d365-agent-orchestrator`.
    2.  The CopilotKit Runtime in the orchestrator routes the request to a "SalesLangGraphAgent".
    3.  The SalesLangGraphAgent uses the provided context:
        *   For the communication summary, it uses `d365-agent-mcpclient-ts` to call tools on `d365-agent-mcpserver-dotnet` to fetch related emails, phone calls, and appointments from D365 for that opportunity/contact. It then summarizes them.
        *   For drafting an email, it fetches relevant details and generates a draft.
        *   For creating a task, it calls an MCP tool to create a task entity in D365.
    4.  The LangGraph agent's state (e.g., "fetching_communications", "drafting_email", "task_created") and the results are streamed back.
*   **UI Display:**
    *   The embedded CopilotKit UI displays the progress and the final summary, email draft, or task confirmation.
    *   Generative UI could be used to display the list of communications or the task details in a structured format.

This contextual integration allows the AI agent to provide highly relevant and actionable support directly within the LOB system, enhancing user productivity and leveraging the full power of the D365 AI Agent backend.
