# Orders

## Update Orders

`(POST) /api/arcadier/order`

Used to update the status of an array of order in Arcadier System.
This is a Wrapper for Aracadier API v2 *Post Checkout - Edit Order Details (Admin Auth)*:

`https://{your-marketplace}.arcadier.io/api/v2/admins/{adminID}/orders`

*As such, the payload need to be the exact payload expected by Arcadier API*


::: tip
- the attribute `DiscountAmount` must be filled in only for the first order of the array.
- the attribute `Freight` must be filled for every order of the array.
- also note the presence of the custom field `OrderDeliveryNotes`
- for offline payment, order status should be send as:
```
    "FulfilmentStatus": "Created",
    "PaymentStatus": "Waiting For Payment",
```
:::


```
    "token" : "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Qvdm9pbGFhaC9zY2hlZHVsZXIvcHJvamVjdC9hcGkvYXV0aC9nZW5lcmF0ZV90b2tlbiIsImlhdCI6MTUzNDgzNzQyNCwiZXhwIjoxNTM0ODQ0NjI0LCJuYmYiOjE1MzQ4Mzc0MjQsImp0aSI6InhMNFJQMnpBd1MwTDZzVDgifQ.TsM3r14zt3ElV8hE9CGVzL5Lwi6FCIa9ceAxC7-rFC0",
    "data": [
        {
            "ID": "00000000-0000-0000-0000-000000000000",
            "FulfilmentStatus": "Created",
            "PaymentStatus": "Waiting For Payment",
            "CartItemType": "delivery",
            "DiscountAmount": -1500,
            "Freight": 1000,
            "DeliveryToAddress": {
                "ID": "00000000-0000-0000-0000-000000000000"
            },
            "CustomFields" : [
                    [
                        "Code" : "OrderDeliveryNotes",
                        "Values" : [
                            'my phone number is 432423432'
                        ]
                    ]
                ]
        },
        {
            "ID": "00000000-0000-0000-0000-000000000000",
            "FulfilmentStatus": "Created",
            "PaymentStatus": "Waiting For Payment",
            "CartItemType": "delivery",
            "DiscountAmount": 0,
            "Freight": 0,
            "DeliveryToAddress": {
                "ID": "00000000-0000-0000-0000-000000000000"
            },
            "CustomFields" : [
                    [
                        "Code" : "OrderDeliveryNotes",
                        "Values" : [
                            'my phone number is 432423432'
                        ]
                    ]
                ]
        }
]
}
```



## Completing an Order

_**Requires authentication**_

Notify the CMS of the order completion by the buyer so that the CMS can eventually update product stock, discounts usage, ...

> Should be called upon a successful purchase with the Arcadier Invoice and Orders informations



`(POST) /api/eclia/order/complete/{invoiceId}`

> Request details

| Param                 | Description                       | Type      | Rules     |
|-----------------------|-----------------------------------|-----------|-----------|
| **invoiceId**         | Arcadier Invoice No               | string    | required  |
| **userId**            | user ID (Arcadier GUID)           | string    | required  |
| **purchasedItems**    | array of purchased items          | array     | required  |
| **appliedDiscounts**  | array of applied discounts Id     | array     | required  |


> Request

`(POST) /api/eclia/order/complete`

```
{
    "token" : "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Qvdm9pbGFhaC9zY2hlZHVsZXIvcHJvamVjdC9hcGkvYXV0aC9nZW5lcmF0ZV90b2tlbiIsImlhdCI6MTUzNDgzNzQyNCwiZXhwIjoxNTM0ODQ0NjI0LCJuYmYiOjE1MzQ4Mzc0MjQsImp0aSI6InhMNFJQMnpBd1MwTDZzVDgifQ.TsM3r14zt3ElV8hE9CGVzL5Lwi6FCIa9ceAxC7-rFC0",
    "data" : {
        "invoiceId": "000000000000",
        "userId": "9bef05e1-aaf8-4f70-86a7-9576f359125c",
        "deliveryNotes": "my phone number is 1122334455",
        "purchasedItems": [
            {
                "parentItemId": "00000000-0000-0000-0000-000000000000",
                "id": "98765fg-aaf8-4f70-86a7-9576f359125c",
                "cartItemId": "5454f52-aaf8-4f70-86a7-9576f359125c",
                "deliveryAddressId": "df24ff2f-aaf8-4f70-86a7-9576f359125c",
                "shippingId": "abcdef-aaf8-4f70-86a7-9576f359125c",
                "qty": 2
            },
            {
                "parentItemId": "00000000-0000-0000-0000-000000000000",
                "id": "3565rg6-aaf8-4f70-86a7-9576f359125c",
                "cartItemId": "ds4154f-aaf8-4f70-86a7-9576f359125c",
                "deliveryAddressId": "35fds66-aaf8-4f70-86a7-9576f359125c",
                "shippingId": "abcdef-aaf8-4f70-86a7-9576f359125c",
                "qty": 1
            }
        ],
        "appliedDiscounts": [
            "1",
            "15"
        ]
    }
}
```


 > Response

```
(CODE: 200)
{
    "version": "v1",
    "resource": "cart",
    "status": "success",
    "data": {
        "result": true,
        "message": "Thank you"
    }
}
```

 > Error Response

```
(CODE: 400)
{
    "version": "v1",
    "resource": "cart",
    "status": "success",
    "data": {
        "result": false,
        "message": "A specific error message."
    }
}
```
