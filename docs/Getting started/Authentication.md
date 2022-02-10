# Authentication

The Whispir API uses authentication from 2 sources: an API key and an authentication header.

You will require both of these in order to make requests to the API.

## Obtain an API key


### I am a Whispir customer
If you're a Whispir customer with access to Workflows by Whispir, you can obtain an API key through the Workflows platform by following the steps outlined [here](https://help.whispir.com/en/articles/4940972-api-keys-portal).

If you're a Whispir customer using Whispir Classic, please reach out to your friendly support team and they'll will provide you with an API key.


### I am not yet a Whispir customer
Want to try out our API but you're not yet a Whispir customer? No worries. Simply fill out the contact form on our website and let us know you'd like to try out our API:

- [Australia / New Zealand](https://www.whispir.com/en-au/contact/)
- [Southeast Asia](https://www.whispir.com/en-sg/contact/)
- Americas ???
## API key as a header

In line with the new API gateway changes, the key information must now be passed in ONLY via the ‘headers’, using the `x-api-key` header value. The header value will be the same as the one used as query parameter with the old deprecated API URL

```json
Example - if your region is AP

Previous API key sending mechanism:

https://api.whispir.com?apikey=YOUR-API-KEY
Authorization: Basic YOUR-AUTH-HEADER

New API base URL based on region with API key sent via headers:

https://api.ap.whispir.com
Authorization: Basic YOUR-AUTH-HEADER
x-api-key: YOUR-API-KEY
```

## Authorization header

The Whispir API uses [HTTP Basic Authentication ](https://en.wikipedia.org/wiki/Basic_access_authentication) in addition to your API key. HTTP Basic Auth requires an authentication header to be passed along with your API request.

You can generate your authentication header here by filling in the form below:
 
 (auth header gen here)                          

> Note: The credentials entered on this page are not submitted or stored, but only processed as part of an algorithm to automatically generate your header.

> **IMPORTANT:** Please be aware that since your Header is built from your credentials you must recalculate it any time you change your Whispir password.

Once you’ve generated this header you can use it in a request to the API. 

### Important points

- You need to first modify the Whispir endpoint including the region, according to what described in the previous section.
- The API key is NOT anymore required as a query parameter, please remove it from all your Requests in order to increase the security.
- If the API key value is incorrect or not passed properly, a `403 Forbidden` error will be returned by Whispir.
- If you change the password of your account then you will need to change also the value for the `Authorization` header. You can generate the new Basic token as explained **here**.
- If you have any queries related to sending the API key, contact the Whispir Support Team. Provide as much detail as possible about your issue.
