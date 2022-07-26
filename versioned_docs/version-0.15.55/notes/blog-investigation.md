# 博客框架选型

## 选型依据

- 主流静态网站生成器框架排名[^rank]: https://jamstack.org/generators/

[^rank]: 排名的前三名分别是`nextjs`, `hugo`, `gatsby`，其中hugo是基于go语言的，其他两个都是基于js，尤指基于react，这也多少说明了目前react生态的繁荣，再往后还有nuxt（基于vue）的，是用于对标nextjs的。而关于nextjs和gatsby，这两者有一些比较重要的区别，具体可以见2022年nextjs和gatsby详细对比：https://prismic.io/blog/compare-nextjs-vs-gatsby

## 选型列表

- nextjs的一些demo（包括一款基于md的博客）: https://nextjs.org/docs/basic-features/data-fetching/overview
- （选型1）：基于nextjs、md的博客demo: https://github.com/vercel/next.js/tree/canary/examples/blog-starter
- 基于nextjs的专用于博客生成的nextra: https://nextra.vercel.app/
- （选型2）：nextra的开发分支: https://github.com/shuding/nextra/tree/core
- gatsby的一些demo（包括一款gitbook样式）: https://www.gatsbyjs.com/starters/
- （选型3）：基于gatsby、gitbook的博客demo: https://www.gatsbyjs.com/starters/hasura/gatsby-gitbook-starter/
- （选型4）：hexo: https://hexo.io/zh-cn/

## 选型结果

最终选了选项2，即nextra，它的主要优点如下：

1. 底层基于目前最优秀、活跃的nextjs框架
2. 默认已配置了一个开箱即用、ui尚可的模板工程(比hexo的默认效果强非常多，非常适合知识库)
3. 环境配置基本无压力，没有出现意外（gatsby测试的几个demo都有依赖问题，nextjs自己的markdown demo也有点问题）
4. nextra拥有一个core分支，可以自己修改nextra的逻辑，然后再输出，所以在这点上，等价于拥有nextjs的完全开发能力，另外其工程设计、代码质量也很不错这点比我两年前用的vuepress要棒非常多（vuepress也在排名之列）

所以基于以上，我认为nextra在生命力、易用性、扩展性、审美上，均达到了目标期望，是可以值得all in的modern markdown-based blog framework.

## 其他

感谢立党哥推荐的nextra与昱昊哥推荐的notion，实测下来确实都很棒，不过notion偏产品，所以不在本次技术横评之列。


!!! note
    这是一条笔记


:::
这也是一条笔记（某些框架下）才可以看见
:::