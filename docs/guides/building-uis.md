# Guide: Building UIs with the Agent

This guide explores patterns and techniques for integrating the D365 Agent SDK with various user interface technologies commonly used by partners.

*(This content would likely absorb and expand upon the original `frontend_integrations.md`)*

## Exposing Agent Functionality

*   **API Endpoint:** Setting up an HTTP API (e.g., ASP.NET Core Web API, Azure Functions) to expose agent capabilities to frontends.
    *   [Code examples for API controllers]
    *   [Authentication considerations for the API layer]
*   **Real-time Communication:** Using SignalR or WebSockets for bidirectional communication (if applicable).
    *   [Setup and usage examples]

## Frontend Integration Examples

*   **Power Apps:**
    *   [Creating custom connectors]
    *   [Calling the agent API from Power Fx]
*   **Web Applications (React, Angular, Vue, Blazor):**
    *   [Fetching data from the agent API]
    *   [Handling asynchronous operations]
    *   [Displaying agent responses]
    *   [Example code snippets for common frameworks]
*   **Custom Applications (.NET MAUI, WinForms/WPF - if relevant):**
    *   [Direct SDK integration (if feasible) or API calls]

## UI Design Considerations

*   [Handling latency]
*   [Displaying complex responses]
*   [User feedback mechanisms]
