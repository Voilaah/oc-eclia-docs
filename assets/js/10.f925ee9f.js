(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{210:function(s,a,e){"use strict";e.r(a);var n=e(0),t=Object(n.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"invoices"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#invoices"}},[s._v("#")]),s._v(" Invoices")]),s._v(" "),e("h2",{attrs:{id:"update-invoice"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#update-invoice"}},[s._v("#")]),s._v(" Update Invoice")]),s._v(" "),e("p",[s._v("This API helps to tight up the orders to the "),e("code",[s._v("invoice No")]),s._v(" provided previously by the pre-checkout Arcadier API.")]),s._v(" "),e("p",[e("code",[s._v("(POST) /api/arcadier/invoice/{invoiceId}")]),s._v("\nor\n"),e("code",[s._v("(PUT) /api/arcadier/invoice/{invoiceId}")])]),s._v(" "),e("p",[s._v("Used to update the payment status of an invoice in Arcadier System.\nThis API is a Wrapper for Aracadier API v2 "),e("em",[s._v("Post-Checkout - Update payments for Invoice Number")]),s._v(":")]),s._v(" "),e("p",[e("code",[s._v("https://{your-marketplace}.arcadier.io/api/v2/admins/{adminID}/invoices/{invoiceID}")])]),s._v(" "),e("p",[e("em",[s._v("As such, the payload need to be the exact payload expected by Arcadier API")])]),s._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),e("ul",[e("li",[s._v("for offline payment, invoice status should be send as:")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('    "PaymentStatus": "Waiting For Payment",\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('{\n    "token" : "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Qvdm9pbGFhaC9zY2hlZHVsZXIvcHJvamVjdC9hcGkvYXV0aC9nZW5lcmF0ZV90b2tlbiIsImlhdCI6MTUzNDgzNzQyNCwiZXhwIjoxNTM0ODQ0NjI0LCJuYmYiOjE1MzQ4Mzc0MjQsImp0aSI6InhMNFJQMnpBd1MwTDZzVDgifQ.TsM3r14zt3ElV8hE9CGVzL5Lwi6FCIa9ceAxC7-rFC0",\n    "data" : [\n        {\n            "InvoiceNo": "000000000000",\n            "Payee": {\n              "ID": "00000000-0000-0000-0000-000000000000"\n            },\n            "Payer": {\n              "ID": "00000000-0000-0000-0000-000000000000"\n            },\n            "Order": {\n              "ID": "00000000-0000-0000-0000-000000000000"\n            },\n            "Status": "Waiting For Payment",\n            "Gateway": {\n              "Code": "string"\n            },\n            "DateTimePaid": 0\n        },{\n            "InvoiceNo": "000000000000",\n            "Payee": {\n              "ID": "00000000-0000-0000-0000-000000000000"\n            },\n            "Payer": {\n              "ID": "00000000-0000-0000-0000-000000000000"\n            },\n            "Order": {\n              "ID": "00000000-0000-0000-0000-000000000000"\n            },\n            "Status": "Waiting For Payment",\n            "Gateway": {\n              "Code": "string"\n            },\n            "DateTimePaid": 0\n        }\n    ]\n}\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br"),e("span",{staticClass:"line-number"},[s._v("35")]),e("br"),e("span",{staticClass:"line-number"},[s._v("36")]),e("br"),e("span",{staticClass:"line-number"},[s._v("37")]),e("br"),e("span",{staticClass:"line-number"},[s._v("38")]),e("br")])]),e("h2",{attrs:{id:"send-invoice-email"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#send-invoice-email"}},[s._v("#")]),s._v(" Send Invoice Email")]),s._v(" "),e("p",[s._v("Used to send the invoice email to the consumer after fully checkout.")]),s._v(" "),e("p",[e("code",[s._v("(GET) /api/arcadier/email/{invoiceId}")])])])}),[],!1,null,null,null);a.default=t.exports}}]);