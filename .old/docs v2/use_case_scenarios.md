# Use Case Scenarios: Dynamics 365 Orchestrated Interaction

This document provides illustrative scenarios demonstrating how the system could assist various users (internal employees and external partners/customers) with Dynamics 365 related tasks, leveraging the defined architecture (Application Backend + Client Library + MCP Server) and MCP capabilities. The examples assume an Application Backend uses the appropriate Client Library ([`d365-agent-mcpclient-ts`](https://github.com/ntrtd/d365-agent-mcpclient-ts) or [`d365-agent-mcpclient-dotnet`](https://github.com/ntrtd/d365-agent-mcpclient-dotnet)) to interact with a deployed MCP Server ([`d365-agent-mcpserver-ts`](https://github.com/ntrtd/d365-agent-mcpserver-ts) or [`d365-agent-mcpserver-dotnet`](https://github.com/ntrtd/d365-agent-mcpserver-dotnet)).

## Scenario 1: External Customer - Purchase Order Submission via Email

*   **User:** Customer Procurement Agent (External)
*   **Orchestrator:** Email Processing Backend (using the appropriate `d365-agent-mcpclient-*` library)
*   **Channel:** Email
*   **Interaction:**
    1.  Customer emails a PDF purchase order for several items, some using their internal part numbers, to a designated company email address.
    2.  **(Integration):** Logic App ingests the email, saves the PDF to Blob Storage, triggers the Document Parsing Function.
    3.  **(Integration):** Function uses Document Intelligence to extract PO details (customer, items, quantities, requested dates), puts result on Service Bus.
    4.  **(Backend):** The **Email Processing Backend** is triggered by the Service Bus message and uses the **appropriate `d365-agent-mcpclient-*` library**.
    5.  **Orchestration Logic (within Client Library - AutoGen or DAG):** Executes the `ProcessPO` workflow:
        *   Calls `getProduct` MCP tool (via the deployed `d365-agent-mcpserver-*` instance) for each line item, mapping customer product identifiers to internal D365 item IDs. Handles potential ambiguities.
        *   Calls `checkInventory` MCP tool to check availability for the required quantity, potentially reserving stock and returning a reservation reference.
        *   (Optional/Future) Apply static/dynamic rules (e.g., unit conversion, max order quantity).
        *   Calls `check_credit` MCP tool (potentially interacting with Finance logic via the MCP Server) to verify customer credit status.
        *   *If all checks pass:* Calls `createSalesOrder` MCP tool, providing customer details, line items (with pricing potentially determined pre-call or during SO creation in D365), and the inventory reservation reference.
        *   *If credit check fails:* Initiates an internal notification or formulates an email reply.
        *   *After successful SO creation:* Calls `generateOrderFulfilment` MCP tool to release the order for picking/packing.
        *   *After shipment (logic triggered externally or potentially via another workflow):* Calls `generateInvoice` MCP tool to create and post the customer invoice.
    6.  **Application Backend:** Sends an email confirmation back to the customer with the Sales Order number, estimated ship dates, and later potentially the invoice (or details on issues encountered).
*   **Potentially Involved Logic:** SCM Workflow Logic, Finance Workflow Logic (within Client Library / App Backend).
*   **D365 Modules Involved:** SCM (Items, Inventory, Sales Orders, Warehouse Fulfilment), Finance (Customers, Credit, Invoicing).

## Scenario 2: Internal Sales Rep - Quick Credit Check via Teams

*   **User:** Internal Sales Representative
*   **Orchestrator:** Teams Bot Backend (using the appropriate `d365-agent-mcpclient-*` library)
*   **Channel:** Microsoft Teams Chat
*   **Interaction:**
    1.  Sales Rep asks the bot via Teams chat: "What's the current remaining credit for Contoso (USMF)?"
    2.  **(Backend):** The **Teams Bot Backend** receives the message, uses the **appropriate `d365-agent-mcpclient-*` library** to potentially parse intent (or uses simple command matching) and identify customer/company.
    3.  **Orchestration Logic (within Client Library - AutoGen or DAG):** Initiates a simple `CheckCredit` workflow.
    4.  **Workflow:** Calls `Get_Customer_Remaining_Credit` MCP tool via the deployed `d365-agent-mcpserver-*` instance with customer ID and company.
    5.  **Orchestration Logic:** Receives the credit information (limit, balance, remaining) from the MCP Server response.
    6.  **Application Backend:** Formats the response and sends it back to the Teams chat: "Contoso (USMF) has a credit limit of €50,000 with €35,000 currently available."
*   **Potentially Involved Logic:** Finance Workflow Logic (within Client Library / App Backend).
*   **D365 Modules Involved:** Finance (Customer Credit).

## Scenario 3: Internal Purchaser - Convert Approved Requisition to PO via Chat

*   **User:** Internal Purchaser
*   **Orchestrator:** Web Chat Backend (using the appropriate `d365-agent-mcpclient-*` library)
*   **Channel:** Web Chat Interface
*   **Interaction:**
    1.  Purchaser asks the chat interface: "Create purchase orders for all approved requisitions in company FR01 assigned to me."
    2.  **(Backend):** The **Web Chat Backend** receives the message, uses the **appropriate `d365-agent-mcpclient-*` library** to parse intent, identify company, and user context.
    3.  **Orchestration Logic (within Client Library - AutoGen or DAG):** Initiates `RequisitionToPO` workflow.
    4.  **Workflow:**
        *   Calls `Get_Open_Requisitions` MCP tool via the deployed `d365-agent-mcpserver-*` instance, filtering by user and status 'Approved' for company 'FR01'.
        *   *For each requisition line without a vendor:* Calls `Get_Approved_Vendors_for_Products` MCP tool. If multiple vendors exist, orchestration logic might present options to the user via the backend or use default logic. Calls `Assign_Suppliers_to_Req_Lines` MCP tool.
        *   Calls `Create_Purchase_Orders_from_Requisitions` MCP tool via the deployed `d365-agent-mcpserver-*` instance, passing the prepared requisition data.
    5.  **Orchestration Logic:** Receives confirmation (list of PO numbers created or errors) from the MCP Server response.
    6.  **Application Backend:** Formats the response and sends it back to the chat interface: "Successfully created POs: PO-00123, PO-00124. Requisition Req-0056 had an issue assigning a vendor for item X."
*   **Potentially Involved Logic:** Procurement Workflow Logic (within Client Library / App Backend).
*   **D365 Modules Involved:** SCM/Procurement (Requisitions, Purchase Orders, Vendors, Items).

## Scenario 4: External Vendor - Invoice Status Inquiry via Web Portal Chat

*   **User:** Vendor Accounts Receivable Clerk (External)
*   **Orchestrator:** Supplier Portal Backend (using the appropriate `d365-agent-mcpclient-*` library)
*   **Channel:** Supplier Portal with embedded Web Chat
*   **Interaction:**
    1.  Vendor logs into the portal, opens chat, and asks: "What's the status of my invoice INV-98765?"
    2.  **(Backend):** The **Portal Backend** authenticates the vendor, receives the message, uses the **appropriate `d365-agent-mcpclient-*` library** to parse intent.
    3.  **Orchestration Logic (within Client Library - AutoGen or DAG):** Initiates `InvoiceStatus` workflow.
    4.  **Workflow:** Calls `Get_Invoice_Status` MCP tool via the deployed `d365-agent-mcpserver-*` instance, passing vendor context and invoice number.
    5.  **Orchestration Logic:** Receives status (e.g., "Received, Pending Approval", "Approved, Payment Scheduled for 2025-05-15", "Paid on 2025-04-10") from the MCP Server response.
    6.  **Application Backend:** Formats the response and sends it back to the portal chat interface.
*   **Potentially Involved Logic:** Finance Workflow Logic (within Client Library / App Backend).
*   **D365 Modules Involved:** Finance (Vendor Invoices, Payments).

## Scenario 5: Internal Technician - Request Asset Maintenance via Voice

*   **User:** Field Service Technician (Internal)
*   **Orchestrator:** Voice Gateway Backend (using the appropriate `d365-agent-mcpclient-*` library)
*   **Channel:** Voice Call (via ACS integrated with Backend)
*   **Interaction:**
    1.  Technician calls a dedicated number: "This is Technician 123. Asset ID ASSET-007 at customer site Contoso is showing error code E5. Need to schedule corrective maintenance."
    2.  **(Integration):** ACS transcribes speech to text, sends to the **Voice Gateway Backend**.
    3.  **(Backend):** The Backend uses the **appropriate `d365-agent-mcpclient-*` library** to parse intent and extract details.
    4.  **Orchestration Logic (within Client Library - AutoGen or DAG):** Initiates `CreateMaintenanceWorkOrder` workflow.
    5.  **Workflow:**
        *   Calls `get_asset_details` MCP tool via the deployed `d365-agent-mcpserver-*` instance to confirm asset validity and location.
        *   Calls `find_available_resources` MCP tool (potentially interacting with Dataverse/Field Service via the MCP Server) to check technician schedules.
        *   Calls `create_asset_management_work_order` MCP tool (via the deployed `d365-agent-mcpserver-*` instance) and potentially `create_field_service_work_order` MCP tool to create linked work orders.
    6.  **Orchestration Logic:** Receives confirmation (Work Order numbers) from the MCP Server response.
    7.  **(Backend):** Formats the confirmation text and uses Azure Cognitive Speech (via the Backend) to convert it to speech.
    8.  **Application Backend:** Responds via voice channel: "Okay, Technician 123. I've created Asset Management Work Order AM-WO-098 and Field Service Work Order FS-WO-101 for Asset ASSET-007 at Contoso regarding error E5. It's tentatively scheduled based on resource availability."
*   **Potentially Involved Logic:** Field Service/Asset Management Workflow Logic (within Client Library / App Backend).
*   **D365 Modules Involved:** Asset Management (Assets, Work Orders), Field Service/Dataverse (Work Orders, Scheduling).

These scenarios illustrate how different Application Backends, using the appropriate `d365-agent-mcpclient-*` library, can orchestrate diverse tasks across various user types and channels, leveraging a common deployed MCP Server (`d365-agent-mcpserver-*`) for standardized integration with Dynamics 365 modules, regardless of the underlying implementation languages of the client and server.
