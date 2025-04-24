# Integration: Bot Framework

Leverage the D365 Agent SDK within Microsoft Bot Framework bots to combine conversational capabilities with direct Dynamics 365 interaction.

*(This content will eventually incorporate details from the original `docs/integrations/bot_framework.md`)*

## Architecture Patterns

*   **Skill Bot:** Using the D365 Agent as a Bot Framework Skill called by a parent bot.
*   **Direct Integration:** Incorporating the D365 Agent SDK directly into the Bot Framework bot's logic (e.g., within dialogs or activity handlers).

## Implementation Steps (Direct Integration Example)

1.  **Install SDK:** Add the D365 Agent SDK package to your Bot Framework project.
2.  **Initialize Agent Client:** Configure and instantiate the `AgentClient` (likely as a singleton service).
3.  **Inject Agent Client:** Make the `AgentClient` available to your bot's dialogs or activity handlers via dependency injection.
4.  **Call Agent Actions:** Within your bot logic (e.g., when a specific intent is recognized), invoke methods on the `AgentClient` to interact with D365.
    ```csharp
    // Example C# within a Bot Framework Dialog
    private readonly AgentClient _agentClient;

    public MyDialog(AgentClient agentClient) {
        _agentClient = agentClient;
    }

    private async Task<DialogTurnResult> ProcessUserRequestAsync(WaterfallStepContext stepContext, CancellationToken cancellationToken) {
        // ... get user input ...
        var agentResponse = await _agentClient.ProcessRequestAsync(userInput);
        await stepContext.Context.SendActivityAsync(MessageFactory.Text(agentResponse.Message), cancellationToken);
        return await stepContext.EndDialogAsync(null, cancellationToken);
    }
    ```

## Considerations

*   **Authentication:** Ensure the Bot Framework application has the necessary permissions (likely using Application Permissions / Service Principal) to call D365 via the SDK.
*   **State Management:** Coordinate state between the Bot Framework's conversation state and any state maintained by the D365 Agent SDK.
*   **Mapping Bot Intents to Agent Actions:** Design how user utterances recognized by the bot trigger specific agent capabilities.
