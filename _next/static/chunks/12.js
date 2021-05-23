(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[12],{

/***/ "./components/atoms/hr/Hr.js":
/*!***********************************!*\
  !*** ./components/atoms/hr/Hr.js ***!
  \***********************************/
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



var _jsxFileName = "D:\\WorkArea\\GitHub\\dtro-devuk-website-nextjs\\components\\atoms\\hr\\Hr.js",
    _this = undefined;


 // import styled from 'styled-components';

var HrType = ['primary', 'secondary'];

var HrContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].hr.withConfig({
  displayName: "Hr__HrContainer",
  componentId: "ic6b7s-0"
})(function (_ref) {
  var variant = _ref.variant,
      isFullWidth = _ref.isFullWidth;
  return [{
    "fontSize": "0.75rem",
    "lineHeight": "1rem",
    "borderWidth": "2px"
  }, !isFullWidth && {
    "margin": "1.25rem"
  }, variant === 'primary' && {
    "borderColor": "var(--ui-hr-primary)",
    "backgroundColor": "var(--ui-hr-primary)"
  }, variant === 'secondary' && {
    "borderColor": "var(--ui-hr-secondary)",
    "backgroundColor": "var(--ui-hr-secondary)"
  }];
});

var HR = function HR(_ref2) {
  var variant = _ref2.variant,
      isFullWidth = _ref2.isFullWidth;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(HrContainer, {
    variant: variant,
    isFullWidth: isFullWidth
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 10
  }, _this);
};

_c = HR;
HR.propTypes = {
  /** Variant is the Hr type */
  variant: Object(prop_types__WEBPACK_IMPORTED_MODULE_3__["oneOf"])(HrType).isRequired,

  /** Full Screen width ? */
  isFullWidth: prop_types__WEBPACK_IMPORTED_MODULE_3__["bool"]
};
HR.defaultProps = {
  variant: 'primary',
  isFullWidth: false
};
/* harmony default export */ __webpack_exports__["default"] = (HR);

var _c;

$RefreshReg$(_c, "HR");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hdG9tcy9oci9Ici5qcyJdLCJuYW1lcyI6WyJIclR5cGUiLCJIckNvbnRhaW5lciIsInN0eWxlZCIsImhyIiwidmFyaWFudCIsImlzRnVsbFdpZHRoIiwiSFIiLCJwcm9wVHlwZXMiLCJvbmVPZiIsImlzUmVxdWlyZWQiLCJib29sIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUVBOztBQUdBLElBQU1BLE1BQU0sR0FBRyxDQUFDLFNBQUQsRUFBWSxXQUFaLENBQWY7O0FBRUEsSUFBTUMsV0FBVyxHQUFHQyx5REFBTSxDQUFDQyxFQUFWO0FBQUE7QUFBQTtBQUFBLEdBQWE7QUFBQSxNQUFHQyxPQUFILFFBQUdBLE9BQUg7QUFBQSxNQUFZQyxXQUFaLFFBQVlBLFdBQVo7QUFBQSxTQUE4QixDQUN4RDtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBRHdELEVBRzFELENBQUNBLFdBQUQsSUFBa0I7QUFBQTtBQUFBLEdBSHdDLEVBSzFERCxPQUFPLEtBQUssU0FBWixJQUEyQjtBQUFBO0FBQUE7QUFBQSxHQUwrQixFQU8xREEsT0FBTyxLQUFLLFdBQVosSUFBNkI7QUFBQTtBQUFBO0FBQUEsR0FQNkIsQ0FBOUI7QUFBQSxDQUFiLENBQWpCOztBQVVBLElBQU1FLEVBQUUsR0FBRyxTQUFMQSxFQUFLLFFBQThCO0FBQUEsTUFBM0JGLE9BQTJCLFNBQTNCQSxPQUEyQjtBQUFBLE1BQWxCQyxXQUFrQixTQUFsQkEsV0FBa0I7QUFDdkMsc0JBQU8scUVBQUMsV0FBRDtBQUFhLFdBQU8sRUFBRUQsT0FBdEI7QUFBK0IsZUFBVyxFQUFFQztBQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVA7QUFDRCxDQUZEOztLQUFNQyxFO0FBSU5BLEVBQUUsQ0FBQ0MsU0FBSCxHQUFlO0FBQ2I7QUFDQUgsU0FBTyxFQUFFSSx3REFBSyxDQUFDUixNQUFELENBQUwsQ0FBY1MsVUFGVjs7QUFHYjtBQUNBSixhQUFXLEVBQUVLLCtDQUFJQTtBQUpKLENBQWY7QUFPQUosRUFBRSxDQUFDSyxZQUFILEdBQWtCO0FBQ2hCUCxTQUFPLEVBQUUsU0FETztBQUVoQkMsYUFBVyxFQUFFO0FBRkcsQ0FBbEI7QUFLZUMsaUVBQWYiLCJmaWxlIjoic3RhdGljL2NodW5rcy8xMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGJvb2wsIG9uZU9mIH0gZnJvbSAncHJvcC10eXBlcyc7XHJcbi8vIGltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgdHcsIHsgc3R5bGVkIH0gZnJvbSAndHdpbi5tYWNybyc7XHJcblxyXG5jb25zdCBIclR5cGUgPSBbJ3ByaW1hcnknLCAnc2Vjb25kYXJ5J107XHJcblxyXG5jb25zdCBIckNvbnRhaW5lciA9IHN0eWxlZC5ocigoeyB2YXJpYW50LCBpc0Z1bGxXaWR0aCB9KSA9PiBbXHJcbiAgdHdgdGV4dC14cyBib3JkZXItMmAsXHJcblxyXG4gICFpc0Z1bGxXaWR0aCAmJiB0d2BtLTVgLFxyXG5cclxuICB2YXJpYW50ID09PSAncHJpbWFyeScgJiYgdHdgYm9yZGVyLXByaW1hcnlIciBiZy1wcmltYXJ5SHJgLFxyXG5cclxuICB2YXJpYW50ID09PSAnc2Vjb25kYXJ5JyAmJiB0d2AgYm9yZGVyLXNlY29uZGFyeUhyIGJnLXNlY29uZGFyeUhyYCxcclxuXSk7XHJcblxyXG5jb25zdCBIUiA9ICh7IHZhcmlhbnQsIGlzRnVsbFdpZHRoIH0pID0+IHtcclxuICByZXR1cm4gPEhyQ29udGFpbmVyIHZhcmlhbnQ9e3ZhcmlhbnR9IGlzRnVsbFdpZHRoPXtpc0Z1bGxXaWR0aH0gLz47XHJcbn07XHJcblxyXG5IUi5wcm9wVHlwZXMgPSB7XHJcbiAgLyoqIFZhcmlhbnQgaXMgdGhlIEhyIHR5cGUgKi9cclxuICB2YXJpYW50OiBvbmVPZihIclR5cGUpLmlzUmVxdWlyZWQsXHJcbiAgLyoqIEZ1bGwgU2NyZWVuIHdpZHRoID8gKi9cclxuICBpc0Z1bGxXaWR0aDogYm9vbCxcclxufTtcclxuXHJcbkhSLmRlZmF1bHRQcm9wcyA9IHtcclxuICB2YXJpYW50OiAncHJpbWFyeScsXHJcbiAgaXNGdWxsV2lkdGg6IGZhbHNlLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSFI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=