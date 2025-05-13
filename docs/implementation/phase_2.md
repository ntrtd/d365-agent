# Phase 2: Initial End-to-End Use Case (e.g., PO Ingestion MVP)

*   **Goal:** Implement and validate initial end-to-end business processes using domain-specific LangGraph agents for **Purchase** (e.g., PO Ingestion) and **Sales** (e.g., Sales Quote Creation) within the `d365-agent-orchestrator`. This includes refining the **Master Orchestrator Agent** to route to these domain agents. Interactions occur via the `d365-agent-ui` (CopilotKit). Demonstrate transactional D365 MCP tool calls, AI document parsing, Generative UI for interaction, and predictive state updates.
*   **Orchestration Strategy:** A **Master Orchestrator LangGraph Agent** routes to **Domain-Specific LangGraph Agents** (all TypeScript) within `d365-agent-orchestrator`.
*   **MVP:**
    *   A **CopilotKit UI** (`d365-agent-ui`) connected to the `d365-agent-orchestrator`.
    *   **Master Orchestrator Agent (LangGraph in `d365-agent-orchestrator`):** Capable of basic intent recognition to route requests to either the Purchase Agent or Sales Agent.
    *   **Purchase Agent (Domain-Specific LangGraph in `d365-agent-orchestrator`):**
        *   Processes a simple Purchase Order (UI upload/external trigger).
        *   Orchestrates: Receive -> Extract (OpenAI) -> **Review Data (Generative UI)** -> Validate (D365 MCP Tools) -> Create XML -> Post to FTP/Blob.
        *   Emits **predictive state updates** during extraction and validation.
    *   **Sales Agent (Domain-Specific LangGraph in `d365-agent-orchestrator`):**
        *   Handles an initial sales process (e.g., "Sales Quote Creation").
        *   Orchestrates: Gather Requirements (interactive via chat) -> Get Customer/Product Details (D365 MCP Tools) -> Calculate Quote -> **Present Quote (Generative UI)**.
        *   Emits **predictive state updates** during D365 calls.
    *   The CopilotKit UI reflects the state and progress of the active Domain-Specific LangGraph agent via shared state and Generative UI components.
    *   Demonstrates Master Orchestrator routing, Domain-Specific Agent orchestration, AI document parsing, D365 MCP tool calls, interactive Generative UI, and predictive state updates.

## Task Checklist

-   [ ] **Document Processing (Integrated into Purchase Agent in `d365-agent-orchestrator`)**
    -   [ ] Implement logic within a LangGraph node of the Purchase Agent to handle PDF POs.
    -   [ ] This node will directly call OpenAI (or Azure OpenAI) services for structured data extraction from the PDF.
    -   [ ] Ensure secure handling of API keys for OpenAI services (e.g., via Key Vault, accessed by `d365-agent-orchestrator`).
-   [ ] **Ingestion Flow Setup (Optional - for externally triggered POs)**
    -   [ ] Develop Logic App/Power Automate flow or custom listener (Email Ingestion Service) to monitor an input channel (e.g., email inbox).
    -   [ ] Configure flow to save attachments (if any) to Blob Storage.
    -   [ ] Configure flow to trigger the Application Orchestration Layer (`d365-agent-orchestrator` via a dedicated API endpoint) to initiate PO processing in the Purchase LangGraph agent.
-   [ ] **D365 MCP Server Enhancements (Repo: [`d365-agent-mcpserver-dotnet`](https://github.com/ntrtd/d365-agent-mcpserver-dotnet))**
    -   [ ] Implement transactional MCP tools in .NET Core required for the initial E2E scenarios for both Purchase (e.g., `simulateInvoicePostToD365`, `get_vendor_details`) and Sales (e.g., `createQuote`, `getCustomerDetails`, `getProductPrice`) agents. These tools will use the `d365-agent-odataclient-dotnet`.
    -   [ ] Implement appropriate validation and error handling logic within these D365 MCP tools.
    -   [ ] Update `d365-agent-mcpserver-dotnet` deployment via its CI/CD pipeline.
-   [ ] **Application Orchestration Layer Enhancements (Repo: [`d365-agent-orchestrator`](https://github.com/ntrtd/d365-agent-orchestrator))**
    -   [ ] Set up and configure the **CopilotKit Runtime** within `d365-agent-orchestrator` to correctly serve multiple LangGraph agents via defined `langgraphAgentUrl` routes.
    -   [ ] Implement/Refine the **Master Orchestrator LangGraph Agent** to handle initial intent and route to the Purchase or Sales domain agents.
    -   [ ] Implement the **Purchase Order Processing Domain Agent (LangGraph, TypeScript)**:
        *   State machine: Receive, Extract (OpenAI), Review Data (Generative UI step), Validate D365, Create XML, Post to FTP/Blob.
        *   Integrate direct OpenAI calls for PDF parsing.
        *   Implement calls to D365 MCP tools via `d365-agent-mcpclient-ts`.
        *   Implement **predictive state updates** for key steps.
    -   [ ] Implement the **Sales Process Domain Agent (LangGraph, TypeScript)** (e.g., Sales Quote Creation):
        *   State machine: Gather Requirements, Get Customer/Product Details (D365), Calculate Quote, Present Quote (Generative UI step).
        *   Implement calls to D365 MCP tools.
        *   Implement **predictive state updates**.
    -   [ ] (Optional) Define simpler direct CopilotKit actions if any tasks don't require full LangGraph orchestration.
    -   [ ] Implement robust error handling within each LangGraph agent.
    -   [ ] Ensure agent states are structured for CopilotKit shared state and Generative UI.
    -   [ ] Deploy `d365-agent-orchestrator` updates.
-   [ ] **User Interface / Channel (CopilotKit UI in Repo: [`d365-agent-ui`](https://github.com/ntrtd/d365-agent-ui))**
    *   [ ] Develop the **CopilotKit UI** frontend in `d365-agent-ui` to:
        *   Interact with the Master Orchestrator Agent and subsequently the routed Domain-Specific Agents (Purchase, Sales).
        *   Support PO document upload.
        *   Render **Generative UI** components for PO data review and Sales Quote presentation.
        *   Display **predictive state updates** and final agent states/responses using `useCoAgent`.
        *   Handle user interactions within Generative UI components (e.g., confirmation clicks).
-   [ ] **Testing & Validation (Phase 2)**
    *   [ ] Refine Evaluation Strategy (add LangGraph orchestration flow metrics for both agent types, E2E test scope including UI interaction for both).
    *   [ ] Create test datasets for the E2E PO processing and initial Sales process scenarios. (**Location TBD, maybe `d365-agent-tests`**)
    *   [ ] Implement Unit Tests for new D365 MCP Server tools in `d365-agent-mcpserver-dotnet`.
    *   [ ] Implement Unit Tests for LangGraph agent nodes and logic for both Purchase and Sales agents, and any direct actions, within the Application Orchestration Layer (`d365-agent-orchestrator`).
    *   [ ] Implement Integration Tests for D365 MCP Server tools against D365 sandbox.
    *   [ ] Perform E2E scenario testing (manual or automated) for the "happy path" and basic error conditions, triggering via the CopilotKit UI and external triggers. (**Location TBD, maybe `d365-agent-tests`**)
    *   [ ] Analyze results and logs, iterate on fixes for the LangGraph agent, D365 MCP Server tools, and CopilotKit UI.
