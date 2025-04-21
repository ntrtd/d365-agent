# Dynamics 365 AI Agents Documentation (Archiverse)

This repository (`d365-agent`) serves as the central documentation hub for the design and architecture of a suite of specialized AI-powered agents interacting with Microsoft Dynamics 365 via the Model Context Protocol (MCP).

**The project is structured across multiple repositories:**

*   **`d365-agent` (This Repo):** Contains the core documentation (built with MkDocs), shared assets (like OData metadata), and utility scripts.
*   **`d365-agent-infra`:** Contains the Infrastructure as Code (IaC) files (e.g., Bicep) for deploying Azure resources.
*   **`d365-agent-odataclient`:** Contains the generated TypeScript OData V4 client (using SAP Cloud SDK generator) for interacting with Dynamics 365. Published as a package.
*   **`d365-agent-hub`:** Contains the source code for the shared MCP Hub service (TypeScript/Node.js), including tool implementations. Depends on the `d365-agent-odataclient` package.
*   **`d365-agent-service`:** Contains the configurations for the specialized AI Agents (e.g., Agent Flow / Prompt Flow definitions in YAML).
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
├── config/                     # Agent configuration examples (may move to d365-agent-service)
│   └── agents/
├── docs/                       # MkDocs documentation source files
│   ├── index.md
│   ├── business_requirements.md
│   ├── architecture_vision.md
│   ├── business_architecture.md
│   ├── application_architecture.md
│   ├── use_case_scenarios.md
│   └── implementation/
│       ├── index.md
│       └── phase_1.md - phase_4.md
├── mkdocs.yml                  # MkDocs configuration file
├── README.md                   # This file
└── scripts/                    # Utility scripts (e.g., client generation trigger, metadata download)
    ├── build_agent_clients.sh  # (May become deprecated or repurposed)
    ├── download_d365_metadata.js
    └── deploy_infra.sh         # (Will likely move to d365-agent-infra)
```

**Key Directories in this Repo:**

*   **`docs/`:** Contains all documentation source files (Markdown). See below for building locally.
*   **`asset/`:** Holds shared assets like the raw Dynamics 365 OData metadata file (`d365_metadata.xml`) used as input for client generation in the `d365-agent-odataclient` repository.
*   **`scripts/`:** Utility and deployment scripts relevant to documentation or shared tasks (e.g., metadata download). Some scripts might be moved to their relevant repositories (e.g., `deploy_infra.sh` to `d365-agent-infra`).
*   **`config/`:** Contains example configurations, potentially moving to `d365-agent-service`.
*   **`.github/`:** CI/CD workflows relevant to this documentation repository.

## Related Repositories

*   **Infrastructure:** `d365-agent-infra`
*   **OData Client:** `d365-agent-odataclient`
*   **MCP Hub Service:** `d365-agent-hub`
*   **Agent Service Config:** `d365-agent-service`

## Development Setup

### Viewing the Documentation Locally

1.  **Install dependencies:**
    *   Ensure you have Python installed.
    *   Install MkDocs and the Material theme:
        ```bash
        pip install mkdocs mkdocs-material pymdown-extensions
        ```
2.  **Serve the documentation:**
    *   Navigate to the project root directory (`d365-mcp`) in your terminal.
    *   Run the MkDocs development server:
        ```bash
        mkdocs serve
        ```
    *   Open your web browser and go to `http://127.0.0.1:8000`.

The site will automatically rebuild and reload when you save changes to the documentation files or the `mkdocs.yml` configuration file.

### Deploying Infrastructure

Infrastructure deployment is now managed within the **`d365-agent-infra`** repository. Please refer to the README in that repository for instructions. The `scripts/deploy_infra.sh` script in *this* repository may be outdated or removed.

### OData Client Generation (Using SAP Cloud SDK Generator)

The type-safe OData TypeScript client is generated and managed within the dedicated **`d365-agent-odataclient`** repository. It uses the `asset/d365_metadata.xml` file from *this* (`d365-agent`) repository as input. The generated client is intended to be published as an npm package for consumption by the `d365-agent-hub`.

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

#### Note on `scripts/build_agent_clients.sh`
The `scripts/build_agent_clients.sh` script in *this* repository is likely deprecated. Client generation is handled by the SAP Cloud SDK generator within the `d365-agent-odataclient` repository.
