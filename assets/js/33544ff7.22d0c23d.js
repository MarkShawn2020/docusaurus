"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2947],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return n?i.createElement(h,l(l({ref:t},c),{},{components:n})):i.createElement(h,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<a;p++)l[p]=n[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},70493:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var i=n(87462),r=(n(67294),n(3905));const a={},l="eslint howto",o={unversionedId:"coding/JS/CodeQuality_eslint_prettier_jest/eslint-howto",id:"coding/JS/CodeQuality_eslint_prettier_jest/eslint-howto",title:"eslint howto",description:"[toc]",source:"@site/docs/coding/JS/CodeQuality_eslint_prettier_jest/eslint-howto.md",sourceDirName:"coding/JS/CodeQuality_eslint_prettier_jest",slug:"/coding/JS/CodeQuality_eslint_prettier_jest/eslint-howto",permalink:"/docs/coding/JS/CodeQuality_eslint_prettier_jest/eslint-howto",draft:!1,editUrl:"https://github.com/markshawn2020/docusaurus/edit/master/docs/coding/JS/CodeQuality_eslint_prettier_jest/eslint-howto.md",tags:[],version:"current",lastUpdatedAt:1658770976,formattedLastUpdatedAt:"2022\u5e747\u670825\u65e5",frontMatter:{},sidebar:"docs",previous:{title:"html howto",permalink:"/docs/coding/HTML/html-howto"},next:{title:"eslint prettier typescript",permalink:"/docs/coding/JS/CodeQuality_eslint_prettier_jest/eslint-prettier-typescript"}},s={},p=[{value:"<code>div</code> element with <code>onClick</code>",id:"div-element-with-onclick",level:2},{value:"Alias error",id:"alias-error",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"eslint-howto"},"eslint howto"),(0,r.kt)("p",null,"[toc]"),(0,r.kt)("h2",{id:"div-element-with-onclick"},(0,r.kt)("inlineCode",{parentName:"h2"},"div")," element with ",(0,r.kt)("inlineCode",{parentName:"h2"},"onClick")),(0,r.kt)("p",null,"Although I can just attach a ",(0,r.kt)("inlineCode",{parentName:"p"},"onClick")," method to a ",(0,r.kt)("inlineCode",{parentName:"p"},"div"),"'s property, It would cause a chain of eslint problems."),(0,r.kt)("p",null,"The first one is ",(0,r.kt)("inlineCode",{parentName:"p"},"no-static-element-interactions"),", since ",(0,r.kt)("inlineCode",{parentName:"p"},"div")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"span")," can not own 'semantic' behavior."),(0,r.kt)("p",null,"Then, the solution is to add a ",(0,r.kt)("inlineCode",{parentName:"p"},'role="button"')," to make it clickable."),(0,r.kt)("p",null,"After then, it trigger a new eslint problem of ",(0,r.kt)("inlineCode",{parentName:"p"},"interactive-supports-focus"),", which suggests me to add a ",(0,r.kt)("inlineCode",{parentName:"p"},"tabIndex")," property for keyboard support. "),(0,r.kt)("p",null,"However, I didn't intend to let my div capturing 'tab' behavior. Hence, I can add a ",(0,r.kt)("inlineCode",{parentName:"p"},"tabIndex=-1")," to suppress it."),(0,r.kt)("p",null,"And next, another eslint problem of ",(0,r.kt)("inlineCode",{parentName:"p"},"click-events-have-key-events")," occurred, which needs me to add a ",(0,r.kt)("inlineCode",{parentName:"p"},"aria-hidden")," property."),(0,r.kt)("p",null,"At last, to make a ",(0,r.kt)("inlineCode",{parentName:"p"},"div"),"'s 'click' action qualified, I should change the ",(0,r.kt)("inlineCode",{parentName:"p"},"div")," element into like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"<div\n  onClick={requestReadFile}\n  role={'button'}\n  tabIndex={-1}\n  aria-hidden\n  // id={'upload-area'}\n  // className={'flex justify-center items-center flex-col'}\n  // style={{ width: 300, border: '2px dashed' }}\n>{...}</div>\n")),(0,r.kt)("p",null,"ref:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-static-element-interactions.md"},"eslint-plugin-jsx-a11y/no-static-element-interactions.md at master \xb7 jsx-eslint/eslint-plugin-jsx-a11y")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/interactive-supports-focus.md"},"eslint-plugin-jsx-a11y/interactive-supports-focus.md at master \xb7 jsx-eslint/eslint-plugin-jsx-a11y")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/click-events-have-key-events.md"},"eslint-plugin-jsx-a11y/click-events-have-key-events.md at master \xb7 jsx-eslint/eslint-plugin-jsx-a11y"))),(0,r.kt)("h2",{id:"alias-error"},"Alias error"),(0,r.kt)("p",null,"Use this will partially cause error, since the ",(0,r.kt)("inlineCode",{parentName:"p"},"_public")," works well, while ",(0,r.kt)("inlineCode",{parentName:"p"},"_renderer")," won't."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'// .eslintrc\n  "settings": {\n    "alias": {\n        "map": [\n            [ "_public", "./public" ],\n            [ "_renderer", "./src/renderer" ]\n        ]\n      },\n    "import/resolver": {\n        "webpack": {\n            "config": "./webpack.config.js"\n        },\n      }\n    }\n  },\n')),(0,r.kt)("p",null,"However, if I just change the ",(0,r.kt)("inlineCode",{parentName:"p"},"config"),"'s value into ",(0,r.kt)("inlineCode",{parentName:"p"},"{}"),", then everything goes well including ",(0,r.kt)("inlineCode",{parentName:"p"},"import/no-extraneous-dependencies"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'// .eslintrc\n  "settings": {\n    "import/resolver": {\n      "webpack": {\n        "config": {\n        }\n      }\n    }\n  },\n')),(0,r.kt)("p",null,"I don't know why, maybe it's a bug."),(0,r.kt)("p",null,"Here is my installed packages about ",(0,r.kt)("inlineCode",{parentName:"p"},"eslint"),":"),(0,r.kt)("img",{alt:"picture 3",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/1640339399635-eslint-bugfix-88b6064bdc55bf3495335674e1e254488ee1e239eec5324af609ac1586caddb8.png",width:"480"}),(0,r.kt)("p",null,"Finally, I decided to give up the ",(0,r.kt)("inlineCode",{parentName:"p"},"xxx-webpack")," choice:"),(0,r.kt)("img",{alt:"picture 4",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/1640340967469-eslint-bugfix-9f20bf6d6ac82d82634fef3e48e09adbf9bd2b77a5502bf8cbca2c33e3e0d2bd.png",width:"480"}),(0,r.kt)("p",null,"refer:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/import-js/eslint-plugin-import/issues/1851"},"Webpack alias not working \xb7 Issue #1851 \xb7 import-js/eslint-plugin-import")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/import-js/eslint-plugin-import"},"https://github.com/import-js/eslint-plugin-import")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/johvin/eslint-import-resolver-alias"},"https://github.com/johvin/eslint-import-resolver-alias")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/import-js/eslint-plugin-import"},"https://github.com/import-js/eslint-plugin-import"))))}u.isMDXComponent=!0}}]);