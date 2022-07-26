"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3247],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),u=c(n),m=l,k=u["".concat(s,".").concat(m)]||u[m]||p[m]||o;return n?a.createElement(k,i(i({ref:t},d),{},{components:n})):a.createElement(k,i({ref:t},d))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,i=new Array(o);i[0]=u;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:l,i[1]=r;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},25089:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var a=n(87462),l=(n(67294),n(3905));const o={},i="electron-bugfix",r={unversionedId:"coding/JS/Electron/electron-bugfix",id:"version-0.16.0/coding/JS/Electron/electron-bugfix",title:"electron-bugfix",description:"1. when mock/test, 'Electron failed to install correctly, please delete nodemodules/electron and try installing again'",source:"@site/versioned_docs/version-0.16.0/coding/JS/Electron/electron-bugfix.md",sourceDirName:"coding/JS/Electron",slug:"/coding/JS/Electron/electron-bugfix",permalink:"/docs/0.16.0/coding/JS/Electron/electron-bugfix",draft:!1,editUrl:"https://github.com/markshawn2020/docusaurus/edit/master/docs/coding/JS/Electron/electron-bugfix.md",tags:[],version:"0.16.0",lastUpdatedAt:1658816369,formattedLastUpdatedAt:"2022\u5e747\u670826\u65e5",frontMatter:{},sidebar:"docs",previous:{title:"jest howto",permalink:"/docs/0.16.0/coding/JS/CodeQuality_eslint_prettier_jest/jest-howto"},next:{title:"electron howto",permalink:"/docs/0.16.0/coding/JS/Electron/electron-howto"}},s={},c=[{value:"\u2705 when mock/test, &#39;Electron failed to install correctly, please delete node_modules/electron and try installing again&#39;",id:"-when-mocktest-electron-failed-to-install-correctly-please-delete-node_moduleselectron-and-try-installing-again",level:2},{value:"conclusion",id:"conclusion",level:3},{value:"electron-rebuild error",id:"electron-rebuild-error",level:2},{value:"\u2705 can&#39;t resolve <code>rebuild</code> in <code>postinstall</code>",id:"-cant-resolve-rebuild-in-postinstall",level:2},{value:"\u2705 webpack dev server",id:"-webpack-dev-server",level:2},{value:"\u2705 registry diff caused build error",id:"-registry-diff-caused-build-error",level:2},{value:"\u2705 native module",id:"-native-module",level:2},{value:"electron build sqlite3",id:"electron-build-sqlite3",level:3},{value:"<code>electron-builder install-app-deps</code> error",id:"electron-builder-install-app-deps-error",level:3},{value:"\u2705 windows cannot select file",id:"-windows-cannot-select-file",level:2},{value:"\u2705 Can&#39;t use <code>ContextBridge</code> which <code>ContextIsolation is true</code>",id:"-cant-use-contextbridge-which-contextisolation-is-true",level:2},{value:"Official Documentation",id:"official-documentation",level:3},{value:"A simple solution: give up using <code>ContextBridge</code>",id:"a-simple-solution-give-up-using-contextbridge",level:3},{value:"A seemly good solution: <code>nodeIntegration: true; contextIsolation:false</code>",id:"a-seemly-good-solution-nodeintegration-true-contextisolationfalse",level:3},{value:"A more sophisticated solution: based on <code>WebPack</code>",id:"a-more-sophisticated-solution-based-on-webpack",level:3},{value:"add <code>global = globalThis</code> in <code>index.html</code>",id:"add-global--globalthis-in-indexhtml",level:4}],d={toc:c};function p(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"electron-bugfix"},"electron-bugfix"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#white_check_mark-when-mocktest-electron-failed-to-install-correctly-please-delete-node_moduleselectron-and-try-installing-again"},"\u2705 when mock/test, 'Electron failed to install correctly, please delete node_modules/electron and try installing again'"),(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#conclusion"},"conclusion")))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#electron-rebuild-error"},"electron-rebuild error")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#white_check_mark-cant-resolve-rebuild-in-postinstall"},"\u2705 can't resolve ",(0,l.kt)("inlineCode",{parentName:"a"},"rebuild")," in ",(0,l.kt)("inlineCode",{parentName:"a"},"postinstall"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#white_check_mark-webpack-dev-server"},"\u2705 webpack dev server")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#white_check_mark-registry-diff-caused-build-error"},"\u2705 registry diff caused build error")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#white_check_mark-native-module"},"\u2705 native module"),(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#electron-build-sqlite3"},"electron build sqlite3")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#electron-builder-install-app-deps-error"},(0,l.kt)("inlineCode",{parentName:"a"},"electron-builder install-app-deps")," error")))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#white_check_mark-windows-cannot-select-file"},"\u2705 windows cannot select file")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#white_check_mark-cant-use-contextbridge-which-contextisolation-is-true"},"\u2705 Can't use ",(0,l.kt)("inlineCode",{parentName:"a"},"ContextBridge")," which ",(0,l.kt)("inlineCode",{parentName:"a"},"ContextIsolation is true")),(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#official-documentation"},"Official Documentation")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#a-simple-solution-give-up-using-contextbridge"},"A simple solution: give up using ",(0,l.kt)("inlineCode",{parentName:"a"},"ContextBridge"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#a-seemly-good-solution-nodeintegration-true-contextisolationfalse"},"A seemly good solution: ",(0,l.kt)("inlineCode",{parentName:"a"},"nodeIntegration: true; contextIsolation:false"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#a-more-sophisticated-solution-based-on-webpack"},"A more sophisticated solution: based on ",(0,l.kt)("inlineCode",{parentName:"a"},"WebPack")),(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#add-global--globalthis-in-indexhtml"},"add ",(0,l.kt)("inlineCode",{parentName:"a"},"global = globalThis")," in ",(0,l.kt)("inlineCode",{parentName:"a"},"index.html")))))))),(0,l.kt)("h2",{id:"-when-mocktest-electron-failed-to-install-correctly-please-delete-node_moduleselectron-and-try-installing-again"},"\u2705 when mock/test, 'Electron failed to install correctly, please delete node_modules/electron and try installing again'"),(0,l.kt)("img",{alt:"picture 28",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/electron-bugfix-1641586545015-6e15ba21daa92b4474735f4c9e8513259f60d365301b0847b1935bc0c9f356dd.png"}),(0,l.kt)("p",null,"I didn't find any ",(0,l.kt)("inlineCode",{parentName:"p"},"path.txt")," for electron, even for any package."),(0,l.kt)("img",{alt:"picture 29",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/electron-bugfix-1641586908495-225613deee0af42af0e1763c04e1d28fecace907506d0a9ce2edfab1fca0d08a.png"}),(0,l.kt)("p",null,"However, if I explore global electron, then it has (ref: ",(0,l.kt)("a",{parentName:"p",href:"https://www.google.com/search?q=enter+npm+package#:~:text=Browse%20an%20installed%20package"},"Browse an installed package"),"):"),(0,l.kt)("img",{alt:"picture 30",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/electron-bugfix-1641587194504-cd78e81a21e2871fbc517996c2ec6cdccb93294e0e75349685c9547fbcee452f.png"}),(0,l.kt)("p",null,"As a contrast:"),(0,l.kt)("img",{alt:"picture 31",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/electron-bugfix-1641587311833-b8434599978a2ad98b4f7efac3068156bb05fe825ce184c712396786863a9700.png"}),(0,l.kt)("p",null,"What's interested, if I use ",(0,l.kt)("inlineCode",{parentName:"p"},"node install.js")," as suggested by ",(0,l.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/39419814/electron-and-webpack-enoent-no-such-file-or-directory-open-path-txt"},"node.js - Electron and Webpack ENOENT: no such file or directory, open '/path.txt' - Stack Overflow"),":"),(0,l.kt)("img",{alt:"picture 32",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/electron-bugfix-1641587420146-6b262ffe8de375b236a000201db95cd66118251ecbcdf0ac382927b62ddbbdd1.png"}),(0,l.kt)("p",null,"Then things are all ok!"),(0,l.kt)("img",{alt:"picture 33",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/electron-bugfix-1641587499881-ba1d30816abdb3883ca90c59e8f64e060372cc727679a9877faa31dca33a757f.png"}),(0,l.kt)("h3",{id:"conclusion"},"conclusion"),(0,l.kt)("p",null,"If we want to use ",(0,l.kt)("inlineCode",{parentName:"p"},"electron")," for project mock, we may activate it using:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"cd node_modules/electron\nnode install.js\n")),(0,l.kt)("p",null,"Or, according to the source code, we can provide an environment variable:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"ELECTRON_OVERRIDE_DIST_PATH=XXXX\n")),(0,l.kt)("h2",{id:"electron-rebuild-error"},"electron-rebuild error"),(0,l.kt)("p",null,"one possible problem is about ",(0,l.kt)("inlineCode",{parentName:"p"},"registry"),"."),(0,l.kt)("img",{alt:"picture 21",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/electron-bugfix-1641561636763-a8c8998254763dba35d2279c17d5f846465115a419a442bcb164ed03563392df.png"}),(0,l.kt)("h2",{id:"-cant-resolve-rebuild-in-postinstall"},"\u2705 can't resolve ",(0,l.kt)("inlineCode",{parentName:"h2"},"rebuild")," in ",(0,l.kt)("inlineCode",{parentName:"h2"},"postinstall")),(0,l.kt)("img",{alt:"picture 20",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/electron-bugfix-1641554575880-abfb7317cd46fb8e54fd6a54d48c33597f7c32cc5c8567df776bfedf3a758d7e.png"}),(0,l.kt)("p",null,"In this article ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/rvpanoz/luna/issues/43"},"ERROR in dll renderer Module not found: Error: Can't resolve 'undefined' \xb7 Issue #43 \xb7 rvpanoz/luna"),", which occurs the problem a bit like me, and its solution is to remove the cannot-resolve package of ",(0,l.kt)("inlineCode",{parentName:"p"},"undefined"),"."),(0,l.kt)("p",null,"So I learned it, and do find a package named as ",(0,l.kt)("inlineCode",{parentName:"p"},"rebuild")," in my ",(0,l.kt)("inlineCode",{parentName:"p"},"package.json")," file."),(0,l.kt)("img",{alt:"picture 18",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/electron-bugfix-1641554293693-2647abc6e3152709bae4155a7628ea9db4d0d69844bfbc7706f1e57f5f965d8d.png"}),(0,l.kt)("p",null,"Then I removed it, and re ",(0,l.kt)("inlineCode",{parentName:"p"},"npm run postinstall"),", and it succeeded!"),(0,l.kt)("img",{alt:"picture 19",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/electron-bugfix-1641554431120-f1a659286619fcb90a8781fa7cb20e0e011ae380b07a536362ef114446f1d25b.png"}),(0,l.kt)("h2",{id:"-webpack-dev-server"},"\u2705 webpack dev server"),(0,l.kt)("img",{alt:"picture 16",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/electron-bugfix-1641553334892-6e7bf907b20bb5557bb63f7e9cb70ebe939b9edd545c64d15a51cbcb6944975b.png"}),(0,l.kt)("p",null,"solution:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"add ",(0,l.kt)("inlineCode",{parentName:"li"},"// @ts-ignore"),", official way")),(0,l.kt)("img",{alt:"picture 17",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/electron-bugfix-1641553995920-a435fa37225e7ff6380aa1dc30a9e29e7533e2b00c84ff639c1785f478184854.png"}),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"add an extended interface, at: ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/DefinitelyTyped/DefinitelyTyped/issues/27570#issuecomment-474628163"},"https://github.com/DefinitelyTyped/DefinitelyTyped/issues/27570#issuecomment-474628163"))),(0,l.kt)("p",null,"ref:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/DefinitelyTyped/DefinitelyTyped/issues/27570"},"[@types/webpack] 'devServer' does not exist in type 'Configuration' \xb7 Issue #27570 \xb7 DefinitelyTyped/DefinitelyTyped"))),(0,l.kt)("h2",{id:"-registry-diff-caused-build-error"},"\u2705 registry diff caused build error"),(0,l.kt)("img",{alt:"picture 14",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/electron-bugfix-1641551393710-9a1c96847a7e7154ba7e311576463c6f91dc3edc2d7fed349bbfc71b82b3c923.png"}),(0,l.kt)("h2",{id:"-native-module"},"\u2705 native module"),(0,l.kt)("p",null,"The proper way to deal with native module is to:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"install it into devDependencies in the project root"),(0,l.kt)("li",{parentName:"ol"},"install it as a dependency in the release/app")),(0,l.kt)("p",null,"ref:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/electron-react-boilerplate/electron-react-boilerplate/issues/1171"},"Warn user when installing native dependency to ",(0,l.kt)("inlineCode",{parentName:"a"},"./package.json")," \xb7 Issue #1171 \xb7 electron-react-boilerplate/electron-react-boilerplate"))),(0,l.kt)("h3",{id:"electron-build-sqlite3"},"electron build sqlite3"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"electron-rebuild -f -w sqlite3\n")),(0,l.kt)("p",null,"'-f' means 'force'\n'-w' means 'module'"),(0,l.kt)("img",{alt:"picture 22",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/electron-bugfix-1641561684721-9a4867d960620d29d17b1c52d3a6d39ea1dd60c726529e0e08db89b90f386421.png"}),(0,l.kt)("p",null,"ref:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/electron-rebuild?activeTab=readme"},"electron-rebuild - npm"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://github.com/electron/electron-rebuild/issues/322"},"electon-rebuild fails for sqlite3 \xb7 Issue #322 \xb7 electron/electron-rebuild"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://github.com/JoshuaWise/better-sqlite3/issues/126"},"Help me use Electron! \xb7 Issue #126 \xb7 JoshuaWise/better-sqlite3")))),(0,l.kt)("h3",{id:"electron-builder-install-app-deps-error"},(0,l.kt)("inlineCode",{parentName:"h3"},"electron-builder install-app-deps")," error"),(0,l.kt)("p",null,"can change the ",(0,l.kt)("inlineCode",{parentName:"p"},"electron-builder")," into ",(0,l.kt)("inlineCode",{parentName:"p"},"electron-rebuild"),"."),(0,l.kt)("img",{alt:"picture 15",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/electron-bugfix-1641553039789-8c866cee84f806b3a58d321ac8ae12e718fb50e3598f2e3ee963e1123c4ab9af.png"}),(0,l.kt)("p",null,"core ref:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/electron-userland/electron-builder/issues/1906"},"[install-app-deps] what does it do? \xb7 Issue #1906 \xb7 electron-userland/electron-builder"))),(0,l.kt)("h2",{id:"-windows-cannot-select-file"},"\u2705 windows cannot select file"),(0,l.kt)("p",null,"This is a feature/restriction in windows platform."),(0,l.kt)("p",null,"The solution is to use one of ",(0,l.kt)("inlineCode",{parentName:"p"},"openFIle")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"openFolder"),"."),(0,l.kt)("img",{alt:"picture 6",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/electron-bugfix-1641486288453-b22352e5583541ceb8b3314f58d5863e0875d7631c94f21d8ab40eb236ea2aeb.png"}),(0,l.kt)("p",null,"ref:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.electronjs.org/zh/docs/latest/api/dialog#dialogshowopendialogsyncbrowserwindow-options"},"dialog | Electron"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://github.com/electron/electron/issues/30651"},"[Bug]: showOpenDialog with openFile and openDirectory only selects directories in Windows \xb7 Issue #30651 \xb7 electron/electron"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/windows/win32/api/shobjidl_core/ne-shobjidl_core-_fileopendialogoptions"},"_FILEOPENDIALOGOPTIONS (shobjidl_core.h) - Win32 apps | Microsoft Docs")))),(0,l.kt)("h2",{id:"-cant-use-contextbridge-which-contextisolation-is-true"},"\u2705 Can't use ",(0,l.kt)("inlineCode",{parentName:"h2"},"ContextBridge")," which ",(0,l.kt)("inlineCode",{parentName:"h2"},"ContextIsolation is true")),(0,l.kt)("h3",{id:"official-documentation"},"Official Documentation"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.electronjs.org/docs/latest/tutorial/context-isolation"},"Context Isolation | Electron"))),(0,l.kt)("h3",{id:"a-simple-solution-give-up-using-contextbridge"},"A simple solution: give up using ",(0,l.kt)("inlineCode",{parentName:"h3"},"ContextBridge")),(0,l.kt)("p",null,"In this article, the one who happened to the same issue finally uses only ",(0,l.kt)("inlineCode",{parentName:"p"},"ipcMain")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"ipcRenderer")," with no ",(0,l.kt)("inlineCode",{parentName:"p"},"ContextBridge")," set."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/webpack/webpack/issues/10035"},"Uncaught ReferenceError: global is not defined \xb7 Issue #10035 \xb7 webpack/webpack"))),(0,l.kt)("p",null,"Although it's OK, since the ",(0,l.kt)("inlineCode",{parentName:"p"},"ipcMain - ipcRenderer")," solution can do almost anything rather than base on a ",(0,l.kt)("inlineCode",{parentName:"p"},"ContextBridge"),"."),(0,l.kt)("h3",{id:"a-seemly-good-solution-nodeintegration-true-contextisolationfalse"},"A seemly good solution: ",(0,l.kt)("inlineCode",{parentName:"h3"},"nodeIntegration: true; contextIsolation:false")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.wyr.me/post/680"},"Electron 12+ \u51fa\u73b0 require is not defined \u62a5\u9519\u89e3\u51b3 - \u8f76\u54e5"))),(0,l.kt)("h3",{id:"a-more-sophisticated-solution-based-on-webpack"},"A more sophisticated solution: based on ",(0,l.kt)("inlineCode",{parentName:"h3"},"WebPack")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/69183918/getting-referenceerror-require-is-not-defined-when-passing-contextisolation-tr"},"javascript - Getting ReferenceError: require is not defined when passing contextIsolation: true with preload script - Stack Overflow"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://github.com/webpack/webpack/issues/10035"},"Uncaught ReferenceError: global is not defined \xb7 Issue #10035 \xb7 webpack/webpack"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/45175521/referenceerror-global-is-not-defined-at-eval"},"webpack - ReferenceError: global is not defined at eval - Stack Overflow")))),(0,l.kt)("h4",{id:"add-global--globalthis-in-indexhtml"},"add ",(0,l.kt)("inlineCode",{parentName:"h4"},"global = globalThis")," in ",(0,l.kt)("inlineCode",{parentName:"h4"},"index.html")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/65586906/react-and-electron-with-draft-js-global-is-not-defined"},'javascript - React and Electron with Draft.js: "Global is not defined" - Stack Overflow'))))}p.isMDXComponent=!0}}]);