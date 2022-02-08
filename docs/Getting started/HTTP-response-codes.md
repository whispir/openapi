# HTTP response codes

Application clients that are using Whispir’s API will receive HTTP response codes in response to every request that is issued.

The table below describes the response codes that will be issued and gives potential reasons for why they may have been sent back.

## Successful response codes


Response Code | Meaning 
---------|----------
**200 OK** | Successful request. <br /><br /> No further action required.
 **201 Created** | Successfully created the resource. <br /><br />The requested resource has been successfully created and can be found via the URL in the ‘Location’ header. 
 **202 Accepted** | Successfully accepted the request for processing. <br /><br />The request has been accepted for processing by the asynchronous processor. The request’s unique identifier can be found via the URL in the ‘Location’ header. 
 **204 No Content**| Successfully processed the request but no content was sent back. <br /><br />The update (PUT) or delete (DELETE) request has been successfully processed and no content was returned from the server. 
 **301 Moved Permanently**| Successful request but the resource is no longer available at this location. <br /><br />This resource URL should no longer be used. Check the location header of the response and redirect the request there. 
**302 Found**| Successful request but the resource is temporarily not available at this location. <br /><br />This resource URL should still be used in future, but for this specific request check the location header of the response and redirect the request there. 
 **304 Not modified**| Content hasn’t changed since last request. <br /><br />No action required. 

## Unsuccessful response codes

Response Code | Meaning 
---------|----------
400 Bad Request | B
401 Unauthorized | B
403 Forbidden | B
404 Not Found | B
405 Method not allowed | B
415 Unsupported Media Type | B
429 Too many requests | B
422 Unprocessable Entity | B
500 Internal Server Error | B
501 Method Not Implemented | B