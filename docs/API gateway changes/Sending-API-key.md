---
tags: [API gateway changes]
---

# Sending API key

Whispir needs your API key to validate that the request is made genuinely by you, and ties it to your account for rate limiting and throughput capacity purposes. Previously the API key information was sent via the URL query params

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

## Important points
- You need to first modify the Whispir endpoint including the region, according to what described in the previous section.
- The API key is NOT anymore required as a query parameter, please remove it from all your Requests in order to increase the security.
- If the API key value is incorrect or not passed properly, a `403 Forbidden` error will be returned by Whispir.
- If you change the password of your account then you will need to change also the value for the `Authorization` header. You can generate the new Basic token as explained **here**.
- If you have any queries related to sending the API key, contact the Whispir Support Team. Provide as much detail as possible about your issue.