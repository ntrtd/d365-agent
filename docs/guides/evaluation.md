# Guide: Evaluation Strategy

This document outlines the strategy for evaluating the Dynamics 365 AI Agent system throughout its development lifecycle to ensure it meets functional requirements, performs reliably, and adheres to safety and quality standards.

## 1. Goals of Evaluation

*   **Functional Correctness:** Verify that the `d365-agent-ui` correctly captures user intent, the `d365-agent-orchestrator` (including Master Orchestrator and Domain-Specific LangGraph Agents) executes the appropriate workflows, and the `d365-agent-mcpserver-dotnet` interacts accurately with Dynamics 365 via MCP tools.
*   **Reliability & Robustness:** Ensure the system handles various inputs, edge cases, and potential errors gracefully across `d365-agent-ui`, `d365-agent-orchestrator`, and `d365-agent-mcpserver-dotnet`.
*   **Performance:** Measure and optimize latency and resource consumption across the UI, orchestrator (LangGraph execution, CopilotKit Runtime), MCP Server, and D365 calls.
*   **Safety & Responsibility:** Assess for potential harms, biases, security vulnerabilities, and ensure adherence to responsible AI principles, especially in LLM interactions and prompt design.
*   **User Satisfaction:** Gauge how effectively the system assists users (internal and external) in completing their tasks through the chosen interfaces.

## 2. Types of Evaluations & Tests

A multi-layered approach is recommended:

1.  **Unit Tests (D365 MCP Server Tools):**
    *   **Location:** `d365-agent-mcpserver-dotnet` repository.
    *   **Focus:** Individual MCP tool logic within the .NET server.
    *   **Method:** Mock D365 OData client calls to test data transformation, business logic, and error handling within each tool.
    *   **Tools:** xUnit/NUnit for .NET.
2.  **Unit Tests (LangGraph Agent Nodes & Orchestration Logic):**
    *   **Location:** `d365-agent-orchestrator` repository.
    *   **Focus:** Individual nodes within Domain-Specific LangGraph Agents, Master Orchestrator routing logic, helper functions, and `d365-agent-mcpclient-ts` interactions.
    *   **Method:** Mock MCP client calls (for `d365-agent-mcpclient-ts`) and external API calls (e.g., OpenAI) to test node logic, state transformations, and conditional transitions.
    *   **Tools:** Jest/Vitest for TypeScript.
3.  **Integration Tests (D365 MCP Server <-> D365):**
    *   **Location:** `d365-agent-mcpserver-dotnet` repository or a dedicated `d365-agent-tests` repo.
    *   **Focus:** Interaction between deployed MCP tools and a D365 sandbox environment.
    *   **Method:** Calling MCP tools via test clients (sending MCP JSON-RPC requests) and verifying D365 state changes or data retrieval.
4.  **Integration Tests (`d365-agent-orchestrator` <-> `d365-agent-mcpserver-dotnet`):**
    *   **Location:** `d365-agent-orchestrator` repository or `d365-agent-tests`.
    *   **Focus:** Communication between LangGraph agents (using `d365-agent-mcpclient-ts`) and the deployed `d365-agent-mcpserver-dotnet`.
    *   **Method:** Triggering LangGraph agent flows that make MCP tool calls and verifying the interactions with a running (potentially mocked D365 backend) MCP Server.
5.  **End-to-End (E2E) Scenario Testing:**
    *   **Location:** Ideally in a dedicated `d365-agent-tests` repository.
    *   **Focus:** Testing complete user scenarios starting from the `d365-agent-ui`, through `d365-agent-orchestrator` (LangGraph agents), to `d365-agent-mcpserver-dotnet` and D365, and back to the UI.
    *   **Method:** Simulating user interactions (text, file uploads, Generative UI interactions) or external triggers, and verifying UI state changes, final outcomes, and D365 side effects.
    *   **Tools:** UI automation frameworks (Playwright, Selenium), API testing tools for external triggers.
6.  **LangGraph Agent Evaluation (using LangSmith):**
    *   **Location:** `d365-agent-orchestrator` (agents configured to use LangSmith).
    *   **Focus:** Detailed tracing of LangGraph executions, performance of individual nodes, LLM call quality, tool usage, and error propagation within agents.
    *   **Method:** Reviewing traces in LangSmith, creating datasets for evaluating specific agent behaviors, and using LangSmith's annotation and monitoring features.
7.  **Prompt / LLM Evaluation (within LangGraph Agents):**
    *   **Location:** `d365-agent-orchestrator` (where LangGraph agents make LLM calls, e.g., for parsing, routing, or generation).
    *   **Focus:** Quality, safety, and effectiveness of LLM prompts and responses used for NLU, response generation, or orchestration decisions.
    *   **Method:** Using evaluation datasets, red-teaming, and metrics (groundedness, relevance, coherence, safety).
    *   **Tools:** Azure AI Studio evaluation features, LangSmith feedback mechanisms, potentially custom scripts/frameworks.
8.  **Performance Testing:**
    *   **Location:** `d365-agent-tests` or dedicated performance testing environment.
    *   **Focus:** Latency, throughput, resource utilization under load for all backend components.
    *   **Method:** Simulate concurrent users/requests targeting `d365-agent-ui` (which calls `d365-agent-orchestrator`).
    *   **Tools:** Azure Load Testing, K6, JMeter. Monitor results via Application Insights and LangSmith.
9.  **Security Testing:**
    *   **Location:** Holistic review, potentially coordinated via the main `d365-agent` project.
    *   **Focus:** Vulnerabilities across all layers (authentication, authorization, data handling, prompt injection).
    *   **Method:** Penetration testing, SAST/DAST scanning, configuration reviews.

## 3. Key Metrics

*   **Functional:** Task Completion Rate, API Success Rate (%), Data Accuracy/Consistency.
*   **LLM Quality:** Groundedness, Relevance, Coherence, Fluency scores.
*   **Performance:** Average/P95 End-to-End Latency, MCP Tool Call Latency, Throughput (requests per second).
*   **Reliability:** Uptime, Error Rates (per component, per flow).
*   **Safety:** Harm detection rates (content filters).
*   **Cost:** Azure resource consumption.
*   **User Satisfaction:** CSAT, qualitative feedback, task success rate (via user studies).

## 4. Methodology & Tooling

*   **Test Datasets:** Maintain curated datasets for different scenarios in a shared location (e.g., `d365-agent-tests`).
*   **CI/CD Integration:** Integrate Unit tests and critical Integration tests into the CI/CD pipelines of `d365-agent-mcpserver-dotnet` and `d365-agent-orchestrator`. Run E2E tests post-deployment or on a schedule.
*   **Manual Review:** Essential for evaluating conversational quality (especially with Generative UI), usability of the `d365-agent-ui`, and complex E2E scenarios.
*   **Telemetry Analysis:** Use Application Insights and LangSmith traces proactively to identify issues and inform testing focus.

## 5. Evaluation Across Implementation Phases (Aligned with Updated Plan)

*   **Phase 1 (Foundation & Core Setup):**
    *   Focus on `d365-agent-mcpserver-dotnet` Unit & Integration tests (D365 connectivity, basic MCP tools).
    *   Basic Unit Tests for placeholder Master Orchestrator and simple Domain-Specific Agent in `d365-agent-orchestrator`.
    *   Initial E2E test: `d365-agent-ui` -> `d365-agent-orchestrator` (simple agent) -> `d365-agent-mcpserver-dotnet` (simple tool) -> UI display of state.
*   **Phase 2 (Initial End-to-End Use Case - PO & Sales Agents):**
    *   Unit Tests for new MCP tools (Purchase, Sales).
    *   Unit Tests for `PurchaseAgent` and `SalesAgent` LangGraph nodes in `d365-agent-orchestrator`.
    *   E2E testing for PO Ingestion and Sales Quote scenarios, including Generative UI interactions and predictive state updates.
    *   Initial Prompt Evaluation for LLM calls within agents.
    *   LangSmith trace review for these agents.
*   **Phase 3 (Expansion & Multi-Instance Support):**
    *   Expand Unit, Integration, and E2E tests for new processes (Purchase Confirmation, Sales Order Management) and multi-instance D365 support.
    *   Test new Generative UI components.
    *   Begin basic Performance testing for key expanded flows.
*   **Phase 4 (Optimization, Self-Learning & Wider Rollout):**
    *   Comprehensive Performance, Security, and E2E testing.
    *   User Acceptance Testing (UAT) with pilot groups focusing on usability of advanced features (Proactivity, Frontend RAG/Actions if implemented).
    *   Ongoing monitoring and evaluation using Application Insights and LangSmith telemetry.
    *   Evaluation of the self-learning loop's effectiveness.

This multi-faceted strategy ensures that the Dynamics 365 AI Agent system is evaluated rigorously throughout its development and operation.
