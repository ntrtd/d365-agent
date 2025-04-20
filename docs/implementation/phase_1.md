# Phase 1: Foundation & Core Setup

*   **Goal:** Establish the core technical infrastructure, integration points, and the initial multi-agent project structure. Prove basic connectivity and MCP communication between the AI Agent Service and the shared MCP Hub connected to Dynamics 365, focusing on one initial agent for validation.
*   **MVP:** An initial agent (e.g., a minimal "Finance Accounting" agent) capable of responding to simple queries via Web Chat by successfully invoking read-only tools within its designated area of the shared MCP Hub. These tools retrieve basic data (e.g., customer name, account balance) from a single D365 sandbox instance. Demonstrates successful MCP communication, authentication, core infrastructure setup, and the configuration-driven agent build process. Basic logging visible in App Insights.

## Task Checklist

-   [ ] **Infrastructure Setup**
    -   [ ] Provision Azure AI Agent Service instance. (**Missing based on `az resource list`**)
    -   [x] Provision Azure Container Apps environment and app for MCP Hub.
    -   [x] Provision Azure Service Bus namespace.
    -   [x] Provision Azure Key Vault.
    -   [x] Provision Application Insights instance.
    -   [ ] Set up basic CI/CD pipeline structure (e.g., GitHub Actions/Azure DevOps) for deploying shared components like the MCP Hub. (**Missing based on `gh workflow list`**)
    -   [ ] Configure basic network security (VNet integration if needed). (**Unknown**)
-   [x] **Agent Configuration & Build Process**
    -   [x] Define initial agent configurations (including the MVP agent) in `config/agents/`.
    -   [x] Run `scripts/build_agent_clients.sh` to establish directory structures and generate initial OData clients (including the one for the MVP agent). Verify script prerequisites are met. (**Automation exists via `generate-odata.yml`**)
-   [ ] **MCP Hub (Shared, Minimal Implementation for MVP Agent)**
    -   [x] Initialize shared MCP Hub project (TypeScript/Node.js).
    -   [x] Implement MCP `initialize` handshake (potentially advertising only MVP agent tools initially). (**Handled by SDK**)
    -   [x] Implement shared D365 authentication client (Client Secret) for one sandbox instance within `src/mcp_hub/src/core/auth.ts`. (**Decision changed from Managed Identity to Client Secret. Implemented.**)
    -   [x] Store D365 credentials/endpoints securely in Key Vault. (**Supported by `core/auth.ts` for URL; Client Secret stored in env/config**)
    -   [~] Implement 1-2 read-only MCP tools for the MVP agent (e.g., `get_customer_by_name`) within its specific directory (e.g., `src/mcp_hub/src/agents/finance_accounting/`). (**Partially Met: Placeholder `get_customer_by_name` exists in `index.ts`, but lacks functional D365 logic**)
    -   [x] Implement basic error handling. (**Present in placeholder tool**)
    -   [ ] Containerize the MCP Hub application. (**Unknown**)
    -   [ ] Deploy initial MCP Hub to Container Apps via pipeline. (**Missing - no deployment pipeline**)
-   [ ] **AI Agent Service Configuration (for MVP Agent)** (**Blocked by missing AI Agent Service**)
    -   [ ] Create a basic Agent definition for the initial MVP agent (e.g., "Finance Accounting Agent").
    *   [ ] Register the shared MCP Hub as a tool source (connection details).
    *   [ ] Develop a minimal Agent Flow/DAG for the MVP agent using its specific read-only tool(s).
    *   [ ] Configure basic system prompts.
-   [ ] **User Interface**
    *   [ ] Set up a basic Web Chat interface connected to the AI Agent Service. (**Unknown / Blocked**)
-   [ ] **Testing & Validation (Phase 1)**
    *   [x] Define initial Evaluation Strategy details (see `docs/evaluation_strategy.md`).
    *   [ ] Create initial test cases for Phase 1 MVP (simple read queries). (**Unknown**)
    *   [ ] Implement Unit Tests for MCP Hub read-only tools (mocking D365 calls). (**Unknown**)
    *   [ ] Add Unit Tests to CI pipeline. (**Unknown**)
    *   [ ] Perform Integration Test: Verify MCP Hub connection & authentication to D365 sandbox. (**Unknown**)
    *   [ ] Perform manual E2E testing via Web Chat for the MVP agent's read-only tools against MVP criteria. (**Unknown**)
    *   [ ] Verify basic logs and traces are captured in Application Insights. (**Unknown**)
