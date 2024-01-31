---
stoplight-id: bvqvyreculdas
tags: [Getting Started]
---

# TLS (SSL) Certificates

When connecting to Whispir APIs your systems should follow standard public TLS ecosystem processes. Typically this means that your operating system or programming language runtime provides a set of trusted root certificates.

Your systems should follow standard certificate verification processes including checking signatures, SANs, intermediate/root issuers, validity dates and revocation status as appropriate.

## Certificate issuers
Certificates are issued by multiple authorities including, but not limited to: Amazon Web Services (AWS) and Digicert

## Certificate rotation

Whispir rotates TLS certificates for multiple reasons, including but not limited to:
* Standard renewal process which is completed every 12 to 13 months
* Infrastructure upgrades which are completed on an ad-hoc basis as required
* Security incidents may require certificates to be rotated

**Customers are not provided with notice of changes to certificates.**

<!-- theme: danger -->
> Customers must not "pin" or "allowlist" individual certificates of any kind, as doing so will result in an outage when certificates are rotated. If your systems are not capable of handling TLS in an industry standard manner, you must implement a proxy system that can do so.