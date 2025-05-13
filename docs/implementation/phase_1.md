# Phase 1: Foundation & Core Setup

*   **Goal:** Establish the core technical infrastructure ([`d365-agent-infra`](https://github.com/ntrtd/d365-agent-infra)), basic integration points, and the initial **D365 MCP Server in .NET Core** (repo: [`d365-agent-mcpserver-dotnet`](https://github.com/ntrtd/d365-agent-mcpserver-dotnet)) using the working .NET OData client (`d365-agent-odataclient-dotnet`). Set up the **Application Orchestration Layer** (repo: [`d365-agent-orchestrator`](https://github.com/ntrtd/d365-agent-orchestrator)) using TypeScript/Node.js, hosting CopilotKit Runtime and initial LangGraph agent structure, which will use the **TypeScript MCP Client** (`d365-agent-mcpclient-ts`) to communicate with the .NET D365 MCP Server. Establish the **CopilotKit UI** (repo: `d365-agent-ui`).
*   **Technology Decision:**
    *   **D365 MCP Server:** C#/.NET (`d365-agent-mcpserver-dotnet`) utilizing `d365-agent-odataclient-dotnet`.
    *   **Application Orchestration Layer & CopilotKit Runtime:** TypeScript/Node.js (`d365-agent-orchestrator`).
    *   **D365 MCP Client (for Orchestrator):** TypeScript (`d365-agent-mcpclient-ts`).
    *   **UI:** React/TypeScript with CopilotKit (`d365-agent-ui`).
*   **MVP:**
    *   A **D365 MCP Server (`d365-agent-mcpserver-dotnet`)** capable of handling MCP initialization and exposing 1-2 read-only D365 tools (e.g., `get_customer_by_name`) using the `d365-agent-odataclient-dotnet`.
    *   An **Application Orchestration Layer (`d365-agent-orchestrator`)** set up with CopilotKit Runtime and a basic LangGraph agent structure.
    *   This orchestrator uses `d365-agent-mcpclient-ts` to successfully connect to the `d365-agent-mcpserver-dotnet` and list/call the exposed D365 tools.
    *   A basic **CopilotKit UI (`d365-agent-ui`)** that can connect to the `d365-agent-orchestrator`.
    *   Demonstrates successful MCP communication between the TS client (in orchestrator) and .NET server, D365 authentication (in MCP server), core infrastructure setup, and D365 OData client generation for .NET. Basic logging visible in App Insights.

## Task Checklist

-   [ ] **Infrastructure Setup ([`d365-agent-infra`](https://github.com/ntrtd/d365-agent-infra) repo)**
    -   [ ] Provision Azure Container Apps environment and app for the Application Orchestration Layer (`d365-agent-orchestrator`).
    -   [x] Provision Azure Container Apps environment and app for the D365 MCP Server (`d365-agent-mcpserver-dotnet`).
    -   [x] Provision Azure Service Bus namespace.
    -   [x] Provision Azure Key Vault.
    *   [x] Provision Application Insights instance.
    *   [ ] Set up CI/CD pipeline in `d365-agent-infra` (e.g., GitHub Actions) to deploy infrastructure using Bicep. (**Infrastructure exists, pipeline status unknown**)
    *   [ ] Configure basic network security (VNet integration if needed). (**Unknown**)
-   [ ] **D365 OData Client Generation (.NET)**
    -   [ ] Set up the [`d365-agent-odataclient-dotnet`](https://github.com/ntrtd/d365-agent-odataclient-dotnet) repository using OData Connected Service (`submodules/ODataConnectedService`) or `Microsoft.OData.Client.Design` to generate C# client from D365 metadata.
    -   [ ] Configure `d365-agent-odataclient-dotnet` to publish the generated client as a NuGet package consumed by `d365-agent-mcpserver-dotnet`.
    -   [ ] Set up CI/CD pipeline in `d365-agent-odataclient-dotnet` for client generation/publishing.
-   [ ] **D365 MCP Server (Repo: [`d365-agent-mcpserver-dotnet`](https://github.com/ntrtd/d365-agent-mcpserver-dotnet))**
    -   [ ] Initialize the .NET MCP Server project (using `submodules/csharp-sdk` for MCP functionalities).
    -   [ ] Add dependency on the generated D365 OData client NuGet package (from `d365-agent-odataclient-dotnet`).
    -   [x] Implement MCP `initialize` handshake. (**Handled by .NET MCP SDK**)
    -   [ ] Implement D365 authentication logic (Client Credentials) using C# and storing secrets in Key Vault.
    -   [ ] Implement 1-2 read-only D365 MCP tools (e.g., `get_customer_by_name`) using the .NET MCP SDK and the generated .NET D365 OData client.
    -   [ ] Implement basic error handling within tools.
    -   [ ] Containerize the `d365-agent-mcpserver-dotnet` application.
    -   [ ] Set up CI/CD pipeline in `d365-agent-mcpserver-dotnet` to build and deploy the MCP Server to Container Apps.
-   [ ] **Application Orchestration Layer (Repo: [`d365-agent-orchestrator`](https://github.com/ntrtd/d365-agent-orchestrator))**
    -   [ ] Decide on initial host/structure for the Application Orchestration Layer (Node.js/TypeScript application using Next.js or similar, to host CopilotKit Runtime and the initial LangGraph agents for different business domains like Sales and Purchasing). This will reside in the `d365-agent-orchestrator` repository.
    -   [ ] Initialize the `d365-agent-orchestrator` project (TypeScript/Node.js).
    -   [ ] Integrate the `d365-agent-mcpclient-ts` library.
    -   [ ] Implement basic logic in the `d365-agent-orchestrator` (e.g., a test LangGraph agent or a simple CopilotKit action) to connect to the deployed `d365-agent-mcpserver-dotnet` using `d365-agent-mcpclient-ts`.
    -   [ ] Verify successful connection to the D365 MCP Server and ability to list/call its tools.
-   [ ] **User Interface (Repo: [`d365-agent-ui`](https://github.com/ntrtd/d365-agent-ui))**
    *   [ ] Set up a basic React frontend application within the `d365-agent-ui` repository, designed to potentially support multiple agent interactions (e.g., Sales, Purchasing).
    *   [ ] Integrate `CopilotKit` UI components (e.g., `@copilotkit/react-ui`, `@copilotkit/react-core`).
    *   [ ] Configure the CopilotKit frontend in `d365-agent-ui` to connect to the Application Orchestration Layer (`d365-agent-orchestrator`, which will host the CopilotKit Runtime).
-   [ ] **Testing & Validation (Phase 1)**
    *   [ ] Define initial Evaluation Strategy details (see `docs/evaluation_strategy.md`).
    *   [ ] Create initial test cases for Phase 1 MVP (simple read queries from `d365-agent-orchestrator` via `d365-agent-mcpclient-ts` to `d365-agent-mcpserver-dotnet`). (**Location TBD, maybe `d365-agent-tests`**)
    *   [ ] Implement Unit Tests for D365 MCP Server read-only tools (mocking D365 calls) within `d365-agent-mcpserver-dotnet`. (**Unknown**)
    *   [ ] Add Unit Tests to the `d365-agent-mcpserver-dotnet` CI pipeline. (**Unknown**)
    *   [ ] Perform Integration Test: Verify the deployed `d365-agent-mcpserver-dotnet` connection & authentication to D365 sandbox. (**Unknown**)
    *   [ ] Perform manual E2E testing using the CopilotKit UI (`d365-agent-ui`) -> `d365-agent-orchestrator` -> `d365-agent-mcpserver-dotnet` to invoke read-only tools against MVP criteria. (**Unknown**)
    *   [ ] Verify basic logs and traces are captured in Application Insights from the deployed `d365-agent-mcpserver-dotnet` and `d365-agent-orchestrator`. (**Unknown**)
