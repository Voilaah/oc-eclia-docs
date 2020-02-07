# Content

## Introduction

This documentation is describing a sub-part of the Eclia RESTFUL API as a proxy for Arcadier API v2.

No admin token coming from the Arcadier APi will sent over as a basic security protocol.

- all the dates are expressed in UNIX timestamp format
- you can immediately to ping the api here `/api/ping`

> All the provided API endpoints will require the client ID and client Secret coming from the Arcadier Marketplace.


## Getting Started

All your request must included the clientId and clientSecret

#### Body Header

| Params       | Description                                                       |
|--------------|-------------------------------------------------------------------|
| **Content-Type**    | application/json                                       |
| **clientID**    | clientID from your Arcadier marketplace                                       |
| **clientSecret** | clientSecret from your Arcadier marketplace                                    |



## Quick reference

> Available endpoints list: (Last updated 7th Feb 2020)


| Done | Verb  | Path                                                               | Description   | Arcadier API v2 correspondance    |
|------|-------|--------------------------------------------------------------------|-------------- | --------------------------------- |
|[x]| GET   | `/api/arcadier/ping`                                | testing the API |
|[x]| POST   | `/api/arcadier/signup`                                | Register a new buyer user | `https://{marketplace}.arcadier.io/api/v2/accounts/register`
|[x]| POST   | `/api/arcadier/signin`                                | Login a buyer user | `https://{marketplace}.arcadier.io/token`
|[x]| POST   | `/api/eclia/signin`                                | Login a buyer user with existing auth session and redirect to url | `https://{marketplace}.arcadier.io/token`
|[x]| GET   | `/api/arcadier/logout`                                | Logout a buyer user **NEW 25/08/2019** | `https://{marketplace}.arcadier.io/api/v2/accounts/sign-out`
|[ ]| POST   | `/api/arcadier/password/{buyerId}`                                | ~~Reset an existing buyer user password~~ not documented | `???`
|[x]| PUT   | `/api/arcadier/users/{buyerId}`                                | Update an existing buyer user account profile | `https://{marketplace}.arcadier.io/api/v2/users/{buyerId}`
|[x]| GET    | `/api/arcadier/carts/{buyerId}`                                | Get the content of the current cart of a buyer user | `https://{marketplace}.arcadier.io/api/v2/users/{buyerID}/carts`
|[x]| GET   | `/api/arcadier/shipping-methods`                                | Get the marketplace level shipping methods **NEW 25/08/2019** | `https://{marketplace}.arcadier.io/api/v2/{adminId}/shipping-methods`
|[x]| GET   | `/api/arcadier/payment-gateways`                                | Get the marketplace level payment gateways **NEW 06/09/2019** | `https://{marketplace}.arcadier.io/api/v2/admins/{adminId}/payment-gateways`
|[x]| GET   | `/api/eclia/index`                                | Get the necessary data to display the homepage defined in the CMS settings **UPDATED 10/09/2019** | na
|[x]| GET   | ~~`/api/eclia/coupons`~~                                | Get the list of available coupons | na
|[x]| GET   | `/api/eclia/discounts`                                | Get the list of available and active discounts | na
|[x]| POST   | `/api/eclia/apply-discount`                                | Check whether the current user can apply a discount or not | na
|[x]| POST   | `/api/eclia/apply-discount`                                | (@Deprecated in favor of `/api/eclia/cart/apply-discount-code`) Check whether the current user can apply a discount or not | na
|[-]| POST   | `/api/eclia/cart/apply-discount`                                | Check whether the current user can apply a discount or not | na
|[-]| POST   | `/api/eclia/cart/apply-discount-code`                                | Check whether the current user can apply a discount Code or not | na
|[-]| POST   | `/api/eclia/cart/complete-order`                                | Notify Eclia that an order has been complete by a customer | na

