"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8489],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>c});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),m=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=m(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),s=m(a),c=n,k=s["".concat(p,".").concat(c)]||s[c]||u[c]||o;return a?r.createElement(k,l(l({ref:t},d),{},{components:a})):r.createElement(k,l({ref:t},d))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=s;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var m=2;m<o;m++)l[m]=a[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}s.displayName="MDXCreateElement"},68876:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>c,default:()=>g,frontMatter:()=>s,metadata:()=>k,toc:()=>f});var r=a(3905),n=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,d=(e,t,a)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,u=(e,t)=>{for(var a in t||(t={}))p.call(t,a)&&d(e,a,t[a]);if(i)for(var a of i(t))m.call(t,a)&&d(e,a,t[a]);return e};const s={},c="emulator howto",k={unversionedId:"AndroidFramework/depreciated/TaskA6-emulator/emulator-howto",id:"version-0.16.0/AndroidFramework/depreciated/TaskA6-emulator/emulator-howto",title:"emulator howto",description:"1. prepare 1. emulator",source:"@site/versioned_docs/version-0.16.0/AndroidFramework/depreciated/TaskA6-emulator/emulator-howto.md",sourceDirName:"AndroidFramework/depreciated/TaskA6-emulator",slug:"/AndroidFramework/depreciated/TaskA6-emulator/emulator-howto",permalink:"/keeps-learning/docs/0.16.0/AndroidFramework/depreciated/TaskA6-emulator/emulator-howto",draft:!1,editUrl:"https://github.com/markshawn2020/keeps-learning/edit/master/docs/AndroidFramework/depreciated/TaskA6-emulator/emulator-howto.md",tags:[],version:"0.16.0",lastUpdatedAt:1658910797,formattedLastUpdatedAt:"2022\u5e747\u670827\u65e5",frontMatter:{},sidebar:"docs",previous:{title:"arpara vr logic",permalink:"/keeps-learning/docs/0.16.0/AndroidFramework/arpara-vr-logic"},next:{title:"depreciated surfaceflinger patch research",permalink:"/keeps-learning/docs/0.16.0/AndroidFramework/depreciated/depreciated-surfaceflinger-patch-research"}},h={},f=[{value:"prepare 1. <code>emulator</code>",id:"prepare-1-emulator",level:2},{value:"general steps",id:"general-steps",level:3},{value:"extent steps",id:"extent-steps",level:3},{value:"prepare 2. <code>kvm</code>",id:"prepare-2-kvm",level:2},{value:"how to check <code>kvm</code>",id:"how-to-check-kvm",level:3},{value:"how to enable <code>kvm</code>",id:"how-to-enable-kvm",level:3},{value:"config emulator",id:"config-emulator",level:2},{value:"how to know emulator config path ?",id:"how-to-know-emulator-config-path-",level:3},{value:"adjust vm heap size",id:"adjust-vm-heap-size",level:3}],v={toc:f};function g(e){var t,a=e,{components:n}=a,d=((e,t)=>{var a={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&m.call(e,r)&&(a[r]=e[r]);return a})(a,["components"]);return(0,r.kt)("wrapper",(t=u(u({},v),d),o(t,l({components:n,mdxType:"MDXLayout"}))),(0,r.kt)("h1",u({},{id:"emulator-howto"}),"emulator howto"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",u({parentName:"li"},{href:"#prepare-1-emulator"}),"prepare 1. ",(0,r.kt)("inlineCode",{parentName:"a"},"emulator")),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",u({parentName:"li"},{href:"#general-steps"}),"general steps")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",u({parentName:"li"},{href:"#extent-steps"}),"extent steps")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",u({parentName:"li"},{href:"#prepare-2-kvm"}),"prepare 2. ",(0,r.kt)("inlineCode",{parentName:"a"},"kvm")),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",u({parentName:"li"},{href:"#how-to-check-kvm"}),"how to check ",(0,r.kt)("inlineCode",{parentName:"a"},"kvm"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",u({parentName:"li"},{href:"#how-to-enable-kvm"}),"how to enable ",(0,r.kt)("inlineCode",{parentName:"a"},"kvm"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",u({parentName:"li"},{href:"#config-emulator"}),"config emulator"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",u({parentName:"li"},{href:"#how-to-know-emulator-config-path-"}),"how to know emulator config path ?")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",u({parentName:"li"},{href:"#adjust-vm-heap-size"}),"adjust vm heap size"))))),(0,r.kt)("h2",u({},{id:"prepare-1-emulator"}),"prepare 1. ",(0,r.kt)("inlineCode",{parentName:"h2"},"emulator")),(0,r.kt)("h3",u({},{id:"general-steps"}),"general steps"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"download AOSP source code"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"source build/envsetup.sh && lunch XXX")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"make")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"m")," to build product"),(0,r.kt)("li",{parentName:"ol"},"then the ",(0,r.kt)("inlineCode",{parentName:"li"},"emulator")," command may work")),(0,r.kt)("h3",u({},{id:"extent-steps"}),"extent steps"),(0,r.kt)("p",null,"If restarted terminal, then the commands enabled via step 2 in ",(0,r.kt)("a",u({parentName:"p"},{href:"#general-steps"}),"general steps")," may turn to be invalid."),(0,r.kt)("p",null,"Then there are two approaches."),(0,r.kt)("p",null,"The first one is to re-run step 2. (but not step 3/4 need)"),(0,r.kt)("p",null,"And the second one is to directly use the full commands."),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-sh"}),"\u279c  generic_x86_64 git:(74a2364e7f) \u2717 which emulator\n/home/mark/work@luci/android/android-10.0.0_r1/prebuilts/android-emulator/linux-x86_64/emulator\n")),(0,r.kt)("p",null,"We can know the real ",(0,r.kt)("inlineCode",{parentName:"p"},"emulator")," path is at ",(0,r.kt)("inlineCode",{parentName:"p"},"prebuilts/android-emulator/linux-x86_64/emulator"),", since we just built a ",(0,r.kt)("inlineCode",{parentName:"p"},"aosp_x86_64-eng")," product. If you didn't build this one, the path would be a slight difference."),(0,r.kt)("p",null,"So you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"cd prebuilts/android-emulator/linux-x86_64/emulator && ./emulator")," to start the emulator."),(0,r.kt)("h2",u({},{id:"prepare-2-kvm"}),"prepare 2. ",(0,r.kt)("inlineCode",{parentName:"h2"},"kvm")),(0,r.kt)("h3",u({},{id:"how-to-check-kvm"}),"how to check ",(0,r.kt)("inlineCode",{parentName:"h3"},"kvm")),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-sh"}),"egrep -c '(vmx|svm)' /proc/cpuinfo\n")),(0,r.kt)("p",null,"ref:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://blog.csdn.net/pcsxk/article/details/52016739"}),"(23\u6761\u6d88\u606f) Android\u6e90\u4ee3\u7801\u7f16\u8bd1\u5b8c\u6210\u4e4b\u540e\u8fd0\u884c\u6a21\u62df\u5668_pcsxk\u7684\u4e13\u680f-CSDN\u535a\u5ba2_android \u6e90\u7801\u7f16\u8bd1\u540e\u542f\u52a8\u6a21\u62df\u5668"))),(0,r.kt)("h3",u({},{id:"how-to-enable-kvm"}),"how to enable ",(0,r.kt)("inlineCode",{parentName:"h3"},"kvm")),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-sh"}),"# install and enable kvm\nsudo apt install qemu-kvm\nsudo adduser $USER kvm\nsudo chown $USER /dev/kvm\n\nsudo pkill -u $USER # re-login to make it work\n")),(0,r.kt)("p",null,"ref:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://stackoverflow.com/questions/37300811/android-studio-dev-kvm-device-permission-denied"}),"64 bit - Android Studio: /dev/kvm device permission denied - Stack Overflow"))),(0,r.kt)("h2",u({},{id:"config-emulator"}),"config emulator"),(0,r.kt)("h3",u({},{id:"how-to-know-emulator-config-path-"}),"how to know emulator config path ?"),(0,r.kt)("p",null,"The easiest way is to use ",(0,r.kt)("inlineCode",{parentName:"p"},"emulator -verbose")," to have a look at what the config files are."),(0,r.kt)("p",null,"For example:"),(0,r.kt)("p",null,(0,r.kt)("img",u({parentName:"p"},{src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/emulator-howto-1643522738572-e8309510cbafd8b3252714a6406e5d3b02fdce3b4d7609684638479371a408e0.png",alt:"picture 4"})),"  "),(0,r.kt)("p",null,"Maybe you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"emulator -verbose | grep ini")," to see exactly those config files."),(0,r.kt)("h3",u({},{id:"adjust-vm-heap-size"}),"adjust vm heap size"),(0,r.kt)("p",null,"The default vm heap size is zero."),(0,r.kt)("p",null,"And you can have a check via:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-sh"}),"\u279c  android-10.0.0_r1 git:(74a2364e7f) \u2717 ge=out/target/product/generic_x86_64 \n\u279c  android-10.0.0_r1 git:(74a2364e7f) \u2717 grep heap $ge/config.ini \nvm.heapSize=192\n\u279c  android-10.0.0_r1 git:(74a2364e7f) \u2717 grep heap $ge/hardware-qemu.ini \nvm.heapSize = 192\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"vm.heapSize=192")," is set manually by myself in the ",(0,r.kt)("inlineCode",{parentName:"p"},"config.ini")," and the second one in ",(0,r.kt)("inlineCode",{parentName:"p"},"hardware-qemu.ini")," is the default."),(0,r.kt)("p",null,"After adding/change the default ",(0,r.kt)("inlineCode",{parentName:"p"},"vm.heapSize")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"config.ini")," according to the ",(0,r.kt)("inlineCode",{parentName:"p"},"hardware-qemu.ini"),", the the ",(0,r.kt)("inlineCode",{parentName:"p"},"emulator")," error relative to ",(0,r.kt)("inlineCode",{parentName:"p"},"heapSize")," may have gone."),(0,r.kt)("p",null,(0,r.kt)("img",u({parentName:"p"},{src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/emulator-howto-1643522823918-edcb7eb474ff65c0ef00fda233ad8c9600dfd11166ce5d4639964c8ec82965cb.png",alt:"picture 5"}))))}g.isMDXComponent=!0}}]);