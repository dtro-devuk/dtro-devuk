webpackHotUpdate_N_E(4,{

/***/ "./components/atoms/mdx/MDXRecipeHeatScale.js":
/*!****************************************************!*\
  !*** ./components/atoms/mdx/MDXRecipeHeatScale.js ***!
  \****************************************************/
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
/* harmony import */ var _icon_Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../icon/Icon */ "./components/atoms/icon/Icon.js");



var _jsxFileName = "D:\\WorkArea\\GitHub\\dtro-devuk-website-nextjs\\components\\atoms\\mdx\\MDXRecipeHeatScale.js",
    _this = undefined;





var MDXRecipeHeatScale = function MDXRecipeHeatScale(_ref) {
  var heat = _ref.heat;
  var heatLevels = Array.from({
    length: heat
  }, function (_, index) {
    return index + 1;
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "text-xs font-semibold text-white md:text-base",
    children: heat > 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "mt-2",
      children: ['Heat Scale:', heatLevels.map(function (index) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(EmojiContainer, {
          children: "\uD83C\uDF36\uFE0F"
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 13
        }, _this);
      })]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }, _this) : null
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, _this);
};

_c = MDXRecipeHeatScale;

var EmojiContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span.withConfig({
  displayName: "MDXRecipeHeatScale__EmojiContainer",
  componentId: "u7hm0h-0"
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

MDXRecipeHeatScale.propTypes = {
  /** Specify the Heat */
  heat: prop_types__WEBPACK_IMPORTED_MODULE_3__["number"]
};
/* harmony default export */ __webpack_exports__["default"] = (MDXRecipeHeatScale);

var _c;

$RefreshReg$(_c, "MDXRecipeHeatScale");

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

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hdG9tcy9tZHgvTURYUmVjaXBlSGVhdFNjYWxlLmpzIl0sIm5hbWVzIjpbIk1EWFJlY2lwZUhlYXRTY2FsZSIsImhlYXQiLCJoZWF0TGV2ZWxzIiwiQXJyYXkiLCJmcm9tIiwibGVuZ3RoIiwiXyIsImluZGV4IiwibWFwIiwiRW1vamlDb250YWluZXIiLCJ0dyIsInNwYW4iLCJwcm9wVHlwZXMiLCJudW1iZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBSUEsSUFBTUEsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixPQUFjO0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXO0FBQ3ZDLE1BQU1DLFVBQVUsR0FBR0MsS0FBSyxDQUFDQyxJQUFOLENBQVc7QUFBRUMsVUFBTSxFQUFFSjtBQUFWLEdBQVgsRUFBNkIsVUFBQ0ssQ0FBRCxFQUFJQyxLQUFKO0FBQUEsV0FBY0EsS0FBSyxHQUFHLENBQXRCO0FBQUEsR0FBN0IsQ0FBbkI7QUFFQSxzQkFDRTtBQUFLLGFBQVMsRUFBQywrQ0FBZjtBQUFBLGNBQ0dOLElBQUksR0FBRyxDQUFQLGdCQUNDO0FBQUssZUFBUyxFQUFDLE1BQWY7QUFBQSxpQkFDRyxhQURILEVBR0dDLFVBQVUsQ0FBQ00sR0FBWCxDQUFlLFVBQUNELEtBQUQ7QUFBQSw0QkFDZCxxRUFBQyxjQUFEO0FBQUE7QUFBQSxXQUFxQkEsS0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEYztBQUFBLE9BQWYsQ0FISDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERCxHQVFHO0FBVE47QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBYUQsQ0FoQkQ7O0tBQU1QLGtCOztBQWtCTixJQUFNUyxjQUFjLEdBQUdDLHlEQUFFLENBQUNDLElBQU47QUFBQTtBQUFBO0FBQUEsR0FBVTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FBVixDQUFwQjs7QUFFQVgsa0JBQWtCLENBQUNZLFNBQW5CLEdBQStCO0FBQzdCO0FBQ0FYLE1BQUksRUFBRVksaURBQU1BO0FBRmlCLENBQS9CO0FBS2ViLGlGQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrLzQuYjZlZGNhMjhhZjUwMGFlMjdjY2MuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IG51bWJlciB9IGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgSWNvbiBmcm9tICcuLi9pY29uL0ljb24nO1xyXG5cclxuaW1wb3J0IHR3IGZyb20gJ3R3aW4ubWFjcm8nO1xyXG5cclxuY29uc3QgTURYUmVjaXBlSGVhdFNjYWxlID0gKHsgaGVhdCB9KSA9PiB7XHJcbiAgY29uc3QgaGVhdExldmVscyA9IEFycmF5LmZyb20oeyBsZW5ndGg6IGhlYXQgfSwgKF8sIGluZGV4KSA9PiBpbmRleCArIDEpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdGV4dC13aGl0ZSBtZDp0ZXh0LWJhc2VcIj5cclxuICAgICAge2hlYXQgPiAwID8gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMlwiPlxyXG4gICAgICAgICAgeydIZWF0IFNjYWxlOid9XHJcbiAgICAgICAgICB7LyogPEljb24gY2xhc3NOYW1lPVwicHItMlwiIGljb25OYW1lPVwicGVwcGVyaG90XCIgYXJpYS1sYWJlbD1cInBlcHBlci1oZWF0LWxldmVsXCIgc2l6ZT1cIjJ4XCIgLz4gKi99XHJcbiAgICAgICAgICB7aGVhdExldmVscy5tYXAoKGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxFbW9qaUNvbnRhaW5lciBrZXk9e2luZGV4fT7wn4y277iPPC9FbW9qaUNvbnRhaW5lcj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApIDogbnVsbH1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBFbW9qaUNvbnRhaW5lciA9IHR3LnNwYW5gdy00OCBoLTQ4IHRleHQteHMgbWQ6dGV4dC0yeGwgcC0xIGN1cnNvci1kZWZhdWx0YDtcclxuXHJcbk1EWFJlY2lwZUhlYXRTY2FsZS5wcm9wVHlwZXMgPSB7XHJcbiAgLyoqIFNwZWNpZnkgdGhlIEhlYXQgKi9cclxuICBoZWF0OiBudW1iZXIsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNRFhSZWNpcGVIZWF0U2NhbGU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=