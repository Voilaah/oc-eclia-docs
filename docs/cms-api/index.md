# Index Data


<a name="cms-endpoints"></a>
# CMS API Endpoints

<a name="cms-index"></a>
### CMS Index Data API

## Get the data required to display a Homepage.

`(GET) /api/eclia/index`


> **Description**: Return the necessary data to dispalay a homepage defined in the cms.
it returns also some web url available to use in a Webview for the mobile.

> Request

(GET) /api/eclia/index
```
 {
 }
```

 > Basic structure of the Response

```
(CODE: 200)
{
    "version": "v1",
    "resource": "cms",
    "status": "success",
    "data": {
        "settings": {
            "baseUrl": "http://eclia.local",
            "mediaUrl": "http://eclia.local/storage/app/media",
            "brandUrl": "http://eclia.local/brand",
            "categoryUrl": "http://eclia.local/category"
        },
        "games_url": {
            "rps_url": "http://eclia.local/games/mogoplay"
        },
        "main_slider": [],
        "featured_categories": [],
        "trending_categories": [],
        "featured_brands": [],
        "advertisements": [],
        "services": []
    }
}
```

> Complete Response


```
(CODE: 200)
{
    "version": "v1",
    "resource": "cms",
    "status": "success",
    "data": {
        "settings": {
            "baseUrl": "http://eclia.local",
            "mediaUrl": "http://eclia.local/storage/app/media",
            "brandUrl": "http://eclia.local/brand",
            "categoryUrl": "http://eclia.local/category"
        },
        "main_slider": [
            {
                "media": "/banner1.jpg",
                "media_mobile": "/M_Banner 1.jpg",
                "url": "/product/1232",
                "target": "product",
                "id": "1a23"
            },
            {
                "media": "/banner2.jpg",
                "media_mobile": "/M_Banner 2.jpg",
                "url": "/category/beauty",
                "target": "category",
                "id": "12b2"
            }
        ],
        "featured_categories": [
            {
                "id": "ad242556-5f1f-4e7b-ad22-bd740d458ad4",
                "name": "Body Care",
                "slug": "health-beauty/body-care",
                "media": "/icons/china_marketplace.png"
            },
            {
                "id": "a5622052-e4bc-4036-a6b7-3142e012826c",
                "name": "Makeup",
                "slug": "health-beauty/makeup",
                "media": "/icons/currently_trending.png"
            },
            {
                "id": "a55bda7b-7ba5-4934-9889-107d7ce31a86",
                "name": "Personal Care",
                "slug": "health-beauty/personal-care",
                "media": "/icons/hot_deals.png"
            },
            {
                "id": "400ed63b-2fcb-4c17-a055-0a1ee9fbe967",
                "name": "Beauty and Body",
                "slug": "health-beauty/beauty-and-body",
                "media": "/icons/all_promotions.png"
            }
        ],
        "trending_categories": [
            {
                "id": "8c44cb68-c207-48cb-a693-60ad0c8b8084",
                "name": "Women's Fashion",
                "slug": "womens-fashion",
                "media": "/homepage-dress-2.png"
            },
            {
                "id": "56816292-bc92-4e52-82a1-1995b2cccf6a",
                "name": "Women's Top",
                "slug": "womens-fashion/womens-top",
                "media": "/homepage-dress-3.png"
            },
            {
                "id": "8c2561d6-e3a1-4640-b4f2-96f696b60051",
                "name": "Shoes",
                "slug": "mens-fashion/shoes",
                "media": "/homepage-kids-section-2.png"
            },
            {
                "id": "d8dd86d1-85e5-4f70-9b78-98dc362156be",
                "name": "Men's Underwear",
                "slug": "mens-fashion/mens-underwear",
                "media": "/homepage-lamp@2x.png"
            },
            {
                "id": "021d789f-f114-463d-a32c-cd1dede948cc",
                "name": "Backpack",
                "slug": "shoes-bags/backpack",
                "media": "/homepage-smarphones-2.png"
            }
        ],
        "featured_brands": [
            {
                "id": "fe17ce47-fd97-4df6-987b-0421163f6e56",
                "name": "ARTY",
                "media": null
            },
            {
                "id": "9fc98ee6-0c7f-49c1-9830-077ca0757674",
                "name": "Big Bro Fashion",
                "media": null
            },
            {
                "id": "2a0c12d3-861b-423b-b3f2-2b822a59d965",
                "name": "Kiwi Kiwi",
                "media": null
            },
            {
                "id": "ba1a3c4b-ad75-4e44-bced-39016629b7f9",
                "name": "Minson Furniture",
                "media": null
            },
            {
                "id": "3e391692-ce3c-4ee8-81fa-708c687deafd",
                "name": "Dora",
                "media": null
            },
            {
                "id": "cea4e7a2-e08c-4ce6-99a1-7ff123f5b1ea",
                "name": "Italy",
                "media": null
            },
            {
                "id": "d3494ae2-c10d-46c7-9388-9a2f401e2539",
                "name": "PEW PEW PEW",
                "media": "https://mogozay.arcadier.io/images/user/youqian-nn7gmexdyx.jpg"
            },
            {
                "id": "b33bc052-72b8-4c72-a7f8-c14a3b33e1d8",
                "name": "The Cushion Factory",
                "media": "https://mogozay.arcadier.io/images/user/the-cushion-factory-spt82ckq5u.jpg"
            }
        ],
        "advertisements": [
            {
                "media": "/SECONDARY_BANNER/DESKTOP_VIEW/destockview_madalacompany_1232x265.jpg",
                "media_mobile": "/SECONDARY_BANNER/MOBILE_VIEW/mobileviewmandala-coltd360x306.jpg",
                "url": "https://www.mogozay.com/en/brand/mandala-coltd?brand=mandala-coltd&sort=bestseller",
                "target": "brand",
                "id": null
            }
        ],
        "services": [
            {
                "title": "We support local brands",
                "description": "We aim to bring onboard more local Myanmar brands for your shopping needs.",
                "media": "/icons/local_brands.png"
            },
            {
                "title": "Payment Options",
                "description": "We accept Cash on Delivery, Bank transfers and Mogo Credits",
                "media": "/icons/payment_options.png"
            },
            {
                "title": "24/7 Customer Service",
                "description": "To provide excellent service, we'll respond to you within 24 hours",
                "media": "/icons/customer_service.png"
            },
            {
                "title": "Delivery Options",
                "description": "A variety of flexible delivery options for you to choose from, including self pick up.",
                "media": "/icons/delivery_options.png"
            }
        ]
    }
}
```
