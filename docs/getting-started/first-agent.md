# Your First Agent (Quick Tutorial)

This tutorial provides a high-level overview of creating a basic agent interaction using the Dynamics 365 AI Agent architecture, which combines a CopilotKit UI, a LangGraph-based orchestrator, and an MCP Server for D365 connectivity.

Refer to the [Implementation Plan](../implementation/index.md) for detailed phase-by-phase setup. This guide outlines the conceptual steps.

## 1. Set Up the Core Components

Ensure the foundational pieces are in place as per Phase 1 of the implementation plan:

*   **D365 MCP Server (`d365-agent-mcpserver-dotnet`):**
    *   Set up and run the .NET Core MCP Server.
    *   Define at least one simple read-only MCP tool (e.g., `getEnvironmentDetails` that returns some basic D365 environment info), which uses the `d365-agent-odataclient-dotnet`.
*   **Application Orchestration Layer (`d365-agent-orchestrator`):**
    *   Set up the Node.js/TypeScript project for `d365-agent-orchestrator`.
    *   Install `@copilotkit/runtime`, LangGraph (TypeScript), and `d365-agent-mcpclient-ts` dependencies.
    *   Configure the CopilotKit Runtime.
    *   Implement a very simple LangGraph agent (e.g., `BasicInfoAgent`) or a direct CopilotKit action.
        *   This agent/action will use `d365-agent-mcpclient-ts` to call the `getEnvironmentDetails` tool on your `d365-agent-mcpserver-dotnet`.
    *   Expose an endpoint for the CopilotKit UI to connect to (e.g., a Next.js API route).
*   **User Interface (`d365-agent-ui`):**
    *   Set up the React project.
    *   Install `@copilotkit/react-ui` and `@copilotkit/react-core`.
    *   Configure the `<CopilotKit>` provider to point to your `d365-agent-orchestrator`'s CopilotKit Runtime endpoint.
    *   Add a basic chat component like `<CopilotChat />`.

## 2. Defining a Simple Interaction in the LangGraph Agent

Within your `d365-agent-orchestrator`, your `BasicInfoAgent` (LangGraph) might have a simple flow:

*   **Input:** User asks "What D365 environment is this?"
*   **LangGraph Node 1 (Call D365 MCP Tool):**
    *   Uses `d365-agent-mcpclient-ts`.
    *   Calls the `getEnvironmentDetails` tool on the `d365-agent-mcpserver-ts`.
*   **LangGraph Node 2 (Format Response):**
    *   Takes the result from the MCP tool.
    *   Formats a user-friendly string.
*   **Output:** The formatted string is sent back to the CopilotKit UI.

**Conceptual Code Snippet (Illustrative - within LangGraph agent node in `d365-agent-orchestrator`):**
```typescript
// This is highly conceptual and depends on your LangGraph setup or CopilotKit action setup
// and how you integrate the d365-agent-mcpclient-ts.

import { McpClient } from "@d365-agent/mcpclient-ts"; // Ensure this is the correct import path for your MCP client

async function getD365EnvironmentInfoLogic() { // Can be part of a LangGraph node or a CopilotKit action handler
  // mcpClient would be initialized and configured to point to the d365-agent-mcpserver-dotnet endpoint
  const mcpClient = new McpClient({ baseUrl: "http://localhost:YOUR_DOTNET_MCP_SERVER_PORT" }); // Example
  
  try {
    const response = await mcpClient.executeTool("getEnvironmentDetails", {});
    // Assuming the tool returns content like { type: "text", text: "Environment: XYZ" }
    const envInfo = response.content.find(c => c.type === 'text')?.text || "Could not retrieve environment details.";
    return envInfo; // Or update state in LangGraph
  } catch (error) {
    console.error("Error calling MCP tool:", error);
    return "Error fetching environment details."; // Or update state in LangGraph
  }
}
```

## 3. Running Your System

1.  Start your D365 MCP Server (`d365-agent-mcpserver-dotnet`).
2.  Start your Application Orchestration Layer (`d365-agent-orchestrator`).
3.  Start your CopilotKit UI (`d365-agent-ui`).

## 4. Interacting with the Agent

*   Open your CopilotKit UI (`d365-agent-ui`) in the browser.
*   In the chat interface, type a message that your LangGraph agent or CopilotKit action in `d365-agent-orchestrator` is designed to handle, for example: "Tell me about the D365 environment."
*   The orchestrator should process this, use `d365-agent-mcpclient-ts` to call the `getEnvironmentDetails` tool on the `d365-agent-mcpserver-dotnet`, and return the information to the UI.

This provides a basic end-to-end flow from the UI, through the orchestrator using LangGraph, to the D365 MCP Server, and back. More complex scenarios involving the PO processing state machine would build upon these foundational integrations.
