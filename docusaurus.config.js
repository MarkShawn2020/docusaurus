const { me, i18n, presets, themeConfig } = require("./config");


/** @type {import('@docusaurus/types').Config} */
const config = {
    ...me,
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    i18n,
    presets,
    themeConfig,
    
}

module.exports = config;
