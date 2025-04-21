/**
 * Main entry point for the AI Agent Service.
 * This service orchestrates interactions between users and specialized agents,
 * managing conversation state, interpreting requests, executing agent flows (DAGs),
 * and communicating with the MCP Hub.
 */
import * as dotenv from 'dotenv';
import { McpClient, StreamableHTTPClientTransport } from '@modelcontextprotocol/sdk';

// Load environment variables from .env file
dotenv.config();

console.log("Initializing AI Agent Service...");

// --- Configuration ---
const mcpHubUrl = process.env.MCP_HUB_URL;
const logLevel = process.env.LOG_LEVEL || 'info';

if (!mcpHubUrl) {
    console.error("ERROR: MCP_HUB_URL environment variable is not set.");
    console.log("Please create a .env file based on .env.example");
    process.exit(1);
}

console.log(`Configuration loaded:`);
console.log(`- MCP Hub URL: ${mcpHubUrl}`);
console.log(`- Log Level: ${logLevel}`);
// --------------------

// TODO: Implement AI Agent Service core logic
// - Load configuration
// - Initialize connection to MCP Hub
// - Set up API endpoints or message queue listeners for incoming requests
// - Implement request interpretation and agent flow execution
// - Manage conversation state

async function main() {
  console.log('AI Agent Service starting...');

  // Initialize MCP Client
  console.log(`Attempting to connect to MCP Hub at ${mcpHubUrl}...`);
  const transport = new StreamableHTTPClientTransport({
    url: mcpHubUrl,
    // Future: Add necessary headers or authentication options here
  });
  const mcpClient = new McpClient({ transport });

  try {
    // Initialize connection and fetch server capabilities
    const capabilities = await mcpClient.initialize();
    console.log('Successfully connected to MCP Hub.');
    console.log('MCP Hub Capabilities:', JSON.stringify(capabilities, null, 2));

    // TODO: Store/use capabilities (available tools, resources, prompts)
    // TODO: Implement the actual agent logic (listening for requests, executing flows)

    console.log('AI Agent Service ready and connected.');

    // Keep the service running (basic example, replace with actual server/listener logic)
    // For example, if this were an Express server: app.listen(port, () => console.log(...));
    // Or if listening to a message queue: queueClient.subscribe(...);
    // For now, just prevent immediate exit:
    await new Promise(resolve => setTimeout(resolve, 3600 * 1000)); // Keep alive for 1 hour for testing

  } catch (error) {
    console.error('Failed to initialize MCP Client or connection error:', error);
    process.exit(1); // Exit if connection fails
  }
}

main().catch((error) => {
  console.error("Failed to start AI Agent Service:", error);
  process.exit(1);
});
