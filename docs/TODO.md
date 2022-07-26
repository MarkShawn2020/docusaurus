---
sidebar_position: 2
---

# TODO

## Learning

- [GAMES101-现代计算机图形学入门-闫令琪_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1X7411F744/)

## Projects

### ttf2bmf 后端

https://github.com/SilenceLeo/snowb-bmf

### 音乐聚合软件

特点：

1. 以歌手、歌曲为中心

### ★★★★★ markdown实时渲染引擎（marked + webpack + iframe ？）从而允许开发模式下将微信公众号排版做好，即一款可以展示环境配置（尤其是全局和局部镜像源）的gui（参考baobab）

### ★★★★★ 聚合搜索，同时展示google、github、搜索微信、知乎的搜索结果

### ★★★ 支持跳转的拓扑知识网络可视化系统

### ★★★★ 豆瓣租房油猴脚本

目标需求： 
1. 在豆瓣小组页面，实现自动输出excel结构的豆瓣小组信息
2. 在豆瓣小组页面，增加一个触发筛选的按钮，触发效果待设计（筛选后不足目标条数是否要自动继续加载下一页；或者直接取消分页机制，而是使用无限滚动的方案）
3. *实现对多个豆瓣小组的监控与筛选

### vscode relative

#### TODO: vscode markdown synchronized scroll algorithm

#### TODO: vscode python auto-import `pprint`

#### TODO: VSCode-ConditionalCommentCursorDown

- [ ] G1: 实现注释后，光标自动下移【参考：`Comment Line Down`】

- [ ] G2: 实现如果首次注释，且为空行，则光标不移动

#### TODO: VSCode-AutoCompletion-ForHeadingsOfOtherFiles

- [ ] G: 实现其他md文件的headings的自动补全

refer:

- [Auto completion for links to headings / sections in other files · Issue #894 · yzhang-gh/vscode-markdown](https://github.com/yzhang-gh/vscode-markdown/issues/894)

- [vscode-markdown/completion.ts at master · yzhang-gh/vscode-markdown](https://github.com/yzhang-gh/vscode-markdown/blob/master/src/completion.ts)

这是一个看起来可行的插件，但我安装后好像并没什么卵用

- [MarkDown Link Suggestions - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=TomasHubelbauer.vscode-markdown-link-suggestions)

### OS relative

#### Mac Dictionary add more powerful chinese translation (from chinese to english)

### 基于 b-ok 实现 online reader

### 参考 http://videolectures.net/nipsworkshops2010_urtasun_gpv/ 实现字幕与视频联动

### TODO: 电商分析系统

### TODO: 超级账本 (need root)

### TODO: IMPORTANT: 全平台发布

启发于 - [(1条消息) Kris Fei's blog_KrisFei_CSDN博客------Rockchip------,RK3399,-----Qualcomm------领域博主](https://blog.csdn.net/kris_fei?type=blog)

## Articles

### TODO: 博客生成工具对比

### TODO: ASCII ART

### TODO: about remark

### TODO: alfred

### [The World From A Coder's Eye](mark_notes/mark-theWorldFromACoder'sEye.md)

## History

### FIXED: vscode markdown container support

### FIXED: vscode lag when input

I find this problem is concerned with this plugin.

<img alt="picture 1" src="https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/readme-1640997398482-1e216ff6476599b4a7d53857572e02f0d4f8243efde1f2634f244e865ed10a14.png" width="480" />  

since, when it's enabled, the window would freeze if I input the '\`' and then `enter` or `back`.

However, it seems this `auto-completion` is built-in.

I would first try some time without it.

### FIXED: VSCode-md-flex

- [x] G1：选中两张md图片链接，实现右键加入flex布局的父级div，以使图片并行显示

- [x] *G2：在G1的基础上提供更多细分子选项，以实现更精细的布局

> :warning: 直接使用snippet完成了，写成markdown专用的即可，非常方便，第二点算了，没意思

<img alt="picture 6" src="https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/1640133252106-TODO-db31c81de8d77347593a369f183a66c571ae504c6d6a0e5a332c66ca76016da1.png" width="480" />  

### FIXED: vscode markdown image upload (finished: 2022-01-06)

finished: 2022-01-06

see: [md_img_handler](/Users/mark/Documents/mark_keeps_learning/MarkScripts/md_img_handler)


### CLOSED_SINCE_ENOUGH: 梳理markdown的工作流，理出最佳实践，实现每个环节

ref:

- [Markdown Basics](https://shd101wyy.github.io/markdown-preview-enhanced/#/markdown-basics?id=admonition)

| preview | save to pdf | copy to mdnice | directly output pdf |
| ------- | ----------- | -------------- | ------------------- | 

### CLOSED_SINCE_TOO_EARLY: 写一本书，从前端到后端到算法（南川从0到1编程开发串讲，配套视频）

#### SOLVED: 控制mkl仓库的体积

solution:

使用`git filter-branch`把图片从历史汇总都删掉就可以，一共400多条commit，每条删几百张图片，一分钟左右就差不多了（前提要都上传到图床，所以需要我们自己的图床批量上传脚本，具体见`~/coding/PycharmProjects/my-markdown-parser/src/main.py`。

### CLOSED_SINCE_NOT_FOCUSED: change `index.yaml` to be `index.md`

### CLOSED_SINCE_NOT_FOCUSED: 王者荣耀自动系统

### CLOSED_SINCE_OUT_OF_DATED: add color support for `build/init.zsh`


### CLOSED_SINCE_NOT_FOCUSED: Prisma is not suitable for electron

### CLOSED_SINCE_NOT_FOCUSED: LinkToText

### SOLVED: change the default TOC config of `depth_from` from 1 to 2, of `depth_to` from 6 to 4

> ref

- [TOC](https://shd101wyy.github.io/markdown-preview-enhanced/#/toc)

- [Configure the default parameters of TOC · Issue #712 · shd101wyy/markdown-preview-enhanced](https://github.com/shd101wyy/markdown-preview-enhanced/issues/712)

- [可以更改 front-matter 的默认设置么？ · Issue #603 · shd101wyy/markdown-preview-enhanced](https://github.com/shd101wyy/markdown-preview-enhanced/issues/603)

### 修复git仓库、删除MP4 (finished, 2022-06-20, Mon)

https://htmlpreview.github.io/?https://github.com/newren/git-filter-repo/blob/docs/html/git-filter-repo.html

### shortcuts comparison(finished)

### linux core intro (finished, 2022-02-04)

### adobe photoshop export (disappeared, 2022-06-20, Mon)

![ps bug](https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/readme-1641365174494-15af5de4688f278c90d3bd566d99d9a7542731e32038f18f56e5699d473f16c0.png)