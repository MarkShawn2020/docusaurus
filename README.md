# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

## History

- [x] 2022-07-26, Tue，将 `docusaurus.config.js` 按模块拆分，使工程配置更清晰

## Development

```sh
# Installation
yarn

# Local Development
# This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.
yarn start

# Build
# This command generates static content into the `build` directory and can be served using any static contents hosting service.
yarn build
```

## Deployment

```sh
# Using SSH
USE_SSH=true yarn deploy

# Not using SSH
# If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
GIT_USER=<Your GitHub username> yarn deploy
```

## Others

### QA: 解决在 webstorm 中部分 type annotation 不起作用（但 vscode 可以）

问题：

如下，webstorm 的 Config 类就没有获得类型提示，原因很简单，就是因为对应的库被 webstorm 默认给 excluded 了：

![picture 1](.imgs/README-1658809363936-05019624c5547901e448b63eb3df4a7777bbb138a27754062a5c9d76b565b219.png)  

解决方案：

只要把 `@docusaurus` 这个库右键 “cancel exclusion” 即可（秒ok），另一种方法是对 `node_modules` 进行 “cancel exclusion”，但并不推荐，因为会拖慢 ide 的运行速度。

![picture 2](.imgs/README-1658809446256-0bfd428c3b927fd911cead5f3da24a86c79a9fb24d8a40a69742f91a092f55b1.png)  
