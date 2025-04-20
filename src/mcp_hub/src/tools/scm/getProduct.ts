import { z } from "zod"; // Import Zod
// Removed SDK type imports as they are not found/needed based on index.ts pattern

// Define the input schema shape for the GetProduct tool using Zod
export const getProductInputShape = {
  externalProductId: z.string().describe("The product ID or code used by the customer."),
  customerAccountNumber: z.string().optional().describe("The customer account number making the request (optional, for customer-specific mapping)."),
  productDescription: z.string().optional().describe("The product description provided by the customer (optional, used if ID is ambiguous).")
};

// Create a Zod object schema from the shape
const GetProductInputSchema = z.object(getProductInputShape);

// Define the inferred type from the schema
type GetProductInput = z.infer<typeof GetProductInputSchema>;

// Define the handler function for the GetProduct tool using parameter destructuring
// Add 'extra: any' to satisfy the server.tool overload signature indicated by TS errors.
// Note: The output structure needs to align with McpServer expectations (content array)
export const getProductHandler = async (
    { externalProductId, customerAccountNumber, productDescription }: GetProductInput,
    extra: any // Add 'extra' parameter with 'any' type
) => {
  // Log the received arguments
  console.log(`Executing getProduct tool with args:`, { externalProductId, customerAccountNumber, productDescription });
  // console.log("Extra:", extra); // Optionally log extra

  // Basic validation can still be useful, although Zod handles the shape
  if (typeof externalProductId !== 'string') {
      // This case should theoretically be prevented by Zod validation upstream
      console.error("Invalid argument type for externalProductId:", externalProductId);
      return {
          content: [{ type: "text", text: JSON.stringify({ error: "Internal Error: Invalid argument type for externalProductId." }, null, 2) }],
          isError: true
      };
  }

  // Destructured variables are already available

  // --- Placeholder Logic ---
  // In a real implementation, this would query a database or API (e.g., D365 F&O OData endpoint)
  // using the externalProductId, potentially filtered by customerAccountNumber,
  // or using productDescription for fuzzy matching.

  // Example placeholder response structure matching McpServer expectation:
  let responsePayload: any;
  let isError = false;

  // Simulate found case
  if (externalProductId !== "UNKNOWN_ITEM") {
    responsePayload = {
      internalProductId: "ITEM00123",
      productName: "Standard Refrigeration Unit XR-5",
      unitOfMeasure: "Each",
      found: true,
    };
  } else { // Simulate not found case
    responsePayload = {
      error: "Product not found",
      externalProductId: externalProductId,
      found: false,
    };
    // Consider if this should be flagged as a semantic error
    // For now, returning data indicates it's not a system error
    isError = false;
  }
  // --- End Placeholder Logic ---

  console.log(`GetProduct tool result payload:`, responsePayload);

  // Return content as any[] to bypass complex type check for now
  const content: any[] = [{ type: "text", text: JSON.stringify(responsePayload, null, 2) }];

  // Return data structured for McpServer
  return {
    content: content,
    isError: isError
  };
};

// Optional: Export metadata if needed separately, though server.tool takes it directly
export const getProductMetadata = {
    name: "getProduct",
    description: "Retrieves internal product details based on customer's product identifier (ID or description). Aligns external product codes/descriptions with the internal product catalogue.",
};
