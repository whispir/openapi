---
tags: [Getting Started]
---

# Test your connection to the API

To test your connectivity you will now need the following parameters:

- The region you'd like to connect to
- Your Authorization header
- Your API key

## Using cURL

[cURL](https://en.wikipedia.org/wiki/CURL) is a computer software project providing a library and command-line tool for transferring data using various protocols. One key use of cURL is to make HTTP requests.

You can test your connection to the Whispir API with the following cURL code. Simply add the region of the server you want to connect to, your authentication header and your API key as indicated below. 

```html
curl --request GET \
  --url https://api.[YOUR REGION HERE].whispir.com \
  --header 'Authorization: [YOUR AUTHENTICATION HEADER]' \
  --header 'x-api-key: [YOUR API KEY]'
```
Copy the cURL code into the command line interface of your choice, or use a web-based cURL console such as [Reqbin.](https://reqbin.com/curl)

## Using a generic REST client

An alternate way to test Whispir API is to install Postman or any other API Client.

See our page on the [Whispir Postman Collection](Test-your-API-connection.md) for instructions on running Whispir API calls with Postman.

## Successful connection

You should receive a status code of `200 (OK)` and the following XML which contains information about the Whispir API endpoints:

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<ns3:company xmlns:ns2="http://schemas.api.whispir.com/dap" xmlns:ns3="http://schemas.api.whispir.com">
    <id>AD4EE78A3CF84D68</id>
    <ns2:link uri="https://api.au.whispir.com/workspaces" rel="retrieveWorkspaces" method="GET"/>
    <ns2:link uri="https://api.au.whispir.com/workspaces" rel="createWorkspaces" method="POST" type="application/vnd.whispir.workspace-v1+xml,application/vnd.whispir.workspace-v1+json"/>
    <ns2:link uri="https://api.au.whispir.com/messages" rel="retrieveMessage" method="GET"/>
    <ns2:link uri="https://api.au.whispir.com/messages" rel="createMessage" method="POST" type="application/vnd.whispir.message-v1+xml,application/vnd.whispir.message-v1+json"/>
    <ns2:link uri="https://api.au.whispir.com/messages" rel="createMessage" method="POST" type="application/vnd.whispir.bulkmessage-v1+xml,application/vnd.whispir.bulkmessage-v1+json"/>
    <ns2:link uri="https://api.au.whispir.com/contacts" rel="retrieveContacts" method="GET"/>
    <ns2:link uri="https://api.au.whispir.com/contacts" rel="createContact" method="POST" type="application/vnd.whispir.contact-v1+xml,application/vnd.whispir.contact-v1+json"/>
    <ns2:link uri="https://api.au.whispir.com/users" rel="createUser" method="POST" type="application/vnd.whispir.user-v1+xml,application/vnd.whispir.user-v1+json"/>
    <ns2:link uri="https://api.au.whispir.com/users" rel="retrieveUsers" method="GET"/>
    <ns2:link uri="https://api.au.whispir.com/templates" rel="createTemplate" method="POST" type="application/vnd.whispir.template-v1+xml,application/vnd.whispir.template-v1+json"/>
    <ns2:link uri="https://api.au.whispir.com/templates" rel="retrieveTemplates" method="GET"/>
    <ns2:link uri="https://api.au.whispir.com/distributionlists" rel="createDistList" method="POST" type="application/vnd.whispir.distributionlist-v1+xml,application/vnd.whispir.distributionlist-v1+json"/>
    <ns2:link uri="https://api.au.whispir.com/distributionlists" rel="retrieveDistLists" method="GET"/>
    <ns2:link uri="https://api.au.whispir.com/" rel="createScenario" method="POST" type="application/vnd.whispir.scenario-v1+xml,application/vnd.whispir.scenario-v1+json"/>
    <ns2:link uri="https://api.au.whispir.com/scenarios" rel="retrieveScenarios" method="GET"/>
    <ns2:link uri="https://api.au.whispir.com/responserules" rel="retrieveResponseRules" method="GET"/>
    <ns2:link uri="https://api.au.whispir.com/responserules" rel="createResponseRule" method="POST" type="application/vnd.whispir.responserule-v1+xml,application/vnd.whispir.responserule-v1+json"/>
    <ns2:link uri="https://api.au.whispir.com/resources" rel="createResource" method="POST" type="application/vnd.whispir.resource-v1+xml,application/vnd.whispir.resource-v1+json"/>
    <ns2:link uri="https://api.au.whispir.com/resources" rel="retrieveResources" method="GET"/>
    <ns2:link uri="https://api.au.whispir.com/workflows" rel="workflowInvoke" method="POST" type="application/vnd.whispir.workflow-v1+xml,application/vnd.whispir.workflow-v1+json"/>
    <ns2:link uri="https://api.au.whispir.com/resources" rel="importContacts" method="POST" type="application/vnd.whispir.importcontact-v1+xml,application/vnd.whispir.importcontact-v1+json"/>
    <ns2:link uri="https://api.au.whispir.com/customlists" rel="retrieveResources" method="GET"/>
</ns3:company>
```

If you received this response, congratulations! You've successfuly connected to the Whispir API.

## Resolving connectivity issues

**HTTP 403 Forbidden or HTTP 401 Unauthorized**
- You may be using an invalid API key.
- You may be using an invalid Authorization header, especially if you recently changed the password. If so, please use the tool above to build the new value to be passed.
- If you can't log in it’s possible that your account isn’t active. Contact your Whispir Company Administrator.

**Other HTTP errors or no connectivity at all**

If you’re still having issues contact the [Whispir Support Team](mailto:'support@whispir.com').


