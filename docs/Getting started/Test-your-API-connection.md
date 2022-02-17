---
tags: [Getting Started]
---

# Test your connection to the API

To test your connectivity you will now need the following parameters:

- The URL that you would like to request
- Your API key
- Your Authorization header

```json http
{
  "method": "GET",
  "url": "https://api.au.whispir.com/workspaces",
    "headers": {
    "Content-Type": "application/vnd.whispir.workspace-v1+json"
    "Accept": "application/vnd.whispir.workspace-v1+json"
    "Authorization" : "Basic anpjdW1taW5nc0B3aGlzcGlyLmNvbTpQcktzVDExMzg="
    "x-api-key": "OmfEAq1Lak5tjVEi9m0dC9M4iLutkHpG8OSDEYnB"
  },
}

```
https://codepen.io/jzcummings/pen/XWzeePo