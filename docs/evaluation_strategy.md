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

1.  **Unit Tests (MCP Hub Tools):**
    *   **Focus:** Individual MCP tool implementations within the Hub service (`src/mcp_hub/`).
    *   **Method:** Mocking D365/external API calls to test the tool's logic, data transformation, and error handling in isolation.
    *   **Tools:** Standard unit testing frameworks (e.g., `pytest` for Python).
2.  **Integration Tests (MCP Hub & D365/APIs):**
    *   **Focus:** Interaction between MCP Hub tools and actual backend systems (D365 sandbox, mock external APIs).
    *   **Method:** Calling MCP tools via simulated MCP requests and verifying interactions with the sandbox environment (data created/queried). Requires a configured test environment.
    *   **Tools:** Test clients sending JSON-RPC requests, potentially `pytest` orchestrating calls.
3.  **Agent Flow / DAG Evaluation (Azure AI Studio / SDK):**
    *   **Focus:** The logic and execution path of individual Agent Flows/DAGs defined in YAML. Testing prompt effectiveness, conditional logic, and tool chaining within the flow.
    *   **Method:** Running flows with predefined test datasets (inputs) and evaluating outputs against expected results or quality metrics. Can mock MCP tool responses initially.
    *   **Tools:** Azure AI Studio's Prompt Flow evaluation features, Azure AI SDK for programmatic testing, manual review of execution traces.
4.  **End-to-End (E2E) Scenario Testing:**
    *   **Focus:** Testing complete user scenarios from the presentation layer through all backend components to D365 and back.
    *   **Method:** Simulating user interactions (chat messages, email submissions) based on the defined Use Case Scenarios and verifying the final outcome (e.g., SO created, correct response provided).
    *   **Tools:** Test automation frameworks interacting with UI/APIs, manual testing based on detailed test cases.
5.  **Prompt Evaluation:**
    *   **Focus:** Assessing the quality, safety, and effectiveness of LLM prompts used within Agent Flows.
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

*   **Test Datasets:** Curated datasets representing diverse inputs, edge cases, and expected outputs for different scenarios and flows will be created and maintained (potentially in `tests/data/`).
*   **Azure AI Studio:** Leveraged extensively for prompt engineering, flow development, and running evaluations (especially for metrics like groundedness, relevance, coherence, fluency using built-in or custom evaluators).
*   **CI/CD Integration:** Unit tests and potentially integration tests will be integrated into the CI/CD pipeline (`.github/workflows/`) to ensure code quality and prevent regressions. E2E tests might run on a schedule or trigger specific deployments.
*   **Manual Review:** Regular manual review of agent conversations, flow traces (in AI Studio/App Insights), and evaluation results will be necessary, especially for subjective quality metrics and identifying nuanced failures.
*   **Telemetry Analysis:** Use Application Insights and potentially the self-learning loop analysis (Phase 4) to identify common failure patterns or areas needing improvement, feeding back into test case creation and development priorities.

## 5. Evaluation Across Phases

*   **Phase 1:** Focus on Unit Tests for MCP tools and basic Integration Tests confirming MCP communication and D365 sandbox connectivity. Manual E2E via chat.
*   **Phase 2:** Add Agent Flow evaluations for the MVP scenario using test datasets in AI Studio. Implement more comprehensive Integration Tests for the scenario's tools. Start formal E2E scenario testing.
*   **Phase 3:** Expand Flow evaluations and E2E tests to cover the new business process and multi-instance scenarios. Begin basic Performance testing.
*   **Phase 4:** Implement comprehensive Performance testing. Formalize Security testing. Establish processes for ongoing evaluation using telemetry and the self-learning loop feedback. Conduct user satisfaction surveys during pilot rollout.

This strategy provides a framework for continuous evaluation, ensuring the agent is built and maintained to a high standard of quality, reliability, and effectiveness.
