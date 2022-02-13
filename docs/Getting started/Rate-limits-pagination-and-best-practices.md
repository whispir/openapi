# Rate limits, pagination & API best practices

##  Rate Limits
Each Whispir API key is limited both in terms of calls per second and calls per day. The limits depend on the Whispir plan, according to the table below:


Whispir subscription	 | 	Requests per second | Requests per day
---------|----------|---------
 Startup API edition | 5 | 10,000
 Business API edition	 | 10 | 20,000
 Enterprise API edition	 | 30	 | 50,000

If further calls per second or per day are required for your application, please contact your Whispir account manager or the [Whispir Support Team](mailto:support@whispir.com).

In the event that Whispir’s rate limits are breached, the following error messages will be returned from the Whispir API:

```json
# Over Queries Per Second Limit

GET /messages

x-api-key: 89aUAtBusdfohhZI6zoFNasd89023rsdf3X3h44c

HTTP 403 Forbidden

X-Error-Code: ERR_403_DEVELOPER_OVER_QPS

X-Error-Detail: Account Over Queries Per Second Limit

 

# Over Queries Per Day Limit

GET /messages

x-api-key: 89aUAtBusdfohhZI6zoFNasd89023rsdf3X3h44c

HTTP 403 Forbidden

X-Error-Code: ERR_403_DEVELOPER_OVER_QPD

X-Error-Detail: Account Over Queries Per Day Limit

```
## Pagination

Requests that contain multiple items will be paginated by default. Each page will provide a maximum of 20 items per page.

Two parameters can be used to control the number of items retrieved:

- `limit`: The number of rows to be returned (maximum: 20)
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
## API best practices

Whispir recommends the following best practices for use with our REST API:

**Associate a single Whispir API user account with a single API key.** The Whispir user account should be created for API usage only, and not re-used for standard Whispir platform purposes.

**Avoid re-use of API Keys across multiple Whispir user accounts**. If you find the need to have multiple Whispir API user accounts, you can create yourself a matching API key to go with it.

**Create production and development key pairs.** Depending on the size and nature of your project, you may have multiple development environments that you manage. We recommend creating distinct Whispir API user accounts and API keys for this purpose.

**Delete API keys that are no longer needed.** If a key (or associated Whispir API user account) is no longer needed, it should be deleted. New keys can easily be created if required in the future.

Following these best practices will allow you to have the best visibility and supportability of your projects that use the Whispir REST API.

