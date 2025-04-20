import { z } from "zod"; // Import Zod

// --- Input Schema ---
// Represents a single line item for the sales order
const salesOrderLineInputShape = z.object({
    internalProductId: z.string().describe("Internal product ID."),
    quantity: z.number().positive().describe("Quantity ordered."),
    unitPrice: z.number().nonnegative().describe("Unit price for the item."),
    // Add other relevant line details like unit of measure if needed
});

export const createSalesOrderInputShape = {
    customerAccountNumber: z.string().describe("Customer account number."),
    // Include other header info like shipping address, requested delivery date etc.
    purchaseOrderNumber: z.string().optional().describe("Customer's purchase order number (for reference)."),
    lines: z.array(salesOrderLineInputShape).min(1).describe("Array of sales order lines."),
    inventoryReservationReference: z.string().optional().describe("Reference ID if inventory was pre-reserved.")
};

const CreateSalesOrderInputSchema = z.object(createSalesOrderInputShape);
type CreateSalesOrderInput = z.infer<typeof CreateSalesOrderInputSchema>;

// --- Handler Function ---
// Add 'extra: any' to satisfy the server.tool overload signature indicated by TS errors.
export const createSalesOrderHandler = async (
    { customerAccountNumber, purchaseOrderNumber, lines, inventoryReservationReference }: CreateSalesOrderInput,
    extra: any // Add 'extra' parameter with 'any' type
) => {
    console.log(`Executing createSalesOrder tool with args:`, { customerAccountNumber, purchaseOrderNumber, lines, inventoryReservationReference });
    // console.log("Extra:", extra); // Optionally log extra

    // --- Placeholder Logic ---
    // In a real implementation:
    // 1. Connect to D365 F&O (or other ERP).
    // 2. Create Sales Order Header using customerAccountNumber, purchaseOrderNumber etc.
    // 3. Create Sales Order Lines using the lines array.
    // 4. Link inventory reservation if inventoryReservationReference is provided.
    // 5. Handle potential errors during creation.
    // 6. Return the created Sales Order ID and status.

    // Example placeholder response:
    let salesOrderId = `SO-${Math.floor(Math.random() * 90000) + 10000}`; // Generate a fake SO ID
    let isError = false;
    let responsePayload: any;

    console.log(`Simulating creation of Sales Order for customer ${customerAccountNumber}...`);

    // Simulate success
    responsePayload = {
        salesOrderId: salesOrderId,
        status: "Created",
        customerAccountNumber: customerAccountNumber,
        purchaseOrderNumber: purchaseOrderNumber,
        numberOfLines: lines.length,
        message: `Sales Order ${salesOrderId} created successfully.`
    };
    console.log(`Sales Order ${salesOrderId} simulation complete.`);
    // --- End Placeholder Logic ---

    // Return content as any[] to bypass complex type check for now
    const content: any[] = [{ type: "text", text: JSON.stringify(responsePayload, null, 2) }];

    return {
        content: content,
        isError: isError
    };
};

// --- Tool Metadata ---
export const createSalesOrderMetadata = {
    name: "createSalesOrder",
    description: "Creates a new Sales Order in the ERP system based on customer and line item details.",
};
