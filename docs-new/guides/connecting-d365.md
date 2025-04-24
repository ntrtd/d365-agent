# Guide: Connecting to Dynamics 365 Data

This guide demonstrates how to use the D365 Agent SDK to interact with data in your Dynamics 365 environment. This typically involves using the SDK's data access components, which might abstract OData calls or other API interactions.

*(This content would likely absorb and expand upon the original `d365_odata_client_usage.md`)*

## Querying Data

[Code examples for retrieving records, filtering, selecting specific fields, handling pagination]

```csharp
// Example C#: Fetching active accounts
var accounts = await d365Context.Accounts
    .Where(a => a.Status == AccountStatus.Active)
    .Select(a => new { a.Name, a.PrimaryContactId })
    .ToListAsync();
```

## Creating Records

[Code examples for creating new entities (e.g., contacts, leads)]

```csharp
// Example C#: Creating a new contact
var newContact = new Contact {
    FirstName = "John",
    LastName = "Doe",
    Email = "john.doe@example.com"
};
await d365Context.Contacts.AddAsync(newContact);
await d365Context.SaveChangesAsync();
```

## Updating Records

[Code examples for modifying existing entities]

```csharp
// Example C#: Updating a contact's email
var contactToUpdate = await d365Context.Contacts.FindAsync(contactId);
if (contactToUpdate != null) {
    contactToUpdate.Email = "j.doe@contoso.com";
    await d365Context.SaveChangesAsync();
}
```

## Deleting Records

[Code examples for removing entities]

```csharp
// Example C#: Deleting a contact
var contactToDelete = await d365Context.Contacts.FindAsync(contactId);
if (contactToDelete != null) {
    d365Context.Contacts.Remove(contactToDelete);
    await d365Context.SaveChangesAsync();
}
```

## Handling Relationships

[Examples of working with related entities (e.g., creating an opportunity linked to an account)]

## Error Handling

[Best practices for handling API errors, connection issues, etc.]
