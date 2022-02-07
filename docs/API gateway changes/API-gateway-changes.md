---
tags: [API gateway changes]
---

# API gateway changes

We have moved away from our legacy API gateway service to the AWS API gateway service to better serve your growing API needs. This update introduces the ability to better route the API requests to its regional instances, and also lays the foundation for more API gateway-related benefits for customers in the future.

This migration is being performed in 2 phases:

- **Phase 1:** Provide the new regional gateway service
- **Phase 2:** Sunset the api.whispir.com URL, and only keep the regional-based links

> Whispir has set a timeline for its existing customers to update their API libraries, and for systems to adapt to these changes. This means you can continue to make your API calls in the current way till 30 April 2019 (23:59:59 GMT). If you don’t make the changes by then, your API calls may be rejected by Whispir.

The changes we’re rolling out are primarily in two areas:

- The API URL will be more specific to your region.
- The API key information is to be passed in the headers, and not anymore as a query parameter.

Follow the steps below to check the 3 main compliance elements for the new API gateway standards.

## 1. Change of SSL certificates

Whispir is aware of some client integrations that depend on trusting the client SSL certificate explicitly.

If your application has this dependency, we recommend that you review your implementation as the certificate serving api.whispir.com will be changing. You can download the new wildcard certificate by visiting au.whispir.com or the respective region-based URL (ap, us, nz, it, ap1)

Note: The steps for downloading a certificate may vary from browser to browser.

## 2. IP whitelisting

The new and legacy Whispir API gateway services are hosted in AWS.

If your implementation depends on IP Whitelisting in order to make calls to our service, we suggest that you review the following set of [Amazon IPs](https://ip-ranges.amazonaws.com/ip-ranges.json). You will need to whitelist all IP ranges.

For users still connecting to <https://api.whispir.com> until the 30 April 2019 deadline:

Service ‘CLOUDFRONT’ in the region ‘GLOBAL’
For all regional endpoints you should be using REGION + EC2:

- AU, IT, EDUCATION, NZ = AP-SOUTHEAST-2
- AP, AP1 = AP-SOUTHEAST-1
- US = US-WEST-1

## 3. Enforcing HTTP specifications

Whispir is aware of some client integrations that don't adhere to the header parsing rules specified in the [Hypertext Transfer Protocol specification](https://www.w3.org/Protocols/rfc2616/rfc2616-sec4.html).

While Whispir is looking to implement mitigations for those affected, we highly recommend that you review your implementations and ensure that they treat all headers as non-case sensitive to increase resilience.

The rollout of changes in 2018 highlighted these issues with some client integrations. The most common problem identified was a dependency on the upper/lower case status of the ‘location’ response header provided by Whispir after successful API calls.
