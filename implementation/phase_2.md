# Phase 2: Initial End-to-End Use Case (e.g., PO Ingestion MVP)

*   **Goal:** Implement and validate initial end-to-end business processes for both **Purchase** and **Sales** agents using the **Application Orchestration Layer** (repo: [`d365-agent-orchestrator`](https://github.com/ntrtd/d365-agent-orchestrator)). This TypeScript/Node.js layer will host the CopilotKit Runtime and distinct LangGraph agents (TypeScript) for purchasing (e.g., PO Ingestion) and sales (e.g., Sales Quote Creation). These agents will use the `d365-agent-mcpclient-ts` library. Interaction will occur through the **CopilotKit UI** frontend (repo: [`d365-agent-ui`](https://github.com/ntrtd/d365-agent-ui)). Demonstrate transactional capabilities by having the LangGraph agents call tools on the **D365 MCP Server (`d365-agent-mcpserver-dotnet`)** and integrate with AI services like OpenAI for document parsing.
*   **Orchestration Strategy:** All E2E flows will use **LangGraph (TypeScript)** for orchestration within the Application Orchestration Layer (`d365-agent-orchestrator`).
*   **MVP:**
    *   A **CopilotKit UI** (from `d365-agent-ui`) connected to the **Application Orchestration Layer** (`d365-agent-orchestrator`).
    *   **Purchase Agent (LangGraph in `d365-agent-orchestrator`):** Capable of processing a simple Purchase Order (received via UI upload or external trigger). Orchestrates the PO processing state machine (Receive -> Extract with OpenAI -> Test Post D365 -> Create XML -> Post to FTP/Blob). This involves:
        *   Directly calling **OpenAI services** for PDF data extraction within a LangGraph node.
        *   Using `d365-agent-mcpclient-ts` to call D365 MCP tools (e.g., `simulateInvoicePostToD365`) on the `d365-agent-mcpserver-dotnet`.
        *   Generating XML and posting to FTP/Blob.
    *   **Sales Agent (LangGraph in `d365-agent-orchestrator`):** Capable of handling an initial sales process, e.g., "Sales Quote Creation" or "Sales Order Inquiry". This involves:
        *   Using `d365-agent-mcpclient-ts` to call D365 MCP tools (e.g., `createQuote`, `getCustomerDetails`, `getProductPrice`) on the `d365-agent-mcpserver-dotnet`.
    *   The CopilotKit UI reflects the state and progress of both LangGraph agents via shared state mechanisms, potentially with distinct UI views or contexts for Sales and Purchasing.
    *   Demonstrates LangGraph orchestration for multiple agent types, direct calls to AI services for parsing, D365 MCP tool calls (TS client to .NET server), and UI interaction via CopilotKit.

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
    -   [ ] Set up and configure the **CopilotKit Runtime** (Node.js/TypeScript) within `d365-agent-orchestrator` to support multiple LangGraph agents and simpler direct actions.
    -   [ ] Implement the **Purchase Order Processing LangGraph agent (TypeScript)**, defining its state machine (Receive, Extract via OpenAI, Validate D365, Create XML, Post to FTP/Blob).
    -   [ ] Implement an initial **Sales Process LangGraph agent (TypeScript)** (e.g., for Sales Quote Creation or Sales Order Inquiry).
    -   [ ] Nodes in both LangGraph agents should:
        *   Handle inputs (e.g., from UI upload/commands via CopilotKit, or from external trigger API for POs).
        *   For POs, directly call OpenAI services for document parsing.
        *   Use the `d365-agent-mcpclient-ts` library to call the relevant D365 MCP tools on the deployed `d365-agent-mcpserver-dotnet`.
        *   Contain logic for specific tasks (e.g., XML generation for POs).
    -   [ ] Define simpler CopilotKit actions within the orchestrator for direct D365 queries/operations that bypass LangGraph, using `d365-agent-mcpclient-ts` to call the `d365-agent-mcpserver-dotnet`.
    -   [ ] Implement robust error handling within each LangGraph agent and direct action.
    -   [ ] Ensure each LangGraph agent's state is structured for CopilotKit's shared state mechanism.
    -   [ ] Deploy `d365-agent-orchestrator` updates.
-   [ ] **User Interface / Channel (CopilotKit UI in Repo: [`d365-agent-ui`](https://github.com/ntrtd/d365-agent-ui))**
    *   [ ] Develop the **CopilotKit UI** frontend in `d365-agent-ui` to:
        *   Provide distinct interaction contexts or views for the Purchase Agent and Sales Agent if necessary.
        *   Allow users to upload PO documents (for Purchase Agent).
        *   Initiate processes for both agent types (and simpler direct actions) via chat commands.
        *   Display the state and progress of the active LangGraph agent (from `d365-agent-orchestrator`) using shared state (e.g., `useCoAgentState`).
        *   Handle responses, confirmations, and errors from the LangGraph agents and direct actions.
-   [ ] **Testing & Validation (Phase 2)**
    *   [ ] Refine Evaluation Strategy (add LangGraph orchestration flow metrics for both agent types, E2E test scope including UI interaction for both).
    *   [ ] Create test datasets for the E2E PO processing and initial Sales process scenarios. (**Location TBD, maybe `d365-agent-tests`**)
    *   [ ] Implement Unit Tests for new D365 MCP Server tools in `d365-agent-mcpserver-dotnet`.
    *   [ ] Implement Unit Tests for LangGraph agent nodes and logic for both Purchase and Sales agents, and any direct actions, within the Application Orchestration Layer (`d365-agent-orchestrator`).
    *   [ ] Implement Integration Tests for D365 MCP Server tools against D365 sandbox.
    *   [ ] Perform E2E scenario testing (manual or automated) for the "happy path" and basic error conditions, triggering via the CopilotKit UI and external triggers. (**Location TBD, maybe `d365-agent-tests`**)
    *   [ ] Analyze results and logs, iterate on fixes for the LangGraph agent, D365 MCP Server tools, and CopilotKit UI.
