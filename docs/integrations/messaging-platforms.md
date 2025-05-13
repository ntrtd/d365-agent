# Integration: Messaging Platforms

Extend the reach of your Dynamics 365 AI Agent system by integrating its capabilities with popular messaging platforms like Microsoft Teams, WhatsApp, Slack, etc. The core intelligence and orchestration reside in the **`d365-agent-orchestrator`** (hosting CopilotKit Runtime and LangGraph agents).

## General Approach

Integrating with messaging platforms typically involves creating a **Bot Application** or **Webhook Handler** specific to that platform. This component acts as a bridge:

1.  It receives messages/events from users on the messaging platform.
2.  It translates these into requests for the `d365-agent-orchestrator`. This usually involves calling a dedicated API endpoint exposed by `d365-agent-orchestrator` designed for programmatic interaction (as opposed to the GraphQL endpoint used by the CopilotKit UI).
3.  The `d365-agent-orchestrator` processes the request using its LangGraph agents (which in turn may call the D365 MCP Server or other services).
4.  The response from `d365-agent-orchestrator` is sent back to the Bot Application/Webhook Handler.
5.  The Bot Application/Webhook Handler formats the response appropriately for the specific messaging platform and sends it to the user.

This Bot Application/Webhook Handler should ideally be a **containerized service**, aligning with the overall architecture's preference for container-based deployments.

## Microsoft Teams

*   **Integration Method:** Build a **Microsoft Bot Framework** bot.
*   **Bot Backend (Containerized Service):**
    *   This service, built with the Bot Framework SDK, acts as the bridge.
    *   It receives activities from Teams via Azure Bot Service.
    *   It calls an API endpoint on `d365-agent-orchestrator` to invoke the relevant LangGraph agent or action.
    *   It formats the response from `d365-agent-orchestrator` (e.g., into text or Adaptive Cards) and sends it back to the Teams user.
*   **UI:** Leverage **Adaptive Cards** for rich interactions within Teams.
*   **Authentication:** Utilize Teams SSO or Bot Framework OAuth prompts, passing necessary user context to `d365-agent-orchestrator`.
*   **See Also:** [Bot Framework Integration Guide](./bot-framework.md) (ensure this guide also reflects the containerized bot backend approach).

## WhatsApp

*   **Integration Method:** Use the **WhatsApp Business Platform Cloud API**.
*   **Webhook Handler (Containerized Service):**
    *   Create a dedicated containerized service (e.g., Node.js/Express or ASP.NET Core Web API) that:
        *   Exposes a webhook endpoint to receive incoming messages from the WhatsApp Cloud API.
        *   Authenticates and validates incoming webhook requests.
        *   Calls an API endpoint on `d365-agent-orchestrator` with the message content.
        *   Receives the response from `d365-agent-orchestrator`.
        *   Formats the response and makes authenticated HTTP POST requests to the WhatsApp Cloud API `/messages` endpoint to send replies.
*   **Considerations:** Requires managing WhatsApp API tokens, webhook verification, message templates, and platform-specific rate limits.

## Other Platforms (e.g., Slack)

*   **Integration Method:** Utilize the specific platform's SDKs and APIs (e.g., Slack Bolt SDK).
*   **Platform-Specific Backend (Containerized Service):** Develop a dedicated containerized service for that platform.
*   **Similar Pattern:** This service will:
    *   Receive incoming messages/events (via webhooks or socket connections).
    *   Parse intent/data as needed.
    *   Call an API endpoint on `d365-agent-orchestrator`.
    *   Format and send responses back using the platform's API/SDK.

## General Considerations for Messaging Platform Integrations

*   **API on `d365-agent-orchestrator`:** Design clear, secure, and versioned API endpoints on `d365-agent-orchestrator` for these external messaging platform bridges to call. These APIs should allow triggering specific LangGraph agents or actions and passing necessary context.
*   **Message Formatting:** The `d365-agent-orchestrator` might return structured data. The platform-specific bot/webhook handler is responsible for translating this into the native message formats of each platform (e.g., Markdown, interactive elements, cards).
*   **User Identity & Context:** Implement a strategy to map users from the messaging platform to users within your system if necessary for personalization, permissions, or context.
*   **Asynchronous Operations:** If LangGraph processes are long-running, the messaging platform integration might need to handle initial acknowledgments and then send follow-up messages when results are ready (potentially via proactive messaging capabilities of the platform, if supported, or by prompting the user to check back).
*   **Security:** Secure all webhook endpoints and API calls between the messaging platform, the bridge service, and `d365-agent-orchestrator`.
