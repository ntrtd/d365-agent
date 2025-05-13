# Guide: Building User Interfaces with CopilotKit

This guide focuses on building user interfaces for the Dynamics 365 AI Agent system using **CopilotKit**, as implemented in the [`d365-agent-ui`](https://github.com/ntrtd/d365-agent-ui) repository. The UI interacts with the **Application Orchestration Layer** ([`d365-agent-orchestrator`](https://github.com/ntrtd/d365-agent-orchestrator)) which hosts the CopilotKit Runtime and LangGraph agents.

## Core CopilotKit UI Components

The `d365-agent-ui` will primarily leverage the following from the `@copilotkit/react-ui` and `@copilotkit/react-core` packages:

*   **`<CopilotKit />` Provider:** Wraps the application (or relevant parts) to provide context and connectivity to the CopilotKit Runtime in the `d365-agent-orchestrator`.
    *   Configuration will include the endpoint of the self-hosted CopilotKit Runtime.
*   **Chat Components:**
    *   **`<CopilotChat />`:** A comprehensive chat interface component.
    *   **`<CopilotPopup />` / `<CopilotSidebar />`:** Alternative presentations for the chat interface.
    *   These components handle message display, input, and streaming responses from the LangGraph agents.
*   **`useCopilotReadable` Hook:** Allows the UI to provide context from the application's state to the LangGraph agents, enabling them to make more informed decisions.
*   **`useCopilotAction` Hook (primarily in backend):** While actions are typically defined in the CopilotKit Runtime (backend), this hook (or similar patterns) can be used for frontend-driven actions if needed, though most complex logic will reside in the LangGraph agents.
*   **`useCoAgentState` Hook:** Crucial for creating a reactive UI that displays the current state, progress, and intermediate results from the LangGraph agents in the `d365-agent-orchestrator`. This enables features like real-time status updates for the PO processing workflow.
*   **Generative UI:** CopilotKit allows rendering custom React components directly within the chat interface based on agent responses or tool calls. This can be used to display complex data (e.g., tables of D365 records, structured forms for data entry) or provide interactive elements.
*   **File Attachments:** The UI components support file attachments, which is essential for the PO processing scenario (uploading PDF POs).

## Connecting to the Application Orchestration Layer

*   The `d365-agent-ui` (CopilotKit frontend) will connect to a GraphQL or HTTP endpoint exposed by the `CopilotKit Runtime` within the `d365-agent-orchestrator`.
*   This connection facilitates sending user messages, triggering LangGraph agent executions, and receiving streamed responses and state updates.

## UI Design Considerations for Agent Interactions

*   **Clarity of Agent State:** Use the `useCoAgentState` hook and generative UI capabilities to clearly communicate the current step and status of ongoing processes (e.g., "Extracting PO data...", "Validating with D365...", "Awaiting your confirmation...").
*   **Handling Asynchronous Operations:** LangGraph agents perform multi-step operations. The UI must gracefully handle this asynchronicity, providing feedback to the user that processing is underway.
*   **Displaying Complex Data:** For information retrieved from D365 (e.g., lists of sales orders, customer details), use CopilotKit's generative UI features to render this data in a structured and user-friendly way within the chat or adjacent UI panels.
*   **Error Handling:** Clearly display errors returned by the LangGraph agent or underlying services (like the D365 MCP Server).
*   **User Input and Forms:** For scenarios requiring structured input (e.g., filling out details for a sales quote), generative UI can be used to render forms within the chat.
*   **Multi-Agent/Process Navigation:** If the UI supports multiple agents (e.g., Sales and Purchase), provide clear ways for the user to switch context or for the system to route to the correct LangGraph agent.

## Example UI Flow for PO Processing

1.  User uploads a PO PDF via the CopilotKit UI in `d365-agent-ui`.
2.  The UI sends the file and a command (e.g., "Process this PO") to the `CopilotKit Runtime` in `d365-agent-orchestrator`.
3.  The runtime routes this to the Purchase Order LangGraph agent.
4.  The LangGraph agent starts its state machine. Its state (e.g., `current_step: 'parsing_pdf'`) is updated.
5.  The UI, using `useCoAgentState`, receives this state update and displays "Parsing PDF...".
6.  As the LangGraph agent progresses through its states (calling the document parser, D365 MCP Server, etc.), it continues to update its state, and the UI reflects these changes in real-time.
7.  Intermediate results or requests for clarification (if it's a human-in-the-loop step) can be rendered as generative UI components.
8.  Final confirmation or error messages are displayed in the chat.

This approach ensures a tight integration between the user interface and the backend agentic logic, providing a dynamic and responsive user experience.
