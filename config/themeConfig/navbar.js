const navbar = {
    title: '南川笔记',
    logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
    },
    items: [
        {
            type: 'doc',
            docId: 'index',
            position: 'left',
            label: 'Doc',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
        },
    ],
}

module.exports = navbar