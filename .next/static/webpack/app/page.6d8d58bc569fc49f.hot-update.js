"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/HeroSection/herosection.jsx":
/*!************************************************!*\
  !*** ./components/HeroSection/herosection.jsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hero_modules_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hero.modules.css */ \"(app-pages-browser)/./components/HeroSection/hero.modules.css\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst HeroSection = ()=>{\n    _s();\n    // Initialize the toggle state\n    const [isRTL, setIsRTL] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    // Function to toggle RTL\n    const toggleRTL = ()=>{\n        setIsRTL(!isRTL);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"herosectionMainContainer h-[800px] w-full flex flex-col justify-center items-center bg-black bg-opacity-80 text-white text-center gap-14 lg:gap-10 \".concat(isRTL ? \"rtl\" : \"\"),\n        dir: isRTL ? \"rtl\" : \"ltr\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"herosectionHeadingContainer flex flex-col items-center gap-2.5 pt-20\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"herosectionHeading text-center w-4/5 text-4xl md:text-5xl font-normal xs:leading-[55px] tracking-[0.2px] text-var-Light-text font-[actor] lg:text-6xl md:leading-20 whitespace-pre-line \".concat(isRTL ? \"text-right\" : \"\"),\n                        children: [\n                            \"The Best Product\",\n                            \"\\n\",\n                            \"Starts With Figma\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/jahanzaib/Figma-2/Figma-2-in-Next.Js/components/HeroSection/herosection.jsx\",\n                        lineNumber: 17,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"herosectionParagraph w-4/5 text-var-Light-text text-center font-[actor] text-xl font-normal leading-8 tracking-[0.2px] pt-5\",\n                        children: \"Most calendars are designed for teams. Slate is designed for freelancers\"\n                    }, void 0, false, {\n                        fileName: \"/home/jahanzaib/Figma-2/Figma-2-in-Next.Js/components/HeroSection/herosection.jsx\",\n                        lineNumber: 20,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/jahanzaib/Figma-2/Figma-2-in-Next.Js/components/HeroSection/herosection.jsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"herosection-btn-container flex flex-col items-center gap-2.5 pt-5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"herosection-btn text-var-Light-text text-center font-[actor] text-xl font-normal leading-5 tracking-[0.2px] rounded-full bg-primary w-60 py-4\",\n                        children: \"Show/Hide Features\"\n                    }, void 0, false, {\n                        fileName: \"/home/jahanzaib/Figma-2/Figma-2-in-Next.Js/components/HeroSection/herosection.jsx\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"herosection-btn text-var-Light-text text-center font-[actor] text-xl font-normal leading-5 tracking-[0.2px] rounded-full bg-primary w-60 py-4\",\n                        children: \"Show/Hide Partners\"\n                    }, void 0, false, {\n                        fileName: \"/home/jahanzaib/Figma-2/Figma-2-in-Next.Js/components/HeroSection/herosection.jsx\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"herosection-toggel-heading flex items-center gap-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"HerosectionToggelBtn text-white \".concat(isRTL ? \"text-left\" : \"\"),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    className: \"switch\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"checkbox\",\n                                            onClick: toggleRTL\n                                        }, void 0, false, {\n                                            fileName: \"/home/jahanzaib/Figma-2/Figma-2-in-Next.Js/components/HeroSection/herosection.jsx\",\n                                            lineNumber: 34,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"slider round\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/jahanzaib/Figma-2/Figma-2-in-Next.Js/components/HeroSection/herosection.jsx\",\n                                            lineNumber: 35,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/jahanzaib/Figma-2/Figma-2-in-Next.Js/components/HeroSection/herosection.jsx\",\n                                    lineNumber: 33,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/home/jahanzaib/Figma-2/Figma-2-in-Next.Js/components/HeroSection/herosection.jsx\",\n                                lineNumber: 32,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-white \".concat(isRTL ? \"text-left\" : \"\", \" font-[actor] text-xl font-normal leading-6\"),\n                                children: \"Show Both\"\n                            }, void 0, false, {\n                                fileName: \"/home/jahanzaib/Figma-2/Figma-2-in-Next.Js/components/HeroSection/herosection.jsx\",\n                                lineNumber: 38,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/jahanzaib/Figma-2/Figma-2-in-Next.Js/components/HeroSection/herosection.jsx\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/jahanzaib/Figma-2/Figma-2-in-Next.Js/components/HeroSection/herosection.jsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/jahanzaib/Figma-2/Figma-2-in-Next.Js/components/HeroSection/herosection.jsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, undefined);\n};\n_s(HeroSection, \"fdWZWfWK5oKW7gcArejH2uT815A=\");\n_c = HeroSection;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HeroSection);\nvar _c;\n$RefreshReg$(_c, \"HeroSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvSGVyb1NlY3Rpb24vaGVyb3NlY3Rpb24uanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDd0M7QUFDQTtBQUV4QyxNQUFNRyxjQUFjOztJQUNsQiw4QkFBOEI7SUFDOUIsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdKLCtDQUFRQSxDQUFDO0lBRW5DLHlCQUF5QjtJQUN6QixNQUFNSyxZQUFZO1FBQ2hCRCxTQUFTLENBQUNEO0lBQ1o7SUFFQSxxQkFDRSw4REFBQ0c7UUFBSUMsV0FBVyxzSkFBeUssT0FBbkJKLFFBQVEsUUFBUTtRQUFNSyxLQUFLTCxRQUFRLFFBQVE7OzBCQUMvTSw4REFBQ0c7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDRTt3QkFBR0YsV0FBVywyTEFBcU4sT0FBMUJKLFFBQVEsZUFBZTs7NEJBQU07NEJBQ3BOOzRCQUFLOzs7Ozs7O2tDQUV4Qiw4REFBQ087d0JBQUVILFdBQVU7a0NBQThIOzs7Ozs7Ozs7Ozs7MEJBSTdJLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNJO3dCQUFPSixXQUFVO2tDQUFnSjs7Ozs7O2tDQUdsSyw4REFBQ0k7d0JBQU9KLFdBQVU7a0NBQWdKOzs7Ozs7a0NBR2xLLDhEQUFDRDt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNEO2dDQUFJQyxXQUFXLG1DQUE0RCxPQUF6QkosUUFBUSxjQUFjOzBDQUN2RSw0RUFBQ1M7b0NBQU1MLFdBQVU7O3NEQUNmLDhEQUFDTTs0Q0FBTUMsTUFBSzs0Q0FBV0MsU0FBU1Y7Ozs7OztzREFDaEMsOERBQUNXOzRDQUFLVCxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7OzswQ0FHcEIsOERBQUNVO2dDQUFHVixXQUFXLGNBQXVDLE9BQXpCSixRQUFRLGNBQWMsSUFBRzswQ0FBOEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU85RztHQXhDTUQ7S0FBQUE7QUEwQ04sK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZXJvU2VjdGlvbi9oZXJvc2VjdGlvbi5qc3g/MDNlMCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9oZXJvLm1vZHVsZXMuY3NzXCI7XG5cbmNvbnN0IEhlcm9TZWN0aW9uID0gKCkgPT4ge1xuICAvLyBJbml0aWFsaXplIHRoZSB0b2dnbGUgc3RhdGVcbiAgY29uc3QgW2lzUlRMLCBzZXRJc1JUTF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgLy8gRnVuY3Rpb24gdG8gdG9nZ2xlIFJUTFxuICBjb25zdCB0b2dnbGVSVEwgPSAoKSA9PiB7XG4gICAgc2V0SXNSVEwoIWlzUlRMKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtgaGVyb3NlY3Rpb25NYWluQ29udGFpbmVyIGgtWzgwMHB4XSB3LWZ1bGwgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgYmctYmxhY2sgYmctb3BhY2l0eS04MCB0ZXh0LXdoaXRlIHRleHQtY2VudGVyIGdhcC0xNCBsZzpnYXAtMTAgJHtpc1JUTCA/IFwicnRsXCIgOiBcIlwifWB9IGRpcj17aXNSVEwgPyBcInJ0bFwiIDogXCJsdHJcIn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm9zZWN0aW9uSGVhZGluZ0NvbnRhaW5lciBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBnYXAtMi41IHB0LTIwXCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9e2BoZXJvc2VjdGlvbkhlYWRpbmcgdGV4dC1jZW50ZXIgdy00LzUgdGV4dC00eGwgbWQ6dGV4dC01eGwgZm9udC1ub3JtYWwgeHM6bGVhZGluZy1bNTVweF0gdHJhY2tpbmctWzAuMnB4XSB0ZXh0LXZhci1MaWdodC10ZXh0IGZvbnQtW2FjdG9yXSBsZzp0ZXh0LTZ4bCBtZDpsZWFkaW5nLTIwIHdoaXRlc3BhY2UtcHJlLWxpbmUgJHtpc1JUTCA/IFwidGV4dC1yaWdodFwiIDogXCJcIn1gfT5cbiAgICAgICAgICBUaGUgQmVzdCBQcm9kdWN0e1wiXFxuXCJ9U3RhcnRzIFdpdGggRmlnbWFcbiAgICAgICAgPC9oMT5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiaGVyb3NlY3Rpb25QYXJhZ3JhcGggdy00LzUgdGV4dC12YXItTGlnaHQtdGV4dCB0ZXh0LWNlbnRlciBmb250LVthY3Rvcl0gdGV4dC14bCBmb250LW5vcm1hbCBsZWFkaW5nLTggdHJhY2tpbmctWzAuMnB4XSBwdC01XCI+XG4gICAgICAgICAgTW9zdCBjYWxlbmRhcnMgYXJlIGRlc2lnbmVkIGZvciB0ZWFtcy4gU2xhdGUgaXMgZGVzaWduZWQgZm9yIGZyZWVsYW5jZXJzXG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvc2VjdGlvbi1idG4tY29udGFpbmVyIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGdhcC0yLjUgcHQtNVwiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImhlcm9zZWN0aW9uLWJ0biB0ZXh0LXZhci1MaWdodC10ZXh0IHRleHQtY2VudGVyIGZvbnQtW2FjdG9yXSB0ZXh0LXhsIGZvbnQtbm9ybWFsIGxlYWRpbmctNSB0cmFja2luZy1bMC4ycHhdIHJvdW5kZWQtZnVsbCBiZy1wcmltYXJ5IHctNjAgcHktNFwiPlxuICAgICAgICAgIFNob3cvSGlkZSBGZWF0dXJlc1xuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJoZXJvc2VjdGlvbi1idG4gdGV4dC12YXItTGlnaHQtdGV4dCB0ZXh0LWNlbnRlciBmb250LVthY3Rvcl0gdGV4dC14bCBmb250LW5vcm1hbCBsZWFkaW5nLTUgdHJhY2tpbmctWzAuMnB4XSByb3VuZGVkLWZ1bGwgYmctcHJpbWFyeSB3LTYwIHB5LTRcIj5cbiAgICAgICAgICBTaG93L0hpZGUgUGFydG5lcnNcbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVyb3NlY3Rpb24tdG9nZ2VsLWhlYWRpbmcgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YEhlcm9zZWN0aW9uVG9nZ2VsQnRuIHRleHQtd2hpdGUgJHtpc1JUTCA/IFwidGV4dC1sZWZ0XCIgOiBcIlwifWB9PlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInN3aXRjaFwiPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgb25DbGljaz17dG9nZ2xlUlRMfSAvPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzbGlkZXIgcm91bmRcIj48L3NwYW4+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9e2B0ZXh0LXdoaXRlICR7aXNSVEwgPyBcInRleHQtbGVmdFwiIDogXCJcIn0gZm9udC1bYWN0b3JdIHRleHQteGwgZm9udC1ub3JtYWwgbGVhZGluZy02YH0+XG4gICAgICAgICAgICBTaG93IEJvdGhcbiAgICAgICAgICA8L2gyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVyb1NlY3Rpb247XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInN0eWxlcyIsIkhlcm9TZWN0aW9uIiwiaXNSVEwiLCJzZXRJc1JUTCIsInRvZ2dsZVJUTCIsImRpdiIsImNsYXNzTmFtZSIsImRpciIsImgxIiwicCIsImJ1dHRvbiIsImxhYmVsIiwiaW5wdXQiLCJ0eXBlIiwib25DbGljayIsInNwYW4iLCJoMiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/HeroSection/herosection.jsx\n"));

/***/ })

});