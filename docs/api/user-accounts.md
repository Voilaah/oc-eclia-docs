# Buyer accounts



<a name="buyer-endpoints"></a>
## Buyer API Endpoints

<a name="buyer-signup"></a>
### Buyer user registration

`(POST) /api/arcadier/signup`


> **Description**: Register for a new buyer user account on the Arcadier platform

**Note**: Arcadier API does not offer the possibility to choose the username during the registration process. The `email` filled in during the registration will be copied over the `username` field which will be used for the user authentication.

**Note**: Arcadier Signup API does not return any information.

**Note**: After the buyer user is registered, he is not automatically signed in.


> Request details

| Param        | Description                     | Type | Rules |
|--------------|-------------------------------------------------------------------|
| **email**    | Email of the account                                      |string | email, required |
| **password** | Password of the account                                    | string | required |
| **password_confirmation** | Confirmation Password of the account, must be equal to password parameter | string | required |


 > Request

`(POST) /api/arcadier/signup`
```
{
    "email": "buyer@domain.tld",
    "password": "mypassword",
    "password_confirmation": "mypassword"
}
```

 > Response

```
(CODE: 200)
{
    "version": "v1",
    "resource": "buyer",
    "status": "success",
    "data": []
}
```

> Testing purpose

na



<a name="buyer-login"></a>
### Buyer user authentication with login/password

`(POST) /api/arcadier/signin`

> **Description**: Generate a buyer token

**Note**: Arcadier Signin API does not return any user information but the buyerId only.


> Request details:

| Params       | Description               | Type | Rules |
|--------------|-------------------------------------------------------------------|
| **username**    | Username of the buyer account      |string | required |
| **password** | Password of the buyer account       |string | required |



> Request

`(POST) /api/arcadier/signin`

```
 {
    "username" : "buyer@domain.tld",
    "password" : "mypassword"
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
        "token" : {
            "access_token": "ut3j6pamjUmUxC1lBjqN0gAPWZjLV5jBJRjIvJdXaF09DnPbm35xMv8ZyKZ8d6TjiNeJxi7bWZM_a-9WZuYghx-geEKRiSTDfjw6fr0tIqtySC7qiZCI-UMud-HWXejygW3saKOFz2JFEy8JPHGQ1VeUp3zm9wPf1gjBgqfXKa5keSb3l0O0RwbtLFd9h85UFIQsdfFGWa3UkSRIO-2lj2g7W7zdH8D5uah58s7GfPFNpN6fXNhCy92jpBVVeASygsnBE7XFNljWKcoqNdOejMLmiKwCrtPAdUJZWg6Xc6UCGT1Llkhwnk03WyE_zX6e0Ch0XDw-11ej0W7dbRDURyoyCjwF0FtSG59QbpOPwr5WbXneoIo92CRa_lkXVvavIfxXMq4izvTZO6KJqki6NDBTKVLAlc7D5pR_eKia5hNy4N8kKrQ4doQhrrCR0yLkrugJQ8dpUb4bX783TzybAtKvvu9UNRmkMNn5_Xd9xLnWMhmNSoFnAQ7NdiLn8kMxWKVSRxqXqKr18_RTYXkOgqWgihRiubPI0M0kReaQit28qAhwRMG0qw2xVTQdr1h-5OaPfhSD_2o-9f6RgUkObvEJ8-ELIlEhVVwkX3kJQMwfLNS6KwkFMfy-lOA2NaV2M-fgiguElUxMimxQg9GxaW0EkHDGpj9LysRupDdvG2c3fAwbZDIqc3M3Ex4enDactuwcWUj1usBQYfzA37Sd43GJQZDRsWg73WMdK_5avKuuT9J-quZCCT3Fi_U2M874FURybp2d27MpzhYrusYMybXMuio",
            "token_type": "bearer",
            "expires_in": 107999,
            "refresh_token": "7678a3f96ee14bf8a8e8d2ede023d6fd",
            "UserId": "9bef05e1-aaf8-4f70-86a7-9576f359125c"
        },
        "user": {
            "Id": "12011",
            "UserName": "chris31@voilaah.com",
            "FirstName": "chris",
            "LastName": "vidal",
            "Email": "chris31@voilaah.com",
            "DisplayName": "chris vidal",
            "PhoneNumber": "123",
            "Images": [
                "0" = "/areas/user/assets/account/images/default_user.svg"
            ],
            "DateJoined": "2019-05-01T00:00:00Z",
            "Role": "User",
            "Description":
            "CustomFields": [
                "0": {
                    "Code": "940f0602de72e91180e6000d3aa0a08d-TNVy0jmN0J-Gender",
                    "Name": "Gender",
                    "Values": [
                        {
                            "0": "Male",
                        }
                    ]
                },
                "1": {
                    "Code": "940f0602de72e91180e6000d3aa0a08d-qlF629E9m1-DOB",
                    "Name": "DOB",
                    "Values": [
                        {
                            "0": "1973-09-03 00:00:00.0000000",
                        }
                    ]
                }
            ]
        }
    }
}
```

> Testing purpose

This examples should return a buyer token.

```
{
    "username": "chris31@voilaah.com",
    "password": "password1"
}
```

```
{
    "username": "Tanoo Buyer",
    "password": "tanoobuyer"
}
```

```
{
    "username": "Tanoo Buyer 2",
    "password": "tanoobuyer2"
}
```




<a name="buyer-logout"></a>
## Logout a buyer user

`(GET) /api/arcadier/logout`

> **Description**: Log an existing buyer token out

**Request Details:**

| Param        | Description        | Type | Rules |
|--------------|-------------------------------------------------------------------|
| **token**    | Value of the token    | string | required |

> Request

(POST) /api/arcadier/logout
```
 {
    "token" : "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Qvdm9pbGFhaC9zY2hlZHVsZXIvcHJvamVjdC9hcGkvYXV0aC9nZW5lcmF0ZV90b2tlbiIsImlhdCI6MTUzNDgzNzQyNCwiZXhwIjoxNTM0ODQ0NjI0LCJuYmYiOjE1MzQ4Mzc0MjQsImp0aSI6InhMNFJQMnpBd1MwTDZzVDgifQ.TsM3r14zt3ElV8hE9CGVzL5Lwi6FCIa9ceAxC7-rFC0",
 }
```

 > Response

```
(CODE: 200)
{
    "version": "v1",
    "resource": "buyer",
    "status": "success",
    "data": []
}
```


> Testing purpose

na


<a name="buyer-password"></a>
## Reset buyer user password

`(POST) /api/arcadier/password/{buyerId}`

> **Description**: Reset a buyer user password


> Testing purpose

na



<a name="buyer-account"></a>
## Update a buyer user account

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
|--------------|-------------------------------------------------------------------|
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

