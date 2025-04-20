# Dynamics 365 AI Agents Documentation (Archiverse)

This repository contains the documentation for the design and architecture of a suite of specialized AI-powered agents (e.g., Sales, Procurement, Finance) designed to interact with Microsoft Dynamics 365 using the Model Context Protocol (MCP).

The documentation is built using [MkDocs](https://www.mkdocs.org/) with the [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/) theme.

## Repository Structure

```
d365-mcp/
├── .github/                    # CI/CD workflows (e.g., GitHub Actions)
│   └── workflows/              # Example: deploy-docs.yml, deploy-infra.yml, deploy-app.yml
├── .gitignore                  # Specifies intentionally untracked files Git should ignore
├── docs/                       # MkDocs documentation source files
│   ├── index.md                # Documentation site landing page
│   ├── business_requirements.md
│   ├── architecture_vision.md
│   ├── business_architecture.md
│   ├── application_architecture.md
│   ├── use_case_scenarios.md
│   └── implementation/         # Implementation plan documents
│       ├── index.md
│       └── phase_1.md - phase_4.md
├── infra/                      # Infrastructure as Code (IaC) files (e.g., Bicep)
│   ├── main.bicep
│   ├── modules/
│   └── parameters/
├── mkdocs.yml                  # MkDocs configuration file
├── README.md                   # This file
├── scripts/                    # Utility and deployment scripts
│   ├── build_agent_clients.sh  # Full setup: Creates dirs, trims metadata, generates OData clients
│   ├── download_d365_metadata.js # Helper to download raw OData metadata (output needs manual move)
│   └── deploy_infra.sh         # Script to deploy Azure infrastructure
├── src/                        # Source code for application components
│   ├── agent/                  # Specialized Agent configurations
│   │   └── flows/              # Agent Flow / Prompt Flow definitions (YAML), organized by agent
│   │       ├── sales/          # Flows for the Sales Agent
│   │       ├── procurement/    # Flows for the Procurement Agent
│   │       ├── finance/        # Flows for the Finance Agent
│   │       └── ...             # etc.
│   ├── functions/              # Shared Azure Functions code (e.g., Document Parser)
│   ├── generated/              # Contains generated code (e.g., OData client)

│   └── mcp_hub/                # Shared MCP Hub Service code (TypeScript)
│       ├── src/                # Hub source code
│       │   ├── agents/         # Agent-specific structures
│       │   │   ├── finance/
│       │   │   └── scm/
│       │   ├── core/           # Core hub logic (e.g., auth)
│       │   ├── d365-client/    # Core hub logic (e.g., auth)
│       │   ├── tools/          # Tool implementations (organized by domain)
│       │   │   ├── finance/
│       │   │   └── scm/
│       │   └── index.ts        # Main MCP server setup
│       ├── package.json
│       └── tsconfig.json
└── tests/                      # Automated tests
    ├── unit/
    └── integration/
```
*(Note: Updated comments slightly to reflect current plan)*

**Key Directories:**

*   **`docs/`:** Contains all documentation source files (Markdown). See below for building locally.
*   **`infra/`:** Infrastructure as Code (IaC) templates (e.g., Bicep) for provisioning Azure resources.
*   **`scripts/`:** Utility and deployment scripts.
*   **`src/`:** Application source code.
    *   `src/agent/`: Specialized agent configurations (e.g., Prompt Flow definitions).
    *   `src/generated/d365-client/`: Location of the primary OData TypeScript client generated using the SAP Cloud SDK generator.
    *   `src/mcp_hub/`: Shared MCP Hub service code. Tool implementations reside under `src/mcp_hub/src/tools/`.
*   **`tests/`:** Automated tests for the application code.
*   **`.github/`:** CI/CD workflow definitions for automating builds, tests, and deployments.

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

1.  **Prerequisites:**
    *   Ensure you have the [Azure CLI](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli) installed and configured.
    *   Log in to Azure: `az login`
    *   Set the desired subscription: `az account set --subscription "<YourSubscriptionId>"`
2.  **Run the deployment script:**
    *   Navigate to the project root directory.
    *   Modify configuration variables (like `LOCATION`) in `scripts/deploy_infra.sh` if needed.
    *   Make the script executable (if not already): `chmod +x scripts/deploy_infra.sh`
    *   Execute the script: `./scripts/deploy_infra.sh`

### OData Client Generation (Using SAP Cloud SDK Generator)

This project uses the **SAP Cloud SDK OData Client Generator** to create a single, comprehensive, type-safe TypeScript client for interacting with the Dynamics 365 OData API, located in `src/generated/d365-client/`. This client is used by all agent tools within the MCP Hub.

**Generation Command:**

To (re)generate this client, run the following command from the project root directory:

```bash
NODE_OPTIONS='--max-old-space-size=8192' npx @sap-cloud-sdk/generator generate-odata-client --input asset/d365_metadata.xml --outputDir packages/client/src --overwrite --skipValidation
```

*(See previous documentation section for detailed explanation of flags)*

#### Prerequisites for Generation
*   **Node.js & npm/npx:** Required to run the `npx` command and the generator ([Node.js](https://nodejs.org/)).
*   **Raw OData Metadata:** The raw Dynamics 365 OData metadata file **must** exist at `asset/d365_metadata.xml`.

#### Note on `scripts/build_agent_clients.sh`
The script `scripts/build_agent_clients.sh` represents an older approach using different tooling (`EDMXTrimmer`, `odata2ts`) to create separate clients per agent. While conceptually aligning with agent separation, this method faced technical difficulties (metadata trimming/parsing issues). The current primary approach uses the single SAP Cloud SDK generated client. The old script and the `src/mcp_hub/src/agents` structure might be removed or refactored in the future.
