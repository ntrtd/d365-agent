# Phase 2: Initial End-to-End Use Case (e.g., PO Ingestion MVP)

*   **Goal:** Implement and validate a single, high-value, end-to-end business process, demonstrating transactional capabilities and integration with key components like Document Intelligence.
*   **MVP:** An agent capable of processing a simple PO (received via email/PDF or direct input) for known items and customers within credit limits, resulting in a Sales Order created in the D365 sandbox. Focuses on the "happy path" for the chosen scenario. Basic error handling included. Demonstrates transactional capability, Document Intelligence integration, and a complete workflow involving multiple MCP tool calls.

## Task Checklist

-   [ ] **Document Processing Setup**
    -   [ ] Provision Azure AI Document Intelligence resource.
    -   [ ] Develop Azure Function for document parsing (Triggered by Service Bus).
    -   [ ] Configure Function to output structured JSON to another Service Bus topic/queue.
    -   [ ] Deploy Document Parsing Function.
-   [ ] **Ingestion Flow Setup**
    -   [ ] Develop Logic App/Power Automate flow to monitor email inbox.
    -   [ ] Configure flow to save attachments to Blob Storage.
    -   [ ] Configure flow to trigger Service Bus message (input for Parsing Function).
    -   [ ] Configure Service Bus trigger for AI Agent Service (or intermediary function).
-   [ ] **MCP Hub Enhancements**
    -   [ ] Implement MCP tools required for chosen scenario (e.g., `resolve_item`, `get_trade_price`, `check_credit` [basic], `create_sales_order`).
    -   [ ] Integrate D365 client adapters for relevant modules (e.g., SCM, Finance).
    -   [ ] Implement basic validation logic within tools.
    -   [ ] Update MCP Hub deployment.
-   [ ] **AI Agent Service Enhancements**
    -   [ ] Develop Agent Flow/DAG for the end-to-end scenario (e.g., `SCM_ProcessPO_MVP`).
    -   [ ] Include steps for calling document parsing results (as input/resource).
    -   [ ] Include steps for calling the new MCP tools sequentially.
    -   [ ] Implement basic error handling logic within the flow (e.g., branch on credit check failure).
    -   [ ] Refine system prompts for the PO processing task.
    -   [ ] Update Agent configuration.
-   [ ] **User Interface / Channel**
    -   [ ] Ensure the chosen channel (e.g., email, Web Chat) supports initiating the flow (e.g., receiving emails, allowing file uploads or text input representing PO).
    -   [ ] Refine response handling for confirmations or error messages.
-   [ ] **Testing & Validation (Phase 2)**
    *   [ ] Refine Evaluation Strategy (add Flow evaluation metrics, E2E test scope, prompt eval - see `docs/evaluation_strategy.md`).
    *   [ ] Create test datasets for the E2E scenario (diverse inputs, edge cases).
    *   [ ] Implement Unit Tests for new MCP Hub tools.
    *   [ ] Implement Integration Tests for MCP Hub tools against D365 sandbox (verify SO creation).
    *   [ ] Configure & Run Agent Flow evaluations in AI Studio (using test datasets, check metrics like groundedness, relevance).
    *   [ ] Perform E2E scenario testing (manual or automated) for "happy path" and basic error conditions.
    *   [ ] Conduct initial prompt evaluation / red-teaming for the scenario.
    *   [ ] Analyze results and logs, iterate on fixes.
