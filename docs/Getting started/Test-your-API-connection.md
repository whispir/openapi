# Test your connection to the API

To test your connectivity you will now need the following parameters:

- The URL that you would like to request
- Your API key
- Your Authorization header
- Specific MIME type for the Content-Type/Accept Headers (this is required for some methods)

To do this you can use a programming language, a cURL script or a generic REST client.

## Using cURL
cURL is a computer software project providing a library and command-line tool for transferring data using various protocols. One key use of cURL is to make HTTP requests.

In order to test your ability to use the WhispirAPI, cURL is a very quick mechanism to enter into a command line interface and make sure everything is set up correctly.

```JSON
Connect to the API using cURL
curl --location --request GET 'https://api.<region>.whispir.com' --header 'x-api-key: YOUR-API-KEY' --header 'Authorization: YOUR-AUTH-HEADER' --header 'Accept: application/vnd.whispir.company-v1+json'

# with sample values

curl --location --request GET 'https://api.au.whispir.com' --header 'x-api-key: 89aUAtBusdfohhZI6zoFNasd89023rsdf3X3h44c' --header 'Authorization: Basic am9obi5zbWl0aDpteXBhc3N3b3Jk' --header 'Accept: application/vnd.whispir.company-v1+json'

Sample Response
{
  "id": "AD7671EB2DB89638",
  "link": [
    {
      "uri": "https://api.au.whispir.com/workspaces",
      "rel": "retrieveWorkspaces",
      "method": "GET",
      "host": "api.au.whispir.com",
      "port": -1
    },
    ...
  ]
}
```

```XML
Connect to the API using cURL
curl --location --request GET 'https://api.<region>.whispir.com' --header 'x-api-key: YOUR-API-KEY' --header 'Authorization: YOUR-AUTH-HEADER' --header 'Accept: application/vnd.whispir.company-v1+xml'

# with sample values

curl --location --request GET 'https://api.au.whispir.com' --header 'x-api-key: 89aUAtBusdfohhZI6zoFNasd89023rsdf3X3h44c' --header 'Authorization: Basic am9obi5zbWl0aDpteXBhc3N3b3Jk' --header 'Accept: application/vnd.whispir.company-v1+xml'

Sample Response
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<ns3:company xmlns:ns2="http://schemas.api.whispir.com/dap" xmlns:ns3="http://schemas.api.whispir.com">
    <id>AD7671EB2DB89638</id>
    <ns2:link uri="https://api.au.whispir.com/workspaces" rel="retrieveWorkspaces" method="GET"/>
    ...
</ns3:company>
```

# Using a generic REST client
An alternate way to test Whispir API is to install [Postman](https://www.postman.com/) or another API Client.
```JSON
Connect to the API using an API Client
GET https://api.<region>.whispir.com
 
Authorization: Basic am9obi5zbWl0aDpteXBhc3N3b3Jk
x-api-key: your_api_key
Accept: application/vnd.whispir.company-v1+json
```
```XML
Connect to the API using an API Client
GET https://api.<region>.whispir.com
 
Authorization: Basic am9obi5zbWl0aDpteXBhc3N3b3Jk
x-api-key: your_api_key
Accept: application/vnd.whispir.company-v1+xml
```

Once you have executed this request, you should receive a 200 OK response from the REST client and the same response payloads seen before with cURL. This means that you have connectivity to the Whispir API and can start building your app.

If you received a different response, continue to the next section to understand how to resolve your issues.

# Resolving connectivity issues

## HTTP 401 Unauthorized or HTTP 403 Forbidden  

- You may be using an invalid API key.
- You may be using an invalid Authorization header, especially if you recently changed the password. If so, please use the tool above to build the new value to be passed.
- If you can't log in it’s possible that your account isn’t active. Contact your Whispir Company Administrator.

## Other HTTP errors or no connectivity at all

If you’re still having issues contact the [Whispir Support Team](mailto:support@whispir.com).