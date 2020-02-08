# Webhook Documentation


## Introduction

A [webhook](https://en.wikipedia.org/wiki/Webhook) is an HTTP callback that pushes event information to a server endpoint. In the case of Eclia CMS, a webhook pushes relevant information to the callback URL whenever an event, such as adding a category or updating an item, occurs on Arcadier Platform.

After receiving event information, the callback URL must send a 200 OK response back. Event receipt is considered failed if the callback URL sends a response other than 200 OK or fails to respond within 10 seconds of receiving event information. Similarly, a 410 Gone response results in automatic removal of the webhook subscription.

It uses standard [RESTful](https://en.wikipedia.org/wiki/Representational_state_transfer) architecture:
- Responds with standard HTTP response codes to indicate errors.
- Returns JSON.

### Base URL

All endpoint URLs referenced in this documentation start with a base part.

`http://{servername}/webhook/{token}`

### Authentication

No Authentication is required.

### Errors and Responses

| Code |  Description                                                       |   |
|--------------|-------------------------------------------------------------------|--|
| 200 | ```{ "message": "OK" }``` | Everything worked as expected |
| 400 | ```{ "message": "Exception: details of the error"}``` | Bad Request - Often missing a required parameter  |
| 404 | ```{ "message": "ModelNotFoundException: Resource Not found"}``` | Not Found - Resource XYX not found |
| 422 | ```{ "message": "ValidationException: Required field"}``` | Unprocessable Entity (validation failed) |
| 500, 502, 503, 504 | ```{ "message": "Error: details of the error"}``` | something is wrong on Eclia's side |





### List of available endpoints related to Eclia Webhooks

| Progress | Verb  | Endpoint       | Description                                                       |
|--------------|-------------------------------------------------------------------|
| [x] | GET  | `/docs/webhook`    | this documentation                                       |
| [ ] | POST  | `/webhook/{token}`    | the main entry point to the Eclia Webhooks. {token} is set in Eclia CMS Settings                                        |
| [x] | GET  | `/webhook/{token}/ping`    | Testing the Webhook response  |
| [x] | GET  | `/webhook/{token}/hook:list`    | List of the available event callbacks offered by Eclia CMS and their readiness                                       |
| [x] | GET  | `/webhook/{token}/history`    | Return the history of Live events                                       |

Note: For the staging environment, the {token} settings is: `KQPN2Xc4glSb4ZjQkOIMgopWfwXlky`

So for this staging environment, the base URL is `https://app-voilaah.site/eclia/webhook/KQPN2Xc4glSb4ZjQkOIMgopWfwXlky`


#### Request Header

> All the request header must contains:


| Params       | Description                                                       |
|--------------|-------------------------------------------------------------------|
| **User-Agent**    | arcadier.io                                       |
| **Content-Type**    | application/json                                       |


## Getting Started

### Testing the webhook

> Request

`(GET) /webhook/{token}/ping`

> Response

```
{
    "random_string": "ZIXPSPxL8JtMbOWJOYV1gpXc6n9bwq",
    "timestamp": 1562224157
}
```

### Getting the list of available hooks


`(GET) /webhook/{token}/hook:list`

> Response

```json
{
    {
        "ressource": "hook:list",
        "version": "1.1.0",
        "hooks": {
            "category.created"  => "available",
            "category.updated"  => "available",
            "category.deleted"  => "available",
            "merchant.created"  => "in progress",
            "merchant.updated"  => "in progress",
            "merchant.deleted"  => "available",
            "item.created"      => "in progress",
            "item.updated"      => "in progress",
            "item.deleted"      => "available",
            "variant.created"   => "na",
            "variant.updated"   => "na",
            "variant.deleted"   => "available",
        }
    }
}
```




## Webhooks details

> The basic common structure of a hook is a followed:

`(POST) /webhook/{token}`


```
{
  "eventName": "abc.xyz", /* Example: "category.created" */
  "mode": "xxx", /* Test or Live */
  "data": {
  }
}
```

| Attribute name | Data type  | Description                                                       |
|--------------|-------------------------------------------------------------------|
| eventName | string **required**  | the event name to call. Value taken from the hooks list `/webhook/{token}/hook:list`                                       |
| mode | string **required**  |  can take the value `Test` or `Live`. In the `Test` mode, the data will be tested for validation but no data will be created, updated or deleted in Eclia CMS (1).|
| data | object **required**  |  the data of your object |


(1): Exception for item create and item update: Even if the mode `Test` is used, the item will be created or updated.


### Hook category

`(POST) /webhook/{token}`

#### Create new category
`development status:` available
`eventName:` "category.created"

```
{
  "eventName": "category.created",
  "mode": "Test",
  "data": {
    "ID": "99999-88888-6666",
    "Name": "Bottle",
    "Description": "Best Water Bottle in the world.",
    "SortOrder": 10156,
    "ParentID": null
  }
}
```

| Attribute name | Data type  | Description                                                       |
|--------------|-------------------------------------------------------------------|
| ID | string **required**  | original Arcadier category ID                                      |
| Name | string **required**  | original Arcadier category Name                                      |
| Description | string **required**  | original Arcadier category Description                                      |
| SortOrder | integer **required**  | original Arcadier category SortOrder                                      |
| ParentID | string **optional**  | original Arcadier category Parent Category                                      |

#### Update a category
`development status:` available
`eventName:` "category.updated"

```
{
  "eventName": "category.updated",
  "mode": "Test",
  "data": {
    "ID": "99999-88888-6666",
    "Name": "new Bottle name",
    "Description": "Best Water Bottle in the world for sure.",
    "SortOrder": 10156,
    "ParentID": null
  }
}
```


| Attribute name | Data type  | Description                                                       |
|--------------|-------------------------------------------------------------------|
| ID | string **required**  | original Arcadier category ID                                      |
| Name | string **required**  | original Arcadier category Name                                      |
| Description | string **required**  | original Arcadier category Description                                      |
| SortOrder | integer **required**  | original Arcadier category SortOrder                                      |
| ParentID | string **optional**  | original Arcadier category Parent Category                                      |



#### Delete a category
`development status:` available
"eventName": "category.deleted"

```
{
  "eventName": "category.deleted",
  "mode": "Test",
  "data": {
    "ID" :  "11111-44444-3333", // Category GUID
    "Name": "Black Friday Sales" // Category Name (optional)
    }
}
```

| Attribute name | Data type  | Description                                                       |
|--------------|-------------------------------------------------------------------|
| ID | array **required**  | original Arcadier category ID                                      |

Notes: If the category has children category, there will be deleted as well.


### Hook merchant

`(POST) /webhook/{token}`


#### Create new merchant
`development status:` in progress
`eventName:` "merchant.created"


```
{
  "eventName": "merchant.created",
  "mode": "Test",
  "data": {
  }
}
```


### Hook item

`(POST) /webhook/{token}`

#### Create new item
`development status:` in progress
`eventName:` "item.created"

```
{
  "eventName": "item.created",
  "mode": "Test",
  "data": {
  }
}
```

#### Delete an existing item and the existing variants attached
`development status:` available
`eventName:` "item.deleted"

```
{
  "eventName": "item.deleted",
  "mode": "Test", // Test or Live
  "data": {
    "ID": "3986b0d5-9831-46fa-8f2a-bf2e3437dcd5", // Item GUID
    "Name": "Pigeon Anti-Bacterial Wet Tissue 20S" // Item Name (optional)
  }
}
```


### Hook variant

#### Delete an existing variant
`development status:` available
`eventName:` "variant.deleted"

```
{
  "eventName": "variant.deleted",
  "mode": "Test", // Test or Live
  "data": {
    "ID": "123432-423423", // Variant GUID
    "Name": "Pigeon Anti-Bacterial Wet Tissue 20S" // Variant Name (optional)
  }
}
```


### Get the history
`development status:` in progress

return the last 100 hook events

`(GET) /webhook/{token}/history`

```
[
    {
        "id": 6,
        "event_name": "item.deleted",
        "data": {
            "ID": "0ee23046-6869-4c4d-8994-fa5d9be37e68"
        },
        "created_at": "2019-11-15 17:18:20",
        "updated_at": "2019-11-15 17:18:20"
    },
    {
        "id": 4,
        "event_name": "item.deleted",
        "data": {
            "ID": "fe270558-5f2d-4186-a6a9-58020859c92f"
        },
        "created_at": "2019-11-15 17:09:38",
        "updated_at": "2019-11-15 17:09:38"
    }
]


```

# Error Handling

- if the {token} is empty or incorrect, a `403:Forbidden` error is sent back to the client.
- if the User-Agent header param is not set properly, a `403:Forbidden` error is sent back to the client.


# Specific Notes

na
