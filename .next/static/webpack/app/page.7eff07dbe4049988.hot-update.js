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

/***/ "(app-pages-browser)/./app/globals.css":
/*!*************************!*\
  !*** ./app/globals.css ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"7dc1ff70225a\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2dsb2JhbHMuY3NzPzkxYTYiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCI3ZGMxZmY3MDIyNWFcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./components/HeroSection/herosection.jsx":
/*!************************************************!*\
  !*** ./components/HeroSection/herosection.jsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hero_modules_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hero.modules.css */ \"(app-pages-browser)/./components/HeroSection/hero.modules.css\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst HeroSection = (props)=>{\n    _s();\n    console.log(\"jjjjjjjj------\", typeof props.onFeaturesButtonClick);\n    console.log(\"kkkkk------\", typeof props.onPartnersButtonClick);\n    console.log(\"llllll------\", typeof props.onToggleButton2Click);\n    const [isRTL, setIsRTL] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isSwitchOn, setIsSwitchOn] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [isChecked, setIsChecked] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const toggleDirection = ()=>{\n        setIsChecked(!isChecked);\n        props.toggleDirection();\n    };\n    const handleToggle = ()=>{\n        // Toggle the state\n        setIsSwitchOn(!isSwitchOn);\n        // Call the function from props to handle the toggle\n        props.onToggleButton2Click();\n    };\n    const toggleRTL = ()=>{\n        setIsRTL(!isRTL);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"herosectionMainContainer  flex flex-col justify-center items-center bg-black bg-opacity-80 text-white text-center gap-14 lg:gap-10\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"herosectionHeadingContainer flex flex-col items-center gap-2.5 pt-20\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"herosectionHeading text-center text-4xl xs:text-5xl font-normal text-var-Light-text  sm:text-7xl xs:leading-[55px] md:leading-[84px] whitespace-pre-line\",\n                        children: [\n                            \"The Best Product\",\n                            \"\\n\",\n                            \"Starts With Figma\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/jahanzaib/gitproject/Figma-2-in-Next.Js-1/components/HeroSection/herosection.jsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"herosectionParagraph text-var-Light-text text-xl xs:text-[28px] text-center font-normal leading-10 md:leading-8 pt-5\",\n                        children: \"Most calendars are designed for teams. Slate is designed for freelancers\"\n                    }, void 0, false, {\n                        fileName: \"/home/jahanzaib/gitproject/Figma-2-in-Next.Js-1/components/HeroSection/herosection.jsx\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/jahanzaib/gitproject/Figma-2-in-Next.Js-1/components/HeroSection/herosection.jsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"herosection-btn-container flex flex-col items-center gap-2.5 pt-5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"herosection-btn text-var-Light-text text-center text-xl font-normal leading-5 rounded-full bg-primary py-2 px-4 xs:px-9 xs:py-4\",\n                        onClick: ()=>props.onFeaturesButtonClick(),\n                        children: \"Show/Hide Features\"\n                    }, void 0, false, {\n                        fileName: \"/home/jahanzaib/gitproject/Figma-2-in-Next.Js-1/components/HeroSection/herosection.jsx\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"herosection-btn text-var-Light-text text-center font-[actor] text-xl font-normal leading-5 rounded-full bg-primary py-2 px-4 xs:px-9 xs:py-4\",\n                        onClick: ()=>props.onPartnersButtonClick(),\n                        children: \"Show/Hide Partners\"\n                    }, void 0, false, {\n                        fileName: \"/home/jahanzaib/gitproject/Figma-2-in-Next.Js-1/components/HeroSection/herosection.jsx\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"herosectionToggelHeading flex items-center gap-2 \",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            className: \"switch rtl:left rtl:bg-primary rtl:rounded-3xl \".concat(isChecked ? \"checked\" : \"\"),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"checkbox\",\n                                    checked: isChecked,\n                                    onChange: toggleDirection,\n                                    className: \"rtl:left rtl:bg-primary\"\n                                }, void 0, false, {\n                                    fileName: \"/home/jahanzaib/gitproject/Figma-2-in-Next.Js-1/components/HeroSection/herosection.jsx\",\n                                    lineNumber: 53,\n                                    columnNumber: 9\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"slider round rtl:left rtl:bg-primary\"\n                                }, void 0, false, {\n                                    fileName: \"/home/jahanzaib/gitproject/Figma-2-in-Next.Js-1/components/HeroSection/herosection.jsx\",\n                                    lineNumber: 59,\n                                    columnNumber: 9\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/jahanzaib/gitproject/Figma-2-in-Next.Js-1/components/HeroSection/herosection.jsx\",\n                            lineNumber: 52,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/jahanzaib/gitproject/Figma-2-in-Next.Js-1/components/HeroSection/herosection.jsx\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \" text-white ext-base font-normal leading-6\",\n                        children: \"RTL\"\n                    }, void 0, false, {\n                        fileName: \"/home/jahanzaib/gitproject/Figma-2-in-Next.Js-1/components/HeroSection/herosection.jsx\",\n                        lineNumber: 63,\n                        columnNumber: 3\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"herosectionToggelHeading flex items-center gap-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"HerosectionToggelBtn2\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    className: \"switch\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"checkbox\",\n                                            onClick: handleToggle,\n                                            checked: isSwitchOn\n                                        }, void 0, false, {\n                                            fileName: \"/home/jahanzaib/gitproject/Figma-2-in-Next.Js-1/components/HeroSection/herosection.jsx\",\n                                            lineNumber: 70,\n                                            columnNumber: 13\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"slider round\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/jahanzaib/gitproject/Figma-2-in-Next.Js-1/components/HeroSection/herosection.jsx\",\n                                            lineNumber: 75,\n                                            columnNumber: 13\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/jahanzaib/gitproject/Figma-2-in-Next.Js-1/components/HeroSection/herosection.jsx\",\n                                    lineNumber: 69,\n                                    columnNumber: 10\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/home/jahanzaib/gitproject/Figma-2-in-Next.Js-1/components/HeroSection/herosection.jsx\",\n                                lineNumber: 68,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-white text-base font-normal leading-6\",\n                                children: \"Show Both\"\n                            }, void 0, false, {\n                                fileName: \"/home/jahanzaib/gitproject/Figma-2-in-Next.Js-1/components/HeroSection/herosection.jsx\",\n                                lineNumber: 78,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/jahanzaib/gitproject/Figma-2-in-Next.Js-1/components/HeroSection/herosection.jsx\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/jahanzaib/gitproject/Figma-2-in-Next.Js-1/components/HeroSection/herosection.jsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/jahanzaib/gitproject/Figma-2-in-Next.Js-1/components/HeroSection/herosection.jsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, undefined);\n};\n_s(HeroSection, \"0QUM/Mn1hBouACDgyEK5SbZ/oT8=\");\n_c = HeroSection;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HeroSection);\nvar _c;\n$RefreshReg$(_c, \"HeroSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvSGVyb1NlY3Rpb24vaGVyb3NlY3Rpb24uanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDd0M7QUFDQTtBQUd4QyxNQUFNRyxjQUFjLENBQUNDOztJQUNuQkMsUUFBUUMsR0FBRyxDQUFDLGtCQUFpQixPQUFPRixNQUFNRyxxQkFBcUI7SUFDOURGLFFBQVFDLEdBQUcsQ0FBQyxlQUFjLE9BQU9GLE1BQU1JLHFCQUFxQjtJQUN6REgsUUFBUUMsR0FBRyxDQUFDLGdCQUFlLE9BQU9GLE1BQU1LLG9CQUFvQjtJQUNqRSxNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR1YsK0NBQVFBLENBQUM7SUFDbEMsTUFBTSxDQUFDVyxZQUFZQyxjQUFjLEdBQUdaLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ2EsV0FBV0MsYUFBYSxHQUFHZCwrQ0FBUUEsQ0FBQztJQUc3QyxNQUFNZSxrQkFBa0I7UUFDdEJELGFBQWEsQ0FBQ0Q7UUFFYlYsTUFBTVksZUFBZTtJQUN4QjtJQUVBLE1BQU1DLGVBQWU7UUFDbkIsbUJBQW1CO1FBQ25CSixjQUFjLENBQUNEO1FBRWYsb0RBQW9EO1FBQ3BEUixNQUFNSyxvQkFBb0I7SUFDNUI7SUFFQSxNQUFNUyxZQUFZO1FBQ2hCUCxTQUFTLENBQUNEO0lBQ1o7SUFFQSxxQkFDRSw4REFBQ1M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0M7d0JBQUdELFdBQVU7OzRCQUEySjs0QkFDdEo7NEJBQUs7Ozs7Ozs7a0NBRXhCLDhEQUFDRTt3QkFBRUYsV0FBVTtrQ0FBdUg7Ozs7Ozs7Ozs7OzswQkFJdEksOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0c7d0JBQU9ILFdBQVU7d0JBQW1JSSxTQUFTLElBQU1wQixNQUFNRyxxQkFBcUI7a0NBQUs7Ozs7OztrQ0FJcE0sOERBQUNnQjt3QkFBT0gsV0FBVTt3QkFBK0lJLFNBQVMsSUFBTXBCLE1BQU1JLHFCQUFxQjtrQ0FBSTs7Ozs7O2tDQUcvTSw4REFBQ1c7d0JBQUlDLFdBQVU7a0NBQ2IsNEVBQUNLOzRCQUFNTCxXQUFXLGtEQUE2RSxPQUEzQk4sWUFBWSxZQUFZOzs4Q0FDOUYsOERBQUNZO29DQUNDQyxNQUFLO29DQUNMQyxTQUFTZDtvQ0FDVGUsVUFBVWI7b0NBQ1ZJLFdBQVU7Ozs7Ozs4Q0FFWiw4REFBQ1U7b0NBQUtWLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUl0Qiw4REFBQ1c7d0JBQUdYLFdBQVU7a0NBQTZDOzs7Ozs7a0NBSXJELDhEQUFDRDt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNEO2dDQUFJQyxXQUFVOzBDQUNoQiw0RUFBQ0s7b0NBQU1MLFdBQVU7O3NEQUNkLDhEQUFDTTs0Q0FDQ0MsTUFBSzs0Q0FDTEgsU0FBU1A7NENBQ1RXLFNBQVNoQjs7Ozs7O3NEQUVYLDhEQUFDa0I7NENBQUtWLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7OzBDQUdsQiw4REFBQ1c7Z0NBQUdYLFdBQVU7MENBQTZDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRckU7R0FoRk1qQjtLQUFBQTtBQWtGTiwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0hlcm9TZWN0aW9uL2hlcm9zZWN0aW9uLmpzeD8wM2UwIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2hlcm8ubW9kdWxlcy5jc3NcIjtcblxuXG5jb25zdCBIZXJvU2VjdGlvbiA9IChwcm9wcyApID0+IHtcbiAgY29uc29sZS5sb2coXCJqampqampqai0tLS0tLVwiLHR5cGVvZiBwcm9wcy5vbkZlYXR1cmVzQnV0dG9uQ2xpY2spO1xuICAgY29uc29sZS5sb2coXCJra2tray0tLS0tLVwiLHR5cGVvZiBwcm9wcy5vblBhcnRuZXJzQnV0dG9uQ2xpY2spO1xuICAgICAgY29uc29sZS5sb2coXCJsbGxsbGwtLS0tLS1cIix0eXBlb2YgcHJvcHMub25Ub2dnbGVCdXR0b24yQ2xpY2spO1xuIGNvbnN0IFtpc1JUTCwgc2V0SXNSVExdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaXNTd2l0Y2hPbiwgc2V0SXNTd2l0Y2hPbl0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgICBjb25zdCBbaXNDaGVja2VkLCBzZXRJc0NoZWNrZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gXG4gIGNvbnN0IHRvZ2dsZURpcmVjdGlvbiA9ICgpID0+IHtcbiAgICBzZXRJc0NoZWNrZWQoIWlzQ2hlY2tlZCk7XG4gIFxuICAgICBwcm9wcy50b2dnbGVEaXJlY3Rpb24oKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVUb2dnbGUgPSAoKSA9PiB7XG4gICAgLy8gVG9nZ2xlIHRoZSBzdGF0ZVxuICAgIHNldElzU3dpdGNoT24oIWlzU3dpdGNoT24pO1xuXG4gICAgLy8gQ2FsbCB0aGUgZnVuY3Rpb24gZnJvbSBwcm9wcyB0byBoYW5kbGUgdGhlIHRvZ2dsZVxuICAgIHByb3BzLm9uVG9nZ2xlQnV0dG9uMkNsaWNrKCk7XG4gIH07XG5cbiAgY29uc3QgdG9nZ2xlUlRMID0gKCkgPT4ge1xuICAgIHNldElzUlRMKCFpc1JUTCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm9zZWN0aW9uTWFpbkNvbnRhaW5lciAgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgYmctYmxhY2sgYmctb3BhY2l0eS04MCB0ZXh0LXdoaXRlIHRleHQtY2VudGVyIGdhcC0xNCBsZzpnYXAtMTBcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVyb3NlY3Rpb25IZWFkaW5nQ29udGFpbmVyIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGdhcC0yLjUgcHQtMjBcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cImhlcm9zZWN0aW9uSGVhZGluZyB0ZXh0LWNlbnRlciB0ZXh0LTR4bCB4czp0ZXh0LTV4bCBmb250LW5vcm1hbCB0ZXh0LXZhci1MaWdodC10ZXh0ICBzbTp0ZXh0LTd4bCB4czpsZWFkaW5nLVs1NXB4XSBtZDpsZWFkaW5nLVs4NHB4XSB3aGl0ZXNwYWNlLXByZS1saW5lXCI+XG4gICAgICAgICAgVGhlIEJlc3QgUHJvZHVjdHtcIlxcblwifVN0YXJ0cyBXaXRoIEZpZ21hXG4gICAgICAgIDwvaDE+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImhlcm9zZWN0aW9uUGFyYWdyYXBoIHRleHQtdmFyLUxpZ2h0LXRleHQgdGV4dC14bCB4czp0ZXh0LVsyOHB4XSB0ZXh0LWNlbnRlciBmb250LW5vcm1hbCBsZWFkaW5nLTEwIG1kOmxlYWRpbmctOCBwdC01XCI+XG4gICAgICAgICAgTW9zdCBjYWxlbmRhcnMgYXJlIGRlc2lnbmVkIGZvciB0ZWFtcy4gU2xhdGUgaXMgZGVzaWduZWQgZm9yIGZyZWVsYW5jZXJzXG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvc2VjdGlvbi1idG4tY29udGFpbmVyIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGdhcC0yLjUgcHQtNVwiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImhlcm9zZWN0aW9uLWJ0biB0ZXh0LXZhci1MaWdodC10ZXh0IHRleHQtY2VudGVyIHRleHQteGwgZm9udC1ub3JtYWwgbGVhZGluZy01IHJvdW5kZWQtZnVsbCBiZy1wcmltYXJ5IHB5LTIgcHgtNCB4czpweC05IHhzOnB5LTRcIiAgb25DbGljaz17KCkgPT4gcHJvcHMub25GZWF0dXJlc0J1dHRvbkNsaWNrKCl9ID5cbiAgICAgICBTaG93L0hpZGUgRmVhdHVyZXMgXG4gICAgICAgICBcbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiaGVyb3NlY3Rpb24tYnRuIHRleHQtdmFyLUxpZ2h0LXRleHQgdGV4dC1jZW50ZXIgZm9udC1bYWN0b3JdIHRleHQteGwgZm9udC1ub3JtYWwgbGVhZGluZy01IHJvdW5kZWQtZnVsbCBiZy1wcmltYXJ5IHB5LTIgcHgtNCB4czpweC05IHhzOnB5LTRcIiBvbkNsaWNrPXsoKSA9PiBwcm9wcy5vblBhcnRuZXJzQnV0dG9uQ2xpY2soKX0+XG4gICAgICAgICAgU2hvdy9IaWRlIFBhcnRuZXJzXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm9zZWN0aW9uVG9nZ2VsSGVhZGluZyBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBcIj5cbiAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtgc3dpdGNoIHJ0bDpsZWZ0IHJ0bDpiZy1wcmltYXJ5IHJ0bDpyb3VuZGVkLTN4bCAke2lzQ2hlY2tlZCA/ICdjaGVja2VkJyA6ICcnfWB9PlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgIGNoZWNrZWQ9e2lzQ2hlY2tlZH1cbiAgICAgICAgICBvbkNoYW5nZT17dG9nZ2xlRGlyZWN0aW9ufVxuICAgICAgICAgIGNsYXNzTmFtZT1cInJ0bDpsZWZ0IHJ0bDpiZy1wcmltYXJ5XCJcbiAgICAgICAgLz5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2xpZGVyIHJvdW5kIHJ0bDpsZWZ0IHJ0bDpiZy1wcmltYXJ5XCI+PC9zcGFuPlxuICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8L2Rpdj5cbiBcbiAgPGgyIGNsYXNzTmFtZT1cIiB0ZXh0LXdoaXRlIGV4dC1iYXNlIGZvbnQtbm9ybWFsIGxlYWRpbmctNlwiPlxuICAgIFJUTFxuICA8L2gyPlxuICAgICAgICBcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvc2VjdGlvblRvZ2dlbEhlYWRpbmcgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkhlcm9zZWN0aW9uVG9nZ2VsQnRuMlwiICA+XG4gICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwic3dpdGNoXCI+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlVG9nZ2xlfVxuICAgICAgICAgICAgICBjaGVja2VkPXtpc1N3aXRjaE9ufVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNsaWRlciByb3VuZFwiPjwvc3Bhbj5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgIDwvZGl2PlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRleHQtYmFzZSBmb250LW5vcm1hbCBsZWFkaW5nLTZcIj5cbiAgICAgICAgICAgIFNob3cgQm90aFxuICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZXJvU2VjdGlvbjsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInN0eWxlcyIsIkhlcm9TZWN0aW9uIiwicHJvcHMiLCJjb25zb2xlIiwibG9nIiwib25GZWF0dXJlc0J1dHRvbkNsaWNrIiwib25QYXJ0bmVyc0J1dHRvbkNsaWNrIiwib25Ub2dnbGVCdXR0b24yQ2xpY2siLCJpc1JUTCIsInNldElzUlRMIiwiaXNTd2l0Y2hPbiIsInNldElzU3dpdGNoT24iLCJpc0NoZWNrZWQiLCJzZXRJc0NoZWNrZWQiLCJ0b2dnbGVEaXJlY3Rpb24iLCJoYW5kbGVUb2dnbGUiLCJ0b2dnbGVSVEwiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsInAiLCJidXR0b24iLCJvbkNsaWNrIiwibGFiZWwiLCJpbnB1dCIsInR5cGUiLCJjaGVja2VkIiwib25DaGFuZ2UiLCJzcGFuIiwiaDIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/HeroSection/herosection.jsx\n"));

/***/ })

});