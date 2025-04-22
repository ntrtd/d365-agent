# Dynamics 365 AI Orchestration Documentation (Archiverse)

This repository (`d365-agent`) serves as the central documentation hub for the design and architecture of a system orchestrating AI-driven interactions with Microsoft Dynamics 365 via the Model Context Protocol (MCP).

**The project is structured across multiple repositories:**

*   **[`d365-agent`](https://github.com/ntrtd/d365-agent) (This Repo):** Contains the core documentation (built with MkDocs), shared assets (like OData metadata), and potentially shared utility scripts.
*   **[`d365-agent-infra`](https://github.com/ntrtd/d365-agent-infra):** Contains the Infrastructure as Code (IaC) files (e.g., Bicep) for deploying Azure resources.
*   **[`d365-agent-odataclient-ts`](https://github.com/ntrtd/d365-agent-odataclient-ts):** Contains the process and code for generating the **TypeScript** OData V4 client (using SAP Cloud SDK / `odata2ts`). Publishes the client as an npm package.
*   **[`d365-agent-odataclient-dotnet`](https://github.com/ntrtd/d365-agent-odataclient-dotnet):** Contains the process and code for generating the **C#/.NET** OData V4 client (using OData Connected Service / .NET tools). Publishes the client as a NuGet package.
*   **[`d365-agent-mcpserver-ts`](https://github.com/ntrtd/d365-agent-mcpserver-ts):** Contains the **TypeScript/Node.js** implementation of the **MCP Server** service (using `submodules/typescript-sdk`). Depends on the package from `d365-agent-odataclient-ts`.
*   **[`d365-agent-mcpserver-dotnet`](https://github.com/ntrtd/d365-agent-mcpserver-dotnet):** Contains the **C#/.NET** implementation of the **MCP Server** service (using `submodules/csharp-sdk`). Depends on the package from `d365-agent-odataclient-dotnet`.
*   **[`d365-agent-mcpclient-ts`](https://github.com/ntrtd/d365-agent-mcpclient-ts):** Contains the **TypeScript/JavaScript Client Library** used by Application Backends (using `submodules/typescript-sdk`). Includes orchestration logic (AutoGen/DAG) and MCP communication.
*   **[`d365-agent-mcpclient-dotnet`](https://github.com/ntrtd/d365-agent-mcpclient-dotnet):** Contains the **C#/.NET Client Library** used by Application Backends (using `submodules/csharp-sdk`). Includes orchestration logic (AutoGen/DAG) and MCP communication.
*   *(Future)* **`d365-agent-functions`:** May contain shared Azure Functions code (e.g., Document Parser).
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
│   ├── business_requirements.md
│   ├── architecture_vision.md
│   ├── business_architecture.md
│   ├── application_architecture.md
│   ├── use_case_scenarios.md
│   ├── implementation/
│   │   ├── index.md
│   │   └── phase_1.md - phase_4.md
│   ├── sap_sdk_client_usage.md
│   └── evaluation_strategy.md
├── mkdocs.yml                  # MkDocs configuration file
├── README.md                   # This file
└── scripts/                    # Utility scripts (e.g., metadata download)
    └── download_d365_metadata.js
```

**Key Directories in this Repo:**

*   **`docs/`:** Contains all documentation source files (Markdown). See below for building locally.
*   **`asset/`:** Holds shared assets like the raw Dynamics 365 OData metadata file (`d365_metadata.xml`) used as input for client generation in the `d365-agent-odataclient-*` repositories.
*   **`scripts/`:** Utility scripts relevant to documentation or shared tasks (e.g., metadata download). Repository-specific scripts (like deployment) reside in their respective repos.
*   **`config/`:** (Under review) May hold shared configuration schemas or examples not tied to a specific service.

## Related Repositories

*   **Infrastructure:** [`d365-agent-infra`](https://github.com/ntrtd/d365-agent-infra)
*   **OData Client (TypeScript):** [`d365-agent-odataclient-ts`](https://github.com/ntrtd/d365-agent-odataclient-ts)
*   **OData Client (C#/.NET):** [`d365-agent-odataclient-dotnet`](https://github.com/ntrtd/d365-agent-odataclient-dotnet)
*   **MCP Server (TypeScript):** [`d365-agent-mcpserver-ts`](https://github.com/ntrtd/d365-agent-mcpserver-ts)
*   **MCP Server (C#/.NET):** [`d365-agent-mcpserver-dotnet`](https://github.com/ntrtd/d365-agent-mcpserver-dotnet)
*   **MCP Client Library (TypeScript):** [`d365-agent-mcpclient-ts`](https://github.com/ntrtd/d365-agent-mcpclient-ts)
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

A type-safe client for interacting with the Dynamics 365 OData API is crucial. The generation approach depends on the chosen implementation language for the MCP Server:

**Option A: TypeScript Server**

*   **Tool:** SAP Cloud SDK generator / `odata2ts` (see `submodules/odata2ts`).
*   **Input:** `asset/d365_metadata.xml` (from `d365-agent` repo).
*   **Output:** A TypeScript client library package.
*   **Repository:** [`d365-agent-odataclient-ts`](https://github.com/ntrtd/d365-agent-odataclient-ts). This repo contains the logic to run the generator and publish the **npm package** (e.g., `@d365-agent/odataclient`) consumed by `d365-agent-mcpserver-ts`.
*   **Prerequisites:** Node.js, npm/npx. See README in `d365-agent-odataclient-ts`.

**Option B: C#/.NET Server**

*   **Tool:** OData Connected Service extension for Visual Studio (see `submodules/ODataConnectedService`) or the `Microsoft.OData.Client.Design` package/tooling.
*   **Input:** `asset/d365_metadata.xml` (from `d365-agent` repo) or D365 endpoint URL.
*   **Output:** A C# client library package.
*   **Repository:** [`d365-agent-odataclient-dotnet`](https://github.com/ntrtd/d365-agent-odataclient-dotnet). This repo contains the logic/project structure to run the generator and publish the **NuGet package** consumed by `d365-agent-mcpserver-dotnet`.
*   **Prerequisites:** .NET SDK, Visual Studio (for extension) or appropriate .NET tooling. See README in `d365-agent-odataclient-dotnet`.
