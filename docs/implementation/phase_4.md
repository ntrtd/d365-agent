# Phase 4: Optimization, Self-Learning & Wider Rollout

*   **Goal:** Optimize performance of **Domain-Specific LangGraph Agents** (e.g., `PurchaseAgent`, `SalesAgent`) and the **Master Orchestrator Agent** within `d365-agent-orchestrator`, and the `d365-agent-mcpserver-dotnet`. Enhance user experience in `d365-agent-ui` by leveraging advanced CopilotKit features (e.g., more sophisticated Generative UI, Frontend Actions/RAG, `CopilotTask` for proactivity). Implement a self-learning loop using telemetry. Prepare for wider rollout. Consider deeper integration with Copilot Cloud features if applicable.
*   **MVP:** Demonstrable performance improvements for key scenarios. Enhanced UX with at least one proactive feature or advanced Generative UI implemented. A functional self-learning feedback loop generating actionable insights. Successful use by a wider pilot group with stable performance. Readiness for broader deployment, potentially leveraging Copilot Cloud Analytics, Memory, or Guardrails if adopted.

## Task Checklist

-   [ ] **Performance Optimization (D365 MCP Server: [`d365-agent-mcpserver-ts`](https://github.com/ntrtd/d365-agent-mcpserver-ts) OR [`d365-agent-mcpserver-dotnet`](https://github.com/ntrtd/d365-agent-mcpserver-dotnet))**
    -   [ ] Implement caching strategy (Azure Cache for Redis - provisioned via [`d365-agent-infra`](https://github.com/ntrtd/d365-agent-infra)) within the D365 MCP Server implementation.
    -   [ ] Identify and cache frequently accessed, semi-static data (e.g., config, certain master data) fetched by D365 MCP tools.
    -   [ ] Analyze and optimize expensive D365 queries used by D365 MCP tools (leveraging the generated D365 client - TS or C#).
-   [ ] **Performance Optimization (Application Orchestration Layer - Repo: [`d365-agent-orchestrator`](https://github.com/ntrtd/d365-agent-orchestrator))**
    -   [ ] Analyze and optimize LangGraph agent execution paths for common scenarios (both Purchase and Sales agents).
    -   [ ] Optimize interactions between the CopilotKit Runtime and the LangGraph agents within `d365-agent-orchestrator`.
-   [ ] **Self-Learning Loop Implementation**
    -   [ ] Configure Application Insights telemetry export to Azure Data Lake (ensure relevant context from LangGraph agent state (in `d365-agent-orchestrator`), D365 MCP server tool calls, and CopilotKit UI interactions (from `d365-agent-ui`) is logged) (Infra setup in [`d365-agent-infra`](https://github.com/ntrtd/d365-agent-infra)).
    -   [ ] Develop Azure Synapse/Databricks notebook or Azure ML job for analyzing telemetry (potentially separate repo, e.g., `d365-agent-analysis`).
    -   [ ] Implement logic to cluster failures/common patterns across different business processes (LangGraph agents in `d365-agent-orchestrator`) and D365 MCP tools.
    -   [ ] Integrate with Azure OpenAI to generate suggestions for D365 MCP tools (relevant `d365-agent-mcpserver-*` repo) or LangGraph agent logic (within `d365-agent-orchestrator`) based on analysis.
    -   [ ] Set up process for reviewing suggestions and routing them to appropriate development backlogs.
    -   [ ] Schedule and monitor the analysis job.
-   [ ] **User Experience & Proactivity (Application Orchestration Layer in [`d365-agent-orchestrator`](https://github.com/ntrtd/d365-agent-orchestrator) / CopilotKit UI in [`d365-agent-ui`](https://github.com/ntrtd/d365-agent-ui))**
    -   [ ] Refine conversational flows and error message clarity for all Domain-Specific LangGraph Agents and the Master Orchestrator Agent.
    -   [ ] Explore advanced Generative UI patterns for displaying complex status dashboards or interactive reports.
    -   [ ] Investigate and implement 1-2 proactive scenarios using `CopilotTask` or event-driven LangGraph flows (e.g., D365 event triggers agent, which notifies user via UI).
    -   [ ] Evaluate opportunities for Frontend RAG/Actions in `d365-agent-ui` to improve responsiveness for common, simple queries.
    -   [ ] (If using Copilot Cloud) Explore using Copilot Cloud Memory for enhanced personalization and cross-session context.
-   [ ] **Security & Governance**
    -   [ ] Conduct comprehensive security review of the entire architecture.
    -   [ ] Fine-tune permissions and access controls.
    -   [ ] Ensure robust authentication and secure communication.
    -   [ ] (If using Copilot Cloud) Implement and configure Copilot Cloud Guardrails for enhanced safety and compliance.
    -   [ ] Finalize monitoring dashboards and set up alerts for critical issues (via [`d365-agent-infra`](https://github.com/ntrtd/d365-agent-infra) and App Insights config).
-   [ ] **Rollout Preparation**
    -   [ ] Develop user training materials and documentation for the CopilotKit UI (in `d365-agent-ui`) and its features, covering both Purchase and Sales agent functionalities (potentially in [`d365-agent`](https://github.com/ntrtd/d365-agent) repo `docs/`).
    -   [ ] Establish support processes and SLAs.
    -   [ ] Define rollout strategy (e.g., by business process/LangGraph agent, by department).
    -   [ ] Communicate plan and benefits to stakeholders.
-   [ ] **Testing & Validation (Phase 4)**
    *   [ ] Implement comprehensive Performance/Load testing simulating concurrent usage across multiple business processes (Purchase and Sales) via the CopilotKit UI (from `d365-agent-ui`), targeting the Application Orchestration Layer (`d365-agent-orchestrator`) and the deployed D365 MCP Server. (**Test setup TBD, maybe `d365-agent-tests`**)
    *   [ ] Conduct formal Security Testing covering the entire platform.
    *   [ ] Perform large-scale E2E testing covering all major scenarios and edge cases for both Purchase and Sales agents, initiated via the CopilotKit UI (from `d365-agent-ui`). (**Test setup TBD, maybe `d365-agent-tests`**)
    *   [ ] Set up ongoing monitoring of evaluation metrics (accuracy, latency, reliability, safety) using telemetry from all layers.
    *   [ ] Conduct User Acceptance Testing (UAT) with pilot group using the CopilotKit UI (from `d365-agent-ui`) for the range of implemented business processes.
    *   [ ] Collect and analyze user satisfaction feedback.
    *   [ ] Validate self-learning loop effectiveness (are suggestions useful?).
    *   [ ] Final validation against all requirements and exit criteria.
-   [ ] **Pilot Rollout & Monitoring**
    -   [ ] Onboard a larger group of pilot users for the CopilotKit UI (from `d365-agent-ui`) across different business processes (Purchase and Sales).
    -   [ ] Closely monitor performance, usage, errors, and user feedback via Application Insights and logs from CopilotKit UI (from `d365-agent-ui`), Application Orchestration Layer (LangGraph in `d365-agent-orchestrator`), and D365 MCP Server.
    -   [ ] Iterate on fixes and improvements (LangGraph agent logic in `d365-agent-orchestrator`, D365 MCP server tools, CopilotKit UI in `d365-agent-ui`) based on pilot phase monitoring.
    *   [ ] Validate readiness criteria for full deployment.
