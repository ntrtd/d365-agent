# Dynamics 365 AI Orchestration Documentation (Archiverse)

This repository (`d365-agent`) serves as the central documentation hub for the design and architecture of a system orchestrating AI-driven interactions with Microsoft Dynamics 365 via the Model Context Protocol (MCP).

**The project is structured across multiple repositories:**

*   **`d365-agent` (This Repo):** Contains the core documentation (built with MkDocs), shared assets (like OData metadata), and potentially shared utility scripts.
*   **`d365-agent-infra`:** Contains the Infrastructure as Code (IaC) files (e.g., Bicep) for deploying Azure resources.
*   **`d365-agent-odataclient`:** Contains the generated TypeScript OData V4 client (using SAP Cloud SDK generator) for interacting with Dynamics 365. Published as a package.
*   **`d365-agent-mcpserver`:** Contains the source code for the **MCP Server** service (TypeScript/Node.js), including MCP tool implementations that use the OData client. Depends on the `d365-agent-odataclient` package.
*   **`d365-agent-mcpclient`:** Contains the **Client SDK** library (e.g., TypeScript/Python) used by Application Backends for orchestration logic, state management, and MCP communication with the `d365-agent-mcpserver`.
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
*   **`asset/`:** Holds shared assets like the raw Dynamics 365 OData metadata file (`d365_metadata.xml`) used as input for client generation in the `d365-agent-odataclient` repository.
*   **`scripts/`:** Utility scripts relevant to documentation or shared tasks (e.g., metadata download). Repository-specific scripts (like deployment) reside in their respective repos.
*   **`config/`:** (Under review) May hold shared configuration schemas or examples not tied to a specific service.

## Related Repositories

*   **Infrastructure:** `d365-agent-infra`
*   **OData Client:** `d365-agent-odataclient`
*   **MCP Server:** `d365-agent-mcpserver`
*   **MCP Client SDK:** `d365-agent-mcpclient`

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

Infrastructure deployment is managed within the **`d365-agent-infra`** repository. Please refer to the README in that repository for instructions.

### OData Client Generation (Using SAP Cloud SDK Generator)

The type-safe OData TypeScript client is generated and managed within the dedicated **`d365-agent-odataclient`** repository. It uses the `asset/d365_metadata.xml` file from *this* (`d365-agent`) repository as input. The generated client is intended to be published as an npm package for consumption by the **`d365-agent-mcpserver`**.

**Generation Command (Run from `d365-agent-odataclient` root):**

Refer to the README in the `d365-agent-odataclient` repository for the exact command and publishing instructions. It will be similar to this:

```bash
# Example assumes d365-agent is a sibling directory
NODE_OPTIONS='--max-old-space-size=8192' npx @sap-cloud-sdk/generator generate-odata-client --input ../d365-agent/asset/d365_metadata.xml --outputDir src --overwrite --skipValidation --packageJson
```
*(Note: `--input` path is relative to `d365-agent-odataclient`. The `--packageJson` flag helps create a package structure)*

#### Prerequisites for Generation (within `d365-agent-odataclient` repo)
*   **Node.js & npm/npx:** Required to run the `npx` command and the generator ([Node.js](https://nodejs.org/)).
*   **Raw OData Metadata:** The raw Dynamics 365 OData metadata file must exist at `../d365-agent/asset/d365_metadata.xml` (relative to the `d365-agent-odataclient` repository). Ensure you have cloned the `d365-agent` repository as a sibling directory.
