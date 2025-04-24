# Your First Agent (Quick Tutorial)

This tutorial guides you through creating a minimal "Hello World" style agent using the D365 Agent SDK.

## 1. Project Setup

[Minimal code required to initialize the SDK in a new project file]
```csharp
// Example C# code
using D365AgentSDK;

// Initialization
var agent = new AgentClient(...);
```

## 2. Defining a Simple Agent Action

[Code to define a basic action or response]
```csharp
// Example C# code
agent.OnIntent("Greeting", (request) => {
    return "Hello from your D365 Agent!";
});
```

## 3. Running the Agent

[Code or command to start the agent application]
```bash
dotnet run
```

## 4. Interacting with the Agent

[Instructions on how to send a request (e.g., via a test client, API call) and expected output]

You should see the response: "Hello from your D365 Agent!"
