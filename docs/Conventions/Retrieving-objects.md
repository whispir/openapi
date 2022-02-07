# Retrieving objects

Client applications can retrieve lists of resources of a single type through a simple URL. For example, the list of workspaces, contacts or messages. Some resources are subject to Pagination and in this case the default query will return only the first 20 results.

```json
Retrieve all workspaces within your company:

GET https://api.[region].whispir.com/workspaces

Retrieve all messages from the default workspace ["My company"]

GET https://api.[region].whispir.com/messages
```
## Retrieving a single object
Client applications also have access to a single resource by specifying the relevant ID of the resource, as in the examples below:

```json
Retrieve a workspace with ID 12345:

GET https://api.<region>.whispir.com/workspaces/12345

Retrieve a contact with ID 78910 from the default workspace ["My company"]:

GET https://api.<region>.whispir.com/contacts/78910
```

## Nested objects

In Whispir’s resources model some of them are nested. For example:

- The company resource contains many workspaces
- Each workspace resource contains many messages
- Each message resource contains a MessageStatus

Requests can be nested in order to provide application clients with the ability to access specific resources when they are nested. Since resources are associated to a workspace, its value should always be specified. By default its omission will retrieve only single resources associated to the default company workspace ["My Company"], as in the examples above.

```json
Retrieve a contact with ID 67890 from a workspace with ID 12345:

GET https://api.<region>.whispir.com/workspaces/12345/contacts/67890
```