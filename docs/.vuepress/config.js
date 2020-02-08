module.exports = {
    base: '/oc-eclia-docs/',
    title: 'All-in-One Marketplace',
    description: 'All-in-One Marketplace solution for Arcadier and October CMS',
    markdown: {
        lineNumbers: true,
        anchor: {permalink: true, permalinkBefore: true, permalinkSymbol: '#'}
    },
    themeConfig: {
        sidebar: [
            {
                title: 'Installation',
                children: [
                    '/getting-started/content'
                ]
            },
            {
                title: 'CMS API',
                children: [
                    '/cms-api/data'
                ]
            },
            {
                title: 'API',
                children: [
                    '/api/authentication',
                    '/api/accounts',
                    '/api/discounts',
                    '/api/cart',
                    '/api/invoice'
                ]
            },
            {
                title: 'API Guidelines',
                children: [
                    '/development/guidelines'
                ]
            },
            {
                title: 'Webhooks',
                children: [
                    '/marketplace-webhooks/content'
                ]
            },
            {
                title: 'Changelog',
                children: [
                    '/changelog/1.1.0'
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
