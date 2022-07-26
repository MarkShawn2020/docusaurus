
const versions = require('../../versions.json')
const { getGithubEditUrl } = require('../me')
const editUrl = getGithubEditUrl()

const math = require('remark-math');
const katex = require('rehype-katex');


/**
 * @ref https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-docs
 * @type {import('@docusaurus/plugin-content-docs').PluginOptions }
 */
const docs = {
    sidebarPath: require.resolve('./sidebars.js'),
    // if enabled, the `editLocalizedFiles` would be invalid
    editUrl: 'https://github.com/markshawn2020/docusaurus/edit/master',
    // enable local edit, ref: https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-docs#configuration
    editLocalizedFiles: true,
    editCurrentVersion: true,
    // configure version, ref: https://docusaurus.io/docs/versioning#configuring-versioning-behavior
    disableVersioning: false,
    lastVersion: 'current', // must be in ['current', ...VALID_VERSIONS]
    versions: {
        current: {
            label: versions[0] + '+',
            // path: versions[0] + "+"
        },
    },
    showLastUpdateTime: true,

    remarkPlugins: [
        require('mdx-mermaid'),
        math
    ],
    rehypePlugins: [
        katex
    ],
}

const blog/*preset of blog*/ = {
    showReadingTime: true,
    editUrl
}

const theme/*preset of theme*/ = {
    customCss: require.resolve('./theme.css'),
}

const preset = {
    docs,
    blog,
    theme,

    // ref: https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-debug#ex-config
    // debug: true
}

module.exports = preset