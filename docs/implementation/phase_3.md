# Phase 3: Expansion & Multi-Instance Support

*   **Goal:** Expand the agent's capabilities to handle more complex variations, support multiple Dynamics 365 instances/legal entities, and potentially add another user channel or business process.
*   **MVP:** The agent can execute the initial use case (from Phase 2) for users/data across at least two different D365 instances/legal entities. The agent can successfully execute at least one additional, distinct business process (e.g., Requisition-to-PO for a specific company). Demonstrates multi-instance capability and expansion to new functional areas.

## Task Checklist

-   [ ] **MCP Hub Enhancements (Multi-Instance)**
    -   [ ] Implement instance/company routing logic within the MCP Hub.
    -   [ ] Add configuration (Key Vault) for multiple D365 instances (URLs, credentials).
    -   [ ] Implement D365 authentication clients for additional instances (e.g., legacy AX, another FO).
    -   [ ] Refactor existing tools to accept and use `company` / `instance` parameters for routing.
-   [ ] **MCP Hub Enhancements (New Functionality)**
    -   [ ] Identify and design MCP tools for a second business process (e.g., Requisition-to-PO: `Get_Open_Requisitions`, `Assign_Suppliers_to_Req_Lines`, `Create_Purchase_Orders_from_Requisitions`).
    -   [ ] Implement the new MCP tools, including D365 client interactions.
    -   [ ] Consider adding tools for more complex validation or external integration (e.g., basic external catalogue lookup via CSV/API).
    -   [ ] Update MCP Hub deployment.
-   [ ] **AI Agent Service Enhancements**
    -   [ ] Develop new Agent Flow/DAG for the second business process (e.g., `SCM_RequisitionToPO`).
    -   [ ] Update system prompts and training data to handle multi-company context and the new process.
    -   [ ] Refine existing Agent Flows to handle more exceptions/edge cases identified.
    -   [ ] Update Agent configuration with new flows/tools.
-   [ ] **User Interface / Channel**
    -   [ ] (Optional) Implement integration with an additional channel (e.g., basic Teams bot integration).
    -   [ ] Ensure UI can handle context switching or specification for different companies if necessary.
-   [ ] **Testing & Validation (Phase 3)**
    *   [ ] Expand test datasets to cover multi-instance and new process scenarios.
    *   [ ] Implement Unit/Integration tests for new/refactored MCP Hub tools.
    *   [ ] Configure & Run Agent Flow evaluations for the new process and multi-instance variations.
    *   [ ] Perform E2E testing for all supported scenarios across relevant instances.
    *   [ ] Conduct basic performance testing for key flows.
    *   [ ] Perform regression testing on Phase 1 & 2 functionality.
    *   [ ] Analyze results and logs, iterate on fixes.
