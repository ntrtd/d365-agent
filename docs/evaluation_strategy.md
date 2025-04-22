# Evaluation Strategy: Dynamics 365 AI Agent

This document outlines the strategy for evaluating the Dynamics 365 AI Agent throughout its development lifecycle to ensure it meets functional requirements, performs reliably, and adheres to safety and quality standards.

## 1. Goals of Evaluation

*   **Functional Correctness:** Verify that the agent correctly understands user intent, executes the appropriate workflows (Agent Flows/DAGs), and interacts accurately with Dynamics 365 and other backend systems via MCP tools.
*   **Reliability & Robustness:** Ensure the agent handles various inputs, edge cases, and potential errors gracefully.
*   **Performance:** Measure and optimize the latency and resource consumption of agent responses and backend processes.
*   **Safety & Responsibility:** Assess the agent for potential harms, biases, security vulnerabilities, and ensure adherence to responsible AI principles.
*   **User Satisfaction:** Gauge how effectively the agent assists users (internal and external) in completing their tasks.

## 2. Types of Evaluations & Tests

A multi-layered approach will be used:

1.  **Unit Tests (MCP Server Tools - in `d365-agent-mcpserver-*` repos):**
    *   **Focus:** Individual MCP tool implementations within the chosen MCP Server repository ([`d365-agent-mcpserver-ts`](https://github.com/ntrtd/d365-agent-mcpserver-ts) or [`d365-agent-mcpserver-dotnet`](https://github.com/ntrtd/d365-agent-mcpserver-dotnet)).
    *   **Method:** Mocking D365/external API calls to test the tool's logic, data transformation, and error handling in isolation.
    *   **Tools:** Standard unit testing frameworks (e.g., Jest/Vitest for TypeScript, xUnit/NUnit for .NET).
2.  **Integration Tests (MCP Server & D365/APIs):**
    *   **Focus:** Interaction between MCP Server tools (in `d365-agent-mcpserver-*`) and actual backend systems (D365 sandbox, mock external APIs).
    *   **Method:** Calling MCP tools via simulated MCP requests and verifying interactions with the sandbox environment (data created/queried). Requires a configured test environment.
    *   **Tools:** Test clients sending JSON-RPC requests, testing frameworks orchestrating calls within the relevant `d365-agent-mcpserver-*` repo.
3.  **Orchestration Logic Evaluation (Client Library / App Backend):**
    *   **Focus:** The logic and execution path of individual orchestration workflows (AutoGen agents or DAGs) defined within the Client Library ([`d365-agent-mcpclient-ts`](https://github.com/ntrtd/d365-agent-mcpclient-ts) / [`d365-agent-mcpclient-dotnet`](https://github.com/ntrtd/d365-agent-mcpclient-dotnet)) or Application Backend. Testing prompt effectiveness, conditional logic, and tool chaining.
    *   **Method:** Running orchestration flows with predefined test datasets (inputs) and evaluating outputs against expected results or quality metrics. Can mock MCP tool responses initially. Unit tests for specific orchestration components.
    *   **Tools:** Standard testing frameworks, potentially AutoGen testing features, manual review of execution traces. Code-based tests might reside in `d365-agent-mcpclient-*` repos or a dedicated `d365-agent-tests` repo.
4.  **End-to-End (E2E) Scenario Testing:**
    *   **Focus:** Testing complete user scenarios from the presentation layer through all backend components (Application Backend, Client Library, MCP Server, Functions) to D365 and back.
    *   **Method:** Simulating user interactions (chat messages, email submissions) based on the defined Use Case Scenarios and verifying the final outcome (e.g., SO created, correct response provided). Could involve coordinating tests across multiple repos.
    *   **Tools:** Test automation frameworks interacting with UI/APIs (potentially in a dedicated `d365-agent-tests` repo), manual testing based on detailed test cases.
5.  **Prompt Evaluation:**
    *   **Focus:** Assessing the quality, safety, and effectiveness of LLM prompts used within orchestration logic or potentially by MCP server tools.
    *   **Method:** Using prompt variants, red-teaming techniques, and evaluating responses against metrics like groundedness, relevance, coherence, fluency, safety.
    *   **Tools:** Azure AI Studio evaluation features, potentially custom scripts.
6.  **Performance Testing:**
    *   **Focus:** Measuring response latency, throughput, and resource utilization under various load conditions.
    *   **Method:** Using load testing tools to simulate concurrent users/requests targeting the agent endpoint and backend services.
    *   **Tools:** Azure Load Testing, K6, JMeter, etc. Monitoring via Application Insights.
7.  **Security Testing:**
    *   **Focus:** Identifying vulnerabilities related to authentication, authorization, data handling, prompt injection, and interactions with external systems.
    *   **Method:** Penetration testing, security code analysis, review of authentication/authorization configurations (Managed Identity, RBAC).
    *   **Tools:** Static/Dynamic Application Security Testing (SAST/DAST) tools, manual security reviews.

## 3. Key Metrics

*   **Accuracy/Correctness:** Task completion rate, factual accuracy of responses, correctness of data created/updated in D365.
*   **Groundedness (for RAG/Data-based responses):** How well the agent's response is supported by the provided D365 data or documents.
*   **Relevance:** How relevant the agent's response is to the user's query.
*   **Coherence/Fluency:** Quality of the natural language generation.
*   **Latency:** End-to-end response time, time taken per tool call/flow step.
*   **Reliability:** Success rate of flows/tool calls, robustness to invalid inputs or errors.
*   **Safety:** Detection rate of harmful content generation or jailbreak attempts.
*   **Cost:** Azure resource consumption per transaction/interaction.
*   **User Satisfaction:** Qualitative feedback, CSAT scores (if implemented).

## 4. Methodology & Tooling

*   **Test Datasets:** Curated datasets representing diverse inputs, edge cases, and expected outputs for different scenarios and flows will be created and maintained (potentially in a dedicated `d365-agent-tests` repo or alongside the orchestration logic).
*   **CI/CD Integration:** Unit tests and potentially integration tests will be integrated into the CI/CD pipelines within their respective repositories (`d365-agent-mcpserver-*`, `d365-agent-mcpclient-*`, etc.) to ensure code quality and prevent regressions. E2E tests (potentially in `d365-agent-tests`) might run on a schedule or trigger deployments.
*   **Manual Review:** Regular manual review of interactions, orchestration traces (e.g., AutoGen logs, App Insights), and evaluation results will be necessary, especially for subjective quality metrics and identifying nuanced failures.
*   **Telemetry Analysis:** Use Application Insights and potentially the self-learning loop analysis (Phase 4) to identify common failure patterns or areas needing improvement, feeding back into test case creation and development priorities within the relevant repositories (`d365-agent-mcpserver-*`, `d365-agent-mcpclient-*`).

## 5. Evaluation Across Phases

*   **Phase 1:** Focus on Unit Tests for MCP Server tools and basic Integration Tests confirming MCP communication and D365 sandbox connectivity (in chosen `d365-agent-mcpserver-*` repo). Basic E2E tests using test client.
*   **Phase 2:** Add Unit Tests for orchestration logic (in `d365-agent-mcpclient-*` / App Backend). Implement more comprehensive Integration Tests for the scenario's MCP tools. Start formal E2E scenario testing.
*   **Phase 3:** Expand orchestration tests and E2E tests to cover the new business process and multi-instance scenarios. Begin basic Performance testing.
*   **Phase 4:** Implement comprehensive Performance testing. Formalize Security testing. Establish processes for ongoing evaluation using telemetry and the self-learning loop feedback. Conduct user satisfaction surveys during pilot rollout.

This strategy provides a framework for continuous evaluation, ensuring the agent is built and maintained to a high standard of quality, reliability, and effectiveness.
