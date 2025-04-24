# Fundamentals

This section covers the core concepts, goals, and architecture of the Dynamics 365 AI Agent SDK system.

## Overview & Goals

The primary goal of this system is to enable the **automation and intelligent assistance** of a wide range of Dynamics 365 related business processes. It aims to serve both **internal employees** and **external partners/customers** through various application interfaces (Web Chat, Teams, Email, custom applications, etc.).

Key business capabilities enabled by this architecture include:

*   **Multi-Channel Accessibility:** Interact via chat, voice, email, and other integrated channels.
*   **Data Ingestion & Understanding:** Process structured data, unstructured text, and documents (like PDFs).
*   **Cross-Module & Multi-Instance Interaction:** Query data and execute transactions across D365 Finance, Supply Chain, Sales (CE/Dataverse), etc., and support multiple D365 instances/companies.
*   **Intelligent Mapping:** Resolve external identifiers (e.g., customer part numbers) to internal D365 records.
*   **Business Rule Enforcement:** Apply validation and business logic consistently during processes.
*   **External System Integration:** Connect with third-party services (e.g., shipping carriers, payment gateways) via MCP tools.
*   **Complex Workflow Orchestration:** Execute multi-step processes with decision-making and error handling.
*   **Contextual Awareness:** Adapt behavior based on user identity (internal/external) and context.
*   **Notifications & Feedback:** Provide clear confirmations and handle errors gracefully.
*   **Observability & Learning:** Ensure processes are traceable and incorporate mechanisms for improvement.

The system leverages the **Model Context Protocol (MCP)** for standardized communication between the orchestration layer (Application Backends using Client Libraries) and the D365 interaction layer (MCP Server).

## Key Documentation

*   **[Architecture](./architecture.md):** The overall architectural vision and guiding principles.
*   **[Key Components](./key-components.md):** Detailed breakdown of the software components, their responsibilities, and interactions.
*   **[Authentication](./authentication.md):** Security and authentication strategies used between components.
