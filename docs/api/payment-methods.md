# Payment methods

## Get the marketplace level payment gateways list.

`(GET) /api/arcadier/payment-gateways`


> **Description**: Return the marketplace level payment gateways list.

> Request

(GET) /api/arcadier/payment-gateways
```
 {
 }
```

 > Response

```
(CODE: 200)
{
    "version": "v1",
    "resource": "marketplace",
    "status": "success",
    "data": {
        "TotalRecords": 4,
        "PageNumber": 1,
        "PageSize": 4,
        "Records": [
            {
                "Code": "stripe",
                "Description": "Stripe",
                "Gateway": "Stripe",
                "Active": null,
                "Logo": null,
                "CustomFields": null,
                "Meta": {
                    "clientid": "",
                    "publickey": "",
                    "secretkey": "",
                    "mandatory": ""
                }
            },
            {
                "Code": "paypal-adaptive",
                "Description": "Adpative Payment",
                "Gateway": "PayPal",
                "Active": null,
                "Logo": null,
                "CustomFields": null,
                "Meta": {
                    "clientid": "",
                    "clientsecret": "",
                    "username": "",
                    "password": "",
                    "signature": "",
                    "mandatory": "False",
                    "admin-paypal": "True"
                }
            },
            {
                "Code": "omise",
                "Description": "Omise",
                "Gateway": "Omise",
                "Active": null,
                "Logo": null,
                "CustomFields": null,
                "Meta": {
                    "chain-url": "",
                    "publickey": "",
                    "secretkey": "",
                    "mandatory": ""
                }
            },
            {
                "Code": "A870F9B4-2602-4814-A3EA-28A5D3311CFE",
                "Description": "By verifying this payment method, all your buyers will be able to checkout your items using Cash on Delivery and settlement has to be handled by you manually if they were to use this payment method.",
                "Gateway": "Cash on delivery",
                "Active": null,
                "Logo": null,
                "CustomFields": null,
                "Meta": null
            }
        ]
    }
}
```

