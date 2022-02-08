# Authentication

The Whispir API uses authentication from 2 sources: an API key and an authentication header.

You will require both of these in order to make requests to the API.

## Obtain an API key


### I am a Whispir customer
If you're a Whispir customer with access to Workflows by Whispir, you can obtain an API key through the Workflows platform by following the steps outlined here.

If you're a Whispir customer using Whispir Classic, please reach out to your friendly Whispir account manager and they'll will provide you with an API key.


### I am not yet a Whispir customer
Want to try out our API but you're not yet a Whispir customer? No worries. Simply fill out the contact form on our website and let us know you'd like to try out our API:

- [Australia / New Zealand](https://www.whispir.com/en-au/contact/)
- [Southeast Asia](https://www.whispir.com/en-sg/contact/)
- Americas ???

## Authorization header

The Whispir API uses [HTTP Basic Authentication ](https://en.wikipedia.org/wiki/Basic_access_authentication) in addition to your API key. HTTP Basic Auth requires an authentication header to be passed along with your API request.

You can generate your authentication header here by filling in the form below.
 
 (auth header gen here) mmmmmm                                  

> Note: The credentials entered on this page are not submitted or stored, but only processed as part of an algorithm to automatically generate your header.

**IMPORTANT:** Please be aware that since your Header is built from your credentials you must recalculate it any time you change your Whispir password.

Once you’ve generated this header you can use it in a request to the API. 