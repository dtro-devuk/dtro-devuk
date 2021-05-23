(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[0],{

/***/ "./components/atoms/tickers/ProgramTagsTicker.js":
/*!*******************************************************!*\
  !*** ./components/atoms/tickers/ProgramTagsTicker.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_ticker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-ticker */ "./node_modules/react-ticker/dist/index.es.js");
/* harmony import */ var react_page_visibility__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-page-visibility */ "./node_modules/react-page-visibility/dist/es5/index.js");



var _jsxFileName = "D:\\WorkArea\\GitHub\\dtro-devuk-website-nextjs\\components\\atoms\\tickers\\ProgramTagsTicker.js",
    _this = undefined,
    _s = $RefreshSig$();



var ProgramTag = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(_c = function _c() {
  return __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ../tags/ProgramTag */ "./components/atoms/tags/ProgramTag.js"));
}, {
  loading: function loading() {
    return 'Loading...';
  },
  ssr: false,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ../tags/ProgramTag */ "./components/atoms/tags/ProgramTag.js")];
    },
    modules: ['../tags/ProgramTag']
  }
});
_c2 = ProgramTag;


var tags = [{
  title: 'azure',
  noArticles: ''
}, {
  title: 'csharp',
  noArticles: ''
}, {
  title: 'dotnetcore',
  noArticles: ''
}, {
  title: 'gatsby',
  noArticles: ''
}, {
  title: 'graphql',
  noArticles: ''
}, {
  title: 'netmvc',
  noArticles: ''
}, {
  title: 'nextjs',
  noArticles: ''
}, {
  title: 'node',
  noArticles: ''
}, {
  title: 'mdx',
  noArticles: ''
}, {
  title: 'reactjs',
  noArticles: ''
}, {
  title: 'storybook',
  noArticles: ''
}, {
  title: 'tailwindcss',
  noArticles: ''
}, {
  title: 'typescript',
  noArticles: ''
}];

var BuildTags = function BuildTags() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TagsContainer, {
    children: tags.map(function (c) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "flex flex-row items-center justify-between mx-10 pointer-events-none",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "mr-2",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ProgramTag, {
            text: c.title,
            size: "xs",
            hasHover: false
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "ml-auto text-base font-bold text-accent2",
          children: [" ", c.noArticles]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 11
        }, _this)]
      }, c.title, true, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 5
  }, _this);
};

_c3 = BuildTags;

var TagsContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "ProgramTagsTicker__TagsContainer",
  componentId: "dk1a5q-0"
})({
  "display": "flex",
  "flexDirection": "row",
  "alignItems": "center",
  "justifyContent": "space-between",
  "--tw-bg-opacity": "1",
  "backgroundColor": "rgba(255, 255, 255, var(--tw-bg-opacity))"
});

var ProgramTagsTicker = function ProgramTagsTicker() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(true),
      pageIsVisible = _useState[0],
      setPageIsVisible = _useState[1];

  var handleVisibilityChange = function handleVisibilityChange(isVisible) {
    setPageIsVisible(isVisible);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_page_visibility__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onChange: handleVisibilityChange,
    children: pageIsVisible && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "w-full",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_ticker__WEBPACK_IMPORTED_MODULE_4__["default"], {
        className: "relative",
        mode: "chain",
        speed: 5,
        move: true,
        children: function children() {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "flex flex-row items-center w-full justify-items-center",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(BuildTags, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 15
          }, _this);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 11
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 57,
    columnNumber: 5
  }, _this);
};

_s(ProgramTagsTicker, "sAdrbZJoJ7dsGIRRT1ffub57XjA=");

_c4 = ProgramTagsTicker;
/* harmony default export */ __webpack_exports__["default"] = (ProgramTagsTicker);

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "ProgramTag$dynamic");
$RefreshReg$(_c2, "ProgramTag");
$RefreshReg$(_c3, "BuildTags");
$RefreshReg$(_c4, "ProgramTagsTicker");

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

/***/ "./node_modules/react-page-visibility/dist/es5/PageVisibility.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-page-visibility/dist/es5/PageVisibility.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./node_modules/react-page-visibility/dist/es5/utils.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var PageVisibility = function (_React$Component) {
    _inherits(PageVisibility, _React$Component);

    function PageVisibility(props) {
        _classCallCheck(this, PageVisibility);

        var _this = _possibleConstructorReturn(this, (PageVisibility.__proto__ || Object.getPrototypeOf(PageVisibility)).call(this, props));

        _this.state = {
            isSupported: _utils__WEBPACK_IMPORTED_MODULE_2__["isSupported"] && _utils__WEBPACK_IMPORTED_MODULE_2__["visibility"]
        };
        return _this;
    }

    _createClass(PageVisibility, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (!this.state.isSupported) {
                return;
            }

            this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
            document.addEventListener(_utils__WEBPACK_IMPORTED_MODULE_2__["visibility"].event, this.handleVisibilityChange);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            if (!this.state.isSupported) {
                return;
            }
            document.removeEventListener(_utils__WEBPACK_IMPORTED_MODULE_2__["visibility"].event, this.handleVisibilityChange);
        }
    }, {
        key: 'handleVisibilityChange',
        value: function handleVisibilityChange() {
            if (typeof this.props.onChange === 'function') {
                var _props;

                // propagate change to callback
                (_props = this.props).onChange.apply(_props, _toConsumableArray(Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getHandlerArgs"])()));
            }
            if (typeof this.props.children === 'function') {
                // we pass the props directly to the function as children
                this.forceUpdate();
            }
        }
    }, {
        key: 'render',
        value: function render() {
            if (!this.props.children) {
                return null;
            }
            // function as children pattern support
            if (typeof this.props.children === 'function') {
                var _props2;

                if (!this.state.isSupported) {
                    // don't pass any arguments if PageVisibility is not supported
                    return this.props.children();
                }
                return (_props2 = this.props).children.apply(_props2, _toConsumableArray(Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getHandlerArgs"])()));
            }

            return react__WEBPACK_IMPORTED_MODULE_1___default.a.Children.only(this.props.children);
        }
    }]);

    return PageVisibility;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

PageVisibility.displayName = 'PageVisibility';

PageVisibility.propTypes = {
    onChange: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
    children: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.node, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func])
};

/* harmony default export */ __webpack_exports__["default"] = (PageVisibility);

/***/ }),

/***/ "./node_modules/react-page-visibility/dist/es5/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-page-visibility/dist/es5/index.js ***!
  \**************************************************************/
/*! exports provided: usePageVisibility, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PageVisibility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PageVisibility */ "./node_modules/react-page-visibility/dist/es5/PageVisibility.js");
/* harmony import */ var _usePageVisibility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./usePageVisibility */ "./node_modules/react-page-visibility/dist/es5/usePageVisibility.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usePageVisibility", function() { return _usePageVisibility__WEBPACK_IMPORTED_MODULE_1__["default"]; });




/* harmony default export */ __webpack_exports__["default"] = (_PageVisibility__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/react-page-visibility/dist/es5/usePageVisibility.js":
/*!**************************************************************************!*\
  !*** ./node_modules/react-page-visibility/dist/es5/usePageVisibility.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./node_modules/react-page-visibility/dist/es5/utils.js");
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();





var isSupportedLocal = _utils__WEBPACK_IMPORTED_MODULE_1__["isSupported"] && _utils__WEBPACK_IMPORTED_MODULE_1__["visibility"];

var usePageVisibility = function usePageVisibility() {
    var _getHandlerArgs = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getHandlerArgs"])(),
        _getHandlerArgs2 = _slicedToArray(_getHandlerArgs, 1),
        initiallyVisible = _getHandlerArgs2[0];

    var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initiallyVisible),
        _useState2 = _slicedToArray(_useState, 2),
        isVisible = _useState2[0],
        setIsVisible = _useState2[1];

    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        if (isSupportedLocal) {
            var handler = function handler() {
                var _getHandlerArgs3 = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getHandlerArgs"])(),
                    _getHandlerArgs4 = _slicedToArray(_getHandlerArgs3, 1),
                    currentlyVisible = _getHandlerArgs4[0];

                setIsVisible(currentlyVisible);
            };

            document.addEventListener(_utils__WEBPACK_IMPORTED_MODULE_1__["visibility"].event, handler);

            return function () {
                document.removeEventListener(_utils__WEBPACK_IMPORTED_MODULE_1__["visibility"].event, handler);
            };
        }
    }, []);

    return isVisible;
};

/* harmony default export */ __webpack_exports__["default"] = (usePageVisibility);

/***/ }),

/***/ "./node_modules/react-page-visibility/dist/es5/utils.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-page-visibility/dist/es5/utils.js ***!
  \**************************************************************/
/*! exports provided: isSupported, visibility, getHandlerArgs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSupported", function() { return isSupported; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "visibility", function() { return visibility; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHandlerArgs", function() { return getHandlerArgs; });
var hasDocument = typeof document !== 'undefined';
var vendorEvents = [{
    hidden: 'hidden',
    event: 'visibilitychange',
    state: 'visibilityState'
}, {
    hidden: 'webkitHidden',
    event: 'webkitvisibilitychange',
    state: 'webkitVisibilityState'
}, {
    hidden: 'mozHidden',
    event: 'mozvisibilitychange',
    state: 'mozVisibilityState'
}, {
    hidden: 'msHidden',
    event: 'msvisibilitychange',
    state: 'msVisibilityState'
}, {
    hidden: 'oHidden',
    event: 'ovisibilitychange',
    state: 'oVisibilityState'
}];

var isSupported = hasDocument && Boolean(document.addEventListener);

var visibility = function () {
    if (!isSupported) {
        return null;
    }
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = vendorEvents[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var event = _step.value;

            if (event.hidden in document) {
                return event;
            }
        }
        // otherwise it's not supported
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    return null;
}();

var getHandlerArgs = function getHandlerArgs() {
    if (!visibility) {
        return [true, 'visible'];
    }
    var hidden = visibility.hidden,
        state = visibility.state;

    return [!document[hidden], document[state]];
};

/***/ }),

/***/ "./node_modules/react-ticker/dist/index.es.js":
/*!****************************************************!*\
  !*** ./node_modules/react-ticker/dist/index.es.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



var debounce = function debounce(fn, time) {
  var timeout = void 0;

  return function () {
    var _this = this,
        _arguments = arguments;

    var functionCall = function functionCall() {
      return fn.apply(_this, _arguments);
    };

    clearTimeout(timeout);
    timeout = setTimeout(functionCall, time);
  };
};

// https://stackoverflow.com/questions/6860853/generate-random-string-for-div-id#6860916

var guidGenerator = (function () {
  var S4 = function S4() {
    return ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
  };
  return S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4();
});

function getHighest(elements) {
  var highest = 0;
  elements.forEach(function (el) {
    if (el.rect.height > highest) {
      highest = el.rect.height;
    }
  });
  return highest;
}

function nextTriggerOnMount(_ref) {
  var rect = _ref.rect,
      mode = _ref.mode,
      prevOffset = _ref.prevOffset,
      position = _ref.position,
      direction = _ref.direction,
      width = _ref.width;

  if (mode !== 'chain') return false;
  switch (direction) {
    case 'toRight':
      return position.from > 0;
    case 'toLeft':
    default:
      return rect.width + position.from <= width;
  }
}

function getFromOffset(_ref) {
  var rect = _ref.rect,
      offset = _ref.offset,
      direction = _ref.direction;

  switch (direction) {
    case 'toRight':
      return offset - rect.width;
    case 'toLeft':
    default:
      return offset;
  }
}

function getFrom(_ref2) {
  var index = _ref2.index,
      rect = _ref2.rect,
      offset = _ref2.offset,
      width = _ref2.width,
      direction = _ref2.direction;

  if (index === 0) return offset;

  if (typeof offset === 'number') {
    return getFromOffset({ rect: rect, offset: offset, direction: direction });
  }

  switch (direction) {
    case 'toRight':
      return -rect.width;
    case 'toLeft':
    default:
      return width;
  }
}

function getTo(_ref3) {
  var rect = _ref3.rect,
      width = _ref3.width,
      direction = _ref3.direction;

  switch (direction) {
    case 'toRight':
      return width;
    case 'toLeft':
    default:
      return -rect.width;
  }
}

function getNext(_ref4) {
  var mode = _ref4.mode,
      from = _ref4.from,
      direction = _ref4.direction,
      rect = _ref4.rect,
      width = _ref4.width;

  var start = from || 0;

  switch (mode) {
    case 'await':
      switch (direction) {
        case 'toRight':
          return width;
        case 'toLeft':
        default:
          return -rect.width;
      }
    case 'smooth':
      switch (direction) {
        case 'toRight':
          return rect.width > width ? 0 : width - rect.width;
        case 'toLeft':
        default:
          return rect.width > width ? width - rect.width : 0;
      }
    case 'chain':
    default:
      switch (direction) {
        case 'toRight':
          return 0;
        case 'toLeft':
        default:
          return rect.width + start > width ? width - rect.width : width - rect.left - rect.width;
      }
  }
}

var getPosition = (function (_ref5) {
  var mode = _ref5.mode,
      index = _ref5.index,
      rect = _ref5.rect,
      offset = _ref5.offset,
      width = _ref5.width,
      direction = _ref5.direction;

  var from = getFrom({ index: index, rect: rect, offset: offset, width: width, direction: direction });
  var to = getTo({ rect: rect, width: width, direction: direction });
  return {
    from: from,
    to: to,
    next: getNext({ mode: mode, from: from, direction: direction, rect: rect, width: width })
  };
});

function getNextOffset(_ref) {
  var from = _ref.from,
      rect = _ref.rect,
      direction = _ref.direction;

  switch (direction) {
    case 'toRight':
      {
        return from;
      }
    case 'toLeft':
    default:
      {
        return from + rect.width;
      }
  }
}

function getStartOffset(_ref) {
  var offset = _ref.offset,
      rect = _ref.rect,
      direction = _ref.direction,
      width = _ref.width;

  if (offset === 'run-in') {
    switch (direction) {
      case 'toRight':
        return -rect.width;
      case 'toLeft':
      default:
        return width;
    }
  }
  if (typeof offset === 'string') {
    var offsetRelative = Number(offset.replace('%', ''));
    if (offsetRelative) return width / 100 * offsetRelative;
  }
  return offset;
}

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

var TickerElement = function (_React$Component) {
  inherits(TickerElement, _React$Component);

  function TickerElement() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, TickerElement);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = TickerElement.__proto__ || Object.getPrototypeOf(TickerElement)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      children: _this.props.children({
        index: _this.props.index
      }),
      move: _this.props.move,
      position: { from: undefined, to: undefined, next: undefined },
      offset: _this.props.offset,
      rect: null
    }, _this.x = 0, _this.isMoving = false, _this.nextTriggered = false, _this.elementRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef(), _this.componentDidMount = function () {
      _this.setPosition(true);
      _this.observer = new MutationObserver(_this.onMutation);
      _this.observer.observe(_this.elementRef.current, { characterData: true, childList: true, subtree: true });
    }, _this.componentWillUnmount = function () {
      _this.observer.disconnect();
    }, _this.onMutation = function () {
      _this.setPosition();
    }, _this.componentDidUpdate = function (prevProps, prevState) {
      if (!_this.x && prevState.position.from !== _this.state.position.from) {
        _this.x = _this.state.position.from;
        _this.elementRef.current.style.transform = 'translate3d(' + _this.x + 'px, 0, 0)';
      }
      if (_this.x !== _this.state.position.from && prevProps.prevRect && _this.props.prevRect && prevProps.prevRect.width !== _this.props.prevRect.width) {
        if (_this.props.offset) {
          _this.x = _this.x + (_this.props.offset - prevProps.offset);
        } else {
          _this.x = _this.x + (_this.props.prevRect.width - prevProps.prevRect.width);
        }
        _this.elementRef.current.style.transform = 'translate3d(' + _this.x + 'px, 0, 0)';
      }
      if (_this.props.move && !prevProps.start && _this.props.start) {
        _this.animate();
      }
      if (_this.props.start && !prevProps.move && _this.props.move) {
        _this.animate();
      }
      if (prevProps.move && !_this.props.move) {
        _this.isMoving = false;
      }
    }, _this.setPosition = function (isMount) {
      var _this$props = _this.props,
          mode = _this$props.mode,
          width = _this$props.width,
          id = _this$props.id,
          onNext = _this$props.onNext,
          direction = _this$props.direction,
          index = _this$props.index,
          setRect = _this$props.setRect;


      var rect = _this.elementRef.current.getBoundingClientRect();
      if (rect.width === 0) return;

      var offset = _this.props.index === 0 ? getStartOffset({ offset: _this.props.offset, rect: rect, direction: direction, width: width }) : _this.props.offset;

      var position = getPosition({ mode: mode, rect: rect, index: index, offset: offset, width: width, direction: direction });

      setRect({
        index: _this.props.index,
        rect: rect,
        offset: offset,
        nextOffset: getNextOffset({ from: position.from, rect: rect, direction: direction })
      });

      if (isMount) {
        var nextTriggerOnMount$$1 = nextTriggerOnMount({ mode: mode, rect: rect, position: position, offset: offset, direction: direction, width: width });
        if (nextTriggerOnMount$$1) {
          onNext({
            id: id,
            index: index,
            rect: rect,
            nextOffset: getNextOffset({ from: position.from, rect: rect, direction: direction })
          });
        }
        if (!nextTriggerOnMount$$1 && (offset || index === 0)) {
          onNext({ id: id, index: index, rect: rect });
        }
        _this.nextTriggered = nextTriggerOnMount$$1;
      }

      _this.setState({
        rect: rect,
        offset: offset,
        position: position
      });
    }, _this.shouldTriggerNext = function () {
      if (_this.nextTriggered) return false;
      return _this.props.direction === 'toLeft' ? _this.x <= _this.state.position.next : _this.x >= _this.state.position.next;
    }, _this.triggerNext = function () {
      if (_this.shouldTriggerNext()) {
        // if (this.props.index === 5) console.log(this.x)
        _this.nextTriggered = true;
        _this.props.onNext({
          id: _this.props.id,
          index: _this.props.index,
          rect: _this.state.rect
        });
      }
    }, _this.shouldFinish = function () {
      switch (_this.props.direction) {
        case 'toRight':
          return _this.x >= _this.state.position.to;
        case 'toLeft':
        default:
          return _this.x <= _this.state.position.to;
      }
    }, _this.animate = function () {
      if (_this.isMoving) return;
      _this.isMoving = true;

      var prevTimestamp = null;

      var step = function step(timestamp) {
        if (!_this.isMoving) return;
        if (!_this.elementRef.current) return;

        var progress = prevTimestamp ? timestamp - prevTimestamp : 0;

        _this.x = _this.props.direction === 'toLeft' ? _this.x - progress / 100 * _this.props.speed : _this.x + progress / 100 * _this.props.speed;
        _this.elementRef.current.style.transform = 'translate3d(' + _this.x + 'px, 0, 0)';
        _this.triggerNext();

        if (_this.shouldFinish()) {
          _this.isMoving = false;
          prevTimestamp = null;
          _this.props.onFinish(_this.props.id);
        } else {
          prevTimestamp = timestamp;
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }, _this.render = function () {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'div',
        {
          className: 'ticker__element',
          style: {
            willChange: 'transform',
            position: 'absolute',
            left: 0,
            top: 0,
            transform: 'translate3d(' + _this.x + 'px, 0, 0)'
          },
          ref: _this.elementRef
        },
        _this.state.children
      );
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  return TickerElement;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

TickerElement.propTypes = {
  children: Object(prop_types__WEBPACK_IMPORTED_MODULE_1__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_1__["node"], prop_types__WEBPACK_IMPORTED_MODULE_1__["func"]]).isRequired,
  direction: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"].isRequired,
  speed: prop_types__WEBPACK_IMPORTED_MODULE_1__["number"].isRequired,
  id: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"].isRequired,
  index: prop_types__WEBPACK_IMPORTED_MODULE_1__["number"].isRequired,
  mode: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"].isRequired,
  move: prop_types__WEBPACK_IMPORTED_MODULE_1__["bool"].isRequired,
  onNext: prop_types__WEBPACK_IMPORTED_MODULE_1__["func"].isRequired,
  onFinish: prop_types__WEBPACK_IMPORTED_MODULE_1__["func"].isRequired,
  setRect: prop_types__WEBPACK_IMPORTED_MODULE_1__["func"].isRequired,
  start: prop_types__WEBPACK_IMPORTED_MODULE_1__["bool"].isRequired,

  offset: Object(prop_types__WEBPACK_IMPORTED_MODULE_1__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_1__["number"], prop_types__WEBPACK_IMPORTED_MODULE_1__["string"]]),
  prevRect: prop_types__WEBPACK_IMPORTED_MODULE_1__["object"],
  width: prop_types__WEBPACK_IMPORTED_MODULE_1__["number"]
};
TickerElement.defaultProps = {
  offset: undefined,
  width: undefined,
  prevRect: null
};

var getDefaultState = function getDefaultState(offset, width) {
  return {
    elements: [{
      id: guidGenerator(),
      index: 0,
      height: 0,
      start: false,
      offset: offset,
      rect: null,
      prevRect: null
    }],
    width: width,
    height: 0
  };
};

var Ticker = function (_React$Component) {
  inherits(Ticker, _React$Component);

  function Ticker() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, Ticker);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Ticker.__proto__ || Object.getPrototypeOf(Ticker)).call.apply(_ref, [this].concat(args))), _this), _this.next = null, _this.state = getDefaultState(_this.props.offset), _this.tickerRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef(), _this.dOnResize = debounce(function () {
      return _this.onResize();
    }, 150), _this.componentDidMount = function () {
      _this.setState({
        width: _this.tickerRef.current.offsetWidth,
        height: _this.props.height
      });
      window.addEventListener('resize', _this.dOnResize);
    }, _this.componentWillUnmount = function () {
      window.removeEventListener('resize', _this.dOnResize);
    }, _this.setRect = function (_ref2) {
      var index = _ref2.index,
          rect = _ref2.rect,
          offset = _ref2.offset,
          nextOffset = _ref2.nextOffset;

      _this.setState(function (prevState) {
        var elements = prevState.elements.map(function (el) {
          var newEl = el;
          if (el.index === index) newEl.rect = rect;
          // next element
          if (el.index === index + 1) {
            newEl.prevRect = rect;
            if (newEl.offset) {
              newEl.offset = nextOffset;
            }
          }
          return newEl;
        });
        return {
          elements: elements,
          height: _this.props.height ? prevState.height : getHighest(elements)
        };
      });
    }, _this.onResize = function () {
      if (!_this.tickerRef.current || _this.tickerRef.current.offsetWidth === _this.state.width) return;
      _this.setState(_extends({}, getDefaultState(_this.props.offset, _this.tickerRef.current.offsetWidth), {
        height: _this.props.height
      }));
    }, _this.onFinish = function (id) {
      _this.setState(function (prevState) {
        return {
          elements: prevState.elements.filter(function (el) {
            return el.id !== id;
          })
        };
      });
    }, _this.onNext = function (_ref3) {
      var id = _ref3.id,
          index = _ref3.index,
          rect = _ref3.rect,
          nextOffset = _ref3.nextOffset;

      _this.setState(function (prevState) {
        return {
          elements: [].concat(toConsumableArray(prevState.elements.map(function (el) {
            var newEl = el;
            if (el.index === index) newEl.rect = rect;
            if (el.index === 0 || el.offset || newEl.index === index + 1) {
              newEl.start = true;
            }
            return newEl;
            // create new element
          })), [{
            id: guidGenerator(),
            index: prevState.elements[prevState.elements.length - 1].index + 1,
            height: 0,
            start: false,
            offset: nextOffset,
            rect: null,
            prevRect: rect
          }])
        };
      });
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(Ticker, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'div',
        {
          className: 'ticker',
          ref: this.tickerRef,
          style: {
            position: 'relative',
            overflow: 'hidden',
            height: this.state.height && this.state.height + 'px'
          }
        },
        this.state.width && this.state.elements.map(function (el) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            TickerElement,
            {
              key: el.id,
              id: el.id,
              index: el.index,
              start: el.start,
              offset: el.offset,
              prevRect: el.prevRect,

              direction: _this2.props.direction,
              mode: _this2.props.mode,
              move: _this2.props.move,
              speed: _this2.props.speed,

              onFinish: _this2.onFinish,
              onNext: _this2.onNext,
              setRect: _this2.setRect,
              width: _this2.state.width
            },
            _this2.props.children
          );
        })
      );
    }
  }]);
  return Ticker;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

Ticker.propTypes = {
  children: Object(prop_types__WEBPACK_IMPORTED_MODULE_1__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_1__["node"], prop_types__WEBPACK_IMPORTED_MODULE_1__["func"]]).isRequired,

  direction: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"],
  mode: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"],
  move: prop_types__WEBPACK_IMPORTED_MODULE_1__["bool"],
  offset: Object(prop_types__WEBPACK_IMPORTED_MODULE_1__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_1__["number"], prop_types__WEBPACK_IMPORTED_MODULE_1__["string"]]),
  speed: prop_types__WEBPACK_IMPORTED_MODULE_1__["number"],
  height: Object(prop_types__WEBPACK_IMPORTED_MODULE_1__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_1__["number"], prop_types__WEBPACK_IMPORTED_MODULE_1__["string"]])
};
Ticker.defaultProps = {
  offset: 0,
  speed: 5,
  direction: 'toLeft',
  mode: 'chain',
  move: true,
  height: undefined
};

/* harmony default export */ __webpack_exports__["default"] = (Ticker);
//# sourceMappingURL=index.es.js.map


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hdG9tcy90aWNrZXJzL1Byb2dyYW1UYWdzVGlja2VyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtcGFnZS12aXNpYmlsaXR5L2Rpc3QvZXM1L1BhZ2VWaXNpYmlsaXR5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtcGFnZS12aXNpYmlsaXR5L2Rpc3QvZXM1L2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtcGFnZS12aXNpYmlsaXR5L2Rpc3QvZXM1L3VzZVBhZ2VWaXNpYmlsaXR5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtcGFnZS12aXNpYmlsaXR5L2Rpc3QvZXM1L3V0aWxzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtdGlja2VyL2Rpc3QvaW5kZXguZXMuanMiXSwibmFtZXMiOlsiUHJvZ3JhbVRhZyIsImR5bmFtaWMiLCJsb2FkaW5nIiwic3NyIiwidGFncyIsInRpdGxlIiwibm9BcnRpY2xlcyIsIkJ1aWxkVGFncyIsIm1hcCIsImMiLCJUYWdzQ29udGFpbmVyIiwidHciLCJkaXYiLCJQcm9ncmFtVGFnc1RpY2tlciIsInVzZVN0YXRlIiwicGFnZUlzVmlzaWJsZSIsInNldFBhZ2VJc1Zpc2libGUiLCJoYW5kbGVWaXNpYmlsaXR5Q2hhbmdlIiwiaXNWaXNpYmxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUdBO0FBQ0EsSUFBTUEsVUFBVSxHQUFHQyxtREFBTyxNQUFDO0FBQUEsU0FBTSxnSkFBTjtBQUFBLENBQUQsRUFBcUM7QUFDN0RDLFNBQU8sRUFBRTtBQUFBLFdBQU0sWUFBTjtBQUFBLEdBRG9EO0FBRTdEQyxLQUFHLEVBQUUsS0FGd0Q7QUFBQTtBQUFBO0FBQUEsa0NBQXZCLGlFQUF1QjtB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QSxzQ0FBc0MsaURBQVU7O0FBRWhEO0FBQ0EsNkNBQTZDLGlEQUFVO0FBQ3ZEO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRWUsZ0ZBQWlCLEU7Ozs7Ozs7Ozs7OztBQ3ZDaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRU07O0FBRUE7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvRUFBb0UsZ0VBQWdFO0FBQ3BJOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFTTtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFOzs7Ozs7Ozs7Ozs7QUNwRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEwQjtBQUN1RDs7QUFFakY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLDBC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LGdDQUFnQztBQUNoQztBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhLDRDQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLGlCQUFpQiw0Q0FBSztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLENBQUMsQ0FBQyw0Q0FBSzs7QUFFUDtBQUNBLFlBQVksNERBQVMsRUFBRSwrQ0FBSSxFQUFFLCtDQUFJOztBQUVqQyxhQUFhLGlEQUFNO0FBQ25CLFFBQVEsaURBQU07QUFDZCxRQUFRLCtDQUFJO0FBQ1osVUFBVSw0REFBUyxFQUFFLGlEQUFNLEVBQUUsaURBQU07QUFDbkMsU0FBUyxpREFBTTtBQUNmLFVBQVUsNERBQVMsRUFBRSxpREFBTSxFQUFFLGlEQUFNO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSxxRUFBTSxFQUFDO0FBQ3RCIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHR3IGZyb20gJ3R3aW4ubWFjcm8nO1xyXG5cclxuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJztcclxuY29uc3QgUHJvZ3JhbVRhZyA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KCcuLi90YWdzL1Byb2dyYW1UYWcnKSwge1xyXG4gIGxvYWRpbmc6ICgpID0+ICdMb2FkaW5nLi4uJyxcclxuICBzc3I6IGZhbHNlLFxyXG59KTtcclxuXHJcbmltcG9ydCBUaWNrZXIgZnJvbSAncmVhY3QtdGlja2VyJztcclxuaW1wb3J0IFBhZ2VWaXNpYmlsaXR5IGZyb20gJ3JlYWN0LXBhZ2UtdmlzaWJpbGl0eSc7XHJcblxyXG5jb25zdCB0YWdzID0gW1xyXG4gIHsgdGl0bGU6ICdhenVyZScsIG5vQXJ0aWNsZXM6ICcnIH0sXHJcbiAgeyB0aXRsZTogJ2NzaGFycCcsIG5vQXJ0aWNsZXM6ICcnIH0sXHJcbiAgeyB0aXRsZTogJ2RvdG5ldGNvcmUnLCBub0FydGljbGVzOiAnJyB9LFxyXG4gIHsgdGl0bGU6ICdnYXRzYnknLCBub0FydGljbGVzOiAnJyB9LFxyXG4gIHsgdGl0bGU6ICdncmFwaHFsJywgbm9BcnRpY2xlczogJycgfSxcclxuICB7IHRpdGxlOiAnbmV0bXZjJywgbm9BcnRpY2xlczogJycgfSxcclxuICB7IHRpdGxlOiAnbmV4dGpzJywgbm9BcnRpY2xlczogJycgfSxcclxuICB7IHRpdGxlOiAnbm9kZScsIG5vQXJ0aWNsZXM6ICcnIH0sXHJcbiAgeyB0aXRsZTogJ21keCcsIG5vQXJ0aWNsZXM6ICcnIH0sXHJcbiAgeyB0aXRsZTogJ3JlYWN0anMnLCBub0FydGljbGVzOiAnJyB9LFxyXG4gIHsgdGl0bGU6ICdzdG9yeWJvb2snLCBub0FydGljbGVzOiAnJyB9LFxyXG4gIHsgdGl0bGU6ICd0YWlsd2luZGNzcycsIG5vQXJ0aWNsZXM6ICcnIH0sXHJcbiAgeyB0aXRsZTogJ3R5cGVzY3JpcHQnLCBub0FydGljbGVzOiAnJyB9LFxyXG5dO1xyXG5cclxuY29uc3QgQnVpbGRUYWdzID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8VGFnc0NvbnRhaW5lcj5cclxuICAgICAge3RhZ3MubWFwKChjKSA9PiAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIG14LTEwIHBvaW50ZXItZXZlbnRzLW5vbmVcIlxyXG4gICAgICAgICAga2V5PXtjLnRpdGxlfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1yLTJcIj5cclxuICAgICAgICAgICAgPFByb2dyYW1UYWcgdGV4dD17Yy50aXRsZX0gc2l6ZT1cInhzXCIgaGFzSG92ZXI9e2ZhbHNlfSAvPlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWwtYXV0byB0ZXh0LWJhc2UgZm9udC1ib2xkIHRleHQtYWNjZW50MlwiPiB7Yy5ub0FydGljbGVzfTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSl9XHJcbiAgICA8L1RhZ3NDb250YWluZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IFRhZ3NDb250YWluZXIgPSB0dy5kaXZgZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGJnLXdoaXRlYDtcclxuXHJcbmNvbnN0IFByb2dyYW1UYWdzVGlja2VyID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtwYWdlSXNWaXNpYmxlLCBzZXRQYWdlSXNWaXNpYmxlXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICBjb25zdCBoYW5kbGVWaXNpYmlsaXR5Q2hhbmdlID0gKGlzVmlzaWJsZSkgPT4ge1xyXG4gICAgc2V0UGFnZUlzVmlzaWJsZShpc1Zpc2libGUpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UGFnZVZpc2liaWxpdHkgb25DaGFuZ2U9e2hhbmRsZVZpc2liaWxpdHlDaGFuZ2V9PlxyXG4gICAgICB7cGFnZUlzVmlzaWJsZSAmJiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGxcIj5cclxuICAgICAgICAgIDxUaWNrZXIgY2xhc3NOYW1lPVwicmVsYXRpdmVcIiBtb2RlPVwiY2hhaW5cIiBzcGVlZD17NX0gbW92ZT17dHJ1ZX0+XHJcbiAgICAgICAgICAgIHsoKSA9PiAoXHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXIgdy1mdWxsIGp1c3RpZnktaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICB7LyogPHNwYW4gY2xhc3NOYW1lPVwidy0yMCBtdC0xMCBtbC0xMCBtci04IHRleHQteHMgdGV4dC1hY2NlbnQyIG1kOnRleHQtbGcgZmxleC1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgQmxvZyBUb3BpY3NcclxuICAgICAgICAgICAgICAgIDwvc3Bhbj4gKi99XHJcbiAgICAgICAgICAgICAgICA8QnVpbGRUYWdzIC8+XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9UaWNrZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICA8L1BhZ2VWaXNpYmlsaXR5PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9ncmFtVGFnc1RpY2tlcjtcclxuIiwidmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gQXJyYXkoYXJyLmxlbmd0aCk7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfSBlbHNlIHsgcmV0dXJuIEFycmF5LmZyb20oYXJyKTsgfSB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IGdldEhhbmRsZXJBcmdzLCBpc1N1cHBvcnRlZCwgdmlzaWJpbGl0eSB9IGZyb20gJy4vdXRpbHMnO1xuXG52YXIgUGFnZVZpc2liaWxpdHkgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICAgIF9pbmhlcml0cyhQYWdlVmlzaWJpbGl0eSwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgICBmdW5jdGlvbiBQYWdlVmlzaWJpbGl0eShwcm9wcykge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUGFnZVZpc2liaWxpdHkpO1xuXG4gICAgICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChQYWdlVmlzaWJpbGl0eS5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFBhZ2VWaXNpYmlsaXR5KSkuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgaXNTdXBwb3J0ZWQ6IGlzU3VwcG9ydGVkICYmIHZpc2liaWxpdHlcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhQYWdlVmlzaWJpbGl0eSwgW3tcbiAgICAgICAga2V5OiAnY29tcG9uZW50RGlkTW91bnQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuc3RhdGUuaXNTdXBwb3J0ZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuaGFuZGxlVmlzaWJpbGl0eUNoYW5nZSA9IHRoaXMuaGFuZGxlVmlzaWJpbGl0eUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih2aXNpYmlsaXR5LmV2ZW50LCB0aGlzLmhhbmRsZVZpc2liaWxpdHlDaGFuZ2UpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdjb21wb25lbnRXaWxsVW5tb3VudCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5zdGF0ZS5pc1N1cHBvcnRlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodmlzaWJpbGl0eS5ldmVudCwgdGhpcy5oYW5kbGVWaXNpYmlsaXR5Q2hhbmdlKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnaGFuZGxlVmlzaWJpbGl0eUNoYW5nZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVWaXNpYmlsaXR5Q2hhbmdlKCkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnByb3BzLm9uQ2hhbmdlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgdmFyIF9wcm9wcztcblxuICAgICAgICAgICAgICAgIC8vIHByb3BhZ2F0ZSBjaGFuZ2UgdG8gY2FsbGJhY2tcbiAgICAgICAgICAgICAgICAoX3Byb3BzID0gdGhpcy5wcm9wcykub25DaGFuZ2UuYXBwbHkoX3Byb3BzLCBfdG9Db25zdW1hYmxlQXJyYXkoZ2V0SGFuZGxlckFyZ3MoKSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnByb3BzLmNoaWxkcmVuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgLy8gd2UgcGFzcyB0aGUgcHJvcHMgZGlyZWN0bHkgdG8gdGhlIGZ1bmN0aW9uIGFzIGNoaWxkcmVuXG4gICAgICAgICAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyZW5kZXInLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnByb3BzLmNoaWxkcmVuKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBmdW5jdGlvbiBhcyBjaGlsZHJlbiBwYXR0ZXJuIHN1cHBvcnRcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5wcm9wcy5jaGlsZHJlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIHZhciBfcHJvcHMyO1xuXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnN0YXRlLmlzU3VwcG9ydGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGRvbid0IHBhc3MgYW55IGFyZ3VtZW50cyBpZiBQYWdlVmlzaWJpbGl0eSBpcyBub3Qgc3VwcG9ydGVkXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnByb3BzLmNoaWxkcmVuKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiAoX3Byb3BzMiA9IHRoaXMucHJvcHMpLmNoaWxkcmVuLmFwcGx5KF9wcm9wczIsIF90b0NvbnN1bWFibGVBcnJheShnZXRIYW5kbGVyQXJncygpKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBSZWFjdC5DaGlsZHJlbi5vbmx5KHRoaXMucHJvcHMuY2hpbGRyZW4pO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIFBhZ2VWaXNpYmlsaXR5O1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5QYWdlVmlzaWJpbGl0eS5kaXNwbGF5TmFtZSA9ICdQYWdlVmlzaWJpbGl0eSc7XG5cblBhZ2VWaXNpYmlsaXR5LnByb3BUeXBlcyA9IHtcbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5ub2RlLCBQcm9wVHlwZXMuZnVuY10pXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQYWdlVmlzaWJpbGl0eTsiLCJpbXBvcnQgUGFnZVZpc2liaWxpdHkgZnJvbSAnLi9QYWdlVmlzaWJpbGl0eSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHVzZVBhZ2VWaXNpYmlsaXR5IH0gZnJvbSAnLi91c2VQYWdlVmlzaWJpbGl0eSc7XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2VWaXNpYmlsaXR5OyIsInZhciBfc2xpY2VkVG9BcnJheSA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gc2xpY2VJdGVyYXRvcihhcnIsIGkpIHsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfZSA9IHVuZGVmaW5lZDsgdHJ5IHsgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0pIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfSByZXR1cm4gZnVuY3Rpb24gKGFyciwgaSkgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7IHJldHVybiBhcnI7IH0gZWxzZSBpZiAoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSB7IHJldHVybiBzbGljZUl0ZXJhdG9yKGFyciwgaSk7IH0gZWxzZSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlXCIpOyB9IH07IH0oKTtcblxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgZ2V0SGFuZGxlckFyZ3MsIGlzU3VwcG9ydGVkLCB2aXNpYmlsaXR5IH0gZnJvbSAnLi91dGlscyc7XG5cbnZhciBpc1N1cHBvcnRlZExvY2FsID0gaXNTdXBwb3J0ZWQgJiYgdmlzaWJpbGl0eTtcblxudmFyIHVzZVBhZ2VWaXNpYmlsaXR5ID0gZnVuY3Rpb24gdXNlUGFnZVZpc2liaWxpdHkoKSB7XG4gICAgdmFyIF9nZXRIYW5kbGVyQXJncyA9IGdldEhhbmRsZXJBcmdzKCksXG4gICAgICAgIF9nZXRIYW5kbGVyQXJnczIgPSBfc2xpY2VkVG9BcnJheShfZ2V0SGFuZGxlckFyZ3MsIDEpLFxuICAgICAgICBpbml0aWFsbHlWaXNpYmxlID0gX2dldEhhbmRsZXJBcmdzMlswXTtcblxuICAgIHZhciBfdXNlU3RhdGUgPSB1c2VTdGF0ZShpbml0aWFsbHlWaXNpYmxlKSxcbiAgICAgICAgX3VzZVN0YXRlMiA9IF9zbGljZWRUb0FycmF5KF91c2VTdGF0ZSwgMiksXG4gICAgICAgIGlzVmlzaWJsZSA9IF91c2VTdGF0ZTJbMF0sXG4gICAgICAgIHNldElzVmlzaWJsZSA9IF91c2VTdGF0ZTJbMV07XG5cbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoaXNTdXBwb3J0ZWRMb2NhbCkge1xuICAgICAgICAgICAgdmFyIGhhbmRsZXIgPSBmdW5jdGlvbiBoYW5kbGVyKCkge1xuICAgICAgICAgICAgICAgIHZhciBfZ2V0SGFuZGxlckFyZ3MzID0gZ2V0SGFuZGxlckFyZ3MoKSxcbiAgICAgICAgICAgICAgICAgICAgX2dldEhhbmRsZXJBcmdzNCA9IF9zbGljZWRUb0FycmF5KF9nZXRIYW5kbGVyQXJnczMsIDEpLFxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50bHlWaXNpYmxlID0gX2dldEhhbmRsZXJBcmdzNFswXTtcblxuICAgICAgICAgICAgICAgIHNldElzVmlzaWJsZShjdXJyZW50bHlWaXNpYmxlKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIodmlzaWJpbGl0eS5ldmVudCwgaGFuZGxlcik7XG5cbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih2aXNpYmlsaXR5LmV2ZW50LCBoYW5kbGVyKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gaXNWaXNpYmxlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlUGFnZVZpc2liaWxpdHk7IiwidmFyIGhhc0RvY3VtZW50ID0gdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJztcbnZhciB2ZW5kb3JFdmVudHMgPSBbe1xuICAgIGhpZGRlbjogJ2hpZGRlbicsXG4gICAgZXZlbnQ6ICd2aXNpYmlsaXR5Y2hhbmdlJyxcbiAgICBzdGF0ZTogJ3Zpc2liaWxpdHlTdGF0ZSdcbn0sIHtcbiAgICBoaWRkZW46ICd3ZWJraXRIaWRkZW4nLFxuICAgIGV2ZW50OiAnd2Via2l0dmlzaWJpbGl0eWNoYW5nZScsXG4gICAgc3RhdGU6ICd3ZWJraXRWaXNpYmlsaXR5U3RhdGUnXG59LCB7XG4gICAgaGlkZGVuOiAnbW96SGlkZGVuJyxcbiAgICBldmVudDogJ21venZpc2liaWxpdHljaGFuZ2UnLFxuICAgIHN0YXRlOiAnbW96VmlzaWJpbGl0eVN0YXRlJ1xufSwge1xuICAgIGhpZGRlbjogJ21zSGlkZGVuJyxcbiAgICBldmVudDogJ21zdmlzaWJpbGl0eWNoYW5nZScsXG4gICAgc3RhdGU6ICdtc1Zpc2liaWxpdHlTdGF0ZSdcbn0sIHtcbiAgICBoaWRkZW46ICdvSGlkZGVuJyxcbiAgICBldmVudDogJ292aXNpYmlsaXR5Y2hhbmdlJyxcbiAgICBzdGF0ZTogJ29WaXNpYmlsaXR5U3RhdGUnXG59XTtcblxuZXhwb3J0IHZhciBpc1N1cHBvcnRlZCA9IGhhc0RvY3VtZW50ICYmIEJvb2xlYW4oZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcik7XG5cbmV4cG9ydCB2YXIgdmlzaWJpbGl0eSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIWlzU3VwcG9ydGVkKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWU7XG4gICAgdmFyIF9kaWRJdGVyYXRvckVycm9yID0gZmFsc2U7XG4gICAgdmFyIF9pdGVyYXRvckVycm9yID0gdW5kZWZpbmVkO1xuXG4gICAgdHJ5IHtcbiAgICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yID0gdmVuZG9yRXZlbnRzW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3N0ZXA7ICEoX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IChfc3RlcCA9IF9pdGVyYXRvci5uZXh0KCkpLmRvbmUpOyBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZSkge1xuICAgICAgICAgICAgdmFyIGV2ZW50ID0gX3N0ZXAudmFsdWU7XG5cbiAgICAgICAgICAgIGlmIChldmVudC5oaWRkZW4gaW4gZG9jdW1lbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXZlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gb3RoZXJ3aXNlIGl0J3Mgbm90IHN1cHBvcnRlZFxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBfZGlkSXRlcmF0b3JFcnJvciA9IHRydWU7XG4gICAgICAgIF9pdGVyYXRvckVycm9yID0gZXJyO1xuICAgIH0gZmluYWxseSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gJiYgX2l0ZXJhdG9yLnJldHVybikge1xuICAgICAgICAgICAgICAgIF9pdGVyYXRvci5yZXR1cm4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIGlmIChfZGlkSXRlcmF0b3JFcnJvcikge1xuICAgICAgICAgICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG59KCk7XG5cbmV4cG9ydCB2YXIgZ2V0SGFuZGxlckFyZ3MgPSBmdW5jdGlvbiBnZXRIYW5kbGVyQXJncygpIHtcbiAgICBpZiAoIXZpc2liaWxpdHkpIHtcbiAgICAgICAgcmV0dXJuIFt0cnVlLCAndmlzaWJsZSddO1xuICAgIH1cbiAgICB2YXIgaGlkZGVuID0gdmlzaWJpbGl0eS5oaWRkZW4sXG4gICAgICAgIHN0YXRlID0gdmlzaWJpbGl0eS5zdGF0ZTtcblxuICAgIHJldHVybiBbIWRvY3VtZW50W2hpZGRlbl0sIGRvY3VtZW50W3N0YXRlXV07XG59OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBib29sLCBmdW5jLCBub2RlLCBudW1iZXIsIG9iamVjdCwgb25lT2ZUeXBlLCBzdHJpbmcgfSBmcm9tICdwcm9wLXR5cGVzJztcblxudmFyIGRlYm91bmNlID0gZnVuY3Rpb24gZGVib3VuY2UoZm4sIHRpbWUpIHtcbiAgdmFyIHRpbWVvdXQgPSB2b2lkIDA7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzLFxuICAgICAgICBfYXJndW1lbnRzID0gYXJndW1lbnRzO1xuXG4gICAgdmFyIGZ1bmN0aW9uQ2FsbCA9IGZ1bmN0aW9uIGZ1bmN0aW9uQ2FsbCgpIHtcbiAgICAgIHJldHVybiBmbi5hcHBseShfdGhpcywgX2FyZ3VtZW50cyk7XG4gICAgfTtcblxuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICB0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbkNhbGwsIHRpbWUpO1xuICB9O1xufTtcblxuLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNjg2MDg1My9nZW5lcmF0ZS1yYW5kb20tc3RyaW5nLWZvci1kaXYtaWQjNjg2MDkxNlxuXG52YXIgZ3VpZEdlbmVyYXRvciA9IChmdW5jdGlvbiAoKSB7XG4gIHZhciBTNCA9IGZ1bmN0aW9uIFM0KCkge1xuICAgIHJldHVybiAoKDEgKyBNYXRoLnJhbmRvbSgpKSAqIDB4MTAwMDAgfCAwKS50b1N0cmluZygxNikuc3Vic3RyaW5nKDEpO1xuICB9O1xuICByZXR1cm4gUzQoKSArIFM0KCkgKyAnLScgKyBTNCgpICsgJy0nICsgUzQoKSArICctJyArIFM0KCkgKyAnLScgKyBTNCgpICsgUzQoKSArIFM0KCk7XG59KTtcblxuZnVuY3Rpb24gZ2V0SGlnaGVzdChlbGVtZW50cykge1xuICB2YXIgaGlnaGVzdCA9IDA7XG4gIGVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgaWYgKGVsLnJlY3QuaGVpZ2h0ID4gaGlnaGVzdCkge1xuICAgICAgaGlnaGVzdCA9IGVsLnJlY3QuaGVpZ2h0O1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBoaWdoZXN0O1xufVxuXG5mdW5jdGlvbiBuZXh0VHJpZ2dlck9uTW91bnQoX3JlZikge1xuICB2YXIgcmVjdCA9IF9yZWYucmVjdCxcbiAgICAgIG1vZGUgPSBfcmVmLm1vZGUsXG4gICAgICBwcmV2T2Zmc2V0ID0gX3JlZi5wcmV2T2Zmc2V0LFxuICAgICAgcG9zaXRpb24gPSBfcmVmLnBvc2l0aW9uLFxuICAgICAgZGlyZWN0aW9uID0gX3JlZi5kaXJlY3Rpb24sXG4gICAgICB3aWR0aCA9IF9yZWYud2lkdGg7XG5cbiAgaWYgKG1vZGUgIT09ICdjaGFpbicpIHJldHVybiBmYWxzZTtcbiAgc3dpdGNoIChkaXJlY3Rpb24pIHtcbiAgICBjYXNlICd0b1JpZ2h0JzpcbiAgICAgIHJldHVybiBwb3NpdGlvbi5mcm9tID4gMDtcbiAgICBjYXNlICd0b0xlZnQnOlxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gcmVjdC53aWR0aCArIHBvc2l0aW9uLmZyb20gPD0gd2lkdGg7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0RnJvbU9mZnNldChfcmVmKSB7XG4gIHZhciByZWN0ID0gX3JlZi5yZWN0LFxuICAgICAgb2Zmc2V0ID0gX3JlZi5vZmZzZXQsXG4gICAgICBkaXJlY3Rpb24gPSBfcmVmLmRpcmVjdGlvbjtcblxuICBzd2l0Y2ggKGRpcmVjdGlvbikge1xuICAgIGNhc2UgJ3RvUmlnaHQnOlxuICAgICAgcmV0dXJuIG9mZnNldCAtIHJlY3Qud2lkdGg7XG4gICAgY2FzZSAndG9MZWZ0JzpcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIG9mZnNldDtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRGcm9tKF9yZWYyKSB7XG4gIHZhciBpbmRleCA9IF9yZWYyLmluZGV4LFxuICAgICAgcmVjdCA9IF9yZWYyLnJlY3QsXG4gICAgICBvZmZzZXQgPSBfcmVmMi5vZmZzZXQsXG4gICAgICB3aWR0aCA9IF9yZWYyLndpZHRoLFxuICAgICAgZGlyZWN0aW9uID0gX3JlZjIuZGlyZWN0aW9uO1xuXG4gIGlmIChpbmRleCA9PT0gMCkgcmV0dXJuIG9mZnNldDtcblxuICBpZiAodHlwZW9mIG9mZnNldCA9PT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gZ2V0RnJvbU9mZnNldCh7IHJlY3Q6IHJlY3QsIG9mZnNldDogb2Zmc2V0LCBkaXJlY3Rpb246IGRpcmVjdGlvbiB9KTtcbiAgfVxuXG4gIHN3aXRjaCAoZGlyZWN0aW9uKSB7XG4gICAgY2FzZSAndG9SaWdodCc6XG4gICAgICByZXR1cm4gLXJlY3Qud2lkdGg7XG4gICAgY2FzZSAndG9MZWZ0JzpcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHdpZHRoO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldFRvKF9yZWYzKSB7XG4gIHZhciByZWN0ID0gX3JlZjMucmVjdCxcbiAgICAgIHdpZHRoID0gX3JlZjMud2lkdGgsXG4gICAgICBkaXJlY3Rpb24gPSBfcmVmMy5kaXJlY3Rpb247XG5cbiAgc3dpdGNoIChkaXJlY3Rpb24pIHtcbiAgICBjYXNlICd0b1JpZ2h0JzpcbiAgICAgIHJldHVybiB3aWR0aDtcbiAgICBjYXNlICd0b0xlZnQnOlxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gLXJlY3Qud2lkdGg7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0TmV4dChfcmVmNCkge1xuICB2YXIgbW9kZSA9IF9yZWY0Lm1vZGUsXG4gICAgICBmcm9tID0gX3JlZjQuZnJvbSxcbiAgICAgIGRpcmVjdGlvbiA9IF9yZWY0LmRpcmVjdGlvbixcbiAgICAgIHJlY3QgPSBfcmVmNC5yZWN0LFxuICAgICAgd2lkdGggPSBfcmVmNC53aWR0aDtcblxuICB2YXIgc3RhcnQgPSBmcm9tIHx8IDA7XG5cbiAgc3dpdGNoIChtb2RlKSB7XG4gICAgY2FzZSAnYXdhaXQnOlxuICAgICAgc3dpdGNoIChkaXJlY3Rpb24pIHtcbiAgICAgICAgY2FzZSAndG9SaWdodCc6XG4gICAgICAgICAgcmV0dXJuIHdpZHRoO1xuICAgICAgICBjYXNlICd0b0xlZnQnOlxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiAtcmVjdC53aWR0aDtcbiAgICAgIH1cbiAgICBjYXNlICdzbW9vdGgnOlxuICAgICAgc3dpdGNoIChkaXJlY3Rpb24pIHtcbiAgICAgICAgY2FzZSAndG9SaWdodCc6XG4gICAgICAgICAgcmV0dXJuIHJlY3Qud2lkdGggPiB3aWR0aCA/IDAgOiB3aWR0aCAtIHJlY3Qud2lkdGg7XG4gICAgICAgIGNhc2UgJ3RvTGVmdCc6XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIHJlY3Qud2lkdGggPiB3aWR0aCA/IHdpZHRoIC0gcmVjdC53aWR0aCA6IDA7XG4gICAgICB9XG4gICAgY2FzZSAnY2hhaW4nOlxuICAgIGRlZmF1bHQ6XG4gICAgICBzd2l0Y2ggKGRpcmVjdGlvbikge1xuICAgICAgICBjYXNlICd0b1JpZ2h0JzpcbiAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgY2FzZSAndG9MZWZ0JzpcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gcmVjdC53aWR0aCArIHN0YXJ0ID4gd2lkdGggPyB3aWR0aCAtIHJlY3Qud2lkdGggOiB3aWR0aCAtIHJlY3QubGVmdCAtIHJlY3Qud2lkdGg7XG4gICAgICB9XG4gIH1cbn1cblxudmFyIGdldFBvc2l0aW9uID0gKGZ1bmN0aW9uIChfcmVmNSkge1xuICB2YXIgbW9kZSA9IF9yZWY1Lm1vZGUsXG4gICAgICBpbmRleCA9IF9yZWY1LmluZGV4LFxuICAgICAgcmVjdCA9IF9yZWY1LnJlY3QsXG4gICAgICBvZmZzZXQgPSBfcmVmNS5vZmZzZXQsXG4gICAgICB3aWR0aCA9IF9yZWY1LndpZHRoLFxuICAgICAgZGlyZWN0aW9uID0gX3JlZjUuZGlyZWN0aW9uO1xuXG4gIHZhciBmcm9tID0gZ2V0RnJvbSh7IGluZGV4OiBpbmRleCwgcmVjdDogcmVjdCwgb2Zmc2V0OiBvZmZzZXQsIHdpZHRoOiB3aWR0aCwgZGlyZWN0aW9uOiBkaXJlY3Rpb24gfSk7XG4gIHZhciB0byA9IGdldFRvKHsgcmVjdDogcmVjdCwgd2lkdGg6IHdpZHRoLCBkaXJlY3Rpb246IGRpcmVjdGlvbiB9KTtcbiAgcmV0dXJuIHtcbiAgICBmcm9tOiBmcm9tLFxuICAgIHRvOiB0byxcbiAgICBuZXh0OiBnZXROZXh0KHsgbW9kZTogbW9kZSwgZnJvbTogZnJvbSwgZGlyZWN0aW9uOiBkaXJlY3Rpb24sIHJlY3Q6IHJlY3QsIHdpZHRoOiB3aWR0aCB9KVxuICB9O1xufSk7XG5cbmZ1bmN0aW9uIGdldE5leHRPZmZzZXQoX3JlZikge1xuICB2YXIgZnJvbSA9IF9yZWYuZnJvbSxcbiAgICAgIHJlY3QgPSBfcmVmLnJlY3QsXG4gICAgICBkaXJlY3Rpb24gPSBfcmVmLmRpcmVjdGlvbjtcblxuICBzd2l0Y2ggKGRpcmVjdGlvbikge1xuICAgIGNhc2UgJ3RvUmlnaHQnOlxuICAgICAge1xuICAgICAgICByZXR1cm4gZnJvbTtcbiAgICAgIH1cbiAgICBjYXNlICd0b0xlZnQnOlxuICAgIGRlZmF1bHQ6XG4gICAgICB7XG4gICAgICAgIHJldHVybiBmcm9tICsgcmVjdC53aWR0aDtcbiAgICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRTdGFydE9mZnNldChfcmVmKSB7XG4gIHZhciBvZmZzZXQgPSBfcmVmLm9mZnNldCxcbiAgICAgIHJlY3QgPSBfcmVmLnJlY3QsXG4gICAgICBkaXJlY3Rpb24gPSBfcmVmLmRpcmVjdGlvbixcbiAgICAgIHdpZHRoID0gX3JlZi53aWR0aDtcblxuICBpZiAob2Zmc2V0ID09PSAncnVuLWluJykge1xuICAgIHN3aXRjaCAoZGlyZWN0aW9uKSB7XG4gICAgICBjYXNlICd0b1JpZ2h0JzpcbiAgICAgICAgcmV0dXJuIC1yZWN0LndpZHRoO1xuICAgICAgY2FzZSAndG9MZWZ0JzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB3aWR0aDtcbiAgICB9XG4gIH1cbiAgaWYgKHR5cGVvZiBvZmZzZXQgPT09ICdzdHJpbmcnKSB7XG4gICAgdmFyIG9mZnNldFJlbGF0aXZlID0gTnVtYmVyKG9mZnNldC5yZXBsYWNlKCclJywgJycpKTtcbiAgICBpZiAob2Zmc2V0UmVsYXRpdmUpIHJldHVybiB3aWR0aCAvIDEwMCAqIG9mZnNldFJlbGF0aXZlO1xuICB9XG4gIHJldHVybiBvZmZzZXQ7XG59XG5cbnZhciBjbGFzc0NhbGxDaGVjayA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59O1xuXG52YXIgY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gICAgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgICBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgICByZXR1cm4gQ29uc3RydWN0b3I7XG4gIH07XG59KCk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59O1xuXG52YXIgaW5oZXJpdHMgPSBmdW5jdGlvbiAoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpO1xuICB9XG5cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7XG59O1xuXG52YXIgcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiA9IGZ1bmN0aW9uIChzZWxmLCBjYWxsKSB7XG4gIGlmICghc2VsZikge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmO1xufTtcblxudmFyIHRvQ29uc3VtYWJsZUFycmF5ID0gZnVuY3Rpb24gKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBBcnJheShhcnIubGVuZ3RoKTsgaSA8IGFyci5sZW5ndGg7IGkrKykgYXJyMltpXSA9IGFycltpXTtcblxuICAgIHJldHVybiBhcnIyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBBcnJheS5mcm9tKGFycik7XG4gIH1cbn07XG5cbnZhciBUaWNrZXJFbGVtZW50ID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgaW5oZXJpdHMoVGlja2VyRWxlbWVudCwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gVGlja2VyRWxlbWVudCgpIHtcbiAgICB2YXIgX3JlZjtcblxuICAgIHZhciBfdGVtcCwgX3RoaXMsIF9yZXQ7XG5cbiAgICBjbGFzc0NhbGxDaGVjayh0aGlzLCBUaWNrZXJFbGVtZW50KTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoX3JlZiA9IFRpY2tlckVsZW1lbnQuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihUaWNrZXJFbGVtZW50KSkuY2FsbC5hcHBseShfcmVmLCBbdGhpc10uY29uY2F0KGFyZ3MpKSksIF90aGlzKSwgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBjaGlsZHJlbjogX3RoaXMucHJvcHMuY2hpbGRyZW4oe1xuICAgICAgICBpbmRleDogX3RoaXMucHJvcHMuaW5kZXhcbiAgICAgIH0pLFxuICAgICAgbW92ZTogX3RoaXMucHJvcHMubW92ZSxcbiAgICAgIHBvc2l0aW9uOiB7IGZyb206IHVuZGVmaW5lZCwgdG86IHVuZGVmaW5lZCwgbmV4dDogdW5kZWZpbmVkIH0sXG4gICAgICBvZmZzZXQ6IF90aGlzLnByb3BzLm9mZnNldCxcbiAgICAgIHJlY3Q6IG51bGxcbiAgICB9LCBfdGhpcy54ID0gMCwgX3RoaXMuaXNNb3ZpbmcgPSBmYWxzZSwgX3RoaXMubmV4dFRyaWdnZXJlZCA9IGZhbHNlLCBfdGhpcy5lbGVtZW50UmVmID0gUmVhY3QuY3JlYXRlUmVmKCksIF90aGlzLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMuc2V0UG9zaXRpb24odHJ1ZSk7XG4gICAgICBfdGhpcy5vYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKF90aGlzLm9uTXV0YXRpb24pO1xuICAgICAgX3RoaXMub2JzZXJ2ZXIub2JzZXJ2ZShfdGhpcy5lbGVtZW50UmVmLmN1cnJlbnQsIHsgY2hhcmFjdGVyRGF0YTogdHJ1ZSwgY2hpbGRMaXN0OiB0cnVlLCBzdWJ0cmVlOiB0cnVlIH0pO1xuICAgIH0sIF90aGlzLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMub2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgIH0sIF90aGlzLm9uTXV0YXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpcy5zZXRQb3NpdGlvbigpO1xuICAgIH0sIF90aGlzLmNvbXBvbmVudERpZFVwZGF0ZSA9IGZ1bmN0aW9uIChwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgICAgaWYgKCFfdGhpcy54ICYmIHByZXZTdGF0ZS5wb3NpdGlvbi5mcm9tICE9PSBfdGhpcy5zdGF0ZS5wb3NpdGlvbi5mcm9tKSB7XG4gICAgICAgIF90aGlzLnggPSBfdGhpcy5zdGF0ZS5wb3NpdGlvbi5mcm9tO1xuICAgICAgICBfdGhpcy5lbGVtZW50UmVmLmN1cnJlbnQuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZTNkKCcgKyBfdGhpcy54ICsgJ3B4LCAwLCAwKSc7XG4gICAgICB9XG4gICAgICBpZiAoX3RoaXMueCAhPT0gX3RoaXMuc3RhdGUucG9zaXRpb24uZnJvbSAmJiBwcmV2UHJvcHMucHJldlJlY3QgJiYgX3RoaXMucHJvcHMucHJldlJlY3QgJiYgcHJldlByb3BzLnByZXZSZWN0LndpZHRoICE9PSBfdGhpcy5wcm9wcy5wcmV2UmVjdC53aWR0aCkge1xuICAgICAgICBpZiAoX3RoaXMucHJvcHMub2Zmc2V0KSB7XG4gICAgICAgICAgX3RoaXMueCA9IF90aGlzLnggKyAoX3RoaXMucHJvcHMub2Zmc2V0IC0gcHJldlByb3BzLm9mZnNldCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgX3RoaXMueCA9IF90aGlzLnggKyAoX3RoaXMucHJvcHMucHJldlJlY3Qud2lkdGggLSBwcmV2UHJvcHMucHJldlJlY3Qud2lkdGgpO1xuICAgICAgICB9XG4gICAgICAgIF90aGlzLmVsZW1lbnRSZWYuY3VycmVudC5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlM2QoJyArIF90aGlzLnggKyAncHgsIDAsIDApJztcbiAgICAgIH1cbiAgICAgIGlmIChfdGhpcy5wcm9wcy5tb3ZlICYmICFwcmV2UHJvcHMuc3RhcnQgJiYgX3RoaXMucHJvcHMuc3RhcnQpIHtcbiAgICAgICAgX3RoaXMuYW5pbWF0ZSgpO1xuICAgICAgfVxuICAgICAgaWYgKF90aGlzLnByb3BzLnN0YXJ0ICYmICFwcmV2UHJvcHMubW92ZSAmJiBfdGhpcy5wcm9wcy5tb3ZlKSB7XG4gICAgICAgIF90aGlzLmFuaW1hdGUoKTtcbiAgICAgIH1cbiAgICAgIGlmIChwcmV2UHJvcHMubW92ZSAmJiAhX3RoaXMucHJvcHMubW92ZSkge1xuICAgICAgICBfdGhpcy5pc01vdmluZyA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0sIF90aGlzLnNldFBvc2l0aW9uID0gZnVuY3Rpb24gKGlzTW91bnQpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wcyA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIG1vZGUgPSBfdGhpcyRwcm9wcy5tb2RlLFxuICAgICAgICAgIHdpZHRoID0gX3RoaXMkcHJvcHMud2lkdGgsXG4gICAgICAgICAgaWQgPSBfdGhpcyRwcm9wcy5pZCxcbiAgICAgICAgICBvbk5leHQgPSBfdGhpcyRwcm9wcy5vbk5leHQsXG4gICAgICAgICAgZGlyZWN0aW9uID0gX3RoaXMkcHJvcHMuZGlyZWN0aW9uLFxuICAgICAgICAgIGluZGV4ID0gX3RoaXMkcHJvcHMuaW5kZXgsXG4gICAgICAgICAgc2V0UmVjdCA9IF90aGlzJHByb3BzLnNldFJlY3Q7XG5cblxuICAgICAgdmFyIHJlY3QgPSBfdGhpcy5lbGVtZW50UmVmLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICBpZiAocmVjdC53aWR0aCA9PT0gMCkgcmV0dXJuO1xuXG4gICAgICB2YXIgb2Zmc2V0ID0gX3RoaXMucHJvcHMuaW5kZXggPT09IDAgPyBnZXRTdGFydE9mZnNldCh7IG9mZnNldDogX3RoaXMucHJvcHMub2Zmc2V0LCByZWN0OiByZWN0LCBkaXJlY3Rpb246IGRpcmVjdGlvbiwgd2lkdGg6IHdpZHRoIH0pIDogX3RoaXMucHJvcHMub2Zmc2V0O1xuXG4gICAgICB2YXIgcG9zaXRpb24gPSBnZXRQb3NpdGlvbih7IG1vZGU6IG1vZGUsIHJlY3Q6IHJlY3QsIGluZGV4OiBpbmRleCwgb2Zmc2V0OiBvZmZzZXQsIHdpZHRoOiB3aWR0aCwgZGlyZWN0aW9uOiBkaXJlY3Rpb24gfSk7XG5cbiAgICAgIHNldFJlY3Qoe1xuICAgICAgICBpbmRleDogX3RoaXMucHJvcHMuaW5kZXgsXG4gICAgICAgIHJlY3Q6IHJlY3QsXG4gICAgICAgIG9mZnNldDogb2Zmc2V0LFxuICAgICAgICBuZXh0T2Zmc2V0OiBnZXROZXh0T2Zmc2V0KHsgZnJvbTogcG9zaXRpb24uZnJvbSwgcmVjdDogcmVjdCwgZGlyZWN0aW9uOiBkaXJlY3Rpb24gfSlcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoaXNNb3VudCkge1xuICAgICAgICB2YXIgbmV4dFRyaWdnZXJPbk1vdW50JCQxID0gbmV4dFRyaWdnZXJPbk1vdW50KHsgbW9kZTogbW9kZSwgcmVjdDogcmVjdCwgcG9zaXRpb246IHBvc2l0aW9uLCBvZmZzZXQ6IG9mZnNldCwgZGlyZWN0aW9uOiBkaXJlY3Rpb24sIHdpZHRoOiB3aWR0aCB9KTtcbiAgICAgICAgaWYgKG5leHRUcmlnZ2VyT25Nb3VudCQkMSkge1xuICAgICAgICAgIG9uTmV4dCh7XG4gICAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgICBpbmRleDogaW5kZXgsXG4gICAgICAgICAgICByZWN0OiByZWN0LFxuICAgICAgICAgICAgbmV4dE9mZnNldDogZ2V0TmV4dE9mZnNldCh7IGZyb206IHBvc2l0aW9uLmZyb20sIHJlY3Q6IHJlY3QsIGRpcmVjdGlvbjogZGlyZWN0aW9uIH0pXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFuZXh0VHJpZ2dlck9uTW91bnQkJDEgJiYgKG9mZnNldCB8fCBpbmRleCA9PT0gMCkpIHtcbiAgICAgICAgICBvbk5leHQoeyBpZDogaWQsIGluZGV4OiBpbmRleCwgcmVjdDogcmVjdCB9KTtcbiAgICAgICAgfVxuICAgICAgICBfdGhpcy5uZXh0VHJpZ2dlcmVkID0gbmV4dFRyaWdnZXJPbk1vdW50JCQxO1xuICAgICAgfVxuXG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHJlY3Q6IHJlY3QsXG4gICAgICAgIG9mZnNldDogb2Zmc2V0LFxuICAgICAgICBwb3NpdGlvbjogcG9zaXRpb25cbiAgICAgIH0pO1xuICAgIH0sIF90aGlzLnNob3VsZFRyaWdnZXJOZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKF90aGlzLm5leHRUcmlnZ2VyZWQpIHJldHVybiBmYWxzZTtcbiAgICAgIHJldHVybiBfdGhpcy5wcm9wcy5kaXJlY3Rpb24gPT09ICd0b0xlZnQnID8gX3RoaXMueCA8PSBfdGhpcy5zdGF0ZS5wb3NpdGlvbi5uZXh0IDogX3RoaXMueCA+PSBfdGhpcy5zdGF0ZS5wb3NpdGlvbi5uZXh0O1xuICAgIH0sIF90aGlzLnRyaWdnZXJOZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKF90aGlzLnNob3VsZFRyaWdnZXJOZXh0KCkpIHtcbiAgICAgICAgLy8gaWYgKHRoaXMucHJvcHMuaW5kZXggPT09IDUpIGNvbnNvbGUubG9nKHRoaXMueClcbiAgICAgICAgX3RoaXMubmV4dFRyaWdnZXJlZCA9IHRydWU7XG4gICAgICAgIF90aGlzLnByb3BzLm9uTmV4dCh7XG4gICAgICAgICAgaWQ6IF90aGlzLnByb3BzLmlkLFxuICAgICAgICAgIGluZGV4OiBfdGhpcy5wcm9wcy5pbmRleCxcbiAgICAgICAgICByZWN0OiBfdGhpcy5zdGF0ZS5yZWN0XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sIF90aGlzLnNob3VsZEZpbmlzaCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHN3aXRjaCAoX3RoaXMucHJvcHMuZGlyZWN0aW9uKSB7XG4gICAgICAgIGNhc2UgJ3RvUmlnaHQnOlxuICAgICAgICAgIHJldHVybiBfdGhpcy54ID49IF90aGlzLnN0YXRlLnBvc2l0aW9uLnRvO1xuICAgICAgICBjYXNlICd0b0xlZnQnOlxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiBfdGhpcy54IDw9IF90aGlzLnN0YXRlLnBvc2l0aW9uLnRvO1xuICAgICAgfVxuICAgIH0sIF90aGlzLmFuaW1hdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoX3RoaXMuaXNNb3ZpbmcpIHJldHVybjtcbiAgICAgIF90aGlzLmlzTW92aW5nID0gdHJ1ZTtcblxuICAgICAgdmFyIHByZXZUaW1lc3RhbXAgPSBudWxsO1xuXG4gICAgICB2YXIgc3RlcCA9IGZ1bmN0aW9uIHN0ZXAodGltZXN0YW1wKSB7XG4gICAgICAgIGlmICghX3RoaXMuaXNNb3ZpbmcpIHJldHVybjtcbiAgICAgICAgaWYgKCFfdGhpcy5lbGVtZW50UmVmLmN1cnJlbnQpIHJldHVybjtcblxuICAgICAgICB2YXIgcHJvZ3Jlc3MgPSBwcmV2VGltZXN0YW1wID8gdGltZXN0YW1wIC0gcHJldlRpbWVzdGFtcCA6IDA7XG5cbiAgICAgICAgX3RoaXMueCA9IF90aGlzLnByb3BzLmRpcmVjdGlvbiA9PT0gJ3RvTGVmdCcgPyBfdGhpcy54IC0gcHJvZ3Jlc3MgLyAxMDAgKiBfdGhpcy5wcm9wcy5zcGVlZCA6IF90aGlzLnggKyBwcm9ncmVzcyAvIDEwMCAqIF90aGlzLnByb3BzLnNwZWVkO1xuICAgICAgICBfdGhpcy5lbGVtZW50UmVmLmN1cnJlbnQuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZTNkKCcgKyBfdGhpcy54ICsgJ3B4LCAwLCAwKSc7XG4gICAgICAgIF90aGlzLnRyaWdnZXJOZXh0KCk7XG5cbiAgICAgICAgaWYgKF90aGlzLnNob3VsZEZpbmlzaCgpKSB7XG4gICAgICAgICAgX3RoaXMuaXNNb3ZpbmcgPSBmYWxzZTtcbiAgICAgICAgICBwcmV2VGltZXN0YW1wID0gbnVsbDtcbiAgICAgICAgICBfdGhpcy5wcm9wcy5vbkZpbmlzaChfdGhpcy5wcm9wcy5pZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcHJldlRpbWVzdGFtcCA9IHRpbWVzdGFtcDtcbiAgICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0ZXApO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShzdGVwKTtcbiAgICB9LCBfdGhpcy5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIHtcbiAgICAgICAgICBjbGFzc05hbWU6ICd0aWNrZXJfX2VsZW1lbnQnLFxuICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICB3aWxsQ2hhbmdlOiAndHJhbnNmb3JtJyxcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKCcgKyBfdGhpcy54ICsgJ3B4LCAwLCAwKSdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHJlZjogX3RoaXMuZWxlbWVudFJlZlxuICAgICAgICB9LFxuICAgICAgICBfdGhpcy5zdGF0ZS5jaGlsZHJlblxuICAgICAgKTtcbiAgICB9LCBfdGVtcCksIHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oX3RoaXMsIF9yZXQpO1xuICB9XG5cbiAgcmV0dXJuIFRpY2tlckVsZW1lbnQ7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cblRpY2tlckVsZW1lbnQucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogb25lT2ZUeXBlKFtub2RlLCBmdW5jXSkuaXNSZXF1aXJlZCxcbiAgZGlyZWN0aW9uOiBzdHJpbmcuaXNSZXF1aXJlZCxcbiAgc3BlZWQ6IG51bWJlci5pc1JlcXVpcmVkLFxuICBpZDogc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGluZGV4OiBudW1iZXIuaXNSZXF1aXJlZCxcbiAgbW9kZTogc3RyaW5nLmlzUmVxdWlyZWQsXG4gIG1vdmU6IGJvb2wuaXNSZXF1aXJlZCxcbiAgb25OZXh0OiBmdW5jLmlzUmVxdWlyZWQsXG4gIG9uRmluaXNoOiBmdW5jLmlzUmVxdWlyZWQsXG4gIHNldFJlY3Q6IGZ1bmMuaXNSZXF1aXJlZCxcbiAgc3RhcnQ6IGJvb2wuaXNSZXF1aXJlZCxcblxuICBvZmZzZXQ6IG9uZU9mVHlwZShbbnVtYmVyLCBzdHJpbmddKSxcbiAgcHJldlJlY3Q6IG9iamVjdCxcbiAgd2lkdGg6IG51bWJlclxufTtcblRpY2tlckVsZW1lbnQuZGVmYXVsdFByb3BzID0ge1xuICBvZmZzZXQ6IHVuZGVmaW5lZCxcbiAgd2lkdGg6IHVuZGVmaW5lZCxcbiAgcHJldlJlY3Q6IG51bGxcbn07XG5cbnZhciBnZXREZWZhdWx0U3RhdGUgPSBmdW5jdGlvbiBnZXREZWZhdWx0U3RhdGUob2Zmc2V0LCB3aWR0aCkge1xuICByZXR1cm4ge1xuICAgIGVsZW1lbnRzOiBbe1xuICAgICAgaWQ6IGd1aWRHZW5lcmF0b3IoKSxcbiAgICAgIGluZGV4OiAwLFxuICAgICAgaGVpZ2h0OiAwLFxuICAgICAgc3RhcnQ6IGZhbHNlLFxuICAgICAgb2Zmc2V0OiBvZmZzZXQsXG4gICAgICByZWN0OiBudWxsLFxuICAgICAgcHJldlJlY3Q6IG51bGxcbiAgICB9XSxcbiAgICB3aWR0aDogd2lkdGgsXG4gICAgaGVpZ2h0OiAwXG4gIH07XG59O1xuXG52YXIgVGlja2VyID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgaW5oZXJpdHMoVGlja2VyLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBUaWNrZXIoKSB7XG4gICAgdmFyIF9yZWY7XG5cbiAgICB2YXIgX3RlbXAsIF90aGlzLCBfcmV0O1xuXG4gICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgVGlja2VyKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoX3JlZiA9IFRpY2tlci5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFRpY2tlcikpLmNhbGwuYXBwbHkoX3JlZiwgW3RoaXNdLmNvbmNhdChhcmdzKSkpLCBfdGhpcyksIF90aGlzLm5leHQgPSBudWxsLCBfdGhpcy5zdGF0ZSA9IGdldERlZmF1bHRTdGF0ZShfdGhpcy5wcm9wcy5vZmZzZXQpLCBfdGhpcy50aWNrZXJSZWYgPSBSZWFjdC5jcmVhdGVSZWYoKSwgX3RoaXMuZE9uUmVzaXplID0gZGVib3VuY2UoZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIF90aGlzLm9uUmVzaXplKCk7XG4gICAgfSwgMTUwKSwgX3RoaXMuY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHdpZHRoOiBfdGhpcy50aWNrZXJSZWYuY3VycmVudC5vZmZzZXRXaWR0aCxcbiAgICAgICAgaGVpZ2h0OiBfdGhpcy5wcm9wcy5oZWlnaHRcbiAgICAgIH0pO1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIF90aGlzLmRPblJlc2l6ZSk7XG4gICAgfSwgX3RoaXMuY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgX3RoaXMuZE9uUmVzaXplKTtcbiAgICB9LCBfdGhpcy5zZXRSZWN0ID0gZnVuY3Rpb24gKF9yZWYyKSB7XG4gICAgICB2YXIgaW5kZXggPSBfcmVmMi5pbmRleCxcbiAgICAgICAgICByZWN0ID0gX3JlZjIucmVjdCxcbiAgICAgICAgICBvZmZzZXQgPSBfcmVmMi5vZmZzZXQsXG4gICAgICAgICAgbmV4dE9mZnNldCA9IF9yZWYyLm5leHRPZmZzZXQ7XG5cbiAgICAgIF90aGlzLnNldFN0YXRlKGZ1bmN0aW9uIChwcmV2U3RhdGUpIHtcbiAgICAgICAgdmFyIGVsZW1lbnRzID0gcHJldlN0YXRlLmVsZW1lbnRzLm1hcChmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICB2YXIgbmV3RWwgPSBlbDtcbiAgICAgICAgICBpZiAoZWwuaW5kZXggPT09IGluZGV4KSBuZXdFbC5yZWN0ID0gcmVjdDtcbiAgICAgICAgICAvLyBuZXh0IGVsZW1lbnRcbiAgICAgICAgICBpZiAoZWwuaW5kZXggPT09IGluZGV4ICsgMSkge1xuICAgICAgICAgICAgbmV3RWwucHJldlJlY3QgPSByZWN0O1xuICAgICAgICAgICAgaWYgKG5ld0VsLm9mZnNldCkge1xuICAgICAgICAgICAgICBuZXdFbC5vZmZzZXQgPSBuZXh0T2Zmc2V0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gbmV3RWw7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGVsZW1lbnRzOiBlbGVtZW50cyxcbiAgICAgICAgICBoZWlnaHQ6IF90aGlzLnByb3BzLmhlaWdodCA/IHByZXZTdGF0ZS5oZWlnaHQgOiBnZXRIaWdoZXN0KGVsZW1lbnRzKVxuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgfSwgX3RoaXMub25SZXNpemUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIV90aGlzLnRpY2tlclJlZi5jdXJyZW50IHx8IF90aGlzLnRpY2tlclJlZi5jdXJyZW50Lm9mZnNldFdpZHRoID09PSBfdGhpcy5zdGF0ZS53aWR0aCkgcmV0dXJuO1xuICAgICAgX3RoaXMuc2V0U3RhdGUoX2V4dGVuZHMoe30sIGdldERlZmF1bHRTdGF0ZShfdGhpcy5wcm9wcy5vZmZzZXQsIF90aGlzLnRpY2tlclJlZi5jdXJyZW50Lm9mZnNldFdpZHRoKSwge1xuICAgICAgICBoZWlnaHQ6IF90aGlzLnByb3BzLmhlaWdodFxuICAgICAgfSkpO1xuICAgIH0sIF90aGlzLm9uRmluaXNoID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBfdGhpcy5zZXRTdGF0ZShmdW5jdGlvbiAocHJldlN0YXRlKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZWxlbWVudHM6IHByZXZTdGF0ZS5lbGVtZW50cy5maWx0ZXIoZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgICAgICByZXR1cm4gZWwuaWQgIT09IGlkO1xuICAgICAgICAgIH0pXG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICB9LCBfdGhpcy5vbk5leHQgPSBmdW5jdGlvbiAoX3JlZjMpIHtcbiAgICAgIHZhciBpZCA9IF9yZWYzLmlkLFxuICAgICAgICAgIGluZGV4ID0gX3JlZjMuaW5kZXgsXG4gICAgICAgICAgcmVjdCA9IF9yZWYzLnJlY3QsXG4gICAgICAgICAgbmV4dE9mZnNldCA9IF9yZWYzLm5leHRPZmZzZXQ7XG5cbiAgICAgIF90aGlzLnNldFN0YXRlKGZ1bmN0aW9uIChwcmV2U3RhdGUpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBlbGVtZW50czogW10uY29uY2F0KHRvQ29uc3VtYWJsZUFycmF5KHByZXZTdGF0ZS5lbGVtZW50cy5tYXAoZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgICAgICB2YXIgbmV3RWwgPSBlbDtcbiAgICAgICAgICAgIGlmIChlbC5pbmRleCA9PT0gaW5kZXgpIG5ld0VsLnJlY3QgPSByZWN0O1xuICAgICAgICAgICAgaWYgKGVsLmluZGV4ID09PSAwIHx8IGVsLm9mZnNldCB8fCBuZXdFbC5pbmRleCA9PT0gaW5kZXggKyAxKSB7XG4gICAgICAgICAgICAgIG5ld0VsLnN0YXJ0ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBuZXdFbDtcbiAgICAgICAgICAgIC8vIGNyZWF0ZSBuZXcgZWxlbWVudFxuICAgICAgICAgIH0pKSwgW3tcbiAgICAgICAgICAgIGlkOiBndWlkR2VuZXJhdG9yKCksXG4gICAgICAgICAgICBpbmRleDogcHJldlN0YXRlLmVsZW1lbnRzW3ByZXZTdGF0ZS5lbGVtZW50cy5sZW5ndGggLSAxXS5pbmRleCArIDEsXG4gICAgICAgICAgICBoZWlnaHQ6IDAsXG4gICAgICAgICAgICBzdGFydDogZmFsc2UsXG4gICAgICAgICAgICBvZmZzZXQ6IG5leHRPZmZzZXQsXG4gICAgICAgICAgICByZWN0OiBudWxsLFxuICAgICAgICAgICAgcHJldlJlY3Q6IHJlY3RcbiAgICAgICAgICB9XSlcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgIH0sIF90ZW1wKSwgcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihfdGhpcywgX3JldCk7XG4gIH1cblxuICBjcmVhdGVDbGFzcyhUaWNrZXIsIFt7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZGl2JyxcbiAgICAgICAge1xuICAgICAgICAgIGNsYXNzTmFtZTogJ3RpY2tlcicsXG4gICAgICAgICAgcmVmOiB0aGlzLnRpY2tlclJlZixcbiAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgICAgICBoZWlnaHQ6IHRoaXMuc3RhdGUuaGVpZ2h0ICYmIHRoaXMuc3RhdGUuaGVpZ2h0ICsgJ3B4J1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgdGhpcy5zdGF0ZS53aWR0aCAmJiB0aGlzLnN0YXRlLmVsZW1lbnRzLm1hcChmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgIFRpY2tlckVsZW1lbnQsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGtleTogZWwuaWQsXG4gICAgICAgICAgICAgIGlkOiBlbC5pZCxcbiAgICAgICAgICAgICAgaW5kZXg6IGVsLmluZGV4LFxuICAgICAgICAgICAgICBzdGFydDogZWwuc3RhcnQsXG4gICAgICAgICAgICAgIG9mZnNldDogZWwub2Zmc2V0LFxuICAgICAgICAgICAgICBwcmV2UmVjdDogZWwucHJldlJlY3QsXG5cbiAgICAgICAgICAgICAgZGlyZWN0aW9uOiBfdGhpczIucHJvcHMuZGlyZWN0aW9uLFxuICAgICAgICAgICAgICBtb2RlOiBfdGhpczIucHJvcHMubW9kZSxcbiAgICAgICAgICAgICAgbW92ZTogX3RoaXMyLnByb3BzLm1vdmUsXG4gICAgICAgICAgICAgIHNwZWVkOiBfdGhpczIucHJvcHMuc3BlZWQsXG5cbiAgICAgICAgICAgICAgb25GaW5pc2g6IF90aGlzMi5vbkZpbmlzaCxcbiAgICAgICAgICAgICAgb25OZXh0OiBfdGhpczIub25OZXh0LFxuICAgICAgICAgICAgICBzZXRSZWN0OiBfdGhpczIuc2V0UmVjdCxcbiAgICAgICAgICAgICAgd2lkdGg6IF90aGlzMi5zdGF0ZS53aWR0aFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF90aGlzMi5wcm9wcy5jaGlsZHJlblxuICAgICAgICAgICk7XG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gVGlja2VyO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5UaWNrZXIucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogb25lT2ZUeXBlKFtub2RlLCBmdW5jXSkuaXNSZXF1aXJlZCxcblxuICBkaXJlY3Rpb246IHN0cmluZyxcbiAgbW9kZTogc3RyaW5nLFxuICBtb3ZlOiBib29sLFxuICBvZmZzZXQ6IG9uZU9mVHlwZShbbnVtYmVyLCBzdHJpbmddKSxcbiAgc3BlZWQ6IG51bWJlcixcbiAgaGVpZ2h0OiBvbmVPZlR5cGUoW251bWJlciwgc3RyaW5nXSlcbn07XG5UaWNrZXIuZGVmYXVsdFByb3BzID0ge1xuICBvZmZzZXQ6IDAsXG4gIHNwZWVkOiA1LFxuICBkaXJlY3Rpb246ICd0b0xlZnQnLFxuICBtb2RlOiAnY2hhaW4nLFxuICBtb3ZlOiB0cnVlLFxuICBoZWlnaHQ6IHVuZGVmaW5lZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgVGlja2VyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguZXMuanMubWFwXG4iXSwic291cmNlUm9vdCI6IiJ9