"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1750],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=p(n),d=a,f=h["".concat(l,".").concat(d)]||h[d]||u[d]||r;return n?o.createElement(f,i(i({ref:t},c),{},{components:n})):o.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},66623:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var o=n(87462),a=(n(67294),n(3905));const r={},i="fastapi-howto",s={unversionedId:"coding/Python/fastapi/fastapi-howto",id:"version-0.16.0/coding/Python/fastapi/fastapi-howto",title:"fastapi-howto",description:"when rootpath meets with docurl",source:"@site/versioned_docs/version-0.16.0/coding/Python/fastapi/fastapi-howto.md",sourceDirName:"coding/Python/fastapi",slug:"/coding/Python/fastapi/fastapi-howto",permalink:"/docusaurus/docs/0.16.0/coding/Python/fastapi/fastapi-howto",draft:!1,editUrl:"https://github.com/markshawn2020/docusaurus/edit/master/docs/coding/Python/fastapi/fastapi-howto.md",tags:[],version:"0.16.0",lastUpdatedAt:1658816369,formattedLastUpdatedAt:"2022\u5e747\u670826\u65e5",frontMatter:{},sidebar:"docs",previous:{title:"\u89c1\u5fae\u6570\u636e\u722c\u53d6",permalink:"/docusaurus/docs/0.16.0/coding/Python/Python-Finance/jianwei/"},next:{title:"uvicorn-howto",permalink:"/docusaurus/docs/0.16.0/coding/Python/fastapi/uvicorn-howto"}},l={},p=[{value:"when <code>root_path</code> meets with <code>doc_url</code>",id:"when-root_path-meets-with-doc_url",level:2},{value:"How to save uploaded files",id:"how-to-save-uploaded-files",level:2},{value:"How to write unit test?",id:"how-to-write-unit-test",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"fastapi-howto"},"fastapi-howto"),(0,a.kt)("h2",{id:"when-root_path-meets-with-doc_url"},"when ",(0,a.kt)("inlineCode",{parentName:"h2"},"root_path")," meets with ",(0,a.kt)("inlineCode",{parentName:"h2"},"doc_url")),(0,a.kt)("p",null,"it seems easy when we read the introduction of ",(0,a.kt)("inlineCode",{parentName:"p"},"root_path")," at ",(0,a.kt)("a",{parentName:"p",href:"https://fastapi.tiangolo.com/advanced/behind-a-proxy/"},"Behind a Proxy - FastAPI")," however things go different when we combine this 'sugar' with ",(0,a.kt)("inlineCode",{parentName:"p"},"no_doc_url"),"."),(0,a.kt)("p",null,"I think it is because that the ",(0,a.kt)("inlineCode",{parentName:"p"},"doc_url")," would all be diy by ourselves when we use the offline url settings, which deserves our special attention since I spent a bit of time suffering from it."),(0,a.kt)("p",null,"Finally, always remember ",(0,a.kt)("inlineCode",{parentName:"p"},"root_path")," is just a 'proxy' prefix rather than the real one!"),(0,a.kt)("p",null,"reference:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://fastapi.tiangolo.com/advanced/behind-a-proxy/#check-the-docs-ui"},"\u4ee3\u7406\u80cc\u540e - FastAPI"))),(0,a.kt)("h2",{id:"how-to-save-uploaded-files"},"How to save uploaded files"),(0,a.kt)("p",null,"At present, I'd love to use ",(0,a.kt)("inlineCode",{parentName:"p"},"aiofiles")," to help me solve this problem."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},'with awiat aiofiles.open(OUT_FILE_PATH, "wb") as f:\n    while content := IN_FILE_OBJECT.read(1024):\n        await f.write(content)\n')),(0,a.kt)("p",null,"reference:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/63580229/how-to-save-uploadfile-in-fastapi"},"python - How to save UploadFile in FastAPI - Stack Overflow"))),(0,a.kt)("h2",{id:"how-to-write-unit-test"},"How to write unit test?"),(0,a.kt)("p",null,"using pytest."),(0,a.kt)("p",null,"reference:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.jetbrains.com/help/pycharm/testing-your-first-python-application.html"},"Step 3. Test your first Python application | PyCharm")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.pytest.org/en/6.2.x/"},"pytest: helps you write better programs \u2014 pytest documentation")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://fastapi.tiangolo.com/tutorial/testing/?h=test"},"Testing - FastAPI"))))}u.isMDXComponent=!0}}]);