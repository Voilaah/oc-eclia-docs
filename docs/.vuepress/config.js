module.exports = {
    base: '/oc-eclia-docs/',
    title: 'oc-eclia',
    description: 'Marketplace solution for Arcadier and October CMS',
    markdown: {
        lineNumbers: true,
        anchor: {permalink: true, permalinkBefore: true, permalinkSymbol: '#'}
    },
    themeConfig: {
        sidebar: [
            {
                title: 'Installation',
                children: [
                    '/getting-started/content',
                ]
            },
            {
                title: 'CMS API',
                children: [
                    '/cms-api/index'
                ]
            },
            {
                title: 'Marketplace API',
                children: [
                    '/api/user-accounts',
                    '/api/discounts',
                    '/api/cart',
                    '/api/invoice',
                    // '/components/products',
                    // '/components/products-filter',
                    // '/components/product-reviews',
                    // '/components/cart',
                    // '/components/discount-applier',
                    // '/components/checkout',
                    // '/components/signup',
                    // '/components/wishlists',
                    // '/components/wishlist-button',
                    // '/components/payment-method-selector',
                    // '/components/shipping-method-selector',
                    // '/components/address-selector',
                    // '/components/my-account',
                    // '/components/orders-list',
                    // '/components/address-form',
                    // '/components/currency-picker',
                    // '/components/customer-profile',
                    // '/components/address-list',
                ]
            },
            {
                title: 'Guidelines',
                children: [
                    '/development/guidelines',
                    // '/development/product-model',
                    // '/development/variant-model',
                    // '/development/order-model',
                    // '/development/cart-model',
                    // '/development/wishlist-model',
                    // '/development/payment-providers',
                    // '/development/pricing-information',
                    // '/development/events',
                    // '/development/pdf',
                    // '/development/integration',
                    // '/development/console-commands',
                ]
            },
            {
                title: 'Changelog',
                children: [
                    '/changelog/1.1.0',
                ]
            }
        ],
        repo: 'voilaah/oc-eclia-docs',
        nav: [
            {text: 'Guide', link: '/'},
            {text: 'All-in-One Marketplace', link: 'https://app-voilaah.site/all-in-one-mkt'},
        ],
        docsRepo: 'voilaah/oc-eclia-docs',
        docsDir: 'docs',
        docsBranch: 'master',
        editLinks: true,
        editLinkText: 'Help us improve this page!',
    }
}
