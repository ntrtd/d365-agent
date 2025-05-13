# Key Components

This section describes the primary repositories and services that constitute the Dynamics 365 AI Agent system.

*   **`d365-agent-ui` (Frontend Application)**
    *   **Description:** A React-based web application (TypeScript) that provides the primary user interface for interacting with the AI agents. It utilizes `CopilotKit` libraries (`@copilotkit/react-ui`, `@copilotkit/react-core`) to create a rich, conversational chat experience.
    *   **Responsibilities:**
        *   Rendering the chat interface, handling user input (text, file uploads for POs, potentially voice).
        *   Connecting to the `d365-agent-orchestrator` (which hosts the CopilotKit Runtime) via GraphQL/HTTP.
        *   Displaying real-time updates, agent responses, and generative UI components based on the state of the backend LangGraph agents (using `useCoAgentState` or similar CopilotKit features).
    *   **Repository:** [`https://github.com/ntrtd/d365-agent-ui`](https://github.com/ntrtd/d365-agent-ui)

*   **`d365-agent-orchestrator` (Application Orchestration Layer)**
    *   **Description:** A backend service, built with Node.js/TypeScript, that hosts the `CopilotKit Runtime` and orchestrates `LangGraph` agents. It serves as the central hub for managing conversational flows and business process execution.
    *   **Responsibilities:**
        *   **CopilotKit Runtime:** Manages communication with the `d365-agent-ui` frontend, handles LLM interactions (e.g., with Azure OpenAI), and serves as the entry point to the LangGraph orchestration.
        *   **LangGraph Orchestration (TypeScript):**
            *   **Master Orchestrator Agent:** Typically, a primary LangGraph agent that receives initial requests from the CopilotKit Runtime. It's responsible for understanding user intent, routing to appropriate Domain-Specific Agents, and managing overarching conversational context if needed.
            *   **Domain-Specific LangGraph Agents (e.g., `CTSOrderAgent`, `POProcessingAgent`):** Specialized LangGraph state machines, each designed for a particular end-to-end business process. They:
                *   Manage their own operational state, which is shareable with the UI via CopilotKit's shared state mechanisms.
                *   For document understanding (e.g., parsing PO PDFs), directly call AI services like OpenAI.
                *   Utilize the `d365-agent-mcpclient-ts` library to call D365-specific tools exposed by the `d365-agent-mcpserver-dotnet`.
                *   Handle other process-specific logic (e.g., XML generation).
        *   **Simpler CopilotKit Actions (Optional):** While the primary focus is on LangGraph for complex processes, simpler, stateless CopilotKit actions can still be defined for direct D365 operations if a full LangGraph flow is not required. These would also use `d365-agent-mcpclient-ts`.
        *   May expose additional API endpoints for external triggers (e.g., email ingestion initiating a LangGraph flow).
    *   **Repository:** [`https://github.com/ntrtd/d365-agent-orchestrator`](https://github.com/ntrtd/d365-agent-orchestrator)

*   **`d365-agent-mcpclient-ts` (D365 MCP Client Library - TypeScript)**
    *   **Description:** A TypeScript library used by the LangGraph agents and simpler actions within the `d365-agent-orchestrator` to communicate with the `d365-agent-mcpserver-dotnet`.
    *   **Responsibilities:**
        *   Formatting MCP requests to call tools on the D365 MCP Server.
        *   Handling responses and errors from the D365 MCP Server.
    *   **Repository:** [`https://github.com/ntrtd/d365-agent-mcpclient-ts`](https://github.com/ntrtd/d365-agent-mcpclient-ts) (or sourced from `submodules/typescript-sdk/packages/mcp-client`)

*   **`d365-agent-mcpserver-dotnet` (D365 MCP Server - .NET Core)**
    *   **Description:** A dedicated .NET Core server that exposes Dynamics 365 functionalities as standardized MCP (Model Context Protocol) tools. This is the primary gateway for D365 interactions.
    *   **Responsibilities:**
        *   Connecting to Dynamics 365 using the generated C# OData client from `d365-agent-odataclient-dotnet`.
        *   Implementing MCP tools that perform specific D365 operations (e.g., `simulateInvoicePostToD365`, `getCustomerByName`, `createSalesOrder`).
        *   Handling D365 authentication (Client Credentials) and error management for tool execution.
        *   Exposing these tools via the MCP protocol for consumption by the `d365-agent-mcpclient-ts`.
    *   **Repository:** [`https://github.com/ntrtd/d365-agent-mcpserver-dotnet`](https://github.com/ntrtd/d365-agent-mcpserver-dotnet) (using `submodules/csharp-sdk` for MCP functionalities)

*   **`d365-agent-odataclient-dotnet` (D365 OData Client Generator - .NET)**
    *   **Description:** A project responsible for generating a type-safe C# OData client library for interacting with Dynamics 365.
    *   **Responsibilities:**
        *   Consuming D365 OData $metadata.
        *   Generating C# client code (using OData Connected Service or `Microsoft.OData.Client.Design`).
        *   The generated client is published as a NuGet package and consumed as a dependency by `d365-agent-mcpserver-dotnet`.
    *   **Repository:** [`https://github.com/ntrtd/d365-agent-odataclient-dotnet`](https://github.com/ntrtd/d365-agent-odataclient-dotnet)

*   **`d365-agent-infra` (Infrastructure as Code)**
    *   **Description:** Contains Infrastructure as Code (IaC) definitions (e.g., Bicep, Terraform) for provisioning and managing the Azure resources required by the system.
    *   **Responsibilities:**
        *   Defining resources like Azure Container Apps (for hosting `d365-agent-orchestrator`, `d365-agent-mcpserver-dotnet`), Azure Key Vault, Azure Service Bus, Application Insights, etc.
        *   Automating the deployment and configuration of the cloud infrastructure.
    *   **Repository:** [`https://github.com/ntrtd/d365-agent-infra`](https://github.com/ntrtd/d365-agent-infra)

These components work together to provide an AI-driven conversational interface for interacting with Dynamics 365 business processes, leveraging LangGraph for complex orchestrations and CopilotKit for the user experience.
