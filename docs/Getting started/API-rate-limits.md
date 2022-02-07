---
tags: [Getting Started]
---

# API-rate-limits

Each Whispir API key is limited both in terms of calls per second and calls per day. The limits depend on the Whispir plan, according to the table below:


Whispir subscription	 | 	Requests per second | Requests per day
---------|----------|---------
 Startup API edition | 5 | 10,000
 Business API edition	 | 10 | 20,000
 Enterprise API edition	 | 30	 | 50,000

If further calls per second or per day are required for your application, please contact your Whispir account manager or the [Whispir Support Team](mailto:support@whispir.com).

##  Rate Limits
In the event that Whispir’s rate limits are breached, the following error messages will be returned from the Whispir API:

```json
# Over Queries Per Second Limit

GET /messages

x-api-key: 89aUAtBusdfohhZI6zoFNasd89023rsdf3X3h44c

HTTP 403 Forbidden

X-Error-Code: ERR_403_DEVELOPER_OVER_QPS

X-Error-Detail: Account Over Queries Per Second Limit

 

# Over Queries Per Day Limit

GET /messages

x-api-key: 89aUAtBusdfohhZI6zoFNasd89023rsdf3X3h44c

HTTP 403 Forbidden

X-Error-Code: ERR_403_DEVELOPER_OVER_QPD

X-Error-Detail: Account Over Queries Per Day Limit
```