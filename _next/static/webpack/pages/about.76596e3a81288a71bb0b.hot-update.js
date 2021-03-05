webpackHotUpdate_N_E("pages/about",{

/***/ "./components/atoms/buttons/Button.js":
false,

/***/ "./components/atoms/buttons/Button.styles.js":
false,

/***/ "./components/atoms/buttons/Button.types.js":
false,

/***/ "./components/atoms/logos/Avatar.js":
false,

/***/ "./components/atoms/tags/ProgramTag.js":
/*!*********************************************!*\
  !*** ./components/atoms/tags/ProgramTag.js ***!
  \*********************************************/
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
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data */ "./components/atoms/tags/data.js");




var _jsxFileName = "D:\\WorkArea\\GitHub\\dtro-devuk\\components\\atoms\\tags\\ProgramTag.js",
    _this = undefined;

/**
 * A useful link for reference https://github.com/ben-rogerson/twin.macro/issues/17
 */




var ProgramTag = function ProgramTag(_ref) {
  var className = _ref.className,
      text = _ref.text,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'base' : _ref$size;
  var language = _data__WEBPACK_IMPORTED_MODULE_4__["languages"][text] || _data__WEBPACK_IMPORTED_MODULE_4__["defaultLanguage"];
  var outline = language.outline ? "border-4 ".concat(language.outline) : '';
  var tagText = text;

  if (language.name != '') {
    tagText = language.name;
  }

  var defaultClassName = " text-".concat(size, " mx-1 ").concat(language.background, " ").concat(language.color, " ").concat(outline);
  if (className ? className = className + defaultClassName : className = defaultClassName) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_StyledTextContainer, {
    className: className,
    _css: [// css`
      //   color: ${theme`colors.asteroid`};
      // `,
    ],
    children: ["#", tagText]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 7
  }, _this);
};

_c = ProgramTag;

var TextContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button.withConfig({
  displayName: "ProgramTag__TextContainer",
  componentId: "evhlpq-0"
})(function () {
  return [// The common button styles added with the tw import
  {
    "padding": "0.5rem",
    "fontWeight": "600",
    "letterSpacing": "0.025em",
    "borderRadius": "0.25rem",
    "fontFamily": "Merriweather Sans",
    ":focus": {
      "outline": "2px solid transparent",
      "outlineOffset": "2px"
    }
  }, {
    "transitionProperty": "transform",
    "transitionTimingFunction": "cubic-bezier(0.4, 0, 0.2, 1)",
    "transitionDuration": "75ms",
    "--tw-translate-x": "0",
    "--tw-translate-y": "0",
    "--tw-rotate": "0",
    "--tw-skew-x": "0",
    "--tw-skew-y": "0",
    "--tw-scale-x": "1",
    "--tw-scale-y": "1",
    "transform": "translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))"
  }, // Use the variant grouping feature to add variants to multiple classes
  {
    ":hover, :focus": {
      "--tw-scale-x": "1.05",
      "--tw-scale-y": "1.05",
      "--tw-text-opacity": "1",
      "color": "rgba(251, 191, 36, var(--tw-text-opacity))",
      "backgroundColor": "var(--color-primary)"
    }
  } // The theme import can supply values from your tailwind.config.js
  // css`
  //   color: ${theme`colors.white`};
  // `,
  ];
});

var _StyledTextContainer = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(TextContainer).withConfig({
  displayName: "ProgramTag___StyledTextContainer",
  componentId: "evhlpq-1"
})(["", ""], function (p) {
  return p._css;
});

ProgramTag.propTypes = {
  /** The text/language to show in a tag format i.e. javascript. */
  text: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired,

  /** Extra css classes to apply to tag container. */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /** The font-size of the program tags. */
  size: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['xs', 'sm', 'lg', 'xl', '2xl', '3xl', '4xl'])
};
/* harmony default export */ __webpack_exports__["default"] = (ProgramTag);

var _c;

$RefreshReg$(_c, "ProgramTag");

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

/***/ "./components/atoms/tags/ProgramTags.js":
/*!**********************************************!*\
  !*** ./components/atoms/tags/ProgramTags.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ProgramTag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProgramTag */ "./components/atoms/tags/ProgramTag.js");



var _jsxFileName = "D:\\WorkArea\\GitHub\\dtro-devuk\\components\\atoms\\tags\\ProgramTags.js",
    _this = undefined;




var ProgramTags = function ProgramTags() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Container, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ProgramTag__WEBPACK_IMPORTED_MODULE_3__["default"], {
      text: "azure",
      size: "sm",
      className: "m-5"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ProgramTag__WEBPACK_IMPORTED_MODULE_3__["default"], {
      text: "csharp",
      size: "sm",
      className: "m-5"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ProgramTag__WEBPACK_IMPORTED_MODULE_3__["default"], {
      text: "dotnet",
      size: "sm",
      className: "m-5"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ProgramTag__WEBPACK_IMPORTED_MODULE_3__["default"], {
      text: "dotnetcore",
      size: "sm",
      className: "m-5"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ProgramTag__WEBPACK_IMPORTED_MODULE_3__["default"], {
      text: "netmvc",
      size: "sm",
      className: "m-5"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ProgramTag__WEBPACK_IMPORTED_MODULE_3__["default"], {
      text: "gatsby",
      size: "sm",
      className: "m-5"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ProgramTag__WEBPACK_IMPORTED_MODULE_3__["default"], {
      text: "graphql",
      size: "sm",
      className: "m-5"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ProgramTag__WEBPACK_IMPORTED_MODULE_3__["default"], {
      text: "javascript",
      size: "sm",
      className: "m-5"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ProgramTag__WEBPACK_IMPORTED_MODULE_3__["default"], {
      text: "nativescript",
      size: "sm",
      className: "m-5"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ProgramTag__WEBPACK_IMPORTED_MODULE_3__["default"], {
      text: "nextjs",
      size: "sm",
      className: "m-5"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ProgramTag__WEBPACK_IMPORTED_MODULE_3__["default"], {
      text: "nodejs",
      size: "sm",
      className: "m-5"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ProgramTag__WEBPACK_IMPORTED_MODULE_3__["default"], {
      text: "mdx",
      size: "sm",
      className: "m-5"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ProgramTag__WEBPACK_IMPORTED_MODULE_3__["default"], {
      text: "mysql",
      size: "sm",
      className: "m-5"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ProgramTag__WEBPACK_IMPORTED_MODULE_3__["default"], {
      text: "powerbi",
      size: "sm",
      className: "m-5"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ProgramTag__WEBPACK_IMPORTED_MODULE_3__["default"], {
      text: "reactjs",
      size: "sm",
      className: "m-5"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ProgramTag__WEBPACK_IMPORTED_MODULE_3__["default"], {
      text: "reactnative",
      size: "sm",
      className: "m-5"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ProgramTag__WEBPACK_IMPORTED_MODULE_3__["default"], {
      text: "sqlserver",
      size: "sm",
      className: "m-5"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ProgramTag__WEBPACK_IMPORTED_MODULE_3__["default"], {
      text: "storybook",
      size: "sm",
      className: "m-5"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ProgramTag__WEBPACK_IMPORTED_MODULE_3__["default"], {
      text: "tailwindcss",
      size: "sm",
      className: "m-5"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ProgramTag__WEBPACK_IMPORTED_MODULE_3__["default"], {
      text: "typescript",
      size: "sm",
      className: "m-5"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 7
  }, _this);
};

_c = ProgramTags;

var Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "ProgramTags__Container",
  componentId: "sc-1i92jqi-0"
})({
  "display": "flex",
  "alignItems": "center",
  "justifyContent": "center",
  "flexDirection": "row",
  "flexWrap": "wrap",
  "margin": "1.25rem"
});

/* harmony default export */ __webpack_exports__["default"] = (ProgramTags);

var _c;

$RefreshReg$(_c, "ProgramTags");

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

/***/ "./components/atoms/tags/data.js":
/*!***************************************!*\
  !*** ./components/atoms/tags/data.js ***!
  \***************************************/
/*! exports provided: languages, defaultLanguage, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "languages", function() { return languages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultLanguage", function() { return defaultLanguage; });
/**
 * Language Tags : colors provided by Tailwindcss Theming
 */
var languages = {
  azure: {
    background: 'bg-progAzure',
    color: 'text-defaultLanguage',
    name: 'Azure'
  },
  csharp: {
    background: 'bg-progDotNetAndCore',
    color: 'text-defaultLanguage',
    name: 'C#'
  },
  dotnet: {
    background: 'bg-progDotNetAndCore',
    color: 'text-defaultLanguage',
    name: '.NET'
  },
  dotnetcore: {
    background: 'bg-progDotNetAndCore',
    color: 'text-defaultLanguage',
    name: '.NET Core'
  },
  gatsby: {
    background: 'bg-progGatsby',
    color: 'text-defaultLanguage',
    name: 'Gatsby'
  },
  graphql: {
    background: 'bg-progGraphQL',
    color: 'text-progGraphQL',
    name: 'GraphQL'
  },
  mdx: {
    background: 'bg-progMDX',
    color: 'text-progBlack',
    name: 'MDX'
  },
  mysql: {
    background: 'bg-progMySQL',
    color: 'text-progMySQL',
    name: 'MySQL'
  },
  nativescript: {
    background: 'bg-progNativeScript',
    color: 'text-defaultLanguage',
    name: 'NativeScript'
  },
  netmvc: {
    background: 'bg-progDotNetAndCore',
    color: 'text-defaultLanguage',
    name: '.NET MVC'
  },
  nextjs: {
    background: 'bg-progNextjs',
    color: 'text-defaultLanguage',
    name: 'Next.js'
  },
  nodejs: {
    background: 'bg-progNodejs',
    color: 'text-defaultLanguage',
    name: 'Node.js'
  },
  powerbi: {
    background: 'bg-progPowerBI',
    color: 'text-progBlack',
    name: 'Power BI'
  },
  reactjs: {
    background: 'bg-progReactjs',
    color: 'text-progReactjs',
    name: 'React'
  },
  reactnative: {
    background: 'bg-progReactjs',
    color: 'text-progReactjs',
    name: 'React Native'
  },
  storybook: {
    background: 'bg-progStorybook',
    color: 'text-defaultLanguage',
    name: 'Storybook'
  },
  javascript: {
    background: 'bg-progJavaScript',
    color: 'text-progBlack',
    name: 'JavaScript'
  },
  sqlserver: {
    background: 'bg-progAzure',
    color: 'text-defaultLanguage',
    name: 'SQL Server'
  },
  typescript: {
    background: 'bg-progTypeScript',
    color: 'text-defaultLanguage',
    name: 'TypeScript'
  },
  tailwindcss: {
    background: 'bg-white',
    color: 'text-progTailwindCSS',
    outline: 'border-progTailwindCSS',
    name: 'tailwindcss'
  }
};
var defaultLanguage = {
  background: 'bg-defaultLanguage',
  color: 'text-defaultLanguage',
  name: ''
};

/* harmony default export */ __webpack_exports__["default"] = (languages);

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

/***/ "./components/organisms/banners/ProfileBanner.js":
false,

/***/ "./components/organisms/banners/index.js":
false,

/***/ "./lib/hooks/fontLoader.js":
false,

/***/ "./lib/hooks/index.js":
false,

/***/ "./lib/hooks/useBreakPointQuery.js":
false,

/***/ "./lib/hooks/useMediaQuery.js":
false,

/***/ "./node_modules/fontfaceobserver/fontfaceobserver.standalone.js":
false,

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
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
/* harmony import */ var _components_templates_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/templates/Layout */ "./components/templates/Layout.js");
/* harmony import */ var _components_atoms_heading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/atoms/heading */ "./components/atoms/heading/index.js");
/* harmony import */ var _components_atoms_tiles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/atoms/tiles */ "./components/atoms/tiles/index.js");
/* harmony import */ var _components_atoms_logos_LogoText__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/atoms/logos/LogoText */ "./components/atoms/logos/LogoText.js");
/* harmony import */ var _components_atoms_tags_ProgramTags__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/atoms/tags/ProgramTags */ "./components/atoms/tags/ProgramTags.js");



var _jsxFileName = "D:\\WorkArea\\GitHub\\dtro-devuk\\pages\\about.js",
    _this = undefined;









var About = function About() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_templates_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "About dtro-devuk"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_atoms_heading__WEBPACK_IMPORTED_MODULE_5__["PageHeading"], {
      page: "About",
      pageTitle: "About",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "inline-block px-0 m-0",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_atoms_logos_LogoText__WEBPACK_IMPORTED_MODULE_7__["default"], {
          size: "5xl",
          isAnimated: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_atoms_tiles__WEBPACK_IMPORTED_MODULE_6__["Surface"], {
      className: "p-5 mt-5 md:text-lg",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ParagraphContainer, {
        children: "Hi I'm an experienced Full Stack Systems Developer. I enjoy coding, learning, sharing and staying relevant. \uD83D\uDE04\uD83D\uDE01\uD83D\uDC4D"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ParagraphContainer, {
        children: "I'm currently passionate about JAMstack, Headless CMS, Next.js, React.js, Gatsby, Tailwind CSS."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ParagraphContainer, {
        children: "At the moment I'm building this website using the technology above. I'm also following an Atomic Design process, iteratively building components and documenting them in Storybook."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ParagraphContainer, {
        children: "When I'm not developing and building things, I may be \uD83D\uDC40 reading & \uD83D\uDCDA learning, \uD83C\uDFAE gaming, chilling to \uD83C\uDFB5 music, restoring antiques, \uD83C\uDF72 cooking, \uD83C\uDF7A\uD83C\uDF77\uD83C\uDF7E brewing or growing \uD83D\uDD25 chillies."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_atoms_heading__WEBPACK_IMPORTED_MODULE_5__["PageHeading"], {
      page: "Tags",
      pageTitle: "Tags"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_atoms_tiles__WEBPACK_IMPORTED_MODULE_6__["Surface"], {
      className: "p-5 mt-5 md:text-lg",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_atoms_tags_ProgramTags__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, _this);
};

_c = About;

var ParagraphContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p.withConfig({
  displayName: "about__ParagraphContainer",
  componentId: "smkdez-0"
})({
  "padding": "1.25rem",
  "fontWeight": "400",
  "lineHeight": "1.5",
  "color": "var(--ui-heading-2)",
  "@media (min-width: 1024px)": {
    "fontWeight": "300",
    "lineHeight": "1.625"
  }
});

/* harmony default export */ __webpack_exports__["default"] = (About);

var _c;

$RefreshReg$(_c, "About");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hdG9tcy90YWdzL1Byb2dyYW1UYWcuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvYXRvbXMvdGFncy9Qcm9ncmFtVGFncy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hdG9tcy90YWdzL2RhdGEuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2Fib3V0LmpzIl0sIm5hbWVzIjpbIlByb2dyYW1UYWciLCJjbGFzc05hbWUiLCJ0ZXh0Iiwic2l6ZSIsImxhbmd1YWdlIiwibGFuZ3VhZ2VzIiwiZGVmYXVsdExhbmd1YWdlIiwib3V0bGluZSIsInRhZ1RleHQiLCJuYW1lIiwiZGVmYXVsdENsYXNzTmFtZSIsImJhY2tncm91bmQiLCJjb2xvciIsIlRleHRDb250YWluZXIiLCJzdHlsZWQiLCJidXR0b24iLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwib25lT2YiLCJQcm9ncmFtVGFncyIsIkNvbnRhaW5lciIsInR3IiwiZGl2IiwiYXp1cmUiLCJjc2hhcnAiLCJkb3RuZXQiLCJkb3RuZXRjb3JlIiwiZ2F0c2J5IiwiZ3JhcGhxbCIsIm1keCIsIm15c3FsIiwibmF0aXZlc2NyaXB0IiwibmV0bXZjIiwibmV4dGpzIiwibm9kZWpzIiwicG93ZXJiaSIsInJlYWN0anMiLCJyZWFjdG5hdGl2ZSIsInN0b3J5Ym9vayIsImphdmFzY3JpcHQiLCJzcWxzZXJ2ZXIiLCJ0eXBlc2NyaXB0IiwidGFpbHdpbmRjc3MiLCJBYm91dCIsIlBhcmFncmFwaENvbnRhaW5lciIsInAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLE9BQXdDO0FBQUEsTUFBckNDLFNBQXFDLFFBQXJDQSxTQUFxQztBQUFB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O0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKRixlQVNFLHFFQUFDLCtEQUFEO0FBQVMsZUFBUyxFQUFDLHFCQUFuQjtBQUFBLDhCQUNFLHFFQUFDLGtCQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFLRSxxRUFBQyxrQkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUxGLGVBU0UscUVBQUMsa0JBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFURixlQWFFLHFFQUFDLGtCQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBYkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBVEYsZUE0QkUscUVBQUMscUVBQUQ7QUFBYSxVQUFJLEVBQUMsTUFBbEI7QUFBeUIsZUFBUyxFQUFDO0FBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUE1QkYsZUE2QkUscUVBQUMsK0RBQUQ7QUFBUyxlQUFTLEVBQUMscUJBQW5CO0FBQUEsNkJBQ0UscUVBQUMsMEVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUE3QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFtQ0QsQ0FwQ0Q7O0tBQU1BLEs7O0FBc0NOLElBQU1DLGtCQUFrQixHQUFHdkIseURBQUUsQ0FBQ3dCLENBQU47QUFBQTtBQUFBO0FBQUEsR0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUFQLENBQXhCOztBQUVlRixvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hYm91dC43NjU5NmUzYTgxMjg4YTcxYmIwYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEEgdXNlZnVsIGxpbmsgZm9yIHJlZmVyZW5jZSBodHRwczovL2dpdGh1Yi5jb20vYmVuLXJvZ2Vyc29uL3R3aW4ubWFjcm8vaXNzdWVzLzE3XHJcbiAqL1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgdHcsIHsgY3NzLCBzdHlsZWQsIHRoZW1lIH0gZnJvbSAndHdpbi5tYWNybyc7XHJcbmltcG9ydCB7IGxhbmd1YWdlcywgZGVmYXVsdExhbmd1YWdlIH0gZnJvbSAnLi9kYXRhJztcclxuXHJcbmNvbnN0IFByb2dyYW1UYWcgPSAoeyBjbGFzc05hbWUsIHRleHQsIHNpemUgPSAnYmFzZScgfSkgPT4ge1xyXG4gIGNvbnN0IGxhbmd1YWdlID0gbGFuZ3VhZ2VzW3RleHRdIHx8IGRlZmF1bHRMYW5ndWFnZTtcclxuXHJcbiAgY29uc3Qgb3V0bGluZSA9IGxhbmd1YWdlLm91dGxpbmUgPyBgYm9yZGVyLTQgJHtsYW5ndWFnZS5vdXRsaW5lfWAgOiAnJztcclxuXHJcbiAgbGV0IHRhZ1RleHQgPSB0ZXh0O1xyXG4gIGlmIChsYW5ndWFnZS5uYW1lICE9ICcnKSB7XHJcbiAgICB0YWdUZXh0ID0gbGFuZ3VhZ2UubmFtZTtcclxuICB9XHJcbiAgY29uc3QgZGVmYXVsdENsYXNzTmFtZSA9IGAgdGV4dC0ke3NpemV9IG14LTEgJHtsYW5ndWFnZS5iYWNrZ3JvdW5kfSAke2xhbmd1YWdlLmNvbG9yfSAke291dGxpbmV9YDtcclxuXHJcbiAgaWYgKGNsYXNzTmFtZSA/IChjbGFzc05hbWUgPSBjbGFzc05hbWUgKyBkZWZhdWx0Q2xhc3NOYW1lKSA6IChjbGFzc05hbWUgPSBkZWZhdWx0Q2xhc3NOYW1lKSlcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxUZXh0Q29udGFpbmVyXHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XHJcbiAgICAgICAgY3NzPXtcclxuICAgICAgICAgIFtcclxuICAgICAgICAgICAgLy8gY3NzYFxyXG4gICAgICAgICAgICAvLyAgIGNvbG9yOiAke3RoZW1lYGNvbG9ycy5hc3Rlcm9pZGB9O1xyXG4gICAgICAgICAgICAvLyBgLFxyXG4gICAgICAgICAgXVxyXG4gICAgICAgIH1cclxuICAgICAgPlxyXG4gICAgICAgICN7dGFnVGV4dH1cclxuICAgICAgPC9UZXh0Q29udGFpbmVyPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmNvbnN0IFRleHRDb250YWluZXIgPSBzdHlsZWQuYnV0dG9uKCgpID0+IFtcclxuICAvLyBUaGUgY29tbW9uIGJ1dHRvbiBzdHlsZXMgYWRkZWQgd2l0aCB0aGUgdHcgaW1wb3J0XHJcbiAgdHdgcC0yIGZvbnQtc2VtaWJvbGQgdHJhY2tpbmctd2lkZSByb3VuZGVkIGZvbnQtYm9keSBmb2N1czpvdXRsaW5lLW5vbmVgLFxyXG4gIHR3YHRyYW5zaXRpb24tdHJhbnNmb3JtIGR1cmF0aW9uLTc1IHRyYW5zZm9ybWAsXHJcblxyXG4gIC8vIFVzZSB0aGUgdmFyaWFudCBncm91cGluZyBmZWF0dXJlIHRvIGFkZCB2YXJpYW50cyB0byBtdWx0aXBsZSBjbGFzc2VzXHJcbiAgdHdgaG9jdXM6KHNjYWxlLTEwNSB0ZXh0LXllbGxvdy00MDAgYmctcHJpbWFyeSlgLFxyXG5cclxuICAvLyBUaGUgdGhlbWUgaW1wb3J0IGNhbiBzdXBwbHkgdmFsdWVzIGZyb20geW91ciB0YWlsd2luZC5jb25maWcuanNcclxuICAvLyBjc3NgXHJcbiAgLy8gICBjb2xvcjogJHt0aGVtZWBjb2xvcnMud2hpdGVgfTtcclxuICAvLyBgLFxyXG5dKTtcclxuXHJcblByb2dyYW1UYWcucHJvcFR5cGVzID0ge1xyXG4gIC8qKiBUaGUgdGV4dC9sYW5ndWFnZSB0byBzaG93IGluIGEgdGFnIGZvcm1hdCBpLmUuIGphdmFzY3JpcHQuICovXHJcbiAgdGV4dDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIC8qKiBFeHRyYSBjc3MgY2xhc3NlcyB0byBhcHBseSB0byB0YWcgY29udGFpbmVyLiAqL1xyXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvKiogVGhlIGZvbnQtc2l6ZSBvZiB0aGUgcHJvZ3JhbSB0YWdzLiAqL1xyXG4gIHNpemU6IFByb3BUeXBlcy5vbmVPZihbJ3hzJywgJ3NtJywgJ2xnJywgJ3hsJywgJzJ4bCcsICczeGwnLCAnNHhsJ10pLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZ3JhbVRhZztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHR3IGZyb20gJ3R3aW4ubWFjcm8nO1xyXG5cclxuaW1wb3J0IFByb2dyYW1UYWcgZnJvbSAnLi9Qcm9ncmFtVGFnJztcclxuXHJcbmNvbnN0IFByb2dyYW1UYWdzID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgPFByb2dyYW1UYWcgdGV4dD1cImF6dXJlXCIgc2l6ZT1cInNtXCIgY2xhc3NOYW1lPVwibS01XCIgLz5cclxuICAgICAgICA8UHJvZ3JhbVRhZyB0ZXh0PVwiY3NoYXJwXCIgc2l6ZT1cInNtXCIgY2xhc3NOYW1lPVwibS01XCIgLz5cclxuICAgICAgICA8UHJvZ3JhbVRhZyB0ZXh0PVwiZG90bmV0XCIgc2l6ZT1cInNtXCIgY2xhc3NOYW1lPVwibS01XCIgLz5cclxuICAgICAgICA8UHJvZ3JhbVRhZyB0ZXh0PVwiZG90bmV0Y29yZVwiIHNpemU9XCJzbVwiIGNsYXNzTmFtZT1cIm0tNVwiIC8+XHJcbiAgICAgICAgPFByb2dyYW1UYWcgdGV4dD1cIm5ldG12Y1wiIHNpemU9XCJzbVwiIGNsYXNzTmFtZT1cIm0tNVwiIC8+XHJcbiAgICAgICAgPFByb2dyYW1UYWcgdGV4dD1cImdhdHNieVwiIHNpemU9XCJzbVwiIGNsYXNzTmFtZT1cIm0tNVwiIC8+XHJcbiAgICAgICAgPFByb2dyYW1UYWcgdGV4dD1cImdyYXBocWxcIiBzaXplPVwic21cIiBjbGFzc05hbWU9XCJtLTVcIiAvPlxyXG4gICAgICAgIDxQcm9ncmFtVGFnIHRleHQ9XCJqYXZhc2NyaXB0XCIgc2l6ZT1cInNtXCIgY2xhc3NOYW1lPVwibS01XCIgLz5cclxuICAgICAgICA8UHJvZ3JhbVRhZyB0ZXh0PVwibmF0aXZlc2NyaXB0XCIgc2l6ZT1cInNtXCIgY2xhc3NOYW1lPVwibS01XCIgLz5cclxuICAgICAgICA8UHJvZ3JhbVRhZyB0ZXh0PVwibmV4dGpzXCIgc2l6ZT1cInNtXCIgY2xhc3NOYW1lPVwibS01XCIgLz5cclxuICAgICAgICA8UHJvZ3JhbVRhZyB0ZXh0PVwibm9kZWpzXCIgc2l6ZT1cInNtXCIgY2xhc3NOYW1lPVwibS01XCIgLz5cclxuICAgICAgICA8UHJvZ3JhbVRhZyB0ZXh0PVwibWR4XCIgc2l6ZT1cInNtXCIgY2xhc3NOYW1lPVwibS01XCIgLz5cclxuICAgICAgICA8UHJvZ3JhbVRhZyB0ZXh0PVwibXlzcWxcIiBzaXplPVwic21cIiBjbGFzc05hbWU9XCJtLTVcIiAvPlxyXG4gICAgICAgIDxQcm9ncmFtVGFnIHRleHQ9XCJwb3dlcmJpXCIgc2l6ZT1cInNtXCIgY2xhc3NOYW1lPVwibS01XCIgLz5cclxuICAgICAgICA8UHJvZ3JhbVRhZyB0ZXh0PVwicmVhY3Rqc1wiIHNpemU9XCJzbVwiIGNsYXNzTmFtZT1cIm0tNVwiIC8+XHJcbiAgICAgICAgPFByb2dyYW1UYWcgdGV4dD1cInJlYWN0bmF0aXZlXCIgc2l6ZT1cInNtXCIgY2xhc3NOYW1lPVwibS01XCIgLz5cclxuICAgICAgICA8UHJvZ3JhbVRhZyB0ZXh0PVwic3Fsc2VydmVyXCIgc2l6ZT1cInNtXCIgY2xhc3NOYW1lPVwibS01XCIgLz5cclxuICAgICAgICA8UHJvZ3JhbVRhZyB0ZXh0PVwic3Rvcnlib29rXCIgc2l6ZT1cInNtXCIgY2xhc3NOYW1lPVwibS01XCIgLz5cclxuICAgICAgICA8UHJvZ3JhbVRhZyB0ZXh0PVwidGFpbHdpbmRjc3NcIiBzaXplPVwic21cIiBjbGFzc05hbWU9XCJtLTVcIiAvPlxyXG4gICAgICAgIDxQcm9ncmFtVGFnIHRleHQ9XCJ0eXBlc2NyaXB0XCIgc2l6ZT1cInNtXCIgY2xhc3NOYW1lPVwibS01XCIgLz5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHR3LmRpdmBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBmbGV4LXJvdyBmbGV4LXdyYXAgbS01YDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2dyYW1UYWdzO1xyXG4iLCIvKipcclxuICogTGFuZ3VhZ2UgVGFncyA6IGNvbG9ycyBwcm92aWRlZCBieSBUYWlsd2luZGNzcyBUaGVtaW5nXHJcbiAqL1xyXG5jb25zdCBsYW5ndWFnZXMgPSB7XHJcbiAgYXp1cmU6IHsgYmFja2dyb3VuZDogJ2JnLXByb2dBenVyZScsIGNvbG9yOiAndGV4dC1kZWZhdWx0TGFuZ3VhZ2UnLCBuYW1lOiAnQXp1cmUnIH0sXHJcbiAgY3NoYXJwOiB7IGJhY2tncm91bmQ6ICdiZy1wcm9nRG90TmV0QW5kQ29yZScsIGNvbG9yOiAndGV4dC1kZWZhdWx0TGFuZ3VhZ2UnLCBuYW1lOiAnQyMnIH0sXHJcbiAgZG90bmV0OiB7IGJhY2tncm91bmQ6ICdiZy1wcm9nRG90TmV0QW5kQ29yZScsIGNvbG9yOiAndGV4dC1kZWZhdWx0TGFuZ3VhZ2UnLCBuYW1lOiAnLk5FVCcgfSxcclxuICBkb3RuZXRjb3JlOiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAnYmctcHJvZ0RvdE5ldEFuZENvcmUnLFxyXG4gICAgY29sb3I6ICd0ZXh0LWRlZmF1bHRMYW5ndWFnZScsXHJcbiAgICBuYW1lOiAnLk5FVCBDb3JlJyxcclxuICB9LFxyXG4gIGdhdHNieToge1xyXG4gICAgYmFja2dyb3VuZDogJ2JnLXByb2dHYXRzYnknLFxyXG4gICAgY29sb3I6ICd0ZXh0LWRlZmF1bHRMYW5ndWFnZScsXHJcbiAgICBuYW1lOiAnR2F0c2J5JyxcclxuICB9LFxyXG4gIGdyYXBocWw6IHtcclxuICAgIGJhY2tncm91bmQ6ICdiZy1wcm9nR3JhcGhRTCcsXHJcbiAgICBjb2xvcjogJ3RleHQtcHJvZ0dyYXBoUUwnLFxyXG4gICAgbmFtZTogJ0dyYXBoUUwnLFxyXG4gIH0sXHJcbiAgbWR4OiB7IGJhY2tncm91bmQ6ICdiZy1wcm9nTURYJywgY29sb3I6ICd0ZXh0LXByb2dCbGFjaycsIG5hbWU6ICdNRFgnIH0sXHJcbiAgbXlzcWw6IHsgYmFja2dyb3VuZDogJ2JnLXByb2dNeVNRTCcsIGNvbG9yOiAndGV4dC1wcm9nTXlTUUwnLCBuYW1lOiAnTXlTUUwnIH0sXHJcbiAgbmF0aXZlc2NyaXB0OiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAnYmctcHJvZ05hdGl2ZVNjcmlwdCcsXHJcbiAgICBjb2xvcjogJ3RleHQtZGVmYXVsdExhbmd1YWdlJyxcclxuICAgIG5hbWU6ICdOYXRpdmVTY3JpcHQnLFxyXG4gIH0sXHJcbiAgbmV0bXZjOiB7IGJhY2tncm91bmQ6ICdiZy1wcm9nRG90TmV0QW5kQ29yZScsIGNvbG9yOiAndGV4dC1kZWZhdWx0TGFuZ3VhZ2UnLCBuYW1lOiAnLk5FVCBNVkMnIH0sXHJcbiAgbmV4dGpzOiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAnYmctcHJvZ05leHRqcycsXHJcbiAgICBjb2xvcjogJ3RleHQtZGVmYXVsdExhbmd1YWdlJyxcclxuICAgIG5hbWU6ICdOZXh0LmpzJyxcclxuICB9LFxyXG4gIG5vZGVqczoge1xyXG4gICAgYmFja2dyb3VuZDogJ2JnLXByb2dOb2RlanMnLFxyXG4gICAgY29sb3I6ICd0ZXh0LWRlZmF1bHRMYW5ndWFnZScsXHJcbiAgICBuYW1lOiAnTm9kZS5qcycsXHJcbiAgfSxcclxuICBwb3dlcmJpOiB7IGJhY2tncm91bmQ6ICdiZy1wcm9nUG93ZXJCSScsIGNvbG9yOiAndGV4dC1wcm9nQmxhY2snLCBuYW1lOiAnUG93ZXIgQkknIH0sXHJcbiAgcmVhY3Rqczoge1xyXG4gICAgYmFja2dyb3VuZDogJ2JnLXByb2dSZWFjdGpzJyxcclxuICAgIGNvbG9yOiAndGV4dC1wcm9nUmVhY3RqcycsXHJcbiAgICBuYW1lOiAnUmVhY3QnLFxyXG4gIH0sXHJcbiAgcmVhY3RuYXRpdmU6IHtcclxuICAgIGJhY2tncm91bmQ6ICdiZy1wcm9nUmVhY3RqcycsXHJcbiAgICBjb2xvcjogJ3RleHQtcHJvZ1JlYWN0anMnLFxyXG4gICAgbmFtZTogJ1JlYWN0IE5hdGl2ZScsXHJcbiAgfSxcclxuICBzdG9yeWJvb2s6IHsgYmFja2dyb3VuZDogJ2JnLXByb2dTdG9yeWJvb2snLCBjb2xvcjogJ3RleHQtZGVmYXVsdExhbmd1YWdlJywgbmFtZTogJ1N0b3J5Ym9vaycgfSxcclxuICBqYXZhc2NyaXB0OiB7IGJhY2tncm91bmQ6ICdiZy1wcm9nSmF2YVNjcmlwdCcsIGNvbG9yOiAndGV4dC1wcm9nQmxhY2snLCBuYW1lOiAnSmF2YVNjcmlwdCcgfSxcclxuICBzcWxzZXJ2ZXI6IHtcclxuICAgIGJhY2tncm91bmQ6ICdiZy1wcm9nQXp1cmUnLFxyXG4gICAgY29sb3I6ICd0ZXh0LWRlZmF1bHRMYW5ndWFnZScsXHJcbiAgICBuYW1lOiAnU1FMIFNlcnZlcicsXHJcbiAgfSxcclxuICB0eXBlc2NyaXB0OiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAnYmctcHJvZ1R5cGVTY3JpcHQnLFxyXG4gICAgY29sb3I6ICd0ZXh0LWRlZmF1bHRMYW5ndWFnZScsXHJcbiAgICBuYW1lOiAnVHlwZVNjcmlwdCcsXHJcbiAgfSxcclxuICB0YWlsd2luZGNzczoge1xyXG4gICAgYmFja2dyb3VuZDogJ2JnLXdoaXRlJyxcclxuICAgIGNvbG9yOiAndGV4dC1wcm9nVGFpbHdpbmRDU1MnLFxyXG4gICAgb3V0bGluZTogJ2JvcmRlci1wcm9nVGFpbHdpbmRDU1MnLFxyXG4gICAgbmFtZTogJ3RhaWx3aW5kY3NzJyxcclxuICB9LFxyXG59O1xyXG5jb25zdCBkZWZhdWx0TGFuZ3VhZ2UgPSB7XHJcbiAgYmFja2dyb3VuZDogJ2JnLWRlZmF1bHRMYW5ndWFnZScsXHJcbiAgY29sb3I6ICd0ZXh0LWRlZmF1bHRMYW5ndWFnZScsXHJcbiAgbmFtZTogJycsXHJcbn07XHJcblxyXG5leHBvcnQgeyBsYW5ndWFnZXMsIGRlZmF1bHRMYW5ndWFnZSB9O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbGFuZ3VhZ2VzO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgdHcgZnJvbSAndHdpbi5tYWNybyc7XHJcblxyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvdGVtcGxhdGVzL0xheW91dCc7XHJcbmltcG9ydCB7IFBhZ2VIZWFkaW5nIH0gZnJvbSAnLi4vY29tcG9uZW50cy9hdG9tcy9oZWFkaW5nJztcclxuaW1wb3J0IHsgU3VyZmFjZSB9IGZyb20gJy4uL2NvbXBvbmVudHMvYXRvbXMvdGlsZXMnO1xyXG5pbXBvcnQgTG9nb1RleHQgZnJvbSAnLi4vY29tcG9uZW50cy9hdG9tcy9sb2dvcy9Mb2dvVGV4dCc7XHJcbmltcG9ydCBQcm9ncmFtVGFncyBmcm9tICcuLi9jb21wb25lbnRzL2F0b21zL3RhZ3MvUHJvZ3JhbVRhZ3MnO1xyXG5cclxuY29uc3QgQWJvdXQgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQ+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5BYm91dCBkdHJvLWRldnVrPC90aXRsZT5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8UGFnZUhlYWRpbmcgcGFnZT1cIkFib3V0XCIgcGFnZVRpdGxlPVwiQWJvdXRcIj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgcHgtMCBtLTBcIj5cclxuICAgICAgICAgIDxMb2dvVGV4dCBzaXplPVwiNXhsXCIgaXNBbmltYXRlZD17dHJ1ZX0gLz5cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgIDwvUGFnZUhlYWRpbmc+XHJcbiAgICAgIDxTdXJmYWNlIGNsYXNzTmFtZT1cInAtNSBtdC01IG1kOnRleHQtbGdcIj5cclxuICAgICAgICA8UGFyYWdyYXBoQ29udGFpbmVyPlxyXG4gICAgICAgICAgSGkgSSdtIGFuIGV4cGVyaWVuY2VkIEZ1bGwgU3RhY2sgU3lzdGVtcyBEZXZlbG9wZXIuIEkgZW5qb3kgY29kaW5nLCBsZWFybmluZywgc2hhcmluZyBhbmRcclxuICAgICAgICAgIHN0YXlpbmcgcmVsZXZhbnQuIPCfmITwn5iB8J+RjVxyXG4gICAgICAgIDwvUGFyYWdyYXBoQ29udGFpbmVyPlxyXG4gICAgICAgIDxQYXJhZ3JhcGhDb250YWluZXI+XHJcbiAgICAgICAgICBJJ20gY3VycmVudGx5IHBhc3Npb25hdGUgYWJvdXQgSkFNc3RhY2ssIEhlYWRsZXNzIENNUywgTmV4dC5qcywgUmVhY3QuanMsIEdhdHNieSwgVGFpbHdpbmRcclxuICAgICAgICAgIENTUy5cclxuICAgICAgICA8L1BhcmFncmFwaENvbnRhaW5lcj5cclxuICAgICAgICA8UGFyYWdyYXBoQ29udGFpbmVyPlxyXG4gICAgICAgICAgQXQgdGhlIG1vbWVudCBJJ20gYnVpbGRpbmcgdGhpcyB3ZWJzaXRlIHVzaW5nIHRoZSB0ZWNobm9sb2d5IGFib3ZlLiBJJ20gYWxzbyBmb2xsb3dpbmcgYW5cclxuICAgICAgICAgIEF0b21pYyBEZXNpZ24gcHJvY2VzcywgaXRlcmF0aXZlbHkgYnVpbGRpbmcgY29tcG9uZW50cyBhbmQgZG9jdW1lbnRpbmcgdGhlbSBpbiBTdG9yeWJvb2suXHJcbiAgICAgICAgPC9QYXJhZ3JhcGhDb250YWluZXI+XHJcbiAgICAgICAgPFBhcmFncmFwaENvbnRhaW5lcj5cclxuICAgICAgICAgIFdoZW4gSSdtIG5vdCBkZXZlbG9waW5nIGFuZCBidWlsZGluZyB0aGluZ3MsIEkgbWF5IGJlIPCfkYAgcmVhZGluZyAmIPCfk5ogbGVhcm5pbmcsIPCfjq4gZ2FtaW5nLFxyXG4gICAgICAgICAgY2hpbGxpbmcgdG8g8J+OtSBtdXNpYywgcmVzdG9yaW5nIGFudGlxdWVzLCDwn42yIGNvb2tpbmcsIPCfjbrwn4238J+NviBicmV3aW5nIG9yIGdyb3dpbmcg8J+UpVxyXG4gICAgICAgICAgY2hpbGxpZXMuXHJcbiAgICAgICAgPC9QYXJhZ3JhcGhDb250YWluZXI+XHJcbiAgICAgIDwvU3VyZmFjZT5cclxuICAgICAgPFBhZ2VIZWFkaW5nIHBhZ2U9XCJUYWdzXCIgcGFnZVRpdGxlPVwiVGFnc1wiIC8+XHJcbiAgICAgIDxTdXJmYWNlIGNsYXNzTmFtZT1cInAtNSBtdC01IG1kOnRleHQtbGdcIj5cclxuICAgICAgICA8UHJvZ3JhbVRhZ3MgLz5cclxuICAgICAgPC9TdXJmYWNlPlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IFBhcmFncmFwaENvbnRhaW5lciA9IHR3LnBgcC01IGZvbnQtbm9ybWFsIGxlYWRpbmctbm9ybWFsIGxnOmZvbnQtbGlnaHQgbGc6bGVhZGluZy1yZWxheGVkIHRleHQtaGVhZGluZ1NlY29uZGFyeWA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBYm91dDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==