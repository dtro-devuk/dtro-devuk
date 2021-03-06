webpackHotUpdate_N_E("pages/about",{

/***/ "./components/organisms/nav/NavMenuButton.js":
/*!***************************************************!*\
  !*** ./components/organisms/nav/NavMenuButton.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var D_WorkArea_GitHub_dtro_devuk_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var D_WorkArea_GitHub_dtro_devuk_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _atoms_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../atoms/icon */ "./components/atoms/icon/index.js");





var _jsxFileName = "D:\\WorkArea\\GitHub\\dtro-devuk\\components\\organisms\\nav\\NavMenuButton.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(D_WorkArea_GitHub_dtro_devuk_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Nav Menu Toggle Button with animation
 * @description Toggle Menu button, open and close animations and aria support
 * @author dtro-devuk @github:dtro-devuk.io
 */




var IconOpen = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_atoms_icon__WEBPACK_IMPORTED_MODULE_6__["Icon"], {
  iconName: "menuopen",
  label: "toggle mobile nav open",
  size: "2x"
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 13,
  columnNumber: 18
}, undefined);

var IconClose = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_atoms_icon__WEBPACK_IMPORTED_MODULE_6__["Icon"], {
  iconName: "menuclose",
  label: "toggle mobile nav close",
  size: "2x"
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 14,
  columnNumber: 19
}, undefined);

var NavMenuButton = function NavMenuButton(_ref) {
  _s();

  var showMobileMenu = _ref.showMobileMenu,
      setShowMobileMenu = _ref.setShowMobileMenu,
      menuId = _ref.menuId,
      tabIndex = _ref.tabIndex,
      props = Object(D_WorkArea_GitHub_dtro_devuk_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["showMobileMenu", "setShowMobileMenu", "menuId", "tabIndex"]);

  var show = showMobileMenu ? true : false;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      effect = _useState[0],
      setEffect = _useState[1];

  var toggleNavMenu = function toggleNavMenu(event, showMobileMenu) {
    if (event.ctrlKey || event.metaKey || event.shiftKey) {
      return; // let the browser deal with the click natively
    }

    event.preventDefault();
    setShowMobileMenu(showMobileMenu); // setEffect(true);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(ToggleButton, {
    id: "mobile-menu-button",
    "data-cy": "NavToggle" // className={`${effect && 'animate-rotate-center'}`}
    ,
    "aria-label": "Toggle Mobile Navigation menu.",
    "aria-expanded": show,
    "aria-controls": "{menuId}",
    role: "button",
    type: "button",
    isSmall: false,
    onClick: function onClick(event) {
      return toggleNavMenu(event, !showMobileMenu);
    },
    tabIndex: tabIndex // onAnimationEnd={() => setEffect(false)}
    ,
    children: showMobileMenu ? _objectSpread({}, IconClose) : _objectSpread({}, IconOpen)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 5
  }, _this);
};

_s(NavMenuButton, "/Qa7wrSbnptubEsvuvA86QBqmtc=");

_c = NavMenuButton;

var ToggleButton = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].button.withConfig({
  displayName: "NavMenuButton__ToggleButton",
  componentId: "sc-1ugm9p7-0"
})(["", " ", " ", " svg{", "}i{", "}"], {
  "zIndex": "10",
  "marginTop": "0.25rem",
  "@media (min-width: 1024px)": {
    "marginRight": "0px",
    "display": "none"
  }
}, {
  "marginLeft": "auto",
  "--tw-text-opacity": "1",
  "color": "rgba(255, 255, 255, var(--tw-text-opacity))",
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

NavMenuButton.propTypes = {
  /** Specify Show/Hide Menu State */
  showMobileMenu: prop_types__WEBPACK_IMPORTED_MODULE_5__["bool"].isRequired,

  /** Specify Show/Hide Menu Set State */
  setShowMobileMenu: prop_types__WEBPACK_IMPORTED_MODULE_5__["func"].isRequired,

  /** Specify Menu Identifier */
  menuId: prop_types__WEBPACK_IMPORTED_MODULE_5__["string"],

  /** Specify the TabIndex of the Nav Menu Button*/
  tabIndex: prop_types__WEBPACK_IMPORTED_MODULE_5__["number"]
};
NavMenuButton.defaultProps = {
  tabIndex: 0
};
/* harmony default export */ __webpack_exports__["default"] = (NavMenuButton);

var _c;

$RefreshReg$(_c, "NavMenuButton");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9vcmdhbmlzbXMvbmF2L05hdk1lbnVCdXR0b24uanMiXSwibmFtZXMiOlsiSWNvbk9wZW4iLCJJY29uQ2xvc2UiLCJOYXZNZW51QnV0dG9uIiwic2hvd01vYmlsZU1lbnUiLCJzZXRTaG93TW9iaWxlTWVudSIsIm1lbnVJZCIsInRhYkluZGV4IiwicHJvcHMiLCJzaG93IiwidXNlU3RhdGUiLCJlZmZlY3QiLCJzZXRFZmZlY3QiLCJ0b2dnbGVOYXZNZW51IiwiZXZlbnQiLCJjdHJsS2V5IiwibWV0YUtleSIsInNoaWZ0S2V5IiwicHJldmVudERlZmF1bHQiLCJUb2dnbGVCdXR0b24iLCJzdHlsZWQiLCJidXR0b24iLCJwcm9wVHlwZXMiLCJib29sIiwiaXNSZXF1aXJlZCIsImZ1bmMiLCJzdHJpbmciLCJudW1iZXIiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBOztBQUVBLElBQU1BLFFBQVEsZ0JBQUcscUVBQUMsZ0RBQUQ7QUFBTSxVQUFRLEVBQUMsVUFBZjtBQUEwQixPQUFLLEVBQUMsd0JBQWhDO0FBQXlELE1BQUksRUFBQztBQUE5RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQWpCOztBQUNBLElBQU1DLFNBQVMsZ0JBQUcscUVBQUMsZ0RBQUQ7QUFBTSxVQUFRLEVBQUMsV0FBZjtBQUEyQixPQUFLLEVBQUMseUJBQWpDO0FBQTJELE1BQUksRUFBQztBQUFoRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQWxCOztBQUVBLElBQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsT0FBdUU7QUFBQTs7QUFBQSxNQUFwRUMsY0FBb0UsUUFBcEVBLGNBQW9FO0FBQUEsTUFBcERDLGlCQUFvRCxRQUFwREEsaUJBQW9EO0FBQUEsTUFBakNDLE1BQWlDLFFBQWpDQSxNQUFpQztBQUFBLE1BQXpCQyxRQUF5QixRQUF6QkEsUUFBeUI7QUFBQSxNQUFaQyxLQUFZOztBQUMzRixNQUFNQyxJQUFJLEdBQUdMLGNBQWMsR0FBRyxJQUFILEdBQVUsS0FBckM7O0FBRDJGLGtCQUUvRE0sc0RBQVEsQ0FBQyxLQUFELENBRnVEO0FBQUEsTUFFcEZDLE1BRm9GO0FBQUEsTUFFNUVDLFNBRjRFOztBQUkzRixNQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNDLEtBQUQsRUFBUVYsY0FBUixFQUEyQjtBQUMvQyxRQUFJVSxLQUFLLENBQUNDLE9BQU4sSUFBaUJELEtBQUssQ0FBQ0UsT0FBdkIsSUFBa0NGLEtBQUssQ0FBQ0csUUFBNUMsRUFBc0Q7QUFDcEQsYUFEb0QsQ0FDNUM7QUFDVDs7QUFFREgsU0FBSyxDQUFDSSxjQUFOO0FBRUFiLHFCQUFpQixDQUFDRCxjQUFELENBQWpCLENBUCtDLENBUS9DO0FBQ0QsR0FURDs7QUFXQSxzQkFDRSxxRUFBQyxZQUFEO0FBQ0UsTUFBRSxFQUFDLG9CQURMO0FBRUUsZUFBUSxXQUZWLENBR0U7QUFIRjtBQUlFLGtCQUFXLGdDQUpiO0FBS0UscUJBQWVLLElBTGpCO0FBTUUscUJBQWMsVUFOaEI7QUFPRSxRQUFJLEVBQUMsUUFQUDtBQVFFLFFBQUksRUFBQyxRQVJQO0FBU0UsV0FBTyxFQUFFLEtBVFg7QUFVRSxXQUFPLEVBQUUsaUJBQUNLLEtBQUQ7QUFBQSxhQUFXRCxhQUFhLENBQUNDLEtBQUQsRUFBUSxDQUFDVixjQUFULENBQXhCO0FBQUEsS0FWWDtBQVdFLFlBQVEsRUFBRUcsUUFYWixDQVlFO0FBWkY7QUFBQSxjQWNHSCxjQUFjLHFCQUFRRixTQUFSLHNCQUEyQkQsUUFBM0I7QUFkakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBa0JELENBakNEOztHQUFNRSxhOztLQUFBQSxhOztBQW1DTixJQUFNZ0IsWUFBWSxHQUFHQyx5REFBTSxDQUFDQyxNQUFWO0FBQUE7QUFBQTtBQUFBLHdDQUNaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FEWSxFQUVaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUZZLEVBR1o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLENBSFksRUFNVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLENBTlUsRUFTVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLENBVFUsQ0FBbEI7O0FBYUFsQixhQUFhLENBQUNtQixTQUFkLEdBQTBCO0FBQ3hCO0FBQ0FsQixnQkFBYyxFQUFFbUIsK0NBQUksQ0FBQ0MsVUFGRzs7QUFHeEI7QUFDQW5CLG1CQUFpQixFQUFFb0IsK0NBQUksQ0FBQ0QsVUFKQTs7QUFLeEI7QUFDQWxCLFFBQU0sRUFBRW9CLGlEQU5nQjs7QUFPeEI7QUFDQW5CLFVBQVEsRUFBRW9CLGlEQUFNQTtBQVJRLENBQTFCO0FBV0F4QixhQUFhLENBQUN5QixZQUFkLEdBQTZCO0FBQzNCckIsVUFBUSxFQUFFO0FBRGlCLENBQTdCO0FBSWVKLDRFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Fib3V0LjM3MzllYzI3ZDM1OTUwYTcyNjczLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogTmF2IE1lbnUgVG9nZ2xlIEJ1dHRvbiB3aXRoIGFuaW1hdGlvblxyXG4gKiBAZGVzY3JpcHRpb24gVG9nZ2xlIE1lbnUgYnV0dG9uLCBvcGVuIGFuZCBjbG9zZSBhbmltYXRpb25zIGFuZCBhcmlhIHN1cHBvcnRcclxuICogQGF1dGhvciBkdHJvLWRldnVrIEBnaXRodWI6ZHRyby1kZXZ1ay5pb1xyXG4gKi9cclxuXHJcbmltcG9ydCBSZWFjdCwgeyBtZW1vLCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBib29sLCBmdW5jLCBudW1iZXIsIHN0cmluZyB9IGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgdHcsIHsgc3R5bGVkIH0gZnJvbSAndHdpbi5tYWNybyc7XHJcblxyXG5pbXBvcnQgeyBJY29uIH0gZnJvbSAnLi4vLi4vYXRvbXMvaWNvbic7XHJcblxyXG5jb25zdCBJY29uT3BlbiA9IDxJY29uIGljb25OYW1lPVwibWVudW9wZW5cIiBsYWJlbD1cInRvZ2dsZSBtb2JpbGUgbmF2IG9wZW5cIiBzaXplPVwiMnhcIiAvPjtcclxuY29uc3QgSWNvbkNsb3NlID0gPEljb24gaWNvbk5hbWU9XCJtZW51Y2xvc2VcIiBsYWJlbD1cInRvZ2dsZSBtb2JpbGUgbmF2IGNsb3NlXCIgc2l6ZT1cIjJ4XCIgLz47XHJcblxyXG5jb25zdCBOYXZNZW51QnV0dG9uID0gKHsgc2hvd01vYmlsZU1lbnUsIHNldFNob3dNb2JpbGVNZW51LCBtZW51SWQsIHRhYkluZGV4LCAuLi5wcm9wcyB9KSA9PiB7XHJcbiAgY29uc3Qgc2hvdyA9IHNob3dNb2JpbGVNZW51ID8gdHJ1ZSA6IGZhbHNlO1xyXG4gIGNvbnN0IFtlZmZlY3QsIHNldEVmZmVjdF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IHRvZ2dsZU5hdk1lbnUgPSAoZXZlbnQsIHNob3dNb2JpbGVNZW51KSA9PiB7XHJcbiAgICBpZiAoZXZlbnQuY3RybEtleSB8fCBldmVudC5tZXRhS2V5IHx8IGV2ZW50LnNoaWZ0S2V5KSB7XHJcbiAgICAgIHJldHVybjsgLy8gbGV0IHRoZSBicm93c2VyIGRlYWwgd2l0aCB0aGUgY2xpY2sgbmF0aXZlbHlcclxuICAgIH1cclxuXHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIHNldFNob3dNb2JpbGVNZW51KHNob3dNb2JpbGVNZW51KTtcclxuICAgIC8vIHNldEVmZmVjdCh0cnVlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFRvZ2dsZUJ1dHRvblxyXG4gICAgICBpZD1cIm1vYmlsZS1tZW51LWJ1dHRvblwiXHJcbiAgICAgIGRhdGEtY3k9XCJOYXZUb2dnbGVcIlxyXG4gICAgICAvLyBjbGFzc05hbWU9e2Ake2VmZmVjdCAmJiAnYW5pbWF0ZS1yb3RhdGUtY2VudGVyJ31gfVxyXG4gICAgICBhcmlhLWxhYmVsPVwiVG9nZ2xlIE1vYmlsZSBOYXZpZ2F0aW9uIG1lbnUuXCJcclxuICAgICAgYXJpYS1leHBhbmRlZD17c2hvd31cclxuICAgICAgYXJpYS1jb250cm9scz1cInttZW51SWR9XCJcclxuICAgICAgcm9sZT1cImJ1dHRvblwiXHJcbiAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICBpc1NtYWxsPXtmYWxzZX1cclxuICAgICAgb25DbGljaz17KGV2ZW50KSA9PiB0b2dnbGVOYXZNZW51KGV2ZW50LCAhc2hvd01vYmlsZU1lbnUpfVxyXG4gICAgICB0YWJJbmRleD17dGFiSW5kZXh9XHJcbiAgICAgIC8vIG9uQW5pbWF0aW9uRW5kPXsoKSA9PiBzZXRFZmZlY3QoZmFsc2UpfVxyXG4gICAgPlxyXG4gICAgICB7c2hvd01vYmlsZU1lbnUgPyB7IC4uLkljb25DbG9zZSB9IDogeyAuLi5JY29uT3BlbiB9fVxyXG4gICAgPC9Ub2dnbGVCdXR0b24+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IFRvZ2dsZUJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXHJcbiAgJHt0d2B6LTEwIG10LTEgbGc6bXItMCBsZzpoaWRkZW5gfVxyXG4gICR7dHdgbWwtYXV0byB0ZXh0LXdoaXRlIGJnLXRyYW5zcGFyZW50YH1cclxuICAke3R3YGZvY3VzOm91dGxpbmUtbm9uZSBgfVxyXG5cclxuICBzdmcge1xyXG4gICAgJHt0d2B3LTUgaC01IG1kOnctMTAgbWQ6aC0xMCBgfVxyXG4gIH1cclxuICBpIHtcclxuICAgICR7dHdgdGV4dC1zbSBtZDp0ZXh0LWxnYH1cclxuICB9XHJcbmA7XHJcblxyXG5OYXZNZW51QnV0dG9uLnByb3BUeXBlcyA9IHtcclxuICAvKiogU3BlY2lmeSBTaG93L0hpZGUgTWVudSBTdGF0ZSAqL1xyXG4gIHNob3dNb2JpbGVNZW51OiBib29sLmlzUmVxdWlyZWQsXHJcbiAgLyoqIFNwZWNpZnkgU2hvdy9IaWRlIE1lbnUgU2V0IFN0YXRlICovXHJcbiAgc2V0U2hvd01vYmlsZU1lbnU6IGZ1bmMuaXNSZXF1aXJlZCxcclxuICAvKiogU3BlY2lmeSBNZW51IElkZW50aWZpZXIgKi9cclxuICBtZW51SWQ6IHN0cmluZyxcclxuICAvKiogU3BlY2lmeSB0aGUgVGFiSW5kZXggb2YgdGhlIE5hdiBNZW51IEJ1dHRvbiovXHJcbiAgdGFiSW5kZXg6IG51bWJlcixcclxufTtcclxuXHJcbk5hdk1lbnVCdXR0b24uZGVmYXVsdFByb3BzID0ge1xyXG4gIHRhYkluZGV4OiAwLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2TWVudUJ1dHRvbjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==