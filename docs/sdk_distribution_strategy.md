# SDK Distribution Strategy for Partners

This document outlines a strategy for packaging and distributing the components of the Dynamics 365 AI Agent system as an SDK for use by Microsoft partners. The goal is to provide partners with the necessary building blocks, tools, and guidance to create their own customized D365 AI solutions leveraging this architecture.

The SDK offering can be broken down into several key parts:

## 1. Core D365 MCP Server Package

*   **Purpose:** Provide partners with a deployable, extensible MCP server that acts as a standardized gateway to Dynamics 365 operations.
*   **Components & Distribution:**
    *   **Deployable MCP Server Service:**
        *   **Source Repos:** [`d365-agent-mcpserver-ts`](https://github.com/ntrtd/d365-agent-mcpserver-ts) / [`d365-agent-mcpserver-dotnet`](https://github.com/ntrtd/d365-agent-mcpserver-dotnet)
        *   **Packaging:** Distributed primarily as pre-built **container images** (published to a public or partner-accessible container registry like Docker Hub or ACR).
        *   **Functionality:** Includes a core set of pre-built, generic MCP tools covering common read/write operations for key D365 entities (e.g., Customer, Vendor, Product, Sales Order, Purchase Order).
        *   **Configuration:** Designed to be configured extensively via environment variables and/or mounted configuration files (e.g., for target D365 URL, multi-instance routing rules). Integrates with Azure Key Vault for securely retrieving D365 App Registration credentials (Client ID/Secret, Tenant ID).
        *   **Extensibility:** The source code repositories serve as a reference and base for extension. Clear documentation and potentially base classes/interfaces should guide partners on how to add their own custom MCP tools (e.g., for industry-specific logic, custom entities, calling custom D365 services). Partners might fork the repository or potentially use a defined plugin mechanism if implemented in the server design.
    *   **D365 OData Client Generation:**
        *   **Source Repos:** [`d365-agent-odataclient-ts`](https://github.com/ntrtd/d365-agent-odataclient-ts) / [`d365-agent-odataclient-dotnet`](https://github.com/ntrtd/d365-agent-odataclient-dotnet)
        *   **Packaging:** Distributed as **template repositories or scripts** with detailed documentation.
        *   **Usage:** Partners *must* execute the generation process using these templates/scripts against their **own D365 environment metadata**. This ensures the generated client includes any partner/customer-specific customizations (fields, entities). The output is a platform-specific package (npm for TS, NuGet for .NET).
        *   **Integration:** The documentation must clearly explain how the deployed MCP Server container image can consume or be rebuilt with the partner-specific generated OData client package. Options include volume mounting, dynamic loading (if feasible), or rebuilding the server image.
    *   **(Optional) D365 Connector (for System Awareness):**
        *   **Source Repo:** `d365-agent-xpp-extensions` (or the Archiverse equivalent `archiverse-d365-connector`).
        *   **Packaging:** Distributed as **X++ source code** within a D365 F&O model structure.
        *   **Usage:** Partners deploy this model as a **deployable package** to their D365 environment *only if* they require the advanced system awareness features (metadata export, custom config analysis services) discussed previously, potentially integrating with Archiverse.

## 2. Agent Orchestration SDK

*   **Purpose:** Provide partners with libraries, patterns, and samples for building the orchestration logic within their own Application Backends.
*   **Components & Distribution:**
    *   **Client Libraries:**
        *   **Source Repos:** [`d365-agent-mcpclient-ts`](https://github.com/ntrtd/d365-agent-mcpclient-ts) / [`d365-agent-mcpclient-dotnet`](https://github.com/ntrtd/d365-agent-mcpclient-dotnet)
        *   **Packaging:** Published as standard library packages (**npm** for TypeScript, **NuGet** for C#/.NET).
        *   **Functionality:** Provides core MCP client capabilities (connection management, tool discovery, tool invocation). Includes helper functions, base classes, or interfaces to facilitate building orchestration flows (whether using AutoGen, explicit DAGs, state machines, etc.). May offer patterns for error handling, state management, context propagation.
        *   **Extensibility:** Designed to be used *within* partner applications, offering building blocks rather than a complete orchestration engine.
    *   **Sample Application Backends:**
        *   **Source Repo:** Potentially a new `d365-agent-samples` repository or included within the client library repos.
        *   **Packaging:** Distributed as **source code**.
        *   **Functionality:** Provide simple but complete reference implementations (e.g., an Azure Function triggered by HTTP, a basic ASP.NET Core web API, a Node.js Express app) demonstrating:
            *   Referencing and using the Client Library package.
            *   Connecting to a deployed MCP Server instance.
            *   Implementing a simple orchestration flow (e.g., calling `getCustomerByName` then `getCustomerCredit`).
            *   Handling basic requests and formatting responses.

## 3. Infrastructure Templates

*   **Purpose:** Accelerate the deployment of necessary Azure infrastructure for partners.
*   **Components & Distribution:**
    *   **Source Repo:** [`d365-agent-infra`](https://github.com/ntrtd/d365-agent-infra)
    *   **Packaging:** Distributed as **source code** (Bicep/ARM templates, Azure CLI/PowerShell scripts).
    *   **Functionality:** Provide parameterized templates to provision core resources:
        *   Azure Container Apps Environment & Container App (for the MCP Server).
        *   Azure Key Vault (for storing secrets).
        *   Application Insights (for monitoring).
        *   Optionally: Azure Service Bus, Azure Functions host, Azure Data Lake Storage (for more advanced scenarios involving eventing or system awareness features).
    *   **Guidance:** Clear documentation on parameters, prerequisites, and execution steps.

## 4. Documentation

*   **Purpose:** Provide comprehensive guidance covering all aspects of the SDK for partners.
*   **Components & Distribution:**
    *   **Source Repo:** [`d365-agent`](https://github.com/ntrtd/d365-agent) (This repository).
    *   **Packaging:** Published as a static **documentation website** (using MkDocs).
    *   **Content:**
        *   Overall Architecture Overview (explaining components and choices).
        *   Getting Started Guide.
        *   Detailed Deployment Guides (Infrastructure, D365 Connector (Optional), OData Client Generation, MCP Server Container).
        *   Configuration Guide (Key Vault setup, Env Vars for MCP Server).
        *   MCP Server SDK Extensibility Guide (how to add custom tools).
        *   Orchestration SDK Usage Guide (using Client Libraries, implementing flows - AutoGen/DAG examples).
        *   API Reference (for Client Libraries).
        *   Security Considerations.
        *   Monitoring & Troubleshooting Guide.

## Partner Experience Summary

A partner wanting to use this SDK would typically:

1.  Consult the main **Documentation** website.
2.  Use the **Infrastructure Templates** to deploy required Azure resources.
3.  Use the **OData Client Generation** repo/scripts against their D365 instance.
4.  Deploy the core **MCP Server Container Image**, configuring it with their Key Vault details and providing access to their generated OData client package.
5.  *(Optional)* Extend the MCP Server with custom tools if needed.
6.  *(Optional)* Deploy the **D365 Connector** X++ model if system awareness features are desired.
7.  Develop their custom **Application Backend** (Web App, Bot, Function, etc.).
8.  Include the appropriate **Orchestration SDK (Client Library package)** in their backend.
9.  Implement their specific business logic and orchestration flows using the SDK's patterns and capabilities, connecting to their deployed MCP Server.
10. Integrate their backend with their chosen User Interface or system trigger.

This layered approach provides flexibility while offering significant acceleration through pre-built components and clear guidance.
