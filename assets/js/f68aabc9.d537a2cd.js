"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2617],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return n?o.createElement(f,i(i({ref:t},p),{},{components:n})):o.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},88918:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>m,default:()=>k,frontMatter:()=>d,metadata:()=>f,toc:()=>b});var o=n(3905),r=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&p(e,n,t[n]);if(s)for(var n of s(t))c.call(t,n)&&p(e,n,t[n]);return e};const d={},m="ts",f={unversionedId:"Coding/TS/ts-bugfix",id:"Coding/TS/ts-bugfix",title:"ts",description:"1. PASS Module '\"path\"' can only be default-imported using the 'esModuleInterop' flag",source:"@site/docs/Coding/TS/ts-bugfix.md",sourceDirName:"Coding/TS",slug:"/Coding/TS/ts-bugfix",permalink:"/keeps-learning/docs/Coding/TS/ts-bugfix",draft:!1,editUrl:"https://github.com/markshawn2020/keeps-learning/edit/master/docs/Coding/TS/ts-bugfix.md",tags:[],version:"current",lastUpdatedAt:1658910797,formattedLastUpdatedAt:"2022\u5e747\u670827\u65e5",frontMatter:{},sidebar:"docs",previous:{title:"python\u5f00\u53d1\u7b14\u8bb0",permalink:"/keeps-learning/docs/Coding/Python/python\u5f00\u53d1\u7b14\u8bb0"},next:{title:"ts howto",permalink:"/keeps-learning/docs/Coding/TS/ts-howto"}},h={},b=[{value:"PASS: TS1259: Module &#39;&quot;path&quot;&#39; can only be default-imported using the &#39;esModuleInterop&#39; flag",id:"pass-ts1259-module-path-can-only-be-default-imported-using-the-esmoduleinterop-flag",level:2},{value:"\u2705 tsc not work, <code>tsc -b --clean</code> not work too",id:"-tsc-not-work-tsc--b---clean-not-work-too",level:2},{value:"\u2611\ufe0f TS4023 error of using (Database) name from external module (pass)",id:"\ufe0f-ts4023-error-of-using-database-name-from-external-module-pass",level:2}],g={toc:b};function k(e){var t,n=e,{components:r}=n,p=((e,t)=>{var n={};for(var o in e)l.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&s)for(var o of s(e))t.indexOf(o)<0&&c.call(e,o)&&(n[o]=e[o]);return n})(n,["components"]);return(0,o.kt)("wrapper",(t=u(u({},g),p),a(t,i({components:r,mdxType:"MDXLayout"}))),(0,o.kt)("h1",u({},{id:"ts"}),"ts"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",u({parentName:"li"},{href:"#pass-ts1259-module-path-can-only-be-default-imported-using-the-esmoduleinterop-flag"}),"PASS: TS1259: Module '\"path\"' can only be default-imported using the 'esModuleInterop' flag")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",u({parentName:"li"},{href:"#white_check_mark-tsc-not-work-tsc--b---clean-not-work-too"}),"\u2705 tsc not work, ",(0,o.kt)("inlineCode",{parentName:"a"},"tsc -b --clean")," not work too")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",u({parentName:"li"},{href:"#ballot_box_with_check-ts4023-error-of-using-database-name-from-external-module-pass"}),"\u2611\ufe0f TS4023 error of using (Database) name from external module (pass)"))),(0,o.kt)("h2",u({},{id:"pass-ts1259-module-path-can-only-be-default-imported-using-the-esmoduleinterop-flag"}),"PASS: TS1259: Module '\"path\"' can only be default-imported using the 'esModuleInterop' flag"),(0,o.kt)("p",null,"In my ",(0,o.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," file, there is already one flag of ",(0,o.kt)("inlineCode",{parentName:"p"},"esModuleInterop")," set to be true."),(0,o.kt)("p",null,"However, this error still arises up when I use ",(0,o.kt)("inlineCode",{parentName:"p"},"tsc"),"."),(0,o.kt)("h2",u({},{id:"-tsc-not-work-tsc--b---clean-not-work-too"}),"\u2705 tsc not work, ",(0,o.kt)("inlineCode",{parentName:"h2"},"tsc -b --clean")," not work too"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The most important key causing this problem(indeed: a \u5047\u8c61) is ",(0,o.kt)("inlineCode",{parentName:"li"},"outDir"),", since when it is set, all the compiled files would go to there, thus gives us an illusion that nothing happened."),(0,o.kt)("li",{parentName:"ol"},"Besides, since tsc is possible to create many files, the IDE would not show there in time, you should use ",(0,o.kt)("inlineCode",{parentName:"li"},"reload")," on the target output directory if necessary."),(0,o.kt)("li",{parentName:"ol"},"When using ",(0,o.kt)("inlineCode",{parentName:"li"},"tsc -b --clean"),", it also concerns with the ",(0,o.kt)("inlineCode",{parentName:"li"},"outDir"),", and only have effects on this, the one difference is that the command would delete files, but except directories, so an empty directories construct would be shown.")),(0,o.kt)("img",{alt:"picture 25",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/ts-bugfix-1641579809565-05b4464e9e325b2a85557b5ad13fa2b166bdb35e42ed2e330fc900483c6e9460.png"}),(0,o.kt)("h2",u({},{id:"\ufe0f-ts4023-error-of-using-database-name-from-external-module-pass"}),"\u2611\ufe0f TS4023 error of using (Database) name from external module (pass)"),(0,o.kt)("p",null,"I am pretty a newbie to typescript so I wonder what does this error mean and how to solve it?"),(0,o.kt)("img",{alt:"picture 17",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/ts-bugfix-1641465035835-ca290e02026061fda09c879469ce6d1e7f3a7b42d4b37b6e8c0883d3c484d86e.png"}),(0,o.kt)("p",null,"I tried to modify source code of ",(0,o.kt)("inlineCode",{parentName:"p"},"better-sqlite3"),", and it works -- the error goes."),(0,o.kt)("img",{alt:"picture 16",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/ts-bugfix-1641464990672-b9e739cda8ce989d517d66f04d2b6b0a6ce30646a375744b314abc4a2e9f68a4.png"}),(0,o.kt)("p",null,"Although both circumstances would have no effect on the codes run, I do wanna run with no compile warning or errors."),(0,o.kt)("p",null,"And even ",(0,o.kt)("inlineCode",{parentName:"p"},"// @ts-ignore")," can not suppress this..."),(0,o.kt)("img",{alt:"picture 18",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/ts-bugfix-1641465253076-8c4c68e090e10b3ab58a8276efa6304e81a5c4da7d5314ba1121680f84cbd81d.png"}),(0,o.kt)("p",null,"If the only solution is to modify the source code of ",(0,o.kt)("inlineCode",{parentName:"p"},"better-sqlite3"),", please do it!"),(0,o.kt)("p",null,"And if in case I missed something, or do things not right, please correct me!"),(0,o.kt)("p",null,"Much thanks!"))}k.isMDXComponent=!0}}]);