// Note: Adjust import paths if necessary based on submodule setup and tsconfig resolution.
// Using '@modelcontextprotocol/sdk' assumes it's correctly linked or mapped.
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod"; // Import Zod
import { getD365AuthToken, getD365Url } from "./core/auth"; // Import auth functions
// Import the generated client later: import { ODataClient } from "./core/generated/odata";

async function startServer() {
  console.log("Starting D365 MCP Hub (TypeScript)...");

  // Create an MCP server instance
  const server = new McpServer({
    name: "d365-mcp-hub-ts",
    version: "1.0.0",
    description: "MCP Hub providing access to Dynamics 365 data and actions.",
  });

  // --- Placeholder for OData Client Initialization ---
  // (Omitted for brevity)

  // --- Tool Definition ---
  // Define schema shape directly for the tool method
  const getCustomerInputShape = {
    customerName: z.string().describe("The exact name of the customer to search for."),
    company: z.string().optional().describe("The company code (e.g., USMF, FR01). Optional for Phase 1."),
  };

  // Add the 'get_customer_by_name' tool
  server.tool(
    "get_customer_by_name",   // Tool ID
    getCustomerInputShape,    // Input schema shape (ZodRawShape)
    // Corrected Callback Signature: Rely on SDK inference for args type
    async ({ customerName, company }) => { // Removed RequestHandlerExtra and z.infer typing
      console.log(`Tool 'get_customer_by_name' called with args:`, { customerName, company });

      try {
        // --- Integration Steps ---
        const d365BaseUrl = await getD365Url();
        console.log(`Simulating OData call to ${d365BaseUrl} for customer: ${customerName}`);

        // --- Placeholder Logic & OData Call Simulation ---
        // (Omitted for brevity - same placeholder logic as before)
        let customerData: any = null;
        // Use inferred args directly. Add checks if needed.
        if (typeof customerName === 'string' && customerName.toLowerCase() === "contoso") {
           customerData = {
                customerId: "CUST-001-SIMULATED",
                name: "Contoso Ltd.",
                address: "123 Main St (Simulated)",
                creditLimit: 50000,
                company: typeof company === 'string' ? company : "USMF", // Use inferred arg
              };
        }
        // --- End Placeholder ---

        if (customerData) {
          console.log("Customer data found (Simulated).");
          // Return JSON as a string within a "text" content block
          return {
            content: [{ type: "text", text: JSON.stringify(customerData, null, 2) }]
          };
        } else {
          console.log("Customer not found (Simulated).");
          const errorResult = { error: "Customer not found", customerName: customerName };
          return {
            content: [{ type: "text", text: JSON.stringify(errorResult, null, 2) }],
            isError: true // Use isError flag for semantic errors
          };
        }

      } catch (error: any) {
        console.error(`Error executing get_customer_by_name: ${error.message}`);
        const errorResult = { error: `Failed to retrieve customer: ${error.message}` };
        // Return a structured error to the MCP client
        return {
          content: [{ type: "text", text: JSON.stringify(errorResult, null, 2) }],
          isError: true // Use isError flag
        };
      }
    }
  );

  // Add more tools here later...

  // --- Start Server ---
  try {
    // Connect using STDIO transport for local/desktop usage initially
    const transport = new StdioServerTransport();
    await server.connect(transport);
    console.log("MCP Hub connected via STDIO.");

  } catch (error) {
    console.error("Failed to start or connect MCP server:", error);
    process.exit(1);
  }
}

startServer();
