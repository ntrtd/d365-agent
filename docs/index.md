# Welcome to the Dynamics 365 AI Agent SDK Documentation

This site provides documentation related to the design, architecture, and usage of the Dynamics 365 AI Agent SDK, a system for orchestrating AI-driven interactions with Microsoft Dynamics 365 using the Model Context Protocol (MCP).

## Overview

The goal of the SDK is to enable developers and partners to build applications that automate and assist with a wide range of Dynamics 365 related business processes across different functional areas (e.g., Sales, Procurement, Finance). These applications can serve both internal employees and external partners/customers through various interfaces (Web Chat, Teams, Email, Custom Backends, etc.).

The architecture leverages the standardization and composability offered by MCP for Dynamics 365 interactions, while utilizing modern AI frameworks for the user interface and orchestration.
The primary user interface is built using **CopilotKit** (in the [`d365-agent-ui`](https://github.com/ntrtd/d365-agent-ui) repository). This UI interacts with an **Application Orchestration Layer** (in the [`d365-agent-orchestrator`](https://github.com/ntrtd/d365-agent-orchestrator) repository).
This orchestration layer hosts the **CopilotKit Runtime** and uses **LangGraph** to define and manage stateful business process agents (e.g., for Sales and Purchasing). These LangGraph agents, in turn, use the **D365 MCP Client Library** ([`d365-agent-mcpclient-ts`](https://github.com/ntrtd/d365-agent-mcpclient-ts) or [`d365-agent-mcpclient-dotnet`](https://github.com/ntrtd/d365-agent-mcpclient-dotnet)) to interact with a deployed **D365 MCP Server** ([`d365-agent-mcpserver-ts`](https://github.com/ntrtd/d365-agent-mcpserver-ts) or [`d365-agent-mcpserver-dotnet`](https://github.com/ntrtd/d365-agent-mcpserver-dotnet)). The D365 MCP Server exposes Dynamics 365 business logic as MCP Tools.
This layered approach allows for a rich, interactive user experience via CopilotKit, powerful and flexible process orchestration with LangGraph, and standardized, reusable D365 interactions via the MCP Server.

## Documentation Sections

*   **[Getting Started](./getting-started/index.md):** Instructions for installation, prerequisites, and building your first simple agent application.
*   **[Fundamentals](./fundamentals/index.md):** Core concepts including architecture, key components, and authentication.
*   **[Guides](./guides/index.md):** Practical how-to guides for connecting to D365, building UIs, customizing agents, implementing scenarios, and debugging.
*   **[Integrations](./integrations/index.md):** Details on integrating the SDK with various platforms and services like Power Platform, Bot Framework, Azure Services, and messaging platforms.
*   **[API Reference](./api-reference/index.md):** Detailed reference for the SDK's classes, methods, and interfaces (placeholder).
*   **[Partner Center](./partner-center/index.md):** Information relevant for partners distributing solutions built with the SDK.
*   **[Release Notes](./release-notes/index.md):** Updates and changes across SDK versions (placeholder).

Navigate through the sections using the sidebar or top navigation to explore the different aspects of the SDK.
