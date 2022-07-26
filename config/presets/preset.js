// Please change this to your repo.
// Remove this to remove the "edit this page" links.
const editUrl = 'https://github.com/MarkShawn2020/docusaurus/edit/master/'

const docs/*preset of docs*/ = {
    remarkPlugins: [require('mdx-mermaid')],
    sidebarPath: require.resolve('./sidebars.js'),
    editUrl
}

const blog/*preset of blog*/ = {
    showReadingTime: true,
    editUrl
}

const theme/*preset of theme*/ = {
    customCss: require.resolve('./theme.css'),
}

const preset = {docs, blog, theme}

module.exports = preset