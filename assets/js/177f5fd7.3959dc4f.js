"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9624],{3905:(e,a,t)=>{t.d(a,{Zo:()=>d,kt:()=>k});var l=t(67294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);a&&(l=l.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,l)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,l,n=function(e,a){if(null==e)return{};var t,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)t=r[l],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)t=r[l],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=l.createContext({}),p=function(e){var a=l.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},d=function(e){var a=p(e.components);return l.createElement(s.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return l.createElement(l.Fragment,{},a)}},m=l.forwardRef((function(e,a){var t=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=p(t),k=n,u=m["".concat(s,".").concat(k)]||m[k]||c[k]||r;return t?l.createElement(u,i(i({ref:a},d),{},{components:t})):l.createElement(u,i({ref:a},d))}));function k(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var r=t.length,i=new Array(r);i[0]=m;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var p=2;p<r;p++)i[p]=t[p];return l.createElement.apply(null,i)}return l.createElement.apply(null,t)}m.displayName="MDXCreateElement"},26795:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var l=t(87462),n=(t(67294),t(3905));const r={},i="adb howto",o={unversionedId:"AndroidFramework/adb-howto",id:"version-0.16.0/AndroidFramework/adb-howto",title:"adb howto",description:"1. overview",source:"@site/versioned_docs/version-0.16.0/AndroidFramework/adb-howto.md",sourceDirName:"AndroidFramework",slug:"/AndroidFramework/adb-howto",permalink:"/docusaurus/docs/0.16.0/AndroidFramework/adb-howto",draft:!1,editUrl:"https://github.com/markshawn2020/docusaurus/edit/master/docs/AndroidFramework/adb-howto.md",tags:[],version:"0.16.0",lastUpdatedAt:1658816369,formattedLastUpdatedAt:"2022\u5e747\u670826\u65e5",frontMatter:{},sidebar:"docs",previous:{title:"rockchip4 vr manual",permalink:"/docusaurus/docs/0.16.0/AndroidFramework/TaskE1-rockchip4/rockchip4-vr-manual"},next:{title:"arpara vr logic",permalink:"/docusaurus/docs/0.16.0/AndroidFramework/arpara-vr-logic"}},s={},p=[{value:"overview",id:"overview",level:2},{value:"fast push",id:"fast-push",level:2},{value:"sys relative",id:"sys-relative",level:2},{value:"get android/sdk(API) version",id:"get-androidsdkapi-version",level:3},{value:"<code>dumpsys</code>",id:"dumpsys",level:3},{value:"<code>getprop | setprop</code>",id:"getprop--setprop",level:3},{value:"TODO: <code>sysprop(api)</code>",id:"todo-syspropapi",level:3},{value:"log relative",id:"log-relative",level:2},{value:"config log level",id:"config-log-level",level:3},{value:"bugfix: log datetime",id:"bugfix-log-datetime",level:3},{value:"package relative",id:"package-relative",level:2},{value:"activity relative",id:"activity-relative",level:2},{value:"get activity name from specific package",id:"get-activity-name-from-specific-package",level:3},{value:"trigger an intent for choosing activity",id:"trigger-an-intent-for-choosing-activity",level:3},{value:"play a video/movie/mp4",id:"play-a-videomoviemp4",level:3},{value:"start/stop activity(package)",id:"startstop-activitypackage",level:3},{value:"TODO: kill app/process/package",id:"todo-kill-appprocesspackage",level:3},{value:"list all package names",id:"list-all-package-names",level:3},{value:"find current activity names",id:"find-current-activity-names",level:3},{value:"screen relative",id:"screen-relative",level:2},{value:"change window size",id:"change-window-size",level:3},{value:"screenshot/screencap",id:"screenshotscreencap",level:3},{value:"layer\u76f8\u5173",id:"layer\u76f8\u5173",level:3},{value:"permission",id:"permission",level:2},{value:"\u5b98\u65b9\u6587\u6863\uff1a\u6743\u9650\u63a7\u5236",id:"\u5b98\u65b9\u6587\u6863\u6743\u9650\u63a7\u5236",level:3},{value:"adb\u542f\u7528\u8bfb\u5199SD\u5361\u6743\u9650",id:"adb\u542f\u7528\u8bfb\u5199sd\u5361\u6743\u9650",level:3},{value:"tool",id:"tool",level:2},{value:"TODO: <code>autoadb</code>",id:"todo-autoadb",level:3},{value:"edit file in adb shell",id:"edit-file-in-adb-shell",level:3},{value:"input",id:"input",level:2},{value:"input show <code>trackball</code>",id:"input-show-trackball",level:3},{value:"debug",id:"debug",level:2}],d={toc:p};function c(e){let{components:a,...t}=e;return(0,n.kt)("wrapper",(0,l.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"adb-howto"},"adb howto"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"#overview"},"overview")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"#fast-push"},"fast push")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"#sys-relative"},"sys relative"),(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"#get-androidsdkapi-version"},"get android/sdk(API) version")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"#dumpsys"},(0,n.kt)("inlineCode",{parentName:"a"},"dumpsys"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"#getprop--setprop"},(0,n.kt)("inlineCode",{parentName:"a"},"getprop | setprop"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"#todo-syspropapi"},"TODO: ",(0,n.kt)("inlineCode",{parentName:"a"},"sysprop(api)"))))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"#log-relative"},"log relative"),(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"#config-log-level"},"config log level")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"#bugfix-log-datetime"},"bugfix: log datetime")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"#package-relative"},"package relative")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"#activity-relative"},"activity relative"),(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"#get-activity-name-from-specific-package"},"get activity name from specific package")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"#trigger-an-intent-for-choosing-activity"},"trigger an intent for choosing activity")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"#play-a-videomoviemp4"},"play a video/movie/mp4")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"#startstop-activitypackage"},"start/stop activity(package)")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"#todo-kill-appprocesspackage"},"TODO: kill app/process/package")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"#list-all-package-names"},"list all package names")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"#find-current-activity-names"},"find current activity names")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"#screen-relative"},"screen relative"),(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"#change-window-size"},"change window size")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"#screenshotscreencap"},"screenshot/screencap")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"#layer%E7%9B%B8%E5%85%B3"},"layer\u76f8\u5173")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"#permission"},"permission"),(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"#%E5%AE%98%E6%96%B9%E6%96%87%E6%A1%A3%E6%9D%83%E9%99%90%E6%8E%A7%E5%88%B6"},"\u5b98\u65b9\u6587\u6863\uff1a\u6743\u9650\u63a7\u5236")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"#adb%E5%90%AF%E7%94%A8%E8%AF%BB%E5%86%99sd%E5%8D%A1%E6%9D%83%E9%99%90"},"adb\u542f\u7528\u8bfb\u5199SD\u5361\u6743\u9650")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"#tool"},"tool"),(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"#todo-autoadb"},"TODO: ",(0,n.kt)("inlineCode",{parentName:"a"},"autoadb"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"#edit-file-in-adb-shell"},"edit file in adb shell")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"#input"},"input"),(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"#input-show-trackball"},"input show ",(0,n.kt)("inlineCode",{parentName:"a"},"trackball"))))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"#debug"},"debug"))),(0,n.kt)("h2",{id:"overview"},"overview"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"# show devices\nadb start-server\nadb devices\n\n# stop device\nadb kill-server \n\n# restart system (warm reboot)\nadb shell setprop ctl.restart.zygote\n\n# start launcher (android 11, `.Launcher3` in android 10)\nadb shell am start -n com.android.launcher3/.uioverrides.QuickstepLauncher\n\n# start gallery\nadb shell am start -n com.android.gallery3d/.app.GalleryActivity\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u2728\u2728 \u547d\u4ee4\u901f\u67e5\uff1a",(0,n.kt)("a",{parentName:"p",href:"https://android-doc.github.io/tools/help/shell.html"},"ADB Shell Commands | Android Developers"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://developer.android.com/studio/command-line/adb"},"Android \u8c03\u8bd5\u6865 (adb) \xa0|\xa0 Android \u5f00\u53d1\u8005 \xa0|\xa0 Android Developers"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://forum.xda-developers.com/t/howto-new-hot-reboot-command.2325378/"},"[HOWTO] New Hot Reboot Command!!!! | XDA Forums")))),(0,n.kt)("h2",{id:"fast-push"},"fast push"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"# init\nadb root\nadb disable-verity\nadb remount\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},'CROOT=/home/mark/work@arpara/rock-android11\nPRODUCT=rk3399_ROCKPI4B_Android11\nMODULE=surfaceflinger\nUSE_SYMBOL=1\n\nOUT_DIR=$CROOT/out/target/product/$PRODUCT$($USE_SYMBOL?"/symbols":"")/system\n\nadb push $OUT_DIR/bin/$MODULE /system/bin/\nadb push $OUT_DIR/lib/lib$MODULE.so /system/lib/\nadb push $OUT_DIR/lib64/lib$MODULE.so /system/lib64/\n')),(0,n.kt)("h2",{id:"sys-relative"},"sys relative"),(0,n.kt)("h3",{id:"get-androidsdkapi-version"},"get android/sdk(API) version"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"# get android version\nadb shell getprop ro.build.version.release\n\n# get sdk version\nadb shell getprop ro.build.version.sdk\n")),(0,n.kt)("p",null,"ref:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/29968096/get-android-os-version-of-device-connected-via-adb"},"shell - Get Android OS version of device connected via ADB - Stack Overflow"))),(0,n.kt)("h3",{id:"dumpsys"},(0,n.kt)("inlineCode",{parentName:"h3"},"dumpsys")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"# list all the available services\nadb shell dumpsys -l\n\n# view the display service\nadb shell dumpsys display\n")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/adb-howto-1644419106778-94d78504f27d81c9f142950f9c1559089970f905da3449feff0313a080f47d73.png",alt:"picture 44"}),"  "),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"ref")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.android.com/studio/command-line/dumpsys"},"dumpsys \xa0|\xa0 Android \u5f00\u53d1\u8005 \xa0|\xa0 Android Developers"))),(0,n.kt)("h3",{id:"getprop--setprop"},(0,n.kt)("inlineCode",{parentName:"h3"},"getprop | setprop")),(0,n.kt)("p",null,"!!!warning\nthe ",(0,n.kt)("inlineCode",{parentName:"p"},"getprop | setprop")," is for global build props, not framework level!"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"For example, I defined a sysprop under surfaceflinger, but I can not get it if I only push `surfaceflinger | libsurfaceflinger.so` into device.\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"# see whole list of props\nadb shell getprop\n\n# see the value of specific prop\nadb shell getprop ro.build.version.sdk\n\n# ambiguous search of specific prop\nadb shell getprop | grep timezone\n")),(0,n.kt)("p",null,"see: - ",(0,n.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/21099301/android-adb-commands-to-get-the-device-properties?rq=1"},"shell - Android ADB commands to get the device properties - Stack Overflow")),(0,n.kt)("h3",{id:"todo-syspropapi"},"TODO: ",(0,n.kt)("inlineCode",{parentName:"h3"},"sysprop(api)")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://source.android.com/devices/architecture/configuration/add-system-properties#step3-add-levels-to-system"},"\u6dfb\u52a0\u7cfb\u7edf\u5c5e\u6027 \xa0|\xa0 Android \u5f00\u6e90\u9879\u76ee \xa0|\xa0 Android Open Source Project"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://source.android.com/devices/architecture/sysprops-apis"},"\u5c06\u7cfb\u7edf\u5c5e\u6027\u4f5c\u4e3a API \u5b9e\u73b0 \xa0|\xa0 Android \u5f00\u6e90\u9879\u76ee \xa0|\xa0 Android Open Source Project")))),(0,n.kt)("h2",{id:"log-relative"},"log relative"),(0,n.kt)("h3",{id:"config-log-level"},"config log level"),(0,n.kt)("p",null,"\u5148\u8fd9\u6837\u5c4f\u853d\u4e0b\uff0clogcat\u7684\u8d1f\u8f7d\u4f1a\u964d\u4e0b\u6765\nlogcat\u5c4f\u853d\u5197\u4f59\u65e5\u5fd7\u8f93\u51fa"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"SERVICE=log.tag.JniUsbDevice\n\n# \u5c4f\u853dJniUsbDevice TAG\u663e\u793a\nadb shell setprop $SERVICE ERROR\n\n# \u6062\u590d\u67d0TAG\u663e\u793a\nadb shell setprop $SERVICE VERBOSE\n")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"ref")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://blog.csdn.net/Sunxiaolin2016/article/details/103721945"},"(1\u6761\u6d88\u606f) \u67e5\u770b\u548c\u8bbe\u7f6eAndroid Log\u7b49\u7ea7\u548cLog.isLoggable\u4f7f\u7528\u65b9\u6cd5_Sunxiaolin2016\u7684\u535a\u5ba2-CSDN\u535a\u5ba2"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/56444913/adb-shell-setprop-log-tag-sometag-verbose-how-to-get-sometag"},"android - adb shell setprop log.tag.SOMETAG VERBOSE, how to get SOMETAG? - Stack Overflow")))),(0,n.kt)("h3",{id:"bugfix-log-datetime"},"bugfix: log datetime"),(0,n.kt)("p",null,"android\u7684\u65e5\u5fd7\u7cfb\u7edf\u7684\u65f6\u95f4\uff0c\u662f\u57fa\u4e8e\u7cfb\u7edf\u65f6\u95f4\uff0c\u5bf9\u4e8e\u521a\u5237\u7684\u6a21\u62df\u673a\u6765\u8bf4\uff0c\u7cfb\u7edf\u91cc\u662f\u9ed8\u8ba4\u81ea\u52a8\u83b7\u53d6\uff08\u4ece\u7f51\u7edc\uff09\uff0c\u4f46\u7531\u4e8e\u521a\u5237\u7684\u6a21\u62df\u673a\u4e5f\u6ca1\u8bbe\u7f6e\u65e0\u7ebf\u7f51\uff0c\u6240\u4ee5\u5bfc\u81f4\u65f6\u95f4\u53ef\u80fd\u5c31\u6bd4\u8f83\u968f\u610f\u4e86\uff08\u76ee\u6d4b\u53ef\u80fd\u5c31\u662fbuild\u8d77\u7684\u65f6\u95f4\uff09\u3002"),(0,n.kt)("p",null,"\u5728\u8fde\u63a5\u65e0\u7ebf\u7f51\u540e\uff0c\u4f1a\u81ea\u52a8\u66f4\u65b0\u65f6\u95f4\uff1b\u518d\u914d\u7f6e\u65f6\u533a\u4e3a\u4e2d\u56fd\u4e0a\u6d77\uff0c\u8fd9\u4e2a\u65f6\u5019adb\u7684\u65e5\u5fd7\u65f6\u95f4\u5c31\u6b63\u5e38\u4e86\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/adb-howto-1644460841673-c1a83e998362f85db969e32abc7359af0de9e9238ab5e6a22dd1188a6b26f55f.png",alt:"picture 3"}),"  "),(0,n.kt)("h2",{id:"package-relative"},"package relative"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"function getPackageInfoFromApkFile() {aapt dump badging $1}\n\n# use `perl` for non-greedy match\nfunction getPackageNameFromApkFile() {aapt dump badging $1 | grep package | perl -pe \"s/^.*name='(.*?)'.*$/\\1/\"}\n")),(0,n.kt)("h2",{id:"activity-relative"},"activity relative"),(0,n.kt)("h3",{id:"get-activity-name-from-specific-package"},"get activity name from specific package"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"function getActivitiesFromPackageName() {adb shell \"dumpsys package | grep -i $1 | grep 'Activity' | sort | uniq\"}\n")),(0,n.kt)("p",null,"see:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/28984772/is-there-a-adb-shell-command-to-know-all-activitynames-of-a-package"},"android - Is there a adb shell command to know all activitynames of a package - Stack Overflow"))),(0,n.kt)("h3",{id:"trigger-an-intent-for-choosing-activity"},"trigger an intent for choosing activity"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"adb shell am start -a android.intent.action.VIEW -d\n")),(0,n.kt)("p",null,"ref:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/20534353/start-youtube-video-with-adb"},"android - Start youtube video with adb? - Stack Overflow"))),(0,n.kt)("h3",{id:"play-a-videomoviemp4"},"play a video/movie/mp4"),(0,n.kt)("p",null,"resolution 1:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"adb push FILE /data/local/\nFILE=/data/local/$FILE\n\n# directly play the video using specific player\nadb shell am start -n com.android.gallery3d/.app.MovieActivity -d $FILE\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/8207548/launching-movie-playback-via-am-start"},'android - Launching movie playback via "am start" - Stack Overflow'))),(0,n.kt)("p",null,"resolution 2:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"# use intent to select which player\nadb shell am start -a android.intent.action.VIEW  -t video/mp4 -d $FILE\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://medium.com/@roshni.b.tiwari/adb-commands-for-music-video-and-fm-b02018219cd5"},"ADB commands for Music,Video and FM | by Roshni Tiwari | Medium"))),(0,n.kt)("h3",{id:"startstop-activitypackage"},"start/stop activity(package)"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"# start app(activity)\ndb shell am start -n PACKAGE/ACTIVITY\n\n# kill app(package)\nadb shell am force-stop PACKAGE\n")),(0,n.kt)("p",null,"see: - ",(0,n.kt)("a",{parentName:"p",href:"https://blog.csdn.net/yinxing2008/article/details/91434805"},"(1\u6761\u6d88\u606f) adb kill app\u8fdb\u7a0b\u53ca\u542f\u52a8app\u65b9\u6cd5_\u84dd\u4e0d\u84dd\u7f16\u7a0b-CSDN\u535a\u5ba2_adb kill \u5e94\u7528")),(0,n.kt)("h3",{id:"todo-kill-appprocesspackage"},"TODO: kill app/process/package"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"# kill background process\nadb shell am kill XXX\n\n# kill all background processes\nadb shell am kill-all\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/17829606/android-adb-stop-application-command-like-force-stop-for-non-rooted-device"},'Android ADB stop application command like "force-stop" for non rooted device - Stack Overflow'))),(0,n.kt)("h3",{id:"list-all-package-names"},"list all package names"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"adb shell pm list packages | cut -c 8-\n")),(0,n.kt)("p",null,"sample:"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/adb-howto-1644484544765-fd3435d784176f80025e6c44dfc1b204d31a3d10d08be0435af01b4ca462d2d5.png",alt:"picture 30"}),"  "),(0,n.kt)("p",null,"see: - ",(0,n.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/16650765/get-application-name-label-via-adb-shell-or-terminal"},"android - Get Application Name/ Label via ADB Shell or Terminal - Stack Overflow")),(0,n.kt)("hr",null),(0,n.kt)("p",null,"It may also be helpful if we use ",(0,n.kt)("inlineCode",{parentName:"p"},"adb shell dumpsys package"),", while there are too much noise."),(0,n.kt)("h3",{id:"find-current-activity-names"},"find current activity names"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},'adb shell dumpsys window windows | grep "Window #"\n')),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/adb-howto-1644484220733-940dabfae4d51af0cb09b478c516881fa510640fb9d417de948ad3bc256aea3d.png",alt:"picture 29"}),"  "),(0,n.kt)("p",null,"see: - ",(0,n.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/16650765/get-application-name-label-via-adb-shell-or-terminal"},"android - Get Application Name/ Label via ADB Shell or Terminal - Stack Overflow")),(0,n.kt)("h2",{id:"screen-relative"},"screen relative"),(0,n.kt)("h3",{id:"change-window-size"},"change window size"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"adb shell wm size 1920x1080\n\nadb shell wm density 390\n\nadb reboot\n")),(0,n.kt)("p",null,"ref:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://nerdschalk.com/change-screen-resolution-adb-android/"},"Change Screen Resolution via ADB and save Battery life on Android devices (without Root)"))),(0,n.kt)("h3",{id:"screenshotscreencap"},"screenshot/screencap"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"# gen screenshot\nadb shell screencap /sdcard/screen.png\n\n# pull screenshot\nadb pull /sdcard/screen.png\n")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"ref")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.android.com/studio/command-line/adb#screencap"},"Android \u8c03\u8bd5\u6865 (adb) \xa0|\xa0 Android \u5f00\u53d1\u8005 \xa0|\xa0 Android Developers"))),(0,n.kt)("h3",{id:"layer\u76f8\u5173"},"layer\u76f8\u5173"),(0,n.kt)("p",null,"ref:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u2728 \u8fd9\u91cc\u63d0\u4f9b\u4e86\u51e0\u4e2a\u548clayer\u64cd\u4f5c\u6709\u5173\u7684",(0,n.kt)("inlineCode",{parentName:"li"},"adb"),"\u547d\u4ee4\uff1a",(0,n.kt)("a",{parentName:"li",href:"https://developer.android.com/ndk/guides/rootless-debug-gles"},"GLES \u56fe\u5c42 \xa0|\xa0 Android NDK \xa0|\xa0 Android Developers"))),(0,n.kt)("h2",{id:"permission"},"permission"),(0,n.kt)("h3",{id:"\u5b98\u65b9\u6587\u6863\u6743\u9650\u63a7\u5236"},"\u5b98\u65b9\u6587\u6863\uff1a\u6743\u9650\u63a7\u5236"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://source.android.com/devices/architecture/modular-system/permissioncontroller"},"PermissionController \xa0|\xa0 Android \u5f00\u6e90\u9879\u76ee \xa0|\xa0 Android Open Source Project"))),(0,n.kt)("h3",{id:"adb\u542f\u7528\u8bfb\u5199sd\u5361\u6743\u9650"},"adb\u542f\u7528\u8bfb\u5199SD\u5361\u6743\u9650"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"adb shell pm grant PACKAGE android.permission.WRITE_EXTERNAL_STORAGE\n\nadb shell pm grant PACKAGE android.permission.READ_EXTERNAL_STORAGE\n")),(0,n.kt)("p",null,"ref:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://gist.github.com/RussellCollins/87e447183103fe6ca8b1"},"Set write and read external storage permission prior to a test run so that a screenshot on fail listener can work on device targets running Android 6.0+"))),(0,n.kt)("h2",{id:"tool"},"tool"),(0,n.kt)("h3",{id:"todo-autoadb"},"TODO: ",(0,n.kt)("inlineCode",{parentName:"h3"},"autoadb")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/rom1v/autoadb"},"rom1v/autoadb: Execute a command whenever a device is adb-connected"))),(0,n.kt)("h3",{id:"edit-file-in-adb-shell"},"edit file in adb shell"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"adb shell\nbusybox vi /sdcard/Download/test.txt\n")),(0,n.kt)("p",null,"ref:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/20258688/can-i-edit-files-inside-the-android-adb-shell"},"editor - Can I edit files inside the Android ADB shell? - Stack Overflow"))),(0,n.kt)("h2",{id:"input"},"input"),(0,n.kt)("h3",{id:"input-show-trackball"},"input show ",(0,n.kt)("inlineCode",{parentName:"h3"},"trackball")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"adb shell input trackball tap X Y\n")),(0,n.kt)("p",null,"ref:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/3437686/how-to-use-adb-to-send-touch-events-to-device-using-sendevent-command"},"android - How to use ADB to send touch events to device using sendevent command? - Stack Overflow"))),(0,n.kt)("h2",{id:"debug"},"debug"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"\n# find all activities of specific package\n\n# find launchable activities of specific package\nadb shell pm dump PACKAGE_NAME | grep -A 1 MAIN\n\n# find activities in current windows\nadb shell dumpsys window windows | grep \"Window #\"\n\n\n# kill app, sample: `adbkill com.android.systemui`\nalias adbkill='_adbkill(){ adb root;adb shell kill `adb shell ps | grep $1 | awk {'\\''print $2'\\''} | head -n 1`; }; _adbkill'\n\n")),(0,n.kt)("p",null,"ref:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/33441138/how-to-find-out-activity-names-in-a-package-android-adb-shell"},"How to find out activity names in a package? android. ADB shell - Stack Overflow"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/12698814/get-launchable-activity-name-of-package-from-adb/36255727"},"android - get launchable activity name of package from adb - Stack Overflow"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://blog.krybot.com/a?ID=01750-cb7cddef-842d-48e9-aa32-e9a9747a2720"},"android adb one line command kills the process according to the package name - Krybot")))))}c.isMDXComponent=!0}}]);