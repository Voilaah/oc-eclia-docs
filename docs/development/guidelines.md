# API Usage Guidelines

## Buyer journey

### Current version as of 10th Feb 2020

**Based on a typical user journey**

| User Action                   | Checks                                    | Corresponding API calls                                                       |
| ----------------------------- | ----------------------------------------- | ----------------------------------------------------------------------------- |
| Display Homepage              |                         na                |   `(GET) /api/eclia/index`                                                    |
| Display Category page         |                        na                 |  na                                                                        |
| Display Product page          |                        na                 |              `(GET) /api/eclia/discounts` <br/>                            |
| Action 'Apply Discount Code'  | check discount code before apply          |    `(GET) /api/eclia/cart/apply-discount-code`                                |
| Action 'add to cart'          | check product stock <br/> check shipping method <br/> any discounts to apply? <br/> update cart  |    `(GET) /api/eclia/cart/apply-discount`  <br/> |
| Display Cart page             |                       na                  |     na                                                                     |
| Action 'Checkout'             |                                           |   na                                                                       |
| Display Checkout page         |                       na                  |  na                                                                        |
| Action 'Place Order'          |                                           |   `(POST) /api/eclia/invoice`  <br/>`(POST) /api/eclia/order`  <br/>`(POST) /api/eclia/order/complete/{invoiceId}`  <br/>`(GET) /api/arcadier/email/{invoiceId}`  <br/>                         |
| Display Login                 | - is user login?                          |                        na                                                     |
| Action 'Login'                | check required fields                     |    `(POST) /api/arcadier/signin`                                              |
| Action 'Logout'               | - is user login?                          |     `(GET) /api/arcadier/logout`                                              |
| Display User Profile          | - is user login?                          |  na                                                                        |
| Action 'Update User Profile'  | check required fields                     |   `(POST) /api/arcadier/users/{buyerId}`                                      |
| Action 'Add address'          | check required fields                     |           na                                                               |
| Action 'Update address'       | check required fields                     |        na                                                                  |
| Action 'Delete address'       | check not last address                    |        na                                                                  |


### Previsional version


**Based on a typical user journey**

| User Action                   | Checks                                    | Corresponding API calls                                                       |
| ----------------------------- | ----------------------------------------- | ----------------------------------------------------------------------------- |
| Display Homepage              |                         na                |   `(GET) /api/eclia/index`                                                    |
| Display Category page         |                        na                 |  @todo                                                                        |
| Display Product page          |                        na                 |              `(GET) /api/eclia/discounts` <br/> @todo                         |
| Action 'Apply Discount Code'  | check discount code before apply          |    `(GET) /api/eclia/cart/apply-discount-code`                                |
| Action 'add to cart'          | check product stock <br/> check shipping method <br/> any discounts to apply? <br/> update cart  |    `(GET) /api/eclia/cart/apply-discount`  <br/> @todo                                |
| Display Cart page             |                       na                  |     @todo                                                                     |
| Action 'Checkout'             |                                           |   @todo                                                                       |
| Display Checkout page         |                       na                  |  @todo                                                                        |
| Action 'Place Order'          |                                           |   `(POST) /api/eclia/cart/complete-order`  <br/> @todo                        |
| Display Login                 | - is user login?                          |                        na                                                     |
| Action 'Login'                | check required fields                     |    `(POST) /api/arcadier/signin`                                              |
| Action 'Logout'               | - is user login?                          |     `(GET) /api/arcadier/logout`                                              |
| Display User Profile          | - is user login?                          |  @todo                                                                        |
| Action 'Update User Profile'  | check required fields                     |   `(POST) /api/arcadier/users/{buyerId}`                                      |
| Action 'Add address'          | check required fields                     |           @todo                                                               |
| Action 'Update address'       | check required fields                     |        @todo                                                                  |
| Action 'Delete address'       | check not last address                    |        @todo                                                                  |
