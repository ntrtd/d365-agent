# Scenario 6: End-to-End Cut-to-Size (CTS) Order Processing

This scenario outlines how the Dynamics 365 AI Agent system can manage the complex Cut-to-Size (CTS) order process, from initial customer inquiry through to post-sales support. It leverages the CopilotKit UI, a LangGraph agent for orchestration, direct OpenAI calls for document parsing, and the D365 MCP Server for Dynamics 365 interactions.

*   **User Roles:** Customer, Salesperson/Customer Service Representative (CSR), Production Planner, Saw Operator, Finance/Admin.
*   **UI Channel:** CopilotKit UI (`d365-agent-ui`), with capabilities for file uploads and real-time state display. External triggers like email can also initiate the process.
*   **Orchestrator:** A dedicated "CTSOrderAgent" (LangGraph agent) within the `d365-agent-orchestrator`.
*   **D365 Interaction:** Via `d365-agent-mcpclient-ts` calling tools on `d365-agent-mcpserver-dotnet`.

## Overall LangGraph State Machine for CTS Order

The CTSOrderAgent (LangGraph) will manage the following high-level phases/states:

1.  **Inquiry & Specification Gathering (Phase A)**
2.  **Quoting & Pricing (Phase B)**
3.  **Order Entry & Confirmation (Phase B/C)**
4.  **Production & Cutting Instruction (Phase C)**
5.  **Cutting Operation & Offcut Management (Phase D)**
6.  **Fulfillment & Delivery (Phase E)**
7.  **Invoicing & Costing (Phase F)**
8.  **Post-Sales Support (Phase G)**

---

### Phase A: Inquiry & Specification Gathering

*   **Trigger:**
    *   User (Customer/CSR) initiates via CopilotKit UI: "I need a quote for some cut acrylic sheets."
    *   Or, an external Email Ingestion Service detects an email inquiry and triggers the LangGraph agent via an API call to `d365-agent-orchestrator`.
*   **LangGraph Agent Actions:**
    1.  **Collect Specifications:**
        *   If via UI, the agent interactively prompts for: parent material type, thickness/diameter, list of desired cut dimensions (length x width or length), quantities for each. Allows PDF/drawing upload.
        *   If via email, these details are extracted from the email body/attachments (potentially using an initial OpenAI call if the email content is unstructured).
        *   **MCP Tool Calls:**
            *   `getCustomerDetails`: (If existing customer) Fetch customer info, contracts, sales history from D365.
            *   `createProspect`: (If new customer) Guide user to create a prospect record in D365.
            *   `getParentMaterialInfo`: Identify D365 item code for parent material.
            *   `checkStockAvailability`: Check on-hand inventory of parent material across relevant sites/warehouses.
            *   `getContractualPricing`: Check for applicable sales/trade agreements for the customer/material.
    2.  **Preliminary Feasibility & Yield Estimation:**
        *   The agent uses an LLM (OpenAI) with the provided cut list and parent material dimensions to perform a preliminary yield estimation and feasibility check.
        *   For complex cuts, it might flag for manual review or suggest consultation with production.
        *   **UI Update:** "Initial check: Cuts seem feasible. Estimated X parent sheets needed."
*   **State Update:** `current_step: "AwaitingQuoting"`, `po_details: {...}`, `feasibility_notes: "..."`

### Phase B: Quoting / Pricing

*   **LangGraph Agent Actions:**
    1.  **Material Cost Calculation:**
        *   Uses parent material quantity from yield estimation.
        *   **MCP Tool Call:** `getParentMaterialCost` (fetches cost from D365, considering agreements).
        *   Calculates total material cost, including a configurable wastage factor if not fully covered by yield.
    2.  **Cutting Charge Calculation:**
        *   Applies cutting charges based on rules (e.g., per cut, per meter, setup fee). These rules can be configured or potentially LLM-assisted based on complexity.
        *   The Vink-specific "Cut to Size Type" (CTS1/CTS2) logic from FDD G029 could be modeled here if applicable, potentially requiring specific MCP tools like `calculateCTS2Price`.
    3.  **Consolidate & Apply Margin:**
        *   Sums material and cutting costs.
        *   **MCP Tool Call:** `getApplicableDiscounts` (checks sales/trade agreements for customer/item specific discounts).
        *   Applies profit margin to determine selling price.
    4.  **Generate Quote:**
        *   Formats a quote (potentially as structured JSON for Generative UI in CopilotKit, or a PDF).
        *   **UI Update:** Displays the quote to the user for review/approval. "Here's your quote: Total Price $Y. [View Details]". Generative UI can show line items.
*   **State Update:** `current_step: "QuotePresented"`, `quote_details: {...}`

### Phase B/C: Order Entry & Confirmation

*   **Trigger:** User approves the quote in the CopilotKit UI.
*   **LangGraph Agent Actions:**
    1.  **Create Sales Order in D365:**
        *   **MCP Tool Call:** `createSalesOrderCTS` (a new tool that handles creating SO with CTS line details as per FDD G029, including cut dimensions, quantities, agreed prices, and linking to parent material if needed).
        *   The tool should handle different AX CTS setup options (generic cut item, specific output items, or module-driven logic).
    2.  **Internal Validation (Simplified):**
        *   The agent might perform basic checks or flag for planner review if order complexity exceeds certain thresholds.
    3.  **Generate & Send Order Confirmation:**
        *   **MCP Tool Call:** `generateSalesOrderConfirmationDocument` (retrieves the standard AX confirmation).
        *   **UI Update/Action:** Displays confirmation in UI. "Order [SO_NUMBER] confirmed. We'll notify you about delivery."
        *   (Optional) Sends email confirmation to customer.
*   **State Update:** `current_step: "OrderConfirmed"`, `sales_order_id: "..."`

### Phase C (cont.): Production/Cutting Instruction

*   **LangGraph Agent Actions:**
    1.  **Cutting Optimization (Nesting):**
        *   Gathers all cut pieces for the confirmed sales order.
        *   **LLM Call (OpenAI):** For simpler nesting, provide cut list and parent material dimensions to an LLM to generate an optimized cutting pattern.
        *   For complex scenarios or if external software (Ardis/Magicut) is preferred and an API exists, an MCP tool `optimizeCuttingLayout` could be called.
        *   The optimized pattern (list of cuts from parent sheets) is stored.
    2.  **Create Production/Work Instructions:**
        *   **MCP Tool Call (if AX Production used):** `createProductionOrderForCTS` (links to SO, sets BOM with parent material based on optimized yield, sets route for cutting).
        *   Generates a digital "cutting job sheet" (JSON or structured text) containing the optimized patterns and material details. This can be displayed in the CopilotKit UI for a shop floor view or sent to a shop floor system.
*   **State Update:** `current_step: "ReadyForCutting"`, `cutting_instructions: {...}`, `production_order_id: "..."` (if applicable).

### Phase D: Cutting Operation & Offcut Management

*   **Trigger:** Production reports start of cutting (could be manual UI input by planner/operator, or future shop floor system integration).
*   **LangGraph Agent Actions:**
    1.  **Material Issuance:**
        *   **MCP Tool Call:** `issueMaterialToProduction` (consumes parent material against the AX Production Order or Sales Order).
        *   **UI Update:** "Parent material issued for cutting."
    2.  **Cutting Execution Monitoring (Conceptual):**
        *   The UI could allow operators to update status (e.g., "Cutting in Progress", "Cutting Complete").
    3.  **Offcut Reporting & Management:**
        *   After cutting, operator inputs usable offcut dimensions and quantities via CopilotKit UI (potentially a simplified interface for shop floor).
        *   **LangGraph Node Logic:**
            *   Receives offcut data.
            *   **MCP Tool Call:** `registerOffcutInD365` (uses Vink-specific FDD G029 logic like "Cut2 Return" or creates/updates offcut inventory records in AX with dimensions and parent material traceability). This tool needs to be robust.
        *   **UI Update:** "Offcuts reported: [details]."
    4.  **Report Production of Cut Pieces:**
        *   Operator confirms quantities of each cut piece produced via UI.
        *   **MCP Tool Call:** `reportProductionAsFinishedCTS` (reports finished cut pieces against AX Production Order, or updates Sales Order picking status).
*   **State Update:** `current_step: "CuttingComplete"`, `produced_pieces: {...}`, `offcuts_logged: [...]`.

### Phase E: Fulfillment (Post-Cutting), Delivery & Tracking

*   **LangGraph Agent Actions:**
    1.  **Packing Information:**
        *   Agent prompts for packing details if needed, or uses defaults.
        *   **UI Update:** "Order ready for packing."
    2.  **Shipping Documentation & Dispatch:**
        *   **MCP Tool Call:** `generatePackingSlipCTS` (generates AX Packing Slip, ensuring cut dimensions are included as per FDD G029).
        *   Agent displays packing slip info/link in UI for logistics.
        *   Once dispatched (confirmed via UI or external system event):
        *   **MCP Tool Call:** `postPackingSlip`.
    3.  **Customer Delivery Communication & Tracking:**
        *   Agent provides tracking number (if available from an integrated carrier MCP tool or manual input) to customer via UI or email.
        *   **UI Update:** "Order [SO_NUMBER] shipped. Tracking: [TRACKING_INFO]."
*   **State Update:** `current_step: "Shipped"`, `packing_slip_id: "..."`, `tracking_number: "..."`.

### Phase F: Invoicing, Payment & Costing

*   **LangGraph Agent Actions:**
    1.  **Invoicing:**
        *   Triggered automatically after packing slip posting or by user command.
        *   **MCP Tool Call:** `generateSalesInvoiceCTS` (generates AX Sales Invoice, ensuring accuracy with CTS details and pricing).
        *   **UI Update:** "Invoice [INV_NUMBER] generated for Order [SO_NUMBER]." (Provides link/details).
    2.  **Payment Monitoring (Conceptual):**
        *   Agent could periodically check payment status via an MCP tool `getInvoicePaymentStatus`.
    3.  **Cost Analysis Support:**
        *   **MCP Tool Calls:**
            *   `getProductionOrderActualCosts` (if production orders used).
            *   `getSalesOrderCOGSDetails` (for Cut2 variance, etc.).
        *   Agent can retrieve actual costs and compare them against the initial quote's estimated costs.
        *   **UI Update (for internal users):** "Cost analysis for SO [SO_NUMBER]: Quoted Cost: $X, Actual Cost: $Y, Variance: $Z."
*   **State Update:** `current_step: "Invoiced"`, `invoice_id: "..."`, `cost_analysis_summary: {...}`.

### Phase G: Post-Sales (Returns, Quality Issues, Support)

*   **LangGraph Agent Actions (triggered by user inquiry in UI):**
    1.  **Handling Returns/RMAs:**
        *   User requests return via CopilotKit UI.
        *   Agent guides user through return reasons, item details.
        *   **MCP Tool Call:** `createReturnOrderCTS` (handles specific logic for CTS items, potentially setting return cost to zero as per FDD G029).
        *   Agent tracks RMA status via further MCP tool calls (`getRMAStatus`) and updates UI.
    2.  **Addressing Quality/Dimension Issues:**
        *   User reports issue via UI.
        *   Agent logs issue, gathers details (photos, measurements).
        *   **MCP Tool Calls:** `getOriginalOrderSpecs`, `getCuttingInstructions`.
        *   Agent can facilitate investigation, potentially routing to a human quality manager.
        *   Tracks resolution (rework, remake, credit) via state updates.
*   **State Update:** `current_step: "ReturnProcessing" / "QualityIssueReported"`, `rma_id: "..."`, `issue_details: {...}`.

---
**Key Concepts for this Scenario:**
*   **Conversational Interface (CopilotKit):** For all user interactions, from inquiry to post-sales.
*   **Stateful Orchestration (LangGraph):** Manages the entire multi-phase CTS lifecycle.
*   **Shared State (`useCoAgentState`):** Provides real-time visibility of the CTS order progress in the UI.
*   **Generative UI (CopilotKit):** Used to display complex information like quotes, cutting patterns, or lists of offcuts within the chat.
*   **Direct AI Integration (OpenAI):** LangGraph agent directly calls OpenAI for PDF data extraction.
*   **Modular D365 Tools (D365 MCP Server):** All D365 interactions are via well-defined MCP tools, called by the LangGraph agent using `d365-agent-mcpclient-ts`.
*   **Containerized Services:** The UI, Orchestrator, and D365 MCP Server are all containerized.
*   **Human-in-the-Loop:** Can be incorporated at various stages (e.g., quote approval, offcut validation, quality issue resolution) by designing LangGraph states that wait for UI input via shared state updates.

This scenario demonstrates a comprehensive application of the D365 AI Agent architecture to a complex, value-added manufacturing process.

---
## Automation Potential with D365 AI Agent

The proposed AI agent architecture (CopilotKit UI, LangGraph Orchestrator, .NET D365 MCP Server) offers significant potential for automating the Cut-to-Size (CTS) order process. Many of the current `MANUAL` or `MANUAL/AX2012` steps involve information lookup, data entry, calculations, document generation, and communication, which are well-suited for automation by the agent system.

**Phase-by-Phase Automation Potential:**

*   **Phase A (Inquiry & Spec Gathering): High Potential**
    *   Agent can receive inquiries via UI/email, parse specifications (using OpenAI for unstructured data), log details, create/update D365 prospect/customer records, perform stock checks, and retrieve contract pricing via D365 MCP tools. Preliminary feasibility/yield can be LLM-assisted.

*   **Phase B (Quoting & Order Entry): High Potential**
    *   Agent can automate material cost calculation (using D365 data via MCP tools) and cutting charge calculation (based on configured rules or LLM estimation).
    *   Consolidate costs, check D365 contracts/trade agreements for pricing, and apply margins.
    *   Generate quotes (display in UI, or create PDF) and handle revisions.
    *   Upon UI approval, automatically create Sales Orders in D365 with accurate CTS details via MCP tools.

*   **Phase C (Order Confirmation & Production Instruction): High Potential**
    *   Agent can trigger D365 Order Confirmations, create/update D365 Production Orders, integrate with (or use LLM for basic) cutting optimization, and generate digital cutting instructions.

*   **Phase D (Cutting Operation & Offcut Management): Medium to High Potential (for system interactions)**
    *   Agent can automate D365 transactions for material issuance and reporting finished goods based on shop floor UI input.
    *   Crucially, it can significantly improve offcut management by allowing easy data capture via UI and systematic registration in D365 via MCP tools. Physical cutting remains manual.

*   **Phase E (Fulfillment & Delivery): Medium to High Potential**
    *   Agent can trigger D365 Packing Slip generation (with accurate CTS details) via MCP tools.
    *   Automate posting of packing slips.
    *   Provide automated delivery notifications and tracking information to customers (if data is available from D365 or integrated carrier systems).
    *   Physical packing and complex carrier scheduling may have manual elements.

*   **Phase F (Invoicing & Costing): High Potential (for analysis), Medium (for triggers)**
    *   Agent can trigger D365 invoice generation via MCP tools.
    *   Automate collection of actual cost data from D365 (production orders, COGS) via MCP tools.
    *   Automatically compare actual costs to quoted costs and present an analysis in the UI.

*   **Phase G (Post-Sales): Medium to High Potential**
    *   Agent can guide users through submitting return requests or quality issues via UI.
    *   Automate RMA creation in D365 via MCP tools.
    *   Provide status updates on returns/issues by querying D365.
    *   Assist in investigations by fetching relevant order/production data.

**Overall Estimate:**
It's estimated that **60-75% of the overall effort in the information-processing and system-interaction aspects** of the CTS order lifecycle could be automated or significantly streamlined.

**Key Benefits of Automation:**
*   Reduced manual data entry and re-keying.
*   Faster information retrieval and processing times.
*   Improved accuracy in calculations and data handling.
*   Enhanced process consistency and tracking through LangGraph orchestration.
*   Better visibility and management of critical areas like offcuts and costing.
*   Improved user experience for both customers and internal staff via the CopilotKit interface.

The actual level of automation will depend on the sophistication of the LangGraph agents, the comprehensiveness of D365 MCP tools, and the quality of data integrations.
