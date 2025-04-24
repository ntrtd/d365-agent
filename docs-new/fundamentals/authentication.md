# Authentication

The D365 Agent SDK needs to authenticate securely with your Dynamics 365 environment to access data and perform actions. This document outlines the supported authentication mechanisms.

## Supported Methods

*   **Application User / Service Principal:** [Recommended for backend services]
    *   [Steps to register an app in Azure AD / Entra ID]
    *   [How to configure the SDK with App ID, Secret/Certificate, Tenant ID]
    *   [Required API permissions]
*   **Delegated User Permissions:** [For scenarios running under a specific user context, if applicable]
    *   [Authentication flow (e.g., OAuth 2.0 authorization code flow)]
    *   [How the SDK handles token acquisition and refresh]
*   **Other Methods:** [Any other supported methods, e.g., connection strings (use with caution)]

## Configuration

[Code examples showing how to provide authentication credentials to the SDK during initialization]

```csharp
// Example C# configuration
var authSettings = new AuthenticationSettings {
    ClientId = "...",
    ClientSecret = "...",
    TenantId = "...",
    D365Url = "https://yourorg.crm.dynamics.com"
};
var agentClient = new AgentClient(authSettings);
```

## Security Best Practices

[Recommendations for securely storing credentials, managing permissions, etc.]
