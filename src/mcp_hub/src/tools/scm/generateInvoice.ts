import { z } from "zod"; // Import Zod

// --- Input Schema ---
export const generateInvoiceInputShape = {
    salesOrderId: z.string().describe("The ID of the Sales Order to invoice."),
    shipmentId: z.string().optional().describe("Specific Shipment ID to invoice (if applicable, e.g., for partial shipments)."),
    // Add other options like invoice date, specific lines to invoice, etc. if needed
};

const GenerateInvoiceInputSchema = z.object(generateInvoiceInputShape);
type GenerateInvoiceInput = z.infer<typeof GenerateInvoiceInputSchema>;

// --- Handler Function ---
// Add 'extra: any' to satisfy the server.tool overload signature indicated by TS errors.
export const generateInvoiceHandler = async (
    { salesOrderId, shipmentId }: GenerateInvoiceInput,
    extra: any // Add 'extra' parameter with 'any' type
) => {
    console.log(`Executing generateInvoice tool with args:`, { salesOrderId, shipmentId });
    // console.log("Extra:", extra); // Optionally log extra

    // --- Placeholder Logic ---
    // In a real implementation:
    // 1. Connect to D365 F&O (or other ERP/Finance system).
    // 2. Find the Sales Order/Shipment using salesOrderId/shipmentId.
    // 3. Trigger the invoice generation process (posting the packing slip/shipment and generating the invoice).
    // 4. Handle potential errors (e.g., order not shipped, credit issues).
    // 5. Return the generated Invoice ID and status.

    // Example placeholder response:
    let invoiceId = `INV-${salesOrderId}-${Math.floor(Math.random() * 9000) + 1000}`; // Fake invoice ID
    let isError = false;
    let responsePayload: any;

    console.log(`Simulating generation of invoice for Sales Order ${salesOrderId}...`);

    // Simulate success
    responsePayload = {
        invoiceId: invoiceId,
        salesOrderId: salesOrderId,
        shipmentId: shipmentId || "N/A",
        status: "Posted",
        message: `Invoice ${invoiceId} generated and posted for Sales Order ${salesOrderId}.`
    };
    console.log(`Invoice simulation for ${salesOrderId} complete.`);
    // --- End Placeholder Logic ---

    // Return content as any[] to bypass complex type check for now
    const content: any[] = [{ type: "text", text: JSON.stringify(responsePayload, null, 2) }];

    return {
        content: content,
        isError: isError
    };
};

// --- Tool Metadata ---
export const generateInvoiceMetadata = {
    name: "generateInvoice",
    description: "Generates and posts an invoice for a completed Sales Order or Shipment.",
};
