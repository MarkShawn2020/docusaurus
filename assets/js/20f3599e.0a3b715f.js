"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7383],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,f=u["".concat(i,".").concat(d)]||u[d]||c[d]||o;return n?a.createElement(f,l(l({ref:t},m),{},{components:n})):a.createElement(f,l({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},29846:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={},l="Mysql howto",s={unversionedId:"softwares/Database/Mysql/Mysql-howto",id:"version-0.16.0/softwares/Database/Mysql/Mysql-howto",title:"Mysql howto",description:"1. FIXED: mysql command not found",source:"@site/versioned_docs/version-0.16.0/softwares/Database/Mysql/Mysql-howto.md",sourceDirName:"softwares/Database/Mysql",slug:"/softwares/Database/Mysql/Mysql-howto",permalink:"/docs/0.16.0/softwares/Database/Mysql/Mysql-howto",draft:!1,editUrl:"https://github.com/markshawn2020/docusaurus/edit/master/docs/softwares/Database/Mysql/Mysql-howto.md",tags:[],version:"0.16.0",lastUpdatedAt:1658816369,formattedLastUpdatedAt:"2022\u5e747\u670826\u65e5",frontMatter:{},sidebar:"docs",previous:{title:"charles howto",permalink:"/docs/0.16.0/softwares/Charles/charles-howto"},next:{title:"readme",permalink:"/docs/0.16.0/softwares/FCPX/my318-2021/"}},i={},p=[{value:"FIXED: mysql command not found",id:"fixed-mysql-command-not-found",level:2},{value:"login",id:"login",level:2},{value:"mysql change password",id:"mysql-change-password",level:2},{value:"Step 1. login",id:"step-1-login",level:3},{value:"Step 2. change password",id:"step-2-change-password",level:3}],m={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"mysql-howto"},"Mysql howto"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#fixed-mysql-command-not-found"},"FIXED: mysql command not found")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#login"},"login")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#mysql-change-password"},"mysql change password"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#step-1-login"},"Step 1. login")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#step-2-change-password"},"Step 2. change password"))))),(0,r.kt)("h2",{id:"fixed-mysql-command-not-found"},"FIXED: mysql command not found"),(0,r.kt)("p",null,"The mysql bin folder position is at: ",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/local/mysql/bin"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# ~/.zshrc\nexport PATH=$PATH:/usr/local/mysql/bin\n")),(0,r.kt)("p",null,"ref:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.jianshu.com/p/ba2216596569"},"Mac\u5b89\u88c5mysql\u95ee\u9898\u4e4b-bash: mysql: command not found - \u7b80\u4e66"))),(0,r.kt)("h2",{id:"login"},"login"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"/usr/local/mysql/bin/mysql -u root -p\n")),(0,r.kt)("p",null,"!!!warning\nIt won't work if we directly use ",(0,r.kt)("inlineCode",{parentName:"p"},"mysql")," command before it is added to PATH."),(0,r.kt)("p",null,"ref:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/14235362/mac-install-and-open-mysql-using-terminal"},"macos - Mac install and open mysql using terminal - Stack Overflow"))),(0,r.kt)("h2",{id:"mysql-change-password"},"mysql change password"),(0,r.kt)("h3",{id:"step-1-login"},"Step 1. login"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"mysql -u root -p\n")),(0,r.kt)("p",null,"ref: ",(0,r.kt)("a",{parentName:"p",href:"#login"},"login")),(0,r.kt)("h3",{id:"step-2-change-password"},"Step 2. change password"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER USER 'user-name'@'localhost' IDENTIFIED BY 'NEW_USER_PASSWORD';\nFLUSH PRIVILEGES;\n")),(0,r.kt)("p",null,"ref:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://linuxize.com/post/how-to-change-mysql-user-password/"},"How to Change MySQL User Password | Linuxize"))))}c.isMDXComponent=!0}}]);