# Pagination

Requests that contain multiple items will be paginated by default. Each page will provide a maximum of 20 items per page.

Two parameters can be used to control the number of items retrieved:

- `limit`: The number of rows to be returned (maximum: 20, default: 20)
- `offset`: The record number to start returning from (default: 0)

Most resources will provide these links at the end of the response object in a link array that supplies links with rel=next and rel=prev attributes. This makes programmatic pagination easy as you can simply detect the presence of these attributes. You can loop through the pages until you receive a response of "No messages found".

Note: For ease of use the following resources aren’t paginated:

- Workspaces
- Scenarios

```JSON
Request for the first page of messages
GET https://api.<region>.whispir.com/messages?limit=20&offset=0

Request for the second page of messages (note that the offset is now 20)
GET https://api.<region>.whispir.com/messages?limit=20&offset=20

Request for a page of messages that doesn't exist:
GET https://api.<region>.whispir.com/workspaces/7311ABEB701E7C60/messages?limit=20&offset=40
{
    "status" : "No records found"
}
```
```XML
Request for the first page of messages:

GET https://api.<region>.whispir.com?limit=20&offset=0
Request for the second page of messages (note that the offset is now 20):

GET https://api.<region>.whispir.com?limit=20&offset=20
Request for the page of messages that doesn't exist:

GET https://api.<region>.whispir.com/workspaces/7311ABEB701E7C60/messages?limit=20&offset=20
<?xml version="1.0" encoding="UTF-8" standalone="true"?>
<ns2:return xmlns:ns3="http://schemas.api.whispir.com" xmlns:ns2="http://schemas.api.whispir.com/dap">
    <status>No records found</status>
</ns2:return>
```

