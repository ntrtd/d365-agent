# Dynamics 365 AI Agent Documentation (Archiverse)

This repository contains the documentation for the design and architecture of an AI-powered agent designed to interact with Microsoft Dynamics 365 using the Model Context Protocol (MCP).

The documentation is built using [MkDocs](https://www.mkdocs.org/) with the [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/) theme.

## Documentation Structure

All documentation source files are located within the `docs/` directory:

*   `docs/index.md`: The main landing page.
*   `docs/business_requirements.md`: High-level business requirements.
*   `docs/architecture_vision.md`: Overall architectural vision and principles.
*   `docs/business_architecture.md`: As-Is vs. To-Be business architecture.
*   `docs/application_architecture.md`: Detailed application architecture and components.
*   `docs/use_case_scenarios.md`: Illustrative use cases.

## Viewing the Documentation Locally

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
