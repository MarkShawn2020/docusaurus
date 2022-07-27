"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[397],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},92252:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>m,default:()=>y,frontMatter:()=>u,metadata:()=>f,toc:()=>j});var r=n(3905),o=Object.defineProperty,i=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&c(e,n,t[n]);if(l)for(var n of l(t))p.call(t,n)&&c(e,n,t[n]);return e};const u={},m="jest howto",f={unversionedId:"Coding/JS/CodeQuality_eslint_prettier_jest/jest-howto",id:"version-0.16.0/Coding/JS/CodeQuality_eslint_prettier_jest/jest-howto",title:"jest howto",description:"[toc]",source:"@site/versioned_docs/version-0.16.0/Coding/JS/CodeQuality_eslint_prettier_jest/jest-howto.md",sourceDirName:"Coding/JS/CodeQuality_eslint_prettier_jest",slug:"/Coding/JS/CodeQuality_eslint_prettier_jest/jest-howto",permalink:"/keeps-learning/docs/0.16.0/Coding/JS/CodeQuality_eslint_prettier_jest/jest-howto",draft:!1,editUrl:"https://github.com/markshawn2020/keeps-learning/edit/master/docs/Coding/JS/CodeQuality_eslint_prettier_jest/jest-howto.md",tags:[],version:"0.16.0",lastUpdatedAt:1658910797,formattedLastUpdatedAt:"2022\u5e747\u670827\u65e5",frontMatter:{},sidebar:"docs",previous:{title:"eslint prettier typescript",permalink:"/keeps-learning/docs/0.16.0/Coding/JS/CodeQuality_eslint_prettier_jest/eslint-prettier-typescript"},next:{title:"electron-bugfix",permalink:"/keeps-learning/docs/0.16.0/Coding/JS/Electron/electron-bugfix"}},k={},j=[{value:"top js test frameworks",id:"top-js-test-frameworks",level:2},{value:"<code>jest</code> ESM support",id:"jest-esm-support",level:2},{value:"<code>jest</code>  + <code>typescript</code> + <code>ESM</code>",id:"jest---typescript--esm",level:2}],h={toc:j};function y(e){var t,n=e,{components:o}=n,c=((e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=d(d({},h),c),i(t,a({components:o,mdxType:"MDXLayout"}))),(0,r.kt)("h1",d({},{id:"jest-howto"}),"jest howto"),(0,r.kt)("p",null,"[toc]"),(0,r.kt)("h2",d({},{id:"top-js-test-frameworks"}),"top js test frameworks"),(0,r.kt)("p",null,"top 1: ",(0,r.kt)("inlineCode",{parentName:"p"},"jest")),(0,r.kt)("p",null,"top 2: ",(0,r.kt)("inlineCode",{parentName:"p"},"mocha")),(0,r.kt)("p",null,"others are: ",(0,r.kt)("inlineCode",{parentName:"p"},"jsamine"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"tape"),", etc."),(0,r.kt)("p",null,"In project of ",(0,r.kt)("inlineCode",{parentName:"p"},"rehype-shortcodes"),", I found them using ",(0,r.kt)("inlineCode",{parentName:"p"},"tape")," and seems cabinet(\u5c0f\u5de7\u7684) and output-friendly."),(0,r.kt)("p",null,"Nevertheless, I used to use ",(0,r.kt)("inlineCode",{parentName:"p"},"jest")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"ts-jest")," which is mature and strong. So I didn't pretend to dive into ",(0,r.kt)("inlineCode",{parentName:"p"},"tape")," deeper."),(0,r.kt)("h2",d({},{id:"jest-esm-support"}),(0,r.kt)("inlineCode",{parentName:"h2"},"jest")," ESM support"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Add ",(0,r.kt)("inlineCode",{parentName:"li"},'"type": "module"')," in package.json"),(0,r.kt)("li",{parentName:"ol"},"Add ",(0,r.kt)("inlineCode",{parentName:"li"},"transform: {}")," in ",(0,r.kt)("inlineCode",{parentName:"li"},"jest.config.js")),(0,r.kt)("li",{parentName:"ol"},"use one of the following approach to run jest in ",(0,r.kt)("inlineCode",{parentName:"li"},"esm")," mode:",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"node --experimental-vm-modules ./node_modules/.bin/jest JS_FILE")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"NODE_OPTIONS=--experimental-vm-modules npx jest JS_FILE")),(0,r.kt)("li",{parentName:"ol"},"Add ",(0,r.kt)("inlineCode",{parentName:"li"},'"scripts": {"test": "NODE_OPTIONS=--experimental-vm-modules npx jest"}')," in ",(0,r.kt)("inlineCode",{parentName:"li"},"package.json"),", then run ",(0,r.kt)("inlineCode",{parentName:"li"},"test JS_FILE")," in command line"),(0,r.kt)("li",{parentName:"ol"},"Add ",(0,r.kt)("inlineCode",{parentName:"li"},"--experimental-vm-modules")," in webstorm jest configuration, and then click run button: ",(0,r.kt)("img",{alt:"picture 35",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/1640519248016-jest-howto-009c6056a3584775b30ffeafabe837f98f2218515f396a293faf23d7676c2ef8.png",width:"480"}))))),(0,r.kt)("p",null,"ref:"),(0,r.kt)("p",null,"official answer of jest"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",d({parentName:"li"},{href:"https://jestjs.io/docs/ecmascript-modules"}),"ECMAScript Modules \xb7 Jest"))),(0,r.kt)("p",null,"stackoverflow solution"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",d({parentName:"li"},{href:"https://stackoverflow.com/questions/68956636/how-to-use-esm-tests-with-jest"}),"javascript - How to use ESM tests with jest? - Stack Overflow"))),(0,r.kt)("h2",d({},{id:"jest---typescript--esm"}),(0,r.kt)("inlineCode",{parentName:"h2"},"jest"),"  + ",(0,r.kt)("inlineCode",{parentName:"h2"},"typescript")," + ",(0,r.kt)("inlineCode",{parentName:"h2"},"ESM")),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-js"}),"// jest.config.js\nmodule.exports = {\n  preset: 'ts-jest/presets/default-esm', // or other ESM presets\n  globals: {\n    'ts-jest': {\n      useESM: true,\n    },\n  },\n  moduleNameMapper: {\n    '^(\\\\.{1,2}/.*)\\\\.js$': '$1',\n  },\n}\n")),(0,r.kt)("p",null,"ref:"),(0,r.kt)("p",null,"recommend:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",d({parentName:"li"},{href:"https://kulshekhar.github.io/ts-jest/docs/next/guides/esm-support/"}),"ESM Support | ts-jest"))))}y.isMDXComponent=!0}}]);