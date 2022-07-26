"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3038],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(a),d=o,k=u["".concat(p,".").concat(d)]||u[d]||m[d]||r;return a?n.createElement(k,i(i({ref:t},c),{},{components:a})):n.createElement(k,i({ref:t},c))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},31163:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var n=a(87462),o=(a(67294),a(3905));const r={date:"2022/07/23"},i="ios\u4e0emac ssh\u901a\u4fe1\u6280\u672f",l={unversionedId:"notes/ios-ssh",id:"version-0.16.0/notes/ios-ssh",title:"ios\u4e0emac ssh\u901a\u4fe1\u6280\u672f",description:"AppleScript Relative",source:"@site/versioned_docs/version-0.16.0/notes/ios-ssh.md",sourceDirName:"notes",slug:"/notes/ios-ssh",permalink:"/docusaurus/docs/0.16.0/notes/ios-ssh",draft:!1,editUrl:"https://github.com/markshawn2020/docusaurus/edit/master/docs/notes/ios-ssh.md",tags:[],version:"0.16.0",lastUpdatedAt:1658816369,formattedLastUpdatedAt:"2022\u5e747\u670826\u65e5",frontMatter:{date:"2022/07/23"},sidebar:"docs",previous:{title:"\u8bb0\u5feb\u901f\u5e2e\u52a9zkj\u89e3\u7b54flask\u76f8\u5173\u4f7f\u7528\u95ee\u9898",permalink:"/docusaurus/docs/0.16.0/notes/finished-but-not-uploaded/mark_assist-zkj-flask-route_record"},next:{title:"\u5317\u4eac\u5065\u5eb7\u5b9dforge",permalink:"/docusaurus/docs/0.16.0/notes/jkb_bj_forge-howto"}},p={},s=[{value:"AppleScript Relative",id:"applescript-relative",level:2},{value:"\u53d1\u9001\u6309\u952e\u4e8b\u4ef6",id:"\u53d1\u9001\u6309\u952e\u4e8b\u4ef6",level:3},{value:"XCode Relative",id:"xcode-relative",level:2},{value:"\u9488\u5bf9 Simulator \u548c Device \u4f7f\u7528\u4e0d\u540c\u7684 framework \u5206\u522b\u7f16\u8bd1",id:"\u9488\u5bf9-simulator-\u548c-device-\u4f7f\u7528\u4e0d\u540c\u7684-framework-\u5206\u522b\u7f16\u8bd1",level:3},{value:"\u5728XCode\u4e2d\u91cd\u547d\u540d\u4e00\u4e2a\u53d8\u91cf",id:"\u5728xcode\u4e2d\u91cd\u547d\u540d\u4e00\u4e2a\u53d8\u91cf",level:3},{value:"<code>NMSSH</code> relative",id:"nmssh-relative",level:2},{value:"\u5728Xcode\u4e2d\u914d\u7f6e<code>NMSSH</code>",id:"\u5728xcode\u4e2d\u914d\u7f6enmssh",level:3},{value:"\u5728 <code>swift</code> \u4e2d\u4f7f\u7528 <code>objective-c</code>\uff0c\u4ece\u800c\u8c03\u7528<code>NMSSH</code>",id:"\u5728-swift-\u4e2d\u4f7f\u7528-objective-c\u4ece\u800c\u8c03\u7528nmssh",level:3},{value:"\u57fa\u4e8e<code>NMSSH</code>\u6267\u884cmac\u547d\u4ee4",id:"\u57fa\u4e8enmssh\u6267\u884cmac\u547d\u4ee4",level:3},{value:"Swift Relative",id:"swift-relative",level:2},{value:"SwiftUI relative",id:"swiftui-relative",level:2},{value:"change background color",id:"change-background-color",level:3},{value:"fixed: button only respond to text part",id:"fixed-button-only-respond-to-text-part",level:3},{value:"Objevtive-C relative",id:"objevtive-c-relative",level:2},{value:"obejctive-C function (especially multi args)",id:"obejctive-c-function-especially-multi-args",level:3},{value:"<code>NSString</code> relative",id:"nsstring-relative",level:3},{value:"\u5728 <code>objective-c</code> \u4e2d\u5408\u5e76\u5b57\u7b26\u4e32",id:"\u5728-objective-c-\u4e2d\u5408\u5e76\u5b57\u7b26\u4e32",level:3}],c={toc:s};function m(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ios\u4e0emac-ssh\u901a\u4fe1\u6280\u672f"},"ios\u4e0emac ssh\u901a\u4fe1\u6280\u672f"),(0,o.kt)("h2",{id:"applescript-relative"},"AppleScript Relative"),(0,o.kt)("h3",{id:"\u53d1\u9001\u6309\u952e\u4e8b\u4ef6"},"\u53d1\u9001\u6309\u952e\u4e8b\u4ef6"),(0,o.kt)("p",null,"\u6839\u636e\u8fd9\u7bc7\u6838\u5fc3\u53c2\u8003\uff08\u63a8\u8350\uff09\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://eastmanreference.com/complete-list-of-applescript-key-codes"},"Complete list of AppleScript key codes"),"\uff0c\u6211\u4eec\u77e5\u9053\u7bad\u5934\u952e\u662f\u4e0d\u652f\u6301\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"keystroke"),"\u800c\u53ea\u80fd\u4f7f\u7528\u6309\u952e\u7801\u7684\u3002"),(0,o.kt)("p",null,"\u4e00\u4e9bsample\u5982\u4e0b\uff1a(ref: ",(0,o.kt)("a",{parentName:"p",href:"https://apple.stackexchange.com/a/314650"},"https://apple.stackexchange.com/a/314650"),"):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-osascript"},'tell application "System Events"       \n    key code 124 using {shift down, command down} --\x3e Right arrow\n    key code 8 using command down --\x3e \u2318-C\n    key code {4, 14, 37, 37, 31, 47} --\x3e H, e, l, l, o, .\n\n    keystroke "v" using command down --\x3e \u2318-V\n    keystroke "Hello." --\x3e H, e, l, l, o, .\nend tell\n')),(0,o.kt)("p",null,"ref:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://apple.stackexchange.com/questions/314647/applescript-command-sendkeys"},"macos - AppleScript Command Sendkeys? - Ask Different"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://apple.stackexchange.com/questions/36943/how-do-i-automate-a-key-press-in-applescript"},"macos - How do I automate a key press in AppleScript? - Ask Different")))),(0,o.kt)("h2",{id:"xcode-relative"},"XCode Relative"),(0,o.kt)("h3",{id:"\u9488\u5bf9-simulator-\u548c-device-\u4f7f\u7528\u4e0d\u540c\u7684-framework-\u5206\u522b\u7f16\u8bd1"},"\u9488\u5bf9 Simulator \u548c Device \u4f7f\u7528\u4e0d\u540c\u7684 framework \u5206\u522b\u7f16\u8bd1"),(0,o.kt)("p",null,"\u641c\u4e86\u4e00\u4e0b\uff0c\u6709\u4e0d\u5c11\u65b9\u6cd5\uff0c\u4f46\u90fd\u6bd4\u8f83\u590d\u6742\uff0c\u6bd4\u5982 ",(0,o.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/48785934/ios-how-to-add-different-frameworks-for-device-and-simulator-in-the-same-code-x"},"iphone - iOS: How to add different frameworks for device and simulator in the same code xcode swift? - Stack Overflow")," \u4e2d\u7ed9\u4e86\u4e00\u4e2a\u8c37\u6b4c\u7684\u811a\u672c\u2026\u2026"),(0,o.kt)("p",null,"\u5176\u4ed6\u7b54\u6848\u8fd8\u6709\uff1a ",(0,o.kt)("a",{parentName:"p",href:"https://developer.apple.com/forums/thread/86759"},"Using separate device and simulato\u2026 | Apple Developer Forums")),(0,o.kt)("p",null,"\u6700\u7b80\u5355\u7684\u529e\u6cd5\u8fd8\u662f\u5c06target\u590d\u5236\u4e00\u4efd\uff0c\u7136\u540e\u5206\u522b\u8bbe\u7f6e\u6bcf\u4e2atarget\u6240\u9700\u7684\u4e0d\u540c\u7684framework\uff0c\u8fd9\u4e2a\u529e\u6cd5\u6700\u597d\u5728\u6211\u4eec\u5bfc\u5165framework\u4e4b\u65f6\u5c31\u5148\u5206\u914d\u597d\u3002"),(0,o.kt)("p",null,"\u591a\u8bf4\u4e00\u53e5\uff0c\u8fd9\u79cd\u590d\u5236\u7684\u529e\u6cd5\uff0c\u6211\u53d1\u73b0\u6ca1\u6cd5\u5355\u72ec\u6307\u5b9adestination\uff0c\u597d\u50cf\u6307\u5b9a\u4e86\u4e00\u4e2a\u540e\uff0c\u53e6\u4e00\u4e2atarget\u4e5f\u4f1a\u8ddf\u7740\u53d8\u2026\u2026\u771f\u5730annoying\u2026\u2026"),(0,o.kt)("h3",{id:"\u5728xcode\u4e2d\u91cd\u547d\u540d\u4e00\u4e2a\u53d8\u91cf"},"\u5728XCode\u4e2d\u91cd\u547d\u540d\u4e00\u4e2a\u53d8\u91cf"),(0,o.kt)("p",null,"\u65b9\u6cd51\uff1a\u5feb\u6377\u952e",(0,o.kt)("inlineCode",{parentName:"p"},"Command + control + E"),"\u3002"),(0,o.kt)("p",null,"\u65b9\u6cd52\uff1a\u9009\u4e2d\u53d8\u91cf\u540e\uff0c\u53f3\u952e",(0,o.kt)("inlineCode",{parentName:"p"},"Refactor"),"\u91cc\u9762\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"Rename"),"\uff0c\u8fd9\u4e2a\u633a\u597d\u7684\uff0c\u8ddfjetbrains\u64cd\u4f5c\u4e60\u60ef\u5dee\u4e0d\u591a\u3002"),(0,o.kt)("p",null,"ref:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/23865830/variable-name-changing-in-whole-program"},"ios - variable name changing in whole program - Stack Overflow"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://developer.apple.com/documentation/xcode/finding-and-refactoring-code"},"Finding and Refactoring Code | Apple Developer Documentation")))),(0,o.kt)("h2",{id:"nmssh-relative"},(0,o.kt)("inlineCode",{parentName:"h2"},"NMSSH")," relative"),(0,o.kt)("h3",{id:"\u5728xcode\u4e2d\u914d\u7f6enmssh"},"\u5728Xcode\u4e2d\u914d\u7f6e",(0,o.kt)("inlineCode",{parentName:"h3"},"NMSSH")),(0,o.kt)("p",null,"\u6838\u5fc3\u53c2\u8003\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/NMSSH/NMSSH/wiki/Build-and-use-in-your-iOS-project"},"Build and use in your iOS project \xb7 NMSSH/NMSSH Wiki"))),(0,o.kt)("p",null,"\u6838\u5fc3\u8981\u9886:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u57fa\u4e8e",(0,o.kt)("inlineCode",{parentName:"li"},"NMSSH-iOS.xcodeproj"),"\u7f16\u8bd1\u65f6\u9700\u8981\u8bbe\u7f6e\u597d",(0,o.kt)("inlineCode",{parentName:"li"},"Destinition"),"\uff0csimulator \u548c real device\u9700\u8981\u5206\u522b\u7f16\u8bd1"),(0,o.kt)("li",{parentName:"ol"},"\u7f16\u8bd1\u5b8c\u6210\u540e\uff0c\u8981\u901a\u8fc7",(0,o.kt)("inlineCode",{parentName:"li"},"show build folder"),"\u5b9a\u4f4d\u5230product-framework\u6240\u5728\u6587\u4ef6\u5939\uff0c\u5e76\u4e00\u5c42\u5c42\u5f80\u4e0b\u627e\u5230framework\u6587\u4ef6"),(0,o.kt)("li",{parentName:"ol"},"\u5c06framework\u5bfc\u5165\u81ea\u5df1\u7684xcodeproject\u7684\u65f6\u5019\uff0c\u53ef\u4ee5\u4e0d\u7528\u5411\u5b98\u7f51\u4e00\u6837\u53bb\u4fee\u6539",(0,o.kt)("inlineCode",{parentName:"li"},"build phase"),"\uff0c\u56e0\u4e3a\u53ef\u4ee5\u5728\u5bfc\u5165\u65f6\u5f39\u7a97\u9009\u62e9\uff0c\u4f46\u662f\u4e00\u5b9a\u8981\u9009\u4e2d",(0,o.kt)("inlineCode",{parentName:"li"},"copy"),"\u9009\u9879\uff0c\u5426\u5219\u7f16\u8bd1\u65f6\u5c06\u627e\u4e0d\u5230framework"),(0,o.kt)("li",{parentName:"ol"},"\u5f39\u7a97\u9009\u5b8c\u4e4b\u540e\uff0c\u8fd8\u8981\u5728target\u9875\u9762\uff0c\u628aframework emble\u8fdb\u5de5\u7a0b\uff0c\u5426\u5219\u4e5f\u4f1a\u627e\u4e0d\u5230\u3002target\u4e3asimulator\u65f6\u53ea\u9700\u8981\u9009\u975e\u7b7e\u540demble\u5373\u53ef\uff0c\u771f\u673a\u8fd0\u884c\u5fc5\u987b\u8981\u7b7e\u540d\uff0c\u7b7e\u540d\u65b9\u6cd5\u4e4b\u524d\u81ea\u52a8\u5316\u65f6\u5df2\u7814\u7a76\u8fc7\uff0c\u6b64\u5904\u4f1a\u8bb0\u5f55\u4e4b\u524d\u7684\u7b7e\u540d\u4fe1\u606f\uff0c\u5373\u201d\u5ddd\u5357\u201c\u3002")),(0,o.kt)("p",null,"\u5982\u679c\u6ca1\u6709\u914d\u7f6e\u597d\u7684\u8bdd\uff0c\u4e00\u822c\u4f1a\u51fa\u73b0\u5404\u79cd\u627e\u4e0d\u5230\u7684\u95ee\u9898\uff0c\u4f8b\u5982\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/NMSSH/NMSSH/issues/28"},"Undefined symbols for architecture i386: \xb7 Issue #28 \xb7 NMSSH/NMSSH"))),(0,o.kt)("h3",{id:"\u5728-swift-\u4e2d\u4f7f\u7528-objective-c\u4ece\u800c\u8c03\u7528nmssh"},"\u5728 ",(0,o.kt)("inlineCode",{parentName:"h3"},"swift")," \u4e2d\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"h3"},"objective-c"),"\uff0c\u4ece\u800c\u8c03\u7528",(0,o.kt)("inlineCode",{parentName:"h3"},"NMSSH")),(0,o.kt)("p",null,"\u57fa\u4e8e ",(0,o.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/26110980/how-to-use-nmssh-in-swift"},"ios - How to use NMSSH in swift - Stack Overflow")," \u8fd9\u4e2a\u5e16\u5b50\u6211\u4eec\u77e5\u9053\uff0c\u6211\u4eec\u9700\u8981\u9996\u5148\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"swift"),"\u5de5\u7a0b\u4e2d\u5efa\u7acb ",(0,o.kt)("inlineCode",{parentName:"p"},"objective-c"),"\u6865\uff0c\u65b9\u6cd5\u53c2\u8003\uff1a ",(0,o.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/24002369/how-do-i-call-objective-c-code-from-swift"},"How do I call Objective-C code from Swift? - Stack Overflow"),"\uff0c\u4e3b\u8981\u57fa\u4e8e\u91cc\u9762\u7684\u8fd9\u4e2a\u7b54\u6848\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://stackoverflow.com/a/24005242/9422455"},"https://stackoverflow.com/a/24005242/9422455")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/ios-ssh-1655142628111-d2fd273cce2536145a7cfe322fbfe280673e52776e616b6b3b967eceec1fa4fa.png",alt:"picture 19"}),"  "),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/ios-ssh-1655142646923-195f1368d259f5f6735f363b234d52f809696e612dee1c8f29b73c5a6347837c.png",alt:"picture 20"}),"  "),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/ios-ssh-1655142671067-50e01e541764eeb440f5b8a921fdd1006680e9863d97117b9413ab866c0e9831.png",alt:"picture 21"}),"  "),(0,o.kt)("p",null,"\u6839\u636e\u4e0a\u9762\u7684\u6b65\u9aa4\u5148\u5b8c\u6210\u57fa\u7840\u642d\u5efa\u540e\uff0c\u518d\u6839\u636e ",(0,o.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/26110980/how-to-use-nmssh-in-swift"},"ios - How to use NMSSH in swift - Stack Overflow")," \u628a",(0,o.kt)("inlineCode",{parentName:"p"},"NMSSH"),"\u7684\u8c03\u7528\u65b9\u6cd5\u6309\u846b\u82a6\u753b\u74e2\u88c5\u8fdb\u53bb\u3002"),(0,o.kt)("h3",{id:"\u57fa\u4e8enmssh\u6267\u884cmac\u547d\u4ee4"},"\u57fa\u4e8e",(0,o.kt)("inlineCode",{parentName:"h3"},"NMSSH"),"\u6267\u884cmac\u547d\u4ee4"),(0,o.kt)("p",null,"\u53c2\u8003\uff1a ",(0,o.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/31336795/nmssh-for-ios-listening-and-parsing-data-from-a-channel"},"ssh - NMSSH for iOS - listening and parsing data from a channel - Stack Overflow")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-objective-c"},'NSError *error = nil;\nNSString *response = [session.channel execute:@"ls -l /var/www/" error:&error];\nNSLog(@"List of my sites: %@", response);\n')),(0,o.kt)("h2",{id:"swift-relative"},"Swift Relative"),(0,o.kt)("p",null,"ref:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Swift\u5b98\u65b9\u6559\u7a0b\uff08Apple\uff09\uff1a",(0,o.kt)("a",{parentName:"li",href:"https://developer.apple.com/documentation/swift#2984801"},"Swift | Apple Developer Documentation"))),(0,o.kt)("h2",{id:"swiftui-relative"},"SwiftUI relative"),(0,o.kt)("p",null,"ref:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"SwiftUI\u5b98\u65b9\u6559\u7a0b\uff08Apple\uff09\uff1a",(0,o.kt)("a",{parentName:"li",href:"https://developer.apple.com/tutorials/swiftui/creating-and-combining-views"},"Creating and Combining Views \u2014 SwiftUI Tutorials | Apple Developer Documentation"))),(0,o.kt)("h3",{id:"change-background-color"},"change background color"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},'    Text("Hello, World!")\n        .padding()\n        .foregroundColor(.red)\n        .background(Color.yellow)\n        .background(Color(red: 0.03, green: 0.03, blue: 0.03))\n')),(0,o.kt)("p",null,"ref:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://troz.net/post/2020/swiftui-color/"},"SwiftUI Color :: TrozWare"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/56610253/how-can-i-change-background-color-of-button-in-swiftui"},"How can I change background color of button in SwiftUI? - Stack Overflow")))),(0,o.kt)("h3",{id:"fixed-button-only-respond-to-text-part"},"fixed: button only respond to text part"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},'Button(action: {\n    //code\n}) {\n    Text("Click Me")\n    .frame(minWidth: 100, maxWidth: .infinity, minHeight: 44, maxHeight: 44, alignment: .center)\n    .foregroundColor(Color.white)\n    .background(Color.accentColor)\n    .cornerRadius(7)\n}\n')),(0,o.kt)("p",null,"ref:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/57333573/swiftui-button-tap-only-on-text-portion"},"SwiftUI Button tap only on text portion - Stack Overflow"))),(0,o.kt)("h2",{id:"objevtive-c-relative"},"Objevtive-C relative"),(0,o.kt)("h3",{id:"obejctive-c-function-especially-multi-args"},"obejctive-C function (especially multi args)"),(0,o.kt)("p",null,"ref:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.tutorialspoint.com/objective_c/objective_c_functions.htm"},"Objective-C Functions"))),(0,o.kt)("p",null,"\u5173\u4e8e\u4e0d\u7406\u89e3 ",(0,o.kt)("inlineCode",{parentName:"p"},"objective-c")," \u4e2d\u51fd\u6570\u591a\u53c2\u6570\u65f6\u9700\u8981\u547d\u540d\u7684\u8ba8\u8bba\uff0c\u5f88\u6709\u610f\u601d\uff1a- ",(0,o.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/3026432/dont-understand-multiple-parameter-declarations-in-objective-c"},"Don't understand multiple parameter declarations in objective-c - Stack Overflow")),(0,o.kt)("h3",{id:"nsstring-relative"},(0,o.kt)("inlineCode",{parentName:"h3"},"NSString")," relative"),(0,o.kt)("p",null,"ref:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://eezytutorials.com/ios/nsstring-by-example.php#.YqeALRO-uDV"},"NSString by example"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/7906948/name-for-d-in-an-nsstring"},"objective c - Name for %@ %d in an NSString - Stack Overflow"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Strings/Articles/formatSpecifiers.html"},"String Format Specifiers")))),(0,o.kt)("h3",{id:"\u5728-objective-c-\u4e2d\u5408\u5e76\u5b57\u7b26\u4e32"},"\u5728 ",(0,o.kt)("inlineCode",{parentName:"h3"},"objective-c")," \u4e2d\u5408\u5e76\u5b57\u7b26\u4e32"),(0,o.kt)("p",null,"\u6211\u6700\u7ec8\u4f7f\u7528\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},"NSMutableString"),"\uff0c\u7136\u540e\u4f7f\u7528\u5176",(0,o.kt)("inlineCode",{parentName:"p"},"appendString"),"\u6216\u8005",(0,o.kt)("inlineCode",{parentName:"p"},"appendFormat"),"\u65b9\u6cd5\uff0c\u7528\u8d77\u6765\u8fd8\u7b97\u987a\u624b\u3002"),(0,o.kt)("p",null,"ref:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://www.jianshu.com/p/4202259c654e"},"iOS NSString\u548cNSMutableString - \u7b80\u4e66"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/510269/shortcuts-in-objective-c-to-concatenate-nsstrings"},"Shortcuts in Objective-C to concatenate NSStrings - Stack Overflow"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/5893793/how-to-append-int-value-to-string"},"iphone - How to append int value to string? - Stack Overflow"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/12153051/converting-int-into-nsstring"},"iphone - Converting int into NSString - Stack Overflow"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/7070046/append-string-with-variable"},"objective c - Append string with variable - Stack Overflow"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/9180671/how-to-append-a-string-to-nsmutablestring"},"ios - How to append a string to NSMutableString - Stack Overflow")))))}m.isMDXComponent=!0}}]);