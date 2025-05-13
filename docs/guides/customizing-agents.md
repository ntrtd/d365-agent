# Guide: Customizing Agents and Orchestrations

This guide covers techniques for customizing the behavior of your AI agents, which are primarily implemented as **LangGraph agents** within the **Application Orchestration Layer** (`d365-agent-orchestrator`), and how to tailor the **CopilotKit UI** (`d365-agent-ui`) experience.

## Customizing LangGraph Agents (in `d365-agent-orchestrator`)

LangGraph provides a flexible framework for building stateful, multi-step agents. Customization typically involves:

*   **Defining or Modifying Graph Nodes:**
    *   Each node in a LangGraph represents a step or a state in your business process (e.g., "Extract PO Data", "Validate Customer Credit").
    *   Customization involves writing or modifying the Python/TypeScript functions that define the logic for these nodes.
    *   This includes integrating calls to various services:
        *   **D365 MCP Server:** Using the `d365-agent-mcpclient-ts` (or equivalent) to call specific MCP tools exposed by `d365-agent-mcpserver-ts`.
        *   **Document Parsing Service:** Calling your containerized `d365-agent-docparser-service`.
        *   **Other APIs/Services:** Integrating any other necessary third-party or internal services.
*   **Defining or Modifying Graph Edges (Transitions):**
    *   Edges define how the agent transitions between states (nodes) based on the outcome of the current node's execution.
    *   Customization involves defining conditional logic for these transitions (e.g., if D365 validation fails, transition to an error handling state; otherwise, proceed to XML generation).
*   **Managing Agent State:**
    *   Defining the structure of the state object that is passed between nodes in the LangGraph. This state object should contain all necessary information for the process (e.g., extracted PO data, D365 record IDs, error messages).
    *   Ensuring this state is compatible with CopilotKit's shared state mechanism (`useCoAgentState`) for UI updates.
*   **Adding New Tools/Capabilities to LangGraph:**
    *   If a LangGraph node needs to perform a new type of action (e.g., call a new D365 MCP tool or a new external service), you'll define this as a new tool/function that the LangGraph node can invoke.
    *   For D365 operations, this often means first ensuring the corresponding MCP tool exists on the `d365-agent-mcpserver-ts` and then adding the client-side call logic in the LangGraph node.
*   **Prompt Engineering:**
    *   If LangGraph nodes involve LLM calls for reasoning or decision-making, customizing the prompts sent to the LLM is a key aspect of tailoring agent behavior.

## Customizing CopilotKit Runtime (in `d365-agent-orchestrator`)

The CopilotKit Runtime, hosted in the orchestrator, can be customized:

*   **Action Definitions:** While complex stateful logic resides in LangGraph, you might define simpler, stateless `CopilotKit.Action`s directly in the runtime for quick commands or if not using LangGraph for a particular interaction.
*   **Routing to LangGraph Agents:** If you have multiple LangGraph agents (e.g., Purchase Agent, Sales Agent), the CopilotKit Runtime needs logic to route incoming user requests from the UI to the correct LangGraph agent. This can be based on user intent, context, or explicit commands.
*   **Authentication and Authorization:** Implementing security measures for the runtime endpoint.
*   **Configuration:** Setting up LLM connections, API keys, and other runtime parameters.

## Customizing CopilotKit UI (in `d365-agent-ui`)

The CopilotKit UI offers several customization points:

*   **Styling:** Customizing the look and feel of chat components (`<CopilotChat />`, `<CopilotPopup />`, etc.) using CSS or theming capabilities if provided by `shadcn/ui` (which `assistant-ui`, a similar library, is based on, and CopilotKit may have similar theming).
*   **Generative UI:**
    *   Using CopilotKit's features to render custom React components within the chat messages. This is powerful for displaying complex data from D365 (e.g., tables, forms) or providing interactive elements related to the LangGraph agent's current state.
    *   For example, if the LangGraph agent is in a "requires_approval" state, the UI could render approval buttons.
*   **Frontend Actions:** Defining actions directly in the frontend using `useCopilotAction` if some simple UI-related tasks need to be exposed to the LLM without a full backend roundtrip (use with caution for complex logic).
*   **Context Provision (`useCopilotReadable`):** Providing relevant application context from the UI (e.g., currently viewed D365 record ID, user profile information) to the CopilotKit Runtime and subsequently to the LangGraph agents.
*   **Custom Chat Components:** For advanced scenarios, you might build more custom chat experiences using CopilotKit's headless options or by composing its primitive components.
*   **Handling Shared State (`useCoAgentState`):** Customizing how the data from the LangGraph agent's shared state is presented to the user (e.g., progress indicators, status messages, displaying intermediate results).

## Best Practices

*   **Clear Separation:** Keep D365 interaction logic within D365 MCP Server tools. Keep orchestration and state machine logic within LangGraph agents in `d365-agent-orchestrator`. Keep UI presentation logic in `d365-agent-ui`.
*   **Modularity in LangGraph:** Design LangGraph agents with well-defined, reusable nodes (tools/functions).
*   **Versioning:** Version your LangGraph agent definitions, MCP tools, and UI components.
*   **Testing:**
    *   Unit test individual LangGraph nodes/tools.
    *   Test D365 MCP tools independently.
    *   Conduct E2E tests for entire LangGraph flows interacting with the CopilotKit UI.
