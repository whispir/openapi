---
tags: [Conventions]
---

# RESTful-architecture

Whispir API provides interfaces for application clients to use Whispir functionality that are platform agnostic, without any dependency on the environment or programming language being used.

Whispir’s API supports multiple methods of inbound request over HTTPS, primarily:

- XML
- JSON

Clients can issue requests using either of the methods, and receive a response in the same format. This allows easy integration with existing and new applications using technologies that are widely supported in a range of languages.

Whispir API employs a REST (Representational State Transfer) architecture. This architecture is the foundation of the World Wide Web and is widely used in application, service and API development.

An application is considered ‘RESTful’ if it conforms to a REST architecture. A REST architecture consists of clients and servers. The clients initiate requests to the servers, and the servers process the requests and return the appropriate responses. Requests and responses are structured using defined and addressable resources.

Each resource within the Whispir API is available through a secure and authenticated URL.

Note: You can find more information about REST on [Wikipedia](https://en.wikipedia.org/wiki/Representational_state_transfer).
