# Phase 3: Expansion & Multi-Instance Support

*   **Goal:** Expand capabilities by implementing the orchestration logic for a **second distinct business process** (e.g., Procurement) within an Application Backend / Client Library (repo [`d365-agent-mcpclient-ts`](https://github.com/ntrtd/d365-agent-mcpclient-ts) or [`d365-agent-mcpclient-dotnet`](https://github.com/ntrtd/d365-agent-mcpclient-dotnet)), and enable the MCP Server (repo [`d365-agent-mcpserver-ts`](https://github.com/ntrtd/d365-agent-mcpserver-ts) or [`d365-agent-mcpserver-dotnet`](https://github.com/ntrtd/d365-agent-mcpserver-dotnet)) to support multiple Dynamics 365 instances/legal entities. Optionally add another user channel.
*   **MVP:** The orchestration logic for the first E2E use case (e.g., SCM PO Processing in `d365-agent-mcpclient-*`) can execute its process targeting at least two different D365 instances/legal entities via the deployed MCP Server (`d365-agent-mcpserver-*`). Orchestration logic for a second business process (e.g., Procurement Req-to-PO in `d365-agent-mcpclient-*`) is implemented (using **AutoGen** or **DAG**) and can successfully execute its "happy path" against a specific company via the MCP Server. Demonstrates multi-instance handling within the MCP server logic and the client's ability to orchestrate multiple distinct business processes.

## Task Checklist

-   [ ] **MCP Server Enhancements (Repo: [`d365-agent-mcpserver-ts`](https://github.com/ntrtd/d365-agent-mcpserver-ts) OR [`d365-agent-mcpserver-dotnet`](https://github.com/ntrtd/d365-agent-mcpserver-dotnet)) (Multi-Instance)**
    -   [ ] Refactor D365 authentication logic (TS or C#) to handle credentials/URLs for multiple instances based on input parameters (e.g., `company`).
    -   [ ] Add configuration (Key Vault - managed via [`d365-agent-infra`](https://github.com/ntrtd/d365-agent-infra)) for additional D365 instances.
    -   [ ] Adapt tool implementation logic (TS or C#) to utilize the appropriate instance-specific configuration/authentication when interacting with the generated D365 OData client.
-   [ ] **MCP Server Enhancements (Repo: [`d365-agent-mcpserver-ts`](https://github.com/ntrtd/d365-agent-mcpserver-ts) OR [`d365-agent-mcpserver-dotnet`](https://github.com/ntrtd/d365-agent-mcpserver-dotnet)) (New Process Tools - e.g., Procurement)**
    -   [ ] Identify and design MCP tools for the second business process (e.g., `get_open_requisitions`, `create_purchase_orders_from_requisitions`).
    -   [ ] Implement the new MCP tools using the chosen SDK (TS or C#) and the generated D365 OData client.
    -   [ ] Update chosen MCP Server deployment via its CI/CD pipeline.
-   [ ] **Application Backend / Client Library Enhancements (Repo: [`d365-agent-mcpclient-ts`](https://github.com/ntrtd/d365-agent-mcpclient-ts) OR [`d365-agent-mcpclient-dotnet`](https://github.com/ntrtd/d365-agent-mcpclient-dotnet) / App Backend Repo)**
    -   [ ] Implement orchestration logic (using chosen strategy: **AutoGen** or **DAG**, in TS or C#) for the second business process (e.g., Procurement Req-to-PO).
    -   [ ] Refine existing orchestration logic (e.g., SCM PO Processing) to pass necessary parameters (e.g., `company`) for multi-instance execution via MCP tool calls to the MCP server (`d365-agent-mcpserver-*`).
    -   [ ] Enhance error handling and potentially add more sophisticated conversational logic or state management.
    -   [ ] Deploy Application Backend / Client Library (`d365-agent-mcpclient-*`) updates.
-   [ ] **User Interface / Channel**
    -   [ ] (Optional) Implement integration with an additional channel (e.g., basic Teams bot integration connecting to the appropriate Application Backend).
    -   [ ] Ensure UI/channel can handle context for different business processes and potentially different companies if necessary.
-   [ ] **Testing & Validation (Phase 3)**
    *   [ ] Expand test datasets to cover multi-instance and new process scenarios. (**Location TBD, maybe `d365-agent-tests`**)
    *   [ ] Implement Unit/Integration tests for new/refactored MCP Server tools (multi-instance logic, new process tools) in the chosen MCP server repo ([`d365-agent-mcpserver-ts`](https://github.com/ntrtd/d365-agent-mcpserver-ts) or [`d365-agent-mcpserver-dotnet`](https://github.com/ntrtd/d365-agent-mcpserver-dotnet)).
    *   [ ] Implement Unit Tests for the new orchestration logic (e.g., Procurement) in Application Backend / Client Library ([`d365-agent-mcpclient-ts`](https://github.com/ntrtd/d365-agent-mcpclient-ts) or [`d365-agent-mcpclient-dotnet`](https://github.com/ntrtd/d365-agent-mcpclient-dotnet)).
    *   [ ] Perform E2E testing for all supported business process scenarios across relevant instances, triggering the Application Backend(s). (**Location TBD, maybe `d365-agent-tests`**)
    *   [ ] Conduct basic performance testing for key flows across instances.
    *   [ ] Perform regression testing on Phase 1 & 2 functionality.
    *   [ ] Analyze results and logs, iterate on fixes across orchestration logic (`d365-agent-mcpclient-*` / App Backend) and the MCP Server (`d365-agent-mcpserver-*`).
