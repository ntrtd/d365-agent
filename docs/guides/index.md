# Guides

This section provides practical guidance for developing, customizing, and evaluating the Dynamics 365 AI Agent system, built upon CopilotKit, LangGraph, and a dedicated D365 MCP Server.

*   **[Connecting to Dynamics 365](./connecting-d365.md):** Explains how LangGraph agents in the `d365-agent-orchestrator` connect to D365 via the `d365-agent-mcpclient-ts` and the `d365-agent-mcpserver-dotnet`.
*   **[Building User Interfaces with CopilotKit](./building-uis.md):** Details how to leverage CopilotKit components (Chat, Generative UI, `useCoAgent` hook) in `d365-agent-ui` to create interactive experiences with backend LangGraph agents.
*   **[Embedding UI in LOB Systems](./embedding-ui-in-lob.md):** Discusses strategies for integrating the `d365-agent-ui` (CopilotKit UI) into existing Line of Business applications for contextual assistance.
*   **[Customizing Agents and Orchestrations](./customizing-agents.md):** Covers tailoring LangGraph agents (Master Orchestrator and Domain-Specific Agents in `d365-agent-orchestrator`) and the CopilotKit UI.
*   **[Implementing Scenarios](./implementing-scenarios/index.md):** Provides detailed examples of end-to-end business processes implemented with the full D365 AI Agent architecture.
*   **[Debugging and Logging](./debugging-logging.md):** Offers techniques for troubleshooting and monitoring across all components, including the use of LangSmith for LangGraph agents.
*   **[Evaluation Strategy](./evaluation.md):** Outlines methods for testing and evaluating the functional correctness, performance, and reliability of the system.
