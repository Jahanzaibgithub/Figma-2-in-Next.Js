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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hero_modules_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hero.modules.css */ \"(app-pages-browser)/./components/HeroSection/hero.modules.css\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst HeroSection = ()=>{\n    _s();\n    // Initialize the toggle state\n    const [isRTL, setIsRTL] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    // Function to toggle RTL\n    const toggleRTL = ()=>{\n        setIsRTL(!isRTL);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"herosectionMainContainer h-[800px] w-full flex flex-col justify-center items-center bg-black bg-opacity-80 text-white text-center gap-14 lg:gap-10 \".concat(isRTL ? \"rtl\" : \"\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"herosectionHeadingContainer flex flex-col items-center gap-2.5 pt-20\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"herosectionHeading text-center w-4/5 text-4xl md:text-5xl font-normal xs:leading-[55px] tracking-[0.2px] text-var-Light-text font-[actor] lg:text-6xl md:leading-20 whitespace-pre-line \".concat(isRTL ? \"text-right\" : \"\"),\n                        children: [\n                            \"The Best Product\",\n                            \"\\n\",\n                            \"Starts With Figma\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/jahanzaib/Figma-2/Figma-2-in-Next.Js/components/HeroSection/herosection.jsx\",\n                        lineNumber: 17,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"herosectionParagraph w-4/5 text-var-Light-text text-center font-[actor] text-xl font-normal leading-8 tracking-[0.2px] pt-5 \".concat(isRTL ? \"text-right\" : \"\"),\n                        children: \"Most calendars are designed for teams. Slate is designed for freelancers\"\n                    }, void 0, false, {\n                        fileName: \"/home/jahanzaib/Figma-2/Figma-2-in-Next.Js/components/HeroSection/herosection.jsx\",\n                        lineNumber: 20,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/jahanzaib/Figma-2/Figma-2-in-Next.Js/components/HeroSection/herosection.jsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"herosection-btn-container flex flex-col items-center gap-2.5 pt-5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"herosection-btn text-var-Light-text text-center font-[actor] text-xl font-normal leading-5 tracking-[0.2px] rounded-full bg-primary w-60 py-4\",\n                        children: \"Show/Hide Features\"\n                    }, void 0, false, {\n                        fileName: \"/home/jahanzaib/Figma-2/Figma-2-in-Next.Js/components/HeroSection/herosection.jsx\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"herosection-btn text-var-Light-text text-center font-[actor] text-xl font-normal leading-5 tracking-[0.2px] rounded-full bg-primary w-60 py-4\",\n                        children: \"Show/Hide Partners\"\n                    }, void 0, false, {\n                        fileName: \"/home/jahanzaib/Figma-2/Figma-2-in-Next.Js/components/HeroSection/herosection.jsx\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"herosection-toggel-heading flex items-center gap-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"HerosectionToggelBtn text-white \".concat(isRTL ? \"text-left\" : \"\"),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    className: \"switch\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"checkbox\",\n                                            onClick: toggleRTL\n                                        }, void 0, false, {\n                                            fileName: \"/home/jahanzaib/Figma-2/Figma-2-in-Next.Js/components/HeroSection/herosection.jsx\",\n                                            lineNumber: 34,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"slider round\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/jahanzaib/Figma-2/Figma-2-in-Next.Js/components/HeroSection/herosection.jsx\",\n                                            lineNumber: 35,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/jahanzaib/Figma-2/Figma-2-in-Next.Js/components/HeroSection/herosection.jsx\",\n                                    lineNumber: 33,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/home/jahanzaib/Figma-2/Figma-2-in-Next.Js/components/HeroSection/herosection.jsx\",\n                                lineNumber: 32,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-white \".concat(isRTL ? \"text-left\" : \"\", \" font-[actor] text-xl font-normal leading-6\"),\n                                children: \"Show Both\"\n                            }, void 0, false, {\n                                fileName: \"/home/jahanzaib/Figma-2/Figma-2-in-Next.Js/components/HeroSection/herosection.jsx\",\n                                lineNumber: 38,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/jahanzaib/Figma-2/Figma-2-in-Next.Js/components/HeroSection/herosection.jsx\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/jahanzaib/Figma-2/Figma-2-in-Next.Js/components/HeroSection/herosection.jsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/jahanzaib/Figma-2/Figma-2-in-Next.Js/components/HeroSection/herosection.jsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, undefined);\n};\n_s(HeroSection, \"fdWZWfWK5oKW7gcArejH2uT815A=\");\n_c = HeroSection;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HeroSection);\nvar _c;\n$RefreshReg$(_c, \"HeroSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvSGVyb1NlY3Rpb24vaGVyb3NlY3Rpb24uanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDd0M7QUFDQTtBQUV4QyxNQUFNRyxjQUFjOztJQUNsQiw4QkFBOEI7SUFDOUIsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdKLCtDQUFRQSxDQUFDO0lBRW5DLHlCQUF5QjtJQUN6QixNQUFNSyxZQUFZO1FBQ2hCRCxTQUFTLENBQUNEO0lBQ1o7SUFFQSxxQkFDRSw4REFBQ0c7UUFBSUMsV0FBVyxzSkFBeUssT0FBbkJKLFFBQVEsUUFBUTs7MEJBQ3BMLDhEQUFDRztnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNDO3dCQUFHRCxXQUFXLDJMQUFxTixPQUExQkosUUFBUSxlQUFlOzs0QkFBTTs0QkFDcE47NEJBQUs7Ozs7Ozs7a0NBRXhCLDhEQUFDTTt3QkFBRUYsV0FBVywrSEFBeUosT0FBMUJKLFFBQVEsZUFBZTtrQ0FBTTs7Ozs7Ozs7Ozs7OzBCQUk1Syw4REFBQ0c7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDRzt3QkFBT0gsV0FBVTtrQ0FBZ0o7Ozs7OztrQ0FHbEssOERBQUNHO3dCQUFPSCxXQUFVO2tDQUFnSjs7Ozs7O2tDQUdsSyw4REFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDRDtnQ0FBSUMsV0FBVyxtQ0FBNEQsT0FBekJKLFFBQVEsY0FBYzswQ0FDdkUsNEVBQUNRO29DQUFNSixXQUFVOztzREFDZiw4REFBQ0s7NENBQU1DLE1BQUs7NENBQVdDLFNBQVNUOzs7Ozs7c0RBQ2hDLDhEQUFDVTs0Q0FBS1IsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7MENBR3BCLDhEQUFDUztnQ0FBR1QsV0FBVyxjQUF1QyxPQUF6QkosUUFBUSxjQUFjLElBQUc7MENBQThDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPOUc7R0F4Q01EO0tBQUFBO0FBMENOLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvSGVyb1NlY3Rpb24vaGVyb3NlY3Rpb24uanN4PzAzZTAiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vaGVyby5tb2R1bGVzLmNzc1wiO1xuXG5jb25zdCBIZXJvU2VjdGlvbiA9ICgpID0+IHtcbiAgLy8gSW5pdGlhbGl6ZSB0aGUgdG9nZ2xlIHN0YXRlXG4gIGNvbnN0IFtpc1JUTCwgc2V0SXNSVExdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIC8vIEZ1bmN0aW9uIHRvIHRvZ2dsZSBSVExcbiAgY29uc3QgdG9nZ2xlUlRMID0gKCkgPT4ge1xuICAgIHNldElzUlRMKCFpc1JUTCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YGhlcm9zZWN0aW9uTWFpbkNvbnRhaW5lciBoLVs4MDBweF0gdy1mdWxsIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGJnLWJsYWNrIGJnLW9wYWNpdHktODAgdGV4dC13aGl0ZSB0ZXh0LWNlbnRlciBnYXAtMTQgbGc6Z2FwLTEwICR7aXNSVEwgPyBcInJ0bFwiIDogXCJcIn1gfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVyb3NlY3Rpb25IZWFkaW5nQ29udGFpbmVyIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGdhcC0yLjUgcHQtMjBcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT17YGhlcm9zZWN0aW9uSGVhZGluZyB0ZXh0LWNlbnRlciB3LTQvNSB0ZXh0LTR4bCBtZDp0ZXh0LTV4bCBmb250LW5vcm1hbCB4czpsZWFkaW5nLVs1NXB4XSB0cmFja2luZy1bMC4ycHhdIHRleHQtdmFyLUxpZ2h0LXRleHQgZm9udC1bYWN0b3JdIGxnOnRleHQtNnhsIG1kOmxlYWRpbmctMjAgd2hpdGVzcGFjZS1wcmUtbGluZSAke2lzUlRMID8gXCJ0ZXh0LXJpZ2h0XCIgOiBcIlwifWB9PlxuICAgICAgICAgIFRoZSBCZXN0IFByb2R1Y3R7XCJcXG5cIn1TdGFydHMgV2l0aCBGaWdtYVxuICAgICAgICA8L2gxPlxuICAgICAgICA8cCBjbGFzc05hbWU9e2BoZXJvc2VjdGlvblBhcmFncmFwaCB3LTQvNSB0ZXh0LXZhci1MaWdodC10ZXh0IHRleHQtY2VudGVyIGZvbnQtW2FjdG9yXSB0ZXh0LXhsIGZvbnQtbm9ybWFsIGxlYWRpbmctOCB0cmFja2luZy1bMC4ycHhdIHB0LTUgJHtpc1JUTCA/IFwidGV4dC1yaWdodFwiIDogXCJcIn1gfT5cbiAgICAgICAgICBNb3N0IGNhbGVuZGFycyBhcmUgZGVzaWduZWQgZm9yIHRlYW1zLiBTbGF0ZSBpcyBkZXNpZ25lZCBmb3IgZnJlZWxhbmNlcnNcbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm9zZWN0aW9uLWJ0bi1jb250YWluZXIgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgZ2FwLTIuNSBwdC01XCI+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiaGVyb3NlY3Rpb24tYnRuIHRleHQtdmFyLUxpZ2h0LXRleHQgdGV4dC1jZW50ZXIgZm9udC1bYWN0b3JdIHRleHQteGwgZm9udC1ub3JtYWwgbGVhZGluZy01IHRyYWNraW5nLVswLjJweF0gcm91bmRlZC1mdWxsIGJnLXByaW1hcnkgdy02MCBweS00XCI+XG4gICAgICAgICAgU2hvdy9IaWRlIEZlYXR1cmVzXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImhlcm9zZWN0aW9uLWJ0biB0ZXh0LXZhci1MaWdodC10ZXh0IHRleHQtY2VudGVyIGZvbnQtW2FjdG9yXSB0ZXh0LXhsIGZvbnQtbm9ybWFsIGxlYWRpbmctNSB0cmFja2luZy1bMC4ycHhdIHJvdW5kZWQtZnVsbCBiZy1wcmltYXJ5IHctNjAgcHktNFwiPlxuICAgICAgICAgIFNob3cvSGlkZSBQYXJ0bmVyc1xuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvc2VjdGlvbi10b2dnZWwtaGVhZGluZyBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMlwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgSGVyb3NlY3Rpb25Ub2dnZWxCdG4gdGV4dC13aGl0ZSAke2lzUlRMID8gXCJ0ZXh0LWxlZnRcIiA6IFwiXCJ9YH0+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwic3dpdGNoXCI+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBvbkNsaWNrPXt0b2dnbGVSVEx9IC8+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNsaWRlciByb3VuZFwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT17YHRleHQtd2hpdGUgJHtpc1JUTCA/IFwidGV4dC1sZWZ0XCIgOiBcIlwifSBmb250LVthY3Rvcl0gdGV4dC14bCBmb250LW5vcm1hbCBsZWFkaW5nLTZgfT5cbiAgICAgICAgICAgIFNob3cgQm90aFxuICAgICAgICAgIDwvaDI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZXJvU2VjdGlvbjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwic3R5bGVzIiwiSGVyb1NlY3Rpb24iLCJpc1JUTCIsInNldElzUlRMIiwidG9nZ2xlUlRMIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJwIiwiYnV0dG9uIiwibGFiZWwiLCJpbnB1dCIsInR5cGUiLCJvbkNsaWNrIiwic3BhbiIsImgyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/HeroSection/herosection.jsx\n"));

/***/ })

});