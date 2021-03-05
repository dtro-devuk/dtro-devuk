webpackHotUpdate_N_E("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_WorkArea_GitHub_dtro_devuk_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var D_WorkArea_GitHub_dtro_devuk_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-themes */ "./node_modules/next-themes/dist/index.modern.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/global.css */ "./styles/global.css");
/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_global_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");





var _jsxFileName = "D:\\WorkArea\\GitHub\\dtro-devuk\\pages\\_app.js",
    _this = undefined;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(D_WorkArea_GitHub_dtro_devuk_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _templateObject() {
  var data = Object(D_WorkArea_GitHub_dtro_devuk_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n    ", "\n    // Insert any other global styles you want here\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





/**
 * Import and create FA Icons Library
 */



/**
 * Tell Font Awesome to skip adding the CSS automatically since it's being imported above
 * However, need to add a Global Styles:-
 * THIS is absolutely neccessary configuration for Font Awesome SVG Icons in order that they
 * dont use the largest size by default, since we are skipping loading the CSS
 *
 * */


_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_9__["config"].autoAddCss = false;
var GlobalStyles = Object(styled_components__WEBPACK_IMPORTED_MODULE_5__["createGlobalStyle"])(_templateObject(), _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_9__["dom"].css());
_c = GlobalStyles;
_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_9__["library"].add(_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faGitSquare"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faGitSquare"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faGithub"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faGithubAlt"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faBars"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faTimes"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faQuestionCircle"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faSun"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faMoon"]);

var MyApp = function MyApp(_ref) {
  var Component = _ref.Component,
      pageProps = _ref.pageProps;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(GlobalStyles, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_themes__WEBPACK_IMPORTED_MODULE_3__["ThemeProvider"], {
      forcedTheme: Component.theme || null,
      defaultTheme: "system",
      attribute: "class",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_c2 = MyApp;
/* harmony default export */ __webpack_exports__["default"] = (MyApp);
MyApp.propTypes = {
  Component: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  pageProps: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object.isRequired
};

var _c, _c2;

$RefreshReg$(_c, "GlobalStyles");
$RefreshReg$(_c2, "MyApp");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJhdXRvQWRkQ3NzIiwiR2xvYmFsU3R5bGVzIiwiY3JlYXRlR2xvYmFsU3R5bGUiLCJkb20iLCJjc3MiLCJsaWJyYXJ5IiwiYWRkIiwiZmFHaXRTcXVhcmUiLCJmYUdpdGh1YiIsImZhR2l0aHViQWx0IiwiZmFCYXJzIiwiZmFUaW1lcyIsImZhUXVlc3Rpb25DaXJjbGUiLCJmYVN1biIsImZhTW9vbiIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwidGhlbWUiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJmdW5jIiwiaXNSZXF1aXJlZCIsIm9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBQSx3RUFBTSxDQUFDQyxVQUFQLEdBQW9CLEtBQXBCO0FBQ0EsSUFBTUMsWUFBWSxHQUFHQywyRUFBSCxvQkFDWkMscUVBQUcsQ0FBQ0MsR0FBSixFQURZLENBQWxCO0tBQU1ILFk7QUFLTkkseUVBQU8sQ0FBQ0MsR0FBUixDQUNFQyw4RUFERixFQUVFQSw4RUFGRixFQUdFQywyRUFIRixFQUlFQyw4RUFKRixFQUtFQyx3RUFMRixFQU1FQyx5RUFORixFQU9FQyxrRkFQRixFQVFFQyx1RUFSRixFQVNFQyx3RUFURjs7QUFZQSxJQUFNQyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxPQUE4QjtBQUFBLE1BQTNCQyxTQUEyQixRQUEzQkEsU0FBMkI7QUFBQSxNQUFoQkMsU0FBZ0IsUUFBaEJBLFNBQWdCO0FBQzFDLHNCQUNFO0FBQUEsNEJBQ0UscUVBQUMsWUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFHRSxxRUFBQyx5REFBRDtBQUFlLGlCQUFXLEVBQUVELFNBQVMsQ0FBQ0UsS0FBVixJQUFtQixJQUEvQztBQUFxRCxrQkFBWSxFQUFDLFFBQWxFO0FBQTJFLGVBQVMsRUFBQyxPQUFyRjtBQUFBLDZCQUNFLHFFQUFDLFNBQUQsb0JBQWVELFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFIRjtBQUFBLGtCQURGO0FBU0QsQ0FWRDs7TUFBTUYsSztBQVlTQSxvRUFBZjtBQUVBQSxLQUFLLENBQUNJLFNBQU4sR0FBa0I7QUFDaEJILFdBQVMsRUFBRUksaURBQVMsQ0FBQ0MsSUFBVixDQUFlQyxVQURWO0FBRWhCO0FBQ0FMLFdBQVMsRUFBRUcsaURBQVMsQ0FBQ0csTUFBVixDQUFpQkQ7QUFIWixDQUFsQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjNmMDY3ZWQ0YmEwMDk3YTVmZTQ5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnbmV4dC10aGVtZXMnO1xuXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgeyBjcmVhdGVHbG9iYWxTdHlsZSB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFsLmNzcyc7XG5cbi8qKlxuICogSW1wb3J0IGFuZCBjcmVhdGUgRkEgSWNvbnMgTGlicmFyeVxuICovXG5cbmltcG9ydCB7IGZhR2l0U3F1YXJlLCBmYUdpdGh1YiwgZmFHaXRodWJBbHQgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1icmFuZHMtc3ZnLWljb25zJztcbmltcG9ydCB7XG4gIGZhQmFycyxcbiAgZmFUaW1lcyxcbiAgZmFRdWVzdGlvbkNpcmNsZSxcbiAgZmFTdW4sXG4gIGZhTW9vbixcbn0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcbi8qKlxuICogVGVsbCBGb250IEF3ZXNvbWUgdG8gc2tpcCBhZGRpbmcgdGhlIENTUyBhdXRvbWF0aWNhbGx5IHNpbmNlIGl0J3MgYmVpbmcgaW1wb3J0ZWQgYWJvdmVcbiAqIEhvd2V2ZXIsIG5lZWQgdG8gYWRkIGEgR2xvYmFsIFN0eWxlczotXG4gKiBUSElTIGlzIGFic29sdXRlbHkgbmVjY2Vzc2FyeSBjb25maWd1cmF0aW9uIGZvciBGb250IEF3ZXNvbWUgU1ZHIEljb25zIGluIG9yZGVyIHRoYXQgdGhleVxuICogZG9udCB1c2UgdGhlIGxhcmdlc3Qgc2l6ZSBieSBkZWZhdWx0LCBzaW5jZSB3ZSBhcmUgc2tpcHBpbmcgbG9hZGluZyB0aGUgQ1NTXG4gKlxuICogKi9cbmltcG9ydCB7IGNvbmZpZywgZG9tLCBsaWJyYXJ5IH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLXN2Zy1jb3JlJztcbmNvbmZpZy5hdXRvQWRkQ3NzID0gZmFsc2U7XG5jb25zdCBHbG9iYWxTdHlsZXMgPSBjcmVhdGVHbG9iYWxTdHlsZWBcbiAgICAke2RvbS5jc3MoKX1cbiAgICAvLyBJbnNlcnQgYW55IG90aGVyIGdsb2JhbCBzdHlsZXMgeW91IHdhbnQgaGVyZVxuYDtcblxubGlicmFyeS5hZGQoXG4gIGZhR2l0U3F1YXJlLFxuICBmYUdpdFNxdWFyZSxcbiAgZmFHaXRodWIsXG4gIGZhR2l0aHViQWx0LFxuICBmYUJhcnMsXG4gIGZhVGltZXMsXG4gIGZhUXVlc3Rpb25DaXJjbGUsXG4gIGZhU3VuLFxuICBmYU1vb25cbik7XG5cbmNvbnN0IE15QXBwID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8R2xvYmFsU3R5bGVzIC8+XG5cbiAgICAgIDxUaGVtZVByb3ZpZGVyIGZvcmNlZFRoZW1lPXtDb21wb25lbnQudGhlbWUgfHwgbnVsbH0gZGVmYXVsdFRoZW1lPVwic3lzdGVtXCIgYXR0cmlidXRlPVwiY2xhc3NcIj5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPC9UaGVtZVByb3ZpZGVyPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG5cbk15QXBwLnByb3BUeXBlcyA9IHtcbiAgQ29tcG9uZW50OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvZm9yYmlkLXByb3AtdHlwZXNcbiAgcGFnZVByb3BzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==