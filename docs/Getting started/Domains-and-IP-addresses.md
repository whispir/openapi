---
tags: [Getting Started]
---

# Domains, IP addresses, allowlisting

Whispir uses the following domains for our API:

```AU/NZ
AU - https://api.au.whispir.com
NZ - https://api.nz.whispir.com
```

```ASIA
AP - https://api.ap.whispir.com
AP1 - https://api.ap1.whispir.com
```

```AMERICAS
US - https://api.us.whispir.com
```

```OTHER
IT - https://api.it.whispir.com
EDU - https://api.education.whispir.com
```

## How can I identify my region?

Do one of the following:

- Log in to your Whispir account. The region is shown in your Whispir platform URL, where the format is https\://[region].whispir.com.
- Ask your company administrator.
- If you're still unsure, contact the [Whispir Support Team](mailto:'support@whispir.com'). The Support Team can tell you your region-specific API URL.

## Allowlisting IP ranges

Allowlisting (historically referred to as [whitelisting](https://en.wikipedia.org/wiki/Whitelisting)) is a mechanism which grants certain applications or IP addresses access to your system.

Whispir's API is hosted via Amazon Web Services (AWS). If you wish to implement allowlisting, you will need to allowlist IP ranges belonging to AWS.

Before you do so, please understand the following:
- Lists of AWS IP ranges are controlled by Amazon, not Whispir.
- These lists are dynamic and subject to change with minimal notice.
- Whispir **does not** provide customers with notice of changes to AWS IP ranges.

> Whispir **does not recommend** that you implement allowlisting on your system, unless you have a mandatory compliance requirement to do so.

If you choose to implement allowlisting, you must have robust procedures in place to ensure that your allowlisted IP ranges are kept up to date following the release of new ranges by AWS.

You can subcribe to a mailing list to be notified of future changes to AWS IP ranges via [the AWS website](https://aws.amazon.com/blogs/aws/subscribe-to-aws-public-ip-address-changes-via-amazon-sns/). 

We strongly recommend that you subscribe to this list should you decide to implement allowlisting on your system. 

## AWS IP ranges list

The list of AWS IP ranges can be found via [the AWS website.](https://ip-ranges.amazonaws.com/ip-ranges.json)

### What ranges do I need to allowlist?

Both global and region specific AWS IP ranges need to be allowlisted for Whispir's API.

##### Global

All IP ranges associated with the AWS service 'CLOUDFRONT', region 'GLOBAL', are required for allowlisting the Whispir API.

##### Region specific

IP ranges associated with the AWS service 'API_GATEWAY' are required to be allowlisted for each region, according to the table below:

Whispir Region | AWS region
---------|----------
 AU, IT, NZ, EDUCATION | AP-SOUTHEAST-2
 AP, AP1 | AP-SOUTHEAST-1
 US |  US-WEST-1

## Contact us

As always, should you encounter any difficulties, do not hesitate to reach out to the [Whispir Support Team](mailto:'support@whispir.com') for assistance.