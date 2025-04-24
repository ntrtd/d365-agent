# Integration: Azure Services

Host and integrate your D365 Agent using various Azure services for scalability, reliability, and event-driven architectures.

## Azure Functions

*   **Hosting the Agent:** Deploying the agent logic within an Azure Function (e.g., using an HTTP trigger).
*   **Triggering Agents:** Using other Azure services (e.g., Service Bus, Event Grid) to trigger agent functions based on events from D365 or other systems.
*   **Scalability and Cost:** Leveraging Azure Functions' consumption plan for cost-effectiveness and automatic scaling.
*   **Authentication:** Using Managed Identities for secure access to D365 and other Azure resources.

## Azure Logic Apps

*   **Orchestration:** Using Logic Apps to orchestrate workflows that involve calling the D365 agent (exposed via an API, e.g., an Azure Function).
*   **Connectors:** Utilizing built-in connectors for D365, Service Bus, etc., alongside HTTP actions to call the agent API.
*   **Low-Code Integration:** Building integrations with minimal code.

## Azure Service Bus / Event Grid

*   **Decoupled Communication:** Using message queues or event topics to decouple systems interacting with the agent.
*   **Event-Driven Agents:** Triggering agent actions based on events published to Event Grid (e.g., a D365 record change event captured via Dataverse connector or webhooks).

## Azure App Service

*   **Hosting Web APIs:** Deploying a dedicated web API (e.g., ASP.NET Core) that hosts the D365 agent SDK.
*   **Features:** Leveraging App Service features like deployment slots, scaling options, and integrated authentication.

## Considerations

*   **Choosing the Right Service:** Selecting the appropriate Azure service based on requirements (scalability, trigger type, complexity, state management).
*   **Security:** Implementing secure communication and authentication between services.
*   **Monitoring:** Integrating with Azure Monitor and Application Insights for observability.
