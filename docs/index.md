# Welcome to the Dynamics 365 AI Agent SDK Documentation

This site provides documentation related to the design, architecture, and usage of the Dynamics 365 AI Agent SDK, a system for orchestrating AI-driven interactions with Microsoft Dynamics 365 using the Model Context Protocol (MCP).

## Overview

The goal of the SDK is to enable developers and partners to build applications that automate and assist with a wide range of Dynamics 365 related business processes across different functional areas (e.g., Sales, Procurement, Finance). These applications can serve both internal employees and external partners/customers through various interfaces (Web Chat, Teams, Email, Custom Backends, etc.).

The architecture leverages modern AI frameworks for a rich user interface and sophisticated orchestration, while using the Model Context Protocol (MCP) for standardized and composable Dynamics 365 interactions.

The system comprises several key components:
*   A **User Interface (`d365-agent-ui`)** built with **CopilotKit** (React/TypeScript), providing an interactive chat experience with features like Generative UI and real-time state display.
*   An **Application Orchestration Layer (`d365-agent-orchestrator`)** built with Node.js/TypeScript. This layer hosts:
    *   The **CopilotKit Runtime**, which manages UI communication and the agent lifecycle.
    *   **LangGraph (TypeScript)** agents, typically structured with a **Master Orchestrator Agent** for intent recognition and routing, and various **Domain-Specific Agents** (e.g., for Sales, Purchasing, CTS Orders) that manage the detailed business process logic.
*   These LangGraph agents use the **`d365-agent-mcpclient-ts`** (TypeScript) library to call tools.
*   A **D365 MCP Server (`d365-agent-mcpserver-dotnet`)** built with .NET Core. This server exposes Dynamics 365 business logic as MCP Tools and uses the `d365-agent-odataclient-dotnet` (C#) for D365 data operations.

This layered approach allows for a rich, interactive user experience via CopilotKit, powerful and flexible process orchestration with LangGraph, and standardized, reusable D365 interactions via the .NET MCP Server. The system is designed for modularity and can optionally integrate with services like Copilot Cloud for enhanced capabilities.

## Documentation Sections

*   **[Getting Started](./getting-started/index.md):** Detailed instructions for prerequisites, installing all components (`d365-agent-ui`, `d365-agent-orchestrator`, `d365-agent-mcpserver-dotnet`), and building your first simple LangGraph-based agent interaction.
*   **[Fundamentals](./fundamentals/index.md):** Core concepts including the detailed system architecture (with diagrams), key component responsibilities, and authentication strategies.
*   **[Guides](./guides/index.md):** Practical how-to guides for connecting to D365 via the MCP Server, building UIs with CopilotKit (including Generative UI and Frontend OS features), customizing LangGraph agents, implementing end-to-end scenarios, debugging, logging (with LangSmith), and evaluation.
*   **[Integrations](./integrations/index.md):** Details on integrating the SDK with various platforms and services like Power Platform, Bot Framework, Azure Services, and messaging platforms.
*   **[API Reference](./api-reference/index.md):** Detailed reference for the SDK's classes, methods, and interfaces (placeholder).
*   **[Partner Center](./partner-center/index.md):** Information relevant for partners distributing solutions built with the SDK.
*   **[Release Notes](./release-notes/index.md):** Updates and changes across SDK versions (placeholder).

Navigate through the sections using the sidebar or top navigation to explore the different aspects of the SDK.
