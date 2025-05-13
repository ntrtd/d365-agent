# Guide: Customizing Agents and Orchestrations

This guide covers techniques for customizing the behavior of your AI agents, primarily **Domain-Specific LangGraph Agents** and the **Master Orchestrator Agent** within the `d365-agent-orchestrator`, and tailoring the `d365-agent-ui` (CopilotKit UI) experience.

## Customizing LangGraph Agents (in `d365-agent-orchestrator`)

LangGraph provides a flexible framework for building stateful, multi-step CoAgents. Customization involves:

*   **Master Orchestrator Agent:**
    *   Customizing its intent recognition logic (e.g., improving LLM prompts for understanding user requests).
    *   Refining routing rules to correctly dispatch tasks to various Domain-Specific Agents.
    *   Managing shared conversational context if a task spans multiple domain agents.
*   **Domain-Specific LangGraph Agents (e.g., `POProcessingAgent`, `SalesAgent`):**
    *   **Defining/Modifying Graph Nodes:** Each node represents a step (e.g., "Extract PO Data," "Validate Customer Credit"). Customize the TypeScript functions for these nodes, including calls to:
        *   **D365 MCP Server:** Via `d365-agent-mcpclient-ts`.
        *   **AI Services (OpenAI/Azure OpenAI):** For document parsing (Backend RAG), data transformation, or decision making.
        *   **Other APIs/Services:** As needed for the specific domain.
    *   **Defining/Modifying Graph Edges:** Customize transition logic between nodes based on outcomes (e.g., conditional routing for error handling).
    *   **Managing Agent State:**
        *   Define the LangGraph state schema. For seamless UI integration, use CopilotKit SDK annotations (e.g., `CopilotKitStateAnnotation` from `@copilotkit/sdk-js/langgraph` or its Python equivalent) to make the state inherently shareable via `useCoAgent`.
        *   Implement **Predictive State Updates** within long-running nodes using `copilotkit_emit_state` (or JS equivalent) to provide continuous feedback to the UI.
    *   **Adding New Tools:** Define new functions/tools callable by LangGraph nodes. For D365, this usually means ensuring the MCP tool exists on `d365-agent-mcpserver-dotnet` first.
    *   **Prompt Engineering:** Crucial for nodes that use LLMs for reasoning or tool use.

## Customizing CopilotKit Runtime (in `d365-agent-orchestrator`)

The CopilotKit Runtime primarily serves to host and expose your LangGraph agents:

*   **Exposing LangGraph Agents:** Ensure each LangGraph agent (Master and Domain-Specific) is correctly configured with an agent executor and exposed via a unique `langgraphAgentUrl` endpoint that the UI's `CopilotKitProvider` can target.
*   **Simpler Actions (Optional):** For very simple, stateless tasks not requiring LangGraph, you can define `CopilotKit.Action`s directly in the runtime. However, the primary focus for complex processes is LangGraph.
*   **Authentication and Authorization:** Implementing security measures for the runtime endpoint.
*   **Configuration:** Setting up LLM connections, API keys, and other runtime parameters.

## Customizing CopilotKit UI (in `d365-agent-ui`)

The CopilotKit UI offers several customization points:

*   **Styling:** Customize chat components (`<CopilotChat />`, etc.) via CSS or by leveraging CopilotKit's headless options for fully custom rendering.
*   **Generative UI:** Design and implement custom React components that your LangGraph agents can instruct the UI to render. This is key for:
    *   Displaying complex D365 data (tables, forms, status cards).
    *   Creating interactive elements for human-in-the-loop steps (approval buttons, data correction forms).
    *   The real-time rendering is facilitated by the **CoAgents Socket**.
*   **Leveraging Copilot OS (Frontend) Features:**
    *   **Frontend Actions (`useCopilotAction` in UI):** Implement UI-specific actions (e.g., theme changes, client-side input formatting) that don't need backend processing.
    *   **Frontend RAG:** Use for instant, client-side information retrieval from local help docs or FAQs.
*   **Context Provision (`useCopilotReadable`):** Make relevant UI state (e.g., current D365 entity in view, user preferences) readable by backend agents.
*   **Handling Shared State (`useCoAgent`):** Customize how the UI subscribes to and displays data from the LangGraph agent's shared state (both final and predictive updates), including progress indicators and status messages.

## Best Practices

*   **Clear Separation:** Maintain distinct responsibilities: D365 logic in MCP Server tools, orchestration in LangGraph agents (Master and Domain-Specific), UI presentation in `d365-agent-ui`.
*   **Modularity in LangGraph:** Design Domain-Specific Agents and their internal nodes to be modular and reusable. Customize the Master Orchestrator for clear routing.
*   **Versioning:** Version your LangGraph agent definitions, MCP tools, and UI components.
*   **Testing:**
    *   Unit test individual LangGraph nodes/tools.
    *   Test D365 MCP tools independently.
    *   Conduct E2E tests for entire LangGraph flows interacting with the CopilotKit UI.
