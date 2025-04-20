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
│   └── mcp_hub/                # Shared MCP Hub Service code (TypeScript)
│       ├── src/                # Hub source code
│       │   ├── agents/         # Agent-specific tool implementations & OData definitions
│       │   │   ├── sales/      # Contains sales_entity_list.txt, sales_trimmed_metadata.xml, sales_client/
│       │   │   ├── procurement/
│       │   │   ├── finance_accounting/ # Contains finance_accounting_entity_list.txt, etc.
│       │   │   └── ...         # etc.
│       │   ├── shared/         # Tools/utilities shared across agents (e.g., D365 client adapters, auth)
│       │   └── server.ts       # Main MCP server setup
│       ├── package.json
│       └── tsconfig.json
└── tests/                      # Automated tests
    ├── unit/
    └── integration/
```

**Key Directories:**

*   **`docs/`:** Contains all documentation source files (Markdown). See below for building locally.
*   **`infra/`:** Infrastructure as Code (IaC) templates (e.g., Bicep) for provisioning Azure resources.
*   **`scripts/`:** Utility and deployment scripts (e.g., infrastructure deployment).
*   **`src/`:** Application source code. Includes specialized agent configurations (`src/agent/flows/`) and the shared MCP Hub (`src/mcp_hub/`) which itself contains agent-specific tool implementations (`src/mcp_hub/src/agents/`).
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

### Agent Setup and OData Client Generation

This project uses a configuration-driven approach to manage specialized agents and their corresponding OData clients.

**Workflow:**

1.  **Define Agents & Entities:** Create/Edit individual JSON files within the `config/agents/` directory (e.g., `finance_accounting.json`, `sales.json`). Use consistent agent names (e.g., `finance_accounting`, `scm_inventory`, `sales`). Each file must define the agent's `name`, `description`, and include a JSON array named `entities` listing its required OData entities. Update the main `config/agents/agents.config.json` index file to list all agent config filenames.
2.  **Build Agent Clients:** Run the combined build script. This single script reads the configurations, creates agent directories (under `src/agent/flows/` and `src/mcp_hub/src/agents/`), generates agent-prefixed `_entity_list.txt` files, trims the OData metadata using `EDMXTrimmer` (creating `<agent_name>_trimmed_metadata.xml`), and finally generates the type-safe TypeScript clients using `odata-ts` (outputting to `<agent_name>_client/`).
    ```bash
    bash scripts/build_agent_clients.sh
    ```

#### Prerequisites (Before Running `build_agent_clients.sh`)
*   **jq:** Required to parse the JSON configuration files (`brew install jq` or `apt-get install jq`).
*   **.NET SDK:** Required for the `EDMXTrimmer` tool ([.NET 8.0 or later](https://dotnet.microsoft.com/download/dotnet/8.0)).
*   **Node.js & npm:** Required for the `odata-ts` tool ([Node.js](https://nodejs.org/)). Run `npm install` in the project root if needed to install dependencies like `odata-ts`.
*   **Raw OData Metadata:** The raw Dynamics 365 OData metadata file **must** exist at `asset/d365_metadata.xml` (in the project root). This file needs to be obtained manually or through other means and placed in this location before running the script.
*   **EDMXTrimmer Build:** The pre-compiled `EDMXTrimmer` executable must exist at `submodules/EDMXTrimmer/EDMXTrimmer/EDMXTrimmer/bin/Release/net8.0/EDMXTrimmer`. If missing, build the project within the `submodules/EDMXTrimmer/EDMXTrimmer/EDMXTrimmer` directory (`dotnet build -c Release -f net8.0`).
