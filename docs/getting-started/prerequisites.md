# Prerequisites

To develop and run the complete Dynamics 365 AI Agent system, ensure your environment meets the following prerequisites across the different architectural layers.

## 1. Core Technologies & Tools

*   **Node.js:** Version 18.x or later (for `d365-agent-ui` and `d365-agent-orchestrator`).
*   **.NET SDK:** Version 6.x or 7.x (or as specified by `d365-agent-mcpserver-dotnet` and `d365-agent-odataclient-dotnet`).
*   **Git:** For cloning the repositories.
*   **IDE:** Visual Studio Code (recommended for TypeScript/Node.js development) and Visual Studio or Rider (recommended for .NET development).
*   **Docker (Optional but Recommended):** For containerizing and running the services, especially for local development and consistent deployments.
*   **Azure Subscription (Optional but Recommended for Full Deployment):** To deploy services to Azure Container Apps, use Azure OpenAI, Azure Key Vault, etc.
*   **LangSmith Account (Recommended):** For observability and debugging of LangGraph agents. Get an API key from [LangSmith](https://smith.langchain.com/).

## 2. Dynamics 365 Environment

*   **D365 Instance:** Access to a Dynamics 365 Finance and Operations environment.
    *   Specify supported D365 application versions (e.g., 10.0.X or later).
*   **D365 User Account & Permissions:**
    *   A dedicated service account or an appropriate user account for the `d365-agent-mcpserver-dotnet` to connect to D365.
    *   This account needs sufficient permissions to perform the operations exposed by the MCP tools (e.g., read/write access to sales orders, purchase orders, customer data, inventory, etc., depending on the implemented scenarios). Refer to D365 security roles and duties.
*   **D365 Application Registration:** The `d365-agent-mcpserver-dotnet` will need an Azure AD application registration with appropriate API permissions for D365 F&O to authenticate.
    *   Client ID and Client Secret (or certificate) for the app registration.

## 3. AI Services

*   **OpenAI or Azure OpenAI Account:**
    *   API key for accessing models like GPT-3.5-turbo, GPT-4, or text embedding models (used by LangGraph agents for document parsing, RAG, and general LLM tasks).
    *   If using Azure OpenAI, ensure you have a deployed model endpoint.

## 4. Component-Specific Prerequisites

### For `d365-agent-ui` (Frontend)
*   **Node.js & npm/yarn/pnpm:** As per core tools.
*   Familiarity with React, TypeScript, and CopilotKit frontend libraries (`@copilotkit/react-ui`, `@copilotkit/react-core`).

### For `d365-agent-orchestrator` (Orchestration Layer)
*   **Node.js & npm/yarn/pnpm:** As per core tools.
*   Familiarity with TypeScript, LangGraph, and CopilotKit Runtime (`@copilotkit/runtime`).
*   `d365-agent-mcpclient-ts` library (usually included or linked within the orchestrator project).
*   API keys for OpenAI/Azure OpenAI and LangSmith configured as environment variables.

### For `d365-agent-mcpserver-dotnet` (D365 MCP Server)
*   **.NET SDK:** As per core tools.
*   Familiarity with C#, ASP.NET Core, and the Model Context Protocol (MCP).
*   `d365-agent-odataclient-dotnet` (NuGet package or project reference).
*   D365 connection details (instance URL, App Registration Client ID/Secret, Tenant ID) configured securely (e.g., via environment variables, Azure Key Vault).

### For `d365-agent-odataclient-dotnet` (OData Client Generation)
*   **.NET SDK:** As per core tools.
*   Access to the D365 F&O OData $metadata endpoint of your target environment.

## 5. Repository Access
*   Ensure you have cloned or have access to the following repositories:
    *   `d365-agent-ui`
    *   `d365-agent-orchestrator`
    *   `d365-agent-mcpserver-dotnet`
    *   `d365-agent-odataclient-dotnet` (if you need to regenerate the OData client)
    *   `d365-agent-infra` (if managing Azure infrastructure via IaC)

Meeting these prerequisites will ensure a smoother setup and development experience for the Dynamics 365 AI Agent system.
