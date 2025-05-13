# Guide: Building User Interfaces with CopilotKit

This guide focuses on building user interfaces for the Dynamics 365 AI Agent system using **CopilotKit**, as implemented in the [`d365-agent-ui`](https://github.com/ntrtd/d365-agent-ui) repository. The UI interacts with the **Application Orchestration Layer** ([`d365-agent-orchestrator`](https://github.com/ntrtd/d365-agent-orchestrator)) which hosts the CopilotKit Runtime and LangGraph agents.

## Core CopilotKit UI Components

The `d365-agent-ui` will primarily leverage the following from the `@copilotkit/react-ui` and `@copilotkit/react-core` packages:

*   **`<CopilotKitProvider />`:** (from `@copilotkit/react-core`) Wraps the application to provide context and connectivity. Key configurations include:
    *   `chatApiEndpoint`: Points to the CopilotKit Runtime hosted in `d365-agent-orchestrator`.
    *   `langgraphAgentUrl`: Specifies the endpoint for interacting with specific LangGraph agents (CoAgents) via the runtime.
*   **Chat Components (from `@copilotkit/react-ui`):**
    *   **`<CopilotChat />`:** A comprehensive, ready-to-use chat interface.
    *   **`<CopilotPopup />` / `<CopilotSidebar />`:** Alternative chat UIs.
    *   These handle message display, input, and streaming responses.
*   **Core Hooks (from `@copilotkit/react-core`):**
    *   **`useCopilotReadable`:** Provides application state or UI context to the backend agents, making them more aware.
    *   **`useCopilotAction`:** Primarily used in the backend (CopilotKit Runtime or LangGraph agents) to define tools. Can also be used for frontend-only actions (see "Leveraging Copilot OS (Frontend) Features" below).
    *   **`useCoAgent`:** The primary hook for CoAgent (LangGraph agent) interaction. It provides:
        *   `state`: A reactive object reflecting the LangGraph agent's current state.
        *   `setState`: A function to update the LangGraph agent's state from the UI.
        *   `run`: A function to explicitly trigger or re-run the LangGraph agent, optionally with a hint.
        This hook is fundamental for building reactive UIs that display agent progress and enable human-in-the-loop scenarios.
    *   **`useCoAgentStateRender`:** A specialized hook to render UI components directly within the chat based on the agent's state.
*   **Generative UI:** A powerful CopilotKit feature allowing LangGraph agents to instruct the UI to render custom React components within the chat. This is used for displaying complex data, forms, confirmation dialogs, or any interactive element, going beyond simple text responses.
*   **File Attachments:** Supported by UI components, essential for scenarios like PO PDF uploads.

## Leveraging Copilot OS (Frontend) Features

The CopilotKit Frontend SDK also enables "Copilot OS (Frontend)" capabilities, allowing some intelligence to reside client-side:

*   **Frontend RAG:** For quick, client-side RAG against local data (e.g., cached FAQs, product specs snippets). This can provide instant answers for simple queries without a backend call.
*   **Frontend Actions:** Define and execute simple actions directly in the browser (e.g., UI theme changes, client-side calculations, input pre-formatting). This enhances UI responsiveness.

## Connecting to the Application Orchestration Layer

*   The `d365-agent-ui` (CopilotKit frontend) connects to the `CopilotKit Runtime` within `d365-agent-orchestrator` via:
    *   **GraphQL/HTTP:** For standard API interactions, potentially invoking simpler CopilotKit actions or initial agent triggers.
    *   **CoAgents Socket (WebSocket):** This dedicated channel, managed by CopilotKit, is crucial for real-time, bidirectional communication with LangGraph CoAgents. It enables features like:
        *   Streaming shared state updates from the agent to the UI (consumed by `useCoAgent`).
        *   Dynamic rendering of Generative UI components instructed by the agent.
        *   Sending UI-initiated state changes or events back to the agent.
*   This dual connection mechanism supports both request-response patterns and continuous, real-time agent interactions.

## UI Design Considerations for Agent Interactions

*   **Clarity of Agent State:** Utilize the `useCoAgent` hook (to get `state`) and Generative UI capabilities to clearly communicate the current step, status, and any **predictive state updates** from ongoing LangGraph agent processes (e.g., "Extracting PO data...", "Validating with D365...", "Awaiting your confirmation..."). Visual indicators (spinners, progress bars within Generative UI) can enhance this.
*   **Handling Asynchronous Operations:** LangGraph agents are inherently asynchronous. The UI must provide clear feedback that processing is underway. Predictive state updates help significantly here by showing incremental progress.
*   **Displaying Complex Data:** For D365 data (lists, records), leverage CopilotKit's **Generative UI** to render structured, user-friendly components (tables, cards, forms) within the chat or adjacent UI panels, rather than just raw text.
*   **Error Handling:** Display errors from LangGraph agents or the D365 MCP Server clearly. Generative UI can be used to present error details and potential resolution actions.
*   **User Input and Forms:** Use **Generative UI** to render dynamic forms for data collection (e.g., sales quote details, PO correction fields). The `useCoAgent` hook's `setState` function can be used to send form data back to the agent.
*   **Multi-Agent/Process Navigation:**
    *   If the UI supports multiple Domain-Specific Agents, the initial interaction might be with a `MasterOrchestratorAgent` in `d365-agent-orchestrator`.
    *   The UI should gracefully handle routing by this master agent. If intent is ambiguous, the master agent might use Generative UI to ask the user for clarification (e.g., "Did you want to create a Sales Quote or check Sales Order status?").
    *   The UI needs to manage context correctly when switching between or interacting with different agents, possibly using the `agentId` parameter in CopilotKit components/hooks.

## Example UI Flow for PO Processing

1.  User uploads a PO PDF via the CopilotKit UI in `d365-agent-ui`.
2.  The UI sends the file and a command (e.g., "Process this PO") to the `CopilotKit Runtime` in `d365-agent-orchestrator`.
3.  The runtime routes this to the Purchase Order LangGraph agent.
4.  The LangGraph agent starts its state machine. Its state (e.g., `current_step: 'parsing_pdf'`) is updated.
5.  The UI, using `useCoAgent`, receives this state update (e.g., `agentState.current_step === 'parsing_pdf'`) and displays "Parsing PDF...".
6.  As the LangGraph agent progresses through its states (calling the document parser, D365 MCP Server, etc.), it continues to update its state, and the UI reflects these changes in real-time.
7.  Intermediate results or requests for clarification (if it's a human-in-the-loop step) can be rendered as generative UI components.
8.  Final confirmation or error messages are displayed in the chat.

This approach ensures a tight integration between the user interface and the backend agentic logic, providing a dynamic and responsive user experience.
