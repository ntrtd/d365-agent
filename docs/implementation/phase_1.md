# Phase 1: Foundation & Core Setup

*   **Goal:** Establish the core technical infrastructure (`d365-agent-infra`), integration points, and the initial agent configurations (`d365-agent-service`). Prove basic connectivity and MCP communication between the AI Agent Service and the shared MCP Hub (`d365-agent-hub`) connected to Dynamics 365. Validate with one initial agent. **Uses the SAP Cloud SDK generated OData client (from `d365-agent-odataclient` repo, consumed by `d365-agent-hub`).**
*   **MVP:** An initial agent (e.g., a minimal "Finance Accounting" agent defined in `d365-agent-service`) capable of responding to simple queries via Web Chat by successfully invoking read-only tools (located in `d365-agent-hub` repo, e.g., `src/tools/finance/`) within the shared MCP Hub. These tools retrieve basic data from a single D365 sandbox instance using the **SAP Cloud SDK client (from `@d365-agent/odataclient` package)**. Demonstrates successful MCP communication, authentication, core infrastructure setup, and the tool implementation pattern in the Hub. Basic logging visible in App Insights.

## Task Checklist

-   [ ] **Infrastructure Setup (`d365-agent-infra` repo)**
    -   [ ] Provision Azure AI Agent Service instance. (**Missing based on `az resource list`**)
    -   [x] Provision Azure Container Apps environment and app for MCP Hub.
    -   [x] Provision Azure Service Bus namespace.
    -   [x] Provision Azure Key Vault.
    *   [x] Provision Application Insights instance.
    *   [ ] Set up CI/CD pipeline in `d365-agent-infra` (e.g., GitHub Actions) to deploy infrastructure using Bicep. (**Infrastructure exists, pipeline status unknown**)
    *   [ ] Configure basic network security (VNet integration if needed). (**Unknown**)
-   [ ] **OData Client Generation & Publishing (`d365-agent-odataclient` repo)**
    -   [x] Ensure raw OData metadata is available (`../d365-agent/asset/d365_metadata.xml`).
    -   [x] Run SAP Cloud SDK generator (within `d365-agent-odataclient`) to create client. (See `README.md` in `d365-agent-odataclient` for command).
    -   [ ] Set up CI/CD pipeline to build and publish the client as an npm package (e.g., `@d365-agent/odataclient`). (**Unknown**)
-   [ ] **MCP Hub (`d365-agent-hub` repo)**
    -   [x] Initialize shared MCP Hub project (TypeScript/Node.js).
    -   [ ] Add dependency on `@d365-agent/odataclient` package. (**Needs update**)
    -   [x] Implement MCP `initialize` handshake. (**Handled by SDK**)
    -   [x] Implement shared D365 authentication client (Client Secret) within `src/core/auth.ts`. (**Implemented.**)
    -   [x] Store D365 credentials/endpoints securely in Key Vault. (**Supported by `core/auth.ts` for URL; Client Secret stored in env/config**)
    -   [ ] Implement 1-2 read-only MCP tools for the MVP agent (e.g., `get_customer_by_name` in `src/tools/finance/`) using the client from `@d365-agent/odataclient` package. (**Met: Implemented `get_customer_by_name`, needs client import update**)
    -   [x] Implement basic error handling. (**Present in tool**)
    -   [ ] Containerize the MCP Hub application. (**Met: Created `Dockerfile`**)
    -   [ ] Set up CI/CD pipeline in `d365-agent-hub` (e.g., GitHub Actions) to build and deploy MCP Hub to Container Apps. (**Met: Created `deploy-mcphub.yml` workflow; requires secrets setup**)
-   [ ] **AI Agent Service Configuration (`d365-agent-service` repo)** (**Blocked by missing AI Agent Service**)
    -   [ ] Create a basic Agent definition for the initial MVP agent (e.g., "Finance Accounting Agent") in YAML/JSON format.
    *   [ ] Register the shared MCP Hub as a tool source (connection details).
    *   [ ] Develop a minimal Agent Flow/DAG (YAML) for the MVP agent using its specific read-only tool(s).
    *   [ ] Configure basic system prompts.
    *   [ ] Set up mechanism/pipeline to deploy agent configurations to Azure AI Agent Service. (**Unknown**)
-   [ ] **User Interface**
    *   [ ] Set up a basic Web Chat interface connected to the AI Agent Service. (**Unknown / Blocked**)
-   [ ] **Testing & Validation (Phase 1)**
    *   [x] Define initial Evaluation Strategy details (see `docs/evaluation_strategy.md` in `d365-agent`).
    *   [ ] Create initial test cases for Phase 1 MVP (simple read queries). (**Location TBD, maybe `d365-agent-tests`**)
    *   [ ] Implement Unit Tests for MCP Hub read-only tools (mocking D365 calls) within `d365-agent-hub`. (**Unknown**)
    *   [ ] Add Unit Tests to `d365-agent-hub` CI pipeline. (**Unknown**)
    *   [ ] Perform Integration Test: Verify MCP Hub connection & authentication to D365 sandbox (potentially via tests in `d365-agent-hub`). (**Unknown**)
    *   [ ] Perform manual E2E testing via Web Chat for the MVP agent's read-only tools against MVP criteria. (**Unknown / Blocked**)
    *   [ ] Verify basic logs and traces are captured in Application Insights. (**Unknown**)
