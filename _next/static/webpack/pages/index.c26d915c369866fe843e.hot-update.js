webpackHotUpdate_N_E("pages/index",{

/***/ "./components/organisms/nav/Navbar.js":
/*!********************************************!*\
  !*** ./components/organisms/nav/Navbar.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var D_WorkArea_GitHub_dtro_devuk_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty */ "./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _atoms_logos_LogoSvg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../atoms/logos/LogoSvg */ "./components/atoms/logos/LogoSvg.js");
/* harmony import */ var _atoms_logos_LogoText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../atoms/logos/LogoText */ "./components/atoms/logos/LogoText.js");
/* harmony import */ var _atoms_toggles_ToggleDarkmode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../atoms/toggles/ToggleDarkmode */ "./components/atoms/toggles/ToggleDarkmode.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ */ "./components/organisms/nav/index.js");
/* harmony import */ var _molecules_links_Links__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../molecules/links/Links */ "./components/molecules/links/Links.js");




var _jsxFileName = "D:\\WorkArea\\GitHub\\dtro-devuk\\components\\organisms\\nav\\Navbar.js",
    _this = undefined,
    _s = $RefreshSig$();

/**
 * Navigation Menu Bar Component
 * @description Horizontal Vertically expanding Navigation Menu with animations
 * @author dtro-devuk @github:dtro-devuk.io
 */









var Navbar = function Navbar(_ref) {
  _s();

  var children = _ref.children,
      author = _ref.author,
      links = _ref.links;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      showMobileMenu = _useState[0],
      setShowMobileMenu = _useState[1];

  var node = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);
  var menuId = 'mobile-menu';
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    ref: node,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(NavContainer, {
      id: "nav-menu",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Row, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "flex flex-row items-center justify-center ml-0 mr-10 bg-transparent",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_atoms_logos_LogoSvg__WEBPACK_IMPORTED_MODULE_5__["default"], {
            size: 14,
            isAnimated: true,
            isRounded: true,
            borderWidth: "0",
            borderColor: "white"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_atoms_logos_LogoText__WEBPACK_IMPORTED_MODULE_6__["default"], {
            href: "/",
            isAnimated: true,
            variant: "navbar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Row, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(DesktopNavLinks, {
          "aria-label": "Desktop/Laptop navigation links",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: "mx-24 mb-5",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_molecules_links_Links__WEBPACK_IMPORTED_MODULE_9__["default"], {
              links: links,
              textCase: "uppercase",
              size: "lg"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Row, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "flex ml-auto sm:w-auto",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_atoms_toggles_ToggleDarkmode__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(___WEBPACK_IMPORTED_MODULE_8__["NavMenuButton"], {
          showMobileMenu: showMobileMenu,
          setShowMobileMenu: setShowMobileMenu,
          menuId: menuId,
          tabIndex: 3
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, _this), !showMobileMenu && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(NavBottom, {
      showMobileMenu: showMobileMenu
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 27
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(___WEBPACK_IMPORTED_MODULE_8__["NavMenuMobile"], {
      showMobileMenu: showMobileMenu,
      links: links
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 5
  }, _this);
};

_s(Navbar, "18ghO14BIg7E4daScMuewjAv4eA=");

_c = Navbar;

var NavContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].nav.withConfig({
  displayName: "Navbar__NavContainer",
  componentId: "kl09yc-0"
})(function (_ref2) {
  Object(D_WorkArea_GitHub_dtro_devuk_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2);

  return [{
    "top": "0px",
    "zIndex": "20",
    "display": "flex",
    "alignItems": "center",
    "justifyContent": "space-around",
    "height": "5rem",
    "maxWidth": "1280px",
    "marginBottom": "0px",
    "marginRight": "0.5rem",
    "@media (min-width: 640px)": {
      "maxWidth": "36rem"
    },
    "@media (min-width: 768px)": {
      "marginLeft": "auto",
      "marginRight": "auto",
      "maxWidth": "42rem"
    },
    "@media (min-width: 1024px)": {
      "maxWidth": "80rem"
    }
  }, {
    "backgroundColor": "transparent"
  } // tw`bg-gradient-to-t to-navBarSecondary from-navBarPrimary`,
  ];
});

var Row = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Navbar__Row",
  componentId: "kl09yc-1"
})({
  "display": "flex",
  "flexDirection": "row",
  "> :not([hidden]) ~ :not([hidden])": {
    "--tw-space-x-reverse": 0,
    "marginRight": "calc(0.5rem * var(--tw-space-x-reverse))",
    "marginLeft": "calc(0.5rem * calc(1 - var(--tw-space-x-reverse)))"
  },
  "alignItems": "center",
  "justifyContent": "center"
});

var DesktopNavLinks = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Navbar__DesktopNavLinks",
  componentId: "kl09yc-2"
})({
  "display": "none",
  "@media (min-width: 1024px)": {
    "display": "block"
  }
});

var NavBottom = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Navbar__NavBottom",
  componentId: "kl09yc-3"
})(function (_ref3) {
  Object(D_WorkArea_GitHub_dtro_devuk_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref3);

  return [{
    "marginTop": "0.75rem",
    "borderBottomWidth": "4px",
    "borderColor": "var(--ui-brand-eye)"
  }];
});

Navbar.propTypes = {
  /**
   * Specify the content of your Button
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_4__["node"],

  /**
   * Specify the website profile name
   */
  author: prop_types__WEBPACK_IMPORTED_MODULE_4__["string"],

  /**
   * Specify the navigation menu links
   */
  links: Object(prop_types__WEBPACK_IMPORTED_MODULE_4__["arrayOf"])(Object(prop_types__WEBPACK_IMPORTED_MODULE_4__["shape"])({
    title: prop_types__WEBPACK_IMPORTED_MODULE_4__["string"].isRequired,
    href: prop_types__WEBPACK_IMPORTED_MODULE_4__["string"].isRequired
  }))
};
Navbar.defaultProps = {
  links: []
};
/* harmony default export */ __webpack_exports__["default"] = (Navbar);

var _c;

$RefreshReg$(_c, "Navbar");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9vcmdhbmlzbXMvbmF2L05hdmJhci5qcyJdLCJuYW1lcyI6WyJOYXZiYXIiLCJjaGlsZHJlbiIsImF1dGhvciIsImxpbmtzIiwidXNlU3RhdGUiLCJzaG93TW9iaWxlTWVudSIsInNldFNob3dNb2JpbGVNZW51Iiwibm9kZSIsInVzZVJlZiIsIm1lbnVJZCIsIk5hdkNvbnRhaW5lciIsInN0eWxlZCIsIm5hdiIsIlJvdyIsInR3IiwiZGl2IiwiRGVza3RvcE5hdkxpbmtzIiwiTmF2Qm90dG9tIiwicHJvcFR5cGVzIiwic3RyaW5nIiwiYXJyYXlPZiIsInNoYXBlIiwidGl0bGUiLCJpc1JlcXVpcmVkIiwiaHJlZiIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxPQUFpQztBQUFBOztBQUFBLE1BQTlCQyxRQUE4QixRQUE5QkEsUUFBOEI7QUFBQSxNQUFwQkMsTUFBb0IsUUFBcEJBLE1BQW9CO0FBQUEsTUFBWkMsS0FBWSxRQUFaQSxLQUFZOztBQUFBLGtCQUNGQyxzREFBUSxDQUFDLEtBQUQsQ0FETjtBQUFBLE1BQ3ZDQyxjQUR1QztBQUFBLE1BQ3ZCQyxpQkFEdUI7O0FBRTlDLE1BQU1DLElBQUksR0FBR0Msb0RBQU0sQ0FBQyxJQUFELENBQW5CO0FBQ0EsTUFBTUMsTUFBTSxHQUFHLGFBQWY7QUFFQSxzQkFDRTtBQUFLLE9BQUcsRUFBRUYsSUFBVjtBQUFBLDRCQUNFLHFFQUFDLFlBQUQ7QUFBYyxRQUFFLEVBQUMsVUFBakI7QUFBQSw4QkFDRSxxRUFBQyxHQUFEO0FBQUEsK0JBQ0U7QUFBSyxtQkFBUyxFQUFDLHFFQUFmO0FBQUEsa0NBQ0UscUVBQUMsNERBQUQ7QUFD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QUFDQTtBQUNFTCxRQUFNLEVBQUVpQixpREFSUzs7QUFTakI7QUFDRjtBQUNBO0FBQ0VoQixPQUFLLEVBQUVpQiwwREFBTyxDQUNaQyx3REFBSyxDQUFDO0FBQ0pDLFNBQUssRUFBRUgsaURBQU0sQ0FBQ0ksVUFEVjtBQUVKQyxRQUFJLEVBQUVMLGlEQUFNLENBQUNJO0FBRlQsR0FBRCxDQURPO0FBWkcsQ0FBbkI7QUFvQkF2QixNQUFNLENBQUN5QixZQUFQLEdBQXNCO0FBQ3BCdEIsT0FBSyxFQUFFO0FBRGEsQ0FBdEI7QUFHZUgscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYzI2ZDkxNWMzNjk4NjZmZTg0M2UuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBOYXZpZ2F0aW9uIE1lbnUgQmFyIENvbXBvbmVudFxyXG4gKiBAZGVzY3JpcHRpb24gSG9yaXpvbnRhbCBWZXJ0aWNhbGx5IGV4cGFuZGluZyBOYXZpZ2F0aW9uIE1lbnUgd2l0aCBhbmltYXRpb25zXHJcbiAqIEBhdXRob3IgZHRyby1kZXZ1ayBAZ2l0aHViOmR0cm8tZGV2dWsuaW9cclxuICovXHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgbWVtbywgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBub2RlLCBhcnJheU9mLCBzaGFwZSwgc3RyaW5nIH0gZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB0dywgeyBzdHlsZWQsIGNzcyB9IGZyb20gJ3R3aW4ubWFjcm8nO1xyXG5cclxuaW1wb3J0IExvZ29TdmcgZnJvbSAnLi4vLi4vYXRvbXMvbG9nb3MvTG9nb1N2Zyc7XHJcbmltcG9ydCBMb2dvVGV4dCBmcm9tICcuLi8uLi9hdG9tcy9sb2dvcy9Mb2dvVGV4dCc7XHJcbmltcG9ydCBUb2dnbGVEYXJrTW9kZSBmcm9tICcuLi8uLi9hdG9tcy90b2dnbGVzL1RvZ2dsZURhcmttb2RlJztcclxuXHJcbmltcG9ydCB7IE5hdk1lbnVCdXR0b24gfSBmcm9tICcuLyc7XHJcbmltcG9ydCB7IE5hdk1lbnVNb2JpbGUgfSBmcm9tICcuLi8uLi9vcmdhbmlzbXMvbmF2JztcclxuXHJcbmltcG9ydCBMaW5rcyBmcm9tICcuLi8uLi9tb2xlY3VsZXMvbGlua3MvTGlua3MnO1xyXG5cclxuY29uc3QgTmF2YmFyID0gKHsgY2hpbGRyZW4sIGF1dGhvciwgbGlua3MgfSkgPT4ge1xyXG4gIGNvbnN0IFtzaG93TW9iaWxlTWVudSwgc2V0U2hvd01vYmlsZU1lbnVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IG5vZGUgPSB1c2VSZWYobnVsbCk7XHJcbiAgY29uc3QgbWVudUlkID0gJ21vYmlsZS1tZW51JztcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgcmVmPXtub2RlfT5cclxuICAgICAgPE5hdkNvbnRhaW5lciBpZD1cIm5hdi1tZW51XCI+XHJcbiAgICAgICAgPFJvdz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbWwtMCBtci0xMCBiZy10cmFuc3BhcmVudFwiPlxyXG4gICAgICAgICAgICA8TG9nb1N2Z1xyXG4gICAgICAgICAgICAgIHNpemU9ezE0fVxyXG4gICAgICAgICAgICAgIGlzQW5pbWF0ZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgaXNSb3VuZGVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgIGJvcmRlcldpZHRoPVwiMFwiXHJcbiAgICAgICAgICAgICAgYm9yZGVyQ29sb3I9XCJ3aGl0ZVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxMb2dvVGV4dCBocmVmPVwiL1wiIGlzQW5pbWF0ZWQ9e3RydWV9IHZhcmlhbnQ9XCJuYXZiYXJcIiAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgPFJvdz5cclxuICAgICAgICAgIDxEZXNrdG9wTmF2TGlua3MgYXJpYS1sYWJlbD1cIkRlc2t0b3AvTGFwdG9wIG5hdmlnYXRpb24gbGlua3NcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC0yNCBtYi01XCI+XHJcbiAgICAgICAgICAgICAgPExpbmtzIGxpbmtzPXtsaW5rc30gdGV4dENhc2U9XCJ1cHBlcmNhc2VcIiBzaXplPVwibGdcIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvRGVza3RvcE5hdkxpbmtzPlxyXG4gICAgICAgIDwvUm93PlxyXG4gICAgICAgIDxSb3c+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbWwtYXV0byBzbTp3LWF1dG9cIj5cclxuICAgICAgICAgICAgPFRvZ2dsZURhcmtNb2RlIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxOYXZNZW51QnV0dG9uXHJcbiAgICAgICAgICAgIHNob3dNb2JpbGVNZW51PXtzaG93TW9iaWxlTWVudX1cclxuICAgICAgICAgICAgc2V0U2hvd01vYmlsZU1lbnU9e3NldFNob3dNb2JpbGVNZW51fVxyXG4gICAgICAgICAgICBtZW51SWQ9e21lbnVJZH1cclxuICAgICAgICAgICAgdGFiSW5kZXg9ezN9XHJcbiAgICAgICAgICA+PC9OYXZNZW51QnV0dG9uPlxyXG4gICAgICAgIDwvUm93PlxyXG4gICAgICA8L05hdkNvbnRhaW5lcj5cclxuICAgICAgeyFzaG93TW9iaWxlTWVudSAmJiA8TmF2Qm90dG9tIHNob3dNb2JpbGVNZW51PXtzaG93TW9iaWxlTWVudX0gLz59XHJcbiAgICAgIDxOYXZNZW51TW9iaWxlIHNob3dNb2JpbGVNZW51PXtzaG93TW9iaWxlTWVudX0gbGlua3M9e2xpbmtzfSAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IE5hdkNvbnRhaW5lciA9IHN0eWxlZC5uYXYoKHt9KSA9PiBbXHJcbiAgdHdgdG9wLTAgei0yMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWFyb3VuZCBoLTIwIG1heC13LXNjcmVlbi14bCBtYi0wIG1yLTIgbWQ6bXgtYXV0byBzbTptYXgtdy14bCBtZDptYXgtdy0yeGwgbGc6bWF4LXctN3hsYCxcclxuICB0d2BiZy10cmFuc3BhcmVudGAsXHJcbiAgLy8gdHdgYmctZ3JhZGllbnQtdG8tdCB0by1uYXZCYXJTZWNvbmRhcnkgZnJvbS1uYXZCYXJQcmltYXJ5YCxcclxuXSk7XHJcblxyXG5jb25zdCBSb3cgPSB0dy5kaXZgZmxleCBmbGV4LXJvdyBzcGFjZS14LTIgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyYDtcclxuY29uc3QgRGVza3RvcE5hdkxpbmtzID0gdHcuZGl2YGhpZGRlbiBsZzpibG9ja2A7XHJcblxyXG5jb25zdCBOYXZCb3R0b20gPSBzdHlsZWQuZGl2KCh7fSkgPT4gW3R3YG10LTMgYm9yZGVyLWItNCBib3JkZXItYnJhbmRQcmltYXJ5TGlnaHRgXSk7XHJcblxyXG5OYXZiYXIucHJvcFR5cGVzID0ge1xyXG4gIC8qKlxyXG4gICAqIFNwZWNpZnkgdGhlIGNvbnRlbnQgb2YgeW91ciBCdXR0b25cclxuICAgKi9cclxuICBjaGlsZHJlbjogbm9kZSxcclxuICAvKipcclxuICAgKiBTcGVjaWZ5IHRoZSB3ZWJzaXRlIHByb2ZpbGUgbmFtZVxyXG4gICAqL1xyXG4gIGF1dGhvcjogc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIFNwZWNpZnkgdGhlIG5hdmlnYXRpb24gbWVudSBsaW5rc1xyXG4gICAqL1xyXG4gIGxpbmtzOiBhcnJheU9mKFxyXG4gICAgc2hhcGUoe1xyXG4gICAgICB0aXRsZTogc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICAgIGhyZWY6IHN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgfSlcclxuICApLFxyXG59O1xyXG5cclxuTmF2YmFyLmRlZmF1bHRQcm9wcyA9IHtcclxuICBsaW5rczogW10sXHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==