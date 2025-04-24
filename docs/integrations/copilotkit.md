# Enhanced In-App AI with CopilotKit

**CopilotKit** (`submodules/CopilotKit`) is a framework specifically designed for building AI assistants that are deeply integrated into the frontend of web applications, particularly those built with **React**.

*   **Role:** It acts as a bridge between the React frontend UI and the **Application Backend**, providing React components and hooks to create a seamless "Copilot" experience *within* the application, rather than just alongside it.
*   **Key Components & Integration:**
    *   **Frontend (`@copilotkit/react-core`, `@copilotkit/react-ui`):**
        *   **UI Components:** Offers pre-built components like `<CopilotPopup>`, `<CopilotSidebar>`, `<CopilotTextarea>` for quickly adding chat interfaces.
        *   **Headless Hooks:** Provides `useCopilotChat` for building completely custom chat UIs.
        *   **Context Awareness (`useCopilotReadable`):** Allows developers to easily expose frontend application state (e.g., data displayed in a table, user selections, current form values) as context for the AI running in the backend. The AI can then reference this context in its responses or actions.
        *   **Frontend Actions (`useCopilotAction`):** Enables the AI backend to define actions that are executed *directly in the frontend*. This powerful feature allows the AI to manipulate the UI state (e.g., update a form field based on conversation), trigger navigation, highlight elements, or even render dynamic **Generative UI** (custom React components rendered by the AI during its flow).
        *   **Knowledge Base (`useCopilotKnowledgebase`):** Integrates frontend-accessible data sources for Retrieval-Augmented Generation (RAG).
    *   **Backend (`@copilotkit/backend`):**
        *   Typically hosted within a **Node.js-based Application Backend** (like Next.js, Express).
        *   Manages the communication with the CopilotKit frontend components/hooks.
        *   Handles the interaction with the chosen Large Language Model (LLM), managing prompts, function/tool calling, and streaming responses.
        *   **Integration Point:** This backend service integrates the **`d365-agent-mcpclient-ts`** library. When the LLM determines a need to interact with Dynamics 365 (based on user request or frontend context), the CopilotKit backend code calls the appropriate MCP tool via the `d365-agent-mcpclient-ts` library, which communicates with the deployed `d365-agent-mcpserver-ts`. The results are then passed back to the LLM/CopilotKit flow.
    *   **CoAgents / LangGraph Integration:** CopilotKit also supports building more complex, stateful agentic workflows, potentially using LangGraph. This could be an alternative way to implement the orchestration logic within the Application Backend, especially suitable for Node.js environments.

*   **Strengths:**
    *   **Deep UI Integration:** Creates assistants that feel native to the application.
    *   **Frontend Context:** Enables AI awareness of the user's immediate UI context.
    *   **Frontend Actions & Generative UI:** Allows AI to directly interact with and modify the frontend experience.
    *   **React Ecosystem:** Leverages the React component model effectively.

*   **Considerations:** Primarily focused on React frontends. The backend integration typically favors Node.js due to the `@copilotkit/backend` package, although adapting to other backends might be possible.
