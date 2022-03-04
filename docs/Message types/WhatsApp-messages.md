# WhatsApp messages

## Overview

Customers can send templated WhatsApp messages via Whispir's API. 

Templates must first be submitted for approval by WhatsApp in your WhatsApp Business Manager account before any template messages can be sent from Whispir. Please reach out to your Whispir account manager to help you get started.

### WhatsApp structured data object

This object can sent via a `POST` call to the `/messages` endpoint.

The JSON scheme is as follows:

```json json_schema
{
  "object": "whatsapp": {
    "description": "This object is a WhatsApp message payload to be used with the POST /messages method.",
    "type": "object",
    "properties": {
      "type": {
        "type": "string",
        "minLength": 1,
        "description": "The type of WhatsApp message to be sent, e.g. \"template\"."
      },
      "name": {
        "type": "string",
        "minLength": 1,
        "description": "Internal name for message e.g. \"aue_image_quick_reply\"."
      },
      "content": {
        "type": "object",
        "description": "The WhatsApp message payload.",
        "required": [
          "body"
        ],
        "properties": {
          "header": {
            "type": "object",
            "description": "Optional header for a Whatsapp message.",
            "properties": {
              "image": {
              "type": "string",
               "description": "Link to image location."
               },
              "video": {
              "type": "string",
              "description": "Link to video location."
               },
              "document": {
              "type": "string",
              "description": "Link to document location."
               },
             "location": {
             "type": "string",
             "description": "“Longitude”, \"latitude\", \"name\", and \"address\"."
      }
    }
  },
          
          "body": {
            "type": "array",
            "description": "Message body is an array of strings. Each string should be labeled 'text'. Each string will appear as one line of text in WhatsApp messasge. Minimum 1 string required. ",
            "items": {
              "type": "string"
            }
          },
          "buttons": {
 "type": "object",
    "description": "Optional button object for a WhatsApp message. Multiple buttons can be added when placed in an array.",
    "properties": {
      "index": {
        "type": "string"
      },
      "sub_type": {
        "type": "string",
        "description": "The type of dynamic button i.e. \"quick reply\" or \"url\"."
      },
      "text": {
        "type": "string",
        "description": "Required if sub_type = url. The url destination when the button is clicked."
      },
      "payload": {
        "type": "string",
        "description": "Required if sub_type = quick reply. Name of the quick reply buttons configured within your WhatsApp Business Manager account."
      }
    },
    "required": [
      "index",
      "sub_type"
    ]
          }
        }
      }
    },
    "required": [
      "type",
      "name",
      "content"
    ]
  }
}
```