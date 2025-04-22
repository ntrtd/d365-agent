# Welcome to the Dynamics 365 Orchestration Documentation

This site provides documentation related to the design and architecture of a system for orchestrating AI-driven interactions with Microsoft Dynamics 365 using the Model Context Protocol (MCP).

## Overview

The goal is to enable the automation and assistance of a wide range of Dynamics 365 related business processes across different functional areas (e.g., Sales, Procurement, Finance). This system serves both internal employees and external partners/customers through various application interfaces (Web Chat, Teams, Email, etc.).

The architecture leverages the standardization and composability offered by MCP, while allowing flexibility in implementation technology (TypeScript or C#/.NET). **Application Backends** (specific to each user interface/channel) use the appropriate **Client Library** ([`d365-agent-mcpclient-ts`](https://github.com/ntrtd/d365-agent-mcpclient-ts) or [`d365-agent-mcpclient-dotnet`](https://github.com/ntrtd/d365-agent-mcpclient-dotnet)) to orchestrate workflows (using AutoGen or DAGs). These libraries act as MCP Clients, interacting with the deployed **MCP Server** ([`d365-agent-mcpserver-ts`](https://github.com/ntrtd/d365-agent-mcpserver-ts) or [`d365-agent-mcpserver-dotnet`](https://github.com/ntrtd/d365-agent-mcpserver-dotnet)), which exposes D365 business logic as MCP Tools. This allows different application interfaces to integrate seamlessly with Dynamics 365 capabilities in a standardized way, regardless of the underlying language used for the server or client components.

## Documentation Sections

*   **[Business Requirements](business_requirements.md):** High-level requirements outlining the general capabilities desired.
*   **Architecture:**
    *   **[Vision](architecture_vision.md):** The overall architectural vision, guiding principles, and component overview.
    *   **[Business Architecture (As-Is vs To-Be)](business_architecture.md):** Contrasting the current state with the future state enabled by the orchestrated system.
    *   **[Application Architecture](application_architecture.md):** Detailed breakdown of the software components, their responsibilities, and interactions.
*   **[Use Case Scenarios](use_case_scenarios.md):** Illustrative examples of how the system can be used by different users for various tasks via different application backends.
*   **Implementation Plan:**
    *   **[Phase 1: Foundation & Core Setup](implementation/phase_1.md)**
    *   **[Phase 2: Initial End-to-End Use Case](implementation/phase_2.md)**
    *   **[Phase 3: Expansion & Multi-Instance Support](implementation/phase_3.md)**
    *   **[Phase 4: Optimization, Self-Learning & Wider Rollout](implementation/phase_4.md)**
*   **[D365 OData Client Usage](sap_sdk_client_usage.md):** Details on using the generated D365 OData client (TS or C#) within the MCP Server implementations.
*   **[Evaluation Strategy](evaluation_strategy.md):** How the system components and workflows will be tested and evaluated.


Navigate through the sections using the top navigation bar to explore the different aspects of the proposed solution.
