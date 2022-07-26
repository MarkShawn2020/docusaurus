/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.tsx":
/*!*******************!*\
  !*** ./index.tsx ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nconsole.log(\"hello\");\nfunction main() {\n    return __awaiter(this, void 0, void 0, function () {\n        var url;\n        return __generator(this, function (_a) {\n            url = \"https://www.thss.tsinghua.edu.cn/\";\n            // const url = \"https://www.google.com/search?q=你好\"\n            console.log(\"start FM_xmlhttpRequest to url: \", url);\n            GM_xmlhttpRequest({\n                method: \"GET\",\n                url: url,\n                onload: function (response) {\n                    var s = response.responseText;\n                    console.log(\"response text: \", s);\n                    // console.log(\"response xml: \", response.responseXML);\n                    // solution 1. partially useful\n                    document.querySelector('html').innerHTML = response.responseText;\n                    // solution 2. not useful\n                    // document.open('text/html')\n                    // document.write(s)\n                    // document.close()\n                    // solution 3. partially wonderful, for sogou! ref: https://qr.ae/pvPbV5\n                    // document.body.parentElement.innerHTML = s\n                    // solution 4.\n                    document.querySelector('html').innerHTML = s;\n                    console.log(\"new document: \", document.textContent);\n                }\n            });\n            console.log(\"end\");\n            return [2 /*return*/];\n        });\n    });\n}\nmain();\nfunction showIFrames() {\n    var eleBody = document.querySelector(\"body\");\n    var eleSuperWin = document.createElement(\"div\");\n    eleBody.replaceChildren(eleSuperWin);\n    // eleSuperWin.style\n    // insert an element as parent, ref:  https://stackoverflow.com/a/6938316/9422455\n    // const eleWinFather = eleWin.parentNode;\n    Object.assign(eleSuperWin.style, {\n        display: \"flex\",\n        flexDirection: \"row\",\n        justifyContent: \"space-around\",\n        flexWrap: \"wrap\",\n        width: \"100vw\",\n        height: \"100vh\"\n    });\n    // eleSuperWin.insertAdjacentElement(\"afterbegin\", eleWin)\n    // eleWinFather.replaceChild(eleSuperWin, eleWin)\n    var urls = [\"https://www.google.com/search?igu=1&q=你好\", \"https://www.huaban.com\", 'https://www.meituan.com', 'https://www.taobao.com'];\n    urls.forEach(function (url_) {\n        console.log(\"url: \", url_);\n        var eleIframe = document.createElement(\"iframe\");\n        eleIframe.src = url_;\n        eleIframe.height = \"50%\";\n        eleIframe.width = \"50%\";\n        eleIframe.style.borderWidth = \"0\";\n        eleSuperWin.insertAdjacentElement(\"beforeend\", eleIframe);\n    });\n}\n\n\n\n//# sourceURL=webpack:///./index.tsx?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./index.tsx"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;