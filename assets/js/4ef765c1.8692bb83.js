(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3375],{68042:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var a=n(87462),o=(n(67294),n(3905)),r=n(93456);const l={},i="electron howto",p={unversionedId:"coding/JS/Electron/electron-howto",id:"coding/JS/Electron/electron-howto",title:"electron howto",description:"1. electron best practice",source:"@site/docs/coding/JS/Electron/electron-howto.md",sourceDirName:"coding/JS/Electron",slug:"/coding/JS/Electron/electron-howto",permalink:"/docusaurus/docs/coding/JS/Electron/electron-howto",draft:!1,editUrl:"https://github.com/markshawn2020/docusaurus/edit/master/docs/coding/JS/Electron/electron-howto.md",tags:[],version:"current",lastUpdatedAt:1658803883,formattedLastUpdatedAt:"2022\u5e747\u670826\u65e5",frontMatter:{},sidebar:"docs",previous:{title:"electron-bugfix",permalink:"/docusaurus/docs/coding/JS/Electron/electron-bugfix"},next:{title:"electron prisma sqlite 2",permalink:"/docusaurus/docs/coding/JS/Electron/electron-prisma-sqlite-2"}},s={},c=[{value:"electron best practice",id:"electron-best-practice",level:2},{value:"design of dependency workflow",id:"design-of-dependency-workflow",level:3},{value:"app path, storing db, log, etc",id:"app-path-storing-db-log-etc",level:3},{value:"log into file",id:"log-into-file",level:3},{value:"electron test",id:"electron-test",level:2},{value:"sqlite best practice",id:"sqlite-best-practice",level:2},{value:"don&#39;t use relative path as sqlite position",id:"dont-use-relative-path-as-sqlite-position",level:3},{value:"log electron",id:"log-electron",level:2},{value:"TODO: idealog color configuration",id:"todo-idealog-color-configuration",level:3},{value:"build for Windows on Mac",id:"build-for-windows-on-mac",level:2},{value:"build native dependencies and for multi platforms",id:"build-native-dependencies-and-for-multi-platforms",level:2},{value:"custom app logo",id:"custom-app-logo",level:2},{value:"a good start",id:"a-good-start",level:3},{value:"customize icon for unpacked app",id:"customize-icon-for-unpacked-app",level:3},{value:"square .icon",id:"square-icon",level:3},{value:"electron-builder <code>files</code> map",id:"electron-builder-files-map",level:2},{value:"\u2b50\ufe0f\u2b50\ufe0f\u2b50\ufe0f debug binary electron",id:"\ufe0f\ufe0f\ufe0f-debug-binary-electron",level:2},{value:"<code>ipcRenderer</code> communication",id:"ipcrenderer-communication",level:2},{value:"hwo to use <code>preload.ts</code>",id:"hwo-to-use-preloadts",level:2},{value:"the <code>preload</code> script won&#39;t run if we just start the main process",id:"the-preload-script-wont-run-if-we-just-start-the-main-process",level:3},{value:"it&#39;s ok when we just use <code>preload.js</code>",id:"its-ok-when-we-just-use-preloadjs",level:3},{value:"what about using a <code>preload.ts</code>",id:"what-about-using-a-preloadts",level:3},{value:"remedy 1, the <code>tsc</code> solution",id:"remedy-1-the-tsc-solution",level:4},{value:"how to remedy the  <code>electron-react-boilerplate</code> project",id:"how-to-remedy-the--electron-react-boilerplate-project",level:3}],d={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"electron-howto"},"electron howto"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#electron-best-practice"},"electron best practice"),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#design-of-dependency-workflow"},"design of dependency workflow")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#app-path-storing-db-log-etc"},"app path, storing db, log, etc")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#log-into-file"},"log into file")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#electron-test"},"electron test")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#sqlite-best-practice"},"sqlite best practice"),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#dont-use-relative-path-as-sqlite-position"},"don't use relative path as sqlite position")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#log-electron"},"log electron"),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#todo-idealog-color-configuration"},"TODO: idealog color configuration")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#build-for-windows-on-mac"},"build for Windows on Mac")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#build-native-dependencies-and-for-multi-platforms"},"build native dependencies and for multi platforms")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#custom-app-logo"},"custom app logo"),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#a-good-start"},"a good start")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#customize-icon-for-unpacked-app"},"customize icon for unpacked app")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#square-icon"},"square .icon")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#electron-builder-files-map"},"electron-builder ",(0,o.kt)("inlineCode",{parentName:"a"},"files")," map")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#%EF%B8%8F%EF%B8%8F%EF%B8%8F-debug-binary-electron"},"\u2b50\ufe0f\u2b50\ufe0f\u2b50\ufe0f debug binary electron")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#ipcrenderer-communication"},(0,o.kt)("inlineCode",{parentName:"a"},"ipcRenderer")," communication")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#hwo-to-use-preloadts"},"hwo to use ",(0,o.kt)("inlineCode",{parentName:"a"},"preload.ts")),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#the-preload-script-wont-run-if-we-just-start-the-main-process"},"the ",(0,o.kt)("inlineCode",{parentName:"a"},"preload")," script won't run if we just start the main process")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#its-ok-when-we-just-use-preloadjs"},"it's ok when we just use ",(0,o.kt)("inlineCode",{parentName:"a"},"preload.js"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#what-about-using-a-preloadts"},"what about using a ",(0,o.kt)("inlineCode",{parentName:"a"},"preload.ts")),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#remedy-1-the-tsc-solution"},"remedy 1, the ",(0,o.kt)("inlineCode",{parentName:"a"},"tsc")," solution")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#how-to-remedy-the--electron-react-boilerplate-project"},"how to remedy the  ",(0,o.kt)("inlineCode",{parentName:"a"},"electron-react-boilerplate")," project"))))),(0,o.kt)("h2",{id:"electron-best-practice"},"electron best practice"),(0,o.kt)("h3",{id:"design-of-dependency-workflow"},"design of dependency workflow"),(0,o.kt)("img",{alt:"picture 35",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/electron-howto-1641598093588-a14b7935afbcc384502d11ece03eab4f86772b695bfe904cd39f8180e934d21b.png"}),(0,o.kt)("p",null,"How to organize your project structure quite depends on your project scale and\nrealization."),(0,o.kt)("p",null,"For example, since my project is not too big, I combined almost all the constant\nvariables into one file ",(0,o.kt)("inlineCode",{parentName:"p"},"const.ts")," in each module, containing ",(0,o.kt)("inlineCode",{parentName:"p"},"channels"),"\n, ",(0,o.kt)("inlineCode",{parentName:"p"},"error_types"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"defined variables"),", etc."),(0,o.kt)("h3",{id:"app-path-storing-db-log-etc"},"app path, storing db, log, etc"),(0,o.kt)("p",null,"Since the ",(0,o.kt)("inlineCode",{parentName:"p"},"userData")," is the sub path of ",(0,o.kt)("inlineCode",{parentName:"p"},"appData")," with the name of our\napplication, so it's better to put all of our data into ",(0,o.kt)("inlineCode",{parentName:"p"},"userData"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// src/main/base/utils.ts\nexport const getRootPath = () => app.getPath('userData');\n\nexport const getLogPath = () => path.join(getRootPath(), 'main.log');\n\nexport const getDbPath = () => path.join(getRootPath(), 'hjxh_data.sqlite');\n")),(0,o.kt)("p",null,"!!!tip If run under the development, since the app is run via ",(0,o.kt)("inlineCode",{parentName:"p"},"electron ."),", so\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"userData")," points to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Electron"),", which is different from the real build\nversion with the actual name defined in our ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json/build"),"."),(0,o.kt)("p",null,"ref:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.electronjs.org/docs/v14-x-y/api/app#appgetapppath"},"app | Electron"))),(0,o.kt)("h3",{id:"log-into-file"},"log into file"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"log.transports.file.resolvePath = () => getLogPath();\nlog.transports.file.format      = '{y}-{m}-{d} {h}:{i}:{s}.{ms} {level}: {text}';\n")),(0,o.kt)("p",null,"ref:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/megahertz/electron-log#overriding-consolelog"},"megahertz/electron-log: Just a simple logging module for your Electron application"))),(0,o.kt)("h2",{id:"electron-test"},"electron test"),(0,o.kt)("p",null,"When all the ",(0,o.kt)("inlineCode",{parentName:"p"},"ts-node / esm")," relative environment is prepared well, there still\nexists some problems."),(0,o.kt)("p",null,"For example, concerning about database, since I use it derived from app runtime,\nand then it would not be mocked unless we start our script as a real electron\napp rather than a script for unittest."),(0,o.kt)("img",{alt:"picture 36",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/electron-howto-1641634838700-73855e534fc5987fd8ae13abe4a70a08ac88078a46f1dafa4857981f244c0484.png"}),(0,o.kt)("h2",{id:"sqlite-best-practice"},"sqlite best practice"),(0,o.kt)("h3",{id:"dont-use-relative-path-as-sqlite-position"},"don't use relative path as sqlite position"),(0,o.kt)("p",null,"When using relative path, many packages including system would treat it on the\nbase of current process directory."),(0,o.kt)("p",null,"However, if the application is build into binary and run by click, then the\nbehavior would become a bit different since e.g. in Mac the application is run\nwith ",(0,o.kt)("inlineCode",{parentName:"p"},"process.cwd() = '/'"),"."),(0,o.kt)("p",null,"And then if we write our data into a sqlite which is created with relative path,\nsuch as ",(0,o.kt)("inlineCode",{parentName:"p"},"./test.db"),", then the error would arise up because of permission."),(0,o.kt)("p",null,"So the best practice is to use ",(0,o.kt)("inlineCode",{parentName:"p"},"AppData")," directory\nvia ",(0,o.kt)("inlineCode",{parentName:"p"},"path.join(app.getPath('appData'), dbName)"),"."),(0,o.kt)("h2",{id:"log-electron"},"log electron"),(0,o.kt)("p",null,"There are two places where console.log output goes:"),(0,o.kt)("p",null,"If you log in the renderer process, you can see it in the console in the browser\nwindow. If you open the dev tools programmatically you can see this console even\nafter building."),(0,o.kt)("p",null,"If you log in the main process, you can see these messages ",(0,o.kt)("strong",{parentName:"p"},"if you start the\ninstalled app or the unpacked binary via command line"),". In windows this would\nbe the app.exe in the win-unpacked directory that electron-builder creates."),(0,o.kt)("p",null,"Another alternative would be a logger like ",(0,o.kt)("inlineCode",{parentName:"p"},"electron-log")," that writes the log\nmessages into a configured file."),(0,o.kt)("p",null,"ref:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/51866016/electron-where-does-logging-go/51881711"},"node.js - Electron - Where does logging go? - Stack Overflow"))),(0,o.kt)("p",null,"And I am surprised to find that it has been in the ",(0,o.kt)("inlineCode",{parentName:"p"},"electron-react-typescript"),"\nboilerplate."),(0,o.kt)("img",{alt:"picture 9",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/electron-howto-1641400174339-197d9edb335e41d6d68eae58bf512f6cec757749415defd5fa87fb63c537ac0e.png"}),(0,o.kt)("p",null,"And it's used for ",(0,o.kt)("inlineCode",{parentName:"p"},"Auto-Update"),"."),(0,o.kt)("img",{alt:"picture 10",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/electron-howto-1641400215835-87f663610072a1e27f1da23a200f39b21f3e3f798a27270d1e9e5dd5d37ea255.png"}),(0,o.kt)("p",null,"ref:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/megahertz/electron-log"},"megahertz/electron-log: Just a simple logging module for your Electron application"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/41140960/where-can-i-find-the-logs-for-my-electron-app-in-production"},"logging - Where can I find the logs for my Electron app in production? - Stack Overflow")))),(0,o.kt)("p",null,"However, it may not work since the output still goes into the terminal."),(0,o.kt)("h3",{id:"todo-idealog-color-configuration"},"TODO: idealog color configuration"),(0,o.kt)("h2",{id:"build-for-windows-on-mac"},"build for Windows on Mac"),(0,o.kt)("p",null,"Using this command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"electron-builder build --win\n")),(0,o.kt)("img",{alt:"picture 4",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/electron-howto-1641369861536-a425061cf7dc95030f6e2d90279fa39a62333acf181bd5f415d5fc6d9c245643.png",width:"480"}),(0,o.kt)("p",null,"But then:"),(0,o.kt)("img",{alt:"picture 5",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/electron-howto-1641370003105-4c933a2dae29f931f023269210b3a2d609cd218edd24c205643bfa2518f9aa2f.png",width:"480"}),(0,o.kt)("p",null,"Hence, we need a mirror."),(0,o.kt)("h2",{id:"build-native-dependencies-and-for-multi-platforms"},"build native dependencies and for multi platforms"),(0,o.kt)("p",null,"It seems this is auto finished by ",(0,o.kt)("inlineCode",{parentName:"p"},"electron-builder"),", which is described\nat: ",(0,o.kt)("a",{parentName:"p",href:"https://www.electronjs.org/docs/latest/tutorial/using-native-node-modules#:~:text=This%20module%20can%20automatically%20determine%20the%20version%20of%20Electron%20and%20handle%20the%20manual%20steps%20of%20downloading%20headers%20and%20rebuilding%20native%20modules%20for%20your%20app."},"This module can automatically determine the version of Electron and handle the manual steps of downloading headers and rebuilding native modules for your app.")),(0,o.kt)("img",{alt:"picture 1",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/electron-howto-1641369455356-de2696cc998305e33a63cfa320438182cb1058f3219da95df2b3993541d870fe.png",width:"480"}),(0,o.kt)("h2",{id:"custom-app-logo"},"custom app logo"),(0,o.kt)("h3",{id:"a-good-start"},"a good start"),(0,o.kt)("p",null,"All we need to do is to\nfollow: ",(0,o.kt)("a",{parentName:"p",href:"https://medium.com/fantageek/changing-electron-app-icon-acf26906c5ad"},"Changing electron app icon. Generate icns | by Khoa Pham | Fantageek | Medium")),(0,o.kt)("p",null,"In which it directs us to\ndownload ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/onmyway133/IconGenerator"},"onmyway133/IconGenerator: \ud83c\udf71 A macOS app to generate app icons")),(0,o.kt)("p",null,"success when run after pack."),(0,o.kt)("img",{alt:"picture 1",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/electron-howto-1641367831443-9ec96d4bce17056e6abf363cd144266c952a154a3aa7fec43afc2145d5ca028a.png",width:"480"}),(0,o.kt)("h3",{id:"customize-icon-for-unpacked-app"},"customize icon for unpacked app"),(0,o.kt)("p",null,"If we wanner the icon does work in unpacked environment, we need to replace the\ndefault icon in the module."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"cp ./assets/icon.icns node_modules/electron/dist/Electron.app/Contents/Resources\n")),(0,o.kt)("p",null,"Or we can follow the above article, right click app, and change the icon."),(0,o.kt)("h3",{id:"square-icon"},"square .icon"),(0,o.kt)("p",null,"When I pack for windows, it told me the icon size is at least '256 x 256'."),(0,o.kt)("p",null,"However I checked the raw image ",(0,o.kt)("inlineCode",{parentName:"p"},"xx.png"),", and admitted that the size is far\nbigger than this, but only to be converted to '256 x 204'."),(0,o.kt)("p",null,"I realized it may be owing to the size ratio, and I changed the image file into\na square one."),(0,o.kt)("img",{alt:"picture 2",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/electron-howto-1641369646888-cd19bed16ca970d1b078ca722f2464221a47f054162de3bf10154efd5a1759e6.png",width:"480"}),(0,o.kt)("p",null,"And then, it worked!"),(0,o.kt)("p",null,"ref:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/58351575/how-to-change-electronjs-app-default-icon"},"angular - How to Change ElectronJS App default Icon? - Stack Overflow"))),(0,o.kt)("h2",{id:"electron-builder-files-map"},"electron-builder ",(0,o.kt)("inlineCode",{parentName:"h2"},"files")," map"),(0,o.kt)("p",null,"The current problem has become clarified, that is files not found."),(0,o.kt)("p",null,"We need a map, since I tried ",(0,o.kt)("inlineCode",{parentName:"p"},"files")," but in vain."),(0,o.kt)("img",{alt:"picture 1",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/electron-howto-1641148225241-7024811ff97dcbf12b0b6fbbd55ba645706c76be5464f6709b699d2bbd239c5f.png",width:"480"}),(0,o.kt)("p",null,"Now, the problem is that the database would auto create after first query, while\nit's empty and then causes errors."),(0,o.kt)("img",{alt:"picture 2",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/electron-howto-1641152259910-b7c6267ebdebb2f92da0194da0c417ea56039d03d07c10cc0726155b9b3b3e35.png",width:"480"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/prisma/prisma/issues/9613"},"Using Prisma with the Electron Framework \xb7 Issue #9613 \xb7 prisma/prisma"))),(0,o.kt)("h2",{id:"\ufe0f\ufe0f\ufe0f-debug-binary-electron"},"\u2b50\ufe0f\u2b50\ufe0f\u2b50\ufe0f debug binary electron"),(0,o.kt)("p",null,"Here's what worked for me on Mac."),(0,o.kt)("p",null,"In terminal type ",(0,o.kt)("inlineCode",{parentName:"p"},"lldb path/to/build.app"),"\nIn the opened debugger type ",(0,o.kt)("inlineCode",{parentName:"p"},"run --remote-debugging-port=8315"),". It should open a\nwindow of your app. Open Chrome at ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:8315/"),"\nClick on the name of the app. For example, Webpack App. If you don't see\nanything in the opened tab, focus on the window of your app."),(0,o.kt)("p",null,"ref:\n",(0,o.kt)("a",{parentName:"p",href:"https://stackoverflow.com/a/56634497/9422455"},"https://stackoverflow.com/a/56634497/9422455")),(0,o.kt)("h2",{id:"ipcrenderer-communication"},(0,o.kt)("inlineCode",{parentName:"h2"},"ipcRenderer")," communication"),(0,o.kt)("p",null,"It deserves my attention that the msg interface from main process is\nso-called ",(0,o.kt)("inlineCode",{parentName:"p"},"ipcMainEvent")," which is not exported."),(0,o.kt)("img",{alt:"picture 79",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/1640678460651-electron-howto-12d652220f222d268d792307f8e0523bfc5b47ea28c4b56795c240ed44fce75b.png",width:"480"}),(0,o.kt)("p",null,"So, for typescript support, I need to define a 'hooked ipcMainEvent' like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"interface IpcMainEvent extends Event {\n    // eslint-disable-next-line @typescript-eslint/ban-types\n    reply: Function;\n}\n")),(0,o.kt)("p",null,"And when communicating, I should be careful with the difference between ",(0,o.kt)("inlineCode",{parentName:"p"},"on"),"\nand ",(0,o.kt)("inlineCode",{parentName:"p"},"once"),", and don't forget to close the channel if need."),(0,o.kt)("img",{alt:"picture 74",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/1640672448044-electron-howto-940254219636fb7b6bbdfea1faf735478526cefe89f48a4e6d2cef6acfe509e6.png",width:"480"}),(0,o.kt)("p",null,"ref:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://www.electronjs.org/docs/latest/api/structures/ipc-main-event"},"IpcMainEvent Object extends ",(0,o.kt)("inlineCode",{parentName:"a"},"Event")," | Electron"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://www.electronjs.org/docs/latest/api/ipc-renderer"},"ipcRenderer | Electron")))),(0,o.kt)("h2",{id:"hwo-to-use-preloadts"},"hwo to use ",(0,o.kt)("inlineCode",{parentName:"h2"},"preload.ts")),(0,o.kt)("p",null,"ref:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/49076033/using-typescript-in-electrons-preload-scripts"},"Using typescript in Electron's preload scripts - Stack Overflow"))),(0,o.kt)("p",null,"suppose:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"MAIN: src/electron/main\nRENDERER: src/renderer/index\nPRELOAD_TS: src/electron/preload.ts\nPRELOAD_JS: src/electron/preload.js\nRUN_MAIN: electron MAIN, or like\nRUN_RENDERER: webpack serve --config WEBPACK_DEV_CONFIG_RENDERER.js, or like\n")),(0,o.kt)("h3",{id:"the-preload-script-wont-run-if-we-just-start-the-main-process"},"the ",(0,o.kt)("inlineCode",{parentName:"h3"},"preload")," script won't run if we just start the main process"),(0,o.kt)("p",null,"First, if we only run ",(0,o.kt)("inlineCode",{parentName:"p"},"electron MAIN"),"\nor ",(0,o.kt)("inlineCode",{parentName:"p"},"electron -r ts-node/register/transpile-only MAIN")," (ts support), the electron\nwindow would run successfully no matter we pointed a ",(0,o.kt)("inlineCode",{parentName:"p"},"preload")," file or not since\nthe file would only run just before the renderer process, i.e. after the main\nprocess and separate."),(0,o.kt)("h3",{id:"its-ok-when-we-just-use-preloadjs"},"it's ok when we just use ",(0,o.kt)("inlineCode",{parentName:"h3"},"preload.js")),(0,o.kt)("p",null,"If we just use ",(0,o.kt)("inlineCode",{parentName:"p"},"preload.js"),", then no matter we use webpack or not, the programme\nwould run well."),(0,o.kt)("h3",{id:"what-about-using-a-preloadts"},"what about using a ",(0,o.kt)("inlineCode",{parentName:"h3"},"preload.ts")),(0,o.kt)("p",null,"The main problem concerning with ",(0,o.kt)("inlineCode",{parentName:"p"},"preload.ts")," is that when we use electron, we\nare likely to use different pack method for main process and the renderer one,\nand the core concept is whether the ",(0,o.kt)("inlineCode",{parentName:"p"},"preload.ts")," had been compiled\ninto ",(0,o.kt)("inlineCode",{parentName:"p"},"preload.js")," and executed by the renderer."),(0,o.kt)("h4",{id:"remedy-1-the-tsc-solution"},"remedy 1, the ",(0,o.kt)("inlineCode",{parentName:"h4"},"tsc")," solution"),(0,o.kt)("p",null,"If we first created a ",(0,o.kt)("inlineCode",{parentName:"p"},"preload.ts")," file and it doesn't export anything to with\nthe main or renderer codes, then the only change we need to do is that to\nadd ",(0,o.kt)("inlineCode",{parentName:"p"},"tsc PRELOAD_TS && ")," before the ",(0,o.kt)("inlineCode",{parentName:"p"},"RUN_RENDERER"),"."),(0,o.kt)("p",null,"It can be expected to see the ",(0,o.kt)("inlineCode",{parentName:"p"},"preload.ts")," changed into ",(0,o.kt)("inlineCode",{parentName:"p"},"preload.js")," and all the\nthings goes ok."),(0,o.kt)("p",null,"For example, we can write pure ",(0,o.kt)("inlineCode",{parentName:"p"},"ts")," type of ",(0,o.kt)("inlineCode",{parentName:"p"},"preload"),", and it in fact needs no\nextra modification since the interface is perfect except a little dangerous\nsince we didn't put constraint on the api request. More can be found refer\nto: ",(0,o.kt)("a",{parentName:"p",href:"https://www.electronjs.org/docs/latest/tutorial/context-isolation#:~:text=over%20the%20bridge.-,security%20considerations"},"Security considerations")),(0,o.kt)("img",{alt:"picture 62",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/1640619986956-electron-howto-1ce7cdbe555ac69cf6f36e74efe332354d4bfda0fc47257f55efb8c46d629538.png",width:"480"}),(0,o.kt)("p",null,"I do care about the safe problem if this is a huge app developed for commercial\nuse."),(0,o.kt)("p",null,"But If I write more apis, then it would drive me to separate my apis in another\nfile, and the renderer, as well as the main, would read from the file together.\nAt the same time, ",(0,o.kt)("inlineCode",{parentName:"p"},"tsc")," would compile the ",(0,o.kt)("inlineCode",{parentName:"p"},"preload.ts")," along with the separate\nfile to ",(0,o.kt)("inlineCode",{parentName:"p"},".js"),", then a ",(0,o.kt)("inlineCode",{parentName:"p"},"emit skipped")," error may happen if the electron main to\nread a ",(0,o.kt)("inlineCode",{parentName:"p"},"interface.ts")," file but to find there exists both ",(0,o.kt)("inlineCode",{parentName:"p"},"interface.ts"),"\nand ",(0,o.kt)("inlineCode",{parentName:"p"},"interface.js"),"."),(0,o.kt)("h3",{id:"how-to-remedy-the--electron-react-boilerplate-project"},"how to remedy the  ",(0,o.kt)("inlineCode",{parentName:"h3"},"electron-react-boilerplate")," project"),(0,o.kt)("p",null,"Dive into the source coe\nof ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/electron-react-boilerplate/electron-react-boilerplate#:~:text=electron-react-boilerplate%0A%20%20%0A%20%20%2F-,electron-react-boilerplate,-Public%20template"},"electron-react-boilerplate"),"\n, we can know the programme startup flow under the development environment is as\nthe following:"),(0,o.kt)(r.Mermaid,{config:{},chart:"flowchart TD\n\nsubgraph Start[npm run start]\nPreStart[check port in use] --\x3e\nStartRender\nend\n\n\nsubgraph StartRender[`npm run start:renderer`]\n\nsubgraph WebpackDev[`webpack serve --dev.config`]\nsubgraph BeforeRun[before run: `npm run start:main`]\nElectronStart[run electron main]\n\nend\nend\nend",mdxType:"Mermaid"}))}u.isMDXComponent=!0},11748:(e,t,n)=>{var a={"./locale":89234,"./locale.js":89234};function o(e){var t=r(e);return n(t)}function r(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}o.keys=function(){return Object.keys(a)},o.resolve=r,e.exports=o,o.id=11748}}]);