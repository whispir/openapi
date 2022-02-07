---
tags: [Getting Started]
---

# API best practices

Whispir recommends the following best practices for use with our REST API:

**Associate a single Whispir API user account with a single API key.** The Whispir user account should be created for API usage only, and not re-used for standard Whispir platform purposes.

**Avoid re-use of API Keys across multiple Whispir user accounts**. If you find the need to have multiple Whispir API user accounts, you can create yourself a matching API key to go with it.

**Create production and development key pairs.** Depending on the size and nature of your project, you may have multiple development environments that you manage. We recommend creating distinct Whispir API user accounts and API keys for this purpose.

**Delete API keys is no longer needed.** If a key (or associate Whispir API user account) is no longer needed, these should be deleted. New keys can easily be created if required in the future.

Following these best practices will allow you to have the best visibility and supportability of your projects that use the Whispir REST API.
