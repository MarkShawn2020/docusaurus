const { getGithubRepoUrl } = require("../me")

/** @type {import("@docusaurus/theme-common/src/index").Navbar} */
const navbar = {
    title: '南川笔记',
    logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
    },
    items: [
        {
            type: 'doc', // 加了这个就直接跳转到doc主页了，to就无效了
            // to: '/docs/SLAM/A01-findLights',
            docId: 'index',
            position: 'left',
            label: 'My Docs',
        },
        {to: '/blog', label: 'My Blog', position: 'left'},
        {
            href: getGithubRepoUrl(),
            label: 'GitHub',
            position: 'right',
        },
    ],
}

module.exports = navbar