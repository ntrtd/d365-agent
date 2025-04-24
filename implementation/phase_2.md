# Phase 2: Initial End-to-End Use Case (e.g., PO Ingestion MVP)

*   **Goal:** Implement and validate a single, high-value, end-to-end business process (e.g., PO Ingestion) within an **Application Backend / Client Library** (repo [`d365-agent-mcpclient-ts`](https://github.com/ntrtd/d365-agent-mcpclient-ts) or [`d365-agent-mcpclient-dotnet`](https://github.com/ntrtd/d365-agent-mcpclient-dotnet)). Demonstrate transactional capabilities by calling tools on the MCP Server (repo [`d365-agent-mcpserver-ts`](https://github.com/ntrtd/d365-agent-mcpserver-ts) or [`d365-agent-mcpserver-dotnet`](https://github.com/ntrtd/d365-agent-mcpserver-dotnet)) and potentially integrate external services like Document Intelligence.
*   **Orchestration Decision:** Decide whether this initial E2E flow will use **AutoGen** or a defined **DAG** for orchestration within the chosen client-side implementation (TS or C#).
*   **MVP:** An **Application Backend** (e.g., for SCM) capable of processing a simple Purchase Order (received via email/PDF or direct input). The orchestration logic (AutoGen/DAG in `d365-agent-mcpclient-*`) calls tools on the chosen MCP Server repo ([`d365-agent-mcpserver-ts`](https://github.com/ntrtd/d365-agent-mcpserver-ts) or [`d365-agent-mcpserver-dotnet`](https://github.com/ntrtd/d365-agent-mcpserver-dotnet)) (e.g., `resolve_item`, `create_sales_order`) to validate data and create a Sales Order in D365 for known items/customers within credit limits (the "happy path"). Demonstrates transactional MCP tool calls, orchestration logic, and potential external service integration (like Document Intelligence).

## Task Checklist

-   [ ] **Document Processing Setup (Optional - if needed for E2E Use Case)**
    -   [ ] Provision Azure AI Document Intelligence resource (via [`d365-agent-infra`](https://github.com/ntrtd/d365-agent-infra)).
    -   [ ] Develop Azure Function (e.g., in `d365-agent-functions` repo) for document parsing (Triggered by Service Bus).
    -   [ ] Configure Function to output structured JSON to another Service Bus topic/queue.
    -   [ ] Deploy Document Parsing Function (via its own CI/CD pipeline).
-   [ ] **Ingestion Flow Setup (Optional - if needed for E2E Use Case)**
    -   [ ] Develop Logic App/Power Automate flow or custom listener to monitor input channel (e.g., email inbox).
    -   [ ] Configure flow to save attachments (if any) to Blob Storage.
    -   [ ] Configure flow to trigger Service Bus message (input for Parsing Function or Application Backend).
    -   [ ] Configure trigger for the target Application Backend (e.g., Service Bus trigger).
-   [ ] **MCP Server Enhancements (Repo: [`d365-agent-mcpserver-ts`](https://github.com/ntrtd/d365-agent-mcpserver-ts) OR [`d365-agent-mcpserver-dotnet`](https://github.com/ntrtd/d365-agent-mcpserver-dotnet))**
    -   [ ] Implement transactional MCP tools required for the E2E scenario (e.g., `resolve_item`, `get_trade_price`, `check_credit`, `create_sales_order`) using the chosen SDK (TS or C#) and the generated D365 client.
    -   [ ] Implement appropriate validation and error handling logic within tools.
    -   [ ] Update chosen MCP Server deployment via its CI/CD pipeline.
-   [ ] **Application Backend / Client Library Enhancements (Repo: [`d365-agent-mcpclient-ts`](https://github.com/ntrtd/d365-agent-mcpclient-ts) OR [`d365-agent-mcpclient-dotnet`](https://github.com/ntrtd/d365-agent-mcpclient-dotnet) / App Backend Repo)**
    -   [ ] Implement the E2E orchestration logic (using chosen strategy: **AutoGen** agents or **DAG** definition) within the Application Backend or chosen Client Library (`d365-agent-mcpclient-*`).
    -   [ ] Logic should handle inputs (e.g., from Service Bus trigger, direct API call) potentially including parsed document data.
    -   [ ] Logic calls the necessary MCP tools on the deployed MCP Server ([`d365-agent-mcpserver-ts`](https://github.com/ntrtd/d365-agent-mcpserver-ts) or [`d365-agent-mcpserver-dotnet`](https://github.com/ntrtd/d365-agent-mcpserver-dotnet)) sequentially or based on agent interaction.
    -   [ ] Implement basic error handling within the orchestration flow (e.g., branch on credit check failure).
    -   [ ] If using LLMs for prompts/responses, integrate here.
    -   [ ] Deploy Application Backend / Client Library (`d365-agent-mcpclient-*`) updates.
-   [ ] **User Interface / Channel (Initial)**
    -   [ ] Set up or ensure the chosen channel (e.g., Web Chat via App Service, test harness) can initiate the E2E flow and receive responses/confirmations/errors from the Application Backend.
-   [ ] **Testing & Validation (Phase 2)**
    *   [ ] Refine Evaluation Strategy (add orchestration flow metrics, E2E test scope).
    *   [ ] Create test datasets for the E2E scenario (diverse inputs, edge cases). (**Location TBD, maybe `d365-agent-tests`**)
    *   [ ] Implement Unit Tests for new MCP Server tools in the chosen MCP server repo ([`d365-agent-mcpserver-ts`](https://github.com/ntrtd/d365-agent-mcpserver-ts) or [`d365-agent-mcpserver-dotnet`](https://github.com/ntrtd/d365-agent-mcpserver-dotnet)).
    *   [ ] Implement Unit Tests for orchestration logic in Application Backend / Client Library ([`d365-agent-mcpclient-ts`](https://github.com/ntrtd/d365-agent-mcpclient-ts) or [`d365-agent-mcpclient-dotnet`](https://github.com/ntrtd/d365-agent-mcpclient-dotnet)).
    *   [ ] Implement Integration Tests for MCP Server tools against D365 sandbox (verify SO creation) in the chosen MCP server repo ([`d365-agent-mcpserver-ts`](https://github.com/ntrtd/d365-agent-mcpserver-ts) or [`d365-agent-mcpserver-dotnet`](https://github.com/ntrtd/d365-agent-mcpserver-dotnet)).
    *   [ ] Perform E2E scenario testing (manual or automated) for the "happy path" and basic error conditions, triggering the Application Backend. (**Location TBD, maybe `d365-agent-tests`**)
    *   [ ] Analyze results and logs, iterate on fixes for the orchestration logic and relevant MCP Server tools.
