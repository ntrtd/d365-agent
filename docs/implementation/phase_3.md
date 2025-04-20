# Phase 3: Expansion & Multi-Instance Support

*   **Goal:** Expand capabilities by adding a **second specialized agent** (e.g., Procurement Agent) to handle a distinct business process, and enable existing and new agents (via the shared MCP Hub using the **SAP Cloud SDK client**) to support multiple Dynamics 365 instances/legal entities. Optionally add another user channel.
*   **MVP:** The initial agent (e.g., SCM Agent) can execute its Phase 2 use case across at least two different D365 instances/legal entities. A second agent (e.g., **Procurement Agent**) is introduced and can successfully execute at least one distinct business process (e.g., Requisition-to-PO for a specific company). Demonstrates multi-instance handling (likely within MCP tool logic or `HttpDestination` construction), multi-agent orchestration (if needed), and expansion to new functional areas/agents using the **single SAP Cloud SDK client (`src/generated/d365-client/`)**.

## Task Checklist

-   [ ] **MCP Hub Enhancements (Multi-Instance)**
    -   [ ] Refactor authentication logic (`src/mcp_hub/src/core/auth.ts`) to potentially handle credentials/URLs for multiple instances (e.g., based on `company` parameter passed to tools).
    -   [ ] Add configuration (Key Vault) for additional D365 instances.
    -   [ ] Adapt tool implementation logic (e.g., in `src/mcp_hub/src/tools/`) to construct the correct `HttpDestination` object (using `@sap-cloud-sdk/connectivity`) with the appropriate URL and credentials based on input parameters like `company`.
-   [ ] **MCP Hub Enhancements (New Agent Functionality - e.g., Procurement)**
    -   [ ] Identify and design MCP tools for the second agent's primary process (e.g., Requisition-to-PO: `get_open_requisitions`, `create_purchase_orders_from_requisitions`).
    -   [ ] Implement the new MCP tools within the appropriate domain directory under `src/mcp_hub/src/tools/` (e.g., `src/mcp_hub/src/tools/procurement/`).
    -   [ ] Ensure tools utilize the **single generated SAP Cloud SDK client** (`src/generated/d365-client/`).
    -   [ ] Consider adding tools for more complex validation or external integration relevant to this new agent.
    -   [ ] Update shared MCP Hub deployment (via `deploy-mcphub.yml` workflow).
-   [ ] **AI Agent Service Enhancements (New & Existing Agents)**
    -   [ ] Create Agent definition for the **new agent** (e.g., Procurement Agent).
    -   [ ] Develop new Agent Flow/DAG for the second business process within its agent's directory (e.g., `src/agent/flows/procurement/RequisitionToPO.yaml`).
    -   [ ] Update system prompts and training data to recognize intents for both agents and handle multi-company context.
    -   [ ] Refine existing Agent Flows (e.g., for SCM Agent) to handle multi-instance parameters and more exceptions/edge cases.
    -   [ ] Update Agent configurations deployment (for both existing and new agents).
-   [ ] **User Interface / Channel**
    -   [ ] (Optional) Implement integration with an additional channel (e.g., basic Teams bot integration).
    -   [ ] Ensure UI can handle context switching or specification for different companies if necessary.
-   [ ] **Testing & Validation (Phase 3)**
    *   [ ] Expand test datasets to cover multi-instance and new process scenarios.
    *   [ ] Implement Unit/Integration tests for new/refactored MCP Hub tools (for both agents).
    *   [ ] Configure & Run Agent Flow evaluations for the new agent's process and multi-instance variations of existing flows.
    *   [ ] Perform E2E testing for all supported agent scenarios across relevant instances.
    *   [ ] Conduct basic performance testing for key flows.
    *   [ ] Perform regression testing on Phase 1 & 2 functionality (especially the initial agent).
    *   [ ] Analyze results and logs, iterate on fixes across agents and the Hub.
