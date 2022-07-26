const footer = {
    style: 'dark',
    links: [
        /**
         * footer 1
         */
        {
            title: 'Docs',
            items: [
                {
                    label: 'Docs',
                    to: '/docs/index',
                },
                                {
                    label: 'Blog',
                    to: '/blog',
                },
            ],
        },

        /**
         * footer 2
         */
        {
            title: 'Community',
            items: [
                {
                    label: 'Stack Overflow',
                    href: 'https://stackoverflow.com/questions/tagged/docusaurus',
                },
                {
                    label: 'Discord',
                    href: 'https://discordapp.com/invite/docusaurus',
                },
                {
                    label: 'Twitter',
                    href: 'https://twitter.com/docusaurus',
                },
            ],
        },

        /**
         * footer 3
         */
        {
            title: 'Docusaurus',
            items: [
                {
                    label: 'GitHub',
                    href: 'https://github.com/facebook/docusaurus',
                },
                {
                    label: 'documentation',
                    href: 'https://docusaurus.io/docs/category/guides'
                }
            ],
        },
    ],
    copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
}

module.exports = footer
