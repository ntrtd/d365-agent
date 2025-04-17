# Dynamics 365 AI Agent Documentation (Archiverse)

This repository contains the documentation for the design and architecture of an AI-powered agent designed to interact with Microsoft Dynamics 365 using the Model Context Protocol (MCP).

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
│   └── deploy_infra.sh         # Script to deploy Azure infrastructure
├── src/                        # Source code for application components
│   ├── functions/              # Azure Functions code (e.g., Document Parser)
│   └── mcp_hub/                # MCP Hub Service code (e.g., Python/FastAPI)
└── tests/                      # Automated tests
    ├── unit/
    └── integration/
```

**Key Directories:**

*   **`docs/`:** Contains all documentation source files (Markdown). See below for building locally.
*   **`infra/`:** Infrastructure as Code (IaC) templates (e.g., Bicep) for provisioning Azure resources.
*   **`scripts/`:** Utility and deployment scripts (e.g., infrastructure deployment).
*   **`src/`:** Application source code, separated by component (e.g., `mcp_hub`, `functions`).
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
