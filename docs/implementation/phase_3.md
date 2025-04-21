# Phase 3: Expansion & Multi-Instance Support

*   **Goal:** Expand capabilities by adding a **second specialized agent** (e.g., Procurement Agent in `d365-agent-service`) to handle a distinct business process, and enable existing and new agents (via the shared MCP Hub in `d365-agent-hub` using the **SAP Cloud SDK client package `@d365-agent/odataclient`**) to support multiple Dynamics 365 instances/legal entities. Optionally add another user channel.
*   **MVP:** The initial agent (e.g., SCM Agent in `d365-agent-service`) can execute its Phase 2 use case across at least two different D365 instances/legal entities. A second agent (e.g., **Procurement Agent** in `d365-agent-service`) is introduced and can successfully execute at least one distinct business process (e.g., Requisition-to-PO for a specific company). Demonstrates multi-instance handling (likely within MCP tool logic or `HttpDestination` construction in `d365-agent-hub`), multi-agent orchestration (if needed), and expansion to new functional areas/agents using the **single SAP Cloud SDK client package (`@d365-agent/odataclient`)**.

## Task Checklist

-   [ ] **MCP Hub Enhancements (`d365-agent-hub` repo) (Multi-Instance)**
    -   [ ] Refactor authentication logic (`src/core/auth.ts`) to potentially handle credentials/URLs for multiple instances (e.g., based on `company` parameter passed to tools).
    -   [ ] Add configuration (Key Vault - managed via `d365-agent-infra`) for additional D365 instances.
    -   [ ] Adapt tool implementation logic (e.g., in `src/tools/`) to construct the correct `HttpDestination` object (using `@sap-cloud-sdk/connectivity`) with the appropriate URL and credentials based on input parameters like `company`.
-   [ ] **MCP Hub Enhancements (`d365-agent-hub` repo) (New Agent Functionality - e.g., Procurement)**
    -   [ ] Identify and design MCP tools for the second agent's primary process (e.g., Requisition-to-PO: `get_open_requisitions`, `create_purchase_orders_from_requisitions`).
    -   [ ] Implement the new MCP tools within the appropriate domain directory under `src/tools/` (e.g., `src/tools/procurement/`).
    -   [ ] Ensure tools utilize the **SAP Cloud SDK client imported from the `@d365-agent/odataclient` package**.
    -   [ ] Consider adding tools for more complex validation or external integration relevant to this new agent.
    -   [ ] Update shared MCP Hub deployment via its CI/CD pipeline.
-   [ ] **AI Agent Service Enhancements (`d365-agent-service` repo) (New & Existing Agents)**
    -   [ ] Create Agent definition (YAML/JSON) for the **new agent** (e.g., Procurement Agent).
    -   [ ] Develop new Agent Flow/DAG for the second business process within its agent's directory (e.g., `flows/procurement/RequisitionToPO.yaml`).
    -   [ ] Update system prompts and training data to recognize intents for both agents and handle multi-company context.
    -   [ ] Refine existing Agent Flows (e.g., for SCM Agent) to handle multi-instance parameters and more exceptions/edge cases.
    -   [ ] Update Agent configurations deployment via its mechanism/pipeline (for both existing and new agents).
-   [ ] **User Interface / Channel**
    -   [ ] (Optional) Implement integration with an additional channel (e.g., basic Teams bot integration).
    -   [ ] Ensure UI can handle context switching or specification for different companies if necessary.
-   [ ] **Testing & Validation (Phase 3)**
    *   [ ] Expand test datasets to cover multi-instance and new process scenarios (location TBD, e.g., `d365-agent-service` or `d365-agent-tests`).
    *   [ ] Implement Unit/Integration tests for new/refactored MCP Hub tools (for both agents) in `d365-agent-hub`.
    *   [ ] Configure & Run Agent Flow evaluations for the new agent's process and multi-instance variations of existing flows (in `d365-agent-service` using AI Studio).
    *   [ ] Perform E2E testing for all supported agent scenarios across relevant instances (location TBD, e.g., `d365-agent-tests`).
    *   [ ] Conduct basic performance testing for key flows.
    *   [ ] Perform regression testing on Phase 1 & 2 functionality (especially the initial agent).
    *   [ ] Analyze results and logs, iterate on fixes across agents (`d365-agent-service`) and the Hub (`d365-agent-hub`).
