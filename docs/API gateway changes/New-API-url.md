---
tags: [API gateway changes]
---

# New API URL

When you were calling the Whispir API in the past, the URL was https://api.whispir.com. This was a single URL for all the regions. With the new changes, the URL is more inline with your account’s region, according to the pattern: https://api.[region].whispir.com

Namely, the regions and their corresponding URLs are as follows:

```json
Old deprecated API base URL
https://api.whispir.com

New API base URL based on regions
AU - https://api.au.whispir.com
AP - https://api.ap.whispir.com
AP1 - https://api.ap1.whispir.com
NZ - https://api.nz.whispir.com
US - https://api.us.whispir.com
IT - https://api.it.whispir.com
EDU - https://api.education.whispir.com
```
## How can I identify my region?
Do one of the following:

- Log in to your Whispir account. The region is usually shown in you Whispir platform URL, where the format is https://[region].whispir.com
- Ask your company administrator
- If you're still unsure contact the [Whispir Support Team](mailto:support@whispir.com) and provide your API key. The Support Team can tell you your region-specific API URL.