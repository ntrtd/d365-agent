# Frontend Integration Strategies

This document explores strategies for building user-facing applications (the **Presentation Layer**) that interact with the Dynamics 365 AI Agent system's **Application Backend** layer. The Application Backend, in turn, uses the **Client Library** (`d365-agent-mcpclient-*`) to orchestrate tasks via the **MCP Server** (`d365-agent-mcpserver-*`).

## 1. Standard Client-Server Architecture

Most frontend integrations will follow a standard client-server pattern:

*   **Frontend (UI):** Built using any web framework (React, Angular, Vue, Blazor), mobile framework, or conversational platform (Microsoft Bot Framework for Teams/Web Chat).
*   **Communication:** The frontend communicates with its dedicated **Application Backend** via standard web protocols (e.g., REST APIs, WebSockets, SignalR).
*   **Backend Responsibility:** The Application Backend handles user authentication, manages UI session state, receives user requests from the frontend, uses the `d365-agent-mcpclient-*` library to perform orchestration (calling MCP tools), and sends formatted responses back to the frontend.

**Examples:**
*   A React SPA calling REST endpoints on an ASP.NET Core Application Backend.
*   A Teams Bot interacting with users and communicating with a Node.js Application Backend (Bot Service).

## 2. Enhanced In-App AI with CopilotKit

For web applications, particularly those built with **React**, **CopilotKit** (`submodules/CopilotKit`) offers a powerful way to build deeply integrated, context-aware AI assistant experiences directly within the frontend.

*   **Role:** CopilotKit bridges the frontend UI and the Application Backend, providing components and hooks to create a seamless "Copilot" experience.
*   **Key Components:**
    *   **Frontend (`@copilotkit/react-core`, `@copilotkit/react-ui`):**
        *   Provides UI components like `<CopilotPopup>`, `<CopilotSidebar>`, `<CopilotTextarea>` for chat interfaces.
        *   Offers hooks like `useCopilotChat` for headless UI integration.
        *   `useCopilotReadable`: Makes frontend state (e.g., data in grids, selected items) available as context to the AI backend.
        *   `useCopilotAction`: Allows the AI backend to define actions that execute *in the frontend* (e.g., update UI state, navigate, highlight elements) and supports **Generative UI** where the AI can render specific React components during its execution flow.
        *   `useCopilotKnowledgebase`: Facilitates frontend-driven RAG.
    *   **Backend (`@copilotkit/backend` - typically Node.js):**
        *   Hosted within your **Application Backend** (e.g., Next.js, Express).
        *   Handles communication with the CopilotKit frontend components/hooks.
        *   Manages the LLM interaction (prompting, function calling).
        *   Crucially, it's within this backend logic that you would integrate the **`d365-agent-mcpclient-ts`** library to call the MCP tools exposed by your `d365-agent-mcpserver-ts`. The results from MCP tool calls are then fed back into the LLM/CopilotKit flow.

*   **Benefits:**
    *   **Rich In-App Experience:** AI assistant feels like part of the application, not a separate bolt-on.
    *   **Frontend Context:** AI understands what the user is seeing and doing in the UI.
    *   **Frontend Actions:** AI can directly manipulate the UI or render relevant components.
    *   **Simplified UI Development:** Pre-built components accelerate chat interface creation.

*   **Considerations:** Primarily designed for React frontends and typically uses a Node.js backend for the `@copilotkit/backend` integration, although other backends might be adaptable.

## 3. Other Integration Patterns

*   **Microsoft Bot Framework:** Ideal for Teams bots, standard web chat widgets, or other conversational channels supported by Bot Framework. The Bot Framework service acts as the Application Backend, using the appropriate `d365-agent-mcpclient-*` library.
*   **Headless Integrations:** For scenarios like email processing or voice gateways, the "frontend" is essentially the integration service itself (e.g., Logic App, Azure Function with ACS). This service acts as the Application Backend, directly using the `d365-agent-mcpclient-*` library to orchestrate tasks based on the incoming data.

## Choosing an Approach

*   For rich, context-aware AI experiences embedded directly within **React web applications**, **CopilotKit** is a strong contender.
*   For **Teams bots** or standard chat scenarios, **Microsoft Bot Framework** is a natural fit.
*   For **other web frameworks** or headless scenarios, a **standard client-server architecture** with custom communication between the frontend and Application Backend is typical.

In all cases, the **Application Backend** remains the central piece that connects the user interface/channel to the orchestration logic provided by the **`d365-agent-mcpclient-*`** library, which in turn communicates with the **`d365-agent-mcpserver-*`** via MCP.
