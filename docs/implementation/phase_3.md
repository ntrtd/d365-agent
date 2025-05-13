# Phase 3: Expansion & Multi-Instance Support

*   **Goal:** Expand capabilities by implementing additional orchestration logic for both **Purchase and Sales agents** within the **Application Orchestration Layer** (repo: [`d365-agent-orchestrator`](https://github.com/ntrtd/d365-agent-orchestrator)). This includes processes like "Purchase Confirmation" for the Purchase agent and "Sales Order Creation/Management" for the Sales agent, using LangGraph and the `d365-agent-mcpclient-ts` (or `.dotnet`) library. Enable the D365 MCP Server (repo [`d365-agent-mcpserver-ts`](https://github.com/ntrtd/d365-agent-mcpserver-ts) or [`d365-agent-mcpserver-dotnet`](https://github.com/ntrtd/d365-agent-mcpserver-dotnet)) to support multiple Dynamics 365 instances/legal entities. The **CopilotKit UI** (repo: [`d365-agent-ui`](https://github.com/ntrtd/d365-agent-ui)) will be enhanced to support these new processes.
*   **MVP:**
    *   The **Purchase Agent LangGraph** (in `d365-agent-orchestrator`) is expanded to include a "Purchase Confirmation" process.
    *   The **Sales Agent LangGraph** (in `d365-agent-orchestrator`) is expanded to include a "Sales Order Creation/Management" process (building on Phase 2's Sales Quote/Inquiry).
    *   Both LangGraph agents can execute their respective processes targeting at least two different D365 instances/legal entities (via the D365 MCP Client calling the deployed D365 MCP Server).
    *   The **CopilotKit UI** (from `d365-agent-ui`) allows users to initiate and track these expanded Purchase and Sales processes.
    *   Demonstrates multi-instance handling in the D365 MCP server, and the Application Orchestration Layer's capacity to manage multiple, more complex processes for distinct agent types via LangGraph.

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
    -   [ ] Implement/Expand the **Purchase Agent LangGraph** in `d365-agent-orchestrator` to include the "Purchase Confirmation" process.
    -   [ ] Implement/Expand the **Sales Agent LangGraph** in `d365-agent-orchestrator` to include the "Sales Order Creation/Management" process.
    -   [ ] Refine existing LangGraph agents (e.g., SCM PO Processing, Sales Quote) in `d365-agent-orchestrator` to pass necessary parameters (e.g., `company`) for multi-instance execution via D365 MCP tool calls.
    -   [ ] Enhance error handling and state management within all LangGraph agents in `d365-agent-orchestrator`.
    -   [ ] Deploy `d365-agent-orchestrator` updates.
-   [ ] **User Interface / Channel (CopilotKit UI in Repo: [`d365-agent-ui`](https://github.com/ntrtd/d365-agent-ui))**
    -   [ ] Adapt the CopilotKit UI in `d365-agent-ui` to support interactions with the new "Purchase Confirmation" and "Sales Order Creation/Management" processes.
    -   [ ] Ensure the CopilotKit UI in `d365-agent-ui` can clearly distinguish between and manage context for the different agent types (Purchase, Sales) and their respective processes.
    -   [ ] Implement UI elements for handling multi-instance selection if required by the processes.
-   [ ] **Testing & Validation (Phase 3)**
    *   [ ] Expand test datasets to cover multi-instance scenarios and the new Purchase Confirmation and Sales Order Creation/Management processes. (**Location TBD, maybe `d365-agent-tests`**)
    *   [ ] Implement Unit/Integration tests for new/refactored D365 MCP Server tools (multi-instance logic, new process tools) in the chosen D365 MCP server repo.
    *   [ ] Implement Unit Tests for the new/expanded LangGraph agent logic (Purchase Confirmation, Sales Order Creation/Management) within the Application Orchestration Layer (`d365-agent-orchestrator`).
    *   [ ] Perform E2E testing for all supported business process scenarios (PO Ingestion, Purchase Confirmation, Sales Quote, Sales Order Creation) across relevant D365 instances, triggering via the CopilotKit UI connected to `d365-agent-orchestrator`. (**Location TBD, maybe `d365-agent-tests`**)
    *   [ ] Conduct basic performance testing for key flows across instances.
    *   [ ] Perform regression testing on Phase 1 & 2 functionality.
    *   [ ] Analyze results and logs, iterate on fixes across LangGraph agent logic in `d365-agent-orchestrator`, the D365 MCP Server, and the CopilotKit UI in `d365-agent-ui`.
