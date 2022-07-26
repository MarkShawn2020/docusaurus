const me = {
    title: '南川笔记',
    tagline: 'A coder crazy about anything cool !',
    url: 'https://your-docusaurus-test-site.com',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'markshawn2020', // Usually your GitHub org/user name.
    projectName: 'docusaurus', // Usually your repo name.
}

const getGithubRepoUrl = () => {
    return `https://github.com/${me.organizationName}/${me.projectName}`
}

module.exports = {
    me,
    getGithubRepoUrl
}