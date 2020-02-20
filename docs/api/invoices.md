# Invoices

## Update Invoice

This API helps to tight up the orders to the `invoice No` provided previously by the pre-checkout Arcadier API.


`(POST) /api/arcadier/invoice/{invoiceId}`
or
`(PUT) /api/arcadier/invoice/{invoiceId}`

Used to update the payment status of an invoice in Arcadier System.
This API is a Wrapper for Aracadier API v2 *Post-Checkout - Update payments for Invoice Number*:

`https://{your-marketplace}.arcadier.io/api/v2/admins/{adminID}/invoices/{invoiceID}`

*As such, the payload need to be the exact payload expected by Arcadier API*

::: tip
- for offline payment, invoice status should be send as:
```
    "PaymentStatus": "Waiting For Payment",
```
:::


```
{
    "token" : "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Qvdm9pbGFhaC9zY2hlZHVsZXIvcHJvamVjdC9hcGkvYXV0aC9nZW5lcmF0ZV90b2tlbiIsImlhdCI6MTUzNDgzNzQyNCwiZXhwIjoxNTM0ODQ0NjI0LCJuYmYiOjE1MzQ4Mzc0MjQsImp0aSI6InhMNFJQMnpBd1MwTDZzVDgifQ.TsM3r14zt3ElV8hE9CGVzL5Lwi6FCIa9ceAxC7-rFC0",
    "data" : [
        {
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
        },{
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
    ]
}
```




## Send Invoice Email

Used to send the invoice email to the consumer after fully checkout.

`(GET) /api/arcadier/email/{invoiceId}`

