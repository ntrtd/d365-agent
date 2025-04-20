import { z } from "zod"; // Import Zod
// Removed SDK type imports

// --- Input Schema ---
export const checkInventoryInputShape = {
  internalProductId: z.string().describe("The internal product ID to check inventory for."),
  quantity: z.number().positive().describe("The quantity required."),
  warehouseId: z.string().optional().describe("Specific warehouse ID to check (optional)."),
  reserveStock: z.boolean().default(false).describe("Whether to attempt to reserve the stock if available."),
  orderReference: z.string().optional().describe("Order reference if reserving stock (required if reserveStock is true).") // Conditionally required logic handled in handler
};

const CheckInventoryInputSchema = z.object(checkInventoryInputShape);
type CheckInventoryInput = z.infer<typeof CheckInventoryInputSchema>;

// --- Handler Function ---
// Add 'extra: any' to satisfy the server.tool overload signature indicated by TS errors.
export const checkInventoryHandler = async (
    { internalProductId, quantity, warehouseId, reserveStock, orderReference }: CheckInventoryInput,
    extra: any // Add 'extra' parameter with 'any' type
) => {
    console.log(`Executing checkInventory tool with args:`, { internalProductId, quantity, warehouseId, reserveStock, orderReference });
    // console.log("Extra:", extra); // Optionally log extra

    // --- Input Validation for Conditional Requirement ---
    if (reserveStock && !orderReference) {
        console.error("Validation Error: orderReference is required when reserveStock is true.");
        return {
            content: [{ type: "text", text: JSON.stringify({ error: "Validation Error: orderReference is required when reserveStock is true." }, null, 2) }],
            isError: true
        };
    }

    // --- Placeholder Logic ---
    // In a real implementation:
    // 1. Query inventory levels for internalProductId (optionally filtered by warehouseId).
    // 2. Check if available quantity >= requested quantity.
    // 3. If reserveStock is true and stock is available, attempt reservation (e.g., create inventory journal, call API).

    // Example placeholder response:
    let availableQuantity = 100; // Simulated available stock
    let reservationSuccessful = false;
    let isError = false;
    let responsePayload: any;

    // Simulate checking stock
    const hasSufficientStock = availableQuantity >= quantity;

    if (hasSufficientStock && reserveStock) {
        // Simulate reservation attempt
        console.log(`Attempting reservation for ${quantity} of ${internalProductId} for order ${orderReference}...`);
        // Assume reservation is successful for this placeholder
        reservationSuccessful = true;
        availableQuantity -= quantity; // Reduce simulated available stock
        console.log(`Reservation successful. New available quantity: ${availableQuantity}`);
    } else if (!hasSufficientStock) {
        console.log(`Insufficient stock for ${internalProductId}. Required: ${quantity}, Available: ${availableQuantity}`);
    }

    responsePayload = {
        productId: internalProductId,
        requestedQuantity: quantity,
        availableQuantity: availableQuantity, // Reflects quantity *after* potential reservation
        isAvailable: hasSufficientStock,
        reservationAttempted: reserveStock,
        reservationSuccessful: reservationSuccessful,
        warehouseChecked: warehouseId || "all", // Indicate which warehouse was checked
        ...(reservationSuccessful && { orderReference: orderReference }) // Include order ref if reserved
    };
    // --- End Placeholder Logic ---

    console.log(`CheckInventory tool result payload:`, responsePayload);

    // Return content as any[] to bypass complex type check for now
    const content: any[] = [{ type: "text", text: JSON.stringify(responsePayload, null, 2) }];

    return {
        content: content,
        isError: isError
    };
};

// --- Tool Metadata ---
export const checkInventoryMetadata = {
    name: "checkInventory",
    description: "Checks available inventory for a product and optionally reserves stock for a specific order reference.",
};
