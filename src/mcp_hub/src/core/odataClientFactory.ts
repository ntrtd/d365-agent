import { FetchClient, FetchRequestConfig } from "@odata2ts/http-client-fetch";
import { getD365AuthToken, getD365Url } from "./auth";

// Import generated service clients for each agent/module as needed
// Specify the type argument for the client
import { MicrosoftDynamicsDataEntitiesService as FinanceServiceType } from "../agents/finance_accounting/finance_accounting_client/MicrosoftDynamicsDataEntitiesService";
import { MicrosoftDynamicsDataEntitiesService as ScmServiceType } from "../agents/scm_inventory/scm_inventory_client/MicrosoftDynamicsDataEntitiesService";
// Add other service imports here...

// Define alias types with the http client type applied
type FinanceService = FinanceServiceType<FetchClient>;
type ScmService = ScmServiceType<FetchClient>;

// Define supported agent types
type SupportedAgent = "finance_accounting" | "scm_inventory"; // Add others as needed

// Type definition for the factory options
interface ODataClientFactoryOptions {
    company?: string; // Optional company context for requests
}

/**
 * Factory function to create and configure an OData service client for a specific D365 module/agent.
 * Handles authentication and base URL configuration.
 * Follows the pattern: new GeneratedService(new ConfiguredHttpClient(), baseUrl)
 *
 * @param agentName The key identifying the agent/module client to create.
 * @param options Optional configuration like company context.
 * @returns An instance of the requested generated OData service client.
 */
 // Update Promise return type to use aliased types
export async function createODataClient<T extends SupportedAgent>(
    agentName: T,
    options?: ODataClientFactoryOptions
): Promise<T extends "finance_accounting" ? FinanceService : T extends "scm_inventory" ? ScmService : never>
{
    console.log(`Creating OData client for agent: ${agentName}, company: ${options?.company || 'default'}`);

    const d365BaseUrl = await getD365Url();
    const authToken = await getD365AuthToken();
    const company = options?.company; // Keep company for potential later use in query params

    // Define default headers for all requests made by this client instance
    const defaultHeaders: HeadersInit = {
        Authorization: `Bearer ${authToken}`,
        Accept: 'application/json',
        'OData-MaxVersion': '4.0',
        'OData-Version': '4.0',
        // Content-Type is usually set per request (GET vs POST/PATCH) by the library,
        // but we can set a default if needed, especially for POST/PATCH.
        // 'Content-Type': 'application/json',
    };

    // Configure the FetchClient with default headers via the config argument
    const defaultConfig: FetchRequestConfig = {
        headers: defaultHeaders,
        // Other RequestInit defaults like 'credentials', 'cache' could be set here if needed
    };

    // Instantiate FetchClient with the default configuration
    const fetchClient: FetchClient = new FetchClient(defaultConfig);

    // Note: Handling cross-company=true needs to be done per-request now,
    // potentially via the params option in the requestConfig passed to query methods,
    // or if the generated client doesn't support it, by manipulating the URL *before* calling the service method.
    // We remove the automatic URL manipulation from the factory.

    // Instantiate the correct generated service based on agentName, passing the configured client and base URL
    const serviceBasePath = d365BaseUrl + "/data"; // Base path for D365 FO

    switch (agentName) {
        case "finance_accounting":
            console.log(`Instantiating FinanceService with configured client at ${serviceBasePath}`);
            return new FinanceServiceType(fetchClient, serviceBasePath) as any;
        case "scm_inventory":
            console.log(`Instantiating ScmService with configured client at ${serviceBasePath}`);
            return new ScmServiceType(fetchClient, serviceBasePath) as any;
        // Add cases for other agents...
        default:
            const exhaustiveCheck: never = agentName;
            throw new Error(`Unsupported agent name provided to OData client factory: ${exhaustiveCheck}`);
    }
}
