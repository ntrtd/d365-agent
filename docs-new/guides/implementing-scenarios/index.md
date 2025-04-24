# Implementing Scenarios

This section provides illustrative scenarios demonstrating how the Dynamics 365 AI Agent system can assist various users with Dynamics 365 related tasks.

The examples assume an Application Backend uses the appropriate Client Library ([`d365-agent-mcpclient-ts`](https://github.com/ntrtd/d365-agent-mcpclient-ts) or [`d365-agent-mcpclient-dotnet`](https://github.com/ntrtd/d365-agent-mcpclient-dotnet)) to orchestrate workflows (using AutoGen, DAGs, or other methods) and interacts with a deployed MCP Server ([`d365-agent-mcpserver-ts`](https://github.com/ntrtd/d365-agent-mcpserver-ts) or [`d365-agent-mcpserver-dotnet`](https://github.com/ntrtd/d365-agent-mcpserver-dotnet)) via MCP tool calls.

## Scenario 1: External Customer - Purchase Order Submission via Email

*   **User:** Customer Procurement Agent (External)
*   **Orchestrator:** Email Processing Backend (using the appropriate `d365-agent-mcpclient-*` library)
*   **Channel:** Email
*   **Interaction Flow:**
    1.  Customer emails a PDF purchase order.
    2.  **(Integration):** Logic App/Function ingests email, stores PDF (Blob Storage), triggers parsing.
    3.  **(Integration):** Azure Function uses Document Intelligence to extract PO details, puts result on Service Bus.
    4.  **(Backend):** Email Processing Backend receives the Service Bus message.
    5.  **Orchestration Logic (Client Library - AutoGen/DAG):** Executes `ProcessPO` workflow:
        *   Calls `getProduct` MCP tool (via `d365-agent-mcpserver-*`) to map item identifiers.
        *   Calls `checkInventory` MCP tool.
        *   Calls `check_credit` MCP tool.
        *   If checks pass: Calls `createSalesOrder` MCP tool.
        *   If checks fail: Handle error/notify.
        *   (Optional Subsequent Steps): Calls `generateOrderFulfilment`, `generateInvoice` MCP tools.
    6.  **Application Backend:** Sends confirmation/error email back to the customer.
*   **Key Concepts:** Headless integration, document processing, multi-step orchestration, transactional MCP tools (read/write).

## Scenario 2: Internal Sales Rep - Quick Credit Check via Teams

*   **User:** Internal Sales Representative
*   **Orchestrator:** Teams Bot Backend (using the appropriate `d365-agent-mcpclient-*` library)
*   **Channel:** Microsoft Teams Chat
*   **Interaction Flow:**
    1.  Sales Rep asks bot: "Credit status for Contoso (USMF)?"
    2.  **(Backend):** Teams Bot Backend receives message, parses intent/entities.
    3.  **Orchestration Logic (Client Library - AutoGen/DAG):** Initiates `CheckCredit` workflow.
    4.  Calls `Get_Customer_Remaining_Credit` MCP tool (via `d365-agent-mcpserver-*`) with customer/company.
    5.  Receives credit info from MCP Server.
    6.  **Application Backend:** Formats response and sends back to Teams chat.
*   **Key Concepts:** Conversational UI (Bot Framework), simple orchestration, read-only MCP tool.

## Scenario 3: Internal Purchaser - Convert Approved Requisition to PO via Chat

*   **User:** Internal Purchaser
*   **Orchestrator:** Web Chat Backend (using the appropriate `d365-agent-mcpclient-*` library)
*   **Channel:** Web Chat Interface
*   **Interaction Flow:**
    1.  Purchaser asks: "Create POs for my approved reqs in FR01."
    2.  **(Backend):** Web Chat Backend receives message, parses intent/entities.
    3.  **Orchestration Logic (Client Library - AutoGen/DAG):** Initiates `RequisitionToPO` workflow.
    4.  Calls `Get_Open_Requisitions` MCP tool (via `d365-agent-mcpserver-*`).
    5.  (Optional) Calls vendor selection/assignment MCP tools if needed.
    6.  Calls `Create_Purchase_Orders_from_Requisitions` MCP tool.
    7.  Receives confirmation/errors from MCP Server.
    8.  **Application Backend:** Formats response and sends back to chat.
*   **Key Concepts:** Conversational UI, multi-step orchestration, potentially conditional logic, transactional MCP tools.

## Scenario 4: External Vendor - Invoice Status Inquiry via Web Portal Chat

*   **User:** Vendor Accounts Receivable Clerk (External)
*   **Orchestrator:** Supplier Portal Backend (using the appropriate `d365-agent-mcpclient-*` library)
*   **Channel:** Supplier Portal Web Chat
*   **Interaction Flow:**
    1.  Vendor asks chat: "Status of invoice INV-98765?"
    2.  **(Backend):** Portal Backend authenticates vendor, receives message, parses intent.
    3.  **Orchestration Logic (Client Library - AutoGen/DAG):** Initiates `InvoiceStatus` workflow.
    4.  Calls `Get_Invoice_Status` MCP tool (via `d365-agent-mcpserver-*`).
    5.  Receives status from MCP Server.
    6.  **Application Backend:** Formats response and sends back to chat.
*   **Key Concepts:** Authenticated external user interaction, simple orchestration, read-only MCP tool.

## Scenario 5: Internal Technician - Request Asset Maintenance via Voice

*   **User:** Field Service Technician (Internal)
*   **Orchestrator:** Voice Gateway Backend (using the appropriate `d365-agent-mcpclient-*` library)
*   **Channel:** Voice Call (via Azure Communication Services - ACS)
*   **Interaction Flow:**
    1.  Technician calls: "Need maintenance for ASSET-007 at Contoso, error E5."
    2.  **(Integration):** ACS transcribes speech to text, sends to Voice Gateway Backend.
    3.  **(Backend):** Backend uses Client Library to parse intent/entities.
    4.  **Orchestration Logic (Client Library - AutoGen/DAG):** Initiates `CreateMaintenanceWorkOrder` workflow.
    5.  Calls `get_asset_details` MCP tool (via `d365-agent-mcpserver-*`).
    6.  Calls `find_available_resources` MCP tool.
    7.  Calls `create_asset_management_work_order` / `create_field_service_work_order` MCP tools.
    8.  Receives confirmation from MCP Server.
    9.  **(Backend):** Formats text response, uses Azure Cognitive Speech TTS.
    10. **Application Backend:** Responds via voice channel.
*   **Key Concepts:** Voice channel integration, speech-to-text, text-to-speech, multi-step orchestration, transactional MCP tools.

These scenarios demonstrate the flexibility of the architecture in handling diverse users, channels, and business processes through a standardized MCP integration pattern.
