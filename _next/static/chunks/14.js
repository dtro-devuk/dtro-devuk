(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[14],{

/***/ "./components/atoms/mdx/MDXRecipeContainsBar.js":
/*!******************************************************!*\
  !*** ./components/atoms/mdx/MDXRecipeContainsBar.js ***!
  \******************************************************/
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



var _jsxFileName = "D:\\WorkArea\\GitHub\\dtro-devuk-website-nextjs\\components\\atoms\\mdx\\MDXRecipeContainsBar.js",
    _this = undefined;




var MDXRecipeContainsBar = function MDXRecipeContainsBar(_ref) {
  var nuts = _ref.nuts,
      fish = _ref.fish,
      vegetarian = _ref.vegetarian,
      meat = _ref.meat;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "text-xs font-semibold text-white md:text-base",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      id: "recipe-bar",
      className: "flex flex-row items-center justify-around w-full",
      children: [nuts && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "flex flex-col items-center mr-5 md:flex-row",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(BadgeContainer, {
          nuts: true,
          children: "N"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "ml-1 text-xs",
          children: " Contains nuts"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 11
      }, _this), fish && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "flex flex-row items-center mr-5",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(BadgeContainer, {
          fish: true,
          children: "F"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "ml-1 text-xs",
          children: " Contains fish"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 11
      }, _this), vegetarian && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "flex flex-row items-center mr-5",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(BadgeContainer, {
          vegetarian: true,
          children: "V"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "ml-1 text-xs",
          children: "Suitable for Vegetarians"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 11
      }, _this), meat && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "flex flex-row items-center",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(BadgeContainer, {
          meat: true,
          children: "M"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "ml-1 text-xs",
          children: "Contains meat"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, _this);
};

_c = MDXRecipeContainsBar;

var BadgeContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "MDXRecipeContainsBar__BadgeContainer",
  componentId: "eys8om-0"
})(function (_ref2) {
  var nuts = _ref2.nuts,
      fish = _ref2.fish,
      vegetarian = _ref2.vegetarian,
      meat = _ref2.meat;
  return [{
    "display": "flex",
    "alignItems": "center",
    "justifyContent": "center",
    "width": "1.5rem",
    "height": "1.5rem",
    "fontSize": "0.75rem",
    "lineHeight": "1rem",
    "borderWidth": "2px",
    "--tw-border-opacity": "1",
    "borderColor": "rgba(255, 255, 255, var(--tw-border-opacity))",
    "borderRadius": "9999px"
  }, nuts && {
    "--tw-text-opacity": "1",
    "color": "rgba(255, 255, 255, var(--tw-text-opacity))",
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(0, 0, 0, var(--tw-bg-opacity))"
  }, fish && {
    "--tw-text-opacity": "1",
    "color": "rgba(255, 255, 255, var(--tw-text-opacity))",
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(0, 0, 0, var(--tw-bg-opacity))"
  }, vegetarian && {
    "--tw-text-opacity": "1",
    "color": "rgba(255, 255, 255, var(--tw-text-opacity))",
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(6, 95, 70, var(--tw-bg-opacity))"
  }, meat && {
    "--tw-text-opacity": "1",
    "color": "rgba(255, 255, 255, var(--tw-text-opacity))",
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(120, 53, 15, var(--tw-bg-opacity))"
  }];
});

MDXRecipeContainsBar.propTypes = {
  nuts: prop_types__WEBPACK_IMPORTED_MODULE_3__["bool"],
  fish: prop_types__WEBPACK_IMPORTED_MODULE_3__["bool"],
  vegetarian: prop_types__WEBPACK_IMPORTED_MODULE_3__["bool"],
  meat: prop_types__WEBPACK_IMPORTED_MODULE_3__["bool"]
};
MDXRecipeContainsBar.defaultProps = {
  nuts: false,
  fish: false,
  vegetarian: false,
  meat: false
};
/* harmony default export */ __webpack_exports__["default"] = (MDXRecipeContainsBar);

var _c;

$RefreshReg$(_c, "MDXRecipeContainsBar");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hdG9tcy9tZHgvTURYUmVjaXBlQ29udGFpbnNCYXIuanMiXSwibmFtZXMiOlsiTURYUmVjaXBlQ29udGFpbnNCYXIiLCJudXRzIiwiZmlzaCIsInZlZ2V0YXJpYW4iLCJtZWF0IiwiQmFkZ2VDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJwcm9wVHlwZXMiLCJib29sIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUdBLElBQU1BLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIsT0FBc0M7QUFBQSxNQUFuQ0MsSUFBbUMsUUFBbkNBLElBQW1DO0FBQUEsTUFBN0JDLElBQTZCLFFBQTdCQSxJQUE2QjtBQUFBLE1BQXZCQyxVQUF1QixRQUF2QkEsVUFBdUI7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7QUFDakUsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsK0NBQWY7QUFBQSwyQkFDRTtBQUFLLFFBQUUsRUFBQyxZQUFSO0FBQXFCLGVBQVMsRUFBQyxrREFBL0I7QUFBQSxpQkFDR0gsSUFBSSxpQkFDSDtBQUFLLGlCQUFTLEVBQUMsNkNBQWY7QUFBQSxnQ0FDRSxxRUFBQyxjQUFEO0FBQWdCLGNBQUksRUFBRSxJQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFO0FBQU0sbUJBQVMsRUFBQyxjQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGSixFQVFHQyxJQUFJLGlCQUNIO0FBQUssaUJBQVMsRUFBQyxpQ0FBZjtBQUFBLGdDQUVFLHFFQUFDLGNBQUQ7QUFBZ0IsY0FBSSxFQUFFLElBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGLGVBR0U7QUFBTSxtQkFBUyxFQUFDLGNBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVRKLEVBZ0JHQyxVQUFVLGlCQUNUO0FBQUssaUJBQVMsRUFBQyxpQ0FBZjtBQUFBLGdDQUNFLHFFQUFDLGNBQUQ7QUFBZ0Isb0JBQVUsRUFBRSxJQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFO0FBQU0sbUJBQVMsRUFBQyxjQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFqQkosRUF1QkdDLElBQUksaUJBQ0g7QUFBSyxpQkFBUyxFQUFDLDRCQUFmO0FBQUEsZ0NBQ0UscUVBQUMsY0FBRDtBQUFnQixjQUFJLEVBQUUsSUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRTtBQUFNLG1CQUFTLEVBQUMsY0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBeEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWtDRCxDQW5DRDs7S0FBTUosb0I7O0FBcUNOLElBQU1LLGNBQWMsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxHQUFjO0FBQUEsTUFBR04sSUFBSCxTQUFHQSxJQUFIO0FBQUEsTUFBU0MsSUFBVCxTQUFTQSxJQUFUO0FBQUEsTUFBZUMsVUFBZixTQUFlQSxVQUFmO0FBQUEsTUFBMkJDLElBQTNCLFNBQTJCQSxJQUEzQjtBQUFBLFNBQXNDLENBQ3BFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBRG9FLEVBR3RFSCxJQUFJLElBQU07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBSDRELEVBSXRFQyxJQUFJLElBQU07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBSjRELEVBS3RFQyxVQUFVLElBQU07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBTHNELEVBTXRFQyxJQUFJLElBQU07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBTjRELENBQXRDO0FBQUEsQ0FBZCxDQUFwQjs7QUFTQUosb0JBQW9CLENBQUNRLFNBQXJCLEdBQWlDO0FBQy9CUCxNQUFJLEVBQUVRLCtDQUR5QjtBQUUvQlAsTUFBSSxFQUFFTywrQ0FGeUI7QUFHL0JOLFlBQVUsRUFBRU0sK0NBSG1CO0FBSS9CTCxNQUFJLEVBQUVLLCtDQUFJQTtBQUpxQixDQUFqQztBQU9BVCxvQkFBb0IsQ0FBQ1UsWUFBckIsR0FBb0M7QUFDbENULE1BQUksRUFBRSxLQUQ0QjtBQUVsQ0MsTUFBSSxFQUFFLEtBRjRCO0FBR2xDQyxZQUFVLEVBQUUsS0FIc0I7QUFJbENDLE1BQUksRUFBRTtBQUo0QixDQUFwQztBQU9lSixtRkFBZiIsImZpbGUiOiJzdGF0aWMvY2h1bmtzLzE0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgYm9vbCB9IGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgdHcsIHsgc3R5bGVkIH0gZnJvbSAndHdpbi5tYWNybyc7XHJcblxyXG5jb25zdCBNRFhSZWNpcGVDb250YWluc0JhciA9ICh7IG51dHMsIGZpc2gsIHZlZ2V0YXJpYW4sIG1lYXQgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1zZW1pYm9sZCB0ZXh0LXdoaXRlIG1kOnRleHQtYmFzZVwiPlxyXG4gICAgICA8ZGl2IGlkPVwicmVjaXBlLWJhclwiIGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyIGp1c3RpZnktYXJvdW5kIHctZnVsbFwiPlxyXG4gICAgICAgIHtudXRzICYmIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgbXItNSBtZDpmbGV4LXJvd1wiPlxyXG4gICAgICAgICAgICA8QmFkZ2VDb250YWluZXIgbnV0cz17dHJ1ZX0+TjwvQmFkZ2VDb250YWluZXI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1sLTEgdGV4dC14c1wiPiBDb250YWlucyBudXRzPC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuXHJcbiAgICAgICAge2Zpc2ggJiYgKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlciBtci01XCI+XHJcbiAgICAgICAgICAgIHsvKiA8SWNvbiBjbGFzc05hbWU9XCJwci01XCIgaWNvbk5hbWU9XCJjaGFydHBpZVwiIGFyaWEtbGFiZWw9XCJuby1vZi1zZXJ2aW5nc1wiIHNpemU9XCIyeFwiIC8+eycgJ30gKi99XHJcbiAgICAgICAgICAgIDxCYWRnZUNvbnRhaW5lciBmaXNoPXt0cnVlfT5GPC9CYWRnZUNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWwtMSB0ZXh0LXhzXCI+IENvbnRhaW5zIGZpc2g8L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG5cclxuICAgICAgICB7dmVnZXRhcmlhbiAmJiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyIG1yLTVcIj5cclxuICAgICAgICAgICAgPEJhZGdlQ29udGFpbmVyIHZlZ2V0YXJpYW49e3RydWV9PlY8L0JhZGdlQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtbC0xIHRleHQteHNcIj5TdWl0YWJsZSBmb3IgVmVnZXRhcmlhbnM8L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG5cclxuICAgICAgICB7bWVhdCAmJiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxCYWRnZUNvbnRhaW5lciBtZWF0PXt0cnVlfT5NPC9CYWRnZUNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWwtMSB0ZXh0LXhzXCI+Q29udGFpbnMgbWVhdDwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IEJhZGdlQ29udGFpbmVyID0gc3R5bGVkLmRpdigoeyBudXRzLCBmaXNoLCB2ZWdldGFyaWFuLCBtZWF0IH0pID0+IFtcclxuICB0d2BmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB3LTYgaC02IHRleHQteHMgYm9yZGVyLTIgYm9yZGVyLXdoaXRlIHJvdW5kZWQtZnVsbCBgLFxyXG5cclxuICBudXRzICYmIHR3YHRleHQtd2hpdGUgYmctYmxhY2tgLFxyXG4gIGZpc2ggJiYgdHdgdGV4dC13aGl0ZSBiZy1ibGFja2AsXHJcbiAgdmVnZXRhcmlhbiAmJiB0d2B0ZXh0LXdoaXRlIGJnLWdyZWVuLTgwMGAsXHJcbiAgbWVhdCAmJiB0d2B0ZXh0LXdoaXRlIGJnLXllbGxvdy05MDBgLFxyXG5dKTtcclxuXHJcbk1EWFJlY2lwZUNvbnRhaW5zQmFyLnByb3BUeXBlcyA9IHtcclxuICBudXRzOiBib29sLFxyXG4gIGZpc2g6IGJvb2wsXHJcbiAgdmVnZXRhcmlhbjogYm9vbCxcclxuICBtZWF0OiBib29sLFxyXG59O1xyXG5cclxuTURYUmVjaXBlQ29udGFpbnNCYXIuZGVmYXVsdFByb3BzID0ge1xyXG4gIG51dHM6IGZhbHNlLFxyXG4gIGZpc2g6IGZhbHNlLFxyXG4gIHZlZ2V0YXJpYW46IGZhbHNlLFxyXG4gIG1lYXQ6IGZhbHNlLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTURYUmVjaXBlQ29udGFpbnNCYXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=