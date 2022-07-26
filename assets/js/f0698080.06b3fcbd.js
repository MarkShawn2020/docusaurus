"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5728],{3905:(e,t,n)=>{n.d(t,{Zo:()=>f,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},f=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,f=i(e,["components","mdxType","originalType","parentName"]),u=c(n),d=o,h=u["".concat(l,".").concat(d)]||u[d]||p[d]||s;return n?r.createElement(h,a(a({ref:t},f),{},{components:n})):r.createElement(h,a({ref:t},f))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var c=2;c<s;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2365:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const s={},a=void 0,i={unversionedId:"coding/CSS/flex/flex",id:"coding/CSS/flex/flex",title:"flex",description:"Why are there no justify-items and justify-self properties?",source:"@site/docs/coding/CSS/flex/flex.md",sourceDirName:"coding/CSS/flex",slug:"/coding/CSS/flex/",permalink:"/docs/coding/CSS/flex/",draft:!1,editUrl:"https://github.com/markshawn2020/docusaurus/edit/master/docs/coding/CSS/flex/flex.md",tags:[],version:"current",lastUpdatedAt:1658770976,formattedLastUpdatedAt:"2022\u5e747\u670825\u65e5",frontMatter:{},sidebar:"docs",previous:{title:"css howto",permalink:"/docs/coding/CSS/css-howto"},next:{title:"scss howto",permalink:"/docs/coding/CSS/scss/scss-howto"}},l={},c=[{value:"Why are there no <code>justify-items</code> and <code>justify-self</code> properties?",id:"why-are-there-no-justify-items-and-justify-self-properties",level:2}],f={toc:c};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"why-are-there-no-justify-items-and-justify-self-properties"},"Why are there no ",(0,o.kt)("inlineCode",{parentName:"h2"},"justify-items")," and ",(0,o.kt)("inlineCode",{parentName:"h2"},"justify-self")," properties?"),(0,o.kt)("p",null,"This is a good question not only me but also some other one do wonder like ",(0,o.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/32551291/in-css-flexbox-why-are-there-no-justify-items-and-justify-self-properties"},'In CSS Flexbox, why are there no "justify-items" and "justify-self" properties? - Stack Overflow'),"."),(0,o.kt)("p",null,"It concerns with some design concept about flex, the behind consideration is far beyond my shallow thought."),(0,o.kt)("p",null,"Thanks to this question, as well as the answer provided by ",(0,o.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/32551291/in-css-flexbox-why-are-there-no-justify-items-and-justify-self-properties#:~:text=%2B600-,Methods%20for%20Aligning%20Flex%20Items%20along%20the%20Main%20Axis,-As%20stated%20in"},"Methods for Aligning Flex Items along the Main Axis"),"."),(0,o.kt)("p",null,"Finally, what I wanna realize is an item separate from the constraint of father container"),(0,o.kt)("img",{alt:"picture 6",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/1639923663880-12682991c6a0a6e9ad06936482ea69734a45d298a3fb84e0e900750fad22933f.png",width:"720"})," , and which can be easily solved out by using the key `margin: auto`(`m-auto` in tailwindcss).",(0,o.kt)("p",null,"Hence, it behaves what I was expected to:"),(0,o.kt)("img",{alt:"picture 7",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/1639923803788-1ea69442ce26ea2fb40cf68466f9a1694727c497e9123989ad6167273eb5d0b7.png",width:"720"}),(0,o.kt)("p",null,"Thanks!"),(0,o.kt)("p",null,"reference:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://css-tricks.com/snippets/css/a-guide-to-flexbox/"},"A Complete Guide to Flexbox - CSS-Tricks")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/32551291/in-css-flexbox-why-are-there-no-justify-items-and-justify-self-properties"},'In CSS Flexbox, why are there no "justify-items" and "justify-self" properties? - Stack Overflow'))))}p.isMDXComponent=!0}}]);