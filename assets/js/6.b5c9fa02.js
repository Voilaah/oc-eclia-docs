(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{206:function(s,a,e){"use strict";e.r(a);var n=e(0),t=Object(n.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"accounts"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#accounts"}},[s._v("#")]),s._v(" Accounts")]),s._v(" "),e("h2",{attrs:{id:"buyer"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#buyer"}},[s._v("#")]),s._v(" Buyer")]),s._v(" "),e("h3",{attrs:{id:"update-a-buyer-account"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#update-a-buyer-account"}},[s._v("#")]),s._v(" Update a buyer account")]),s._v(" "),e("p",[e("code",[s._v("(POST) /api/arcadier/users/{buyerId}")]),s._v("\nor\n"),e("code",[s._v("(PUT) /api/arcadier/users/{buyerId}")])]),s._v(" "),e("blockquote",[e("p",[e("strong",[s._v("Description")]),s._v(": Update an existing buyer user account data  // TO BE COMPLETED")])]),s._v(" "),e("p",[e("strong",[s._v("Important Notes")]),s._v(":")]),s._v(" "),e("ul",[e("li",[s._v("Arcadier API does not return a custom field value if it is empty. This is true for the "),e("code",[s._v("user account")]),s._v(" (https://{marketplace}.arcadier.io/api/v2/users/{userID}) and the "),e("code",[s._v("items")]),s._v(" (https://{marketplace}.arcadier.io/api/v2/items/{itemID})")]),s._v(" "),e("li",[s._v("In order to update a custom field, you need to know his specific code (a generated ID). The problem is that there is no easy way to get this code other than going through others of Arcadier APIs (https://{your-marketplace}.arcadier.io/api/v2/admins/{adminID}/custom-field-definitions/) to get and extract the definition of the custom fields coming from the developer packages and store them somewhere. Knowing that this code might change when we will move from sandbox to production. And of course, it is not easy at all to extract which custom field code you will need.")])]),s._v(" "),e("p",[s._v("In the context of the current Sandbox Marketplace https://zemasiapalace.sandbox.arcadier.io/")]),s._v(" "),e("p",[s._v("The "),e("code",[s._v("Users")]),s._v(" custom fields code are:")]),s._v(" "),e("ul",[e("li",[s._v("for gender: 940f0602de72e91180e6000d3aa0a08d-TNVy0jmN0J-Gender\n"),e("ul",[e("li",[s._v("Gender value must be one of this list ['Male, 'Female, 'Other']")])])]),s._v(" "),e("li",[s._v("for DOB: 940f0602de72e91180e6000d3aa0a08d-qlF629E9m1-DOB\n"),e("ul",[e("li",[s._v('DOB (Date of birth) is expressed in milliseconds (UNIX Timestamp) encapsulated in a string format. Ex: "115862400"')])])])]),s._v(" "),e("p",[e("strong",[s._v("Request Details:")])]),s._v(" "),e("table",[e("thead",[e("tr",[e("th",[s._v("Param")]),s._v(" "),e("th",[s._v("Description")]),s._v(" "),e("th",[s._v("Type")]),s._v(" "),e("th",[s._v("Rules")])])]),s._v(" "),e("tbody",[e("tr",[e("td",[e("strong",[s._v("token")])]),s._v(" "),e("td",[s._v("Value of the buyer token")]),s._v(" "),e("td",[s._v("string")]),s._v(" "),e("td",[s._v("required")])]),s._v(" "),e("tr",[e("td",[e("strong",[s._v("Email")])]),s._v(" "),e("td",[s._v("Email of the buyer account")]),s._v(" "),e("td",[s._v("string")]),s._v(" "),e("td",[s._v("optional")])]),s._v(" "),e("tr",[e("td",[e("strong",[s._v("FirstName")])]),s._v(" "),e("td",[s._v("FirstName of the buyer account")]),s._v(" "),e("td",[s._v("string")]),s._v(" "),e("td",[s._v("optional")])]),s._v(" "),e("tr",[e("td",[e("strong",[s._v("LastName")])]),s._v(" "),e("td",[s._v("LastName of the buyer account")]),s._v(" "),e("td",[s._v("string")]),s._v(" "),e("td",[s._v("optional")])]),s._v(" "),e("tr",[e("td",[e("strong",[s._v("DisplayName")])]),s._v(" "),e("td",[s._v("DisplayName of the buyer account")]),s._v(" "),e("td",[s._v("string")]),s._v(" "),e("td",[s._v("optional")])]),s._v(" "),e("tr",[e("td",[e("strong",[s._v("Description")])]),s._v(" "),e("td",[s._v("Description of the buyer account")]),s._v(" "),e("td",[s._v("string")]),s._v(" "),e("td",[s._v("optional")])]),s._v(" "),e("tr",[e("td",[e("strong",[s._v("PhoneNumber")])]),s._v(" "),e("td",[s._v("PhoneNumber of the buyer account")]),s._v(" "),e("td",[s._v("string")]),s._v(" "),e("td",[s._v("optional")])])])]),s._v(" "),e("blockquote",[e("p",[s._v("Request")])]),s._v(" "),e("p",[s._v("(POST) /api/arcadier/users/{buyerId}\nor\n(PUT) /api/arcadier/users/{buyerId}")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v(' {\n    "token": "ntyFTnkpfFgEUwSNpqHHqPqWXJXjNzoMY88zW-pMJzRUGzFsb6JgYjjbi6ZbrQBKWRDMXfNF1vrGsDI3IHtK3NF4fMrjlu1WhawMaQ8e2OMd9OH2qHJWtsj1UZbvlkIYipSNSs5M_O4UXpcT0-5pRwYHWV4VNcdNaAIfVUo3Po393hUvt2wt2X4eZhI8FQHenKc8pksapWd9MGHYdCjHUYo3LmLjIxsXssBJ980gl0avJJEXN00NgTs2OIhs0VlF5g0anZF7xkvhO8IEYVk1ant5TxChOnum6bkQMrkOjxz6Dk5wzRhwLlIO_lM2yASA1_XVJjTf6hQHXtlVrnaGLYAFL9N9Xojh5-1110Ivk3w_fQl6u5viiqoFRQDlJfe12B4nFkr9MLTBn7hWUZeXafTPx05F2humYL3Xva-Dms7AifnnOo8eti0fBtYEZPGmpgkfjwWRhg4pX_Ezhw9_of840qXuNYwlEHk27BJxY_Mzvzmp50WrLZt1ElGPdNrRJ1UvzYZnC3CHJPAjFjDWCOOSGAU6i5uh01TcsNlYir310rWLjW38sCaPh6m-f8NVS75MiN1iyq299AdVuSTPW6iVQPYiM3gMLpKWSPENPE903-VUdahKgPD2Khkfnbvtuq2BinxRhEniePq4rf6pv6nVJLgqSqcHpgBBG47S7_T9ozZcEWL0IOfSnLk1JvKVB2vw8LqDFzuuSuB62SVzlnMK9lbNq-CmOSab9lzAWCQbRMoi5sBF1uMErgCce8sbWMzm6rMv_IhjEaWny9gp13ixszhEnu9MCmix46CMD3amaq6B",\n    "Email": "chris31@voilaah.com",\n    "FirstName": "Chris",\n    "LastName": "Vidal",\n    "DisplayName": "Chris Vidal",\n    "Description": "",\n    "PhoneNumber": "+6560259868",\n    "Media": [\n        {\n            "MediaUrl": "https://zemasiapalace.sandbox.arcadier.io/images/user/chris-vidal-nsbbijtvac.jpg"\n        }\n    ],\n    "CustomFields": [\n        {\n            "Code": "940f0602de72e91180e6000d3aa0a08d-TNVy0jmN0J-Gender",\n            "Name": "Gender",\n            "Values": [\n                "Male"\n            ]\n        },\n        {\n            "Code": "940f0602de72e91180e6000d3aa0a08d-qlF629E9m1-DOB",\n            "Name": "DOB",\n            "Values": [\n                "115862400"\n            ]\n        }\n    ]\n }\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br")])]),e("blockquote",[e("p",[s._v("Response")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('(CODE: 200)\n{\n    "version": "v1",\n    "resource": "buyer",\n    "status": "success",\n    "data": {\n        "ID": "50c4bd2c-bfbc-4681-ad9b-651e63731d79",\n        "Email": "chris31@voilaah.com",\n        "FirstName": "Chris",\n        "LastName": "Vidal",\n        "DisplayName": "Chris Vidal",\n        "Description": "",\n        "PhoneNumber": "+6560259868",\n        "DateJoined": 1558948472,\n        "Roles": [\n            "User"\n        ],\n        "Media": [],\n        "CustomFields": [\n            {\n                "Code": "940f0602de72e91180e6000d3aa0a08d-TNVy0jmN0J-Gender",\n                "Name": "Gender",\n                "Values": [\n                    "Male"\n                ]\n            },\n            {\n                "Code": "940f0602de72e91180e6000d3aa0a08d-qlF629E9m1-DOB",\n                "Name": "DOB",\n                "Values": [\n                    "115862400"\n                ]\n            }\n        ],\n        "Onboarded": false,\n        "Active": true,\n        "Enabled": true,\n        "Visible": true\n    }\n}\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br"),e("span",{staticClass:"line-number"},[s._v("35")]),e("br"),e("span",{staticClass:"line-number"},[s._v("36")]),e("br"),e("span",{staticClass:"line-number"},[s._v("37")]),e("br"),e("span",{staticClass:"line-number"},[s._v("38")]),e("br"),e("span",{staticClass:"line-number"},[s._v("39")]),e("br"),e("span",{staticClass:"line-number"},[s._v("40")]),e("br")])]),e("blockquote",[e("p",[s._v("Testing purpose")])]),s._v(" "),e("p",[s._v("Update the buyer user account "),e("code",[s._v("chris31@voilaah.com")])]),s._v(" "),e("p",[e("code",[s._v("(POST) /api/arcadier/users/50c4bd2c-bfbc-4681-ad9b-651e63731d79")]),s._v(" "),e("code",[s._v("(PUT) /api/arcadier/users/50c4bd2c-bfbc-4681-ad9b-651e63731d79")])])])}),[],!1,null,null,null);a.default=t.exports}}]);