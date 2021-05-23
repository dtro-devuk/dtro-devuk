(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[8],{

/***/ "./components/atoms/emoji/EmojiContainer.js":
/*!**************************************************!*\
  !*** ./components/atoms/emoji/EmojiContainer.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);




var _jsxFileName = "D:\\WorkArea\\GitHub\\dtro-devuk-website-nextjs\\components\\atoms\\emoji\\EmojiContainer.js",
    _this = undefined;




/***
 * Emojis can be found here:
 * @see:
 * https://gist.github.com/rxaviers/7360908
 * https://emojipedia.org/down-arrow/
 */
var EmojiContainer = function EmojiContainer(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(EmojiWrapper, {
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 10
  }, _this);
};

_c = EmojiContainer;

var EmojiWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span.withConfig({
  displayName: "EmojiContainer__EmojiWrapper",
  componentId: "wgzbb1-0"
})({
  "width": "12rem",
  "height": "12rem",
  "fontSize": "0.75rem",
  "lineHeight": "1rem",
  "padding": "0.25rem",
  "cursor": "default",
  "@media (min-width: 768px)": {
    "fontSize": "1.5rem",
    "lineHeight": "2rem"
  }
});

EmojiContainer.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_3__["node"]
};
EmojiContainer.defaultProps = {
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: "\uD83C\uDF36\uFE0F"
  }, void 0, false)
};
/* harmony default export */ __webpack_exports__["default"] = (EmojiContainer);

var _c;

$RefreshReg$(_c, "EmojiContainer");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./components/atoms/mdx/MDXPrintRecipeButton.js":
/*!******************************************************!*\
  !*** ./components/atoms/mdx/MDXPrintRecipeButton.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emoji_EmojiContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../emoji/EmojiContainer */ "./components/atoms/emoji/EmojiContainer.js");


var _jsxFileName = "D:\\WorkArea\\GitHub\\dtro-devuk-website-nextjs\\components\\atoms\\mdx\\MDXPrintRecipeButton.js",
    _this = undefined;





var MDXPrintRecipeButton = function MDXPrintRecipeButton(_ref) {
  var href = _ref.href;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    align: "center flex",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      "arial-label": "Print-recipe-button",
      role: "print",
      type: "submit",
      className: "p-2 mb-2 text-xs font-bold border-2 cursor-pointer text-surface md:p-4 bg-surfaceBackground border-brandEye md:text-base",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        href: href,
        className: "text-xs text-surface md:text-base",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_emoji_EmojiContainer__WEBPACK_IMPORTED_MODULE_3__["default"], {
          children: "\uD83D\uDDA8\uFE0F"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "items-center justify-items-center",
          children: " PRINTER FRIENDLY"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, _this);
};

_c = MDXPrintRecipeButton;
MDXPrintRecipeButton.propTypes = {
  href: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"]
};
MDXPrintRecipeButton.defaultProps = {
  href: '#recipe-card'
};
/* harmony default export */ __webpack_exports__["default"] = (MDXPrintRecipeButton);

var _c;

$RefreshReg$(_c, "MDXPrintRecipeButton");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hdG9tcy9lbW9qaS9FbW9qaUNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hdG9tcy9tZHgvTURYUHJpbnRSZWNpcGVCdXR0b24uanMiXSwibmFtZXMiOlsiRW1vamlDb250YWluZXIiLCJjaGlsZHJlbiIsIkVtb2ppV3JhcHBlciIsInR3Iiwic3BhbiIsInByb3BUeXBlcyIsIm5vZGUiLCJkZWZhdWx0UHJvcHMiLCJNRFhQcmludFJlY2lwZUJ1dHRvbiIsImhyZWYiLCJzdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsT0FBa0I7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7QUFDdkMsc0JBQU8scUVBQUMsWUFBRDtBQUFBLGNBQWVBO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFQO0FBQ0QsQ0FGRDs7S0FBTUQsYzs7QUFJTixJQUFNRSxZQUFZLEdBQUdDLHlEQUFFLENBQUNDLElBQU47QUFBQTtBQUFBO0FBQUEsR0FBVTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FBVixDQUFsQjs7QUFFQUosY0FBYyxDQUFDSyxTQUFmLEdBQTJCO0FBQ3pCSixVQUFRLEVBQUVLLCtDQUFJQTtBQURXLENBQTNCO0FBSUFOLGNBQWMsQ0FBQ08sWUFBZixHQUE4QjtBQUM1Qk4sVUFBUSxlQUFFO0FBQUE7QUFBQTtBQURrQixDQUE5QjtBQUllRCw2RUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QkE7QUFDQTtBQUVBOztBQUVBLElBQU1RLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIsT0FBYztBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVztBQUN6QyxzQkFDRTtBQUFLLFNBQUssRUFBQyxhQUFYO0FBQUEsMkJBQ0U7QUFDRSxxQkFBWSxxQkFEZDtBQUVFLFVBQUksRUFBQyxPQUZQO0FBR0UsVUFBSSxFQUFDLFFBSFA7QUFJRSxlQUFTLEVBQUMsMEhBSlo7QUFBQSw2QkFNRTtBQUFHLFlBQUksRUFBRUEsSUFBVDtBQUFlLGlCQUFTLEVBQUMsbUNBQXpCO0FBQUEsZ0NBQ0UscUVBQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRTtBQUFNLG1CQUFTLEVBQUMsbUNBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFlRCxDQWhCRDs7S0FBTUQsb0I7QUFrQk5BLG9CQUFvQixDQUFDSCxTQUFyQixHQUFpQztBQUMvQkksTUFBSSxFQUFFQyxpREFBTUE7QUFEbUIsQ0FBakM7QUFJQUYsb0JBQW9CLENBQUNELFlBQXJCLEdBQW9DO0FBQ2xDRSxNQUFJLEVBQUU7QUFENEIsQ0FBcEM7QUFJZUQsbUZBQWYiLCJmaWxlIjoic3RhdGljL2NodW5rcy84LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgbm9kZSB9IGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgdHcgZnJvbSAndHdpbi5tYWNybyc7XHJcblxyXG4vKioqXHJcbiAqIEVtb2ppcyBjYW4gYmUgZm91bmQgaGVyZTpcclxuICogQHNlZTpcclxuICogaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vcnhhdmllcnMvNzM2MDkwOFxyXG4gKiBodHRwczovL2Vtb2ppcGVkaWEub3JnL2Rvd24tYXJyb3cvXHJcbiAqL1xyXG5cclxuY29uc3QgRW1vamlDb250YWluZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgcmV0dXJuIDxFbW9qaVdyYXBwZXI+e2NoaWxkcmVufTwvRW1vamlXcmFwcGVyPjtcclxufTtcclxuXHJcbmNvbnN0IEVtb2ppV3JhcHBlciA9IHR3LnNwYW5gdy00OCBoLTQ4IHRleHQteHMgbWQ6dGV4dC0yeGwgcC0xIGN1cnNvci1kZWZhdWx0YDtcclxuXHJcbkVtb2ppQ29udGFpbmVyLnByb3BUeXBlcyA9IHtcclxuICBjaGlsZHJlbjogbm9kZSxcclxufTtcclxuXHJcbkVtb2ppQ29udGFpbmVyLmRlZmF1bHRQcm9wcyA9IHtcclxuICBjaGlsZHJlbjogPD7wn4y277iPPC8+LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRW1vamlDb250YWluZXI7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHN0cmluZyB9IGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuaW1wb3J0IEVtb2ppQ29udGFpbmVyIGZyb20gJy4uL2Vtb2ppL0Vtb2ppQ29udGFpbmVyJztcclxuXHJcbmNvbnN0IE1EWFByaW50UmVjaXBlQnV0dG9uID0gKHsgaHJlZiB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgYWxpZ249XCJjZW50ZXIgZmxleFwiPlxyXG4gICAgICA8YnV0dG9uXHJcbiAgICAgICAgYXJpYWwtbGFiZWw9XCJQcmludC1yZWNpcGUtYnV0dG9uXCJcclxuICAgICAgICByb2xlPVwicHJpbnRcIlxyXG4gICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgIGNsYXNzTmFtZT1cInAtMiBtYi0yIHRleHQteHMgZm9udC1ib2xkIGJvcmRlci0yIGN1cnNvci1wb2ludGVyIHRleHQtc3VyZmFjZSBtZDpwLTQgYmctc3VyZmFjZUJhY2tncm91bmQgYm9yZGVyLWJyYW5kRXllIG1kOnRleHQtYmFzZVwiXHJcbiAgICAgID5cclxuICAgICAgICA8YSBocmVmPXtocmVmfSBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtc3VyZmFjZSBtZDp0ZXh0LWJhc2VcIj5cclxuICAgICAgICAgIDxFbW9qaUNvbnRhaW5lcj7wn5ao77iPPC9FbW9qaUNvbnRhaW5lcj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIml0ZW1zLWNlbnRlciBqdXN0aWZ5LWl0ZW1zLWNlbnRlclwiPiBQUklOVEVSIEZSSUVORExZPC9zcGFuPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuTURYUHJpbnRSZWNpcGVCdXR0b24ucHJvcFR5cGVzID0ge1xyXG4gIGhyZWY6IHN0cmluZyxcclxufTtcclxuXHJcbk1EWFByaW50UmVjaXBlQnV0dG9uLmRlZmF1bHRQcm9wcyA9IHtcclxuICBocmVmOiAnI3JlY2lwZS1jYXJkJyxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1EWFByaW50UmVjaXBlQnV0dG9uO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9