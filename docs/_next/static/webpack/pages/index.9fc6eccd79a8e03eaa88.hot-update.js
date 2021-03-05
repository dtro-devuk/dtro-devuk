webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_hooks_fontLoader_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/hooks/fontLoader.js */ "./lib/hooks/fontLoader.js");
/* harmony import */ var _components_templates_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/templates/Layout */ "./components/templates/Layout.js");
/* harmony import */ var _components_atoms_tiles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/atoms/tiles */ "./components/atoms/tiles/index.js");
/* harmony import */ var _components_organisms_banners__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/organisms/banners */ "./components/organisms/banners/index.js");
/* harmony import */ var _components_molecules_hero_Hero__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/molecules/hero/Hero */ "./components/molecules/hero/Hero.js");



var _jsxFileName = "D:\\WorkArea\\GitHub\\dtro-devuk\\pages\\index.js",
    _this = undefined,
    _s = $RefreshSig$();










var Home = function Home() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      isMounted = _useState[0],
      setIsMounted = _useState[1];

  Home.theme = 'dark';

  if (isMounted) {
    Object(_lib_hooks_fontLoader_js__WEBPACK_IMPORTED_MODULE_4__["useGoogleFontLoader"])(); // Load Google Fonts from self-hosted folder
  }

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    setIsMounted(true); // Set to true when the component is mounted
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_templates_Layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    home: true,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "dtro-devuk v.0.0.1, Home Page"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Container, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "relative flex-col",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_molecules_hero_Hero__WEBPACK_IMPORTED_MODULE_8__["default"], {
          author: "dtro-devuk"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Section, {
          id: "home-learnmore",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Header, {
            children: "At a Glance"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Hr, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_organisms_banners__WEBPACK_IMPORTED_MODULE_7__["ProfileBanner"], {
            profileName: "dtro-devuk"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Section, {
          id: "latestposts",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Header, {
            children: "Latest Posts"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Hr, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_atoms_tiles__WEBPACK_IMPORTED_MODULE_6__["Surface"], {
            className: "p-5 m-5",
            children: "Latests blog posts go here..."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Section, {
          id: "projects",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Header, {
            children: "Projects"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Hr, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_atoms_tiles__WEBPACK_IMPORTED_MODULE_6__["Surface"], {
            className: "p-5 m-5",
            children: "Portfolio of projects go here..."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 5
  }, _this);
};

_s(Home, "g5X36j+IHZGm+dck8vkt26+pFOY=", false, function () {
  return [_lib_hooks_fontLoader_js__WEBPACK_IMPORTED_MODULE_4__["useGoogleFontLoader"]];
});

_c = Home;

var PostTextContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h1.withConfig({
  displayName: "pages__PostTextContainer",
  componentId: "sc-1smxf6r-0"
})({
  "fontWeight": "900",
  "fontSize": "2.25rem",
  "lineHeight": "2.5rem",
  "bottom": "2.5rem",
  "padding": "2.5rem",
  "color": "var(--ui-heading-accent)",
  "zIndex": "10",
  "@media (min-width: 768px)": {
    "fontSize": "3rem",
    "lineHeight": "1"
  }
});

var Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "pages__Container",
  componentId: "sc-1smxf6r-1"
})(["", ";max-width:1750px;"], {
  "marginLeft": "auto",
  "marginRight": "auto"
});

var Section = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].section.withConfig({
  displayName: "pages__Section",
  componentId: "sc-1smxf6r-2"
})({
  "display": "flex",
  "flexDirection": "column",
  "marginTop": "1.25rem",
  "paddingTop": "2.5rem",
  "paddingBottom": "2.5rem",
  "color": "var(--color-on-surface)",
  "padding": "1.25rem"
});

var Header = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h1.withConfig({
  displayName: "pages__Header",
  componentId: "sc-1smxf6r-3"
})({
  "fontFamily": "Oswald Variable",
  "textAlign": "left",
  "fontWeight": "600",
  "maxWidth": "32rem",
  "marginLeft": "1.25rem",
  "fontSize": "1.25rem",
  "lineHeight": "1.75rem",
  "color": "var(--ui-heading-1)",
  "@media (min-width: 768px)": {
    "marginLeft": "2.5rem"
  },
  "@media (min-width: 1024px)": {
    "fontSize": "3rem",
    "lineHeight": "1"
  }
});

var Hr = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].hr.withConfig({
  displayName: "pages__Hr",
  componentId: "sc-1smxf6r-4"
})({
  "paddingBottom": "0.5rem",
  "marginTop": "1.25rem",
  "marginBottom": "1.25rem",
  "borderRadius": "9999px",
  "borderWidth": "0px",
  "width": "5rem",
  "marginLeft": "1.25rem",
  "backgroundColor": "var(--ui-hr-primary)",
  "@media (min-width: 768px)": {
    "width": "10rem",
    "marginLeft": "2.5rem"
  }
});

/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

$RefreshReg$(_c, "Home");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInVzZVN0YXRlIiwiaXNNb3VudGVkIiwic2V0SXNNb3VudGVkIiwidGhlbWUiLCJ1c2VHb29nbGVGb250TG9hZGVyIiwidXNlRWZmZWN0IiwiUG9zdFRleHRDb250YWluZXIiLCJ0dyIsImgxIiwiQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwiU2VjdGlvbiIsInNlY3Rpb24iLCJIZWFkZXIiLCJIciIsImhyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFFQTtBQUVBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFBQTs7QUFBQSxrQkFDaUJDLHNEQUFRLENBQUMsS0FBRCxDQUR6QjtBQUFBLE1BQ1ZDLFNBRFU7QUFBQSxNQUNDQyxZQUREOztBQUdqQkgsTUFBSSxDQUFDSSxLQUFMLEdBQWEsTUFBYjs7QUFFQSxNQUFJRixTQUFKLEVBQWU7QUFDYkcsd0ZBQW1CLEdBRE4sQ0FDVTtBQUN4Qjs7QUFFREMseURBQVMsQ0FBQyxZQUFNO0FBQ2RILGdCQUFZLENBQUMsSUFBRCxDQUFaLENBRGMsQ0FDTTtBQUNyQixHQUZRLEVBRU4sRUFGTSxDQUFUO0FBSUEsc0JBQ0UscUVBQUMsb0VBQUQ7QUFBUSxRQUFJLE1BQVo7QUFBQSw0QkFDRSxxRUFBQyxnREFBRDtBQUFBLDZCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBS0UscUVBQUMsU0FBRDtBQUFBLDZCQUNFO0FBQUssaUJBQVMsRUFBQyxtQkFBZjtBQUFBLGdDQUNFLHFFQUFDLHVFQUFEO0FBQU0sZ0JBQU0sRUFBQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFHRSxxRUFBQyxPQUFEO0FBQVMsWUFBRSxFQUFDLGdCQUFaO0FBQUEsa0NBQ0UscUVBQUMsTUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFLHFFQUFDLEVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRixlQUdFLHFFQUFDLDJFQUFEO0FBQWUsdUJBQVcsRUFBQztBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFIRixlQVFFLHFFQUFDLE9BQUQ7QUFBUyxZQUFFLEVBQUMsYUFBWjtBQUFBLGtDQUNFLHFFQUFDLE1BQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRSxxRUFBQyxFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkYsZUFHRSxxRUFBQywrREFBRDtBQUFTLHFCQUFTLEVBQUMsU0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVJGLGVBYUUscUVBQUMsT0FBRDtBQUFTLFlBQUUsRUFBQyxVQUFaO0FBQUEsa0NBQ0UscUVBQUMsTUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFLHFFQUFDLEVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRixlQUdFLHFFQUFDLCtEQUFEO0FBQVMscUJBQVMsRUFBQyxTQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBYkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBNkJELENBMUNEOztHQUFNSCxJO1VBTUZLLDRFOzs7S0FORUwsSTs7QUE0Q04sSUFBTU8saUJBQWlCLEdBQUdDLHlEQUFFLENBQUNDLEVBQU47QUFBQTtBQUFBO0FBQUEsR0FBUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUFSLENBQXZCOztBQUVBLElBQU1DLFNBQVMsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSwrQkFDVDtBQUFBO0FBQUE7QUFBQSxDQURTLENBQWY7O0FBSUEsSUFBTUMsT0FBTyxHQUFHTCx5REFBRSxDQUFDTSxPQUFOO0FBQUE7QUFBQTtBQUFBLEdBQWE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLENBQWIsQ0FBYjs7QUFFQSxJQUFNQyxNQUFNLEdBQUdQLHlEQUFFLENBQUNDLEVBQU47QUFBQTtBQUFBO0FBQUEsR0FBUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLENBQVIsQ0FBWjs7QUFFQSxJQUFNTyxFQUFFLEdBQUdSLHlEQUFFLENBQUNTLEVBQU47QUFBQTtBQUFBO0FBQUEsR0FBUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLENBQVIsQ0FBUjs7QUFFZWpCLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjlmYzZlY2NkNzlhOGUwM2VhYTg4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5cclxuaW1wb3J0IHR3LCB7IHN0eWxlZCB9IGZyb20gJ3R3aW4ubWFjcm8nO1xyXG5cclxuaW1wb3J0IHsgdXNlR29vZ2xlRm9udExvYWRlciB9IGZyb20gJy4uL2xpYi9ob29rcy9mb250TG9hZGVyLmpzJztcclxuXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy90ZW1wbGF0ZXMvTGF5b3V0JztcclxuaW1wb3J0IHsgU3VyZmFjZSB9IGZyb20gJy4uL2NvbXBvbmVudHMvYXRvbXMvdGlsZXMnO1xyXG5cclxuaW1wb3J0IHsgUHJvZmlsZUJhbm5lciB9IGZyb20gJy4uL2NvbXBvbmVudHMvb3JnYW5pc21zL2Jhbm5lcnMnO1xyXG5cclxuaW1wb3J0IEhlcm8gZnJvbSAnLi4vY29tcG9uZW50cy9tb2xlY3VsZXMvaGVyby9IZXJvJztcclxuXHJcbmNvbnN0IEhvbWUgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2lzTW91bnRlZCwgc2V0SXNNb3VudGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgSG9tZS50aGVtZSA9ICdkYXJrJztcclxuXHJcbiAgaWYgKGlzTW91bnRlZCkge1xyXG4gICAgdXNlR29vZ2xlRm9udExvYWRlcigpOyAvLyBMb2FkIEdvb2dsZSBGb250cyBmcm9tIHNlbGYtaG9zdGVkIGZvbGRlclxyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldElzTW91bnRlZCh0cnVlKTsgLy8gU2V0IHRvIHRydWUgd2hlbiB0aGUgY29tcG9uZW50IGlzIG1vdW50ZWRcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0IGhvbWU+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5kdHJvLWRldnVrIHYuMC4wLjEsIEhvbWUgUGFnZTwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuXHJcbiAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmbGV4LWNvbFwiPlxyXG4gICAgICAgICAgPEhlcm8gYXV0aG9yPVwiZHRyby1kZXZ1a1wiIC8+XHJcblxyXG4gICAgICAgICAgPFNlY3Rpb24gaWQ9XCJob21lLWxlYXJubW9yZVwiPlxyXG4gICAgICAgICAgICA8SGVhZGVyPkF0IGEgR2xhbmNlPC9IZWFkZXI+XHJcbiAgICAgICAgICAgIDxIciAvPlxyXG4gICAgICAgICAgICA8UHJvZmlsZUJhbm5lciBwcm9maWxlTmFtZT1cImR0cm8tZGV2dWtcIj48L1Byb2ZpbGVCYW5uZXI+XHJcbiAgICAgICAgICA8L1NlY3Rpb24+XHJcbiAgICAgICAgICA8U2VjdGlvbiBpZD1cImxhdGVzdHBvc3RzXCI+XHJcbiAgICAgICAgICAgIDxIZWFkZXI+TGF0ZXN0IFBvc3RzPC9IZWFkZXI+XHJcbiAgICAgICAgICAgIDxIciAvPlxyXG4gICAgICAgICAgICA8U3VyZmFjZSBjbGFzc05hbWU9XCJwLTUgbS01XCI+TGF0ZXN0cyBibG9nIHBvc3RzIGdvIGhlcmUuLi48L1N1cmZhY2U+XHJcbiAgICAgICAgICA8L1NlY3Rpb24+XHJcbiAgICAgICAgICA8U2VjdGlvbiBpZD1cInByb2plY3RzXCI+XHJcbiAgICAgICAgICAgIDxIZWFkZXI+UHJvamVjdHM8L0hlYWRlcj5cclxuICAgICAgICAgICAgPEhyIC8+XHJcbiAgICAgICAgICAgIDxTdXJmYWNlIGNsYXNzTmFtZT1cInAtNSBtLTVcIj5Qb3J0Zm9saW8gb2YgcHJvamVjdHMgZ28gaGVyZS4uLjwvU3VyZmFjZT5cclxuICAgICAgICAgIDwvU2VjdGlvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L0xheW91dD5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgUG9zdFRleHRDb250YWluZXIgPSB0dy5oMWAgZm9udC1ibGFjayBtZDp0ZXh0LTV4bCB0ZXh0LTR4bCBib3R0b20tMTAgcC0xMCAgdGV4dC1hY2NlbnQgei0xMGA7XHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gICR7dHdgbXgtYXV0b2B9O1xyXG4gIG1heC13aWR0aDogMTc1MHB4O1xyXG5gO1xyXG5jb25zdCBTZWN0aW9uID0gdHcuc2VjdGlvbmBmbGV4IGZsZXgtY29sIG10LTUgcHktMTAgdGV4dC1zdXJmYWNlIHAtNWA7XHJcblxyXG5jb25zdCBIZWFkZXIgPSB0dy5oMWBmb250LWhlYWRlciB0ZXh0LWxlZnQgZm9udC1zZW1pYm9sZCBtYXgtdy1sZyBtbC01ICBtZDptbC0xMCB0ZXh0LXhsIGxnOnRleHQtNXhsIHRleHQtaGVhZGluZ1ByaW1hcnlgO1xyXG5cclxuY29uc3QgSHIgPSB0dy5ocmBwYi0yIG15LTUgcm91bmRlZC1mdWxsIGJvcmRlci0wIHctMjAgbWQ6dy00MCBtbC01IG1kOm1sLTEwIGJnLXByaW1hcnlIcmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9