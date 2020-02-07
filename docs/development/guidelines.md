# API Usage Guidelines

<a name="api-usage-guidelines"></a>
## API Usage Guidelines

**Based on a typical user journey**

| User Action              | Checks                                   | Corresponding API calls                                                       |
| ------------------------ | ---------------------------------------- | ----------------------------------------------------------------------------- |
| Display Homepage    |                         na |   `(GET) /api/eclia/index`                                     |
| Display Category page    |                        na |  @todo                                      |
| Display Product page |                        na |              `(GET) /api/eclia/discounts` <br/> @todo                       |
| Action 'Apply Discount Code' | check discount code before apply   |    `(GET) /api/eclia/cart/apply-discount-code`                               |
| Action 'add to cart' | check product stock <br/> check shipping method <br/> any discounts to apply? <br/> update cart  |    `(GET) /api/eclia/cart/apply-discount`  <br/> @todo                                |
| Display Cart page |                       na |     @todo                                |
| Action 'Checkout' | |   @todo                                  |
| Display Checkout page |                       na |  @todo                                   |
| Action 'Place Order' | |   `(POST) /api/eclia/cart/complete-order`  <br/> @todo                                  |
| Display Login | - is user login? |                        na                                   |
| Action 'Login' | check required fields  |    `(POST) /api/arcadier/signin`                                 |
| Action 'Logout' | - is user login? |     `(GET) /api/arcadier/logout`                                |
| Display User Profile | - is user login? |  @todo                                   |
| Action 'Update User Profile' | check required fields |   `(POST) /api/arcadier/users/{buyerId}`                                  |
| Action 'Add address' | check required fields |           @todo                          |
| Action 'Update address' | check required fields |        @todo                             |
| Action 'Delete address' | check not last address |        @todo                             |

