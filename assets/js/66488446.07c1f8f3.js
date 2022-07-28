"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8405],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),c=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),p=c(r),f=n,m=p["".concat(l,".").concat(f)]||p[f]||u[f]||i;return r?o.createElement(m,a(a({ref:t},s),{},{components:r})):o.createElement(m,a({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=p;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d.mdxType="string"==typeof e?e:n,a[1]=d;for(var c=2;c<i;c++)a[c]=r[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}p.displayName="MDXCreateElement"},16521:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>g,contentTitle:()=>f,default:()=>b,frontMatter:()=>p,metadata:()=>m,toc:()=>y});var o=r(3905),n=Object.defineProperty,i=Object.defineProperties,a=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&s(e,r,t[r]);if(d)for(var r of d(t))c.call(t,r)&&s(e,r,t[r]);return e};const p={},f="android-studio howto",m={unversionedId:"Softwares/JetBrains/AndroidStudio/android-studio",id:"Softwares/JetBrains/AndroidStudio/android-studio",title:"android-studio howto",description:"config",source:"@site/docs/Softwares/JetBrains/AndroidStudio/android-studio.md",sourceDirName:"Softwares/JetBrains/AndroidStudio",slug:"/Softwares/JetBrains/AndroidStudio/android-studio",permalink:"/docs/Softwares/JetBrains/AndroidStudio/android-studio",draft:!1,editUrl:"https://github.com/markshawn2020/keeps-learning/edit/master/docs/Softwares/JetBrains/AndroidStudio/android-studio.md",tags:[],version:"current",lastUpdatedAt:1659025064,formattedLastUpdatedAt:"2022\u5e747\u670828\u65e5",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"google-search-howto",permalink:"/docs/Softwares/Google/GoogleSearch/google-search-howto"},next:{title:"clion howto",permalink:"/docs/Softwares/JetBrains/Clion/clion-howto"}},g={},y=[{value:"config",id:"config",level:2},{value:"stuck at <code>configure gradle project</code>",id:"stuck-at-configure-gradle-project",level:3}],w={toc:y};function b(e){var t,r=e,{components:n}=r,s=((e,t)=>{var r={};for(var o in e)l.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&d)for(var o of d(e))t.indexOf(o)<0&&c.call(e,o)&&(r[o]=e[o]);return r})(r,["components"]);return(0,o.kt)("wrapper",(t=u(u({},w),s),i(t,a({components:n,mdxType:"MDXLayout"}))),(0,o.kt)("h1",u({},{id:"android-studio-howto"}),"android-studio howto"),(0,o.kt)("h2",u({},{id:"config"}),"config"),(0,o.kt)("h3",u({},{id:"stuck-at-configure-gradle-project"}),"stuck at ",(0,o.kt)("inlineCode",{parentName:"h3"},"configure gradle project")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"in ",(0,o.kt)("inlineCode",{parentName:"li"},"SDK manager")," download target ",(0,o.kt)("inlineCode",{parentName:"li"},"NDK")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"cmake")),(0,o.kt)("li",{parentName:"ol"},"config ",(0,o.kt)("inlineCode",{parentName:"li"},"ndk.dir")," using the downloaded NDK, which is ",(0,o.kt)("inlineCode",{parentName:"li"},"~/Android/sdk/ndk/XXX/"),", in ",(0,o.kt)("inlineCode",{parentName:"li"},"local.properties")),(0,o.kt)("li",{parentName:"ol"},"invalidate cache and restart")),(0,o.kt)("p",null,"ref:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",u({parentName:"li"},{href:"https://stackoverflow.com/questions/21781569/android-studio-configure-gradle-project-takes-forever"}),"Android studio, configure gradle project takes forever - Stack Overflow"))))}b.isMDXComponent=!0}}]);