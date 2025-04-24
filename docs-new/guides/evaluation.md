# Guide: Evaluation Strategy

This document outlines the strategy for evaluating the Dynamics 365 AI Agent system throughout its development lifecycle to ensure it meets functional requirements, performs reliably, and adheres to safety and quality standards.

## 1. Goals of Evaluation

*   **Functional Correctness:** Verify that the agent system correctly understands user intent, executes the appropriate orchestration workflows (AutoGen/DAGs), and interacts accurately with Dynamics 365 and other backend systems via MCP tools.
*   **Reliability & Robustness:** Ensure the system handles various inputs, edge cases, and potential errors gracefully across all components.
*   **Performance:** Measure and optimize the latency and resource consumption of user responses and backend processes (Application Backend, MCP Server, D365 calls).
*   **Safety & Responsibility:** Assess for potential harms, biases, security vulnerabilities, and ensure adherence to responsible AI principles, especially in LLM interactions and prompt design.
*   **User Satisfaction:** Gauge how effectively the system assists users (internal and external) in completing their tasks through the chosen interfaces.

## 2. Types of Evaluations & Tests

A multi-layered approach is recommended:

1.  **Unit Tests (MCP Server Tools):**
    *   **Location:** `d365-agent-mcpserver-*` repositories.
    *   **Focus:** Individual MCP tool logic.
    *   **Method:** Mock D365/external API calls to test data transformation, business logic within the tool, and error handling.
    *   **Tools:** Jest/Vitest (for TS), xUnit/NUnit (for .NET).
2.  **Unit Tests (Orchestration Logic):**
    *   **Location:** `d365-agent-mcpclient-*` repositories or Application Backend repos.
    *   **Focus:** Components of the orchestration logic (specific agent skills if using AutoGen, individual steps in a DAG, helper functions).
    *   **Method:** Mock MCP client calls and test the flow logic, state transitions, and decision-making.
    *   **Tools:** Standard testing frameworks relevant to the implementation language/framework.
3.  **Integration Tests (MCP Server <-> D365):**
    *   **Location:** `d365-agent-mcpserver-*` repositories or a dedicated `d365-agent-tests` repo.
    *   **Focus:** Interaction between MCP tools and a D365 sandbox environment.
    *   **Method:** Calling MCP tools via test clients (sending MCP JSON-RPC requests) and verifying the expected state changes or data retrieval in the D365 sandbox. Requires a configured test environment and service principal.
4.  **Integration Tests (Application Backend <-> MCP Server):**
    *   **Location:** Application Backend repos or `d365-agent-tests`.
    *   **Focus:** Communication between the Application Backend (using the client library) and the deployed MCP Server.
    *   **Method:** Triggering orchestration logic in the Application Backend and verifying that the correct MCP tool calls are made to a running MCP Server instance (which might mock its D365 calls for this test).
5.  **End-to-End (E2E) Scenario Testing:**
    *   **Location:** Ideally in a dedicated `d365-agent-tests` repository.
    *   **Focus:** Testing complete user scenarios from the presentation layer/trigger point through all backend components to D365 and back.
    *   **Method:** Simulating user interactions or triggers based on Use Case Scenarios and verifying the final outcome and side effects in D365.
    *   **Tools:** UI automation frameworks (Playwright, Selenium), API testing tools (Postman scripts), or custom test harnesses.
6.  **Prompt / LLM Evaluation:**
    *   **Location:** Wherever LLM interactions occur (likely Application Backend / `d365-agent-mcpclient-*`).
    *   **Focus:** Quality, safety, and effectiveness of LLM prompts and responses used for NLU, response generation, or orchestration decisions.
    *   **Method:** Using evaluation datasets, red-teaming, and metrics (groundedness, relevance, coherence, safety).
    *   **Tools:** Azure AI Studio evaluation features, potentially custom scripts/frameworks.
7.  **Performance Testing:**
    *   **Location:** `d365-agent-tests` or dedicated performance testing environment.
    *   **Focus:** Latency, throughput, resource utilization under load.
    *   **Method:** Simulate concurrent users/requests targeting Application Backend endpoints.
    *   **Tools:** Azure Load Testing, K6, JMeter. Monitor results via Application Insights.
8.  **Security Testing:**
    *   **Location:** Holistic review, potentially coordinated via `d365-agent`.
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

*   **Test Datasets:** Maintain curated datasets for different scenarios in a shared location (e.g., `d365-agent-tests` or source control alongside tests).
*   **CI/CD Integration:** Integrate Unit tests and critical Integration tests into the CI/CD pipelines of respective repositories (`d365-agent-mcpserver-*`, `d365-agent-mcpclient-*`, etc.). Run E2E tests post-deployment or on a schedule.
*   **Manual Review:** Essential for evaluating conversational quality, identifying usability issues, and assessing complex scenarios not easily automated.
*   **Telemetry Analysis:** Use Application Insights logs and metrics proactively to identify issues and inform testing focus.

## 5. Evaluation Across Implementation Phases (Illustrative)

*(Note: This references the phased approach from the original `docs/implementation` folder, provided here for context on how evaluation focus evolves)*

*   **Phase 1 (Foundation):** Focus on MCP Server Unit & Integration tests (D365 connectivity). Basic E2E tests using test client.
*   **Phase 2 (Initial E2E Use Case):** Add Orchestration Unit Tests. E2E testing for the first scenario. Initial Prompt Evaluation.
*   **Phase 3 (Expansion):** Expand Unit, Integration, and E2E tests for multi-instance and new scenarios. Begin basic Performance testing.
*   **Phase 4 (Optimization):** Comprehensive Performance, Security, and E2E testing. UAT with pilot users. Ongoing monitoring and evaluation using telemetry.

This multi-faceted strategy ensures that the D365 AI Agent system is evaluated rigorously throughout its development and operation.
