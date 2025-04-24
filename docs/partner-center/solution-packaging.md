# Partner Guide: Solution Packaging & Distribution

This guide provides recommendations for partners on how to package and distribute solutions that incorporate the D365 Agent SDK.

*(This content replaces the original `sdk_distribution_strategy.md` with a partner focus)*

## Packaging Strategies

*   **Managed Solutions (Dataverse):** If your agent primarily extends D365 functionality, consider packaging relevant configurations or components within a Dataverse managed solution.
    *   [Including custom entities, workflows, security roles, potentially custom connectors used by the agent]
*   **Standalone Applications:** If the agent runs as a separate service (e.g., Azure Function, Web App, Worker Service).
    *   **Deployment Templates:** Providing ARM templates, Bicep files, or Terraform scripts for easy deployment of the agent's infrastructure in the customer's Azure subscription.
    *   **Containerization:** Packaging the agent service as a Docker container for deployment to Azure Container Apps, AKS, or other container orchestrators.
    *   **Installers:** Traditional installers (MSI, etc.) if deploying to on-premises or VM environments.
*   **Combined Approach:** Using a Dataverse solution for D365 customizations and a separate package/template for the agent backend service.

## Configuration Management

*   **Customer-Specific Settings:** Strategies for managing customer-specific configurations (e.g., D365 URL, authentication details).
    *   [Using Azure Key Vault, environment variables, application configuration services]
*   **Setup/Installation Guides:** Providing clear instructions for customers or deployment teams on how to configure the solution post-deployment.

## Updates and Versioning

*   **Versioning Strategy:** Clearly versioning both the SDK dependency and your own solution components.
*   **Update Process:** Defining how updates to the agent service or Dataverse components are deployed to customers.

## Microsoft AppSource / Marketplace (If Applicable)

*   [Considerations for listing your solution on AppSource]
*   [Meeting AppSource requirements]
