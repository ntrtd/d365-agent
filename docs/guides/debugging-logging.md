# Guide: Debugging and Logging

Effective debugging and logging are crucial for developing, maintaining, and troubleshooting the Dynamics 365 AI Agent system. This guide outlines recommended practices and tools for each architectural component.

## 1. Centralized Monitoring & Observability

*   **Azure Application Insights:**
    *   **Recommendation:** Configure all backend services (`d365-agent-orchestrator`, `d365-agent-mcpserver-dotnet`) to send telemetry (logs, traces, exceptions, performance metrics) to a shared Azure Application Insights instance.
    *   **Benefits:** Provides a unified view for E2E transaction tracing, performance monitoring, and error analysis across services.
    *   **Implementation:** Use appropriate Application Insights SDKs for Node.js/TypeScript and .NET.
*   **LangSmith:**
    *   **Recommendation:** Essential for debugging and observing LangGraph agent executions within `d365-agent-orchestrator`.
    *   **Benefits:** Visualizes agent traces, shows inputs/outputs of each node, logs LLM calls, and helps identify errors or performance bottlenecks within agentic logic.
    *   **Implementation:** Configure LangGraph agents with your LangSmith API key and project details.
*   **Correlation IDs:**
    *   **Recommendation:** Implement a mechanism to generate/propagate a correlation ID across all services for a given user request or agent execution. Log this ID in all telemetry.
    *   **Benefits:** Allows tracing a single operation through `d365-agent-ui`, `d365-agent-orchestrator` (including specific LangGraph runs), and `d365-agent-mcpserver-dotnet`.

## 2. Debugging & Logging per Component

### `d365-agent-ui` (CopilotKit Frontend - React/TypeScript)

*   **Debugging:**
    *   **Browser Developer Tools:** Use the Console (for `console.log` statements), Network tab (to inspect GraphQL/HTTP calls to the orchestrator and WebSocket messages for CoAgents), and Sources tab (for setting breakpoints in JavaScript/TypeScript).
    *   **React Developer Tools (Browser Extension):** Inspect component hierarchy, props, and state. Particularly useful for debugging Generative UI components and `useCoAgent` state.
*   **Logging:**
    *   **`console.log`, `console.warn`, `console.error`:** For client-side diagnostic messages.
    *   **CopilotKit Frontend Logging:** CopilotKit libraries may have their own debug flags or logging capabilities; refer to their documentation.
    *   **Error Boundaries:** Implement React error boundaries to catch and log rendering errors in UI components.
    *   **(Optional) Client-side Logging to Application Insights:** For capturing frontend errors or key interactions from actual user sessions.

### `d365-agent-orchestrator` (Node.js/TypeScript - CopilotKit Runtime & LangGraph)

*   **Debugging:**
    *   **Node.js Debugger:** Use VS Code's built-in Node.js debugger or Chrome DevTools for Node to set breakpoints and inspect variables in your TypeScript code (LangGraph nodes, CopilotKit Runtime setup).
    *   **LangSmith:** As mentioned, invaluable for tracing LangGraph agent behavior step-by-step.
*   **Logging:**
    *   **Structured Logging Library (e.g., `pino`, `winston`):** Implement structured logging for clear, filterable logs.
    *   **CopilotKit Runtime Logs:** Configure verbosity or check documentation for internal logging from `@copilotkit/runtime`.
    *   **LangGraph Agent Logging:** Within LangGraph nodes, log key decisions, inputs, outputs, and errors. LangSmith captures much of this automatically if integrated.
    *   **`d365-agent-mcpclient-ts` Interactions:** Log requests sent to and responses received from `d365-agent-mcpserver-dotnet`.
    *   **Environment Variables:** Use environment variables (e.g., `LOG_LEVEL`) to control log verbosity.
    *   **Application Insights:** Ensure logs are properly correlated and sent.

### `d365-agent-mcpserver-dotnet` (.NET D365 MCP Server)

*   **Debugging:**
    *   **Visual Studio / Rider Debugger:** Attach to the running .NET process to debug MCP tool implementations and D365 OData client interactions.
*   **Logging:**
    *   **ASP.NET Core Logging Framework:** Use `ILogger<T>` for logging within your MCP tool implementations and services.
    *   **Configure Log Providers:** Send logs to the console, Azure Application Insights, etc.
    *   **D365 OData Client Tracing (Optional/Advanced):** For deep debugging of D365 calls, explore if the OData client library offers ways to log request/response payloads (can be very verbose).
    *   **MCP Request/Response Logging:** Log key details of incoming MCP requests and outgoing responses (be mindful of sensitive data).
    *   **Application Insights:** Ensure .NET logs, exceptions, and performance metrics are captured.

## 3. Troubleshooting Common Issues

*   **Authentication Errors:**
    *   **D365:** Check `d365-agent-mcpserver-dotnet` logs for issues with Azure AD app registration, client secrets, or D365 permissions.
    *   **UI/Orchestrator:** Verify any user authentication mechanisms if implemented.
*   **Connectivity Problems:**
    *   Ensure services can reach each other (UI to Orchestrator, Orchestrator to MCP Server, MCP Server to D365). Check firewalls, network configurations, and service URLs.
    *   Use tools like `curl` or Postman to test individual service endpoints.
*   **LangGraph Agent Issues:**
    *   Use LangSmith extensively. Check for errors in node execution, unexpected state transitions, or issues with tool calls.
    *   Verify prompts if LLMs are involved in routing or decision-making.
*   **D365 MCP Tool Errors:**
    *   Check `d365-agent-mcpserver-dotnet` logs for errors from the D365 OData client or within the tool logic.
    *   Validate input parameters passed to tools.
*   **CopilotKit UI Issues:**
    *   Check browser console for errors. Inspect `useCoAgent` state. Verify WebSocket connection for CoAgents Socket.
    *   Ensure `CopilotKitProvider` props (`chatApiEndpoint`, `langgraphAgentUrl`) are correct.
*   **Data Serialization/Mismatch:**
    *   Ensure data structures passed between UI, Orchestrator (LangGraph state), and MCP Server tools are consistent. Log objects at boundaries to inspect.

By implementing comprehensive logging and utilizing appropriate debugging tools for each layer, you can effectively diagnose and resolve issues within the D365 AI Agent system.
