# Frontend Integration Strategies

This section explores different strategies and frameworks for building user-facing applications (the **Presentation Layer**) that connect to the **Application Backend** layer of the Dynamics 365 AI Agent system.

The choice of frontend technology and integration pattern depends on the desired user experience, the target platform (web, Teams, mobile, etc.), and existing technology stacks.

## Integration Patterns

Select a pattern below for more details:

*   **[Standard Client-Server](standard_client_server.md):** Traditional approach using standard web protocols (REST, WebSockets) between a custom frontend and the Application Backend.
*   **[CopilotKit](copilotkit.md):** For deeply integrated, context-aware AI assistants within React applications.
*   **[Vercel AI SDK Chatbot](vercel_ai_sdk.md):** Using the Vercel AI SDK and Next.js template for building standalone chatbot UIs.
*   **[Microsoft Bot Framework](bot_framework.md):** For integrations with Teams, Web Chat widgets, and other Bot Framework channels.
*   **[Headless Integrations](headless.md):** For non-UI scenarios like email or voice processing where the integration service acts as the client.

In all cases, the frontend or integration point interacts with an **Application Backend**. This backend integrates the necessary AI/UI SDK and uses the **`d365-agent-mcpclient-*`** library to orchestrate tasks via the **`d365-agent-mcpserver-*`**.
