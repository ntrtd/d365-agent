# Chatbot Template with Vercel AI SDK

**Vercel's AI Chatbot** template (`submodules/ai-chatbot`) provides a full-stack, open-source starting point for building a standalone chatbot application. It leverages Next.js and the Vercel AI SDK.

*   **Role:** Offers a complete reference implementation for a modern chatbot UI and its corresponding backend logic, particularly well-suited for deployment on the Vercel platform.
*   **Key Components & Integration:**
    *   **Frontend:**
        *   Built with **Next.js App Router** and React.
        *   Uses UI components from **`shadcn/ui`** styled with Tailwind CSS.
        *   Utilizes Vercel AI SDK frontend hooks (e.g., `useChat`) to manage the chat interface state, user input, and streaming responses.
    *   **Backend (within Next.js):**
        *   Leverages Next.js server-side features (Server Components, Server Actions, API Routes).
        *   Hosts the **Vercel AI SDK backend logic**, responsible for interacting with the chosen Large Language Model (LLM).
        *   Supports LLM **tool/function calling**.
        *   **Integration Point:** The backend code (e.g., within an API Route or Server Action handling the Vercel AI SDK's `experimental_onFunctionCall` or similar mechanism) needs to integrate the **`d365-agent-mcpclient-ts`** library. When the LLM requests a D365-specific tool call:
            1.  The backend intercepts the tool call request from the Vercel AI SDK.
            2.  It uses `d365-agent-mcpclient-ts` to connect to the deployed `d365-agent-mcpserver-ts` instance.
            3.  It executes the corresponding MCP tool with the provided arguments.
            4.  It receives the result from the MCP server.
            5.  It formats this result and returns it to the Vercel AI SDK to provide back to the LLM.
    *   **Optional Features:** The template includes examples for persistence (Neon Postgres), authentication (Auth.js), and file storage (Vercel Blob).

*   **Strengths:**
    *   **Complete Template:** Provides a ready-to-deploy starting point for a chatbot.
    *   **Modern Stack:** Uses popular and efficient technologies (Next.js App Router, Vercel AI SDK, shadcn/ui).
    *   **Vercel Ecosystem:** Optimized for deployment on Vercel.
    *   **Tool Calling:** Natively supports the function/tool calling required to interact with external systems like our MCP server.

*   **Considerations:** Primarily geared towards building a standalone chat application rather than deeply embedding AI into existing complex UI elements like CopilotKit. Assumes a preference for the Vercel AI SDK and Next.js framework.
