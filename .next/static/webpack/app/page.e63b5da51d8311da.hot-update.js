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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"66d2da98e558\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2dsb2JhbHMuY3NzPzJkN2YiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCI2NmQyZGE5OGU1NThcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./components/HeroSection/herosection.jsx":
/*!************************************************!*\
  !*** ./components/HeroSection/herosection.jsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hero_modules_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hero.modules.css */ \"(app-pages-browser)/./components/HeroSection/hero.modules.css\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst HeroSection = (props)=>{\n    _s();\n    console.log(\"jjjjjjjj------\", typeof props.onFeaturesButtonClick);\n    console.log(\"kkkkk------\", typeof props.onPartnersButtonClick);\n    console.log(\"llllll------\", typeof props.onToggleButton2Click);\n    const [isRTL, setIsRTL] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isSwitchOn, setIsSwitchOn] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const handleToggle = ()=>{\n        // Toggle the state\n        setIsSwitchOn(!isSwitchOn);\n        // Call the function from props to handle the toggle\n        props.onToggleButton2Click();\n    };\n    const toggleRTL = ()=>{\n        setIsRTL(!isRTL);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"herosectionMainContainer  flex flex-col justify-center items-center bg-black bg-opacity-80 text-white text-center gap-14 lg:gap-10\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"herosectionHeadingContainer flex flex-col items-center gap-2.5 pt-20\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"herosectionHeading text-center text-4xl xs:text-5xl font-normal text-var-Light-text  sm:text-7xl xs:leading-[55px] md:leading-[84px] whitespace-pre-line\",\n                        children: [\n                            \"The Best Product\",\n                            \"\\n\",\n                            \"Starts With Figma\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/jahanzaib/Figma-2-in-Next.Js/components/HeroSection/herosection.jsx\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"herosectionParagraph text-var-Light-text text-xl xs:text-[28px] text-center font-normal leading-10 md:leading-8 pt-5\",\n                        children: \"Most calendars are designed for teams. Slate is designed for freelancers\"\n                    }, void 0, false, {\n                        fileName: \"/home/jahanzaib/Figma-2-in-Next.Js/components/HeroSection/herosection.jsx\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/jahanzaib/Figma-2-in-Next.Js/components/HeroSection/herosection.jsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"herosection-btn-container flex flex-col items-center gap-2.5 pt-5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"herosection-btn text-var-Light-text text-center text-xl font-normal leading-5 rounded-full bg-primary py-2 px-4 xs:px-9 xs:py-4\",\n                        onClick: ()=>props.onFeaturesButtonClick(),\n                        children: \"Show/Hide Features\"\n                    }, void 0, false, {\n                        fileName: \"/home/jahanzaib/Figma-2-in-Next.Js/components/HeroSection/herosection.jsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"herosection-btn text-var-Light-text text-center font-[actor] text-xl font-normal leading-5 rounded-full bg-primary py-2 px-4 xs:px-9 xs:py-4\",\n                        onClick: ()=>props.onPartnersButtonClick(),\n                        children: \"Show/Hide Partners\"\n                    }, void 0, false, {\n                        fileName: \"/home/jahanzaib/Figma-2-in-Next.Js/components/HeroSection/herosection.jsx\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"herosectionToggelHeading flex items-center gap-2 \",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"HerosectionToggelBtn1 \",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    className: \"switch\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"checkbox rtl:left\",\n                                            onClick: props.toggleDirection\n                                        }, void 0, false, {\n                                            fileName: \"/home/jahanzaib/Figma-2-in-Next.Js/components/HeroSection/herosection.jsx\",\n                                            lineNumber: 51,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"slider round ltr:bg-gray4600 rtl:bg-primary\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/jahanzaib/Figma-2-in-Next.Js/components/HeroSection/herosection.jsx\",\n                                            lineNumber: 55,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/jahanzaib/Figma-2-in-Next.Js/components/HeroSection/herosection.jsx\",\n                                    lineNumber: 50,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/home/jahanzaib/Figma-2-in-Next.Js/components/HeroSection/herosection.jsx\",\n                                lineNumber: 49,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \" text-white ext-base font-normal leading-6\",\n                                children: \"RTL\"\n                            }, void 0, false, {\n                                fileName: \"/home/jahanzaib/Figma-2-in-Next.Js/components/HeroSection/herosection.jsx\",\n                                lineNumber: 59,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/jahanzaib/Figma-2-in-Next.Js/components/HeroSection/herosection.jsx\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"herosectionToggelHeading flex items-center gap-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"HerosectionToggelBtn2\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    className: \"switch\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"checkbox\",\n                                            onClick: handleToggle,\n                                            checked: isSwitchOn\n                                        }, void 0, false, {\n                                            fileName: \"/home/jahanzaib/Figma-2-in-Next.Js/components/HeroSection/herosection.jsx\",\n                                            lineNumber: 64,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"slider round\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/jahanzaib/Figma-2-in-Next.Js/components/HeroSection/herosection.jsx\",\n                                            lineNumber: 69,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/jahanzaib/Figma-2-in-Next.Js/components/HeroSection/herosection.jsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/home/jahanzaib/Figma-2-in-Next.Js/components/HeroSection/herosection.jsx\",\n                                lineNumber: 62,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-white text-base font-normal leading-6\",\n                                children: \"Show Both\"\n                            }, void 0, false, {\n                                fileName: \"/home/jahanzaib/Figma-2-in-Next.Js/components/HeroSection/herosection.jsx\",\n                                lineNumber: 72,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/jahanzaib/Figma-2-in-Next.Js/components/HeroSection/herosection.jsx\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/jahanzaib/Figma-2-in-Next.Js/components/HeroSection/herosection.jsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/jahanzaib/Figma-2-in-Next.Js/components/HeroSection/herosection.jsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, undefined);\n};\n_s(HeroSection, \"JPNbljHAOEJIWI0//wzny6/MvEM=\");\n_c = HeroSection;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HeroSection);\nvar _c;\n$RefreshReg$(_c, \"HeroSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvSGVyb1NlY3Rpb24vaGVyb3NlY3Rpb24uanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDd0M7QUFDQTtBQUV4QyxNQUFNRyxjQUFjLENBQUNDOztJQUNuQkMsUUFBUUMsR0FBRyxDQUFDLGtCQUFrQixPQUFPRixNQUFNRyxxQkFBcUI7SUFDaEVGLFFBQVFDLEdBQUcsQ0FBQyxlQUFlLE9BQU9GLE1BQU1JLHFCQUFxQjtJQUM3REgsUUFBUUMsR0FBRyxDQUFDLGdCQUFnQixPQUFPRixNQUFNSyxvQkFBb0I7SUFDN0QsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdWLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ1csWUFBWUMsY0FBYyxHQUFHWiwrQ0FBUUEsQ0FBQztJQUU3QyxNQUFNYSxlQUFlO1FBQ25CLG1CQUFtQjtRQUNuQkQsY0FBYyxDQUFDRDtRQUVmLG9EQUFvRDtRQUNwRFIsTUFBTUssb0JBQW9CO0lBQzVCO0lBRUEsTUFBTU0sWUFBWTtRQUNoQkosU0FBUyxDQUFDRDtJQUNaO0lBRUEscUJBQ0UsOERBQUNNO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNDO3dCQUFHRCxXQUFVOzs0QkFBMko7NEJBQ3RKOzRCQUFLOzs7Ozs7O2tDQUV4Qiw4REFBQ0U7d0JBQUVGLFdBQVU7a0NBQXVIOzs7Ozs7Ozs7Ozs7MEJBS3RJLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNHO3dCQUNDSCxXQUFVO3dCQUNWSSxTQUFTLElBQU1qQixNQUFNRyxxQkFBcUI7a0NBQzNDOzs7Ozs7a0NBR0QsOERBQUNhO3dCQUNDSCxXQUFVO3dCQUNWSSxTQUFTLElBQU1qQixNQUFNSSxxQkFBcUI7a0NBQzNDOzs7Ozs7a0NBR0QsOERBQUNRO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ0Q7Z0NBQUlDLFdBQVU7MENBQ2IsNEVBQUNLO29DQUFNTCxXQUFVOztzREFDZiw4REFBQ007NENBQ0NDLE1BQUs7NENBQ0xILFNBQVNqQixNQUFNcUIsZUFBZTs7Ozs7O3NEQUVoQyw4REFBQ0M7NENBQUtULFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7OzBDQUlwQiw4REFBQ1U7Z0NBQUdWLFdBQVU7MENBQTZDOzs7Ozs7Ozs7Ozs7a0NBRTdELDhEQUFDRDt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNEO2dDQUFJQyxXQUFVOzBDQUNiLDRFQUFDSztvQ0FBTUwsV0FBVTs7c0RBQ2YsOERBQUNNOzRDQUNDQyxNQUFLOzRDQUNMSCxTQUFTUDs0Q0FDVGMsU0FBU2hCOzs7Ozs7c0RBRVgsOERBQUNjOzRDQUFLVCxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7OzswQ0FHcEIsOERBQUNVO2dDQUFHVixXQUFVOzBDQUE2Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT3JFO0dBMUVNZDtLQUFBQTtBQTRFTiwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0hlcm9TZWN0aW9uL2hlcm9zZWN0aW9uLmpzeD8wM2UwIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2hlcm8ubW9kdWxlcy5jc3NcIjtcblxuY29uc3QgSGVyb1NlY3Rpb24gPSAocHJvcHMpID0+IHtcbiAgY29uc29sZS5sb2coXCJqampqampqai0tLS0tLVwiLCB0eXBlb2YgcHJvcHMub25GZWF0dXJlc0J1dHRvbkNsaWNrKTtcbiAgY29uc29sZS5sb2coXCJra2tray0tLS0tLVwiLCB0eXBlb2YgcHJvcHMub25QYXJ0bmVyc0J1dHRvbkNsaWNrKTtcbiAgY29uc29sZS5sb2coXCJsbGxsbGwtLS0tLS1cIiwgdHlwZW9mIHByb3BzLm9uVG9nZ2xlQnV0dG9uMkNsaWNrKTtcbiAgY29uc3QgW2lzUlRMLCBzZXRJc1JUTF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpc1N3aXRjaE9uLCBzZXRJc1N3aXRjaE9uXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIGNvbnN0IGhhbmRsZVRvZ2dsZSA9ICgpID0+IHtcbiAgICAvLyBUb2dnbGUgdGhlIHN0YXRlXG4gICAgc2V0SXNTd2l0Y2hPbighaXNTd2l0Y2hPbik7XG5cbiAgICAvLyBDYWxsIHRoZSBmdW5jdGlvbiBmcm9tIHByb3BzIHRvIGhhbmRsZSB0aGUgdG9nZ2xlXG4gICAgcHJvcHMub25Ub2dnbGVCdXR0b24yQ2xpY2soKTtcbiAgfTtcblxuICBjb25zdCB0b2dnbGVSVEwgPSAoKSA9PiB7XG4gICAgc2V0SXNSVEwoIWlzUlRMKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVyb3NlY3Rpb25NYWluQ29udGFpbmVyICBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBiZy1ibGFjayBiZy1vcGFjaXR5LTgwIHRleHQtd2hpdGUgdGV4dC1jZW50ZXIgZ2FwLTE0IGxnOmdhcC0xMFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvc2VjdGlvbkhlYWRpbmdDb250YWluZXIgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgZ2FwLTIuNSBwdC0yMFwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwiaGVyb3NlY3Rpb25IZWFkaW5nIHRleHQtY2VudGVyIHRleHQtNHhsIHhzOnRleHQtNXhsIGZvbnQtbm9ybWFsIHRleHQtdmFyLUxpZ2h0LXRleHQgIHNtOnRleHQtN3hsIHhzOmxlYWRpbmctWzU1cHhdIG1kOmxlYWRpbmctWzg0cHhdIHdoaXRlc3BhY2UtcHJlLWxpbmVcIj5cbiAgICAgICAgICBUaGUgQmVzdCBQcm9kdWN0e1wiXFxuXCJ9U3RhcnRzIFdpdGggRmlnbWFcbiAgICAgICAgPC9oMT5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiaGVyb3NlY3Rpb25QYXJhZ3JhcGggdGV4dC12YXItTGlnaHQtdGV4dCB0ZXh0LXhsIHhzOnRleHQtWzI4cHhdIHRleHQtY2VudGVyIGZvbnQtbm9ybWFsIGxlYWRpbmctMTAgbWQ6bGVhZGluZy04IHB0LTVcIj5cbiAgICAgICAgICBNb3N0IGNhbGVuZGFycyBhcmUgZGVzaWduZWQgZm9yIHRlYW1zLiBTbGF0ZSBpcyBkZXNpZ25lZCBmb3JcbiAgICAgICAgICBmcmVlbGFuY2Vyc1xuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVyb3NlY3Rpb24tYnRuLWNvbnRhaW5lciBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBnYXAtMi41IHB0LTVcIj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT1cImhlcm9zZWN0aW9uLWJ0biB0ZXh0LXZhci1MaWdodC10ZXh0IHRleHQtY2VudGVyIHRleHQteGwgZm9udC1ub3JtYWwgbGVhZGluZy01IHJvdW5kZWQtZnVsbCBiZy1wcmltYXJ5IHB5LTIgcHgtNCB4czpweC05IHhzOnB5LTRcIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHByb3BzLm9uRmVhdHVyZXNCdXR0b25DbGljaygpfVxuICAgICAgICA+XG4gICAgICAgICAgU2hvdy9IaWRlIEZlYXR1cmVzXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPVwiaGVyb3NlY3Rpb24tYnRuIHRleHQtdmFyLUxpZ2h0LXRleHQgdGV4dC1jZW50ZXIgZm9udC1bYWN0b3JdIHRleHQteGwgZm9udC1ub3JtYWwgbGVhZGluZy01IHJvdW5kZWQtZnVsbCBiZy1wcmltYXJ5IHB5LTIgcHgtNCB4czpweC05IHhzOnB5LTRcIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHByb3BzLm9uUGFydG5lcnNCdXR0b25DbGljaygpfVxuICAgICAgICA+XG4gICAgICAgICAgU2hvdy9IaWRlIFBhcnRuZXJzXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm9zZWN0aW9uVG9nZ2VsSGVhZGluZyBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkhlcm9zZWN0aW9uVG9nZ2VsQnRuMSBcIj5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJzd2l0Y2hcIj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94IHJ0bDpsZWZ0XCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtwcm9wcy50b2dnbGVEaXJlY3Rpb259XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNsaWRlciByb3VuZCBsdHI6YmctZ3JheTQ2MDAgcnRsOmJnLXByaW1hcnlcIj48L3NwYW4+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIiB0ZXh0LXdoaXRlIGV4dC1iYXNlIGZvbnQtbm9ybWFsIGxlYWRpbmctNlwiPlJUTDwvaDI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm9zZWN0aW9uVG9nZ2VsSGVhZGluZyBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMlwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiSGVyb3NlY3Rpb25Ub2dnZWxCdG4yXCI+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwic3dpdGNoXCI+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlVG9nZ2xlfVxuICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2lzU3dpdGNoT259XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNsaWRlciByb3VuZFwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdGV4dC1iYXNlIGZvbnQtbm9ybWFsIGxlYWRpbmctNlwiPlxuICAgICAgICAgICAgU2hvdyBCb3RoXG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlcm9TZWN0aW9uO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJzdHlsZXMiLCJIZXJvU2VjdGlvbiIsInByb3BzIiwiY29uc29sZSIsImxvZyIsIm9uRmVhdHVyZXNCdXR0b25DbGljayIsIm9uUGFydG5lcnNCdXR0b25DbGljayIsIm9uVG9nZ2xlQnV0dG9uMkNsaWNrIiwiaXNSVEwiLCJzZXRJc1JUTCIsImlzU3dpdGNoT24iLCJzZXRJc1N3aXRjaE9uIiwiaGFuZGxlVG9nZ2xlIiwidG9nZ2xlUlRMIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJwIiwiYnV0dG9uIiwib25DbGljayIsImxhYmVsIiwiaW5wdXQiLCJ0eXBlIiwidG9nZ2xlRGlyZWN0aW9uIiwic3BhbiIsImgyIiwiY2hlY2tlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/HeroSection/herosection.jsx\n"));

/***/ })

});