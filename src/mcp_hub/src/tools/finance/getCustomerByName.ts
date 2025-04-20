import { z } from "zod";
import { getD365AuthToken, getD365Url } from "../../core/auth"; // Existing auth functions

// SAP Cloud SDK specific imports
import { HttpDestination } from "@sap-cloud-sdk/connectivity";
// Import the specific entity, its request builder, and its API class
import {
  CustomersV3,
  CustomersV3RequestBuilder,
  CustomersV3Api // Import the API class
} from "@d365mcp/client"; // Import from package entry point

// Define input schema shape using Zod
export const getCustomerByNameInputShape = z.object({
  customerName: z.string().describe("The exact Organization Name of the customer to search for."),
  company: z.string().optional().describe("The company code (e.g., USMF, FR01). If omitted, searches across companies."),
});

// Infer input type
type GetCustomerByNameInput = z.infer<typeof getCustomerByNameInputShape>;

// Define metadata for the tool
export const getCustomerByNameMetadata = {
    name: "get_customer_by_name", // Use the original name
    description: "Retrieves customer details from Dynamics 365 Finance using SAP Cloud SDK Client.",
    input: getCustomerByNameInputShape.shape,
};

// Define handler function
export async function getCustomerByNameHandler(args: GetCustomerByNameInput) {
    const { customerName, company } = args;
    console.log(`Tool '${getCustomerByNameMetadata.name}' called with args:`, { customerName, company });

    try {
        // 1. Get URL and Auth Token
        const d365BaseUrl = await getD365Url();
        const authToken = await getD365AuthToken();

        // 2. Construct HttpDestination object
        const destination: HttpDestination = {
            url: d365BaseUrl + '/data',
            authentication: 'NoAuthentication',
            headers: {
                Authorization: `Bearer ${authToken}`,
                Accept: 'application/json',
                'OData-MaxVersion': '4.0',
                'OData-Version': '4.0',
            }
        };
        console.log(`Constructed destination with URL: ${destination.url}`);

        // 3. Build the request using the imported RequestBuilder directly
        // Instantiate the API class using its static factory to access the schema
        const customersApi = CustomersV3Api._privateFactory(); // Use static factory

        // Build the request using the RequestBuilder and schema fields
        const requestBuilder = new CustomersV3RequestBuilder(customersApi) // Pass API instance
            .getAll()
            // Use the schema fields for filtering and selection
            .filter(customersApi.schema.ORGANIZATION_NAME.equals(customerName)); // Filter by ORGANIZATION_NAME (common field name)

        if (company) {
            requestBuilder.filter(customersApi.schema.DATA_AREA_ID.equals(company));
        }

        requestBuilder.select(
            customersApi.schema.CUSTOMER_ACCOUNT,
            customersApi.schema.ORGANIZATION_NAME, // Use ORGANIZATION_NAME
            customersApi.schema.CREDIT_LIMIT,
            customersApi.schema.PARTY_TYPE,
            customersApi.schema.DATA_AREA_ID
        );
        requestBuilder.top(1);

        if (!company) {
            requestBuilder.addCustomQueryParameters({ 'cross-company': 'true' }); // Correct method name
            console.log("Adding cross-company=true request parameter");
        }

        console.log(`Executing request for customer: ${customerName}, company: ${company || 'any'}`);

        // 4. Execute the request
        const result = await requestBuilder.execute(destination);

        // 5. Process the result
        if (result && result.length > 0) {
            const customerData = result[0];
            console.log("Customer data found in D365:", customerData);
            // Use the correct property names from the entity type
            const plainCustomerData = {
                CustomerAccount: customerData.customerAccount,
                Name: customerData.organizationName, // Use organizationName
                CreditLimit: customerData.creditLimit,
                PartyType: customerData.partyType,
                dataAreaId: customerData.dataAreaId,
            };
            return {
                content: [{ type: "text" as const, text: JSON.stringify(plainCustomerData, null, 2) }]
            };
        } else {
            console.log("Customer not found in D365.");
            const errorResult = { error: "Customer not found", customerName, company };
            return {
                content: [{ type: "text" as const, text: JSON.stringify(errorResult, null, 2) }],
                isError: true
            };
        }

    } catch (error: any) {
        console.error(`Error executing ${getCustomerByNameMetadata.name}: ${error.message}`, error.stack);
        let detailedMessage = error.message;
        if (error.rootCause?.message) {
            detailedMessage += ` | RootCause: ${error.rootCause.message}`;
             if (error.rootCause?.response?.data?.error?.message) {
                 detailedMessage += ` -> ${error.rootCause.response.data.error.message}`;
            }
        } else if (error.cause?.message) {
            detailedMessage += ` | Cause: ${error.cause.message}`;
        }
        const errorResult = { error: `Failed to retrieve customer: ${detailedMessage}` };
        return {
            content: [{ type: "text" as const, text: JSON.stringify(errorResult, null, 2) }],
            isError: true
        };
    }
}
