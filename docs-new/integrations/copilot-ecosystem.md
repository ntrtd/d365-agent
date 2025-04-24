# Integration: Copilot Ecosystem

Connect your D365 Agent with the broader Microsoft Copilot ecosystem, including Copilot Studio, CopilotKit, and potentially other AI SDKs like the Vercel AI SDK (if relevant).

*(This content will integrate details from `copilotkit.md` and `vercel_ai_sdk.md`)*

## Microsoft Copilot Studio (Formerly Power Virtual Agents)

*   **Calling Agent API:** Using Power Automate flows triggered by Copilot Studio topics to interact with your D365 agent (exposed via an API).
*   **Custom Connectors:** Utilizing custom connectors within Copilot Studio (via Power Platform) to directly call the agent API.
*   **Passing Context:** Strategies for passing conversation context between Copilot Studio and the D365 agent.

## CopilotKit / Other AI SDKs (e.g., Vercel AI SDK)

*   **Exposing Agent as a Tool:** Making D365 agent capabilities available as tools or functions that can be called by AI orchestration frameworks like CopilotKit.
    *   [Defining tool schemas/function descriptions]
    *   [Handling API calls from the orchestrator to your agent's API endpoint]
*   **Direct SDK Integration:** Potentially integrating the D365 Agent SDK directly within applications built using these AI frameworks (if architecture allows).

## Architecture Patterns

*   **Agent as a Backend Service:** The D365 agent runs independently and exposes an API consumed by Copilot Studio or other AI frameworks.
*   **Agent as an Action/Tool:** The agent's capabilities are described and made callable by an AI orchestrator.

## Considerations

*   **Authentication:** Securely authenticating calls between the Copilot platform/AI framework and your agent's API.
*   **Data Mapping:** Transforming data between the formats used by the AI framework and the D365 Agent SDK.
*   **Error Handling:** Propagating errors effectively between the systems.
