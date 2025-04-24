# WhatsApp Integration

Integrating WhatsApp as a communication channel for the Dynamics 365 AI Agent system is possible via the WhatsApp Business Platform Cloud API.

*   **Role:** Allows users to interact with the D365 agent through WhatsApp messaging. WhatsApp acts as part of the **Presentation Layer**.
*   **Architecture:** Requires a dedicated **Application Backend** service specifically designed to handle WhatsApp communication.
    *   This backend would likely be implemented in **Node.js** or another language capable of making HTTP requests.
    *   It needs to expose a webhook endpoint to receive incoming messages and status updates from the WhatsApp Cloud API.
    *   It needs to make authenticated calls to the WhatsApp Cloud API to send outgoing messages.
*   **Integration Strategy:**
    1.  A user sends a message to the designated WhatsApp Business number.
    2.  The WhatsApp Cloud API forwards the message to the registered webhook endpoint on the **WhatsApp Application Backend**.
    3.  The Application Backend receives the message, authenticates the webhook (if configured), and parses the user's intent.
    4.  It then uses the appropriate **`d365-agent-mcpclient-*`** library (likely `d365-agent-mcpclient-ts` if the backend is Node.js) to initiate the required orchestration flow (AutoGen/DAG).
    5.  The orchestration logic calls tools on the deployed **`d365-agent-mcpserver-*`** via MCP.
    6.  Upon receiving results, the Application Backend formats a user-friendly response suitable for WhatsApp.
    7.  The Application Backend makes an authenticated HTTP POST request to the WhatsApp Cloud API's `/messages` endpoint to send the reply back to the user.

*   **SDK Considerations:**
    *   The official `WhatsApp/WhatsApp-Nodejs-SDK` (`submodules/whatsapp-nodejs-sdk`) **is archived and no longer maintained**. Using it is **not recommended** due to potential lack of updates, bugs, and security vulnerabilities.
    *   **Recommended Approach:** Interact with the [WhatsApp Business Cloud API](https://developers.facebook.com/docs/whatsapp/cloud-api/) directly using standard HTTP client libraries (like `axios` for Node.js or `HttpClient` for .NET) within the WhatsApp Application Backend. Alternatively, explore actively maintained third-party community SDKs if available.

*   **Strengths:** Leverages a widely used communication channel.
*   **Considerations:** Requires careful handling of WhatsApp API credentials, webhook verification, and potentially message rate limits. The lack of an actively maintained official Node.js SDK increases development effort compared to channels with supported SDKs.
