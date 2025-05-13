# Implementing Scenarios

This section provides illustrative scenarios demonstrating how the Dynamics 365 AI Agent system can assist various users with Dynamics 365 related tasks.

The examples assume a **CopilotKit UI** (from `d365-agent-ui`) interacts with the **Application Orchestration Layer** (repo: [`d365-agent-orchestrator`](https://github.com/ntrtd/d365-agent-orchestrator)). This layer hosts the **CopilotKit Runtime** and uses **LangGraph** to define specific agents (e.g., Purchase Agent, Sales Agent) that orchestrate workflows. These LangGraph agents use the **D365 MCP Client Library** ([`d365-agent-mcpclient-ts`](https://github.com/ntrtd/d365-agent-mcpclient-ts) or [`d365-agent-mcpclient-dotnet`](https://github.com/ntrtd/d365-agent-mcpclient-dotnet)) to interact with a deployed **D365 MCP Server** ([`d365-agent-mcpserver-ts`](https://github.com/ntrtd/d365-agent-mcpserver-ts) or [`d365-agent-mcpserver-dotnet`](https://github.com/ntrtd/d365-agent-mcpserver-dotnet)) via MCP tool calls.

## Scenario 1: External Customer - Purchase Order Submission via Email/UI

*   **User:** Customer Procurement Agent (External)
*   **UI Channel:** CopilotKit UI (`d365-agent-ui`) for direct upload, or an Email Ingestion Service for email submissions.
*   **Orchestrator:** Purchase Agent (LangGraph) within `d365-agent-orchestrator`.
*   **Interaction Flow (Email Triggered):**
    1.  Customer emails a PDF purchase order.
    2.  **(Integration):** An Email Ingestion Service (e.g., Logic App, custom service) ingests the email, stores the PDF (e.g., Blob Storage).
    3.  The Email Ingestion Service calls a dedicated API endpoint on `d365-agent-orchestrator` to initiate the PO processing LangGraph agent.
    4.  **Orchestration Logic (Purchase Agent - LangGraph in `d365-agent-orchestrator`):** Executes the PO Processing state machine:
        *   **Receive:** Gets PDF reference.
        *   **Extraction:** Calls the **Containerized Document Parsing Service** (which uses OpenAI) to get structured PO data.
        *   **Test Posting Invoice (OData D365):** Calls `simulateInvoicePostToD365` MCP tool on `d365-agent-mcpserver-*` (via `d365-agent-mcpclient-*`).
        *   **Create XML:** Generates invoice XML.
        *   **Post to FTP/Blob:** Uploads XML for D365 async ingestion.
    5.  **Application Orchestration Layer:** Sends confirmation/error email back to the customer (or updates status for UI if initiated there).
*   **Interaction Flow (UI Upload):**
    1.  User uploads PDF PO via CopilotKit UI (`d365-agent-ui`).
    2.  UI sends file/command to CopilotKit Runtime in `d365-agent-orchestrator`.
    3.  CopilotKit Runtime invokes the Purchase Agent LangGraph.
    4.  LangGraph agent executes the same PO Processing state machine as above.
    5.  Status updates are streamed back to the CopilotKit UI via shared state.
*   **Key Concepts:** Headless integration (email), interactive UI (CopilotKit), document processing via containerized service, multi-step stateful orchestration with LangGraph, D365 MCP tool calls for validation.

## Scenario 2: Internal Sales Rep - Quick Credit Check via CopilotKit UI

*   **User:** Internal Sales Representative
*   **UI Channel:** CopilotKit UI (`d365-agent-ui`)
*   **Orchestrator:** Sales Agent (LangGraph) within `d365-agent-orchestrator`.
*   **Interaction Flow:**
    1.  Sales Rep asks in CopilotKit UI: "Credit status for Contoso (USMF)?"
    2.  **Application Orchestration Layer (`d365-agent-orchestrator`):** CopilotKit Runtime routes to Sales Agent LangGraph.
    3.  **Orchestration Logic (Sales Agent - LangGraph):** Initiates `CheckCredit` workflow/node.
        *   Calls `Get_Customer_Remaining_Credit` D365 MCP tool on `d365-agent-mcpserver-*` (via `d365-agent-mcpclient-*`) with customer/company.
    4.  Receives credit info from D365 MCP Server.
    5.  **Application Orchestration Layer:** Formats response and streams it back to the CopilotKit UI.
*   **Key Concepts:** Conversational UI (CopilotKit), LangGraph orchestration, read-only D365 MCP tool.

## Scenario 3: Internal Purchaser - Convert Approved Requisition to PO via CopilotKit UI

*   **User:** Internal Purchaser
*   **UI Channel:** CopilotKit UI (`d365-agent-ui`)
*   **Orchestrator:** Purchase Agent (LangGraph) within `d365-agent-orchestrator`.
*   **Interaction Flow:**
    1.  Purchaser asks in CopilotKit UI: "Create POs for my approved reqs in FR01."
    2.  **Application Orchestration Layer (`d365-agent-orchestrator`):** CopilotKit Runtime routes to Purchase Agent LangGraph.
    3.  **Orchestration Logic (Purchase Agent - LangGraph):** Initiates `RequisitionToPO` workflow.
        *   Calls `Get_Open_Requisitions` D365 MCP tool.
        *   (Optional) Calls vendor selection/assignment D365 MCP tools if needed.
        *   Calls `Create_Purchase_Orders_from_Requisitions` D365 MCP tool.
    4.  Receives confirmation/errors from D365 MCP Server.
    5.  **Application Orchestration Layer:** Formats response and streams it back to CopilotKit UI.
*   **Key Concepts:** Conversational UI (CopilotKit), multi-step LangGraph orchestration, potentially conditional logic, transactional D365 MCP tools.

## Scenario 4: External Vendor - Invoice Status Inquiry via CopilotKit UI (Portal)

*   **User:** Vendor Accounts Receivable Clerk (External)
*   **UI Channel:** A supplier portal built with CopilotKit UI (`d365-agent-ui`).
*   **Orchestrator:** A specific LangGraph agent for vendor inquiries within `d365-agent-orchestrator`.
*   **Interaction Flow:**
    1.  Vendor asks in portal chat: "Status of invoice INV-98765?"
    2.  **Application Orchestration Layer (`d365-agent-orchestrator`):** Authenticates vendor, CopilotKit Runtime routes to Vendor Inquiry LangGraph agent.
    3.  **Orchestration Logic (Vendor Inquiry LangGraph):** Initiates `InvoiceStatus` workflow.
        *   Calls `Get_Invoice_Status` D365 MCP tool.
    4.  Receives status from D365 MCP Server.
    5.  **Application Orchestration Layer:** Formats response and streams back to CopilotKit UI.
*   **Key Concepts:** Authenticated external user interaction via CopilotKit, simple LangGraph orchestration, read-only D365 MCP tool.

## Scenario 5: Internal Technician - Request Asset Maintenance via Voice (CopilotKit UI)

*   **User:** Field Service Technician (Internal)
*   **UI Channel:** CopilotKit UI (`d365-agent-ui`) with voice input capabilities.
*   **Orchestrator:** Asset Management Agent (LangGraph) within `d365-agent-orchestrator`.
*   **Interaction Flow:**
    1.  Technician speaks into CopilotKit UI: "Need maintenance for ASSET-007 at Contoso, error E5."
    2.  **(UI `d365-agent-ui`):** Captures audio, sends to Speech-to-Text service (e.g., Azure Cognitive Services, or browser-native). Transcribed text sent to CopilotKit Runtime.
    3.  **Application Orchestration Layer (`d365-agent-orchestrator`):** CopilotKit Runtime routes to Asset Management LangGraph agent.
    4.  **Orchestration Logic (Asset Management LangGraph):** Initiates `CreateMaintenanceWorkOrder` workflow.
        *   Calls `get_asset_details` D365 MCP tool.
        *   Calls `find_available_resources` D365 MCP tool.
        *   Calls `create_asset_management_work_order` / `create_field_service_work_order` D365 MCP tools.
    5.  Receives confirmation from D365 MCP Server.
    6.  **Application Orchestration Layer:** Formats text response.
    7.  **(UI `d365-agent-ui`):** Receives text response, uses Text-to-Speech service (e.g., Azure Cognitive Services, or browser-native) to play audio response.
*   **Key Concepts:** Voice channel integration via CopilotKit UI, Speech-to-Text/Text-to-Speech, multi-step LangGraph orchestration, transactional D365 MCP tools.

These scenarios demonstrate the flexibility of the architecture in handling diverse users, channels (primarily CopilotKit UI), and business processes through LangGraph orchestration and standardized D365 MCP tool integration.
