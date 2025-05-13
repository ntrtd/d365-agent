# Phase 3: Expansion & Multi-Instance Support

*   **Goal:** Expand capabilities by implementing more complex orchestration logic within the existing **`PurchaseAgent` and `SalesAgent` Domain-Specific LangGraph Agents** (in `d365-agent-orchestrator`). This includes "Purchase Confirmation" and "Sales Order Creation/Management" processes, leveraging **Generative UI** for richer interactions. Enable the `d365-agent-mcpserver-dotnet` to support multiple D365 instances. The `d365-agent-ui` will be enhanced accordingly. The **Master Orchestrator Agent** will be refined to manage these expanded flows.
*   **MVP:**
    *   The **`PurchaseAgent` (Domain-Specific LangGraph)** is expanded with a "Purchase Confirmation" process, utilizing Generative UI for displaying PO status and confirmation steps.
    *   The **`SalesAgent` (Domain-Specific LangGraph)** is expanded with a "Sales Order Creation/Management" process, using Generative UI for order configuration, review, and status tracking.
    *   Both Domain-Specific Agents can target at least two different D365 instances/legal entities, with instance selection potentially guided by the Master Orchestrator or user input in the UI.
    *   The **CopilotKit UI** (`d365-agent-ui`) supports these expanded processes, including rendering necessary Generative UI components and handling multi-instance contexts if user-selectable.
    *   The **Master Orchestrator Agent** is updated to correctly route to and manage context for these more complex agent interactions.
    *   Demonstrates multi-instance D365 operations, advanced LangGraph orchestration with interactive Generative UI steps, and refined Master Orchestrator capabilities.

## Task Checklist

-   [ ] **D365 MCP Server Enhancements (Repo: [`d365-agent-mcpserver-ts`](https://github.com/ntrtd/d365-agent-mcpserver-ts) OR [`d365-agent-mcpserver-dotnet`](https://github.com/ntrtd/d365-agent-mcpserver-dotnet)) (Multi-Instance & New Tools)**
    -   [ ] Refactor D365 authentication logic (TS or C#) in the D365 MCP Server to handle credentials/URLs for multiple instances based on input parameters (e.g., `company`) passed by the D365 MCP Client.
    -   [ ] Add configuration (Key Vault - managed via [`d365-agent-infra`](https://github.com/ntrtd/d365-agent-infra)) for additional D365 instances, accessible by the D365 MCP Server.
    -   [ ] Adapt D365 MCP tool implementation logic (TS or C#) to utilize the appropriate instance-specific configuration/authentication when interacting with the generated D365 OData client.
    -   [ ] Identify and design D365 MCP tools for the new Purchase Confirmation process (e.g., `getPurchaseOrderStatus`, `confirmReceiptOfGoods`).
    -   [ ] Identify and design D365 MCP tools for the expanded Sales Order Creation/Management process (e.g., `convertQuoteToOrder`, `updateOrderStatus`, `getInventoryLevels`).
    -   [ ] Implement these new D365 MCP tools using the chosen SDK (TS or C#) and the generated D365 OData client.
    -   [ ] Update chosen D365 MCP Server deployment via its CI/CD pipeline.
-   [ ] **Application Orchestration Layer Enhancements (Repo: [`d365-agent-orchestrator`](https://github.com/ntrtd/d365-agent-orchestrator))**
    -   [ ] Refine the **Master Orchestrator LangGraph Agent** to handle routing to the expanded Purchase and Sales agent functionalities and manage any necessary cross-process context or instance selection logic.
    -   [ ] Expand the **`PurchaseAgent` (Domain-Specific LangGraph)** to include the "Purchase Confirmation" process, designing states and transitions for fetching PO status, displaying details via Generative UI, and handling confirmation actions.
    -   [ ] Expand the **`SalesAgent` (Domain-Specific LangGraph)** to include "Sales Order Creation/Management," designing states for order configuration (potentially interactive with Generative UI), D365 SO creation, and status updates.
    -   [ ] Ensure both Domain-Specific Agents pass necessary parameters (e.g., `company` or D365 instance identifier) for multi-instance D365 MCP tool calls.
    -   [ ] Implement robust error handling and detailed predictive state updates for these new complex flows.
    -   [ ] Design agent state structures to support the data requirements of new Generative UI components.
    -   [ ] Deploy `d365-agent-orchestrator` updates.
-   [ ] **User Interface / Channel (CopilotKit UI in Repo: [`d365-agent-ui`](https://github.com/ntrtd/d365-agent-ui))**
    -   [ ] Develop new **Generative UI** components in `d365-agent-ui` for "Purchase Confirmation" (e.g., displaying PO details, delivery status, confirmation buttons) and "Sales Order Creation/Management" (e.g., order line entry/review, total summary, status updates).
    -   [ ] Adapt the main chat interface to seamlessly integrate these new Generative UI flows when interacting with the expanded Purchase and Sales agents.
    -   [ ] Implement UI elements for multi-instance selection if user-driven (e.g., a dropdown in a settings panel or a query-time clarification if the Master Orchestrator cannot determine the instance). This could involve `Frontend Actions` to set user preferences.
-   [ ] **Testing & Validation (Phase 3)**
    *   [ ] Expand test datasets to cover multi-instance scenarios and the new Purchase Confirmation and Sales Order Creation/Management processes. (**Location TBD, maybe `d365-agent-tests`**)
    *   [ ] Implement Unit/Integration tests for new/refactored D365 MCP Server tools (multi-instance logic, new process tools) in the chosen D365 MCP server repo.
    *   [ ] Implement Unit Tests for the new/expanded LangGraph agent logic (Purchase Confirmation, Sales Order Creation/Management) within the Application Orchestration Layer (`d365-agent-orchestrator`).
    *   [ ] Perform E2E testing for all supported business process scenarios (PO Ingestion, Purchase Confirmation, Sales Quote, Sales Order Creation) across relevant D365 instances, triggering via the CopilotKit UI connected to `d365-agent-orchestrator`. (**Location TBD, maybe `d365-agent-tests`**)
    *   [ ] Conduct basic performance testing for key flows across instances.
    *   [ ] Perform regression testing on Phase 1 & 2 functionality.
    *   [ ] Analyze results and logs, iterate on fixes across LangGraph agent logic in `d365-agent-orchestrator`, the D365 MCP Server, and the CopilotKit UI in `d365-agent-ui`.
