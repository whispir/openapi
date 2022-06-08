---
internal: true
---

# WhatsApp messages

## Overview

Customers can send templated WhatsApp messages via Whispir's API.

Templates must first be submitted for approval by WhatsApp in your WhatsApp Business Manager account before any template messages can be sent from Whispir. Please reach out to your Whispir account manager to help you get started.

## How to query sent message status using WhatsApp's API /status endpoint

### WhatsApp API: GET message status

```json
GET: https://whatsapp.ap1.whispir.com/status
Headers: 
Content-Type: application/json
Authorisation: Bearer
```

### WhatsApp API: Query messages by Id

```json
GET: https://whatsapp.ap1.whispir.com/status/89886399
Headers: 
Content-Type: application/json
Authorisation: Bearer
```

### WhatsApp API: Query messages by status

(SENT/SUBMITTED/DELIVERED/READ/FAILED/REJECTED/UNDELIVERABLE)

```json
GET: https://whatsapp.ap1.whispir.com/status?status=SENT
Headers: 
Content-Type: application/json
Authorisation: Bearer
```

### hatsApp API: Query messages by sender number (from_phone_number)

```json
GET: https://whatsapp.ap1.whispir.com/status?sender=61430430
Headers: 
Content-Type: application/json
Authorisation: Bearer
```

### WhatsApp API: Query messages by recipient number (to_phone_number)

```json
GET: https://whatsapp.ap1.whispir.com/status?recipient=61430430
Headers: 
Content-Type: application/json
Authorisation: Bearer
```

### WhatsApp API: Query messages by a time range (start date/time - end date/time)

```json
GET: https://whatsapp.ap1.whispir.com/status?startTime=2020-12-03T02:32:42Z&endTime=2030-03-11T02:32:42Z
Headers: 
Content-Type: application/json
Authorisation: Bearer
```

## How to create & edit templates using WhatsApp's API /templates endpoint

### Retrieve all templates by using the /templates endpoint with GET

#### Sample request:

```json
GET http://whatsapp.[region].whispir.com/templates
Headers: 
Content-Type: application/json
Authorisation: Bearer
```

#### Sample response:

```json
[
    {
        "id": "15",
        "name": "_test_1234_template_1",
        "whatsappId": "req:body:whatsappId",
        "type": "TEXT_TEMPLATE",
        "description": "This is a test template",
        "content": "test template",
        "parameter": "test parameters",
        "language": "{\"en\"}",
        "ownerCompanyId": "64",
        "created": "2020-07-20T02:58:09.671Z",
        "modified": "2020-07-20T02:58:09.671Z"
    },
    {
        "id": "16",
        "name": "_test_1234_template_2",
        "whatsappId": "req:body:whatsappId",
        "type": "TEXT_TEMPLATE",
        "description": "This is a test template",
        "content": "test template",
        "parameter": "test parameters",
        "language": "{\"en\"}",
        "ownerCompanyId": "64",
        "created": "2020-07-20T02:58:09.698Z",
        "modified": "2020-07-20T02:58:09.698Z"
    }
]
```

### Create new template by using /templates endpoint with POST

#### Sample request

```json
POST http://whatsapp.[region].whispir.com/templates
Headers: 
Content-Type: application/json
Authorisation: Bearer
```

#### Payload

```json
{
  "name": "igniteagain",
  "whatsappId": "5d63f94c_f696_bcbb_9da6_d6853d575f90:igniteagain",
  "content": "Hello, your account has been updated. Please visit {{1}} or {{2}} for more information", 
  "description": "This is a test template",
  "parameter": "{\"parameter_count\":0,\"parameter_data\":[]}"
}
```

\*\* required fields: "name", "whatsappId","content"
\*\* "name": must be low case, number and underscore
\*\* "name": maximum 30 characters

### Sample response

```json
{
    "id": "17",
    "name": "igniteagain",
    "whatsappId": "5d63f94c_f696_bcbb_9da6_d6853d575f90:igniteagain",
    "type": "TEXT_TEMPLATE",
    "description": "This is a test template",
    "content": "Hello, your account has been updated. Please visit {{1}} or {{2}} for more information",
    "parameter": "{\"parameter_count\":0,\"parameter_data\":[]}",
    "language": "{\"en\"}",
    "ownerCompanyId": "64",
    "created": "2020-07-20T05:31:29.537Z",
    "modified": "2020-07-20T05:31:29.537Z"
}
```

### Delete template by using /templates/<templateName> endpoint with DELETE

#### Sample request

```json
DELETE http://whatsapp.[region].whispir.com/templates/testName
```

#### Sample response

```json
{
    "message": "Template with name testName deleted."
}
```

### Retrieve a single template's details by using /templates/<templateID> endpoint with GET

#### Sample request

```json
GET http://whatsapp.[region].whispir.com/templates/templateId
Headers: 
Content-Type: application/json
Authorisation: Bearer
```

#### Sample response

```json
{
    "id": "17",
    "name": "igniteagain",
    "whatsappId": "5d63f94c_f696_bcbb_9da6_d6853d575f90:igniteagain",
    "type": "TEXT_TEMPLATE",
    "description": "This is a test template",
    "content": "Hello, your account has been updated. Please visit {{1}} or {{2}} for more information",
    "parameter": "{\"parameter_count\":0,\"parameter_data\":[]}",
    "language": "{\"en\"}",
    "ownerCompanyId": "64",
    "created": "2020-07-20T05:31:29.537Z",
    "modified": "2020-07-20T05:31:29.537Z"
}
```

### Edit a single template's details by using /templates/<templateID> endpoint with GET

#### Sample request

```json
{
  "name": "otp_1",
  "whatsappId": "5d63f94c_f696_bcbb_9da6_d6853d575f90:igniteagain",
  "content": "Hello, your account has been updated. Please visit {{1}} or {{2}} for more information", 
  "description": "This is a test template",
  "parameter": "{\"parameter_count\":0,\"parameter_data\":[]}"
}
```

#### Sample response

```json
{
    "id": "17",
    "name": "igniteagain",
    "whatsappId": "5d63f94c_f696_bcbb_9da6_d6853d575f90:igniteagain",
    "type": "TEXT_TEMPLATE",
    "description": "This is a test template",
    "content": "Hello, your account has been updated. Please visit {{1}} or {{2}} for more information",
    "parameter": "{\"parameter_count\":0,\"parameter_data\":[]}",
    "language": "{\"en\"}",
    "ownerCompanyId": "64",
    "created": "2020-07-20T05:31:29.537Z",
    "modified": "2020-07-20T05:31:29.537Z"
}
```

## How to get reports using WhatsApp's API /reports endpoint

### View message delivery reports by using the /reports endpoint with GET

#### Sample request

```json
GET http://whatsapp.[region].whispir.com/reports
Headers: 
Content-Type: application/json
Authorisation: Bearer
```

Following query parameters are supported:

- to - Recipient contact number
- from - Sender contact number
- userId - Sender Id
- startDate - Messages sent from this date
- endDate - Messages sent until this date

Sample response:

- Can be downloaded in CSV format.
- Output columns: Message ID, Workspace, User ID, Time, Type, Template, From, To, Status

| Column A | Column B |
| -------- | -------- |
| A1       | B1       |
| A2       | B2       |
| A3       | B3       |
