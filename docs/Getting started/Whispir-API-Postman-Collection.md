---
tags: [Getting Started]
---

# Whispir API Postman Collection

### Before you start

You'll need:

- [Postman](https://www.postman.com/)
- [Whispir API Postman Collection](https://github.com/whispir/Whispir-API-Postman-Collection) (clone the GitHub repository or download as a .zip file)

### Selecting the right approach for your scenario

Whispir is a communication platform with an API that provides a versatile way to interact with Whispir’s functions and resources.

[Postman](https://www.getpostman.com/ ) is a popular tool for testing web-based APIs. It organises API requests into collections which can be scripted with parameters and include tests for service validation.

The Whispir Postman Collection provides most of the Whispir REST API methods to demonstrate and validate their use in typical customer scenarios.

### Request Strategy

The Whispir Postman collection demonstrates the more complex HATEOAS client strategy to utilise the information returned from Whispir to be flexible and versatile in as many contexts as possible.

The Whispir Postman collection combines the HATEOAS approach with Postman Environment variables to remember values returned by Whispir for use as parameters in subsequent requests. As you work with the Postman collection, you’ll notice the list of environment variables will grow as new values are added.

## Best Practice Messaging
Developers should keep the following recommendations in mind while developing integrated client solutions.

### Whispir Default Content Type

If no Content-Type header is provided, Whispir defaults to responses in XML

e.g:

```json
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>

<ns3:error xmlns:ns2="http://schemas.api.whispir.com/dap"
xmlns:ns3="https://schemas.api.whispir.com">

    <errorSummary>The resource that you have requested does not exist. Please check the identifier and try again </errorSummary>

    <errorText>Not Found</errorText>

</ns3:error>
```

### Correct headers

Always include the following headers to ensure your request is authorised, and that you are sending and receiving content in the correct format.

Accept and Content-Type headers are used to specify the API version and the dialect of any body content. There is normally only one content type for each request, with a choice of JSON or XML body content

Accept: application/vnd.whispir.message-v1+json


Method | Header | Comment
---------|----------|---------
 ALL | x-api-key | Missing x-api-key will result in 403 Forbidden and message body: '{"message" : "Forbidden"}`
 GET | Accept | Specify the format for receiving Whispir data.
 PUT / POST | Content Type / Accept | PUT and POST both send content to Whispir to create and update resources and entities. Methods that return the created resource in the body will use the Accept content type specified if appropriate.
 DELETE|  | Technically DELETE requires neither Accept or Content-Type, however you may elect to specify Accept type in the event of an error message returned.

### Operate through a workspace

Whispir employs an internal organisational unit called a Workspace. A workspace helps to segregate access to resources and functionality using Permissions and Roles assigned to Users.

Whispir’s default workspace, My Company, should not be used for any but the most simple messaging scenarios since most customers find it difficult to migrate once the integration pattern has been established.

Operating through workspaces helps to separate security concerns, message and resource management, usage and reporting. All the examples in this document utilise a workspace.

It’s important to follow the set up procedure to initialise the workspace-id environment variable.

Modern development practices recommend development, testing and production applications are assigned their own workspaces.

## Set Up the Whispir API Postman Collection
After installing Postman and importing the Whispir Postman Collection and Whispir Postman Environment definitions, you’ll have access to the Whispir REST requests and a set of Environment variables to use in the Whispir collection.

You can request the latest Whispir Postman Collection from support@whispir.com.


> We recommend making duplicates of the collection and the environment so you can always restore to a known good configuration.

## Whispir Environment

The Whispir Postman Collection relies heavily on Postman Environment Variables to satisfy parameterised values. Some variables are used in every request, while others are more specialised.

The Whispir environment includes the following values:


Column A | Column B | 
---------|----------
 base-url	 | The regional variant of the Whispir api (api.au.whispir.com; api.us.whispir.com; api.ap1.whispir.com; api.it.whispir.com; api.edu.whispir.com) 
 x-api-key	 | Supplied by Whispir 
 Whispir-username	 | Supplied by Whispir 
 Whispir-password	| Supplied by Whispir 
 test-sms	| Any valid mobile, cell, long code or short code 
 test-email	| An email address to send test content 
 workspace-name	| The name of a Whispir Workspace to use 
 callback-url	| [optional] A callback endpoint

Set all the values in the table above to ensure the proper operation of the Whispir Postman Collection. In some cases, you may need to execute requests in a specific order to satisfy environment variables. This is indicated by a numbered sequence of requests, 1, 2, 3, … etc

Over time, the Whispir Postman Collection will add environment variables from information provided by Whispir. In most aspects of Postman, hovering the mouse over the variable will display the resolved value. 
### Authentication

The Whispir Postman Collection uses “ inherit authentication from parent” on each request to reduce the configuration burden on you, the user. The Collection comes preconfigured with the {{whispir-username}}, {{whispir-password}} and {{x-api-key}} environment variables set in the Basic Auth parameters and request headers respectively.

> *Note - The use of the apikey in the querystring has been removed from the collection.
### Connection Validation

To validate the Postman configuration and your connection to Whispir, perform the following requests in order. If you notice any errors, do not proceed until the error is corrected.

1. Whispir.com - queries the base url and ensures connectivity
2. Workspaces - queries Whispir for all the workspaces
3. Workspace Details - queries Whispir for the Workspace identified as workspace-name
Once these steps have been performed, the Whispir Postman Collection is primed with the information it needs to execute most requests.

### Whispir Requests

As you go through the collection you’ll notice many requests are repeated, and some have [location] or [id] after their name.


The requests with the same name, such as POST Contact and PUT Contact are the same URL, they only differ by the HTTP method used in the request to Whispir. The naming convention helps to identify which requests use the same endpoint.

The requests with [location] at the end use the Location HTTP header as a means of identifying the resource, typically after a POST request. This is the same URL reported by Whispir as the ‘self’ link. In some situations where you have the URL but not the ID of an entity, you can modify the [object-location] environment value and use a [location] method to retrieve the details.

The same also applies to [id] providing a way to get the details of Whispir assets by modifying the [object-id] environment variable.

### Add a Request
There are often instances where you want to add your own request to test a specific Whispir scenario, or copy a returned method or object location from Whispir to evaluate a result.

You only need to perform a couple steps to add a request to the collection:

1. In your request, locate the Headers and choose Whispir Headers from the presets
2. Click ‘Save’ and put the request in a folder or create your own

Following this procedure will ensure your request inherits the authentication configured for the collection and has the correct header parameters.

Additionally, you should set the Accept and Content-Type headers to ensure the body format is specified.