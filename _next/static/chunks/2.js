(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[2],{

/***/ "./components/atoms/tags/ProgramTag.js":
/*!*********************************************!*\
  !*** ./components/atoms/tags/ProgramTag.js ***!
  \*********************************************/
/*! exports provided: IconPrefixId, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconPrefixId", function() { return IconPrefixId; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data */ "./components/atoms/tags/data.js");




var _jsxFileName = "D:\\WorkArea\\GitHub\\dtro-devuk-website-nextjs\\components\\atoms\\tags\\ProgramTag.js",
    _this = undefined,
    _s = $RefreshSig$();

/**
 * A useful link for reference https://github.com/ben-rogerson/twin.macro/issues/17
 */



var IconPrefixId = "#filter-icon-";
var TagTypeAction = ['none', 'filter'];

var ProgramTag = function ProgramTag(_ref) {
  _s();

  var id = _ref.id,
      actionType = _ref.actionType,
      filterHandler = _ref.filterHandler,
      className = _ref.className,
      text = _ref.text,
      size = _ref.size,
      overrideBackgroundColor = _ref.overrideBackgroundColor,
      hasHover = _ref.hasHover,
      hasCount = _ref.hasCount,
      count = _ref.count;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      isMounted = _useState[0],
      setIsMounted = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      active = _useState2[0],
      setActive = _useState2[1];

  var language = _data__WEBPACK_IMPORTED_MODULE_4__["languages"][text] || _data__WEBPACK_IMPORTED_MODULE_4__["defaultLanguage"];
  var tagId = "#".concat(id);
  var filterIconId = "".concat(IconPrefixId).concat(id);

  var handleToggle = function handleToggle(e, active) {
    if (e.ctrlKey || e.metaKey || e.shiftKey) {
      return; // let the browser deal with the click natively
    } // console.log(`Tag State on click ${text} isActive: ${active}`);


    e.preventDefault();

    if (isMounted) {
      var isActive = !active;
      setActive(isActive); // console.log(`Setting Tag State on click ${text} isActive: ${active}`);

      var _id = e.currentTarget.id.replace('#', '');

      filterHandler(e, _id, isActive);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (actionType === 'filter') {//console.log(`Default Tag State ${text} isActive: ${active}`);
    }

    setIsMounted(true);
  }); //with [] means - empty dependencies array means "run this once on first mount", dont want to do that here!

  var outline = language.outline ? "border-4 ".concat(language.outline) : '';
  var tagText = text;

  if (language.name != '') {
    tagText = language.name;
  }

  var backgroundColor = "".concat(language.background);

  if (overrideBackgroundColor !== '') {
    backgroundColor = overrideBackgroundColor;
  }

  var defaultClassName = " text-".concat(size, " ").concat(backgroundColor, " ").concat(language.color, " ").concat(outline);
  if (className ? className = className + defaultClassName : className = defaultClassName) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TextContainer, {
      id: tagId,
      hasHover: hasHover,
      className: className,
      actionType: actionType,
      onClick: function onClick(event) {
        return handleToggle(event, active);
      },
      "data-active": active,
      children: ["#", tagText, actionType === 'filter' && active ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SelectedContainer, {
        id: filterIconId,
        children: "\u2705"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 13
      }, _this) : null, hasCount && count !== '' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CountContainer, {
        children: count
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 39
      }, _this) : null]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 9
    }, _this)
  }, void 0, false);
};

_s(ProgramTag, "Y0GeYCFrrQYuuz0IM5v1zk+IEH0=");

_c = ProgramTag;

var SelectedContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "ProgramTag__SelectedContainer",
  componentId: "evhlpq-0"
})(function () {
  return [{
    "position": "absolute",
    "bottom": "0px",
    "left": "0px",
    "marginBottom": "-0.5rem",
    "marginLeft": "-0.5rem"
  }];
});

var CountContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "ProgramTag__CountContainer",
  componentId: "evhlpq-1"
})(function () {
  return [{
    "position": "absolute",
    "top": "0px",
    "right": "0px",
    "paddingLeft": "0.5rem",
    "paddingRight": "0.5rem",
    "paddingTop": "0px",
    "paddingBottom": "0px",
    "marginTop": "-0.75rem",
    "marginRight": "-0.75rem",
    "fontSize": "0.75rem",
    "lineHeight": "1rem",
    "--tw-text-opacity": "1",
    "color": "rgba(255, 255, 255, var(--tw-text-opacity))",
    "borderWidth": "2px",
    "--tw-border-opacity": "1",
    "borderColor": "rgba(255, 255, 255, var(--tw-border-opacity))",
    "borderRadius": "9999px",
    "backgroundColor": "var(--ui-heading-accent-2)"
  }];
});

var TextContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button.withConfig({
  displayName: "ProgramTag__TextContainer",
  componentId: "evhlpq-2"
})(function (_ref2) {
  var hasHover = _ref2.hasHover,
      actionType = _ref2.actionType,
      active = _ref2.active;
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
  hasHover && {
    ":hover": {
      "--tw-scale-x": "1.05",
      "--tw-scale-y": "1.05",
      "opacity": "0.3"
    }
  } // active && actionType === 'filter' && tw`ring-2 ring-offset-black`,
  // !active && tw`focus:ring-0`,
  ];
});

ProgramTag.propTypes = {
  /** Specify the Id */
  id: prop_types__WEBPACK_IMPORTED_MODULE_3__["string"].isRequired,

  /** Specify Action */
  actionType: Object(prop_types__WEBPACK_IMPORTED_MODULE_3__["oneOf"])(TagTypeAction),

  /** Specify the parents toggle/onclick handler for filtering */
  filterHandler: prop_types__WEBPACK_IMPORTED_MODULE_3__["func"],

  /** The text/language to show in a tag format i.e. javascript. */
  text: prop_types__WEBPACK_IMPORTED_MODULE_3__["string"].isRequired,

  /** Extra css classes to apply to tag container. */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3__["string"],

  /** The font-size of the program tags. */
  size: Object(prop_types__WEBPACK_IMPORTED_MODULE_3__["oneOf"])(['xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl']),

  /** The tag background colour to override with. */
  overrideBackgroundColor: prop_types__WEBPACK_IMPORTED_MODULE_3__["string"],

  /** Enable and Disable hover. */
  hasHover: prop_types__WEBPACK_IMPORTED_MODULE_3__["bool"],

  /** Show Hide and Disable Counter. Child has the count */
  hasCount: prop_types__WEBPACK_IMPORTED_MODULE_3__["bool"],

  /** Specify Count */
  count: prop_types__WEBPACK_IMPORTED_MODULE_3__["string"]
};
ProgramTag.defaultProps = {
  id: '',
  actionType: 'none',
  size: 'base',
  overrideBackgroundColor: '',
  hasHover: true,
  hasCount: false,
  count: ''
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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hdG9tcy90YWdzL1Byb2dyYW1UYWcuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvYXRvbXMvdGFncy9kYXRhLmpzIl0sIm5hbWVzIjpbIkljb25QcmVmaXhJZCIsIlRhZ1R5cGVBY3Rpb24iLCJQcm9ncmFtVGFnIiwiaWQiLCJhY3Rpb25UeXBlIiwiZmlsdGVySGFuZGxlciIsImNsYXNzTmFtZSIsInRleHQiLCJzaXplIiwib3ZlcnJpZGVCYWNrZ3JvdW5kQ29sb3IiLCJoYXNIb3ZlciIsImhhc0NvdW50IiwiY291bnQiLCJ1c2VTdGF0ZSIsImlzTW91bnRlZCIsInNldElzTW91bnRlZCIsImFjdGl2ZSIsInNldEFjdGl2ZSIsImxhbmd1YWdlIiwibGFuZ3VhZ2VzIiwiZGVmYXVsdExhbmd1YWdlIiwidGFnSWQiLCJmaWx0ZXJJY29uSWQiLCJoYW5kbGVUb2dnbGUiLCJlIiwiY3RybEtleSIsIm1ldGFLZXkiLCJzaGlmdEtleSIsInByZXZlbnREZWZhdWx0IiwiaXNBY3RpdmUiLCJjdXJyZW50VGFyZ2V0IiwicmVwbGFjZSIsInVzZUVmZmVjdCIsIm91dGxpbmUiLCJ0YWdUZXh0IiwibmFtZSIsImJhY2tncm91bmRDb2xvciIsImJhY2tncm91bmQiLCJkZWZhdWx0Q2xhc3NOYW1lIiwiY29sb3IiLCJldmVudCIsIlNlbGVjdGVkQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwiQ291bnRDb250YWluZXIiLCJUZXh0Q29udGFpbmVyIiwiYnV0dG9uIiwicHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsIm9uZU9mIiwiZnVuYyIsImJvb2wiLCJkZWZhdWx0UHJvcHMiLCJhenVyZSIsImNzaGFycCIsImRvdG5ldCIsImRvdG5ldGNvcmUiLCJnYXRzYnkiLCJncmFwaHFsIiwibWR4IiwibXlzcWwiLCJuYXRpdmVzY3JpcHQiLCJuZXRtdmMiLCJuZXh0anMiLCJub2RlanMiLCJwb3dlcmJpIiwicmVhY3RqcyIsInJlYWN0bmF0aXZlIiwic3Rvcnlib29rIiwiamF2YXNjcmlwdCIsInNxbHNlcnZlciIsInR5cGVzY3JpcHQiLCJ0YWlsd2luZGNzcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVPLElBQU1BLFlBQVksa0JBQWxCO0FBRVAsSUFBTUMsYUFBYSxHQUFHLENBQUMsTUFBRCxFQUFTLFFBQVQsQ0FBdEI7O0FBRUEsSUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsT0FXYjtBQUFBOztBQUFBLE1BVkpDLEVBVUksUUFWSkEsRUFVSTtBQUFBLE1BVEpDLFVBU0ksUUFUSkEsVUFTSTtBQUFBLE1BUkpDLGFBUUksUUFSSkEsYUFRSTtBQUFBLE1BUEpDLFNBT0ksUUFQSkEsU0FPSTtBQUFBLE1BTkpDLElBTUksUUFOSkEsSUFNSTtBQUFBLE1BTEpDLElBS0ksUUFMSkEsSUFLSTtBQUFBLE1BSkpDLHVCQUlJLFFBSkpBLHVCQUlJO0FBQUEsTUFISkMsUUFHSSxRQUhKQSxRQUdJO0FBQUEsTUFGSkMsUUFFSSxRQUZKQSxRQUVJO0FBQUEsTUFESkMsS0FDSSxRQURKQSxLQUNJOztBQUFBLGtCQUM4QkMsc0RBQVEsQ0FBQyxLQUFELENBRHRDO0FBQUEsTUFDR0MsU0FESDtBQUFBLE1BQ2NDLFlBRGQ7O0FBQUEsbUJBRXdCRixzREFBUSxDQUFDLEtBQUQsQ0FGaEM7QUFBQSxNQUVHRyxNQUZIO0FBQUEsTUFFV0MsU0FGWDs7QUFJSixNQUFNQyxRQUFRLEdBQUdDLCtDQUFTLENBQUNaLElBQUQsQ0FBVCxJQUFtQmEscURBQXBDO0FBRUEsTUFBTUMsS0FBSyxjQUFPbEIsRUFBUCxDQUFYO0FBQ0EsTUFBTW1CLFlBQVksYUFBTXRCLFlBQU4sU0FBcUJHLEVBQXJCLENBQWxCOztBQUVBLE1BQU1vQixZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxDQUFELEVBQUlSLE1BQUosRUFBZTtBQUNsQyxRQUFJUSxDQUFD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QUFVLEVBQUUsa0JBQWQ7QUFBa0NFLFNBQUssRUFBRSxzQkFBekM7QUFBaUVKLFFBQUksRUFBRTtBQUF2RSxHQWhESztBQWlEaEJtQyxZQUFVLEVBQUU7QUFBRWpDLGNBQVUsRUFBRSxtQkFBZDtBQUFtQ0UsU0FBSyxFQUFFLGdCQUExQztBQUE0REosUUFBSSxFQUFFO0FBQWxFLEdBakRJO0FBa0RoQm9DLFdBQVMsRUFBRTtBQUNUbEMsY0FBVSxFQUFFLGNBREg7QUFFVEUsU0FBSyxFQUFFLHNCQUZFO0FBR1RKLFFBQUksRUFBRTtBQUhHLEdBbERLO0FBdURoQnFDLFlBQVUsRUFBRTtBQUNWbkMsY0FBVSxFQUFFLG1CQURGO0FBRVZFLFNBQUssRUFBRSxzQkFGRztBQUdWSixRQUFJLEVBQUU7QUFISSxHQXZESTtBQTREaEJzQyxhQUFXLEVBQUU7QUFDWHBDLGNBQVUsRUFBRSxVQUREO0FBRVhFLFNBQUssRUFBRSxzQkFGSTtBQUdYTixXQUFPLEVBQUUsd0JBSEU7QUFJWEUsUUFBSSxFQUFFO0FBSks7QUE1REcsQ0FBbEI7QUFtRUEsSUFBTWYsZUFBZSxHQUFHO0FBQ3RCaUIsWUFBVSxFQUFFLG9CQURVO0FBRXRCRSxPQUFLLEVBQUUsc0JBRmU7QUFHdEJKLE1BQUksRUFBRTtBQUhnQixDQUF4QjtBQU1BO0FBRWVoQix3RUFBZiIsImZpbGUiOiJzdGF0aWMvY2h1bmtzLzIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQSB1c2VmdWwgbGluayBmb3IgcmVmZXJlbmNlIGh0dHBzOi8vZ2l0aHViLmNvbS9iZW4tcm9nZXJzb24vdHdpbi5tYWNyby9pc3N1ZXMvMTdcclxuICovXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBzdHJpbmcsIG51bWJlciwgYm9vbCwgb25lT2YsIGZ1bmMgfSBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHR3LCB7IGNzcywgc3R5bGVkLCB0aGVtZSB9IGZyb20gJ3R3aW4ubWFjcm8nO1xyXG5pbXBvcnQgeyBsYW5ndWFnZXMsIGRlZmF1bHRMYW5ndWFnZSB9IGZyb20gJy4vZGF0YSc7XHJcblxyXG5leHBvcnQgY29uc3QgSWNvblByZWZpeElkID0gYCNmaWx0ZXItaWNvbi1gO1xyXG5cclxuY29uc3QgVGFnVHlwZUFjdGlvbiA9IFsnbm9uZScsICdmaWx0ZXInXTtcclxuXHJcbmNvbnN0IFByb2dyYW1UYWcgPSAoe1xyXG4gIGlkLFxyXG4gIGFjdGlvblR5cGUsXHJcbiAgZmlsdGVySGFuZGxlcixcclxuICBjbGFzc05hbWUsXHJcbiAgdGV4dCxcclxuICBzaXplLFxyXG4gIG92ZXJyaWRlQmFja2dyb3VuZENvbG9yLFxyXG4gIGhhc0hvdmVyLFxyXG4gIGhhc0NvdW50LFxyXG4gIGNvdW50LFxyXG59KSA9PiB7XHJcbiAgY29uc3QgW2lzTW91bnRlZCwgc2V0SXNNb3VudGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBsYW5ndWFnZSA9IGxhbmd1YWdlc1t0ZXh0XSB8fCBkZWZhdWx0TGFuZ3VhZ2U7XHJcblxyXG4gIGNvbnN0IHRhZ0lkID0gYCMke2lkfWA7XHJcbiAgY29uc3QgZmlsdGVySWNvbklkID0gYCR7SWNvblByZWZpeElkfSR7aWR9YDtcclxuXHJcbiAgY29uc3QgaGFuZGxlVG9nZ2xlID0gKGUsIGFjdGl2ZSkgPT4ge1xyXG4gICAgaWYgKGUuY3RybEtleSB8fCBlLm1ldGFLZXkgfHwgZS5zaGlmdEtleSkge1xyXG4gICAgICByZXR1cm47IC8vIGxldCB0aGUgYnJvd3NlciBkZWFsIHdpdGggdGhlIGNsaWNrIG5hdGl2ZWx5XHJcbiAgICB9XHJcbiAgICAvLyBjb25zb2xlLmxvZyhgVGFnIFN0YXRlIG9uIGNsaWNrICR7dGV4dH0gaXNBY3RpdmU6ICR7YWN0aXZlfWApO1xyXG5cclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBpZiAoaXNNb3VudGVkKSB7XHJcbiAgICAgIGNvbnN0IGlzQWN0aXZlID0gIWFjdGl2ZTtcclxuICAgICAgc2V0QWN0aXZlKGlzQWN0aXZlKTtcclxuICAgICAgLy8gY29uc29sZS5sb2coYFNldHRpbmcgVGFnIFN0YXRlIG9uIGNsaWNrICR7dGV4dH0gaXNBY3RpdmU6ICR7YWN0aXZlfWApO1xyXG5cclxuICAgICAgY29uc3QgaWQgPSBlLmN1cnJlbnRUYXJnZXQuaWQucmVwbGFjZSgnIycsICcnKTtcclxuICAgICAgZmlsdGVySGFuZGxlcihlLCBpZCwgaXNBY3RpdmUpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoYWN0aW9uVHlwZSA9PT0gJ2ZpbHRlcicpIHtcclxuICAgICAgLy9jb25zb2xlLmxvZyhgRGVmYXVsdCBUYWcgU3RhdGUgJHt0ZXh0fSBpc0FjdGl2ZTogJHthY3RpdmV9YCk7XHJcbiAgICB9XHJcbiAgICBzZXRJc01vdW50ZWQodHJ1ZSk7XHJcbiAgfSk7IC8vd2l0aCBbXSBtZWFucyAtIGVtcHR5IGRlcGVuZGVuY2llcyBhcnJheSBtZWFucyBcInJ1biB0aGlzIG9uY2Ugb24gZmlyc3QgbW91bnRcIiwgZG9udCB3YW50IHRvIGRvIHRoYXQgaGVyZSFcclxuXHJcbiAgY29uc3Qgb3V0bGluZSA9IGxhbmd1YWdlLm91dGxpbmUgPyBgYm9yZGVyLTQgJHtsYW5ndWFnZS5vdXRsaW5lfWAgOiAnJztcclxuXHJcbiAgbGV0IHRhZ1RleHQgPSB0ZXh0O1xyXG4gIGlmIChsYW5ndWFnZS5uYW1lICE9ICcnKSB7XHJcbiAgICB0YWdUZXh0ID0gbGFuZ3VhZ2UubmFtZTtcclxuICB9XHJcblxyXG4gIGxldCBiYWNrZ3JvdW5kQ29sb3IgPSBgJHtsYW5ndWFnZS5iYWNrZ3JvdW5kfWA7XHJcbiAgaWYgKG92ZXJyaWRlQmFja2dyb3VuZENvbG9yICE9PSAnJykge1xyXG4gICAgYmFja2dyb3VuZENvbG9yID0gb3ZlcnJpZGVCYWNrZ3JvdW5kQ29sb3I7XHJcbiAgfVxyXG4gIGNvbnN0IGRlZmF1bHRDbGFzc05hbWUgPSBgIHRleHQtJHtzaXplfSAke2JhY2tncm91bmRDb2xvcn0gJHtsYW5ndWFnZS5jb2xvcn0gJHtvdXRsaW5lfWA7XHJcblxyXG4gIGlmIChjbGFzc05hbWUgPyAoY2xhc3NOYW1lID0gY2xhc3NOYW1lICsgZGVmYXVsdENsYXNzTmFtZSkgOiAoY2xhc3NOYW1lID0gZGVmYXVsdENsYXNzTmFtZSkpXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxUZXh0Q29udGFpbmVyXHJcbiAgICAgICAgICBpZD17dGFnSWR9XHJcbiAgICAgICAgICBoYXNIb3Zlcj17aGFzSG92ZXJ9XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cclxuICAgICAgICAgIGFjdGlvblR5cGU9e2FjdGlvblR5cGV9XHJcbiAgICAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IGhhbmRsZVRvZ2dsZShldmVudCwgYWN0aXZlKX1cclxuICAgICAgICAgIGRhdGEtYWN0aXZlPXthY3RpdmV9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgI3t0YWdUZXh0fVxyXG4gICAgICAgICAge2FjdGlvblR5cGUgPT09ICdmaWx0ZXInICYmIGFjdGl2ZSA/IChcclxuICAgICAgICAgICAgPFNlbGVjdGVkQ29udGFpbmVyIGlkPXtmaWx0ZXJJY29uSWR9PuKchTwvU2VsZWN0ZWRDb250YWluZXI+XHJcbiAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgIHtoYXNDb3VudCAmJiBjb3VudCAhPT0gJycgPyA8Q291bnRDb250YWluZXI+e2NvdW50fTwvQ291bnRDb250YWluZXI+IDogbnVsbH1cclxuICAgICAgICA8L1RleHRDb250YWluZXI+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmNvbnN0IFNlbGVjdGVkQ29udGFpbmVyID0gc3R5bGVkLmRpdigoKSA9PiBbdHdgYWJzb2x1dGUgYm90dG9tLTAgbGVmdC0wIC1tYi0yIC1tbC0yYF0pO1xyXG5cclxuY29uc3QgQ291bnRDb250YWluZXIgPSBzdHlsZWQuZGl2KCgpID0+IFtcclxuICB0d2BhYnNvbHV0ZSB0b3AtMCByaWdodC0wIHB4LTIgcHktMCAtbXQtMyAtbXItMyB0ZXh0LXhzIHRleHQtd2hpdGUgYm9yZGVyLTIgYm9yZGVyLXdoaXRlIHJvdW5kZWQtZnVsbCBiZy1hY2NlbnQyIGAsXHJcbl0pO1xyXG5cclxuY29uc3QgVGV4dENvbnRhaW5lciA9IHN0eWxlZC5idXR0b24oKHsgaGFzSG92ZXIsIGFjdGlvblR5cGUsIGFjdGl2ZSB9KSA9PiBbXHJcbiAgLy8gVGhlIGNvbW1vbiBidXR0b24gc3R5bGVzIGFkZGVkIHdpdGggdGhlIHR3IGltcG9ydFxyXG4gIHR3YHAtMiBmb250LXNlbWlib2xkIHRyYWNraW5nLXdpZGUgcm91bmRlZCBmb250LWJvZHkgZm9jdXM6b3V0bGluZS1ub25lYCxcclxuICB0d2B0cmFuc2l0aW9uLXRyYW5zZm9ybSBkdXJhdGlvbi03NSB0cmFuc2Zvcm1gLFxyXG5cclxuICAvLyBVc2UgdGhlIHZhcmlhbnQgZ3JvdXBpbmcgZmVhdHVyZSB0byBhZGQgdmFyaWFudHMgdG8gbXVsdGlwbGUgY2xhc3Nlc1xyXG4gIGhhc0hvdmVyICYmIHR3YGhvdmVyOihzY2FsZS0xMDUgb3BhY2l0eS0zMClgLFxyXG4gIC8vIGFjdGl2ZSAmJiBhY3Rpb25UeXBlID09PSAnZmlsdGVyJyAmJiB0d2ByaW5nLTIgcmluZy1vZmZzZXQtYmxhY2tgLFxyXG4gIC8vICFhY3RpdmUgJiYgdHdgZm9jdXM6cmluZy0wYCxcclxuXSk7XHJcblxyXG5Qcm9ncmFtVGFnLnByb3BUeXBlcyA9IHtcclxuICAvKiogU3BlY2lmeSB0aGUgSWQgKi9cclxuICBpZDogc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgLyoqIFNwZWNpZnkgQWN0aW9uICovXHJcbiAgYWN0aW9uVHlwZTogb25lT2YoVGFnVHlwZUFjdGlvbiksXHJcbiAgLyoqIFNwZWNpZnkgdGhlIHBhcmVudHMgdG9nZ2xlL29uY2xpY2sgaGFuZGxlciBmb3IgZmlsdGVyaW5nICovXHJcbiAgZmlsdGVySGFuZGxlcjogZnVuYyxcclxuICAvKiogVGhlIHRleHQvbGFuZ3VhZ2UgdG8gc2hvdyBpbiBhIHRhZyBmb3JtYXQgaS5lLiBqYXZhc2NyaXB0LiAqL1xyXG4gIHRleHQ6IHN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIC8qKiBFeHRyYSBjc3MgY2xhc3NlcyB0byBhcHBseSB0byB0YWcgY29udGFpbmVyLiAqL1xyXG4gIGNsYXNzTmFtZTogc3RyaW5nLFxyXG4gIC8qKiBUaGUgZm9udC1zaXplIG9mIHRoZSBwcm9ncmFtIHRhZ3MuICovXHJcbiAgc2l6ZTogb25lT2YoWyd4cycsICdzbScsICdiYXNlJywgJ2xnJywgJ3hsJywgJzJ4bCcsICczeGwnLCAnNHhsJ10pLFxyXG4gIC8qKiBUaGUgdGFnIGJhY2tncm91bmQgY29sb3VyIHRvIG92ZXJyaWRlIHdpdGguICovXHJcbiAgb3ZlcnJpZGVCYWNrZ3JvdW5kQ29sb3I6IHN0cmluZyxcclxuICAvKiogRW5hYmxlIGFuZCBEaXNhYmxlIGhvdmVyLiAqL1xyXG4gIGhhc0hvdmVyOiBib29sLFxyXG4gIC8qKiBTaG93IEhpZGUgYW5kIERpc2FibGUgQ291bnRlci4gQ2hpbGQgaGFzIHRoZSBjb3VudCAqL1xyXG4gIGhhc0NvdW50OiBib29sLFxyXG4gIC8qKiBTcGVjaWZ5IENvdW50ICovXHJcbiAgY291bnQ6IHN0cmluZyxcclxufTtcclxuXHJcblByb2dyYW1UYWcuZGVmYXVsdFByb3BzID0ge1xyXG4gIGlkOiAnJyxcclxuICBhY3Rpb25UeXBlOiAnbm9uZScsXHJcbiAgc2l6ZTogJ2Jhc2UnLFxyXG4gIG92ZXJyaWRlQmFja2dyb3VuZENvbG9yOiAnJyxcclxuICBoYXNIb3ZlcjogdHJ1ZSxcclxuICBoYXNDb3VudDogZmFsc2UsXHJcbiAgY291bnQ6ICcnLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZ3JhbVRhZztcclxuIiwiLyoqXHJcbiAqIExhbmd1YWdlIFRhZ3MgOiBjb2xvcnMgcHJvdmlkZWQgYnkgVGFpbHdpbmRjc3MgVGhlbWluZ1xyXG4gKi9cclxuY29uc3QgbGFuZ3VhZ2VzID0ge1xyXG4gIGF6dXJlOiB7IGJhY2tncm91bmQ6ICdiZy1wcm9nQXp1cmUnLCBjb2xvcjogJ3RleHQtZGVmYXVsdExhbmd1YWdlJywgbmFtZTogJ0F6dXJlJyB9LFxyXG4gIGNzaGFycDogeyBiYWNrZ3JvdW5kOiAnYmctcHJvZ0RvdE5ldEFuZENvcmUnLCBjb2xvcjogJ3RleHQtZGVmYXVsdExhbmd1YWdlJywgbmFtZTogJ0MjJyB9LFxyXG4gIGRvdG5ldDogeyBiYWNrZ3JvdW5kOiAnYmctcHJvZ0RvdE5ldEFuZENvcmUnLCBjb2xvcjogJ3RleHQtZGVmYXVsdExhbmd1YWdlJywgbmFtZTogJy5ORVQnIH0sXHJcbiAgZG90bmV0Y29yZToge1xyXG4gICAgYmFja2dyb3VuZDogJ2JnLXByb2dEb3ROZXRBbmRDb3JlJyxcclxuICAgIGNvbG9yOiAndGV4dC1kZWZhdWx0TGFuZ3VhZ2UnLFxyXG4gICAgbmFtZTogJy5ORVQgQ29yZScsXHJcbiAgfSxcclxuICBnYXRzYnk6IHtcclxuICAgIGJhY2tncm91bmQ6ICdiZy1wcm9nR2F0c2J5JyxcclxuICAgIGNvbG9yOiAndGV4dC1kZWZhdWx0TGFuZ3VhZ2UnLFxyXG4gICAgbmFtZTogJ0dhdHNieScsXHJcbiAgfSxcclxuICBncmFwaHFsOiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAnYmctcHJvZ0dyYXBoUUwnLFxyXG4gICAgY29sb3I6ICd0ZXh0LXByb2dHcmFwaFFMJyxcclxuICAgIG5hbWU6ICdHcmFwaFFMJyxcclxuICB9LFxyXG4gIG1keDogeyBiYWNrZ3JvdW5kOiAnYmctcHJvZ01EWCcsIGNvbG9yOiAndGV4dC1wcm9nQmxhY2snLCBuYW1lOiAnTURYJyB9LFxyXG4gIG15c3FsOiB7IGJhY2tncm91bmQ6ICdiZy1wcm9nTXlTUUwnLCBjb2xvcjogJ3RleHQtcHJvZ015U1FMJywgbmFtZTogJ015U1FMJyB9LFxyXG4gIG5hdGl2ZXNjcmlwdDoge1xyXG4gICAgYmFja2dyb3VuZDogJ2JnLXByb2dOYXRpdmVTY3JpcHQnLFxyXG4gICAgY29sb3I6ICd0ZXh0LWRlZmF1bHRMYW5ndWFnZScsXHJcbiAgICBuYW1lOiAnTmF0aXZlU2NyaXB0JyxcclxuICB9LFxyXG4gIG5ldG12YzogeyBiYWNrZ3JvdW5kOiAnYmctcHJvZ0RvdE5ldEFuZENvcmUnLCBjb2xvcjogJ3RleHQtZGVmYXVsdExhbmd1YWdlJywgbmFtZTogJy5ORVQgTVZDJyB9LFxyXG4gIG5leHRqczoge1xyXG4gICAgYmFja2dyb3VuZDogJ2JnLXByb2dOZXh0anMnLFxyXG4gICAgY29sb3I6ICd0ZXh0LWRlZmF1bHRMYW5ndWFnZScsXHJcbiAgICBuYW1lOiAnTmV4dC5qcycsXHJcbiAgfSxcclxuICBub2RlanM6IHtcclxuICAgIGJhY2tncm91bmQ6ICdiZy1wcm9nTm9kZWpzJyxcclxuICAgIGNvbG9yOiAndGV4dC1kZWZhdWx0TGFuZ3VhZ2UnLFxyXG4gICAgbmFtZTogJ05vZGUuanMnLFxyXG4gIH0sXHJcbiAgcG93ZXJiaTogeyBiYWNrZ3JvdW5kOiAnYmctcHJvZ1Bvd2VyQkknLCBjb2xvcjogJ3RleHQtcHJvZ0JsYWNrJywgbmFtZTogJ1Bvd2VyIEJJJyB9LFxyXG4gIHJlYWN0anM6IHtcclxuICAgIGJhY2tncm91bmQ6ICdiZy1wcm9nUmVhY3RqcycsXHJcbiAgICBjb2xvcjogJ3RleHQtcHJvZ1JlYWN0anMnLFxyXG4gICAgbmFtZTogJ1JlYWN0JyxcclxuICB9LFxyXG4gIHJlYWN0bmF0aXZlOiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAnYmctcHJvZ1JlYWN0anMnLFxyXG4gICAgY29sb3I6ICd0ZXh0LXByb2dSZWFjdGpzJyxcclxuICAgIG5hbWU6ICdSZWFjdCBOYXRpdmUnLFxyXG4gIH0sXHJcbiAgc3Rvcnlib29rOiB7IGJhY2tncm91bmQ6ICdiZy1wcm9nU3Rvcnlib29rJywgY29sb3I6ICd0ZXh0LWRlZmF1bHRMYW5ndWFnZScsIG5hbWU6ICdTdG9yeWJvb2snIH0sXHJcbiAgamF2YXNjcmlwdDogeyBiYWNrZ3JvdW5kOiAnYmctcHJvZ0phdmFTY3JpcHQnLCBjb2xvcjogJ3RleHQtcHJvZ0JsYWNrJywgbmFtZTogJ0phdmFTY3JpcHQnIH0sXHJcbiAgc3Fsc2VydmVyOiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAnYmctcHJvZ0F6dXJlJyxcclxuICAgIGNvbG9yOiAndGV4dC1kZWZhdWx0TGFuZ3VhZ2UnLFxyXG4gICAgbmFtZTogJ1NRTCBTZXJ2ZXInLFxyXG4gIH0sXHJcbiAgdHlwZXNjcmlwdDoge1xyXG4gICAgYmFja2dyb3VuZDogJ2JnLXByb2dUeXBlU2NyaXB0JyxcclxuICAgIGNvbG9yOiAndGV4dC1kZWZhdWx0TGFuZ3VhZ2UnLFxyXG4gICAgbmFtZTogJ1R5cGVTY3JpcHQnLFxyXG4gIH0sXHJcbiAgdGFpbHdpbmRjc3M6IHtcclxuICAgIGJhY2tncm91bmQ6ICdiZy13aGl0ZScsXHJcbiAgICBjb2xvcjogJ3RleHQtcHJvZ1RhaWx3aW5kQ1NTJyxcclxuICAgIG91dGxpbmU6ICdib3JkZXItcHJvZ1RhaWx3aW5kQ1NTJyxcclxuICAgIG5hbWU6ICd0YWlsd2luZGNzcycsXHJcbiAgfSxcclxufTtcclxuY29uc3QgZGVmYXVsdExhbmd1YWdlID0ge1xyXG4gIGJhY2tncm91bmQ6ICdiZy1kZWZhdWx0TGFuZ3VhZ2UnLFxyXG4gIGNvbG9yOiAndGV4dC1kZWZhdWx0TGFuZ3VhZ2UnLFxyXG4gIG5hbWU6ICcnLFxyXG59O1xyXG5cclxuZXhwb3J0IHsgbGFuZ3VhZ2VzLCBkZWZhdWx0TGFuZ3VhZ2UgfTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGxhbmd1YWdlcztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==