---
tags: [Getting Started]
---

# Sending messages

By now you should be able to connect to the API, issue requests and receive responses. You can now send your first SMS message using the /messages endpoint of the API. For this reason we'll need to change the headers too, according to what already seen in the JSON and XML Headers section
```JSON
Sending an SMS using cURL
curl --location --request POST 'https://api.au.whispir.com/messages' --header 'x-api-key: 89aUAtBusdfohhZI6zoFNasd89023rsdf3X3h44c' --header 'Authorization: Basic am9obi5zbWl0aDpteXBhc3N3b3Jk' --header 'Content-Type: application/vnd.whispir.message-v1+json' --header 'Accept: application/vnd.whispir.message-v1+json' --data-raw '{
   "to" : "61400400400",
   "subject" : "Test SMS Message",
   "body" : "This is the body of my test SMS message"
}'

Sending an SMS using a REST API Client
POST https://api.<region>.whispir.com/messages
 
Authorization: Basic am9obi5zbWl0aDpteXBhc3N3b3Jk
x-api-key: 89aUAtBusdfohhZI6zoFNasd89023rsdf3X3h44c
Content-Type: application/vnd.whispir.message-v1+json
Accept: application/vnd.whispir.message-v1+json
 
{
   "to" : "61400400400",
   "subject" : "Test SMS Message",
   "body" : "This is the body of my test SMS message"
}
```
```XML
Sending an SMS using cURL
curl --location --request POST 'https://api.au.whispir.com/messages' --header 'x-api-key: 89aUAtBusdfohhZI6zoFNasd89023rsdf3X3h44c' --header 'Authorization: Basic am9obi5zbWl0aDpteXBhc3N3b3Jk' --header 'Content-Type: application/vnd.whispir.message-v1+xml' --header 'Accept: application/vnd.whispir.message-v1+xml' --data-raw '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<ns2:message xmlns:ns2="http://schemas.api.whispir.com">
    <to>61400400400</to>
    <subject>Test SMS Message</subject>
    <body>This is the body of my test SMS message</body>
</ns2:message>'

 

Sending an SMS using a REST API Client
POST https://api.<region>.whispir.com/messages
 
Authorization: Basic am9obi5zbWl0aDpteXBhc3N3b3Jk
x-api-key: 89aUAtBusdfohhZI6zoFNasd89023rsdf3X3h44c
Content-Type: application/vnd.whispir.message-v1+xml
Accept: application/vnd.whispir.message-v1+xml
 
 
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<ns2:message xmlns:ns2="http://schemas.api.whispir.com">
    <to>61400400400</to>
    <subject>Test SMS Message</subject>
    <body>This is the body of my test SMS message</body>
</ns2:message>
```
Once you submit this Whispir will give you back a 202 - Accepted message stating that your request has been accepted for processing and your phone should be buzzing within a few seconds. For more information on all the other Whispir resources continue through this documentation

## Free-trial SMS quota
Whispir offers its customers 14 days to try the platform for free before purchasing a plan. The trial is meant to show you how easy it is to use the Whispir API. For this reason it comes with 100 free SMSes and unlimited emails but without voice and alias features

In particular when the SMS threshold is exceeded the messages will not be accepted anymore, as in the sample below

## Sample Response
403 - Forbidden
```json
# Free SMS quota exceeded

{
    "errorSummary": "You do not have permission to access that resource or perform that function. Please contact your system administrator for support@whispir.com",
    "errorText": "SMS Quota reached",
    "link": []
}
```