# Integration: Azure Services for Containerized Deployment

This guide outlines how Azure services can be leveraged to host and support the Dynamics 365 AI Agent system, focusing on a container-centric deployment model. The core custom-developed components are:
*   **`d365-agent-ui`**: The CopilotKit React frontend.
*   **`d365-agent-orchestrator`**: The Node.js/TypeScript backend hosting the CopilotKit Runtime and LangGraph agents.
*   **`d365-agent-mcpserver-dotnet`**: The .NET Core D365 MCP Server.

## Core Hosting: Azure Container Services

**Azure Container Apps (ACA) or Azure Kubernetes Service (AKS)** are the recommended platforms for deploying all custom application components.

*   **`d365-agent-ui` (Containerized Frontend):**
    *   The React/CopilotKit UI will be built and packaged into a Docker container.
    *   This container can be deployed to ACA for a serverless container experience or to AKS for more complex orchestration.
    *   This approach ensures consistency in deployment across frontend and backend services.

*   **`d365-agent-orchestrator` (Containerized Orchestration Layer):**
    *   The Node.js/TypeScript application hosting the CopilotKit Runtime and LangGraph agents will be containerized.
    *   Deployed to ACA or AKS.

*   **`d365-agent-mcpserver-dotnet` (Containerized D365 MCP Server):**
    *   The .NET Core application serving D365 MCP tools will be containerized.
    *   Deployed to ACA or AKS.

**Benefits of Containerization for All Custom Components:**
*   **Consistency:** Uniform deployment and management across all custom services.
*   **Scalability & Resilience:** Leverage the scaling and self-healing capabilities of ACA/AKS.
*   **Portability:** Docker containers ensure the application runs consistently across different environments.
*   **Microservices Architecture:** Naturally supports a microservices approach where each component (`ui`, `orchestrator`, `mcpserver`) is a distinct, independently deployable and scalable service.

## Supporting Azure Services

While the core application components are containerized, several Azure PaaS services are essential for support and functionality:

*   **Azure Container Registry (ACR):**
    *   Used to store and manage the Docker images for `d365-agent-ui`, `d365-agent-orchestrator`, and `d365-agent-mcpserver-dotnet`.
    *   Integrates with ACA/AKS for image deployment.

*   **Azure OpenAI Service:**
    *   Provides the LLM capabilities for the CopilotKit Runtime and LangGraph agents (e.g., for reasoning, natural language understanding, and direct document content extraction from PDFs by LangGraph agents).

*   **Azure Key Vault:**
    *   Crucial for securely storing and managing all sensitive information:
        *   API keys for Azure OpenAI, LangSmith.
        *   Connection strings or credentials for Dynamics 365 (used by `d365-agent-mcpserver-dotnet`).
        *   Any other secrets required by the applications.
    *   All containerized services should be configured to retrieve secrets from Key Vault using Managed Identities.

*   **Azure Application Insights (and LangSmith):**
    *   **Application Insights:** For end-to-end monitoring, logging, and telemetry across all containerized services (`d365-agent-ui`, `d365-agent-orchestrator`, `d365-agent-mcpserver-dotnet`).
    *   **LangSmith:** Specifically for detailed tracing, debugging, and monitoring of LangGraph agent executions within the `d365-agent-orchestrator`.

*   **Azure Blob Storage (Optional but likely):**
    *   Could be used for:
        *   Temporary storage of uploaded documents (e.g., PO PDFs) before processing by the LangGraph agent.
        *   Storing generated artifacts like XML files before they are picked up by D365 for asynchronous ingestion.

*   **Azure Service Bus / Event Grid (Optional, for advanced scenarios):**
    *   While aiming for simplicity, these services could be introduced if robust, decoupled asynchronous communication patterns are needed between services or for complex event-driven architectures beyond simple API calls. For instance, an Email Ingestion Service (if built as a separate containerized poller) might place messages on a queue for the `d365-agent-orchestrator`.

**Removed/De-emphasized Azure Services (for core application hosting):**

*   **Azure Functions:** Core application logic (UI, orchestrator, MCP server) will be in containers, not Azure Functions. Functions might only be considered for very small, auxiliary, stateless utility tasks if a container is deemed too heavy, but the preference is for containerization.
*   **Azure App Service (Web App PaaS):** The `d365-agent-ui` will be containerized and hosted on ACA/AKS rather than directly as an App Service Web App, to maintain consistency with the backend services' deployment model.
*   **Azure Logic Apps / Power Automate:** For system-to-system integrations like email ingestion, if needed, a custom containerized service would be preferred over Logic Apps/Power Automate to stick to the "containers only" principle for custom code, unless a very simple, no-code integration is sufficient and doesn't introduce significant external dependencies.

## Considerations for a Container-Only Architecture

*   **Dockerfile Management:** Each service (`d365-agent-ui`, `d365-agent-orchestrator`, `d365-agent-mcpserver-dotnet`) will require a well-defined Dockerfile.
*   **CI/CD Pipelines:** Pipelines will need to build Docker images, push them to ACR, and deploy to ACA/AKS.
*   **Networking:** Configuration of networking within ACA/AKS (e.g., VNet integration, ingress controllers) to allow services to communicate with each other and be exposed appropriately.
*   **Configuration Management:** Externalizing configuration for containers (e.g., via environment variables sourced from Key Vault or ACA/AKS configurations).

This container-centric approach simplifies the types of compute services used, focusing on leveraging the power and flexibility of Azure's container platforms for all custom application components.
