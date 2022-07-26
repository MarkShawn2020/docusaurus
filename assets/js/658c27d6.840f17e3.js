"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3112],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,h=d["".concat(i,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(h,l(l({ref:t},c),{},{components:n})):a.createElement(h,l({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:o,l[1]=p;for(var s=2;s<r;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},87386:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>p,toc:()=>s});var a=n(87462),o=(n(67294),n(3905));const r={},l="aosp pull",p={unversionedId:"AndroidFramework/TaskA1-aosp-pull/aosp-pull",id:"version-0.16.0/AndroidFramework/TaskA1-aosp-pull/aosp-pull",title:"aosp pull",description:"[toc]",source:"@site/versioned_docs/version-0.16.0/AndroidFramework/TaskA1-aosp-pull/aosp-pull.md",sourceDirName:"AndroidFramework/TaskA1-aosp-pull",slug:"/AndroidFramework/TaskA1-aosp-pull/aosp-pull",permalink:"/docs/0.16.0/AndroidFramework/TaskA1-aosp-pull/aosp-pull",draft:!1,editUrl:"https://github.com/markshawn2020/docusaurus/edit/master/docs/AndroidFramework/TaskA1-aosp-pull/aosp-pull.md",tags:[],version:"0.16.0",lastUpdatedAt:1658816369,formattedLastUpdatedAt:"2022\u5e747\u670826\u65e5",frontMatter:{},sidebar:"docs",previous:{title:"TODO",permalink:"/docs/0.16.0/TODO"},next:{title:"aosp compile bugfix",permalink:"/docs/0.16.0/AndroidFramework/TaskA2-aosp-compile/aosp-compile-bugfix"}},i={},s=[{value:"prepare",id:"prepare",level:2},{value:"fetch aosp source codes",id:"fetch-aosp-source-codes",level:2},{value:"\u6210\u529f\u62c9\u53d6\u7684\u5b8c\u7f8e\u8868\u73b0",id:"\u6210\u529f\u62c9\u53d6\u7684\u5b8c\u7f8e\u8868\u73b0",level:3},{value:"aosp\u955c\u50cf\u7684\u5927\u5c0f",id:"aosp\u955c\u50cf\u7684\u5927\u5c0f",level:3},{value:"\u4ec0\u4e48\u73af\u8282\u6700\u5403cpu\uff1acheckout\u7684\u65f6\u5019",id:"\u4ec0\u4e48\u73af\u8282\u6700\u5403cpucheckout\u7684\u65f6\u5019",level:3},{value:"aosp \u7f16\u8bd1\u6210\u529f\u7684\u8868\u73b0",id:"aosp-\u7f16\u8bd1\u6210\u529f\u7684\u8868\u73b0",level:3},{value:"repo steps",id:"repo-steps",level:2},{value:"repo detailed steps",id:"repo-detailed-steps",level:3},{value:"Step 1. download repo",id:"step-1-download-repo",level:4},{value:"Step 2. change repo mirror",id:"step-2-change-repo-mirror",level:4},{value:"Step 3. change python version used via repo",id:"step-3-change-python-version-used-via-repo",level:4},{value:"Step 4. <code>repo init</code>",id:"step-4-repo-init",level:4},{value:"Step 5. <code>repo sync</code>",id:"step-5-repo-sync",level:4},{value:"Step 6. build (make)",id:"step-6-build-make",level:4},{value:"repo howto",id:"repo-howto",level:3},{value:"how to get the revision(tag / version number) of repo",id:"how-to-get-the-revisiontag--version-number-of-repo",level:4},{value:"how to download/sync specific part of aosp",id:"how-to-downloadsync-specific-part-of-aosp",level:4},{value:"repo bugfix",id:"repo-bugfix",level:3},{value:"\u2705 <code>error: Unable to fully sync the tree. error: Downloading network changes failed.</code>",id:"-error-unable-to-fully-sync-the-tree-error-downloading-network-changes-failed",level:4},{value:"FIXME: TEST <code>A TLS packet with unexpected length was received.</code>",id:"fixme-test-a-tls-packet-with-unexpected-length-was-received",level:4},{value:"FIXME: <code>The remote end hung up unexpectedly</code>",id:"fixme-the-remote-end-hung-up-unexpectedly",level:4},{value:"\u2705 <code>prior sync failed; rebase still in progress</code>",id:"-prior-sync-failed-rebase-still-in-progress",level:3},{value:"discussion",id:"discussion",level:2},{value:"why not support macos",id:"why-not-support-macos",level:3}],c={toc:s};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"aosp-pull"},"aosp pull"),(0,o.kt)("p",null,"[toc]"),(0,o.kt)("h2",{id:"prepare"},"prepare"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"# ubuntu 18.0.4\nsudo apt-get install git-core gnupg flex bison build-essential zip curl zlib1g-dev gcc-multilib g++-multilib libc6-dev-i386 libncurses5 lib32ncurses5-dev x11proto-core-dev libx11-dev lib32z1-dev libgl1-mesa-dev libxml2-utils xsltproc unzip fontconfig\n")),(0,o.kt)("p",null,"ref:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://source.android.com/setup/build/initializing#installing-required-packages-ubuntu-1804"},"\u642d\u5efa\u6784\u5efa\u73af\u5883 \xa0|\xa0 Android \u5f00\u6e90\u9879\u76ee \xa0|\xa0 Android Open Source Project"))),(0,o.kt)("h2",{id:"fetch-aosp-source-codes"},"fetch aosp source codes"),(0,o.kt)("h3",{id:"\u6210\u529f\u62c9\u53d6\u7684\u5b8c\u7f8e\u8868\u73b0"},"\u6210\u529f\u62c9\u53d6\u7684\u5b8c\u7f8e\u8868\u73b0"),(0,o.kt)("p",null,"\u7f51\u901f\u3001\u955c\u50cf\u597d\u7684\u8bdd\uff08\u6ca1\u6709\u4ec0\u4e48\u7f51\u7edc\u6ce2\u52a8\u3001\u5899\u4e4b\u7c7b\u7684\u95ee\u9898\uff09\uff0c\u5e94\u8be5\u4f1a\u5f88\u5e72\u51c0\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/aosp-notes-1643041083062-7ef2fb44364ee4d19b85ca10c9d584fab92b00dcba15786931ecad664299a1dc.png",alt:"picture 12"}),"  "),(0,o.kt)("p",null,"\u7136\u540e\u6700\u540e\u4e00\u90e8\u5206\u4e5f\u4f1a\u5f88\u5e72\u51c0\uff0c\u5426\u5219\u4f1a\u6709",(0,o.kt)("inlineCode",{parentName:"p"},"repo sync -j1 --fail-fast"),"\u7684\u63d0\u793a\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/aosp-notes-1643041021703-2441a7b9be700a6cd4a915d77cf889a1b04040a47f073b724c303ca3466faa8d.png",alt:"picture 11"}),"  "),(0,o.kt)("p",null,"\u9009\u62e9combo\u7684\u65f6\u5019\u4e5f\u4f1a\u5f88\u5e72\u51c0\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/aosp-notes-1643041231454-e0370288b3958ecc7a66decdbe289feb7d6970955048b4b9ae7effd4c525884c.png",alt:"picture 13"})),(0,o.kt)("h3",{id:"aosp\u955c\u50cf\u7684\u5927\u5c0f"},"aosp\u955c\u50cf\u7684\u5927\u5c0f"),(0,o.kt)("p",null,"aosp 7 size: about 168GB"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/aosp-notes-1643018168314-a1741be86e4033659829ff6bd84b890047f972a9214375e4e698248f4960246c.png",alt:"picture 10"}),"  "),(0,o.kt)("h3",{id:"\u4ec0\u4e48\u73af\u8282\u6700\u5403cpucheckout\u7684\u65f6\u5019"},"\u4ec0\u4e48\u73af\u8282\u6700\u5403cpu\uff1acheckout\u7684\u65f6\u5019"),(0,o.kt)("p",null,"checkout\u7684\u65f6\u5019\u6700\u5361\uff0c\u56e0\u4e3acpu\u90fd\u7528\u6ee1\u4e86\uff08\u65e0\u5835\u585e\u7684\u90a3\u79cd\uff09\uff0c\u5355\u5355\u662f",(0,o.kt)("inlineCode",{parentName:"p"},"repo sync"),"\u8fd9\u79cd\u5176\u5b9e\u8fd8\u8fd8\u597d\uff0c\u6bd5\u7adf\u7f51\u7edc\u5ef6\u8fdf\u8981\u6bd4\u672c\u5730\u78c1\u76d8\u8981\u9ad8\uff0c\u5360\u7528cpu\u7684\u80fd\u529b\u4e5f\u5c31\u76f8\u5bf9\u8f83\u5f31\u4e86\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/aosp-notes-1643040592979-1255c3834cbd8fcc7fbd22a4a2763ea68a4be298da9bafe7099e335a16e4fd4f.png",alt:"picture 10"}),"  "),(0,o.kt)("h3",{id:"aosp-\u7f16\u8bd1\u6210\u529f\u7684\u8868\u73b0"},"aosp \u7f16\u8bd1\u6210\u529f\u7684\u8868\u73b0"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/aosp-notes-1643052800738-5972707bfd1a8d66b6af4a41d552c44762e2be2238914a4c6dc05d9ec990f911.png",alt:"picture 26"}),"  "),(0,o.kt)("h2",{id:"repo-steps"},"repo steps"),(0,o.kt)("h3",{id:"repo-detailed-steps"},"repo detailed steps"),(0,o.kt)("h4",{id:"step-1-download-repo"},"Step 1. download repo"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"sudo apt install repo\n")),(0,o.kt)("p",null,"ref:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://source.android.com/setup/develop#installing-repo"},"\u6e90\u4ee3\u7801\u63a7\u5236\u5de5\u5177 \xa0|\xa0 Android \u5f00\u6e90\u9879\u76ee \xa0|\xa0 Android Open Source Project"))),(0,o.kt)("h4",{id:"step-2-change-repo-mirror"},"Step 2. change repo mirror"),(0,o.kt)("blockquote",null,(0,o.kt)("ol",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ol"},"\u5982\u679c\u662f\u5728\u516c\u53f8\uff0c\u5219\u76f4\u63a5\u7528\u516c\u53f8\u7684\u7f51\u7edc\u5373\u53ef"),(0,o.kt)("li",{parentName:"ol"},"\u5982\u679c\u662f\u4e2a\u4eba\uff0c\u5219",(0,o.kt)("strong",{parentName:"li"},"\u5373\u4f7f\u6709vpn\uff0c\u4e5f\u8981\u7528\u955c\u50cf\uff0c\u56e0\u4e3a\u6d41\u91cf\u592a\u5927\u4e86\uff01"),"\u3002\u56e0\u6b64\u63a5\u4e0b\u6765\u8bf4\u8bf4\u955c\u50cf\u64cd\u4f5c"))),(0,o.kt)("p",null,"\u53c2\u8003\uff1a- ",(0,o.kt)("a",{parentName:"p",href:"https://mirrors.tuna.tsinghua.edu.cn/help/AOSP/"},"AOSP | \u955c\u50cf\u7ad9\u4f7f\u7528\u5e2e\u52a9 | \u6e05\u534e\u5927\u5b66\u5f00\u6e90\u8f6f\u4ef6\u955c\u50cf\u7ad9 | Tsinghua Open Source Mirror")," \u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u65b9\u6cd5\u5feb\u901f\u66f4\u6362\u955c\u50cf\u5730\u5740\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"git config --global url.https://mirrors.tuna.tsinghua.edu.cn/git/AOSP/.insteadof https://android.googlesource.com\n")),(0,o.kt)("p",null,"\u8fd9\u6761\u547d\u4ee4\uff0c\u5176\u5b9e\u4f1a\u4fee\u6539git\u7684\u5168\u5c40url\u5c5e\u6027\uff0c\u5177\u4f53\u6548\u679c\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'mark@ubuntu:/var/lib/dpkg/updates$ cat ~/.gitconfig \n[user]\n    name = XXX\n    email = XXX@gmail.com\n[url "https://mirrors.tuna.tsinghua.edu.cn/git/AOSP/"]\n    insteadof = https://android.googlesource.com\n')),(0,o.kt)("h4",{id:"step-3-change-python-version-used-via-repo"},"Step 3. change python version used via repo"),(0,o.kt)("p",null,"There are a lot of methods to let repo using python3, but the easiest way I learned is to modify the first line of ",(0,o.kt)("inlineCode",{parentName:"p"},"repo")," script file:\nchange ",(0,o.kt)("inlineCode",{parentName:"p"},"python")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"python3")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"vim $(which repo)\n")),(0,o.kt)("h4",{id:"step-4-repo-init"},"Step 4. ",(0,o.kt)("inlineCode",{parentName:"h4"},"repo init")),(0,o.kt)("p",null,"At here we can get diversified versions of aosp ",(0,o.kt)("a",{parentName:"p",href:"https://source.android.com/setup/start/build-numbers#source-code-tags-and-builds"},"\u4ee3\u53f7\u3001\u6807\u8bb0\u548c Build \u53f7 \xa0|\xa0 Android \u5f00\u6e90\u9879\u76ee \xa0|\xa0 Android Open Source Project"),", and we can know that the version is composed of: ",(0,o.kt)("inlineCode",{parentName:"p"},"android-{VERSION_NUMBER}-r{NUMBER}"),"."),(0,o.kt)("p",null,"So since I wanna to install the android 11, I can specify the version as ",(0,o.kt)("inlineCode",{parentName:"p"},"android-11.0.0-r1"),"."),(0,o.kt)("p",null,"And then download it via:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"cd {ANDROID}\nrepo init -u https://android.googlesource.com/platform/manifest -b {VERSION}\n")),(0,o.kt)("p",null,"ref:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://source.android.com/setup/build/downloading#initializing-a-repo-client"},"\u4e0b\u8f7d\u6e90\u4ee3\u7801 \xa0|\xa0 Android \u5f00\u6e90\u9879\u76ee \xa0|\xa0 Android Open Source Project"))),(0,o.kt)("h4",{id:"step-5-repo-sync"},"Step 5. ",(0,o.kt)("inlineCode",{parentName:"h4"},"repo sync")),(0,o.kt)("p",null,"Since ",(0,o.kt)("inlineCode",{parentName:"p"},"repo sync")," needs a lot of time, 1-10 hours or so, depending on the internet speed."),(0,o.kt)("p",null,"So:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"the internet connection, especialy vpn setup is necessary!"),(0,o.kt)("li",{parentName:"ol"},"the terminal time is recommended to set for time review.")),(0,o.kt)("h4",{id:"step-6-build-make"},"Step 6. build (make)"),(0,o.kt)("p",null,"\u770b\u6837\u5b50\uff0c\u5176\u5b9e\u8fd8\u662fCPU\u7528\u7684\u72e0\u4e00\u70b9\u3002"),(0,o.kt)("p",null,"\u4e0d\u8fc7\u5f53\u6211\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"m -j32"),"\u65f6\uff0c\u7a0b\u5e8f\u4f1a\u63d0\u793a\uff0c\u6700\u5c11\u898124G\u5185\u5b58\uff08\u6070\u597d\u6211\u670d\u52a1\u5668\u6b63\u597d\uff09\u3002",(0,o.kt)("del",{parentName:"p"},"\u4f46\u73b0\u5728\u6765\u770b\uff0c\u53ef\u80fd\u6709\u70b9\u5938\u5f20\u4e86\u3002")),(0,o.kt)("img",{alt:"picture 2",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/aosp-notes-1642413954133-6ab9f4f668db9ab420f0428e5c9f9dcdc7fe1a4cf8974861b2b5b0cce7c2b26d.png"}),"  P",(0,o.kt)("p",null,"Emm... \u8c8c\u4f3c\u3002\u3002\u4e0d\u5938\u5f20\uff01\u7528\u6ee1\u4e86\uff01"),(0,o.kt)("h3",{id:"repo-howto"},"repo howto"),(0,o.kt)("h4",{id:"how-to-get-the-revisiontag--version-number-of-repo"},"how to get the revision(tag / version number) of repo"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"grep revision .repo/manifests/default.xml\n")),(0,o.kt)("h4",{id:"how-to-downloadsync-specific-part-of-aosp"},"how to download/sync specific part of aosp"),(0,o.kt)("p",null,"ref:"),(0,o.kt)("p",null,"recommended:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/2130283/repo-sync-a-particular-folder"},"git - Repo Sync a particular folder - Stack Overflow"))),(0,o.kt)("p",null,"not recommended:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://blog.csdn.net/offbye/article/details/53002219"},"(23\u6761\u6d88\u606f) \u5982\u4f55\u4f7f\u7528repo\u4e0b\u8f7d\u90e8\u5206Android\u6e90\u7801\u5e76\u4fdd\u6301\u9879\u76ee\u7ed3\u6784_\u897f\u6d9boffbye-\u79fb\u52a8\u5168\u6808\u6280\u672f\u535a\u5ba2-CSDN\u535a\u5ba2"))),(0,o.kt)("p",null,"full/official download:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://source.android.com/setup/build/downloading"},"\u4e0b\u8f7d\u6e90\u4ee3\u7801 \xa0|\xa0 Android \u5f00\u6e90\u9879\u76ee \xa0|\xa0 Android Open Source Project"))),(0,o.kt)("h3",{id:"repo-bugfix"},"repo bugfix"),(0,o.kt)("h4",{id:"-error-unable-to-fully-sync-the-tree-error-downloading-network-changes-failed"},"\u2705 ",(0,o.kt)("inlineCode",{parentName:"h4"},"error: Unable to fully sync the tree. error: Downloading network changes failed.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"repo sync -j1 --fail-fast\n")),(0,o.kt)("p",null,"ref:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.jianshu.com/p/7971444b5359"},"Mac11.5 \u7f16\u8bd1Android\u6e90\u4ee3\u7801\u62a5\u9519\u6c47\u96c6 - \u7b80\u4e66"))),(0,o.kt)("h4",{id:"fixme-test-a-tls-packet-with-unexpected-length-was-received"},"FIXME: TEST ",(0,o.kt)("inlineCode",{parentName:"h4"},"A TLS packet with unexpected length was received.")),(0,o.kt)("p",null,"We can see the problem of it from the following image:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/aosp-notes-1642512998973-7a429cb3e3152b874f699178c53352a5c456aa8f530010ca0df58b16b9ddcecb.png",alt:"picture 7"}),"  "),(0,o.kt)("p",null,(0,o.kt)("del",{parentName:"p"},"It's quite likely that the tls packet size exceeds the default capacity of git.")),(0,o.kt)("p",null,"If so, the solution becomes clear, that is to increase the limitation."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"git config --global http.postBuffer 1048576000\n")),(0,o.kt)("p",null,"Update: however, it's not."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/aosp-notes-1642515812043-f1207f2431e7ca6e7a9fbb48e75924fbf6a68c31f83a697b642425fdf9e2cee6.png",alt:"picture 8"}),"  "),(0,o.kt)("p",null,"Maybe, we need other solutions."),(0,o.kt)("p",null,"A possible one maybe to disable ssl verification:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"git config --global http.sslVerify false\n")),(0,o.kt)("h4",{id:"fixme-the-remote-end-hung-up-unexpectedly"},"FIXME: ",(0,o.kt)("inlineCode",{parentName:"h4"},"The remote end hung up unexpectedly")),(0,o.kt)("p",null,"ref:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"\u8bbe\u7f6egit\u6700\u4f4e\u901f\u5ea6\n$ git config --global http.lowSpeedLimit 0\n$ git config --global http.lowSpeedTime 999999\n\u8bbe\u7f6ehttp\u7f13\u5b58\n$ git config --global http.postBuffer 1048576000\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://codeantenna.com/a/H67hswkvrF"},"ubuntu\u4e2dgit clone\u5b89\u5353\u5185\u6838\u65f6\u62a5fatal: The remote end hung up unexpectedly\u9519\u8bef\u7684\u5904\u7406 - CodeAntenna"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/15240815/git-fatal-the-remote-end-hung-up-unexpectedly"},"github - Git, fatal: The remote end hung up unexpectedly - Stack Overflow"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://blog.csdn.net/u013250071/article/details/81203900"},"Git\uff1a\u89e3\u51b3\u62a5\u9519\uff1afatal: The remote end hung up unexpectedly_JiangDong\u7684\u535a\u5ba2-CSDN\u535a\u5ba2")))),(0,o.kt)("h3",{id:"-prior-sync-failed-rebase-still-in-progress"},"\u2705 ",(0,o.kt)("inlineCode",{parentName:"h3"},"prior sync failed; rebase still in progress")),(0,o.kt)("p",null,"resolution:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"git rebase --abort\n")),(0,o.kt)("p",null,"ref:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://ichrisking.github.io/2017/12/04/how-to-fix-rebase-still-in-progress/"},"\u5982\u4f55\u89e3\u51b3\u62a5\u9519\u201cprior sync failed; rebase still in progress\u201d | IChrisKing"))),(0,o.kt)("h2",{id:"discussion"},"discussion"),(0,o.kt)("h3",{id:"why-not-support-macos"},"why not support macos"),(0,o.kt)("p",null,"ref:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.v2ex.com/t/778988"},"\u81ea 2021 \u5e74 6 \u6708 22 \u65e5\u5f00\u59cb\uff0c\u65b0\u7248 Android \u5c06\u4e0d\u518d\u652f\u6301\u5728 MacOS \u6216 Windows \u4e0a\u6784\u5efa - V2EX"))))}u.isMDXComponent=!0}}]);