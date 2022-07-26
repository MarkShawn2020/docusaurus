"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1772],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},40083:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={},l="cpp howto",i={unversionedId:"coding/CPP/cpp-howto",id:"version-0.16.0/coding/CPP/cpp-howto",title:"cpp howto",description:"1. grammar relative",source:"@site/versioned_docs/version-0.16.0/coding/CPP/cpp-howto.md",sourceDirName:"coding/CPP",slug:"/coding/CPP/cpp-howto",permalink:"/docusaurus/docs/0.16.0/coding/CPP/cpp-howto",draft:!1,editUrl:"https://github.com/markshawn2020/docusaurus/edit/master/docs/coding/CPP/cpp-howto.md",tags:[],version:"0.16.0",lastUpdatedAt:1658816369,formattedLastUpdatedAt:"2022\u5e747\u670826\u65e5",frontMatter:{},sidebar:"docs",previous:{title:"vmware howto",permalink:"/docusaurus/docs/0.16.0/OS/virtual-machine/vmware-howto"},next:{title:"css howto",permalink:"/docusaurus/docs/0.16.0/coding/CSS/css-howto"}},c={},s=[{value:"grammar relative",id:"grammar-relative",level:2},{value:"compare between strings",id:"compare-between-strings",level:3},{value:"what&#39;s <code>stdafx.h</code> (\u9884\u7f16\u8bd1\u5934)",id:"whats-stdafxh-\u9884\u7f16\u8bd1\u5934",level:2},{value:"how to call C++ functions in C",id:"how-to-call-c-functions-in-c",level:2}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"cpp-howto"},"cpp howto"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#grammar-relative"},"grammar relative"),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#compare-between-strings"},"compare between strings")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#optional"},(0,a.kt)("inlineCode",{parentName:"a"},"optional"))))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#whats-stdafxh-%E9%A2%84%E7%BC%96%E8%AF%91%E5%A4%B4"},"what's ",(0,a.kt)("inlineCode",{parentName:"a"},"stdafx.h")," (\u9884\u7f16\u8bd1\u5934)")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#how-to-call-c-functions-in-c"},"how to call C++ functions in C"))),(0,a.kt)("h2",{id:"grammar-relative"},"grammar relative"),(0,a.kt)("h3",{id:"compare-between-strings"},"compare between strings"),(0,a.kt)("p",null,'cpp++ {cmd=true}\nconst auto s1="hello world";\nconst auto s2="hello";'),(0,a.kt)("p",null,"// equal by pointer ?\ns1 == s2"),(0,a.kt)("p",null,"// equal by compare (char by char)\ns1.compare(s2) == 0 // equal\n!s1.compare(s2)     // equal"),(0,a.kt)("p",null,"s1.compare(s2) != 0 // not equal\ns1.compare(s2)      // not equal"),(0,a.kt)("p",null,"// contain\ns1.find(s2) != std::string::npos    // contains\ns1.contains(s2)                     // contains, C++23"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'\nsee:\n\n- [Differences between C++ string == and compare()? - Stack Overflow](https://stackoverflow.com/questions/9158894/differences-between-c-string-and-compare)\n\n- [Comparing two strings in C++ - GeeksforGeeks](https://www.geeksforgeeks.org/comparing-two-strings-cpp/)\n\n### `optional`\n\ncpp++ {cmd}\n#include <string>\n#include <functional>\n#include <iostream>\n#include <optional>\n \n// optional can be used as the return type of a factory that may fail\nstd::optional<std::string> create(bool b) {\n    if (b)\n        return "Godzilla";\n    return {};\n}\n \n// std::nullopt can be used to create any (empty) std::optional\nauto create2(bool b) {\n    return b ? std::optional<std::string>{"Godzilla"} : std::nullopt;\n}\n \n// std::reference_wrapper may be used to return a reference\nauto create_ref(bool b) {\n    static std::string value = "Godzilla";\n    return b ? std::optional<std::reference_wrapper<std::string>>{value}\n             : std::nullopt;\n}\n \nint main()\n{\n    std::cout << "create(false) returned "\n              << create(false).value_or("empty") << \'\\n\';\n \n    // optional-returning factory functions are usable as conditions of while and if\n    if (auto str = create2(true)) {\n        std::cout << "create2(true) returned " << *str << \'\\n\';\n    }\n \n    if (auto str = create_ref(true)) {\n        // using get() to access the reference_wrapper\'s value\n        std::cout << "create_ref(true) returned " << str->get() << \'\\n\';\n        str->get() = "Mothra";\n        std::cout << "modifying it changed it to " << str->get() << \'\\n\';\n    }\n}\n')),(0,a.kt)("p",null,"see:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://en.cppreference.com/w/cpp/utility/optional"},"std::optional - cppreference.com"))),(0,a.kt)("h2",{id:"whats-stdafxh-\u9884\u7f16\u8bd1\u5934"},"what's ",(0,a.kt)("inlineCode",{parentName:"h2"},"stdafx.h")," (\u9884\u7f16\u8bd1\u5934)"),(0,a.kt)("p",null,"ref:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.cnblogs.com/yhjoker/p/8110684.html"},"Visual Studio\u4e2d\u5934\u6587\u4ef6stdafx.h\u7684\u4f5c\u7528 - yhjoker - \u535a\u5ba2\u56ed"))),(0,a.kt)("h2",{id:"how-to-call-c-functions-in-c"},"how to call C++ functions in C"),(0,a.kt)("p",null,"ref:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/2744181/how-to-call-c-function-from-c"},"How to call C++ function from C? - Stack Overflow"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://blog.csdn.net/gatieme/article/details/52730680"},"(23\u6761\u6d88\u606f) C++\u4e0eC\u4e4b\u95f4\u76f8\u4e92\u63a5\u53e3\u548c\u5e93\u51fd\u6570\u8c03\u7528_OSKernelLAB(gatieme)-CSDN\u535a\u5ba2")))))}u.isMDXComponent=!0}}]);