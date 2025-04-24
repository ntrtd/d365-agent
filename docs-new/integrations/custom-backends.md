# Integration: Custom Backends (Headless)

Use the D365 Agent SDK within your custom backend applications, services, or daemons for non-interactive, server-to-server automation scenarios.

*(This covers scenarios previously mentioned in `headless.md` and `standard_client_server.md`)*

## Hosting Options

*   **ASP.NET Core Worker Service:** Ideal for long-running background tasks in .NET.
*   **Windows Service / Linux Daemon:** Traditional background service implementations.
*   **Console Application:** For scheduled tasks or manually triggered processes.
*   **Within Existing Backend APIs:** Integrating SDK logic into existing API applications (e.g., ASP.NET Core Web API, Node.js/Express).

## Implementation Patterns

1.  **Initialization:** Configure and instantiate the `AgentClient` at application startup (often as a singleton).
2.  **Triggering Logic:** Determine how agent actions are triggered (e.g., timers, message queue listeners, internal application events, API calls).
3.  **Executing Agent Actions:** Invoke `AgentClient` methods within your backend logic.
4.  **Handling Results:** Process the results returned by the agent (e.g., update database records, send notifications, call other services).

```csharp
// Example C# in an ASP.NET Core Worker Service
public class AgentWorker : BackgroundService
{
    private readonly ILogger<AgentWorker> _logger;
    private readonly AgentClient _agentClient;

    public AgentWorker(ILogger<AgentWorker> logger, AgentClient agentClient)
    {
        _logger = logger;
        _agentClient = agentClient;
    }

    protected override async Task ExecuteAsync(CancellationToken stoppingToken)
    {
        while (!stoppingToken.IsCancellationRequested)
        {
            _logger.LogInformation("Worker running at: {time}", DateTimeOffset.Now);

            // Example: Trigger agent action based on some condition or schedule
            var result = await _agentClient.PerformBackgroundTaskAsync("ProcessOverdueInvoices");
            _logger.LogInformation("Agent task completed: {result}", result.Status);

            await Task.Delay(TimeSpan.FromMinutes(60), stoppingToken); // Wait for the next interval
        }
    }
}
```

## Considerations

*   **Authentication:** Use Application Permissions / Service Principal for secure, non-interactive authentication.
*   **Configuration Management:** Securely manage D365 connection details and SDK settings.
*   **Error Handling and Retries:** Implement robust error handling for background processes.
*   **Logging and Monitoring:** Essential for observing the behavior of headless agents.
