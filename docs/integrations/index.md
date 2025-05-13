# Integrations

This section explores how the Dynamics 365 AI Agent system (comprising `d365-agent-ui` with CopilotKit, `d365-agent-orchestrator` with LangGraph, and `d365-agent-mcpserver-dotnet`) can integrate with other platforms and services.

*   **[Power Platform](./power-platform.md):** Strategies for triggering LangGraph agents in `d365-agent-orchestrator` from Power Automate flows, or embedding the `d365-agent-ui` (CopilotKit UI) within Power Apps.
*   **[Bot Framework](./bot-framework.md):** Approaches for connecting a Bot Framework bot (e.g., for Teams) to the `d365-agent-orchestrator` as an alternative channel to the web-based `d365-agent-ui`.
*   **[Azure Services](./azure-services.md):** Details on leveraging Azure services for hosting the components (e.g., Azure Container Apps for `d365-agent-orchestrator` and `d365-agent-mcpserver-dotnet`), Azure Key Vault for secrets, Azure OpenAI for LLM capabilities, and Application Insights for monitoring.
*   **[Custom Backends & Headless Operation](./custom-backends.md):** How the `d365-agent-orchestrator` can be triggered by custom backend systems (e.g., an email ingestion service) to initiate LangGraph agent processes without direct UI interaction.
*   **[Copilot Ecosystem (CopilotKit & Copilot Cloud)](./copilot-ecosystem.md):** Focuses on how our system leverages CopilotKit for its UI and runtime, and how it can optionally integrate with Copilot Cloud for enhanced features like managed RAG, AI routing, persistent memory, and guardrails.
*   **[Messaging Platforms](./messaging-platforms.md):** Considerations for adapting or extending the system to interact via channels like Microsoft Teams or other messaging platforms, likely by having these platforms communicate with the `d365-agent-orchestrator`.
