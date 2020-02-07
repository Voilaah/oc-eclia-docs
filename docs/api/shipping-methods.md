# Shipping Methods

## Get the marketplace level shipping methods list.

`(GET) /api/arcadier/shipping-methods`


> **Description**: Return the marketplace level shipping methods list.

> Request

(GET) /api/arcadier/shipping-methods
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
    "data": [
        {
            "ID": "68228341-9566-4ead-9ac6-e75838538284",
            "Courier": null,
            "Method": null,
            "Price": 0,
            "CombinedPrice": null,
            "CurrencyCode": "MMK",
            "Description": "Door-to-door Delivery (Outside Yangoon)",
            "CustomFields": [
                {
                    "Code": "097D0871-194D-4C66-B42F-F8E358B45497",
                    "Name": "DeliveryOptions",
                    "DataFieldType": null,
                    "Values": [
                        "{\"IsAllCountries\":false,\"Countries\":\"Myanmar\",\"MinimumLeadTime\":\"1\",\"DeliveryFrom\":\"Yangon Warehouse\",\"CalculationType\":\"weight\",\"Rates\":[{\"Name\":\"0.5 - 1\",\"MinimumRange\":\"0.50\",\"MaximumRange\":\"1\",\"Onwards\":\"false\",\"Cost\":\"2000\"},{\"Name\":\"2 onwards\",\"MinimumRange\":\"2\",\"MaximumRange\":\"\",\"Onwards\":\"true\",\"Cost\":\"4000\"}]}"
                    ]
                }
            ]
        },
        {
            "ID": "7f3cace8-9b4a-4206-8b4f-778f6b4b5320",
            "Courier": null,
            "Method": null,
            "Price": 0,
            "CombinedPrice": null,
            "CurrencyCode": "MMK",
            "Description": "Door-to-door Delivery (Within Yangoon)",
            "CustomFields": [
                {
                    "Code": "097D0871-194D-4C66-B42F-F8E358B45497",
                    "Name": "DeliveryOptions",
                    "DataFieldType": null,
                    "Values": [
                        "{\"IsAllCountries\":false,\"Countries\":\"Myanmar\",\"MinimumLeadTime\":\"1\",\"DeliveryFrom\":\"Yangon Warehouse\",\"CalculationType\":\"weight\",\"Rates\":[{\"Name\":\"Items Up to 1kg\",\"MinimumRange\":\"0\",\"MaximumRange\":\"1\",\"Onwards\":\"false\",\"Cost\":\"2000\"},{\"Name\":\"Items between 1kg - 2kg\",\"MinimumRange\":\"1.01\",\"MaximumRange\":\"2\",\"Onwards\":\"false\",\"Cost\":\"2500\"},{\"Name\":\"Items between 2kg - 4kg\",\"MinimumRange\":\"2.01\",\"MaximumRange\":\"4\",\"Onwards\":\"false\",\"Cost\":\"3000\"},{\"Name\":\"Items between 4kg - 6kg\",\"MinimumRange\":\"4.01\",\"MaximumRange\":\"6\",\"Onwards\":\"false\",\"Cost\":\"3500\"},{\"Name\":\"Items between 6kg - 8kg\",\"MinimumRange\":\"6.01\",\"MaximumRange\":\"8\",\"Onwards\":\"false\",\"Cost\":\"4300\"},{\"Name\":\"Additional kg after 8kg\",\"MinimumRange\":\"8.01\",\"MaximumRange\":\"\",\"Onwards\":\"true\",\"Cost\":\"5000\"}]}"
                    ]
                }
            ]
        }
    ]
}
```
