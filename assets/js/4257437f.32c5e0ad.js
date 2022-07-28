"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2778],{3905:(e,t,r)=>{r.d(t,{Zo:()=>f,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},f=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,f=i(e,["components","mdxType","originalType","parentName"]),u=c(r),d=o,m=u["".concat(l,".").concat(d)]||u[d]||p[d]||s;return r?n.createElement(m,a(a({ref:t},f),{},{components:r})):n.createElement(m,a({ref:t},f))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var c=2;c<s;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},24273:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>y,contentTitle:()=>d,default:()=>g,frontMatter:()=>u,metadata:()=>m,toc:()=>h});var n=r(3905),o=Object.defineProperty,s=Object.defineProperties,a=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,f=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&f(e,r,t[r]);if(i)for(var r of i(t))c.call(t,r)&&f(e,r,t[r]);return e};const u={},d=void 0,m={unversionedId:"Coding/CSS/flex/flex",id:"Coding/CSS/flex/flex",title:"flex",description:"Why are there no justify-items and justify-self properties?",source:"@site/docs/Coding/CSS/flex/flex.md",sourceDirName:"Coding/CSS/flex",slug:"/Coding/CSS/flex/",permalink:"/docs/Coding/CSS/flex/",draft:!1,editUrl:"https://github.com/markshawn2020/keeps-learning/edit/master/docs/Coding/CSS/flex/flex.md",tags:[],version:"current",lastUpdatedAt:1659025064,formattedLastUpdatedAt:"2022\u5e747\u670828\u65e5",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"css howto",permalink:"/docs/Coding/CSS/css-howto"},next:{title:"scss howto",permalink:"/docs/Coding/CSS/scss/scss-howto"}},y={},h=[{value:"Why are there no <code>justify-items</code> and <code>justify-self</code> properties?",id:"why-are-there-no-justify-items-and-justify-self-properties",level:2}],b={toc:h};function g(e){var t,r=e,{components:o}=r,f=((e,t)=>{var r={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=p(p({},b),f),s(t,a({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("h2",p({},{id:"why-are-there-no-justify-items-and-justify-self-properties"}),"Why are there no ",(0,n.kt)("inlineCode",{parentName:"h2"},"justify-items")," and ",(0,n.kt)("inlineCode",{parentName:"h2"},"justify-self")," properties?"),(0,n.kt)("p",null,"This is a good question not only me but also some other one do wonder like ",(0,n.kt)("a",p({parentName:"p"},{href:"https://stackoverflow.com/questions/32551291/in-css-flexbox-why-are-there-no-justify-items-and-justify-self-properties"}),'In CSS Flexbox, why are there no "justify-items" and "justify-self" properties? - Stack Overflow'),"."),(0,n.kt)("p",null,"It concerns with some design concept about flex, the behind consideration is far beyond my shallow thought."),(0,n.kt)("p",null,"Thanks to this question, as well as the answer provided by ",(0,n.kt)("a",p({parentName:"p"},{href:"https://stackoverflow.com/questions/32551291/in-css-flexbox-why-are-there-no-justify-items-and-justify-self-properties#:~:text=%2B600-,Methods%20for%20Aligning%20Flex%20Items%20along%20the%20Main%20Axis,-As%20stated%20in"}),"Methods for Aligning Flex Items along the Main Axis"),"."),(0,n.kt)("p",null,"Finally, what I wanna realize is an item separate from the constraint of father container"),(0,n.kt)("img",{alt:"picture 6",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/1639923663880-12682991c6a0a6e9ad06936482ea69734a45d298a3fb84e0e900750fad22933f.png",width:"720"})," , and which can be easily solved out by using the key `margin: auto`(`m-auto` in tailwindcss).",(0,n.kt)("p",null,"Hence, it behaves what I was expected to:"),(0,n.kt)("img",{alt:"picture 7",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/1639923803788-1ea69442ce26ea2fb40cf68466f9a1694727c497e9123989ad6167273eb5d0b7.png",width:"720"}),(0,n.kt)("p",null,"Thanks!"),(0,n.kt)("p",null,"reference:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",p({parentName:"li"},{href:"https://css-tricks.com/snippets/css/a-guide-to-flexbox/"}),"A Complete Guide to Flexbox - CSS-Tricks")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",p({parentName:"li"},{href:"https://stackoverflow.com/questions/32551291/in-css-flexbox-why-are-there-no-justify-items-and-justify-self-properties"}),'In CSS Flexbox, why are there no "justify-items" and "justify-self" properties? - Stack Overflow'))))}g.isMDXComponent=!0}}]);