# Phase 3: Expansion & Multi-Instance Support

*   **Goal:** Expand capabilities by adding a **second specialized agent** (e.g., Procurement Agent) to handle a distinct business process, and enable existing and new agents (via the shared MCP Hub) to support multiple Dynamics 365 instances/legal entities. Optionally add another user channel.
*   **MVP:** The initial agent (e.g., SCM Agent) can execute its Phase 2 use case across at least two different D365 instances/legal entities. A second agent (e.g., **Procurement Agent**) is introduced and can successfully execute at least one distinct business process (e.g., Requisition-to-PO for a specific company). Demonstrates multi-instance routing in the MCP Hub, multi-agent orchestration (if needed), and expansion to new functional areas/agents.

## Task Checklist

-   [ ] **MCP Hub Enhancements (Multi-Instance)**
    -   [ ] Implement instance/company routing logic within the MCP Hub.
    -   [ ] Add configuration (Key Vault) for multiple D365 instances (URLs, credentials).
    -   [ ] Implement D365 authentication clients for additional instances (e.g., legacy AX, another FO).
    -   [ ] Refactor existing tools (shared and agent-specific) to accept and use `company` / `instance` parameters for routing logic within the Hub.
-   [ ] **MCP Hub Enhancements (New Agent Functionality - e.g., Procurement)**
    -   [ ] Identify and design MCP tools for the second agent's primary process (e.g., Requisition-to-PO: `Get_Open_Requisitions`, `Assign_Suppliers_to_Req_Lines`, `Create_Purchase_Orders_from_Requisitions`).
    -   [ ] Implement the new MCP tools within the appropriate agent's directory (e.g., `src/mcp_hub/src/agents/procurement/`).
    -   [ ] Ensure OData clients are generated/updated for the new agent via `build_agent_clients.sh`.
    -   [ ] Consider adding tools for more complex validation or external integration relevant to this new agent.
    -   [ ] Update shared MCP Hub deployment.
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
