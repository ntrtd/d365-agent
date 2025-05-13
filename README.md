# Dynamics 365 AI Agent Documentation

This repository (`d365-agent`) serves as the central documentation hub for the design and architecture of a system orchestrating AI-driven interactions with Microsoft Dynamics 365. The core architecture involves a **CopilotKit UI** (`d365-agent-ui`), an **Application Orchestration Layer** (`d365-agent-orchestrator`) using LangGraph and the CopilotKit Runtime, and a **D365 MCP Server** (`d365-agent-mcpserver-dotnet`) for Dynamics 365 connectivity.

**The project is structured across multiple repositories:**

*   **[`d365-agent`](https://github.com/ntrtd/d365-agent) (This Repo):** Contains the core documentation (built with MkDocs), shared assets (like OData metadata), and potentially shared utility scripts.
*   **[`d365-agent-ui`](https://github.com/ntrtd/d365-agent-ui):** The **React/TypeScript frontend application** built with **CopilotKit** (`@copilotkit/react-ui`, `@copilotkit/react-core`). Provides the chat interface and displays agent state.
*   **[`d365-agent-orchestrator`](https://github.com/ntrtd/d365-agent-orchestrator):** The **TypeScript/Node.js Application Orchestration Layer**. Hosts the **CopilotKit Runtime** and **LangGraph agents** (e.g., for Purchase and Sales processes). Uses `d365-agent-mcpclient-ts` to communicate with the D365 MCP Server and directly calls AI services (e.g., OpenAI) for tasks like document parsing.
*   **[`d365-agent-mcpserver-dotnet`](https://github.com/ntrtd/d365-agent-mcpserver-dotnet):** The primary **D365 MCP Server implemented in C#/.NET Core**. It uses the `d365-agent-odataclient-dotnet` to interact with Dynamics 365 and exposes D365 operations as MCP tools. (Uses `submodules/csharp-sdk` for MCP functionalities). This is the recommended server for D365 connectivity due to the stability of its OData client.
*   **[`d365-agent-mcpclient-ts`](https://github.com/ntrtd/d365-agent-mcpclient-ts):** The **TypeScript MCP Client Library** used by the `d365-agent-orchestrator` (LangGraph agents) to call tools on the `d365-agent-mcpserver-dotnet`. (Uses `submodules/typescript-sdk` for MCP functionalities).
*   **[`d365-agent-odataclient-dotnet`](https://github.com/ntrtd/d365-agent-odataclient-dotnet):** Contains the process and code for generating the **C#/.NET OData V4 client** for Dynamics 365. This client is consumed by `d365-agent-mcpserver-dotnet`.
*   **[`d365-agent-infra`](https://github.com/ntrtd/d365-agent-infra):** Contains the Infrastructure as Code (IaC) files (e.g., Bicep) for deploying Azure resources (e.g., Azure Container Apps for the services).
*   **[`d365-agent-odataclient-ts`](https://github.com/ntrtd/d365-agent-odataclient-ts):** Contains the process and code for generating a **TypeScript** OData V4 client (using SAP Cloud SDK / `odata2ts`). **Note: This TypeScript OData client is currently facing issues, making the `d365-agent-mcpserver-ts` not fully operational for D365 integration at this time.**
*   **[`d365-agent-mcpserver-ts`](https://github.com/ntrtd/d365-agent-mcpserver-ts):** Contains the **TypeScript/Node.js** implementation of an MCP Server (using `submodules/typescript-sdk`). Depends on the package from `d365-agent-odataclient-ts`. Its use for D365 is limited by the current status of `d365-agent-odataclient-ts`.
*   **[`d365-agent-mcpclient-dotnet`](https://github.com/ntrtd/d365-agent-mcpclient-dotnet):** Contains the **C#/.NET MCP Client Library** (using `submodules/csharp-sdk`). Could be used by other .NET services if they need to call MCP servers.
*   *(Future)* **`d365-agent-tests`:** May contain centralized integration or end-to-end tests.

The documentation herein is built using [MkDocs](https://www.mkdocs.org/) with the [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/) theme.

## `d365-agent` Repository Structure

```
d365-agent/
├── .github/                    # CI/CD workflows (e.g., deploy docs)
│   └── workflows/
├── .gitignore
├── asset/                      # Shared assets like D365 metadata
│   └── d365_metadata.xml
├── config/                     # (Potentially obsolete/moved) Example configurations
├── docs/                       # MkDocs documentation source files
│   ├── index.md
│   ├── fundamentals/
│   │   ├── architecture.md
│   │   ├── key-components.md
│   │   └── ...
│   ├── getting-started/
│   ├── guides/
│   ├── integrations/
│   ├── api-reference/
│   ├── partner-center/
│   └── release-notes/
├── implementation/             # Phased implementation plan
│   ├── index.md
│   └── phase_1.md - phase_4.md
├── mkdocs.yml                  # MkDocs configuration file
├── README.md                   # This file
└── scripts/                    # Utility scripts (e.g., metadata download)
    └── download_d365_metadata.js
```

**Key Directories in this Repo:**

*   **`docs/`:** Contains all documentation source files (Markdown).
*   **`implementation/`:** Outlines the phased development plan.
*   **`asset/`:** Holds shared assets like the raw Dynamics 365 OData metadata file (`d365_metadata.xml`).
*   **`scripts/`:** Utility scripts.

## Related Repositories (Primary Components for Current Architecture)

*   **User Interface:** [`d365-agent-ui`](https://github.com/ntrtd/d365-agent-ui) (CopilotKit React Frontend)
*   **Application Orchestrator:** [`d365-agent-orchestrator`](https://github.com/ntrtd/d365-agent-orchestrator) (CopilotKit Runtime, LangGraph Agents - TypeScript)
*   **D365 MCP Server (.NET):** [`d365-agent-mcpserver-dotnet`](https://github.com/ntrtd/d365-agent-mcpserver-dotnet)
*   **D365 MCP Client (TypeScript):** [`d365-agent-mcpclient-ts`](https://github.com/ntrtd/d365-agent-mcpclient-ts) (Used by Orchestrator)
*   **D365 OData Client Generator (.NET):** [`d365-agent-odataclient-dotnet`](https://github.com/ntrtd/d365-agent-odataclient-dotnet) (Used by MCP Server .NET)
*   **Infrastructure:** [`d365-agent-infra`](https://github.com/ntrtd/d365-agent-infra)

### Other Supporting Repositories
*   **D365 OData Client Generator (TypeScript):** [`d365-agent-odataclient-ts`](https://github.com/ntrtd/d365-agent-odataclient-ts) (Note: TS OData client currently has issues)
*   **MCP Server (TypeScript):** [`d365-agent-mcpserver-ts`](https://github.com/ntrtd/d365-agent-mcpserver-ts) (Alternative, depends on working TS OData client)
*   **MCP Client Library (C#/.NET):** [`d365-agent-mcpclient-dotnet`](https://github.com/ntrtd/d365-agent-mcpclient-dotnet)

## Development Setup

### Viewing the Documentation Locally

1.  **Install dependencies:**
    *   Ensure you have Python installed.
    *   Install MkDocs and the Material theme:
        ```bash
        pip install mkdocs mkdocs-material pymdown-extensions
        ```
2.  **Serve the documentation:**
    *   Navigate to the project root directory (`d365-agent`) in your terminal.
    *   Run the MkDocs development server:
        ```bash
        mkdocs serve
        ```
    *   Open your web browser and go to `http://127.0.0.1:8000`.

The site will automatically rebuild and reload when you save changes to the documentation files or the `mkdocs.yml` configuration file.

### Deploying Infrastructure

Infrastructure deployment is managed within the **[`d365-agent-infra`](https://github.com/ntrtd/d365-agent-infra)** repository. Please refer to the README in that repository for instructions.

### D365 OData Client Generation

A type-safe client for interacting with the Dynamics 365 OData API is crucial.

**Primary Approach (C#/.NET OData Client for the .NET D365 MCP Server):**

*   **Tool:** OData Connected Service extension for Visual Studio (see `submodules/ODataConnectedService`) or the `Microsoft.OData.Client.Design` package/tooling.
*   **Input:** `asset/d365_metadata.xml` (from `d365-agent` repo) or D365 endpoint URL.
*   **Output:** A C# client library package.
*   **Repository:** [`d365-agent-odataclient-dotnet`](https://github.com/ntrtd/d365-agent-odataclient-dotnet). This repo contains the logic/project structure to run the generator and publish the **NuGet package** consumed by `d365-agent-mcpserver-dotnet`.
*   **Prerequisites:** .NET SDK, Visual Studio (for extension) or appropriate .NET tooling. See README in `d365-agent-odataclient-dotnet`.

**Alternative (TypeScript OData Client):**

*   **Repository:** [`d365-agent-odataclient-ts`](https://github.com/ntrtd/d365-agent-odataclient-ts).
*   **Tool:** SAP Cloud SDK generator / `odata2ts` (see `submodules/odata2ts`).
*   **Status:** The generated TypeScript OData client is **currently experiencing issues**, which limits the direct use of `d365-agent-mcpserver-ts` for D365 integration at this time. If these issues are resolved, it could become a viable alternative.
