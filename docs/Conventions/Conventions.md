---
tags: [Conventions]
---

# Conventions

## API security
The Whispir API supports multiple methods of authentication to cater for varying client needs. Authentication is necessary for the API users to ensure that only valid and legal requests are processed by the Whispir messaging engine.

### Basic authentication over HTTPS

The Basic authentication process is offered for use with clients that already have an up-and-running application and would like to integrate Whispir as a messaging provider in a quick and simple fashion.

Basic access authentication over HTTPS involves the application client sending an encoded username and password when requesting resources from the server

Clients will also be required to provide the API key that is provided from our Enablement team. This API key is used to determine the application that is making the request, whether it's allowed to make requests, is still within the request thresholds, and is a valid API key.

Once this has been confirmed, the request is forwarded to Whispir for Basic authentication processing.

- If this username and password are correct, the server will process the request and send back an appropriate response.
- If the username and password are not correct, the server will send back a HTTP `401 (Authorisation required)`.

### Basic authentication

Once Whispir has validated the username and password, the requested resource is returned to the application client.

Example:
A valid request that will be accepted and authenticated by the Whispir messaging engine using Basic authentication is as follows:

The Authorisation header contains the word ‘Basic’ followed by the base64 representation of the username and password of the user.

You can find more information about HTTP Basic authentication on [Wikipedia](https://en.wikipedia.org/wiki/Basic_access_authentication).

```json
API security

Whispir uses Basic HTTP authentication over HTTPS to secure the API requests.

HTTP/1.1 GET https://api.<region>.whispir.com
Authorization: Basic frJIUN8DYpKDtOLCwo//yllqDzg=
x-api-key: your_api_key
 
# Successful Response
HTTP/1.1 200 OK
 
# Unsuccessful Response (incorrect apikey)
HTTP/1.1 403 Forbidden
<h1>Developer Inactive</h1>
 
# Unsuccessful Response (incorrect username / password)
HTTP/1.1 401 Unauthorized
 
# Unsuccessful Response (no permission to access that resource endpoint)
HTTP/1.1 403 Forbidden
```