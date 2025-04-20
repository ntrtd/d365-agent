import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";

// Import the finance tool components using the SAP SDK client
import { getCustomerByNameInputShape, getCustomerByNameHandler, getCustomerByNameMetadata } from "./tools/finance/getCustomerByName";

// Import other tool components as needed (e.g., for SCM, Sales) later
// import { ... } from "./tools/scm/someScmTool";

async function startServer() {
  console.log("Starting D365 MCP Hub (TypeScript)...");

  // Create an MCP server instance
  const server = new McpServer({
    name: "d365-mcp-hub-ts",
    version: "1.0.0",
    description: "MCP Hub providing access to Dynamics 365 data and actions via SAP Cloud SDK client.",
  });

  // --- Tool Registration ---

  // Register the 'get_customer_by_name' tool
  // Note: The input schema passed to server.tool should be the ZodRawShape (.shape), not the ZodObject itself.
  server.tool(
    getCustomerByNameMetadata.name,      // Tool ID from metadata
    getCustomerByNameInputShape.shape,   // Input Zod schema shape
    getCustomerByNameHandler             // Handler function
  );

  // Register other tools here in later phases...
  // server.tool( ... );

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
