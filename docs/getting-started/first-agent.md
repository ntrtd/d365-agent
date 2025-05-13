# Your First Agent: A Basic D365 Inquiry

This tutorial guides you through creating a very simple agent interaction using the Dynamics 365 AI Agent architecture. We'll build a `BasicD365InfoAgent` that can fetch and display basic environment details from Dynamics 365.

This assumes you have followed the [Prerequisites](./prerequisites.md) and [Installation Guide](./installation.md) to set up your development environment and the core components.

## 1. Define a Simple D365 MCP Tool

In your `d365-agent-mcpserver-dotnet` project:
1.  Define a new MCP tool, for example, `GetEnvironmentName`.
2.  Implement this tool to retrieve a basic piece of information from D365, like the environment name or version.
    ```csharp
    // Example Tool in d365-agent-mcpserver-dotnet
    public class GetEnvironmentNameTool : IMcpTool
    {
        public string Name => "GetEnvironmentName";
        public string Description => "Gets the name of the current D365 F&O environment.";
        // Define parameters if any (none for this simple example)
        // public List<McpToolParameter> Parameters => new List<McpToolParameter>();
    
        public async Task<McpToolResult> ExecuteAsync(McpToolExecutionContext context, Dictionary<string, object> parameters)
        {
            // In a real scenario, you'd use the D365 OData client here
            // For simplicity, we'll return a hardcoded value
            string environmentName = "D365 Production Environment (USMF)"; // Replace with actual D365 call
            
            return new McpToolResult
            {
                Content = new List<McpContent>
                {
                    new McpTextContent { Text = $"Environment Name: {environmentName}" }
                }
            };
        }
    }
    ```
3.  Ensure this tool is registered with your MCP Server.
4.  Run your `d365-agent-mcpserver-dotnet` service.

## 2. Create a Simple LangGraph Agent (`BasicD365InfoAgent`)

In your `d365-agent-orchestrator` project (TypeScript):

1.  **Define State:**
    ```typescript
    // src/agents/basicInfoAgent/state.ts
    import { CopilotKitStateAnnotation } from "@copilotkit/sdk-js/langgraph"; // Assuming this or similar exists
    import { Annotation }  from "@langchain/langgraph"; // Placeholder, actual import might vary

    export const BasicInfoAgentStateSchema = Annotation.Root({
      userInput: Annotation<string>(),
      environmentName: Annotation<string | null>(),
      errorMessage: Annotation<string | null>(),
      ...CopilotKitStateAnnotation.spec, // For CopilotKit shared state
    });
    export type BasicInfoAgentState = typeof BasicInfoAgentStateSchema.State;
    ```

2.  **Define Nodes:**
    *   `fetchEnvironmentInfoNode`: Calls the `GetEnvironmentName` MCP tool.
    *   `prepareResponseNode`: Formats the response for the UI.

    ```typescript
    // src/agents/basicInfoAgent/nodes.ts
    import { McpClient } from "@d365-agent/mcpclient-ts"; // Adjust import path
    import { BasicInfoAgentState } from "./state";

    const mcpClient = new McpClient({ baseUrl: process.env.D365_MCP_SERVER_URL! });

    export async function fetchEnvironmentInfoNode(state: BasicInfoAgentState): Promise<Partial<BasicInfoAgentState>> {
      try {
        const result = await mcpClient.executeTool("GetEnvironmentName", {});
        const envNameContent = result.content.find(c => c.type === 'text');
        return { environmentName: envNameContent?.text || "Unknown Environment" };
      } catch (error) {
        console.error("Error fetching D365 env info:", error);
        return { errorMessage: "Failed to fetch environment info." };
      }
    }

    export async function prepareResponseNode(state: BasicInfoAgentState): Promise<Partial<BasicInfoAgentState>> {
      // This node could format the message or decide on the final output.
      // For simplicity, the environmentName itself will be used.
      // If an error occurred, it would be in errorMessage.
      return {}; // No state change needed here if UI directly displays environmentName or errorMessage
    }
    ```

3.  **Define Graph:**
    ```typescript
    // src/agents/basicInfoAgent/graph.ts
    import { StateGraph } from "@langchain/langgraph";
    import { BasicInfoAgentState, BasicInfoAgentStateSchema } from "./state";
    import { fetchEnvironmentInfoNode, prepareResponseNode } from "./nodes";

    const workflow = new StateGraph<BasicInfoAgentState>({
      channels: BasicInfoAgentStateSchema,
    });

    workflow.addNode("fetchInfo", fetchEnvironmentInfoNode);
    workflow.addNode("prepareResponse", prepareResponseNode);

    workflow.setEntryPoint("fetchInfo");
    workflow.addEdge("fetchInfo", "prepareResponse");
    workflow.addEdge("prepareResponse", "__end__");

    export const basicInfoAgentGraph = workflow.compile();
    ```

4.  **Expose via CopilotKit Runtime:**
    In your `d365-agent-orchestrator` (e.g., in a Next.js API route or main server file where CopilotKit Runtime is configured):
    ```typescript
    // Example: pages/api/copilotkit/basicinfo.ts (Next.js route handler)
    import { CopilotKit } from "@copilotkit/runtime";
    import { basicInfoAgentGraph } from "../../../agents/basicInfoAgent/graph"; // Adjust path

    export default function POST(req: Request) {
      const copilotKit = new CopilotKit({
        // langgraph: basicInfoAgentGraph, // Simplified; actual integration needs agent executor setup
        // For CoAgents, you'd typically set up an agent executor that uses the graph
        // and provide it to the CopilotKit provider in the UI via langgraphAgentUrl.
        // This backend would handle requests to that langgraphAgentUrl.
        // For this conceptual example, assume the runtime can invoke this graph.
      });
      // This is a simplified representation. Refer to CopilotKit CoAgents documentation
      // for correctly setting up LangGraph with the runtime and frontend.
      return copilotKit.response(req, basicInfoAgentGraph); // This is conceptual
    }
    ```
    *Self-Note: The actual mechanism to make a LangGraph agent callable by CopilotKit UI involves setting `langgraphAgentUrl` in the UI's `CopilotKitProvider` to point to an endpoint (hosted by this orchestrator) that serves the LangGraph agent executor. The above snippet is a placeholder for that setup.*

## 3. Configure UI (`d365-agent-ui`)

1.  **CopilotKit Provider:** Ensure your `_app.tsx` or main layout has `CopilotKitProvider` configured to point to your `d365-agent-orchestrator`'s CopilotKit Runtime endpoint, and specifically the `langgraphAgentUrl` for your `BasicD365InfoAgent`.
    ```tsx
    // Example: _app.tsx
    import { CopilotKitProvider } from "@copilotkit/react-core";
    import "@copilotkit/react-ui/styles.css"; // Import default styles

    function MyApp({ Component, pageProps }) {
      return (
        <CopilotKitProvider
          publicApiKey={process.env.NEXT_PUBLIC_COPILOT_CLOUD_API_KEY} // If using Copilot Cloud
          chatApiEndpoint={process.env.NEXT_PUBLIC_COPILOT_CHAT_API_URL} // General runtime endpoint
          // For CoAgents like our LangGraph agent:
          langgraphAgentUrl={`${process.env.NEXT_PUBLIC_COPILOT_CHAT_API_URL}/basicinfo`} // URL for BasicD365InfoAgent
        >
          <Component {...pageProps} />
        </CopilotKitProvider>
      );
    }
    export default MyApp;
    ```
2.  **Chat Component & State Display:**
    ```tsx
    // Example: pages/index.tsx
    import { CopilotChat } from "@copilotkit/react-ui";
    import { useCoAgent } from "@copilotkit/react-core";
    import { BasicInfoAgentState } from "../path/to/orchestrator/agents/basicInfoAgent/state"; // Adjust path

    export default function HomePage() {
      const { state: agentState } = useCoAgent<BasicInfoAgentState>({ name: "basicinfo" }); // 'name' should match agent key

      return (
        <div>
          <h1>D365 AI Agent</h1>
          <CopilotChat 
            instructions="Ask about the D365 environment."
            defaultMessages={[{
                id: "1",
                role: "user",
                content: "What is the D365 environment name?",
            }]}
            agentId="basicinfo" // Specify which agent to talk to
          />
          {agentState?.environmentName && <p>From Agent State: {agentState.environmentName}</p>}
          {agentState?.errorMessage && <p style={{color: 'red'}}>Error: {agentState.errorMessage}</p>}
        </div>
      );
    }
    ```

## 4. Running and Testing

1.  Start `d365-agent-mcpserver-dotnet`.
2.  Start `d365-agent-orchestrator`.
3.  Start `d365-agent-ui`.
4.  Open the UI in your browser. The chat should automatically send the default message.
5.  The `BasicD365InfoAgent` should execute:
    *   Call the `GetEnvironmentName` MCP tool.
    *   Update its `environmentName` state.
6.  The UI, using `useCoAgent`, should reactively display the `environmentName` from the agent's state.

This provides a more concrete, albeit still simplified, example of an end-to-end flow. Building robust LangGraph agents involves more detailed state management, error handling, and tool definitions. Refer to official CopilotKit and LangChain/LangGraph documentation for advanced patterns.
This tutorial illustrates how a domain-specific agent (`BasicD365InfoAgent`) can be created and integrated. A Master Orchestrator Agent would typically be responsible for routing user requests to such domain-specific agents based on intent.
