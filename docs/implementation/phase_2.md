# Phase 2: Initial End-to-End Use Case (e.g., PO Ingestion MVP)

*   **Goal:** Implement and validate a single, high-value, end-to-end business process using a **specific specialized agent** (e.g., the SCM Agent). Demonstrate transactional capabilities and integration with key components like Document Intelligence via the shared MCP Hub.
*   **MVP:** An **SCM Agent** capable of processing a simple Purchase Order (received via email/PDF or direct input) for known items and customers within credit limits, resulting in a Sales Order created in the D365 sandbox. Focuses on the "happy path" for this specific agent's scenario. Basic error handling included. Demonstrates the agent's transactional capability, Document Intelligence integration, and a complete workflow involving multiple MCP tool calls to the shared Hub.

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
-   [ ] **MCP Hub Enhancements (for SCM Agent Use Case)**
    -   [ ] Implement MCP tools required for the PO processing scenario (e.g., `resolve_item`, `get_trade_price`, `check_credit` [basic - potentially calling a Finance tool], `create_sales_order`) within the appropriate agent directories (e.g., `src/mcp_hub/src/agents/scm_inventory/`, `src/mcp_hub/src/agents/finance_accounting/`) or `shared/`.
    -   [ ] Ensure D365 client adapters (using generated clients) for relevant modules (e.g., SCM, Finance) are available and used by the tools.
    -   [ ] Implement basic validation logic within tools.
    -   [ ] Update shared MCP Hub deployment.
-   [ ] **AI Agent Service Enhancements (for SCM Agent)**
    -   [ ] Enhance/Refine the **SCM Agent** definition.
    -   [ ] Develop Agent Flow/DAG for the end-to-end scenario within the SCM agent's flow directory (e.g., `src/agent/flows/scm_inventory/ProcessPO_MVP.yaml`).
    -   [ ] Include steps for calling document parsing results (as input/resource).
    -   [ ] Include steps for calling the new MCP tools (potentially across agent domains via the Hub) sequentially.
    -   [ ] Implement basic error handling logic within the flow (e.g., branch on credit check failure).
    -   [ ] Refine system prompts specific to the SCM Agent for the PO processing task.
    -   [ ] Update SCM Agent configuration deployment.
-   [ ] **User Interface / Channel**
    -   [ ] Ensure the chosen channel (e.g., email, Web Chat) supports initiating the flow (e.g., receiving emails, allowing file uploads or text input representing PO).
    -   [ ] Refine response handling for confirmations or error messages.
-   [ ] **Testing & Validation (Phase 2)**
    *   [ ] Refine Evaluation Strategy (add Flow evaluation metrics, E2E test scope, prompt eval - see `docs/evaluation_strategy.md`).
    *   [ ] Create test datasets for the E2E scenario (diverse inputs, edge cases).
    *   [ ] Implement Unit Tests for new MCP Hub tools.
    *   [ ] Implement Integration Tests for MCP Hub tools against D365 sandbox (verify SO creation).
    *   [ ] Configure & Run Agent Flow evaluations in AI Studio (using test datasets, check metrics like groundedness, relevance).
    *   [ ] Perform E2E scenario testing (manual or automated) for the SCM Agent's PO processing "happy path" and basic error conditions.
    *   [ ] Conduct initial prompt evaluation / red-teaming for the SCM Agent scenario.
    *   [ ] Analyze results and logs, iterate on fixes for the SCM agent and relevant Hub tools.
