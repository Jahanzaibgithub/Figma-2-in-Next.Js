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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"9beaf8b6ffd3\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2dsb2JhbHMuY3NzPzkxYTYiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCI5YmVhZjhiNmZmZDNcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./components/StatBlock/statBlock.jsx":
/*!********************************************!*\
  !*** ./components/StatBlock/statBlock.jsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _StatBlockContainer_modules_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StatBlockContainer.modules.css */ \"(app-pages-browser)/./components/StatBlock/StatBlockContainer.modules.css\");\n\n\nconst StatBlock = (props)=>{\n    console.log(\"kkkkkkkk---\", props.statsArray);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"StatBlockMainContainer  flex flex-col pt-10 md:p-12  justify-center items-center gap-3 self-stretch \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"StatBlockMainContainerHeader text-2xl flex justify-center px-12 pb-12\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"StatBlockMainContainerHeading text-center font-bold leading-8 uppercase self-stretch\",\n                    children: \"IMPACT OF AKDN\"\n                }, void 0, false, {\n                    fileName: \"/home/jahanzaib/gitproject/Figma-2-in-Next.Js-1/components/StatBlock/statBlock.jsx\",\n                    lineNumber: 8,\n                    columnNumber: 94\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/jahanzaib/gitproject/Figma-2-in-Next.Js-1/components/StatBlock/statBlock.jsx\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"StatBlockContainer4Block flex flex-col md:flex-row justify-center gap-6 md:max-w-3xl\",\n                children: props.statsArray.map((block, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"SingleStatBlock flex justify-center \".concat(index != props.statsArray.length - 1 ? \"md:border-r\" : \"\"),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SingleStatBlock, {\n                            ...block\n                        }, void 0, false, {\n                            fileName: \"/home/jahanzaib/gitproject/Figma-2-in-Next.Js-1/components/StatBlock/statBlock.jsx\",\n                            lineNumber: 16,\n                            columnNumber: 11\n                        }, undefined)\n                    }, index, false, {\n                        fileName: \"/home/jahanzaib/gitproject/Figma-2-in-Next.Js-1/components/StatBlock/statBlock.jsx\",\n                        lineNumber: 12,\n                        columnNumber: 6\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/home/jahanzaib/gitproject/Figma-2-in-Next.Js-1/components/StatBlock/statBlock.jsx\",\n                lineNumber: 10,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/jahanzaib/gitproject/Figma-2-in-Next.Js-1/components/StatBlock/statBlock.jsx\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, undefined);\n};\n_c = StatBlock;\nconst SingleStatBlock = (param)=>/*#__PURE__*/ {\n    let { title, image, description } = param;\n    return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"StatBlockContainer md:py-4 md:pl-4 md:pr-10 max-w-xs flex flex-col justify-center items-center  \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"StateBlockContainerBlock1 flex flex-col justify-center items-center gap-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: image,\n                        alt: title,\n                        className: \"StateBlockContainerBlock1Image w-9 h-9\"\n                    }, void 0, false, {\n                        fileName: \"/home/jahanzaib/gitproject/Figma-2-in-Next.Js-1/components/StatBlock/statBlock.jsx\",\n                        lineNumber: 28,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"StateBlockContainerBlock1Title text-center text-2xl font-medium leading-9\",\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"/home/jahanzaib/gitproject/Figma-2-in-Next.Js-1/components/StatBlock/statBlock.jsx\",\n                        lineNumber: 29,\n                        columnNumber: 7\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/jahanzaib/gitproject/Figma-2-in-Next.Js-1/components/StatBlock/statBlock.jsx\",\n                lineNumber: 27,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"StateBlockContainerBlock2\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"StateBlockContainerBlock2Description text-center text-base font-normal leading-6 \",\n                    children: description\n                }, void 0, false, {\n                    fileName: \"/home/jahanzaib/gitproject/Figma-2-in-Next.Js-1/components/StatBlock/statBlock.jsx\",\n                    lineNumber: 32,\n                    columnNumber: 7\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/jahanzaib/gitproject/Figma-2-in-Next.Js-1/components/StatBlock/statBlock.jsx\",\n                lineNumber: 31,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/jahanzaib/gitproject/Figma-2-in-Next.Js-1/components/StatBlock/statBlock.jsx\",\n        lineNumber: 26,\n        columnNumber: 1\n    }, undefined);\n};\n_c1 = SingleStatBlock;\n/* harmony default export */ __webpack_exports__[\"default\"] = (StatBlock);\nvar _c, _c1;\n$RefreshReg$(_c, \"StatBlock\");\n$RefreshReg$(_c1, \"SingleStatBlock\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvU3RhdEJsb2NrL3N0YXRCbG9jay5qc3giLCJtYXBwaW5ncyI6Ijs7OztBQUEwQztBQUV6QyxNQUFNQSxZQUFZLENBQUNDO0lBQ2xCQyxRQUFRQyxHQUFHLENBQUMsZUFBZUYsTUFBTUcsVUFBVTtJQUUzQyxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUF3RSw0RUFBQ0M7b0JBQUdELFdBQVU7OEJBQXVGOzs7Ozs7Ozs7OzswQkFFOUwsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNaTCxNQUFNRyxVQUFVLENBQUNJLEdBQUcsQ0FBQyxDQUFDQyxPQUFPQyxzQkFDL0IsOERBQUNMO3dCQUVBQyxXQUFXLHVDQUFpRyxPQUExREksU0FBU1QsTUFBTUcsVUFBVSxDQUFDTyxNQUFNLEdBQUcsSUFBSSxnQkFBZ0I7a0NBRXJHLDRFQUFDQzs0QkFBaUIsR0FBR0gsS0FBSzs7Ozs7O3VCQUh6QkM7Ozs7Ozs7Ozs7Ozs7Ozs7QUFXWDtLQXJCT1Y7QUFzQk4sTUFBTVksa0JBQWtCO1FBQUMsRUFBRUMsS0FBSyxFQUFFQyxLQUFLLEVBQUVDLFdBQVcsRUFBRTtXQUN2RCw4REFBQ1Y7UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDZiw4REFBQ1U7d0JBQUlDLEtBQUtIO3dCQUFPSSxLQUFLTDt3QkFBT1AsV0FBVTs7Ozs7O2tDQUNyQyw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBQThFTzs7Ozs7Ozs7Ozs7OzBCQUUvRiw4REFBQ1I7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNhO29CQUFFYixXQUFVOzhCQUFxRlM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWpHO01BVEFIO0FBYVAsK0RBQWVaLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TdGF0QmxvY2svc3RhdEJsb2NrLmpzeD9lODI2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vU3RhdEJsb2NrQ29udGFpbmVyLm1vZHVsZXMuY3NzXCI7XG5cbiBjb25zdCBTdGF0QmxvY2sgPSAocHJvcHMpID0+IHtcbiAgY29uc29sZS5sb2coXCJra2tra2tray0tLVwiLCBwcm9wcy5zdGF0c0FycmF5KTtcbiAgXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJTdGF0QmxvY2tNYWluQ29udGFpbmVyICBmbGV4IGZsZXgtY29sIHB0LTEwIG1kOnAtMTIgIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBnYXAtMyBzZWxmLXN0cmV0Y2ggXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIlN0YXRCbG9ja01haW5Db250YWluZXJIZWFkZXIgdGV4dC0yeGwgZmxleCBqdXN0aWZ5LWNlbnRlciBweC0xMiBwYi0xMlwiPjxoMSBjbGFzc05hbWU9XCJTdGF0QmxvY2tNYWluQ29udGFpbmVySGVhZGluZyB0ZXh0LWNlbnRlciBmb250LWJvbGQgbGVhZGluZy04IHVwcGVyY2FzZSBzZWxmLXN0cmV0Y2hcIj5JTVBBQ1QgT0YgQUtETjwvaDE+PC9kaXY+XG4gICAgXG4gICAgPGRpdiBjbGFzc05hbWU9XCJTdGF0QmxvY2tDb250YWluZXI0QmxvY2sgZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvdyBqdXN0aWZ5LWNlbnRlciBnYXAtNiBtZDptYXgtdy0zeGxcIj5cbiAgICAgIHtwcm9wcy5zdGF0c0FycmF5Lm1hcCgoYmxvY2ssIGluZGV4KSA9PiAoXG4gICAgIDxkaXZcbiAgICAgIGtleT17aW5kZXh9IFxuICAgICAgY2xhc3NOYW1lPXtgU2luZ2xlU3RhdEJsb2NrIGZsZXgganVzdGlmeS1jZW50ZXIgJHtpbmRleCAhPSBwcm9wcy5zdGF0c0FycmF5Lmxlbmd0aCAgLTEgPyAnbWQ6Ym9yZGVyLXInIDogJyd9YH1cbiAgICAgID5cbiAgICAgICAgICA8U2luZ2xlU3RhdEJsb2NrIHsuLi5ibG9ja30gLz5cbiAgICA8L2Rpdj5cbiAgICAgICkpfVxuICAgXG4gICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgICAgICBcbiAgKTtcbn07XG4gY29uc3QgU2luZ2xlU3RhdEJsb2NrID0gKHsgdGl0bGUsIGltYWdlLCBkZXNjcmlwdGlvbiB9KSA9PiAoXG48ZGl2IGNsYXNzTmFtZT1cIlN0YXRCbG9ja0NvbnRhaW5lciBtZDpweS00IG1kOnBsLTQgbWQ6cHItMTAgbWF4LXcteHMgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgIFwiPiBcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIlN0YXRlQmxvY2tDb250YWluZXJCbG9jazEgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cbiAgICA8aW1nIHNyYz17aW1hZ2V9IGFsdD17dGl0bGV9IGNsYXNzTmFtZT1cIlN0YXRlQmxvY2tDb250YWluZXJCbG9jazFJbWFnZSB3LTkgaC05XCIgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiU3RhdGVCbG9ja0NvbnRhaW5lckJsb2NrMVRpdGxlIHRleHQtY2VudGVyIHRleHQtMnhsIGZvbnQtbWVkaXVtIGxlYWRpbmctOVwiID57dGl0bGV9PC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJTdGF0ZUJsb2NrQ29udGFpbmVyQmxvY2syXCI+XG4gICAgICA8cCBjbGFzc05hbWU9XCJTdGF0ZUJsb2NrQ29udGFpbmVyQmxvY2syRGVzY3JpcHRpb24gdGV4dC1jZW50ZXIgdGV4dC1iYXNlIGZvbnQtbm9ybWFsIGxlYWRpbmctNiBcIj57ZGVzY3JpcHRpb259PC9wPlxuICAgICAgPC9kaXY+XG4gIDwvZGl2PlxuICBcbik7XG5cbmV4cG9ydCBkZWZhdWx0IFN0YXRCbG9jazsiXSwibmFtZXMiOlsiU3RhdEJsb2NrIiwicHJvcHMiLCJjb25zb2xlIiwibG9nIiwic3RhdHNBcnJheSIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwibWFwIiwiYmxvY2siLCJpbmRleCIsImxlbmd0aCIsIlNpbmdsZVN0YXRCbG9jayIsInRpdGxlIiwiaW1hZ2UiLCJkZXNjcmlwdGlvbiIsImltZyIsInNyYyIsImFsdCIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/StatBlock/statBlock.jsx\n"));

/***/ })

});