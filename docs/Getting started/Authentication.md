---
tags: [Getting Started]
---

# Authentication

The Whispir API supports **two independent authentication methods**. Use one or the other — do not mix them.

| Method | Headers required |
|---|---|
| 1. Basic Authentication | `Authorization: Basic ...` **and** `x-api-key: ...` |
| 2. Bearer token | `Authorization: Bearer ...` only |

> **IMPORTANT:** Sending `x-api-key` together with a Bearer token is unnecessary — the Bearer token is a self-contained credential and `x-api-key` is ignored. Sending `x-api-key` on its own, without an `Authorization` header, is **not** sufficient and will be rejected.

## Method 1: Basic Authentication + API key

### Obtain an API key

#### I am a Whispir customer

Please contact your Whispir account manager or the [Whispir Support Team](mailto:support@whispir.com) to obtain an API key.

#### I am not yet a Whispir customer

Want to try out our API but you're not yet a Whispir customer? No worries. Simply [get in touch with us ](mailto:sales@whispir.com) and let us know you'd like to try out our API.

### API key as a header

API key information is provided via the ‘headers’, using the `x-api-key` header value.

```json
Example - if your region is AP

https://api.ap.whispir.com
Authorization: Basic YOUR-AUTH-HEADER
x-api-key: YOUR-API-KEY
```

### Authorization header

The Whispir API uses [HTTP Basic Authentication ](https://en.wikipedia.org/wiki/Basic_access_authentication) in addition to an API key. HTTP Basic Authentication requires an authentication header to be passed along with your API request.

You can generate your authorization header with the developer tools included in this documentation. To do so, go to an endpoint and enter your Whispir username and password into the following fields:

![auth header generation.png](https://stoplight.io/api/v1/projects/cHJqOjExMTU5Mw/images/VVyfnAMLWGQ)

Your authorization header will appear in the code sample window.

> Note: The credentials entered on this page are not submitted or stored, but only processed as part of an algorithm to automatically generate your header.

> **IMPORTANT:** Please be aware that since your Header is built from your credentials you must recalculate it any time you change your Whispir password.

Once you’ve generated this header you can use it, together with your API key, to make requests to the API.

## Method 2: Bearer token

Instead of Basic Authentication + API key, you can authenticate with a single **Bearer token**, passed as `Authorization: Bearer YOUR-TOKEN` — with no `x-api-key` header.

There are two sources of Bearer token, and each only works against a different endpoint format. Do not mix them up:

| Source | Endpoint format | Steps |
|---|---|---|
| Developer Portal API key | Current: `https://api.<region>.whispir.com/<path>` | See below |
| JWT from the `/auth` endpoint | Legacy: `https://<region>.whispir.com/api/<path>` | See below |

### Developer Portal API key (current endpoint)

1. Sign in to the [Developer Portal](https://devportal.whispir.com).
2. From the dashboard home, find the **API keys** card and select **Manage API Keys** (or go directly to **Dashboard > API Keys**).
3. Select **Create new API key**.
4. Enter a **Label** for the key (e.g. a name describing where it will be used) and submit.
5. The portal displays the generated **API Secret** once. Copy it immediately — it is not shown again, and if lost you will need to create a new key.
6. Use this secret directly as your Bearer token: `Authorization: Bearer YOUR-API-SECRET`. Do not also send an `x-api-key` header.

> **IMPORTANT:** The API secret is shown only once at creation time. Store it securely (e.g. in a secrets manager or password vault) before closing the dialog.

Keys created from the Developer Portal are rate-limited to 30 transactions per second, with no daily call limit. If you need higher throughput, contact the [Whispir Support Team](mailto:support@whispir.com).

You can view the status and creation date of your existing keys, and revoke or edit them, from the same **API Keys** page.

### JWT from the `/auth` endpoint (legacy endpoint)

Call [Create an auth token](../../openapi.yaml/paths/~1auth/post) — authenticated with Basic Authentication and an API key — to receive a JWT. This JWT is only valid against the legacy endpoint format `https://<region>.whispir.com/api/<path>`; it will not work against the current API endpoint format.

### Important points

- You need to first modify endpoint settings to include the correct region. See [Domains and IP addresses](Domains-and-IP-addresses.md) for more information.
- If using Basic Authentication and the API key value is incorrect or not passed properly, a `403 Forbidden` error will be returned by Whispir.
- If you change the password of your account then you will need to change also the value for the `Authorization` header. You will then need to generate a new authentication header.
- If you have any issues related to authentication, please don't hesitate to contact the [Whispir Support Team](mailto:support@whispir.com).
