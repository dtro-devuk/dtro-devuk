webpackHotUpdate_N_E("pages/about",{

/***/ "./components/atoms/toggles/ToggleDarkmode.js":
/*!****************************************************!*\
  !*** ./components/atoms/toggles/ToggleDarkmode.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var D_WorkArea_GitHub_dtro_devuk_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-themes */ "./node_modules/next-themes/dist/index.modern.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../icon */ "./components/atoms/icon/index.js");




var _jsxFileName = "D:\\WorkArea\\GitHub\\dtro-devuk\\components\\atoms\\toggles\\ToggleDarkmode.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(D_WorkArea_GitHub_dtro_devuk_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Dark Mode Button
 * @description Toggle between dark mode and light mode using Tailwind CSS
 * @author dtro-devuk @github:dtro-devuk.io
 * @site https://github.com/dtro-devuk.github.io
 * @link https://github.com/dtro-devuk/nextjs-tailwind.starter
 */




var IconDark = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_icon__WEBPACK_IMPORTED_MODULE_5__["Icon"], {
  iconName: "moon",
  label: "toggle dark mode",
  size: "2x"
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 15,
  columnNumber: 18
}, undefined);

var IconLight = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_icon__WEBPACK_IMPORTED_MODULE_5__["Icon"], {
  iconName: "sun",
  label: "toggle light mode",
  size: "2x"
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 16,
  columnNumber: 19
}, undefined);

var ToggleButton = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button.withConfig({
  displayName: "ToggleDarkmode__ToggleButton",
  componentId: "m84xej-0"
})(["", " ", " ", " svg{", "}i{", "}"], {
  "zIndex": "10",
  "marginTop": "0.25rem",
  "@media (min-width: 1024px)": {
    "marginRight": "0px"
  }
}, {
  "marginLeft": "auto",
  "backgroundColor": "transparent"
}, {
  ":focus": {
    "outline": "2px solid transparent",
    "outlineOffset": "2px"
  }
}, {
  "width": "1.25rem",
  "height": "1.25rem",
  "@media (min-width: 768px)": {
    "width": "2.5rem",
    "height": "2.5rem"
  }
}, {
  "fontSize": "0.875rem",
  "lineHeight": "1.25rem",
  "@media (min-width: 768px)": {
    "fontSize": "1.125rem",
    "lineHeight": "1.75rem"
  }
});
/**
 * Dark Mode Toggle Button
 */


var ToggleDarkMode = function ToggleDarkMode() {
  _s();

  /**
   * Use Hooks useState and useEffect
   */
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      isMounted = _useState[0],
      setIsMounted = _useState[1]; // Set isMounted State


  var _useTheme = Object(next_themes__WEBPACK_IMPORTED_MODULE_4__["useTheme"])(),
      theme = _useTheme.theme,
      setTheme = _useTheme.setTheme; //extract and change the theme


  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      effect = _useState2[0],
      setEffect = _useState2[1];
  /**
   * Change the client-side theme after the component has mounted
   */


  var handleSwitchTheme = function handleSwitchTheme(event) {
    if (event.ctrlKey || event.metaKey || event.shiftKey) {
      return; // let the browser deal with the click natively
    }

    event.preventDefault();

    if (isMounted) {
      var currentTheme = theme === 'dark' ? 'light' : 'dark';
      setTheme(currentTheme);
      setEffect(true);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    setIsMounted(true); // Set to true when the component is mounted
  }, []);
  var textColor = "text-white";

  if (theme === 'light') {
    textColor = "text-brandGold";
  }

  var styledClass = "flex flex-row items-center text-white justify-items-center z-100 md:w-1/2 ".concat(textColor);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    className: styledClass,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(ToggleButton, {
      className: "".concat(effect && 'animate-rotate-center'),
      variant: "round",
      id: "darkmode-switch",
      "aria-label": "Toggle Dark Mode Button",
      role: "button",
      type: "button",
      isSmall: false,
      onClick: function onClick(event) {
        return handleSwitchTheme(event);
      },
      onAnimationEnd: function onAnimationEnd() {
        return setEffect(false);
      },
      children: isMounted && theme === 'dark' ? _objectSpread({}, IconDark) : _objectSpread({}, IconLight)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 70,
    columnNumber: 5
  }, _this);
};

_s(ToggleDarkMode, "6vzleHWnwHnjI6nGEPtI3hDa9IQ=", false, function () {
  return [next_themes__WEBPACK_IMPORTED_MODULE_4__["useTheme"]];
});

_c = ToggleDarkMode;
ToggleDarkMode.propTypes = {};
/* harmony default export */ __webpack_exports__["default"] = (ToggleDarkMode);

var _c;

$RefreshReg$(_c, "ToggleDarkMode");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hdG9tcy90b2dnbGVzL1RvZ2dsZURhcmttb2RlLmpzIl0sIm5hbWVzIjpbIkljb25EYXJrIiwiSWNvbkxpZ2h0IiwiVG9nZ2xlQnV0dG9uIiwic3R5bGVkIiwiYnV0dG9uIiwiVG9nZ2xlRGFya01vZGUiLCJ1c2VTdGF0ZSIsImlzTW91bnRlZCIsInNldElzTW91bnRlZCIsInVzZVRoZW1lIiwidGhlbWUiLCJzZXRUaGVtZSIsImVmZmVjdCIsInNldEVmZmVjdCIsImhhbmRsZVN3aXRjaFRoZW1lIiwiZXZlbnQiLCJjdHJsS2V5IiwibWV0YUtleSIsInNoaWZ0S2V5IiwicHJldmVudERlZmF1bHQiLCJjdXJyZW50VGhlbWUiLCJ1c2VFZmZlY3QiLCJ0ZXh0Q29sb3IiLCJzdHlsZWRDbGFzcyIsInByb3BUeXBlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBOztBQUVBLElBQU1BLFFBQVEsZ0JBQUcscUVBQUMsMENBQUQ7QUFBTSxVQUFRLEVBQUMsTUFBZjtBQUFzQixPQUFLLEVBQUMsa0JBQTVCO0FBQStDLE1BQUksRUFBQztBQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQWpCOztBQUNBLElBQU1DLFNBQVMsZ0JBQUcscUVBQUMsMENBQUQ7QUFBTSxVQUFRLEVBQUMsS0FBZjtBQUFxQixPQUFLLEVBQUMsbUJBQTNCO0FBQStDLE1BQUksRUFBQztBQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQWxCOztBQUVBLElBQU1DLFlBQVksR0FBR0MseURBQU0sQ0FBQ0MsTUFBVjtBQUFBO0FBQUE7QUFBQSx3Q0FDWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQURZLEVBRVo7QUFBQTtBQUFBO0FBQUEsQ0FGWSxFQUdaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUhZLEVBTVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQU5VLEVBU1Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQVRVLENBQWxCO0FBYUE7QUFDQTtBQUNBOzs7QUFDQSxJQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQU07QUFBQTs7QUFDM0I7QUFDRjtBQUNBO0FBSDZCLGtCQUlPQyxzREFBUSxDQUFDLEtBQUQsQ0FKZjtBQUFBLE1BSXBCQyxTQUpvQjtBQUFBLE1BSVRDLFlBSlMsaUJBSXdCOzs7QUFKeEIsa0JBS0NDLDREQUFRLEVBTFQ7QUFBQSxNQUtuQkMsS0FMbUIsYUFLbkJBLEtBTG1CO0FBQUEsTUFLWkMsUUFMWSxhQUtaQSxRQUxZLEVBS2E7OztBQUxiLG1CQU1DTCxzREFBUSxDQUFDLEtBQUQsQ0FOVDtBQUFBLE1BTXBCTSxNQU5vQjtBQUFBLE1BTVpDLFNBTlk7QUFRM0I7QUFDRjtBQUNBOzs7QUFDRSxNQUFNQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUNDLEtBQUQsRUFBVztBQUNuQyxRQUFJQSxLQUFLLENBQUNDLE9BQU4sSUFBaUJELEtBQUssQ0FBQ0UsT0FBdkIsSUFBa0NGLEtBQUssQ0FBQ0csUUFBNUMsRUFBc0Q7QUFDcEQsYUFEb0QsQ0FDNUM7QUFDVDs7QUFFREgsU0FBSyxDQUFDSSxjQUFOOztBQUVBLFFBQUlaLFNBQUosRUFBZTtBQUNiLFVBQU1hLFlBQVksR0FBR1YsS0FBSyxLQUFLLE1BQVYsR0FBbUIsT0FBbkIsR0FBNkIsTUFBbEQ7QUFDQUMsY0FBUSxDQUFDUyxZQUFELENBQVI7QUFDQVAsZUFBUyxDQUFDLElBQUQsQ0FBVDtBQUNEO0FBQ0YsR0FaRDs7QUFjQVEseURBQVMsQ0FBQyxZQUFNO0FBQ2RiLGdCQUFZLENBQUMsSUFBRCxDQUFaLENBRGMsQ0FDTTtBQUNyQixHQUZRLEVBRU4sRUFGTSxDQUFUO0FBSUEsTUFBSWMsU0FBUyxlQUFiOztBQUNBLE1BQUlaLEtBQUssS0FBSyxPQUFkLEVBQXVCO0FBQ3JCWSxhQUFTLG1CQUFUO0FBQ0Q7O0FBQ0QsTUFBTUMsV0FBVyx1RkFBZ0ZELFNBQWhGLENBQWpCO0FBRUEsc0JBQ0U7QUFBSyxhQUFTLEVBQUVDLFdBQWhCO0FBQUEsMkJBQ0UscUVBQUMsWUFBRDtBQUNFLGVBQVMsWUFBS1gsTUFBTSxJQUFJLHVCQUFmLENBRFg7QUFFRSxhQUFPLEVBQUMsT0FGVjtBQUdFLFFBQUUsRUFBQyxpQkFITDtBQUlFLG9CQUFXLHlCQUpiO0FBS0UsVUFBSSxFQUFDLFFBTFA7QUFNRSxVQUFJLEVBQUMsUUFOUDtBQU9FLGFBQU8sRUFBRSxLQVBYO0FBUUUsYUFBTyxFQUFFLGlCQUFDRyxLQUFEO0FBQUEsZUFBV0QsaUJBQWlCLENBQUNDLEtBQUQsQ0FBNUI7QUFBQSxPQVJYO0FBU0Usb0JBQWMsRUFBRTtBQUFBLGVBQU1GLFNBQVMsQ0FBQyxLQUFELENBQWY7QUFBQSxPQVRsQjtBQUFBLGdCQVdHTixTQUFTLElBQUlHLEtBQUssS0FBSyxNQUF2QixxQkFBcUNWLFFBQXJDLHNCQUF1REMsU0FBdkQ7QUFYSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBaUJELENBcEREOztHQUFNSSxjO1VBS3dCSSxvRDs7O0tBTHhCSixjO0FBc0ROQSxjQUFjLENBQUNtQixTQUFmLEdBQTJCLEVBQTNCO0FBRWVuQiw2RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hYm91dC5iMjJlYzFiNzUzNDRlYWJhYThiMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIERhcmsgTW9kZSBCdXR0b25cclxuICogQGRlc2NyaXB0aW9uIFRvZ2dsZSBiZXR3ZWVuIGRhcmsgbW9kZSBhbmQgbGlnaHQgbW9kZSB1c2luZyBUYWlsd2luZCBDU1NcclxuICogQGF1dGhvciBkdHJvLWRldnVrIEBnaXRodWI6ZHRyby1kZXZ1ay5pb1xyXG4gKiBAc2l0ZSBodHRwczovL2dpdGh1Yi5jb20vZHRyby1kZXZ1ay5naXRodWIuaW9cclxuICogQGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2R0cm8tZGV2dWsvbmV4dGpzLXRhaWx3aW5kLnN0YXJ0ZXJcclxuICovXHJcblxyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VUaGVtZSB9IGZyb20gJ25leHQtdGhlbWVzJztcclxuaW1wb3J0IHR3LCB7IHN0eWxlZCB9IGZyb20gJ3R3aW4ubWFjcm8nO1xyXG5cclxuaW1wb3J0IHsgSWNvbiB9IGZyb20gJy4uL2ljb24nO1xyXG5cclxuY29uc3QgSWNvbkRhcmsgPSA8SWNvbiBpY29uTmFtZT1cIm1vb25cIiBsYWJlbD1cInRvZ2dsZSBkYXJrIG1vZGVcIiBzaXplPVwiMnhcIiAvPjtcclxuY29uc3QgSWNvbkxpZ2h0ID0gPEljb24gaWNvbk5hbWU9XCJzdW5cIiBsYWJlbD1cInRvZ2dsZSBsaWdodCBtb2RlXCIgc2l6ZT1cIjJ4XCIgLz47XHJcblxyXG5jb25zdCBUb2dnbGVCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxyXG4gICR7dHdgei0xMCBtdC0xIGxnOm1yLTBgfVxyXG4gICR7dHdgbWwtYXV0byBiZy10cmFuc3BhcmVudGB9XHJcbiAgJHt0d2Bmb2N1czpvdXRsaW5lLW5vbmUgYH1cclxuXHJcbiAgc3ZnIHtcclxuICAgICR7dHdgdy01IGgtNSBtZDp3LTEwIG1kOmgtMTAgYH1cclxuICB9XHJcbiAgaSB7XHJcbiAgICAke3R3YHRleHQtc20gbWQ6dGV4dC1sZ2B9XHJcbiAgfVxyXG5gO1xyXG5cclxuLyoqXHJcbiAqIERhcmsgTW9kZSBUb2dnbGUgQnV0dG9uXHJcbiAqL1xyXG5jb25zdCBUb2dnbGVEYXJrTW9kZSA9ICgpID0+IHtcclxuICAvKipcclxuICAgKiBVc2UgSG9va3MgdXNlU3RhdGUgYW5kIHVzZUVmZmVjdFxyXG4gICAqL1xyXG4gIGNvbnN0IFtpc01vdW50ZWQsIHNldElzTW91bnRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7IC8vIFNldCBpc01vdW50ZWQgU3RhdGVcclxuICBjb25zdCB7IHRoZW1lLCBzZXRUaGVtZSB9ID0gdXNlVGhlbWUoKTsgLy9leHRyYWN0IGFuZCBjaGFuZ2UgdGhlIHRoZW1lXHJcbiAgY29uc3QgW2VmZmVjdCwgc2V0RWZmZWN0XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgLyoqXHJcbiAgICogQ2hhbmdlIHRoZSBjbGllbnQtc2lkZSB0aGVtZSBhZnRlciB0aGUgY29tcG9uZW50IGhhcyBtb3VudGVkXHJcbiAgICovXHJcbiAgY29uc3QgaGFuZGxlU3dpdGNoVGhlbWUgPSAoZXZlbnQpID0+IHtcclxuICAgIGlmIChldmVudC5jdHJsS2V5IHx8IGV2ZW50Lm1ldGFLZXkgfHwgZXZlbnQuc2hpZnRLZXkpIHtcclxuICAgICAgcmV0dXJuOyAvLyBsZXQgdGhlIGJyb3dzZXIgZGVhbCB3aXRoIHRoZSBjbGljayBuYXRpdmVseVxyXG4gICAgfVxyXG5cclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgaWYgKGlzTW91bnRlZCkge1xyXG4gICAgICBjb25zdCBjdXJyZW50VGhlbWUgPSB0aGVtZSA9PT0gJ2RhcmsnID8gJ2xpZ2h0JyA6ICdkYXJrJztcclxuICAgICAgc2V0VGhlbWUoY3VycmVudFRoZW1lKTtcclxuICAgICAgc2V0RWZmZWN0KHRydWUpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRJc01vdW50ZWQodHJ1ZSk7IC8vIFNldCB0byB0cnVlIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBtb3VudGVkXHJcbiAgfSwgW10pO1xyXG5cclxuICBsZXQgdGV4dENvbG9yID0gYHRleHQtd2hpdGVgO1xyXG4gIGlmICh0aGVtZSA9PT0gJ2xpZ2h0Jykge1xyXG4gICAgdGV4dENvbG9yID0gYHRleHQtYnJhbmRHb2xkYDtcclxuICB9XHJcbiAgY29uc3Qgc3R5bGVkQ2xhc3MgPSBgZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXIgdGV4dC13aGl0ZSBqdXN0aWZ5LWl0ZW1zLWNlbnRlciB6LTEwMCBtZDp3LTEvMiAke3RleHRDb2xvcn1gO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlZENsYXNzfT5cclxuICAgICAgPFRvZ2dsZUJ1dHRvblxyXG4gICAgICAgIGNsYXNzTmFtZT17YCR7ZWZmZWN0ICYmICdhbmltYXRlLXJvdGF0ZS1jZW50ZXInfWB9XHJcbiAgICAgICAgdmFyaWFudD1cInJvdW5kXCJcclxuICAgICAgICBpZD1cImRhcmttb2RlLXN3aXRjaFwiXHJcbiAgICAgICAgYXJpYS1sYWJlbD1cIlRvZ2dsZSBEYXJrIE1vZGUgQnV0dG9uXCJcclxuICAgICAgICByb2xlPVwiYnV0dG9uXCJcclxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICBpc1NtYWxsPXtmYWxzZX1cclxuICAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IGhhbmRsZVN3aXRjaFRoZW1lKGV2ZW50KX1cclxuICAgICAgICBvbkFuaW1hdGlvbkVuZD17KCkgPT4gc2V0RWZmZWN0KGZhbHNlKX1cclxuICAgICAgPlxyXG4gICAgICAgIHtpc01vdW50ZWQgJiYgdGhlbWUgPT09ICdkYXJrJyA/IHsgLi4uSWNvbkRhcmsgfSA6IHsgLi4uSWNvbkxpZ2h0IH19XHJcbiAgICAgIDwvVG9nZ2xlQnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcblRvZ2dsZURhcmtNb2RlLnByb3BUeXBlcyA9IHt9O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG9nZ2xlRGFya01vZGU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=