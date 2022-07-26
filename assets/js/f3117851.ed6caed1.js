"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4604],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),s=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),m=s(a),g=i,d=m["".concat(l,".").concat(g)]||m[g]||c[g]||r;return a?n.createElement(d,o(o({ref:t},p),{},{components:a})):n.createElement(d,o({ref:t},p))}));function g(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=m;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:i,o[1]=u;for(var s=2;s<r;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},91942:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>u,toc:()=>s});var n=a(87462),i=(a(67294),a(3905));const r={},o="ubuntu init manual",u={unversionedId:"OS/Linux/ubuntu-init-manual",id:"OS/Linux/ubuntu-init-manual",title:"ubuntu init manual",description:"1. step 0. install",source:"@site/docs/OS/Linux/ubuntu-init-manual.md",sourceDirName:"OS/Linux",slug:"/OS/Linux/ubuntu-init-manual",permalink:"/docusaurus/docs/OS/Linux/ubuntu-init-manual",draft:!1,editUrl:"https://github.com/markshawn2020/docusaurus/edit/master/docs/OS/Linux/ubuntu-init-manual.md",tags:[],version:"current",lastUpdatedAt:1658770976,formattedLastUpdatedAt:"2022\u5e747\u670825\u65e5",frontMatter:{},sidebar:"docs",previous:{title:"linux terminator howto",permalink:"/docusaurus/docs/OS/Linux/linux-terminator-howto"},next:{title:"alfred howto",permalink:"/docusaurus/docs/OS/Mac/alfred-howto"}},l={},s=[{value:"step 0. install",id:"step-0-install",level:2},{value:"step 1. config apt source",id:"step-1-config-apt-source",level:2},{value:"1. change apt source",id:"1-change-apt-source",level:3},{value:"fastest/script way: \u76f4\u63a5\u4fee\u6539<code>/etc/apt/sources.list</code>",id:"fastestscript-way-\u76f4\u63a5\u4fee\u6539etcaptsourceslist",level:4},{value:"robustest/recommend-for-newbie way: \u5728<code>softwares &amp; update</code>\u91cc\u4fee\u6539server",id:"robustestrecommend-for-newbie-way-\u5728softwares--update\u91cc\u4fee\u6539server",level:4},{value:"use others way: \u4f7f\u7528\u522b\u4eba\u5199\u597d\u7684 git\u4ed3\u5e93\u8fdb\u884c\u914d\u7f6e",id:"use-others-way-\u4f7f\u7528\u522b\u4eba\u5199\u597d\u7684-git\u4ed3\u5e93\u8fdb\u884c\u914d\u7f6e",level:4},{value:"2. update apt",id:"2-update-apt",level:3},{value:"step 2. config git",id:"step-2-config-git",level:2},{value:"step 3. config terminal",id:"step-3-config-terminal",level:2},{value:"step 4. config language",id:"step-4-config-language",level:2},{value:"resolution 1: config chinese input source via ibus",id:"resolution-1-config-chinese-input-source-via-ibus",level:3},{value:"FIXME: resolution 2: config chinese input source via sougou",id:"fixme-resolution-2-config-chinese-input-source-via-sougou",level:3},{value:"how to switch language input source",id:"how-to-switch-language-input-source",level:3},{value:"how to change language to english",id:"how-to-change-language-to-english",level:3}],p={toc:s};function c(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"ubuntu-init-manual"},"ubuntu init manual"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#step-0-install"},"step 0. install")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#step-1-config-apt-source"},"step 1. config apt source"),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#1-change-apt-source"},"1. change apt source"),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#fastestscript-way-%E7%9B%B4%E6%8E%A5%E4%BF%AE%E6%94%B9etcaptsourceslist"},"fastest/script way: \u76f4\u63a5\u4fee\u6539",(0,i.kt)("inlineCode",{parentName:"a"},"/etc/apt/sources.list"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#robustestrecommend-for-newbie-way-%E5%9C%A8softwares--update%E9%87%8C%E4%BF%AE%E6%94%B9server"},"robustest/recommend-for-newbie way: \u5728",(0,i.kt)("inlineCode",{parentName:"a"},"softwares & update"),"\u91cc\u4fee\u6539server")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#use-others-way-%E4%BD%BF%E7%94%A8%E5%88%AB%E4%BA%BA%E5%86%99%E5%A5%BD%E7%9A%84-git%E4%BB%93%E5%BA%93%E8%BF%9B%E8%A1%8C%E9%85%8D%E7%BD%AE"},"use others way: \u4f7f\u7528\u522b\u4eba\u5199\u597d\u7684 git\u4ed3\u5e93\u8fdb\u884c\u914d\u7f6e")))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#2-update-apt"},"2. update apt")))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#step-2-config-git"},"step 2. config git")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#step-3-config-terminal"},"step 3. config terminal")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#step-4-config-language"},"step 4. config language"),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#resolution-1-config-chinese-input-source-via-ibus"},"resolution 1: config chinese input source via ibus")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#fixme-resolution-2-config-chinese-input-source-via-sougou"},"FIXME: resolution 2: config chinese input source via sougou")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#how-to-switch-language-input-source"},"how to switch language input source")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#how-to-change-language-to-english"},"how to change language to english"))))),(0,i.kt)("h2",{id:"step-0-install"},"step 0. install"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://releases.ubuntu.com/18.04/"},"Ubuntu 18.04.6 LTS (Bionic Beaver)"))),(0,i.kt)("h2",{id:"step-1-config-apt-source"},"step 1. config apt source"),(0,i.kt)("h3",{id:"1-change-apt-source"},"1. change apt source"),(0,i.kt)("p",null,"ref:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://zhuanlan.zhihu.com/p/61228593"},"\u3010Ubuntu\u3011Ubuntu 18.04 LTS \u66f4\u6362\u56fd\u5185\u6e90\u2014\u2014\u89e3\u51b3\u7ec8\u7aef\u4e0b\u8f7d\u901f\u5ea6\u6162\u7684\u95ee\u9898 - \u77e5\u4e4e"))),(0,i.kt)("h4",{id:"fastestscript-way-\u76f4\u63a5\u4fee\u6539etcaptsourceslist"},"fastest/script way: \u76f4\u63a5\u4fee\u6539",(0,i.kt)("inlineCode",{parentName:"h4"},"/etc/apt/sources.list")),(0,i.kt)("p",null,(0,i.kt)("del",{parentName:"p"},"\u5176\u4e2d\uff0c\u7b2c\u4e00\u79cd\u65b9\u6848\u867d\u7136\u53ef\u884c\uff0c\u4f46\u662f\u6709\u4e24\u4e2a\u7f3a\u70b9\uff0c\u4e00\u4e2a\u662f\u4fb5\u5165\u6027\u9ad8\uff0c\u6240\u4ee5\u4e00\u822c\u90fd\u4f1a\u5148\u5907\u4efd\u4e00\u4e0b\u539f\u6587\u4ef6\uff0c\u7136\u540e\u4f7f\u7528\u66ff\u6362\u547d\u4ee4\u3002")),(0,i.kt)("p",null,"Update 2022-01-24\uff1a\u5b9e\u9645\u4e0a\u6240\u6709\u65b9\u5f0f\u5e95\u5c42\u90fd\u662f\u901a\u8fc7\u4fee\u6539apt sources.list\u6587\u4ef6\u914d\u7f6e\u7684\uff0c\u6240\u4ee5\u6ca1\u6709\u4ec0\u4e48\u4fb5\u5165\u6027\u4e00\u8bf4\uff0c\u90fd\u4f1a\u5148\u505a\u5907\u4efd\u3002"),(0,i.kt)("p",null,"GUI\u7248\uff08\u4e5f\u5c31\u662f",(0,i.kt)("inlineCode",{parentName:"p"},"softwares & update")," app\u91cc\u4f1a\u63d0\u4f9b\u6d4b\u8bd5\uff0c\u81ea\u52a8\u4fee\u6539\uff0c\u6539\u5b8c\u4e4b\u540e\u89e6\u53d1\u66f4\u65b0\u64cd\u4f5c\uff0c\u800c\u8fd9\u4e9b\u5176\u5b9e\u53ef\u4ee5\u81ea\u5df1\u7528\u811a\u672c\u5b8c\u6210\uff0c\u54cd\u5e94\u4e5f\u66f4\u5feb\uff01"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'# backup source file\nAPT_SOURCES_LIST_FILE=/etc/apt/sources.list\ncp $APT_SOURCES_LIST_FILE $APT_SOURCES_LIST_FILE.bak\n\n# change source\nAPT_SOURCE="http://mirrors.yun-idc.com/ubuntu/"\nsudo sed -i  "s|deb \\S+|deb $APT_SOURCE|g" $APT_SOURCES_LIST_FILE\n\n# update source\nsudo apt update\n')),(0,i.kt)("p",null,"\u53e6\u4e00\u4e2a\u5c31\u662f\uff0c\u53ea\u80fd\u586b\u5165\u81ea\u5df1\u60f3\u586b\u7684\u6e90\uff0c\u4f46\u5f88\u53ef\u80fd\u4e0d\u662f\u6700\u597d\u7684\u6e90\u3002\u6bd4\u5982\u6211\u4e00\u76f4\u4ee5\u4e3a\u963f\u91cc\u4e91\u7684\u6e90\u5f88\u597d\uff0c\u7ed3\u679c\u8fd9\u6b21\u53d1\u73b0\uff0c\u6781\u5176\u5730\u6162\uff0c\u6211\u786e\u8ba4\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"update"),"\u65f6\u8d70\u7684\u662f",(0,i.kt)("inlineCode",{parentName:"p"},"cn.xxx"),"\uff0c\u4f46\u4f9d\u65e7\u53ea\u6709\u5341\u51e0k\u3002"),(0,i.kt)("h4",{id:"robustestrecommend-for-newbie-way-\u5728softwares--update\u91cc\u4fee\u6539server"},"robustest/recommend-for-newbie way: \u5728",(0,i.kt)("inlineCode",{parentName:"h4"},"softwares & update"),"\u91cc\u4fee\u6539server"),(0,i.kt)("p",null,"\u7b2c\u4e8c\u79cd\u529e\u6cd5\u5c31\u662f\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"softwares & update"),"\u91cc\u81ea\u52a8\u6d4b\u8bd5\u6700\u597d\u7684\u670d\u52a1\u5668\uff0c\u7136\u540e\u9009\u62e9\u5b83\u3002\u6211\u6d4b\u51fa\u6765\u662f",(0,i.kt)("inlineCode",{parentName:"p"},"yun-idc"),"\u6700\u597d\uff0c\u4f46\u662f\u56e0\u4e3a\u6211\u6ca1\u7528\u8fc7\uff0c\u6240\u4ee5\u5f53\u65f6\u6ca1\u8003\u8651\u5b83\uff0c\u540e\u6765\u88ab\u963f\u91cc\u4e91\u6298\u78e8\u7684\u4e0d\u884c\u4e86\uff0c\u5c31\u8bd5\u4e86\u5b83\uff0c\u7ed3\u679c\u98de\u5feb\uff0c\u5341\u5146\u6bcf\u79d2\uff01"),(0,i.kt)("h4",{id:"use-others-way-\u4f7f\u7528\u522b\u4eba\u5199\u597d\u7684-git\u4ed3\u5e93\u8fdb\u884c\u914d\u7f6e"},"use others way: \u4f7f\u7528\u522b\u4eba\u5199\u597d\u7684 git\u4ed3\u5e93\u8fdb\u884c\u914d\u7f6e"),(0,i.kt)("p",null,"\u7b2c\u4e09\u79cd\u529e\u6cd5\uff0c\u7531\u4e8e\u6211\u8fd8\u6ca1\u914d\u597d\u6e90\uff0c\u6240\u4ee5\u4e5f\u6ca1git\uff0c\u800c\u6b64\u65f6\u4e0b\u8f7dgit\u53c8\u4f1a\u6781\u5176\u5730\u6162\uff0c\u6240\u4ee5\u4e5f\u4e0d\u8003\u8651\u3002"),(0,i.kt)("h3",{id:"2-update-apt"},"2. update apt"),(0,i.kt)("p",null,"!!!tip\nIf the following commands warn that files are locked, then wait for some minutes, or use ",(0,i.kt)("inlineCode",{parentName:"p"},"lsof FILE")," to have a check, more refer to: - ",(0,i.kt)("a",{parentName:"p",href:"https://zhuanlan.zhihu.com/p/126538251"},"\u89e3\u51b3apt-get /var/lib/dpkg/lock-frontend \u95ee\u9898 - \u77e5\u4e4e")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"sudo apt get update\nsudo apt get upgrade\n")),(0,i.kt)("h2",{id:"step-2-config-git"},"step 2. config git"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"sudo apt get git\ngit config --global user.name YOUR_NAME\ngit config --global user.email YOUR_EMAIL \n")),(0,i.kt)("h2",{id:"step-3-config-terminal"},"step 3. config terminal"),(0,i.kt)("h2",{id:"step-4-config-language"},"step 4. config language"),(0,i.kt)("h3",{id:"resolution-1-config-chinese-input-source-via-ibus"},"resolution 1: config chinese input source via ibus"),(0,i.kt)("p",null,"ibus\u8f93\u5165\u65b9\u5f0f\u548c\u641c\u72d7\u8f93\u5165\u6cd5\u4e4b\u95f4\u4e0d\u662f\u5f88\u517c\u5bb9\uff0c\u5982\u679c\u51fa\u73b0\u4e24\u8005\u90fd\u65e0\u6cd5\u8f93\u5165\u4e2d\u6587\u7684\u60c5\u51b5\uff0c\u5efa\u8bae\u6839\u636e",(0,i.kt)("a",{parentName:"p",href:"https://www.jianshu.com/p/c04a4b03d30f"},"Ubuntu 18.04LTS \u5b89\u88c5\u4e2d\u6587\u8f93\u5165\u6cd5\u4ee5\u53ca\u5feb\u6377\u952e\u8bbe\u7f6e - \u7b80\u4e66"),"\u5148\u5378\u8f7d\u641c\u72d7\u8f93\u5165\u6cd5\uff0c\u786e\u8ba4ibus\u662f\u53ef\u4ee5\u7528\u7684\uff0c\u5177\u4f53\u5c31\u662f\uff1a",(0,i.kt)("inlineCode",{parentName:"p"},"sudo apt-get remove fcitx*")),(0,i.kt)("p",null,"\u786e\u8ba4\u4ee5\u4e0b\u914d\u7f6e\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u8bbe\u7f6e - \u5730\u533a\u4e0e\u8bed\u8a00 - \u8f93\u5165\u6cd5\uff0c\u4e2d\u8981\u6dfb\u52a0\u5305\u542b\u667a\u80fd\u62fc\u97f3\uff1a"),(0,i.kt)("img",{alt:"picture 5",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/notes-1642268594063-def6bf87b276425161475a3ce55fbb05d8bb305b913ae5b39cc6e9708a6e32ae.png"})),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u8bed\u8a00\u652f\u6301\u4e2d\uff0c\u8981\u542f\u7528ibus\u65b9\u6848"),(0,i.kt)("img",{alt:"picture 7",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/notes-1642268691854-043dc8408c8326d13213bc92302c26f2d85b2be6a2892dbc58cf3d3349c9c8bc.png"}),(0,i.kt)("p",{parentName:"li"},"\u6ce8\u9500\u8d26\u53f7\u91cd\u65b0\u767b\u5f55\u5373\u53ef\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u5982\u679c\u6ce8\u9500\u8d26\u53f7\u8fd8\u4e0d\u884c\uff0c \u5c31\u8981\u5c1d\u8bd5",(0,i.kt)("inlineCode",{parentName:"p"},"sudo reboot"),"\u4e00\u4e0b\u3002"))),(0,i.kt)("h3",{id:"fixme-resolution-2-config-chinese-input-source-via-sougou"},"FIXME: resolution 2: config chinese input source via sougou"),(0,i.kt)("p",null,"\u867d\u7136\u6309\u7167\u5b98\u7f51\u8d70\u4e86\u597d\u51e0\u904d\uff0c\u4f46\u59cb\u7ec8\u8fd8\u662f\u6ca1\u6709\u914d\u6210\u8fd9\u5957\u65b9\u6848\uff0c\u6211\u4e5f\u4e0d\u77e5\u9053\u4ec0\u4e48\u539f\u56e0\u3002"),(0,i.kt)("p",null,"\u800c\u4e14ibus\u65b9\u6848\u4e5f\u5fc5\u987b\u5728 fcitx \u5378\u8f7d\u4e4b\u540e\u624d\u80fd\u6b63\u5e38\u4f7f\u7528\u3002"),(0,i.kt)("p",null,"\u53c2\u8003\u5b98\u7f51\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://pinyin.sogou.com/linux/"},"\u641c\u72d7\u8f93\u5165\u6cd5 for linux"))),(0,i.kt)("p",null,"\u66f4\u65b0\uff1a\n\u786e\u4fdd\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u8f93\u5165\u6e90\u4e2d\u53ea\u6709\u4e00\u4e2a\u82f1\u6587\uff08\u4e0d\u8981\u6709ibus\u7684\u4e2d\u6587\uff0c\u5426\u5219\u4f1a\u5e72\u6270\uff09"),(0,i.kt)("img",{alt:"picture 8",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/notes-1642273187873-a0b1b31105b8e9fdea3ea0c576bc3e81e15cd6dec9c1dfb55a43d3a64ece559d.png"})),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u8f93\u5165\u7cfb\u7edf\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"fcitx")))),(0,i.kt)("img",{alt:"picture 9",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/notes-1642273215269-68b870e74dbe7fecdac78268144d73dc987602eddc24098c4e10763b540eb6bb.png"}),(0,i.kt)("p",null,"\u518d\u66f4\u65b0\uff1a\n\u7b97\u4e86\u5427\uff0c\u6211\u4e2a\u4eba\u89c9\u5f97\u641c\u8fc7ubuntu\u7684bug\u662f\u771f\u5730\u591a\uff0c\u4e00\u4f1a\u80fd\u7528\u4e00\u4f1a\u4e0d\u80fd\u7528\uff0c\u5c24\u5176\u662f\u6211\u5728\u8c03\u6210\u4e2d\u6587\u7248\u80fd\u7528\u540e\u53c8\u8c03\u6210\u82f1\u6587\u7248\uff0c\u7136\u540e\u7528\u4e0d\u4e86\u4e86\uff0c\u63a5\u7740\u518d\u600e\u4e48\u8c03\u4e2d\u6587\u7248\u90fd\u7528\u4e0d\u4e86\u4e86\uff0c\u975e\u5e38\u86cb\u75bc\u3002"),(0,i.kt)("h3",{id:"how-to-switch-language-input-source"},"how to switch language input source"),(0,i.kt)("p",null,"The best way is to directly install the Chinese version of ubuntu, since the Chinese feature is built-in."),(0,i.kt)("p",null,"However, what we download directly from the official ubuntu website, may not support chinese choice natively. So it highly depends on what distribution version of ubuntu we download."),(0,i.kt)("p",null,"ref:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://blog.csdn.net/qq_31290747/article/details/94555163"},"(20\u6761\u6d88\u606f) ubuntu \u5207\u6362\u4e2d\u6587\u8f93\u5165\u6cd5_",(0,i.kt)("em",{parentName:"a"},"g_y"),"\u7684\u535a\u5ba2-CSDN\u535a\u5ba2_ubuntu\u5207\u6362\u4e2d\u6587\u8f93\u5165\u6cd5"))),(0,i.kt)("h3",{id:"how-to-change-language-to-english"},"how to change language to english"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"echo export LANGUAGE=en_US.UTF-8 |  sudo tee -a ~/.bashrc\n")),(0,i.kt)("p",null,"ref:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://askubuntu.com/questions/133318/how-do-i-change-the-language-via-a-terminal"},"command line - How do I change the language via a terminal? - Ask Ubuntu"))))}c.isMDXComponent=!0}}]);