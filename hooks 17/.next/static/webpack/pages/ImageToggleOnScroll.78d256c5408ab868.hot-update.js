"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/ImageToggleOnScroll",{

/***/ "./pages/ImageToggleOnScroll.js":
/*!**************************************!*\
  !*** ./pages/ImageToggleOnScroll.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ImageChangeOnMouseOver; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_ImageToggleOnMouseOver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/ImageToggleOnMouseOver */ \"./src/ImageToggleOnMouseOver.js\");\n/* harmony import */ var _src_ImageToggleOnScroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/ImageToggleOnScroll */ \"./src/ImageToggleOnScroll.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction ImageChangeOnMouseOver() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), currentImage = ref[0], setCurrentImage = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), mouseEventCnt = ref1[0], setMouseEventCnt = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        window.document.title = \"Random: \".concat(value);\n        console.log(\"useEffect: setting title to \".concat(value));\n    });\n    var value = Math.random();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        onMouseOver: function() {\n            setCurrentImage(value);\n            setMouseEventCnt(mouseEventCnt + 1);\n            console.log(\"onMouseOver: \".concat(value));\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: [\n                    \"mouseEventCnt: $\",\n                    mouseEventCnt,\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\lizhe\\\\OneDrive\\\\Desktop\\\\React\\\\hooks 17\\\\pages\\\\ImageToggleOnScroll.js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_ImageToggleOnScroll__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                primary: \"/static/pictures/executable_jar.png\",\n                secondary: \"/static/pictures/executable_jar_1.png\",\n                alt: \"\"\n            }, Math.random(), false, {\n                fileName: \"C:\\\\Users\\\\lizhe\\\\OneDrive\\\\Desktop\\\\React\\\\hooks 17\\\\pages\\\\ImageToggleOnScroll.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\lizhe\\\\OneDrive\\\\Desktop\\\\React\\\\hooks 17\\\\pages\\\\ImageToggleOnScroll.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_ImageToggleOnMouseOver__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                primary: \"/static/pictures/executable_jar.png\",\n                secondary: \"/static/pictures/executable_jar_1.png\",\n                alt: \"\"\n            }, Math.random(), false, {\n                fileName: \"C:\\\\Users\\\\lizhe\\\\OneDrive\\\\Desktop\\\\React\\\\hooks 17\\\\pages\\\\ImageToggleOnScroll.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this)\n        ]\n    }, value, true, {\n        fileName: \"C:\\\\Users\\\\lizhe\\\\OneDrive\\\\Desktop\\\\React\\\\hooks 17\\\\pages\\\\ImageToggleOnScroll.js\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, this);\n};\n_s(ImageChangeOnMouseOver, \"OXS62ODG4RQsK7Ahu3eBIqyuJeo=\");\n_c = ImageChangeOnMouseOver;\nvar _c;\n$RefreshReg$(_c, \"ImageChangeOnMouseOver\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9JbWFnZVRvZ2dsZU9uU2Nyb2xsLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7QUFBbUQ7QUFDZ0I7QUFDTjtBQUU5QyxTQUFTSyxzQkFBc0IsR0FBRzs7SUFFL0MsSUFBd0NILEdBQVcsR0FBWEEsK0NBQVEsQ0FBQyxDQUFDLENBQUMsRUFBNUNJLFlBQVksR0FBcUJKLEdBQVcsR0FBaEMsRUFBRUssZUFBZSxHQUFJTCxHQUFXLEdBQWY7SUFDcEMsSUFBMENBLElBQVcsR0FBWEEsK0NBQVEsQ0FBQyxDQUFDLENBQUMsRUFBOUNNLGFBQWEsR0FBc0JOLElBQVcsR0FBakMsRUFBRU8sZ0JBQWdCLEdBQUlQLElBQVcsR0FBZjtJQUV0Q0QsZ0RBQVMsQ0FBRSxXQUFNO1FBQ2ZTLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDQyxLQUFLLEdBQUcsVUFBUyxDQUFRLE9BQU5DLEtBQUssQ0FBRSxDQUFDO1FBQzNDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyw4QkFBNkIsQ0FBUSxPQUFORixLQUFLLENBQUUsQ0FBQztJQUNyRCxDQUFDLENBQUM7SUFFRixJQUFNQSxLQUFLLEdBQUdHLElBQUksQ0FBQ0MsTUFBTSxFQUFFO0lBRTNCLHFCQUNFLDhEQUFDQyxLQUFHO1FBQ0hDLFdBQVcsRUFBRSxXQUFNO1lBQ2xCWixlQUFlLENBQUNNLEtBQUssQ0FBQyxDQUFDO1lBQ3ZCSixnQkFBZ0IsQ0FBQ0QsYUFBYSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3BDTSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxlQUFjLENBQVEsT0FBTkYsS0FBSyxDQUFFLENBQUM7UUFBQSxDQUFDOzswQkFFckMsOERBQUNPLE1BQUk7O29CQUFDLGtCQUFnQjtvQkFBQ1osYUFBYTtvQkFBQyxHQUFDOzs7Ozs7b0JBQU87MEJBRzdDLDhEQUFDSixnRUFBbUI7Z0JBQXFCaUIsT0FBTyxFQUFDLHFDQUFxQztnQkFBQ0MsU0FBUyxFQUFDLHVDQUF1QztnQkFBQ0MsR0FBRyxFQUFDLEVBQUU7ZUFBckhQLElBQUksQ0FBQ0MsTUFBTSxFQUFFOzs7O29CQUEyRzswQkFDbEosOERBQUNPLElBQUU7Ozs7b0JBQU07MEJBQ1QsOERBQUNyQixtRUFBc0I7Z0JBQXFCa0IsT0FBTyxFQUFDLHFDQUFxQztnQkFBQ0MsU0FBUyxFQUFDLHVDQUF1QztnQkFBQ0MsR0FBRyxFQUFDLEVBQUU7ZUFBckhQLElBQUksQ0FBQ0MsTUFBTSxFQUFFOzs7O29CQUEyRzs7T0FYN0lKLEtBQUs7Ozs7WUFZVCxDQUNQO0FBQ0gsQ0FBQztHQTNCdUJSLHNCQUFzQjtBQUF0QkEsS0FBQUEsc0JBQXNCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL0ltYWdlVG9nZ2xlT25TY3JvbGwuanM/ODk4ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEltYWdlVG9nZ2xlT25Nb3VzZU92ZXIgZnJvbSAnLi4vc3JjL0ltYWdlVG9nZ2xlT25Nb3VzZU92ZXInO1xyXG5pbXBvcnQgSW1hZ2VUb2dnbGVPblNjcm9sbCBmcm9tICcuLi9zcmMvSW1hZ2VUb2dnbGVPblNjcm9sbCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbWFnZUNoYW5nZU9uTW91c2VPdmVyKCkge1xyXG5cclxuICBjb25zdCBbY3VycmVudEltYWdlLCBzZXRDdXJyZW50SW1hZ2VdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW21vdXNlRXZlbnRDbnQsIHNldE1vdXNlRXZlbnRDbnRdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gIHVzZUVmZmVjdCggKCkgPT4ge1xyXG4gICAgd2luZG93LmRvY3VtZW50LnRpdGxlID0gYFJhbmRvbTogJHt2YWx1ZX1gO1xyXG4gICAgY29uc29sZS5sb2coYHVzZUVmZmVjdDogc2V0dGluZyB0aXRsZSB0byAke3ZhbHVlfWApXHJcbiAgfSlcclxuXHJcbiAgY29uc3QgdmFsdWUgPSBNYXRoLnJhbmRvbSgpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBrZXk9e3ZhbHVlfVxyXG4gICAgIG9uTW91c2VPdmVyPXsoKSA9PiB7XHJcbiAgICAgIHNldEN1cnJlbnRJbWFnZSh2YWx1ZSk7XHJcbiAgICAgIHNldE1vdXNlRXZlbnRDbnQobW91c2VFdmVudENudCArIDEpO1xyXG4gICAgICBjb25zb2xlLmxvZyhgb25Nb3VzZU92ZXI6ICR7dmFsdWV9YCl9fT5cclxuXHJcbiAgICAgIDxzcGFuPm1vdXNlRXZlbnRDbnQ6ICR7bW91c2VFdmVudENudH0gPC9zcGFuPlxyXG5cclxuICAgICAgXHJcbiAgICAgIDxJbWFnZVRvZ2dsZU9uU2Nyb2xsIGtleT17TWF0aC5yYW5kb20oKX0gcHJpbWFyeT1cIi9zdGF0aWMvcGljdHVyZXMvZXhlY3V0YWJsZV9qYXIucG5nXCIgc2Vjb25kYXJ5PVwiL3N0YXRpYy9waWN0dXJlcy9leGVjdXRhYmxlX2phcl8xLnBuZ1wiIGFsdD0nJyAvPlxyXG4gICAgICA8aHI+PC9ocj5cclxuICAgICAgPEltYWdlVG9nZ2xlT25Nb3VzZU92ZXIga2V5PXtNYXRoLnJhbmRvbSgpfSBwcmltYXJ5PVwiL3N0YXRpYy9waWN0dXJlcy9leGVjdXRhYmxlX2phci5wbmdcIiBzZWNvbmRhcnk9XCIvc3RhdGljL3BpY3R1cmVzL2V4ZWN1dGFibGVfamFyXzEucG5nXCIgYWx0PScnIC8+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJJbWFnZVRvZ2dsZU9uTW91c2VPdmVyIiwiSW1hZ2VUb2dnbGVPblNjcm9sbCIsIkltYWdlQ2hhbmdlT25Nb3VzZU92ZXIiLCJjdXJyZW50SW1hZ2UiLCJzZXRDdXJyZW50SW1hZ2UiLCJtb3VzZUV2ZW50Q250Iiwic2V0TW91c2VFdmVudENudCIsIndpbmRvdyIsImRvY3VtZW50IiwidGl0bGUiLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJNYXRoIiwicmFuZG9tIiwiZGl2Iiwib25Nb3VzZU92ZXIiLCJzcGFuIiwicHJpbWFyeSIsInNlY29uZGFyeSIsImFsdCIsImhyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/ImageToggleOnScroll.js\n"));

/***/ })

});