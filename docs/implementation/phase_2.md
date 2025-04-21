# Phase 2: Initial End-to-End Use Case (e.g., PO Ingestion MVP)

*   **Goal:** Implement and validate a single, high-value, end-to-end business process using a **specific specialized agent** (e.g., the SCM Agent). Demonstrate transactional capabilities and integration with key components like Document Intelligence via the shared MCP Hub.
*   **MVP:** An **SCM Agent** capable of processing a simple Purchase Order (received via email/PDF or direct input) for known items and customers within credit limits, resulting in a Sales Order created in the D365 sandbox. Focuses on the "happy path" for this specific agent's scenario. Basic error handling included. Demonstrates the agent's transactional capability, Document Intelligence integration, and a complete workflow involving multiple MCP tool calls to the shared Hub.

## Task Checklist

-   [ ] **Document Processing Setup (Potentially `d365-agent-functions` repo)**
    -   [ ] Provision Azure AI Document Intelligence resource (via `d365-agent-infra`).
    -   [ ] Develop Azure Function for document parsing (Triggered by Service Bus).
    -   [ ] Configure Function to output structured JSON to another Service Bus topic/queue.
    -   [ ] Deploy Document Parsing Function (via its own CI/CD pipeline).
-   [ ] **Ingestion Flow Setup**
    -   [ ] Develop Logic App/Power Automate flow to monitor email inbox.
    -   [ ] Configure flow to save attachments to Blob Storage.
    -   [ ] Configure flow to trigger Service Bus message (input for Parsing Function).
    -   [ ] Configure Service Bus trigger for AI Agent Service (or intermediary function).
-   [ ] **MCP Hub Enhancements (`d365-agent-hub` repo) (for SCM Agent Use Case)**
    -   [ ] Implement MCP tools required for the PO processing scenario (e.g., `resolve_item`, `get_trade_price`, `check_credit` [basic - potentially calling a Finance tool], `create_sales_order`) within the appropriate directories (e.g., `src/tools/scm/`, `src/tools/finance/`).
    -   [ ] Ensure tools use the D365 client imported from the `@d365-agent/odataclient` package for relevant modules.
    -   [ ] Implement basic validation logic within tools.
    -   [ ] Update shared MCP Hub deployment via its CI/CD pipeline.
-   [ ] **AI Agent Service Enhancements (`d365-agent-service` repo) (for SCM Agent)**
    -   [ ] Enhance/Refine the **SCM Agent** definition (YAML/JSON).
    -   [ ] Develop Agent Flow/DAG for the end-to-end scenario within the SCM agent's flow directory (e.g., `flows/scm_inventory/ProcessPO_MVP.yaml`).
    -   [ ] Include steps for calling document parsing results (as input/resource).
    -   [ ] Include steps for calling the new MCP tools (potentially across agent domains via the Hub) sequentially.
    -   [ ] Implement basic error handling logic within the flow (e.g., branch on credit check failure).
    -   [ ] Refine system prompts specific to the SCM Agent for the PO processing task.
    -   [ ] Update SCM Agent configuration deployment via its mechanism/pipeline.
-   [ ] **User Interface / Channel**
    -   [ ] Ensure the chosen channel (e.g., email, Web Chat) supports initiating the flow (e.g., receiving emails, allowing file uploads or text input representing PO).
    -   [ ] Refine response handling for confirmations or error messages.
-   [ ] **Testing & Validation (Phase 2)**
    *   [ ] Refine Evaluation Strategy (add Flow evaluation metrics, E2E test scope, prompt eval - see `docs/evaluation_strategy.md` in `d365-agent`).
    *   [ ] Create test datasets for the E2E scenario (diverse inputs, edge cases) (location TBD, e.g., `d365-agent-service` or `d365-agent-tests`).
    *   [ ] Implement Unit Tests for new MCP Hub tools in `d365-agent-hub`.
    *   [ ] Implement Integration Tests for MCP Hub tools against D365 sandbox (verify SO creation) in `d365-agent-hub`.
    *   [ ] Configure & Run Agent Flow evaluations in AI Studio (using test datasets, check metrics like groundedness, relevance) for flows in `d365-agent-service`.
    *   [ ] Perform E2E scenario testing (manual or automated) for the SCM Agent's PO processing "happy path" and basic error conditions (location TBD, e.g., `d365-agent-tests`).
    *   [ ] Conduct initial prompt evaluation / red-teaming for the SCM Agent scenario (flows in `d365-agent-service`).
    *   [ ] Analyze results and logs, iterate on fixes for the SCM agent (`d365-agent-service`) and relevant Hub tools (`d365-agent-hub`).
