# Phase 1: Foundation & Core Setup

*   **Goal:** Establish the core technical infrastructure ([`d365-agent-infra`](https://github.com/ntrtd/d365-agent-infra)), basic integration points, and the initial MCP Server implementation (in either [`d365-agent-mcpserver-ts`](https://github.com/ntrtd/d365-agent-mcpserver-ts) or [`d365-agent-mcpserver-dotnet`](https://github.com/ntrtd/d365-agent-mcpserver-dotnet)). Prove basic connectivity and MCP communication between a client (e.g., a test client, or the initial client library - [`d365-agent-mcpclient-ts`](https://github.com/ntrtd/d365-agent-mcpclient-ts) or [`d365-agent-mcpclient-dotnet`](https://github.com/ntrtd/d365-agent-mcpclient-dotnet)) and the chosen MCP Server connected to Dynamics 365. Validate the D365 client generation approach for the chosen server implementation language.
*   **Technology Decision:** Decide whether the initial implementation will use **TypeScript/Node.js** ([`d365-agent-mcpserver-ts`](https://github.com/ntrtd/d365-agent-mcpserver-ts), [`d365-agent-mcpclient-ts`](https://github.com/ntrtd/d365-agent-mcpclient-ts)) or **C#/.NET** ([`d365-agent-mcpserver-dotnet`](https://github.com/ntrtd/d365-agent-mcpserver-dotnet), [`d365-agent-mcpclient-dotnet`](https://github.com/ntrtd/d365-agent-mcpclient-dotnet)).
*   **MVP:** An MCP Server (in the chosen repo: [`d365-agent-mcpserver-ts`](https://github.com/ntrtd/d365-agent-mcpserver-ts) or [`d365-agent-mcpserver-dotnet`](https://github.com/ntrtd/d365-agent-mcpserver-dotnet)) capable of handling MCP initialization and exposing 1-2 read-only tools (e.g., `get_customer_by_name`). These tools retrieve basic data from a single D365 sandbox instance using a generated OData client (**SAP Cloud SDK/odata2ts** for TypeScript, or **OData Connected Service/Microsoft.OData.Client** for C#). Basic connectivity is validated using a simple MCP client (test script or initial Application Backend using the corresponding Client SDK from [`d365-agent-mcpclient-ts`](https://github.com/ntrtd/d365-agent-mcpclient-ts) or [`d365-agent-mcpclient-dotnet`](https://github.com/ntrtd/d365-agent-mcpclient-dotnet)). Demonstrates successful MCP communication, D365 authentication, core infrastructure setup, D365 client generation, and the basic MCP tool implementation pattern. Basic logging visible in App Insights.

## Task Checklist

-   [ ] **Infrastructure Setup ([`d365-agent-infra`](https://github.com/ntrtd/d365-agent-infra) repo)**
    -   [ ] Provision Azure AI Agent Service instance OR Decide on initial Application Backend hosting (e.g., Azure App Service, ACA) - This will consume the client library ([`d365-agent-mcpclient-ts`](https://github.com/ntrtd/d365-agent-mcpclient-ts) or [`d365-agent-mcpclient-dotnet`](https://github.com/ntrtd/d365-agent-mcpclient-dotnet)).
    -   [x] Provision Azure Container Apps environment and app for the chosen MCP Server ([`d365-agent-mcpserver-ts`](https://github.com/ntrtd/d365-agent-mcpserver-ts) or [`d365-agent-mcpserver-dotnet`](https://github.com/ntrtd/d365-agent-mcpserver-dotnet)).
    -   [x] Provision Azure Service Bus namespace.
    -   [x] Provision Azure Key Vault.
    *   [x] Provision Application Insights instance.
    *   [ ] Set up CI/CD pipeline in `d365-agent-infra` (e.g., GitHub Actions) to deploy infrastructure using Bicep. (**Infrastructure exists, pipeline status unknown**)
    *   [ ] Configure basic network security (VNet integration if needed). (**Unknown**)
-   [ ] **D365 OData Client Generation (Choose ONE based on Server language)**
    -   **Option A (TypeScript Server):**
        -   [ ] Set up the [`d365-agent-odataclient-ts`](https://github.com/ntrtd/d365-agent-odataclient-ts) repository using SAP Cloud SDK / `odata2ts` (`submodules/odata2ts`) to generate TS client from D365 metadata (`../d365-agent/asset/d365_metadata.xml`).
        -   [ ] Configure `d365-agent-odataclient-ts` to publish the generated client as an npm package (e.g., `@d365-agent/odataclient`) consumed by [`d365-agent-mcpserver-ts`](https://github.com/ntrtd/d365-agent-mcpserver-ts).
        -   [ ] Set up CI/CD pipeline in `d365-agent-odataclient-ts` for client generation/publishing.
    -   **Option B (C# Server):**
        -   [ ] Set up the [`d365-agent-odataclient-dotnet`](https://github.com/ntrtd/d365-agent-odataclient-dotnet) repository using OData Connected Service (`submodules/ODataConnectedService`) or `Microsoft.OData.Client.Design` to generate C# client from D365 metadata.
        -   [ ] Configure `d365-agent-odataclient-dotnet` to publish the generated client as a NuGet package consumed by [`d365-agent-mcpserver-dotnet`](https://github.com/ntrtd/d365-agent-mcpserver-dotnet).
        -   [ ] Set up CI/CD pipeline in `d365-agent-odataclient-dotnet` for client generation/publishing.
-   [ ] **MCP Server (Repo: [`d365-agent-mcpserver-ts`](https://github.com/ntrtd/d365-agent-mcpserver-ts) OR [`d365-agent-mcpserver-dotnet`](https://github.com/ntrtd/d365-agent-mcpserver-dotnet))**
    -   [ ] Initialize chosen MCP Server project (using corresponding SDK from `submodules`).
    -   [ ] Add dependency on the generated D365 OData client package/library (TS or C#).
    -   [x] Implement MCP `initialize` handshake. (**Handled by SDK**)
    -   [ ] Implement D365 authentication logic (Client Credentials) using the chosen SDK language and storing secrets in Key Vault.
    -   [ ] Implement 1-2 read-only MCP tools (e.g., `get_customer_by_name`) using the chosen MCP SDK and the generated D365 client.
    -   [ ] Implement basic error handling within tools.
    -   [ ] Containerize the MCP Server application (Dockerfile specific to Node.js or .NET).
    -   [ ] Set up CI/CD pipeline in the chosen repo to build and deploy the MCP Server to Container Apps.
-   [ ] **MCP Client / Application Backend (Repo: [`d365-agent-mcpclient-ts`](https://github.com/ntrtd/d365-agent-mcpclient-ts) OR [`d365-agent-mcpclient-dotnet`](https://github.com/ntrtd/d365-agent-mcpclient-dotnet) / App Backend Repo)**
    -   [ ] Decide on initial host/structure for client-side logic (e.g., simple test script, library project, initial App Service).
    -   [ ] Initialize chosen client project ([`d365-agent-mcpclient-ts`](https://github.com/ntrtd/d365-agent-mcpclient-ts) or [`d365-agent-mcpclient-dotnet`](https://github.com/ntrtd/d365-agent-mcpclient-dotnet)) using the corresponding MCP Client SDK.
    -   [ ] Implement basic logic in chosen host/library to connect to the deployed MCP Server ([`d365-agent-mcpserver-ts`](https://github.com/ntrtd/d365-agent-mcpserver-ts) or [`d365-agent-mcpserver-dotnet`](https://github.com/ntrtd/d365-agent-mcpserver-dotnet)) using the MCP Client SDK.
    -   [ ] Verify successful connection and ability to list tools from the server.
-   [ ] **User Interface (Minimal)**
    *   [ ] Optional: Set up a very basic test interface (e.g., CLI tool, simple web page) to invoke the test client logic, OR defer to Phase 2.
-   [ ] **Testing & Validation (Phase 1)**
    *   [ ] Define initial Evaluation Strategy details (see `docs/evaluation_strategy.md`).
    *   [ ] Create initial test cases for Phase 1 MVP (simple read queries via MCP client). (**Location TBD, maybe `d365-agent-tests`**)
    *   [ ] Implement Unit Tests for MCP Server read-only tools (mocking D365 calls) within the chosen MCP server repo ([`d365-agent-mcpserver-ts`](https://github.com/ntrtd/d365-agent-mcpserver-ts) or [`d365-agent-mcpserver-dotnet`](https://github.com/ntrtd/d365-agent-mcpserver-dotnet)). (**Unknown**)
    *   [ ] Add Unit Tests to the chosen MCP server CI pipeline. (**Unknown**)
    *   [ ] Perform Integration Test: Verify the deployed MCP Server ([`d365-agent-mcpserver-ts`](https://github.com/ntrtd/d365-agent-mcpserver-ts) or [`d365-agent-mcpserver-dotnet`](https://github.com/ntrtd/d365-agent-mcpserver-dotnet)) connection & authentication to D365 sandbox. (**Unknown**)
    *   [ ] Perform manual E2E testing using test client/UI to invoke read-only tools against MVP criteria. (**Unknown**)
    *   [ ] Verify basic logs and traces are captured in Application Insights from the deployed MCP Server ([`d365-agent-mcpserver-ts`](https://github.com/ntrtd/d365-agent-mcpserver-ts) or [`d365-agent-mcpserver-dotnet`](https://github.com/ntrtd/d365-agent-mcpserver-dotnet)). (**Unknown**)
