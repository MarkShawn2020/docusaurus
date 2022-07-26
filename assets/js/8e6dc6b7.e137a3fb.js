"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8944],{3905:(e,t,o)=>{o.d(t,{Zo:()=>l,kt:()=>u});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function d(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var p=r.createContext({}),c=function(e){var t=r.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),m=c(o),u=n,k=m["".concat(p,".").concat(u)]||m[u]||s[u]||a;return o?r.createElement(k,i(i({ref:t},l),{},{components:o})):r.createElement(k,i({ref:t},l))}));function u(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=m;var d={};for(var p in t)hasOwnProperty.call(t,p)&&(d[p]=t[p]);d.originalType=e,d.mdxType="string"==typeof e?e:n,i[1]=d;for(var c=2;c<a;c++)i[c]=o[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},65932:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>d,toc:()=>c});var r=o(87462),n=(o(67294),o(3905));const a={},i="aosp coding howto",d={unversionedId:"AndroidFramework/TaskA7-aosp-coding/aosp-coding-howto",id:"AndroidFramework/TaskA7-aosp-coding/aosp-coding-howto",title:"aosp coding howto",description:"use androidmk to change mk file into bp file",source:"@site/docs/AndroidFramework/TaskA7-aosp-coding/aosp-coding-howto.md",sourceDirName:"AndroidFramework/TaskA7-aosp-coding",slug:"/AndroidFramework/TaskA7-aosp-coding/aosp-coding-howto",permalink:"/docs/AndroidFramework/TaskA7-aosp-coding/aosp-coding-howto",draft:!1,editUrl:"https://github.com/markshawn2020/docusaurus/edit/master/docs/AndroidFramework/TaskA7-aosp-coding/aosp-coding-howto.md",tags:[],version:"current",lastUpdatedAt:1658770976,formattedLastUpdatedAt:"2022\u5e747\u670825\u65e5",frontMatter:{},sidebar:"docs",previous:{title:"aosp read howto",permalink:"/docs/AndroidFramework/TaskA6-aosp-read/aosp-read-howto"},next:{title:"Manual/bugfix of compiling arpara hmdservice on AOSP 10",permalink:"/docs/AndroidFramework/TaskB1-hmdservice-compile/how-to-compile-arpara-hmdservice-on-AOSP10"}},p={},c=[{value:"use <code>androidmk</code> to change <code>mk</code> file into <code>bp</code> file",id:"use-androidmk-to-change-mk-file-into-bp-file",level:2}],l={toc:c};function s(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"aosp-coding-howto"},"aosp coding howto"),(0,n.kt)("h2",{id:"use-androidmk-to-change-mk-file-into-bp-file"},"use ",(0,n.kt)("inlineCode",{parentName:"h2"},"androidmk")," to change ",(0,n.kt)("inlineCode",{parentName:"h2"},"mk")," file into ",(0,n.kt)("inlineCode",{parentName:"h2"},"bp")," file"),(0,n.kt)("p",null,"path: ",(0,n.kt)("inlineCode",{parentName:"p"},"out/soong/host/linux-x86/bin/androidmk")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"# create soft link\nln -s out/soong/host/linux-x86/bin/androidmk androidmk\n")),(0,n.kt)("p",null,"ref:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"official intro:",(0,n.kt)("a",{parentName:"p",href:"https://source.android.google.cn/setup/build?hl=zh-cn"},"Soong \u7f16\u8bd1\u7cfb\u7edf \xa0|\xa0 Android \u5f00\u6e90\u9879\u76ee \xa0|\xa0 Android Open Source Project"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://www.i4k.xyz/article/weixin_34342589/117589957"},"android mk\u4e0ebp,Android.bp\u4f60\u771f\u7684\u4e86\u89e3\u5417_\u65b9\u840c-CFT\u7684\u535a\u5ba2-\u7a0b\u5e8f\u5458\u4fe1\u606f\u7f51 - \u7a0b\u5e8f\u5458\u4fe1\u606f\u7f51"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://blog.csdn.net/tkwxty/article/details/104411520"},"(23\u6761\u6d88\u606f) Android.bp\u5165\u95e8\u6307\u5357\u4e4bAndroid.mk\u8f6c\u6362\u6210Android.bp_IT\u5148\u68ee-CSDN\u535a\u5ba2_android.mk\u8f6candroid.bp")))))}s.isMDXComponent=!0}}]);