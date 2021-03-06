webpackHotUpdate_N_E("pages/index",{

/***/ "./components/atoms/logos/LogoText.js":
/*!********************************************!*\
  !*** ./components/atoms/logos/LogoText.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);



var _jsxFileName = "D:\\WorkArea\\GitHub\\dtro-devuk\\components\\atoms\\logos\\LogoText.js",
    _this = undefined;





/**
 * Main Logo Text
 * @param {*} param0
 */
var LogoText = function LogoText(_ref) {
  var text = _ref.text,
      color = _ref.color,
      colorTwo = _ref.colorTwo,
      hoverColor = _ref.hoverColor,
      fontFamily = _ref.fontFamily,
      isAnimated = _ref.isAnimated,
      variant = _ref.variant;
  var values = text.split('-');
  var classList = "hover:text-".concat(hoverColor, " text-").concat(color, " ");
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(LogoTextContainer, {
      isAnimated: isAnimated,
      className: classList,
      variant: variant,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Tag, {
        className: "italic font-".concat(fontFamily, " font-black"),
        children: values[0]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Tag, {
        className: "italic font-".concat(fontFamily, " text-").concat(colorTwo, " hover:text-").concat(hoverColor, " font-semibold"),
        children: ['-', values[1]]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, _this);
};

_c = LogoText;

var LogoTextContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "LogoText__LogoTextContainer",
  componentId: "e0zrln-0"
})(function (_ref2) {
  var isAnimated = _ref2.isAnimated,
      variant = _ref2.variant;
  return [{
    "flexDirection": "row",
    "letterSpacing": "0.025em",
    "cursor": "pointer",
    "animation": "none"
  }, variant === 'navbar' && {
    "fontSize": "1rem",
    "lineHeight": "1.5rem",
    "@media (min-width: 768px)": {
      "fontSize": "1.25rem",
      "lineHeight": "1.75rem"
    }
  }, variant === 'footer' && {
    "fontSize": "0.875rem",
    "lineHeight": "1.25rem",
    "@media (min-width: 768px)": {
      "fontSize": "1.125rem",
      "lineHeight": "1.75rem"
    }
  }, variant === 'responsive' && {
    "fontSize": "1.5rem",
    "lineHeight": "2rem",
    "@media (min-width: 768px)": {
      "fontSize": "2.25rem",
      "lineHeight": "2.5rem"
    },
    "@media (min-width: 1024px)": {
      "fontSize": "3.75rem",
      "lineHeight": "1"
    }
  }, variant === 'landing' && {
    "fontSize": "2.25rem",
    "lineHeight": "2.5rem",
    "@media (min-width: 768px)": {
      "fontSize": "3.75rem",
      "lineHeight": "1"
    },
    "@media (min-width: 1024px)": {
      "fontSize": "6rem",
      "lineHeight": "1"
    }
  }, isAnimated && {
    "@media (prefers-reduced-motion: no-preference)": {
      "animation": "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite"
    }
  }];
});

var Tag = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span.withConfig({
  displayName: "LogoText__Tag",
  componentId: "e0zrln-1"
})({});

LogoText.propTypes = {
  /** The target for the Text, which affect size and colors etc */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOf(['navbar', 'footer', 'responsive']),

  /** The colour of the opening and closing tags. */
  accent: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,

  /** The colour of main text. */
  color: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,

  /** The secondary colour of the text. */
  colorTwo: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,

  /** The colour when you hover over the logo. */
  hoverColor: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,

  /** The main text of the logo for example, your name. */
  text: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string.isRequired,

  /** The font family of the main text  */
  fontFamily: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,

  /** The property is set to true to trigger default animation ?  */
  isAnimated: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool
};
LogoText.defaultProps = {
  variant: 'responsive',
  color: 'brandEye',
  colorTwo: 'brandCream',
  hoverColor: 'brandGold',
  text: 'dtro-devuk',
  fontFamily: 'Grandstander-VariableFont',
  isAnimated: false
};
/* harmony default export */ __webpack_exports__["default"] = (LogoText);

var _c;

$RefreshReg$(_c, "LogoText");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hdG9tcy9sb2dvcy9Mb2dvVGV4dC5qcyJdLCJuYW1lcyI6WyJMb2dvVGV4dCIsInRleHQiLCJjb2xvciIsImNvbG9yVHdvIiwiaG92ZXJDb2xvciIsImZvbnRGYW1pbHkiLCJpc0FuaW1hdGVkIiwidmFyaWFudCIsInZhbHVlcyIsInNwbGl0IiwiY2xhc3NMaXN0IiwiTG9nb1RleHRDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJUYWciLCJ0dyIsInNwYW4iLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvbmVPZiIsImFjY2VudCIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJib29sIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQTRFO0FBQUEsTUFBekVDLElBQXlFLFFBQXpFQSxJQUF5RTtBQUFBLE1BQW5FQyxLQUFtRSxRQUFuRUEsS0FBbUU7QUFBQSxNQUE1REMsUUFBNEQsUUFBNURBLFFBQTREO0FBQUEsTUFBbERDLFVBQWtELFFBQWxEQSxVQUFrRDtBQUFBLE1BQXRDQyxVQUFzQyxRQUF0Q0EsVUFBc0M7QUFBQSxNQUExQkMsVUFBMEIsUUFBMUJBLFVBQTBCO0FBQUEsTUFBZEMsT0FBYyxRQUFkQSxPQUFjO0FBQzNGLE1BQU1DLE1BQU0sR0FBR1AsSUFBSSxDQUFDUSxLQUFMLENBQVcsR0FBWCxDQUFmO0FBRUEsTUFBTUMsU0FBUyx3QkFBaUJOLFVBQWpCLG1CQUFvQ0YsS0FBcEMsTUFBZjtBQUVBLHNCQUNFLHFFQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLEdBQVg7QUFBQSwyQkFDRSxxRUFBQyxpQkFBRDtBQUFtQixnQkFBVSxFQUFFSSxVQUEvQjtBQUEyQyxlQUFTLEVBQUVJLFNBQXREO0FBQWlFLGFBQU8sRUFBRUgsT0FBMUU7QUFBQSw4QkFDRSxxRUFBQyxHQUFEO0FBQUssaUJBQVMsd0JBQWlCRixVQUFqQixnQkFBZDtBQUFBLGtCQUF5REcsTUFBTSxDQUFDLENBQUQ7QUFBL0Q7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUUscUVBQUMsR0FBRDtBQUNFLGlCQUFTLHdCQUFpQkgsVUFBakIsbUJBQW9DRixRQUFwQyx5QkFBMkRDLFVBQTNELG1CQURYO0FBQUEsbUJBR0csR0FISCxFQUlHSSxNQUFNLENBQUMsQ0FBRCxDQUpUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWFELENBbEJEOztLQUFNUixROztBQW9CTixJQUFNVyxpQkFBaUIsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxHQUFjO0FBQUEsTUFBR1AsVUFBSCxTQUFHQSxVQUFIO0FBQUEsTUFBZUMsT0FBZixTQUFlQSxPQUFmO0FBQUEsU0FBNkIsQ0FDOUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBRDhELEVBR2hFQSxPQUFPLEtBQUssUUFBWixJQUEwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBSHNDLEVBS2hFQSxPQUFPLEtBQUssUUFBWixJQUEwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBTHNDLEVBT2hFQSxPQUFPLEtBQUssWUFBWixJQUE4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FQa0MsRUFTaEVBLE9BQU8sS0FBSyxTQUFaLElBQTJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQVRxQyxFQVdoRUQsVUFBVSxJQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FYZ0QsQ0FBN0I7QUFBQSxDQUFkLENBQXZCOztBQWNBLElBQU1RLEdBQUcsR0FBR0MseURBQUUsQ0FBQ0MsSUFBTjtBQUFBO0FBQUE7QUFBQSxHQUFVLEVBQVYsQ0FBVDs7QUFFQWhCLFFBQVEsQ0FBQ2lCLFNBQVQsR0FBcUI7QUFDbkI7QUFDQVYsU0FBTyxFQUFFVyxpREFBUyxDQUFDQyxLQUFWLENBQWdCLENBQUMsUUFBRCxFQUFXLFFBQVgsRUFBcUIsWUFBckIsQ0FBaEIsQ0FGVTs7QUFHbkI7QUFDQUMsUUFBTSxFQUFFRixpREFBUyxDQUFDRyxNQUpDOztBQUtuQjtBQUNBbkIsT0FBSyxFQUFFZ0IsaURBQVMsQ0FBQ0csTUFORTs7QUFPbkI7QUFDQWxCLFVBQVEsRUFBRWUsaURBQVMsQ0FBQ0csTUFSRDs7QUFTbkI7QUFDQWpCLFlBQVUsRUFBRWMsaURBQVMsQ0FBQ0csTUFWSDs7QUFXbkI7QUFDQXBCLE1BQUksRUFBRWlCLGlEQUFTLENBQUNHLE1BQVYsQ0FBaUJDLFVBWko7O0FBYW5CO0FBQ0FqQixZQUFVLEVBQUVhLGlEQUFTLENBQUNHLE1BZEg7O0FBZW5CO0FBQ0FmLFlBQVUsRUFBRVksaURBQVMsQ0FBQ0s7QUFoQkgsQ0FBckI7QUFtQkF2QixRQUFRLENBQUN3QixZQUFULEdBQXdCO0FBQ3RCakIsU0FBTyxFQUFFLFlBRGE7QUFFdEJMLE9BQUssRUFBRSxVQUZlO0FBR3RCQyxVQUFRLEVBQUUsWUFIWTtBQUl0QkMsWUFBVSxFQUFFLFdBSlU7QUFLdEJILE1BQUksRUFBRSxZQUxnQjtBQU10QkksWUFBVSxFQUFFLDJCQU5VO0FBT3RCQyxZQUFVLEVBQUU7QUFQVSxDQUF4QjtBQVVlTix1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5jZDVlNGQ0NjlhNjdmMDEyNzljNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHR3LCB7IHN0eWxlZCB9IGZyb20gJ3R3aW4ubWFjcm8nO1xyXG5cclxuLyoqXHJcbiAqIE1haW4gTG9nbyBUZXh0XHJcbiAqIEBwYXJhbSB7Kn0gcGFyYW0wXHJcbiAqL1xyXG5jb25zdCBMb2dvVGV4dCA9ICh7IHRleHQsIGNvbG9yLCBjb2xvclR3bywgaG92ZXJDb2xvciwgZm9udEZhbWlseSwgaXNBbmltYXRlZCwgdmFyaWFudCB9KSA9PiB7XHJcbiAgY29uc3QgdmFsdWVzID0gdGV4dC5zcGxpdCgnLScpO1xyXG5cclxuICBjb25zdCBjbGFzc0xpc3QgPSBgaG92ZXI6dGV4dC0ke2hvdmVyQ29sb3J9IHRleHQtJHtjb2xvcn0gYDtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgIDxMb2dvVGV4dENvbnRhaW5lciBpc0FuaW1hdGVkPXtpc0FuaW1hdGVkfSBjbGFzc05hbWU9e2NsYXNzTGlzdH0gdmFyaWFudD17dmFyaWFudH0+XHJcbiAgICAgICAgPFRhZyBjbGFzc05hbWU9e2BpdGFsaWMgZm9udC0ke2ZvbnRGYW1pbHl9IGZvbnQtYmxhY2tgfT57dmFsdWVzWzBdfTwvVGFnPlxyXG4gICAgICAgIDxUYWdcclxuICAgICAgICAgIGNsYXNzTmFtZT17YGl0YWxpYyBmb250LSR7Zm9udEZhbWlseX0gdGV4dC0ke2NvbG9yVHdvfSBob3Zlcjp0ZXh0LSR7aG92ZXJDb2xvcn0gZm9udC1zZW1pYm9sZGB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgeyctJ31cclxuICAgICAgICAgIHt2YWx1ZXNbMV19XHJcbiAgICAgICAgPC9UYWc+XHJcbiAgICAgIDwvTG9nb1RleHRDb250YWluZXI+XHJcbiAgICA8L0xpbms+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IExvZ29UZXh0Q29udGFpbmVyID0gc3R5bGVkLmRpdigoeyBpc0FuaW1hdGVkLCB2YXJpYW50IH0pID0+IFtcclxuICB0d2BmbGV4LXJvdyB0cmFja2luZy13aWRlIGN1cnNvci1wb2ludGVyIGFuaW1hdGUtbm9uZWAsXHJcblxyXG4gIHZhcmlhbnQgPT09ICduYXZiYXInICYmIHR3YHRleHQtYmFzZSBtZDp0ZXh0LXhsYCxcclxuXHJcbiAgdmFyaWFudCA9PT0gJ2Zvb3RlcicgJiYgdHdgdGV4dC1zbSBtZDp0ZXh0LWxnYCxcclxuXHJcbiAgdmFyaWFudCA9PT0gJ3Jlc3BvbnNpdmUnICYmIHR3YHRleHQtMnhsIG1kOnRleHQtNHhsIGxnOnRleHQtNnhsYCxcclxuXHJcbiAgdmFyaWFudCA9PT0gJ2xhbmRpbmcnICYmIHR3YHRleHQtNHhsIG1kOnRleHQtNnhsIGxnOnRleHQtOHhsYCxcclxuXHJcbiAgaXNBbmltYXRlZCAmJiB0d2Btb3Rpb24tc2FmZTphbmltYXRlLXB1bHNlYCxcclxuXSk7XHJcblxyXG5jb25zdCBUYWcgPSB0dy5zcGFuYGA7XHJcblxyXG5Mb2dvVGV4dC5wcm9wVHlwZXMgPSB7XHJcbiAgLyoqIFRoZSB0YXJnZXQgZm9yIHRoZSBUZXh0LCB3aGljaCBhZmZlY3Qgc2l6ZSBhbmQgY29sb3JzIGV0YyAqL1xyXG4gIHZhcmlhbnQ6IFByb3BUeXBlcy5vbmVPZihbJ25hdmJhcicsICdmb290ZXInLCAncmVzcG9uc2l2ZSddKSxcclxuICAvKiogVGhlIGNvbG91ciBvZiB0aGUgb3BlbmluZyBhbmQgY2xvc2luZyB0YWdzLiAqL1xyXG4gIGFjY2VudDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvKiogVGhlIGNvbG91ciBvZiBtYWluIHRleHQuICovXHJcbiAgY29sb3I6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqIFRoZSBzZWNvbmRhcnkgY29sb3VyIG9mIHRoZSB0ZXh0LiAqL1xyXG4gIGNvbG9yVHdvOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKiBUaGUgY29sb3VyIHdoZW4geW91IGhvdmVyIG92ZXIgdGhlIGxvZ28uICovXHJcbiAgaG92ZXJDb2xvcjogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvKiogVGhlIG1haW4gdGV4dCBvZiB0aGUgbG9nbyBmb3IgZXhhbXBsZSwgeW91ciBuYW1lLiAqL1xyXG4gIHRleHQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAvKiogVGhlIGZvbnQgZmFtaWx5IG9mIHRoZSBtYWluIHRleHQgICovXHJcbiAgZm9udEZhbWlseTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvKiogVGhlIHByb3BlcnR5IGlzIHNldCB0byB0cnVlIHRvIHRyaWdnZXIgZGVmYXVsdCBhbmltYXRpb24gPyAgKi9cclxuICBpc0FuaW1hdGVkOiBQcm9wVHlwZXMuYm9vbCxcclxufTtcclxuXHJcbkxvZ29UZXh0LmRlZmF1bHRQcm9wcyA9IHtcclxuICB2YXJpYW50OiAncmVzcG9uc2l2ZScsXHJcbiAgY29sb3I6ICdicmFuZEV5ZScsXHJcbiAgY29sb3JUd286ICdicmFuZENyZWFtJyxcclxuICBob3ZlckNvbG9yOiAnYnJhbmRHb2xkJyxcclxuICB0ZXh0OiAnZHRyby1kZXZ1aycsXHJcbiAgZm9udEZhbWlseTogJ0dyYW5kc3RhbmRlci1WYXJpYWJsZUZvbnQnLFxyXG4gIGlzQW5pbWF0ZWQ6IGZhbHNlLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9nb1RleHQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=