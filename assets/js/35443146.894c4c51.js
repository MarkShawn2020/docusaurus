"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9214],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),h=r,d=u["".concat(o,".").concat(h)]||u[h]||m[h]||i;return n?a.createElement(d,s(s({ref:t},c),{},{components:n})):a.createElement(d,s({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var p=2;p<i;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},20891:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>h,default:()=>N,frontMatter:()=>u,metadata:()=>d,toc:()=>v});var a=n(3905),r=Object.defineProperty,i=Object.defineProperties,s=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))o.call(t,n)&&c(e,n,t[n]);if(l)for(var n of l(t))p.call(t,n)&&c(e,n,t[n]);return e};const u={},h="centos init manual",d={unversionedId:"OS/Linux/centos-init-manual",id:"version-0.16.0/OS/Linux/centos-init-manual",title:"centos init manual",description:"- shell relative",source:"@site/versioned_docs/version-0.16.0/OS/Linux/centos-init-manual.md",sourceDirName:"OS/Linux",slug:"/OS/Linux/centos-init-manual",permalink:"/keeps-learning/docs/0.16.0/OS/Linux/centos-init-manual",draft:!1,editUrl:"https://github.com/markshawn2020/keeps-learning/edit/master/docs/OS/Linux/centos-init-manual.md",tags:[],version:"0.16.0",lastUpdatedAt:1658910797,formattedLastUpdatedAt:"2022\u5e747\u670827\u65e5",frontMatter:{},sidebar:"docs",previous:{title:"\u4e00\u79cd\u57fa\u4e8e\u81ea\u52a8\u5316\u6574\u7406\u5fae\u4fe1\u670b\u53cb\u5708\u7684\u89e3\u51b3\u65b9\u6848",permalink:"/keeps-learning/docs/0.16.0/Notes/wechat-moments-dump"},next:{title:"depreciated linux bugfix",permalink:"/keeps-learning/docs/0.16.0/OS/Linux/depreciated/depreciated-linux-bugfix"}},k={},v=[{value:"shell relative",id:"shell-relative",level:2},{value:"enable navigation between history commands using arrows",id:"enable-navigation-between-history-commands-using-arrows",level:3},{value:"vim relative",id:"vim-relative",level:2},{value:"show chinese",id:"show-chinese",level:3},{value:"user relative",id:"user-relative",level:2},{value:"list users",id:"list-users",level:3},{value:"create user",id:"create-user",level:3},{value:"check user permission",id:"check-user-permission",level:3},{value:"ssh relative",id:"ssh-relative",level:2},{value:"enable ssh password authentication",id:"enable-ssh-password-authentication",level:3},{value:"ssh login via PRIVATE KEY",id:"ssh-login-via-private-key",level:3},{value:"python relative",id:"python-relative",level:2},{value:"set mirror",id:"set-mirror",level:3},{value:"install python",id:"install-python",level:3},{value:"check python",id:"check-python",level:3},{value:"use virtualenv",id:"use-virtualenv",level:3},{value:"run project",id:"run-project",level:3},{value:"npm relative",id:"npm-relative",level:2},{value:"use npm",id:"use-npm",level:3},{value:"use pm2",id:"use-pm2",level:3}],f={toc:v};function N(e){var t,n=e,{components:r}=n,c=((e,t)=>{var n={};for(var a in e)o.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&l)for(var a of l(e))t.indexOf(a)<0&&p.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=m(m({},f),c),i(t,s({components:r,mdxType:"MDXLayout"}))),(0,a.kt)("h1",m({},{id:"centos-init-manual"}),"centos init manual"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"#shell-relative"}),"shell relative"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"#enable-navigation-between-history-commands-using-arrows"}),"enable navigation between history commands using arrows")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"#vim-relative"}),"vim relative"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"#show-chinese"}),"show chinese")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"#user-relative"}),"user relative"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"#list-users"}),"list users")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"#create-user"}),"create user")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"#check-user-permission"}),"check user permission")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"#ssh-relative"}),"ssh relative"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"#enable-ssh-password-authentication"}),"enable ssh password authentication")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"#ssh-login-via-private-key"}),"ssh login via PRIVATE KEY")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"#python-relative"}),"python relative"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"#set-mirror"}),"set mirror")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"#install-python"}),"install python")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"#check-python"}),"check python")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"#use-virtualenv"}),"use virtualenv")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"#run-project"}),"run project")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"#npm-relative"}),"npm relative"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"#use-npm"}),"use npm")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"#use-pm2"}),"use pm2"))))),(0,a.kt)("h2",m({},{id:"shell-relative"}),"shell relative"),(0,a.kt)("h3",m({},{id:"enable-navigation-between-history-commands-using-arrows"}),"enable navigation between history commands using arrows"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-sh"}),'# `\\e[A` is for arrow-up, and `\\e[B` is for arrow-down\necho \'"\\e[A": history-search-backward\n"\\e[B": history-search-forward\' >> ~/.inputrc\n\n# reload inputrc\nbind -f ~/.inputrc\n')),(0,a.kt)("h2",m({},{id:"vim-relative"}),"vim relative"),(0,a.kt)("h3",m({},{id:"show-chinese"}),"show chinese"),(0,a.kt)("p",null,"modify ",(0,a.kt)("inlineCode",{parentName:"p"},"~/.vimrc"),(0,a.kt)("sup",m({parentName:"p"},{id:"fnref-vim:show-chinese-characters"}),(0,a.kt)("a",m({parentName:"sup"},{href:"#fn-vim:show-chinese-characters",className:"footnote-ref"}),"vim:show-chinese-characters"))),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-vim"}),"set encoding=utf-8\nset termencoding=utf-8\n\nset fileencodings=ucs-bom,utf-8,cp936,gb18030,big5,euc-jp,euc-kr\nset fileencoding=utf-8\n")),(0,a.kt)("h2",m({},{id:"user-relative"}),"user relative"),(0,a.kt)("h3",m({},{id:"list-users"}),"list users"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-sh"}),"less /etc/passwd\n")),(0,a.kt)("h3",m({},{id:"create-user"}),"create user"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-sh"}),"USER=mark\nPSWD=123456\n\n# \u521b\u5efauser\nuseradd $USER\n# \u4fee\u6539user\u7684\u5bc6\u7801    \npasswd $USER  \n# \u52a0\u5165wheel\u7ec4, todo: \u8fd9\u662f\u5565\uff0c\u6709\u5565\u7528\nusermod -a -G wheel,root $USER\n")),(0,a.kt)("h3",m({},{id:"check-user-permission"}),"check user permission"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"/etc/passwd"),"\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",m({parentName:"p"},{src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/centos-init-manual-1657604306878-93a30702844ba37b1e3f160d49a89acfc3ca464e1eaa685a186c7241955dc821.png",alt:"picture 1"})),"  "),(0,a.kt)("p",null,"\u770b\u6700\u540e\u4e00\u884cmark\uff0c\u5176\u4e2d\u6211\u4eec\u8981\u5173\u6ce8\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u7b2c\u4e00\u4e2amark\u5c31\u662f\u7528\u6237\u540d\uff0c\u8fd9\u4e2a\u4e0d\u5fc5\u591a\u8bf4"),(0,a.kt)("li",{parentName:"ol"},"\u7b2c\u4e8c\u4e2amark\u6211\u4e5f\u4e0d\u77e5\u9053\u662f\u5565\u610f\u601d"),(0,a.kt)("li",{parentName:"ol"},"\u7b2c\u4e09\u4e2amark\uff0c\u662f\u7528\u6237\u7684\u6587\u4ef6\u5939\uff0c\u9ed8\u8ba4\u662f",(0,a.kt)("inlineCode",{parentName:"li"},"/hom/$USER"),"\uff0c\u4f46\u662f\u6211\u6539\u6210\u4e86\u6839\u76ee\u5f55\uff08\u9700\u8981\u624b\u52a8\u521b\u5efa\u6587\u4ef6\u5939\uff09"),(0,a.kt)("li",{parentName:"ol"},"9\u662fid\uff0c\u5982\u679c\u6211\u6539\u6210\u4e860\uff0c\u90a3\u4e48\u6211\u7528root\u8eab\u4efd\u767b\u5f55\u7684\u65f6\u5019\u5c31\u4f1a\u53d8\u6210mark\uff08\u8986\u76d6\uff09\u4e86\uff0c\u6240\u4ee5\u8981\u7528\u4e00\u4e2a\u548c\u524d\u9762\u90fd\u4e0d\u540c\u7684\u6570\u5b57"),(0,a.kt)("li",{parentName:"ol"},"0\u5927\u6982\u662f\u6743\u9650\u7ea7\u522b\u6216\u8005\u8fdb\u7a0b\u7ea7\u522b\u5427\uff1f\u6211\u4e5f\u4e0d\u592a\u6e05\u695a\uff0c\u4fdd\u6301\u548croot\u4e00\u6837\u4e3a0\u5373\u53ef"),(0,a.kt)("li",{parentName:"ol"},"\u5176\u4ed6\u4fdd\u6301\u9ed8\u8ba4")),(0,a.kt)("h2",m({},{id:"ssh-relative"}),"ssh relative"),(0,a.kt)("h3",m({},{id:"enable-ssh-password-authentication"}),"enable ssh password authentication"),(0,a.kt)("p",null,"enable ssh password authentication",(0,a.kt)("sup",m({parentName:"p"},{id:"fnref-enable-ssh-password-authentication"}),(0,a.kt)("a",m({parentName:"sup"},{href:"#fn-enable-ssh-password-authentication",className:"footnote-ref"}),"enable-ssh-password-authentication")),", otherwise we cannot simply login using password"),(0,a.kt)("p",null,"!!! tip\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"0,/xxx")," is for sed to replace the first occurrence",(0,a.kt)("sup",m({parentName:"p"},{id:"fnref-sed-replace-first-occurrence"}),(0,a.kt)("a",m({parentName:"sup"},{href:"#fn-sed-replace-first-occurrence",className:"footnote-ref"}),"sed-replace-first-occurrence")),", and the ",(0,a.kt)("inlineCode",{parentName:"p"},"s//")," is for reusing the previous identifier"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-sh"}),"# enable ssh password authentication option in config\nsudo sed -i '0,/PasswordAuthentication\\s\\+no/s//PasswordAuthentication yes/' /etc/ssh/sshd_config\n\n# restart ssh (`service` is indeed redirected to `/bin/systemctl`)\nservice sshd restart\n")),(0,a.kt)("h3",m({},{id:"ssh-login-via-private-key"}),"ssh login via PRIVATE KEY"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-sh"}),"SSH_KEY_FILE=~/.ssh/luci2\nUSER=root\nIP=47.97.2.207\n")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5c06\u79d8\u94a5\u6587\u4ef6\u5b58\u653e\u4e8e\u5ba2\u6237\u673a",(0,a.kt)("inlineCode",{parentName:"li"},"~/.ssh/"),"\u4e0b"),(0,a.kt)("li",{parentName:"ol"},"\u4fee\u6539\u79d8\u94a5\u6587\u4ef6\u7684\u8bfb\u5199\u6743\u9650\uff0c\u4e0d\u80fd\u592a\u5f00\u653e\u5426\u5219ssh\u4f1a\u88ab\u62d2\u7edd\uff0c\u8fd9\u91cc\u76f4\u63a5\u7ed9\u4e00\u4e2a\u8bfb\u6743\u9650\u5373\u53ef\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"chmod 400 $SSH_KEY_FILE")),(0,a.kt)("li",{parentName:"ol"},"\u6307\u5b9a\u79d8\u94a5\u6587\u4ef6\u8fdb\u884c\u767b\u5f55\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"ssh $USER@$IP -i $SSH_KEY_FILE"))),(0,a.kt)("h2",m({},{id:"python-relative"}),"python relative"),(0,a.kt)("h3",m({},{id:"set-mirror"}),"set mirror"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-sh"}),"# check pip3\nwhich pip3\n\n# set pip3 (>=10.0), ref: https://mirrors.tuna.tsinghua.edu.cn/help/pypi/\npip3 config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple\n")),(0,a.kt)("h3",m({},{id:"install-python"}),"install python"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-sh"}),'# config\nPY_VERSION="3.9.0"\nPY_FILENAME=Python-$PY_VERSION.tgz\n\n# official url\nPY_URL=https://www.python.org/ftp/python/$PY_VERSION/$PY_FILENAME\n# domestic url\nPY_URL=https://registry.npmmirror.com/-/binary/python/$PY_VERSION/$PY_FILENAME\n\n# download\nwget $PY_URL\ntar zxvf $PY_FILENAME\ncd $PY_FILENAME\n./configure --enable-optimizations\nsudo make altinstall\n')),(0,a.kt)("h3",m({},{id:"check-python"}),"check python"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-sh"}),"# show version\npython3.9 -V\n\n# upgrade pip\npip3.9 install -U pip\n")),(0,a.kt)("h3",m({},{id:"use-virtualenv"}),"use virtualenv"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-sh"}),"# install\npip3.9 install virtualenv\n\n# create\nvirtualenv venv\n\n# activate\nsource venv/bin/activate\n")),(0,a.kt)("h3",m({},{id:"run-project"}),"run project"),(0,a.kt)("p",null,"!!! question\n",(0,a.kt)("inlineCode",{parentName:"p"},"mitmdump"),"\u76f8\u8f83\u4e8e",(0,a.kt)("inlineCode",{parentName:"p"},"mitmproxy"),"\u65e2\u53ef\u4ee5\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},'--set intercept="XXX"'),"\u7684\u5f62\u5f0f\uff0c\u4e5f\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"XXX"),"\uff0c\u66f4\u52a0\u65b9\u4fbf\u4e00\u4e9b\uff0c\u4e0d\u77e5\u9053",(0,a.kt)("inlineCode",{parentName:"p"},"mitmproxy"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"mitmdump"),"\u4e3a\u4ec0\u4e48\u4f1a\u6709\u8fd9\u6837\u4e0d\u4e00\u81f4\u7684api\u8868\u73b0\uff1b"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{}),"TODO: `mitmproxy`\u7684api\u4e3a\u5565\u4e0d\u80fd\u8bbe\u8ba1\u7684\u50cf`mitmdump`\u90a3\u6837\u66f4\u52a0\u53cb\u597d\n")),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-sh"}),'# install dependencies\npip install -r requirements.txt\n\n# run via mitmproxy\nmitmproxy -s src/main.py -p 8899 --set block_global=false --set intercept=\'~u "beijing.gov.cn"\'\n\n# run via mitmdump\nmitmdump -s src/main.py -p 8899 --set block_global=false ~u "beijing.gov.cn"\n\n# run via pm2\npm2 start jb.sh\n')),(0,a.kt)("h2",m({},{id:"npm-relative"}),"npm relative"),(0,a.kt)("h3",m({},{id:"use-npm"}),"use npm"),(0,a.kt)("p",null,"!!!warning "),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{}),"1. \u5343\u4e07\u4e0d\u8981\u7528 `sudo yum` \u53bb\u88c5 `npm` \u76f8\u5173\u7684\u4e1c\u897f\uff0c\u5426\u5219\u540e\u7eed\u5c06\u4f1a\u5bfc\u81f4\u8fde\u9501\u7684\u6743\u9650\u95ee\u9898\uff0c\u76f4\u63a5\u7528`yum`\u5c31\u53ef\u4ee5\u4e86\uff01\n2. \u5728\u5b89\u88c5\u5168\u5c40\u5305\u65f6\uff0c\u8981\u7528root\u7528\u6237\u8eab\u4efd\u88c5\uff0c\u5426\u5219\u4f1a\u6709\u5404\u79cd\u6743\u9650\u95ee\u9898\uff01\n")),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-sh"}),"# npm\u9700\u8981\u7528root\u8eab\u4efd\u53bb\u5b89\u88c5\uff01\u5f88\u91cd\u8981 (change back: `su mark`)\nsudo -i\n\n# \u5b83\u4f1a\u8fde\u5e26\u5b89\u88c5`nodejs`\uff0c\u56e0\u4e3anodejs(11M)\u662fnpm(40M)\u7684\u4f9d\u8d56\nyum install npm\n\n# \u88c5\u4e00\u4e0b\u54b1\u4e2d\u56fd\u4eba\u6700\u9002\u5408\u7528\u7684\u955c\u50cf\u6e90\uff08\u6839\u636e\u7ecf\u9a8c\uff0c\u6709\u4e9b\u56fd\u5916\u7684\u5e93\u7531\u4e8e\u5199\u6b7b\u4e86\u5305\u5730\u5740\u62fc\u63a5\u65b9\u6cd5\uff0c\u5c06\u5bfc\u81f4\u57fa\u4e8e\u975e\u5b98\u65b9`registry`\u914d\u7f6e\u7684\u9879\u76ee\u521d\u59cb\u5316\u5931\u8d25\uff0c\u8fd9\u4e2a\u9700\u8981\u6ce8\u610f\uff0c\u90a3\u79cd\u60c5\u51b5\u4e0b\uff0c\u6700\u597d\u7684\u529e\u6cd5\u662f\u5f00vpn\uff0c\u7136\u540e\u7528\u5b98\u65b9registry\nnpm i -g mirror-config-china --registry=https://registry.npm.taobao.org\n\n# check npm config, pay attention to the `registry` especially\nnpm config list\n")),(0,a.kt)("h3",m({},{id:"use-pm2"}),"use pm2"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-sh"}),"npm i -g pm2\n\n# check pm2 services\npm2 list\n\n# clear all the logs\npm2 flush\n\n# start pm2 service, once started, we can use `pm2 start 0` later\npm2 start jb.sh\n\n# restart pm2 service\n- pm2 restart jb.sh\n- pm2 restart 0\n\n# stop pm2 service\n- pm2 stop jb.sh\n- pm2 stop 0\n\n# stop and flush\npm2 stop 0 && pm2 flush\n\n# restart and flush and log, todo: flush specific pm2 service\npm2 stop 0 && pm2 flush && pm2 start 0 && pm2 log 0\n")),(0,a.kt)("p",null,(0,a.kt)("img",m({parentName:"p"},{src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/centos-init-manual-1657617206731-e7ad64fae20714de8fda3704522dfb571da30afd95b555dd8eec994246cabc5b.png",alt:"picture 2"})),"  "),(0,a.kt)("p",null,(0,a.kt)("img",m({parentName:"p"},{src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/centos-init-manual-1657617228043-2c2ab3c61d536393fe9a2d3477120b8c50c8508945d0086eeebd5e7a524cd1ed.png",alt:"picture 3"}))),(0,a.kt)("div",m({},{className:"footnotes"}),(0,a.kt)("hr",{parentName:"div"}),(0,a.kt)("ol",{parentName:"div"},(0,a.kt)("li",m({parentName:"ol"},{id:"fn-vim:show-chinese-characters"}),(0,a.kt)("a",m({parentName:"li"},{href:"https://blog.csdn.net/shujianhenu/article/details/46537651"}),"\u8bbe\u7f6evim\u663e\u793a\u4e2d\u6587_\u6854\u5b50\u4e0e\u53f6\u5b50\u7684\u535a\u5ba2-CSDN\u535a\u5ba2_vim \u8bbe\u7f6e\u4e2d\u6587"),(0,a.kt)("a",m({parentName:"li"},{href:"#fnref-vim:show-chinese-characters",className:"footnote-backref"}),"\u21a9")),(0,a.kt)("li",m({parentName:"ol"},{id:"fn-enable-ssh-password-authentication"}),(0,a.kt)("a",m({parentName:"li"},{href:"https://serverpilot.io/docs/how-to-enable-ssh-password-authentication/"}),"https://serverpilot.io/docs/how-to-enable-ssh-password-authentication/")," ",(0,a.kt)("a",m({parentName:"li"},{href:"#fnref-enable-ssh-password-authentication",className:"footnote-backref"}),"\u21a9")),(0,a.kt)("li",m({parentName:"ol"},{id:"fn-sed-replace-first-occurrence"}),(0,a.kt)("a",m({parentName:"li"},{href:"https://stackoverflow.com/a/9453461/9422455"}),"https://stackoverflow.com/a/9453461/9422455"),(0,a.kt)("a",m({parentName:"li"},{href:"#fnref-sed-replace-first-occurrence",className:"footnote-backref"}),"\u21a9")))))}N.isMDXComponent=!0}}]);