# Invoice / Orders



<a name="buyer-invoice"></a>
### Invoice API

Used to update the payment status of an invoice.

`(POST) /api/arcadier/invoice/{invoiceId}`
or
`(PUT) /api/arcadier/invoice/{invoiceId}`


Wrapper for Aracadier API v2 *Post-Checkout - Update payments for Invoice Number*:

`https://{your-marketplace}.arcadier.io/api/v2/admins/{adminID}/invoices/{invoiceID}`

*As such, the payload need to be the exact payload expected by Arcadier API*

Note:
- for offline payment, data should be send as:

```
    "PaymentStatus": "Waiting For Payment",
```


```
{
    "token" : "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Qvdm9pbGFhaC9zY2hlZHVsZXIvcHJvamVjdC9hcGkvYXV0aC9nZW5lcmF0ZV90b2tlbiIsImlhdCI6MTUzNDgzNzQyNCwiZXhwIjoxNTM0ODQ0NjI0LCJuYmYiOjE1MzQ4Mzc0MjQsImp0aSI6InhMNFJQMnpBd1MwTDZzVDgifQ.TsM3r14zt3ElV8hE9CGVzL5Lwi6FCIa9ceAxC7-rFC0",
    "data" : {
        "InvoiceNo": "000000000000",
        "Payee": {
          "ID": "00000000-0000-0000-0000-000000000000"
        },
        "Payer": {
          "ID": "00000000-0000-0000-0000-000000000000"
        },
        "Order": {
          "ID": "00000000-0000-0000-0000-000000000000"
        },
        "Status": "Waiting For Payment",
        "Gateway": {
          "Code": "string"
        },
        "DateTimePaid": 0
    }
}
```

<a name="buyer-order"></a>
### Order API


Used to update the status of an order.

`(POST) /api/arcadier/order`

Wrapper for Aracadier API v2 *Post Checkout - Edit Order Details (Admin Auth)*:

`https://{your-marketplace}.arcadier.io/api/v2/admins/{adminID}/orders`

*As such, the payload need to be the exact payload expected by Arcadier API*


**Note**:
- the attributes `DiscountAmount` and `Freight` must be filled in only for the first order of the array.
- also note the presence of the custom field `OrderDeliveryNotes`
- for offline payment, data should be send as:

```
    "FulfilmentStatus": "Created",
    "PaymentStatus": "Waiting For Payment",
```

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
            "PaymentStatus": "stWaiting For Payment",
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



<a name="buyer-email"></a>
### Send Invoice Email API to consumer

Used to send the invoice email to the consumer after fully checkout.

`(GET) /api/arcadier/email/{invoiceId}`

