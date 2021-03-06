# Discounts

## Active Discounts

Get the list of available and active discounts. Any past or future discount is ignored in this list.

~~`(GET) /api/eclia/coupons`~~ is NOW *DEPRECATED*

`(GET) /api/eclia/discounts`

::: tip
They are *3 types of discount*:
- Fixed amount ("type": "fixed_amount")
- a rate ("type": "rate")
- Alternate Shipping amount ("type": "shipping")

They are *3 rules to apply a discount*:
- order total reach a value (trigger="total") => this discount has to be automatically aplied on the cart items if the condfition is true
- discount code (trigger="code") => manual applicaiton by the buyer
- specific product ID (trigger="product")  => this discount has to be automatically aplied on the cart items if the condfition is true
- specific product ID (trigger="product")  => there are 2 attributes holding the product ID impacted by this discount: "product_external_id" is related to Arcadier, and "product_id" related to the CMS
:::



> Request

`(GET) /api/eclia/discounts`

 > Basic structure of the Response

```
(CODE: 200)
{
    "version": "v1",
    "resource": "cms",
    "status": "success",
    "data": [
        {
            "id": 1,
            "name": "Launch Promo",
            "code": "LAUNCHPROMO",
            "product_id": null,
            "type": "fixed_amount",
            "trigger": "code",
            "rate": null,
            "max_number_of_usages": 2,
            "valid_from": "2019-11-01 08:00:00",
            "expires": "2019-09-30 00:00:00",
            "number_of_usages": 0,
            "shipping_description": "",
            "shipping_guaranteed_days_to_delivery": null,
            "created_at": "2019-08-20 16:31:48",
            "updated_at": "2019-09-12 17:27:11",
            "shipping_prices": [],
            "amounts": [],
            "totals_to_reach": []
        },
        {
            "id": 10,
            "name": "Promo Test",
            "code": "TEST01",
            "product_id": null,
            "type": "fixed_amount",
            "trigger": "code",
            "rate": null,
            "max_number_of_usages": 10,
            "valid_from": "2019-11-01 08:00:00",
            "expires": "2019-11-30 08:00:00",
            "number_of_usages": 9,
            "shipping_description": "",
            "shipping_guaranteed_days_to_delivery": null,
            "created_at": "2019-10-30 15:05:07",
            "updated_at": "2019-11-12 18:08:56",
            "shipping_prices": [],
            "amounts": [
                {
                    "id": 1013,
                    "price": 100000,
                    "price_formatted": "Ks 1,000",
                    "currency": {
                        "id": 1,
                        "code": "MMK",
                        "symbol": "Ks",
                        "rate": 1,
                        "decimals": 0
                    }
                }
            ],
            "totals_to_reach": []
        },
        {
            "id": 11,
            "name": "MOGOSTAFF",
            "code": "MOGOSTAFF1119",
            "product_id": null,
            "type": "fixed_amount",
            "trigger": "code",
            "rate": null,
            "max_number_of_usages": 50,
            "valid_from": "2019-11-14 08:00:00",
            "expires": "2019-11-30 08:00:00",
            "number_of_usages": 11,
            "shipping_description": "",
            "shipping_guaranteed_days_to_delivery": null,
            "created_at": "2019-11-14 01:02:28",
            "updated_at": "2019-11-14 23:54:24",
            "shipping_prices": [],
            "amounts": [
                {
                    "id": 1208,
                    "price": 300000,
                    "price_formatted": "Ks 3,000",
                    "currency": {
                        "id": 1,
                        "code": "MMK",
                        "symbol": "Ks",
                        "rate": 1,
                        "decimals": 0
                    }
                }
            ],
            "totals_to_reach": []
        },
        {
            "id": 12,
            "name": "Free Delivery Nation Wide",
            "code": "MMID3PROMO",
            "product_id": null,
            "type": "shipping",
            "trigger": "code",
            "rate": null,
            "max_number_of_usages": 5000,
            "valid_from": "2019-11-14 08:00:00",
            "expires": "2019-11-17 08:00:00",
            "number_of_usages": 2,
            "shipping_description": "Free Delivery Nation Wide, 5 days within yangon and 10 days out of Yangon",
            "shipping_guaranteed_days_to_delivery": null,
            "created_at": "2019-11-14 02:02:28",
            "updated_at": "2019-11-14 18:40:03",
            "shipping_prices": [],
            "amounts": [],
            "totals_to_reach": []
        },
        {
            "id": 13,
            "name": "Free Delivery Nation Wide",
            "code": "MAWEEK11PROMO",
            "product_id": null,
            "type": "shipping",
            "trigger": "code",
            "rate": null,
            "max_number_of_usages": 5000,
            "valid_from": "2019-11-15 00:00:00",
            "expires": "2019-11-20 00:00:00",
            "number_of_usages": 0,
            "shipping_description": "Free Delivery Nation Wide",
            "shipping_guaranteed_days_to_delivery": 5,
            "created_at": "2019-11-15 17:49:47",
            "updated_at": "2019-11-15 17:49:47",
            "shipping_prices": [
                {
                    "id": 1414,
                    "price": 0,
                    "price_formatted": "Ks 0",
                    "currency": {
                        "id": 1,
                        "code": "MMK",
                        "symbol": "Ks",
                        "rate": 1,
                        "decimals": 0
                    }
                }
            ],
            "amounts": [],
            "totals_to_reach": []
        },
        {
            "id": 14,
            "name": "Free Delivery Nation Wide",
            "code": null,
            "product_id": 3271,
            "product_external_id": "000000-000000-000000",
            "type": "shipping",
            "trigger": "product",
            "rate": null,
            "max_number_of_usages": 5000,
            "valid_from": "2019-11-20 00:00:00",
            "expires": "2019-11-24 00:00:00",
            "number_of_usages": 0,
            "shipping_description": "Free Delivery Nation Wide",
            "shipping_guaranteed_days_to_delivery": 3,
            "created_at": "2019-11-21 13:21:39",
            "updated_at": "2019-11-21 13:21:39",
            "shipping_prices": [
                {
                    "id": 1482,
                    "price": 0,
                    "price_formatted": "Ks 0",
                    "currency": {
                        "id": 1,
                        "code": "MMK",
                        "symbol": "Ks",
                        "rate": 1,
                        "decimals": 0
                    }
                }
            ],
            "amounts": [],
            "totals_to_reach": []
        },
        {
            "id": 15,
            "name": "Test Rate Discount",
            "code": "CODE4RATE",
            "product_id": null,
            "type": "rate",
            "trigger": "code",
            "rate": 10,
            "max_number_of_usages": 300,
            "valid_from": "2019-11-25 00:00:00",
            "expires": "2019-11-30 00:00:00",
            "number_of_usages": 0,
            "shipping_description": "",
            "shipping_guaranteed_days_to_delivery": null,
            "created_at": "2019-11-26 16:47:18",
            "updated_at": "2019-11-26 16:47:18",
            "shipping_prices": [],
            "amounts": [],
            "totals_to_reach": []
        },
        {
            "id": 16,
            "name": "Test Order Total to Reach",
            "code": null,
            "product_id": null,
            "type": "fixed_amount",
            "trigger": "total",
            "rate": null,
            "max_number_of_usages": 500,
            "valid_from": "2019-12-01 00:00:00",
            "expires": "2019-12-31 00:00:00",
            "number_of_usages": 0,
            "shipping_description": "",
            "shipping_guaranteed_days_to_delivery": null,
            "created_at": "2019-12-04 17:23:14",
            "updated_at": "2019-12-04 17:23:14",
            "shipping_prices": [],
            "amounts": [
                {
                    "id": 1967,
                    "price": 50000,
                    "price_formatted": "Ks 500",
                    "currency": {
                        "id": 1,
                        "code": "MMK",
                        "symbol": "Ks",
                        "rate": 1,
                        "decimals": 0
                    }
                }
            ],
            "totals_to_reach": [
                {
                    "id": 1966,
                    "price": 1000000,
                    "price_formatted": "Ks 10,000",
                    "currency": {
                        "id": 1,
                        "code": "MMK",
                        "symbol": "Ks",
                        "rate": 1,
                        "decimals": 0
                    }
                }
            ]
        }
    ]
}
```



## Applying a discount

_**Requires authentication**_

Check and Return whether a discount can be applied on the cart (other than a discount code).
This API should be called everytime an item is added to the cart and a potential discount can be applied on the cart.

Please see the other <a href="#apply-discount-code">API for the discounts Code</a>.


`(POST) /api/eclia/cart/apply-discount`

> Request details

| Param        | Description                     | Type | Rules |
|--------------|-------------------------------------------------------------------|----|----|
| **userId**    | user ID (Arcadier GUID)                                      |string | required |
| **discountId** | discount Id (can be any discount type)                                   | string | required |



> Request

`(POST) /api/eclia/cart/apply-discount`
```
{
    "userId": "9bef05e1-aaf8-4f70-86a7-9576f359125c",
    "discountId": "1"
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
        "message": "discount id can be applied by the user."
    }
}
```


 > Error Response

```
(CODE: 404)
{
    "version": "v1",
    "resource": "cart",
    "status": "success",
    "data": {
        "result": false,
        "mode": "check",
        "message": "This discount id is not valid."
    }
}
```

```
(CODE: 404)
{
    "version": "v1",
    "resource": "cart",
    "status": "success",
    "data": {
        "result": false,
        "mode": "apply",
        "message": "You can use the same discount only once."
    }
}
```

## Applying a discount code

_**Requires authentication**_

Check and Return whether a user can apply a discount code.

> Should be called when the buyer is entering a discount code in the cart


Please see the other <a href="#apply-a-discount">API for the other discounts</a>.

You still have to notify the CMS if it has been applied at the end of the checkout by usong the <a href="#cms-cart-complete-order">Complete Order API</a>



`(POST) /api/eclia/cart/apply-discount-code`

> Request details

| Param             | Description                                       | Type      | Rules     |
|-------------------|---------------------------------------------------|-----------|-----------|
| **userId**        | user ID (Arcadier GUID)                           |string     | required  |
| **discountCode**  | discount Code (must be of a type trigger="code")  | string    | required  |


> Request

`(POST) /api/eclia/cart/apply-discount-code`
```
{
    "userId": "9bef05e1-aaf8-4f70-86a7-9576f359125c",
    "discountCode": "MOGOTG500KOFF"
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
        "message": "discount code can be applied by the user."
    }
}
```

```
(CODE: 200)
{
    "version": "v1",
    "resource": "cart",
    "status": "success",
    "data": {
        "result": true,
        "message": "discount code has been successfully counted as applied by the user."
    }
}
```


 > Error Response

```
(CODE: 404)
{
    "version": "v1",
    "resource": "cart",
    "status": "success",
    "data": {
        "result": false,
        "message": "This discount code is not valid." /* "message": "This promo code has expired. You already used this code." */
    }
}
```

```
(CODE: 404)
{
    "version": "v1",
    "resource": "cart",
    "status": "success",
    "data": {
        "result": false,
        "message": "You can use the same promo code only once."
    }
}
```

