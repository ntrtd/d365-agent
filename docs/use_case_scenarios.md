# Use Case Scenarios: Dynamics 365 AI Agent

This document provides illustrative scenarios demonstrating how the AI Agent could assist various users (internal employees and external partners/customers) with Dynamics 365 related tasks, leveraging the defined architecture and MCP capabilities.

## Scenario 1: External Customer - Purchase Order Submission via Email

*   **User:** Customer Procurement Agent (External)
*   **Channel:** Email
*   **Interaction:**
    1.  Customer emails a PDF purchase order for several items, some using their internal part numbers, to a designated company email address.
    2.  **Agent (Backend):** Logic App ingests the email, saves the PDF to Blob Storage, triggers the Document Parsing Function.
    3.  **Agent (Backend):** Function uses Document Intelligence to extract PO details (customer, items, quantities, requested dates).
    4.  **Agent (Backend):** Agent Service receives parsed data, initiates the `SCM_ProcessPO` flow.
    5.  **Agent Flow:**
        *   Calls `getProduct` tool (via MCP Hub) for each line item, mapping customer product identifiers to internal D365 item IDs. Handles potential ambiguities.
        *   Calls `checkInventory` tool to check availability for the required quantity, potentially reserving stock and returning a reservation reference.
        *   (Optional/Future) Apply static/dynamic rules (e.g., unit conversion, max order quantity).
        *   Calls `check_credit` tool (Finance module interaction - placeholder) to verify customer credit status.
        *   *If all checks pass:* Calls `createSalesOrder` tool, providing customer details, line items (with pricing potentially determined pre-call or during SO creation in D365), and the inventory reservation reference.
        *   *If credit check fails:* Initiates an internal notification flow or replies to the customer.
        *   *After successful SO creation:* Calls `generateOrderFulfilment` tool to release the order for picking/packing.
        *   *After shipment (logic triggered externally or by another agent):* Calls `generateInvoice` tool to create and post the customer invoice.
    6.  **Agent:** Sends an email confirmation back to the customer with the Sales Order number, estimated ship dates, and later potentially the invoice (or details on issues encountered).
*   **D365 Modules Involved:** SCM (Items, Inventory, Sales Orders, Warehouse Fulfilment, Invoicing), Finance (Customers, Credit).

## Scenario 2: Internal Sales Rep - Quick Credit Check via Teams

*   **User:** Internal Sales Representative
*   **Channel:** Microsoft Teams Chat
*   **Interaction:**
    1.  Sales Rep asks the agent via Teams chat: "What's the current remaining credit for Contoso (USMF)?"
    2.  **Agent:** Recognizes the intent, identifies the customer ("Contoso") and company ("USMF").
    3.  **Agent:** Initiates a simple `Finance_CheckCredit` flow (or directly calls the relevant tool).
    4.  **Agent Flow:** Calls `Get_Customer_Remaining_Credit` tool (Microsoft-provided or custom via MCP Hub) with customer ID and company.
    5.  **Agent:** Receives the credit information (limit, balance, remaining) from the MCP Hub.
    6.  **Agent:** Responds directly in the Teams chat: "Contoso (USMF) has a credit limit of €50,000 with €35,000 currently available."
*   **D365 Modules Involved:** Finance (Customer Credit).

## Scenario 3: Internal Purchaser - Convert Approved Requisition to PO via Chat

*   **User:** Internal Purchaser
*   **Channel:** Web Chat Interface
*   **Interaction:**
    1.  Purchaser asks the agent: "Create purchase orders for all approved requisitions in company FR01 assigned to me."
    2.  **Agent:** Recognizes intent, identifies company, and implicitly the user context.
    3.  **Agent:** Initiates `SCM_RequisitionToPO` flow.
    4.  **Agent Flow:**
        *   Calls `Get_Open_Requisitions` tool (Microsoft-provided), filtering by user and status 'Approved' for company 'FR01'.
        *   *For each requisition line without a vendor:* Calls `Get_Approved_Vendors_for_Products` tool. If multiple vendors exist, may present options to the user or use default logic. Calls `Assign_Suppliers_to_Req_Lines` tool.
        *   Calls `Create_Purchase_Orders_from_Requisitions` tool (Microsoft-provided), passing the prepared requisition data.
    5.  **Agent:** Receives confirmation (list of PO numbers created or errors).
    6.  **Agent:** Responds in chat: "Successfully created POs: PO-00123, PO-00124. Requisition Req-0056 had an issue assigning a vendor for item X."
*   **D365 Modules Involved:** SCM (Requisitions, Purchase Orders, Vendors, Items).

## Scenario 4: External Vendor - Invoice Status Inquiry via Web Portal Chat

*   **User:** Vendor Accounts Receivable Clerk (External)
*   **Channel:** Supplier Portal with embedded Web Chat
*   **Interaction:**
    1.  Vendor logs into the portal, opens chat, and asks: "What's the status of my invoice INV-98765?"
    2.  **Agent:** Authenticates vendor via portal context. Recognizes intent and invoice number.
    3.  **Agent:** Initiates `Finance_InvoiceStatus` flow.
    4.  **Agent Flow:** Calls `Get_Invoice_Status` tool (custom or potentially using `Get_Unmatched_Invoices` / `Get_Customer_Payment_History` depending on implementation) via MCP Hub, passing vendor context and invoice number.
    5.  **Agent:** Receives status (e.g., "Received, Pending Approval", "Approved, Payment Scheduled for 2025-05-15", "Paid on 2025-04-10").
    6.  **Agent:** Responds in chat with the clear status information.
*   **D365 Modules Involved:** Finance (Vendor Invoices, Payments).

## Scenario 5: Internal Technician - Request Asset Maintenance via Voice

*   **User:** Field Service Technician (Internal)
*   **Channel:** Voice Call (via ACS integrated with Agent Service)
*   **Interaction:**
    1.  Technician calls a dedicated number: "This is Technician 123. Asset ID ASSET-007 at customer site Contoso is showing error code E5. Need to schedule corrective maintenance."
    2.  **Agent (Backend):** ACS transcribes speech to text. Agent Service receives the text.
    3.  **Agent:** Recognizes intent, extracts Technician ID, Asset ID, Site/Customer, and error details.
    4.  **Agent:** Initiates `AssetMgmt_CreateWorkOrder` flow.
    5.  **Agent Flow:**
        *   Calls `get_asset_details` tool to confirm asset validity and location.
        *   Calls `find_available_resources` tool (potentially via Dataverse/Field Service client in MCP Hub) to check technician schedules.
        *   Calls `create_asset_management_work_order` tool (via MCP Hub hitting FO Asset Management) and potentially `create_field_service_work_order` (via MCP Hub hitting Dataverse/FS) to create linked work orders.
    6.  **Agent:** Receives confirmation (Work Order numbers).
    7.  **Agent (Backend):** Converts confirmation text to speech via Azure Cognitive Speech.
    8.  **Agent:** Responds via voice: "Okay, Technician 123. I've created Asset Management Work Order AM-WO-098 and Field Service Work Order FS-WO-101 for Asset ASSET-007 at Contoso regarding error E5. It's tentatively scheduled based on resource availability."
*   **D365 Modules Involved:** Asset Management (Assets, Work Orders), potentially Field Service/Dataverse (Work Orders, Scheduling).

These scenarios illustrate the versatility of the AI agent in handling diverse tasks across different user types, channels, and Dynamics 365 modules, enabled by the underlying modular architecture and MCP integration.
