# Phase 1: Foundation & Core Setup

*   **Goal:** Establish the core technical infrastructure and integration points. Prove basic connectivity and MCP communication between the AI Agent Service and a simplified MCP Hub connected to Dynamics 365.
*   **MVP:** An agent capable of responding to simple queries via Web Chat by successfully invoking read-only tools on the MCP Hub that retrieve basic data (e.g., customer name, product details) from a single D365 sandbox instance. Demonstrates successful MCP communication, authentication, and core infrastructure setup. Basic logging visible in App Insights.

## Task Checklist

-   [ ] **Infrastructure Setup**
    -   [ ] Provision Azure AI Agent Service instance.
    -   [ ] Provision Azure Container Apps environment and app for MCP Hub.
    -   [ ] Provision Azure Service Bus namespace.
    -   [ ] Provision Azure Key Vault.
    -   [ ] Provision Application Insights instance.
    -   [ ] Set up basic CI/CD pipeline structure (e.g., GitHub Actions/Azure DevOps).
    -   [ ] Configure basic network security (VNet integration if needed).
-   [ ] **MCP Hub (Minimal)**
    -   [ ] Initialize MCP Hub project (e.g., Python/FastAPI).
    -   [ ] Implement MCP `initialize` handshake.
    -   [ ] Implement D365 authentication client (Managed Identity) for one sandbox instance.
    -   [ ] Store D365 credentials/endpoints securely in Key Vault.
    -   [ ] Implement 1-2 read-only MCP tools (e.g., `get_customer_by_name`).
    -   [ ] Implement basic error handling.
    -   [ ] Containerize the MCP Hub application.
    -   [ ] Deploy initial MCP Hub to Container Apps via pipeline.
-   [ ] **AI Agent Service Configuration**
    -   [ ] Create a basic Agent definition.
    *   [ ] Register the MCP Hub as a tool source (connection details).
    *   [ ] Develop a minimal Agent Flow/DAG using the read-only tool(s).
    *   [ ] Configure basic system prompts.
-   [ ] **User Interface**
    *   [ ] Set up a basic Web Chat interface connected to the AI Agent Service.
-   [ ] **Testing & Validation**
    *   [ ] Test MCP handshake and tool discovery.
    *   [ ] Test D365 authentication from MCP Hub.
    *   [ ] Test end-to-end flow via Web Chat for the read-only tools.
    *   [ ] Verify basic logs are captured in Application Insights.
