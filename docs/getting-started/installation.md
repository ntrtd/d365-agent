# Installation Guide

This guide provides instructions for setting up the development environment for each major component of the Dynamics 365 AI Agent system. Ensure you have met all conditions in the [Prerequisites](./prerequisites.md) document first.

## 1. Clone Repositories

Start by cloning the necessary repositories:

```bash
git clone https://github.com/ntrtd/d365-agent-ui.git
git clone https://github.com/ntrtd/d365-agent-orchestrator.git
git clone https://github.com/ntrtd/d365-agent-mcpserver-dotnet.git
git clone https://github.com/ntrtd/d365-agent-odataclient-dotnet.git # If regenerating OData client
git clone https://github.com/ntrtd/d365-agent-infra.git # For Azure infrastructure setup
```
Navigate into each cloned directory for component-specific setup.

## 2. Setup `d365-agent-mcpserver-dotnet` (.NET D365 MCP Server)

1.  **Open the Project:** Open the `d365-agent-mcpserver-dotnet` solution in Visual Studio or your preferred .NET IDE.
2.  **Restore Dependencies:** Build the solution to restore NuGet packages. This should include the `d365-agent-odataclient-dotnet` package (if published) or a project reference.
3.  **Configure D365 Connection:**
    *   Set up your D365 instance URL, Azure AD App Registration (Client ID, Client Secret, Tenant ID) in `appsettings.json` or via environment variables / Azure Key Vault. Refer to the project's `README.md` for specific configuration keys.
    *   Example `appsettings.Development.json` structure:
        ```json
        {
          "D365": {
            "InstanceUrl": "https://your-d365-instance.operations.dynamics.com",
            "TenantId": "your-tenant-id",
            "ClientId": "your-app-client-id",
            "ClientSecret": "your-app-client-secret"
          },
          "Logging": { /* ... */ }
        }
        ```
4.  **Build and Run:**
    *   Build the project.
    *   Run the server (e.g., `dotnet run`). It should start listening on a configured port (e.g., `http://localhost:5000`).
    *   Verify it's running by accessing its health check endpoint or MCP discovery endpoint if available.

## 3. Setup `d365-agent-orchestrator` (Node.js/TS Orchestration Layer)

1.  **Navigate to Directory:** `cd d365-agent-orchestrator`
2.  **Install Dependencies:**
    ```bash
    npm install 
    # or yarn install / pnpm install
    ```
3.  **Configure Environment Variables:**
    *   Create a `.env` file based on `.env.example` (if provided).
    *   Set `OPENAI_API_KEY` (or Azure OpenAI equivalents: `AZURE_OPENAI_API_KEY`, `AZURE_OPENAI_API_INSTANCE_NAME`, `AZURE_OPENAI_API_DEPLOYMENT_NAME`, `AZURE_OPENAI_API_VERSION`).
    *   Set `LANGSMITH_API_KEY` (if using LangSmith).
    *   Set `D365_MCP_SERVER_URL` to the URL where your `d365-agent-mcpserver-dotnet` is running (e.g., `http://localhost:5000`).
    *   Configure the `COPILOTKIT_RUNTIME_URL` (this service itself will host the runtime, so this might be for client configuration or if using Copilot Cloud). For self-hosting the runtime, the UI will point to this orchestrator's runtime endpoint.
4.  **Build and Run:**
    *   `npm run build` (if there's a build step for TypeScript).
    *   `npm start` or `npm run dev`.
    *   The service should start, hosting the CopilotKit Runtime and making LangGraph agents available. Note the port it's running on (e.g., `http://localhost:3001`).

## 4. Setup `d365-agent-ui` (React Frontend)

1.  **Navigate to Directory:** `cd d365-agent-ui`
2.  **Install Dependencies:**
    ```bash
    npm install
    # or yarn install / pnpm install
    ```
3.  **Configure Environment Variables:**
    *   Create a `.env.local` file.
    *   Set `NEXT_PUBLIC_COPILOT_CLOUD_API_KEY` if using Copilot Cloud.
    *   Set `NEXT_PUBLIC_COPILOT_CHAT_API_URL` to the URL of the CopilotKit Runtime hosted by `d365-agent-orchestrator` (e.g., `http://localhost:3001/api/copilotkit`).
    *   (If using LangGraph CoAgents) Set `NEXT_PUBLIC_LANGGRAPH_AGENT_URL` to the appropriate endpoint exposed by the `d365-agent-orchestrator` for LangGraph interactions (this might also be part of the CopilotKit Runtime URL or a specific path).
4.  **Run the Development Server:**
    ```bash
    npm run dev
    ```
    *   The UI should be accessible in your browser (e.g., `http://localhost:3000`).

## 5. (Optional) Regenerate `d365-agent-odataclient-dotnet`

If you need to update the C# OData client for D365:
1.  **Open the Project:** Open `d365-agent-odataclient-dotnet` in Visual Studio.
2.  **Update OData Connected Service:**
    *   Right-click the project, go to "Add" > "Connected Service".
    *   Find the OData Connected Service entry, configure it with your D365 F&O $metadata endpoint.
    *   Follow prompts to regenerate the client code.
3.  **Build and Pack (Optional):**
    *   Build the project.
    *   If you publish it as a NuGet package: `dotnet pack -c Release`.
    *   Ensure `d365-agent-mcpserver-dotnet` references the new version.

## Verifying the Setup

1.  Ensure all three main services (`d365-agent-mcpserver-dotnet`, `d365-agent-orchestrator`, `d365-agent-ui`) are running without errors.
2.  Open the `d365-agent-ui` in your browser.
3.  Try a simple interaction that you know should trigger a D365 MCP tool call (e.g., a basic query from one of the scenarios).
4.  Check logs for all three services to trace the request flow: UI -> Orchestrator (CopilotKit Runtime -> LangGraph Agent -> MCP Client) -> MCP Server -> D365, and back.
5.  If using LangSmith, check for traces of your LangGraph agent execution.

This setup provides a local development environment for the complete D365 AI Agent system. For cloud deployment, refer to instructions related to `d365-agent-infra` and containerization.
