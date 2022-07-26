
const versions = require('../../versions.json')
const { getGithubEditUrl } = require('../me')
const editUrl = getGithubEditUrl()

const math = require('remark-math');
const katex = require('rehype-katex');


const docs/*preset of docs*/ = {
    remarkPlugins: [require('mdx-mermaid')],
    sidebarPath: require.resolve('./sidebars.js'),
    editUrl,
    // configure version, ref: https://docusaurus.io/docs/versioning#configuring-versioning-behavior
    lastVersion: 'current',
    versions: {
        current: {
            label: versions[0] + '+',
            path: versions[0] + "+"
        },
    },
    path: 'docs',
    remarkPlugins: [math],
    rehypePlugins: [katex],
}

const blog/*preset of blog*/ = {
    showReadingTime: true,
    editUrl
}

const theme/*preset of theme*/ = {
    customCss: require.resolve('./theme.css'),
}

const preset = { docs, blog, theme }

module.exports = preset