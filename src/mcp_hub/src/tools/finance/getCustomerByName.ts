import { z } from "zod";
import { getD365AuthToken, getD365Url } from "../../core/auth"; // Correct path to core
import { FetchClient, FetchRequestConfig } from "@odata2ts/http-client-fetch"; // Correct client import
import { MicrosoftDynamicsDataEntitiesService as FinanceServiceType } from "../../agents/finance_accounting/finance_accounting_client/MicrosoftDynamicsDataEntitiesService"; // Path to generated service type

// Define alias type with the http client type applied
type FinanceService = FinanceServiceType<FetchClient>;

// Define the input schema shape for the tool
export const getCustomerByNameInputShape = z.object({
  customerName: z.string().describe("The exact Organization Name of the customer to search for."),
  company: z.string().optional().describe("The company code (e.g., USMF, FR01). If omitted, searches across companies."),
});

// Infer the input type from the Zod schema
type GetCustomerByNameInput = z.infer<typeof getCustomerByNameInputShape>;

// Define metadata for the tool
export const getCustomerByNameMetadata = {
    name: "get_customer_by_name",
    description: "Retrieves customer details from Dynamics 365 Finance based on the exact customer organization name.",
    input: getCustomerByNameInputShape.shape, // Use .shape for MCP server registration if it expects ZodRawShape
};

// Define the handler function for the tool
// Accept a single 'args' object typed with the inferred type
export async function getCustomerByNameHandler(args: GetCustomerByNameInput) {
    // Access properties via args object
    const { customerName, company } = args;
    console.log(`Tool '${getCustomerByNameMetadata.name}' called with args:`, { customerName, company });

    try {
        // --- Client Setup inside Handler ---
        const d365BaseUrl = await getD365Url();
        const authToken = await getD365AuthToken();

        // Define default headers including Authorization
        const defaultHeaders: HeadersInit = {
            Authorization: `Bearer ${authToken}`,
            Accept: 'application/json',
            'OData-MaxVersion': '4.0',
            'OData-Version': '4.0',
        };

        // Configure FetchClient instance with default headers
        const defaultConfig: FetchRequestConfig = {
            headers: defaultHeaders,
        };
        const fetchClient: FetchClient = new FetchClient(defaultConfig);

        // Instantiate the generated service client, passing the configured FetchClient and base URL
        const serviceBasePath = d365BaseUrl + "/data"; // Base path for D365 FO
        const service: FinanceService = new FinanceServiceType(fetchClient, serviceBasePath);
        console.log(`Instantiated FinanceService with configured client at ${serviceBasePath}`);
        // --- End Client Setup ---


        console.log(`Querying D365 via generated client for customer: ${customerName}, company: ${company || 'any'}`);

        // Build and execute the query using the generated client
        // Corrected: Use plural camelCase entity set name based on grep result
        const queryBuilder = service.customersV3(); // Access the customersV3 entity set

        // Apply filters (assuming 'Name' holds the organization name)
        queryBuilder.filter(queryBuilder.Name.equals(customerName));
        if (company) {
            queryBuilder.filter(queryBuilder.dataAreaId.equals(company));
        }

        // Select desired fields
        queryBuilder.select("CustomerAccount", "Name", "CreditLimit", "PartyType", "dataAreaId");
        queryBuilder.top(1);

        // Prepare request config (e.g., adding cross-company param if needed)
        const requestConfig: FetchRequestConfig = {};
        if (!company) {
            requestConfig.params = { "cross-company": "true" };
            console.log("Adding cross-company=true to request params");
        }

        // Execute the query, passing the per-request config
        const response = await queryBuilder.query(undefined, requestConfig); // Pass config here

        if (response && response.data && response.data.value && response.data.value.length > 0) {
            const customerData = response.data.value[0];
            console.log("Customer data found in D365:", customerData);
            return {
                content: [{ type: "text", text: JSON.stringify(customerData, null, 2) }]
            };
        } else {
            console.log("Customer not found in D365.");
            const errorResult = { error: "Customer not found", customerName: customerName, company: company };
            return {
                content: [{ type: "text", text: JSON.stringify(errorResult, null, 2) }],
                isError: true
            };
        }

    } catch (error: any) {
        console.error(`Error executing ${getCustomerByNameMetadata.name}: ${error.message}`, error.stack);
        let errorMessage = `Failed to retrieve customer via generated client: ${error.message}`;
        if (error.cause) {
            errorMessage += ` | Cause: ${JSON.stringify(error.cause)}`;
        }
         if (error.name === 'ODataRequestError' && error.response) {
             try {
                 const errorBody = await error.response.json();
                 errorMessage += ` | Details: ${JSON.stringify(errorBody)}`;
             } catch (parseError) {
                 errorMessage += ` | Failed to parse error response body.`;
             }
         }
        const errorResult = { error: errorMessage };
        return {
            content: [{ type: "text", text: JSON.stringify(errorResult, null, 2) }],
            isError: true
        };
    }
}
