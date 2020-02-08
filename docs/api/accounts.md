# Accounts

## Buyer

### Update a buyer account

`(POST) /api/arcadier/users/{buyerId}`
or
`(PUT) /api/arcadier/users/{buyerId}`

> **Description**: Update an existing buyer user account data  // TO BE COMPLETED

**Important Notes**:
- Arcadier API does not return a custom field value if it is empty. This is true for the `user account` (https://{marketplace}.arcadier.io/api/v2/users/{userID}) and the `items` (https://{marketplace}.arcadier.io/api/v2/items/{itemID})
- In order to update a custom field, you need to know his specific code (a generated ID). The problem is that there is no easy way to get this code other than going through others of Arcadier APIs (https://{your-marketplace}.arcadier.io/api/v2/admins/{adminID}/custom-field-definitions/) to get and extract the definition of the custom fields coming from the developer packages and store them somewhere. Knowing that this code might change when we will move from sandbox to production. And of course, it is not easy at all to extract which custom field code you will need.

In the context of the current Sandbox Marketplace https://zemasiapalace.sandbox.arcadier.io/

The `Users` custom fields code are:
- for gender: 940f0602de72e91180e6000d3aa0a08d-TNVy0jmN0J-Gender
    - Gender value must be one of this list ['Male, 'Female, 'Other']
- for DOB: 940f0602de72e91180e6000d3aa0a08d-qlF629E9m1-DOB
    - DOB (Date of birth) is expressed in milliseconds (UNIX Timestamp) encapsulated in a string format. Ex: "115862400"


**Request Details:**

| Param        | Description        | Type | Rules |
|--------------|-------------------------------------------------------------------|----|----|
| **token**    |  Value of the buyer token   | string | required |
| **Email**    | Email of the buyer account      | string | optional |
| **FirstName** | FirstName of the buyer account       | string | optional |
| **LastName** | LastName of the buyer account       | string | optional |
| **DisplayName** | DisplayName of the buyer account       | string | optional |
| **Description** | Description of the buyer account       | string | optional |
| **PhoneNumber** | PhoneNumber of the buyer account       | string | optional |

> Request

(POST) /api/arcadier/users/{buyerId}
or
(PUT) /api/arcadier/users/{buyerId}
```
 {
    "token": "ntyFTnkpfFgEUwSNpqHHqPqWXJXjNzoMY88zW-pMJzRUGzFsb6JgYjjbi6ZbrQBKWRDMXfNF1vrGsDI3IHtK3NF4fMrjlu1WhawMaQ8e2OMd9OH2qHJWtsj1UZbvlkIYipSNSs5M_O4UXpcT0-5pRwYHWV4VNcdNaAIfVUo3Po393hUvt2wt2X4eZhI8FQHenKc8pksapWd9MGHYdCjHUYo3LmLjIxsXssBJ980gl0avJJEXN00NgTs2OIhs0VlF5g0anZF7xkvhO8IEYVk1ant5TxChOnum6bkQMrkOjxz6Dk5wzRhwLlIO_lM2yASA1_XVJjTf6hQHXtlVrnaGLYAFL9N9Xojh5-1110Ivk3w_fQl6u5viiqoFRQDlJfe12B4nFkr9MLTBn7hWUZeXafTPx05F2humYL3Xva-Dms7AifnnOo8eti0fBtYEZPGmpgkfjwWRhg4pX_Ezhw9_of840qXuNYwlEHk27BJxY_Mzvzmp50WrLZt1ElGPdNrRJ1UvzYZnC3CHJPAjFjDWCOOSGAU6i5uh01TcsNlYir310rWLjW38sCaPh6m-f8NVS75MiN1iyq299AdVuSTPW6iVQPYiM3gMLpKWSPENPE903-VUdahKgPD2Khkfnbvtuq2BinxRhEniePq4rf6pv6nVJLgqSqcHpgBBG47S7_T9ozZcEWL0IOfSnLk1JvKVB2vw8LqDFzuuSuB62SVzlnMK9lbNq-CmOSab9lzAWCQbRMoi5sBF1uMErgCce8sbWMzm6rMv_IhjEaWny9gp13ixszhEnu9MCmix46CMD3amaq6B",
    "Email": "chris31@voilaah.com",
    "FirstName": "Chris",
    "LastName": "Vidal",
    "DisplayName": "Chris Vidal",
    "Description": "",
    "PhoneNumber": "+6560259868",
    "Media": [
        {
            "MediaUrl": "https://zemasiapalace.sandbox.arcadier.io/images/user/chris-vidal-nsbbijtvac.jpg"
        }
    ],
    "CustomFields": [
        {
            "Code": "940f0602de72e91180e6000d3aa0a08d-TNVy0jmN0J-Gender",
            "Name": "Gender",
            "Values": [
                "Male"
            ]
        },
        {
            "Code": "940f0602de72e91180e6000d3aa0a08d-qlF629E9m1-DOB",
            "Name": "DOB",
            "Values": [
                "115862400"
            ]
        }
    ]
 }
```

 > Response

```
(CODE: 200)
{
    "version": "v1",
    "resource": "buyer",
    "status": "success",
    "data": {
        "ID": "50c4bd2c-bfbc-4681-ad9b-651e63731d79",
        "Email": "chris31@voilaah.com",
        "FirstName": "Chris",
        "LastName": "Vidal",
        "DisplayName": "Chris Vidal",
        "Description": "",
        "PhoneNumber": "+6560259868",
        "DateJoined": 1558948472,
        "Roles": [
            "User"
        ],
        "Media": [],
        "CustomFields": [
            {
                "Code": "940f0602de72e91180e6000d3aa0a08d-TNVy0jmN0J-Gender",
                "Name": "Gender",
                "Values": [
                    "Male"
                ]
            },
            {
                "Code": "940f0602de72e91180e6000d3aa0a08d-qlF629E9m1-DOB",
                "Name": "DOB",
                "Values": [
                    "115862400"
                ]
            }
        ],
        "Onboarded": false,
        "Active": true,
        "Enabled": true,
        "Visible": true
    }
}
```



> Testing purpose

Update the buyer user account `chris31@voilaah.com`

`(POST) /api/arcadier/users/50c4bd2c-bfbc-4681-ad9b-651e63731d79`
`(PUT) /api/arcadier/users/50c4bd2c-bfbc-4681-ad9b-651e63731d79`

