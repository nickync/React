"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\nvar InputElement = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), inputText = ref[0], setInputText = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), history = ref1[0], setHistory = ref1[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                onChange: function(e) {\n                    setInputText(e.target.value);\n                    setHistory((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(history).concat([\n                        e.target.value\n                    ]));\n                },\n                placeholder: \"Enter Some Text\"\n            }, void 0, false, {\n                fileName: \"/Users/zheng/Desktop/React/hooks 17/pages/index.js\",\n                lineNumber: 11,\n                columnNumber: 17\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/zheng/Desktop/React/hooks 17/pages/index.js\",\n                lineNumber: 11,\n                columnNumber: 147\n            }, _this),\n            inputText,\n            history\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/zheng/Desktop/React/hooks 17/pages/index.js\",\n        lineNumber: 10,\n        columnNumber: 13\n    }, _this);\n};\n_s(InputElement, \"/YxVmfZku2946ChKMnddCR+VCYM=\");\n_c = InputElement;\n/* harmony default export */ __webpack_exports__[\"default\"] = (InputElement);\nvar _c;\n$RefreshReg$(_c, \"InputElement\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUF3QztBQUV4QyxJQUFNRSxZQUFZLEdBQUcsV0FBTTs7SUFFdkIsSUFBa0NELEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFBdkNFLFNBQVMsR0FBa0JGLEdBQVksR0FBOUIsRUFBRUcsWUFBWSxHQUFJSCxHQUFZLEdBQWhCO0lBQzlCLElBQThCQSxJQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBQW5DSSxPQUFPLEdBQWdCSixJQUFZLEdBQTVCLEVBQUVLLFVBQVUsR0FBSUwsSUFBWSxHQUFoQjtJQUkxQixxQkFBUSw4REFBQ00sS0FBRzs7MEJBQ0EsOERBQUNDLE9BQUs7Z0JBQUNDLFFBQVEsRUFBRSxTQUFDQyxDQUFDLEVBQUs7b0JBQUNOLFlBQVksQ0FBQ00sQ0FBQyxDQUFDQyxNQUFNLENBQUNDLEtBQUssQ0FBQyxDQUFDO29CQUFDTixVQUFVLENBQUMscUZBQUlELE9BQU8sQ0FBUEEsUUFBSjt3QkFBYUssQ0FBQyxDQUFDQyxNQUFNLENBQUNDLEtBQUs7cUJBQUMsRUFBQztnQkFBQSxDQUFDO2dCQUFFQyxXQUFXLEVBQUMsaUJBQWlCOzs7OztxQkFBRzswQkFBQSw4REFBQ0MsSUFBRTs7OztxQkFBTTtZQUMxSVgsU0FBUztZQUNURSxPQUFPOzs7Ozs7YUFDTjtBQUNsQixDQUFDO0dBWktILFlBQVk7QUFBWkEsS0FBQUEsWUFBWTtBQWNsQiwrREFBZUEsWUFBWSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IElucHV0RWxlbWVudCA9ICgpID0+IHtcblxuICAgIGNvbnN0IFtpbnB1dFRleHQsIHNldElucHV0VGV4dF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgICBjb25zdCBbaGlzdG9yeSwgc2V0SGlzdG9yeV0gPSB1c2VTdGF0ZShbXSk7XG5cblxuICAgIFxuICAgIHJldHVybiAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9eyhlKSA9PiB7c2V0SW5wdXRUZXh0KGUudGFyZ2V0LnZhbHVlKTsgc2V0SGlzdG9yeShbLi4uaGlzdG9yeSwgZS50YXJnZXQudmFsdWVdKX19IHBsYWNlaG9sZGVyPVwiRW50ZXIgU29tZSBUZXh0XCIgLz48YnI+PC9icj5cbiAgICAgICAgICAgICAgICB7aW5wdXRUZXh0fVxuICAgICAgICAgICAgICAgIHtoaXN0b3J5fVxuICAgICAgICAgICAgPC9kaXY+XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbnB1dEVsZW1lbnQ7Il0sIm5hbWVzIjpbInJlYWN0IiwidXNlU3RhdGUiLCJJbnB1dEVsZW1lbnQiLCJpbnB1dFRleHQiLCJzZXRJbnB1dFRleHQiLCJoaXN0b3J5Iiwic2V0SGlzdG9yeSIsImRpdiIsImlucHV0Iiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJwbGFjZWhvbGRlciIsImJyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});