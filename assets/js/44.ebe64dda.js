(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{244:function(e,t,a){"use strict";a.r(t);var r=a(0),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"events"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[e._v("#")]),e._v(" Events")]),e._v(" "),a("p",[e._v("The oc-mall plugin emits the following events:")]),e._v(" "),a("h2",{attrs:{id:"order"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#order"}},[e._v("#")]),e._v(" Order")]),e._v(" "),a("h3",{attrs:{id:"mall-order-beforecreate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mall-order-beforecreate"}},[e._v("#")]),e._v(" "),a("code",[e._v("mall.order.beforeCreate")])]),e._v(" "),a("p",[e._v("An order is about to be created. This event receives the "),a("code",[e._v("$cart")]),e._v(" model that is about to be converted into an "),a("code",[e._v("Order")]),e._v(" model.")]),e._v(" "),a("h3",{attrs:{id:"mall-order-state-changed"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mall-order-state-changed"}},[e._v("#")]),e._v(" "),a("code",[e._v("mall.order.state.changed")])]),e._v(" "),a("p",[e._v("An order's "),a("code",[e._v("OrderState")]),e._v(" has changed. This event receives the modified "),a("code",[e._v("$order")]),e._v(" as a single argument.")]),e._v(" "),a("h3",{attrs:{id:"mall-order-tracking-changed"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mall-order-tracking-changed"}},[e._v("#")]),e._v(" "),a("code",[e._v("mall.order.tracking.changed")])]),e._v(" "),a("p",[e._v("An order's tracking information has changed. This event receives the modified "),a("code",[e._v("$order")]),e._v(" as a single argument.")]),e._v(" "),a("h3",{attrs:{id:"mall-order-payment-state-changed"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mall-order-payment-state-changed"}},[e._v("#")]),e._v(" "),a("code",[e._v("mall.order.payment_state.changed")])]),e._v(" "),a("p",[e._v("An order's payment state has changed. This event receives the modified "),a("code",[e._v("$order")]),e._v(" as a single argument.")]),e._v(" "),a("h3",{attrs:{id:"mall-order-shipped"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mall-order-shipped"}},[e._v("#")]),e._v(" "),a("code",[e._v("mall.order.shipped")])]),e._v(" "),a("p",[e._v("An order has been marked as shipped. This event receives the shipped "),a("code",[e._v("$order")]),e._v(" as a single argument.")]),e._v(" "),a("h2",{attrs:{id:"customer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#customer"}},[e._v("#")]),e._v(" Customer")]),e._v(" "),a("h3",{attrs:{id:"mall-customer-beforesignup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mall-customer-beforesignup"}},[e._v("#")]),e._v(" "),a("code",[e._v("mall.customer.beforeSignup")])]),e._v(" "),a("p",[e._v("This event is emitted before a new customer account is created. This event receives the "),a("code",[e._v("SignupHandler")]),e._v(" implementation\nand all sign up form data as arguments.")]),e._v(" "),a("h3",{attrs:{id:"mall-customer-aftersignup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mall-customer-aftersignup"}},[e._v("#")]),e._v(" "),a("code",[e._v("mall.customer.afterSignup")])]),e._v(" "),a("p",[e._v("This event is emitted after a new customer account was created. This event receives the "),a("code",[e._v("SignupHandler")]),e._v(" implementation\nand the created "),a("code",[e._v("User")]),e._v(" model as arguments.")]),e._v(" "),a("h3",{attrs:{id:"mall-customer-beforeauthenticate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mall-customer-beforeauthenticate"}},[e._v("#")]),e._v(" "),a("code",[e._v("mall.customer.beforeAuthenticate")])]),e._v(" "),a("p",[e._v("This event is emitted when a existing customer tries to sign in. This event receives the "),a("code",[e._v("SignupHandler")]),e._v("\nimplementation and the provided credentials as arguments.")]),e._v(" "),a("h2",{attrs:{id:"cart"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cart"}},[e._v("#")]),e._v(" Cart")]),e._v(" "),a("h3",{attrs:{id:"mall-cart-product-added"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mall-cart-product-added"}},[e._v("#")]),e._v(" "),a("code",[e._v("mall.cart.product.added")])]),e._v(" "),a("p",[e._v("This event is emitted when a product has been added to the cart. It receives the following arguments:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("CartProduct")]),e._v(" model that was updated in the cart")])]),e._v(" "),a("h3",{attrs:{id:"mall-cart-product-removed"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mall-cart-product-removed"}},[e._v("#")]),e._v(" "),a("code",[e._v("mall.cart.product.removed")])]),e._v(" "),a("p",[e._v("This event is emitted when a product has been removed from the cart. It receives the following arguments:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("CartProduct")]),e._v(" model that was removed from the cart")])]),e._v(" "),a("h3",{attrs:{id:"mall-cart-product-updated"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mall-cart-product-updated"}},[e._v("#")]),e._v(" "),a("code",[e._v("mall.cart.product.updated")])]),e._v(" "),a("p",[e._v("This event is emitted when a cart product was updated. It receives the following arguments:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("CartProduct")]),e._v(" model that was updated in the cart")])]),e._v(" "),a("h3",{attrs:{id:"mall-cart-product-quantitychanged"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mall-cart-product-quantitychanged"}},[e._v("#")]),e._v(" "),a("code",[e._v("mall.cart.product.quantityChanged")])]),e._v(" "),a("p",[e._v("This event is emitted when the quantity of a cart product has changed. It receives the following arguments:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("CartProduct")]),e._v(" model that was updated in the cart")]),e._v(" "),a("li",[a("code",[e._v("oldQuantity")]),e._v(" the old quantity value")]),e._v(" "),a("li",[a("code",[e._v("newQuantity")]),e._v(" the new quantity value")])]),e._v(" "),a("h2",{attrs:{id:"checkout"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#checkout"}},[e._v("#")]),e._v(" Checkout")]),e._v(" "),a("h3",{attrs:{id:"mall-checkout-succeeded"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mall-checkout-succeeded"}},[e._v("#")]),e._v(" "),a("code",[e._v("mall.checkout.succeeded")])]),e._v(" "),a("p",[e._v("This event is emitted when a checkout has been completed successfully. It receives a "),a("code",[e._v("PaymentResult")]),e._v(" as a single\nargument.")]),e._v(" "),a("h3",{attrs:{id:"mall-checkout-failed"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mall-checkout-failed"}},[e._v("#")]),e._v(" "),a("code",[e._v("mall.checkout.failed")])]),e._v(" "),a("p",[e._v("This event is emitted when there was a problem during the checkout process. It receives a "),a("code",[e._v("PaymentResult")]),e._v(" as a single\nargument.")]),e._v(" "),a("h2",{attrs:{id:"review"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#review"}},[e._v("#")]),e._v(" Review")]),e._v(" "),a("h3",{attrs:{id:"mall-review-created"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mall-review-created"}},[e._v("#")]),e._v(" "),a("code",[e._v("mall.review.created")])]),e._v(" "),a("p",[e._v("This event is emitted when a review was created. It receives the created "),a("code",[e._v("Review")]),e._v(" model as a single\nargument.")]),e._v(" "),a("h3",{attrs:{id:"mall-review-updated"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mall-review-updated"}},[e._v("#")]),e._v(" "),a("code",[e._v("mall.review.updated")])]),e._v(" "),a("p",[e._v("This event is emitted when a review was updated. It receives the updated "),a("code",[e._v("Review")]),e._v(" model as a single\nargument.")]),e._v(" "),a("h2",{attrs:{id:"product"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#product"}},[e._v("#")]),e._v(" Product")]),e._v(" "),a("h3",{attrs:{id:"mall-product-file-grant-created"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mall-product-file-grant-created"}},[e._v("#")]),e._v(" "),a("code",[e._v("mall.product.file_grant.created")])]),e._v(" "),a("p",[e._v("This event is emitted when a product file grant was created. It receives the created "),a("code",[e._v("ProductFileGrant")]),e._v(" model as\nwell as the related "),a("code",[e._v("Product")]),e._v(" model.")]),e._v(" "),a("p",[e._v("For a usage example see\n"),a("RouterLink",{attrs:{to:"/digging-deeper/virtual-products.html#generate-user-specific-product-files"}},[e._v("Virtual Products -> Generate user specific product files")])],1)])}),[],!1,null,null,null);t.default=s.exports}}]);