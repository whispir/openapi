---
tags: [Getting Started]
---

# Authentication

The Whispir API uses authentication from 2 sources: an API key and an authentication header.

You will require both of these in order to make requests to the API.

## Obtain an API key

### I am a Whispir customer

If you're a Whispir customer with access to Whispir Classic and Workflows by Whispir, you can obtain an API key through the Workflows platform by following the steps outlined [here](https://help.whispir.com/en/articles/4940972-api-keys-portal).

If you're a Whispir customer using only Whispir Classic, please contact your Whispir account manager or the [Whispir Support Team](mailto:support@whispir.com) to obtain an API key.

### I am not yet a Whispir customer

Want to try out our API but you're not yet a Whispir customer? No worries. Simply get in touch with us and let us know you'd like to try out our API:

- [Australia / New Zealand](https://www.whispir.com/en-au/contact/)
- [Southeast Asia](https://www.whispir.com/en-sg/contact/)
- [Americas](mailto:sales@whispir.com)

## API key as a header

API key information is provided via the ‘headers’, using the `x-api-key` header value.

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

The Whispir API uses [HTTP Basic Authentication ](https://en.wikipedia.org/wiki/Basic_access_authentication) in addition to an API key. HTTP Basic Authentication requires an authentication header to be passed along with your API request.

You can generate your authentication header here by filling in the form below:

https://codepen.io/jzcummings/pen/XWzeePo

> Note: The credentials entered on this page are not submitted or stored, but only processed as part of an algorithm to automatically generate your header.

> **IMPORTANT:** Please be aware that since your Header is built from your credentials you must recalculate it any time you change your Whispir password.

Once you’ve generated this header you can use it in a request to the API.

### Important points

- You need to first modify the Whispir to include the correct region. See [Domains and IP addresses](Domains-and-IP-addresses.md) for more information.
- If the API key value is incorrect or not passed properly, a `403 Forbidden` error will be returned by Whispir.
- If you change the password of your account then you will need to change also the value for the `Authorization` header. You will then need to generate a new authentication header.
- If you have any issues related to authentication, please don't hesitate to contact the [Whispir Support Team](mailto='support@whispir.com').
