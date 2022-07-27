"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3026],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>y});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=l(r),y=a,m=u["".concat(p,".").concat(y)]||u[y]||d[y]||o;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},19394:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>f,contentTitle:()=>y,default:()=>b,frontMatter:()=>u,metadata:()=>m,toc:()=>g});var n=r(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&s(e,r,t[r]);if(c)for(var r of c(t))l.call(t,r)&&s(e,r,t[r]);return e};const u={},y=void 0,m={unversionedId:"Coding/JS/redux",id:"version-0.16.0/Coding/JS/redux",title:"redux",description:"react-redux typescript best practice",source:"@site/versioned_docs/version-0.16.0/Coding/JS/redux.md",sourceDirName:"Coding/JS",slug:"/Coding/JS/redux",permalink:"/keeps-learning/docs/0.16.0/Coding/JS/redux",draft:!1,editUrl:"https://github.com/markshawn2020/keeps-learning/edit/master/docs/Coding/JS/redux.md",tags:[],version:"0.16.0",lastUpdatedAt:1658910797,formattedLastUpdatedAt:"2022\u5e747\u670827\u65e5",frontMatter:{},sidebar:"docs",previous:{title:"npm/yarn howto",permalink:"/keeps-learning/docs/0.16.0/Coding/JS/npm_yarn-howto"},next:{title:"java howto",permalink:"/keeps-learning/docs/0.16.0/Coding/Java/java-howto"}},f={},g=[{value:"react-redux typescript best practice",id:"react-redux-typescript-best-practice",level:2},{value:"react-redux ts doc",id:"react-redux-ts-doc",level:3},{value:"redux toolkit doc",id:"redux-toolkit-doc",level:3},{value:"examples of typing actions and reducers in ts",id:"examples-of-typing-actions-and-reducers-in-ts",level:3},{value:"based on <code>PayloadAction</code>",id:"based-on-payloadaction",level:4}],k={toc:g};function b(e){var t,r=e,{components:a}=r,s=((e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&c)for(var n of c(e))t.indexOf(n)<0&&l.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=d(d({},k),s),o(t,i({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("h2",d({},{id:"react-redux-typescript-best-practice"}),"react-redux typescript best practice"),(0,n.kt)("h3",d({},{id:"react-redux-ts-doc"}),"react-redux ts doc"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",d({parentName:"p"},{href:"https://react-redux.js.org/tutorials/typescript-quick-start"}),"TypeScript Quick Start | React Redux"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",d({parentName:"p"},{href:"https://react-redux.js.org/using-react-redux/usage-with-typescript"}),"Usage with TypeScript | React Redux")))),(0,n.kt)("h3",d({},{id:"redux-toolkit-doc"}),"redux toolkit doc"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",d({parentName:"p"},{href:"https://redux-toolkit.js.org/introduction/getting-started"}),"Getting Started | Redux Toolkit"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",d({parentName:"p"},{href:"https://redux.js.org/tutorials/typescript-quick-start#define-slice-state-and-action-types"}),"TypeScript Quick Start | Redux")))),(0,n.kt)("h3",d({},{id:"examples-of-typing-actions-and-reducers-in-ts"}),"examples of typing actions and reducers in ts"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"https://stackoverflow.com/questions/35482241/how-to-type-redux-actions-and-redux-reducers-in-typescript"}),"How to type Redux actions and Redux reducers in TypeScript? - Stack Overflow"))),(0,n.kt)("h4",d({},{id:"based-on-payloadaction"}),"based on ",(0,n.kt)("inlineCode",{parentName:"h4"},"PayloadAction")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"https://pretagteam.com/question/property-payload-is-missing-in-type-action-but-required-in-type-additemaction"}),"Property 'payload' is missing in type 'Action' but required in type 'AddItemAction' - Pretag"))))}b.isMDXComponent=!0}}]);