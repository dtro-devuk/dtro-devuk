(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[1],{

/***/ "./components/atoms/progressbars/PageTopProgressBar.js":
/*!*************************************************************!*\
  !*** ./components/atoms/progressbars/PageTopProgressBar.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/config */ "./node_modules/next/config.js");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_3__);
/**
 * Progress Bar Loader for Pages
 * Sometimes when navigating between pages, Next.js needs to download
 * pages(chunks) from the server before rendering the page, and may
 * need to wait for the data. During this time the browser might be non responsive.
 *
 * So will show a Page Loader
 *
 * Uses NProgress npm
 * @see: https://www.npmjs.com/package/nprogress
 * config here: https://github.com/rstacruz/nprogress/blob/master/nprogress.js#L31
 *
 */





var _getConfig = next_config__WEBPACK_IMPORTED_MODULE_1___default()(),
    publicRuntimeConfig = _getConfig.publicRuntimeConfig;

var timer;
var state;
var activeRequests = 0;
var delay = 250;

function load() {
  if (state === 'loading') {
    return;
  }

  state = 'loading';
  timer = setTimeout(function () {
    nprogress__WEBPACK_IMPORTED_MODULE_3___default.a.start();
  }, delay); // only show progress bar if it takes longer than the delay
}

function stop() {
  if (activeRequests > 0) {
    return;
  }

  state = 'stop';
  clearTimeout(timer);
  nprogress__WEBPACK_IMPORTED_MODULE_3___default.a.done();
}

nprogress__WEBPACK_IMPORTED_MODULE_3___default.a.configure({
  showSpinner: publicRuntimeConfig.NProgressShowSpinner
});
nprogress__WEBPACK_IMPORTED_MODULE_3___default.a.settings = {
  minimum: 0.08,
  easing: 'linear',
  positionUsing: '',
  speed: 200,
  trickle: true,
  trickleSpeed: 200,
  showSpinner: true,
  barSelector: '[role="bar"]',
  spinnerSelector: '[role="spinner"]',
  parent: 'body',
  template: '<div class="bar" className="mr-5" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
};

next_router__WEBPACK_IMPORTED_MODULE_2___default.a.onRouteChangeStart = function () {
  // console.log('onRouteChangeStart triggered');
  load();
};

next_router__WEBPACK_IMPORTED_MODULE_2___default.a.onRouteChangeComplete = function () {
  // console.log('onRouteChangeComplete triggered');
  stop();
};

next_router__WEBPACK_IMPORTED_MODULE_2___default.a.onRouteChangeError = function () {
  // console.log('onRouteChangeError triggered');
  stop();
};

var PageTopProgressBar = function PageTopProgressBar(_ref) {
  var container = _ref.container,
      percentage = _ref.percentage,
      easeSpeed = _ref.easeSpeed,
      trickleSpeed = _ref.trickleSpeed;
  //   if (container !== 'default') {
  //     NProgress.configure({ parent: `#${container}` });
  //   }
  //   NProgress.set({ percentage });
  nprogress__WEBPACK_IMPORTED_MODULE_3___default.a.configure({
    ease: 'ease',
    speed: {
      speed: easeSpeed
    }
  });
  nprogress__WEBPACK_IMPORTED_MODULE_3___default.a.configure({
    trickleSpeed: {
      trickleSpeed: trickleSpeed
    }
  });
  return null;
};

_c = PageTopProgressBar;
PageTopProgressBar.propTypes = {
  /** To set a progress percentage, call .set(n), where n is a number between 0..1 */
  percentage: prop_types__WEBPACK_IMPORTED_MODULE_0__["number"],

  /** Adjust animation settings using easing (a CSS easing string) and speed (in ms). (default: ease and 200) */
  easeSpeed: prop_types__WEBPACK_IMPORTED_MODULE_0__["number"],

  /** Adjust how often to trickle/increment, in ms. */
  trickleSpeed: prop_types__WEBPACK_IMPORTED_MODULE_0__["number"],

  /** Specify Parent Container, default is "Body" */
  container: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"]
};
PageTopProgressBar.defaultTypes = {
  percentage: 0.4,
  easeSpeed: 200,
  trickleSpeed: 800,
  container: 'progressBarLoader'
};
/* harmony default export */ __webpack_exports__["default"] = (PageTopProgressBar);

var _c;

$RefreshReg$(_c, "PageTopProgressBar");

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

/***/ "./node_modules/next/config.js":
/*!*************************************!*\
  !*** ./node_modules/next/config.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/next-server/lib/runtime-config */ "./node_modules/next/dist/next-server/lib/runtime-config.js")


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/runtime-config.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/runtime-config.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.setConfig = setConfig;
exports["default"] = void 0;
var runtimeConfig;

var _default = function _default() {
  return runtimeConfig;
};

exports["default"] = _default;

function setConfig(configValue) {
  runtimeConfig = configValue;
}

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hdG9tcy9wcm9ncmVzc2JhcnMvUGFnZVRvcFByb2dyZXNzQmFyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9jb25maWcuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcnVudGltZS1jb25maWcudHMiXSwibmFtZXMiOlsiZ2V0Q29uZmlnIiwicHVibGljUnVudGltZUNvbmZpZyIsInRpbWVyIiwic3RhdGUiLCJhY3RpdmVSZXF1ZXN0cyIsImRlbGF5IiwibG9hZCIsInNldFRpbWVvdXQiLCJOUHJvZ3Jlc3MiLCJzdGFydCIsInN0b3AiLCJjbGVhclRpbWVvdXQiLCJkb25lIiwiY29uZmlndXJlIiwic2hvd1NwaW5uZXIiLCJOUHJvZ3Jlc3NTaG93U3Bpbm5lciIsInNldHRpbmdzIiwibWluaW11bSIsImVhc2luZyIsInBvc2l0aW9uVXNpbmciLCJzcGVlZCIsInRyaWNrbGUiLCJ0cmlja2xlU3BlZWQiLCJiYXJTZWxlY3RvciIsInNwaW5uZXJTZWxlY3RvciIsInBhcmVudCIsInRlbXBsYXRlIiwiUm91dGVyIiwib25Sb3V0ZUNoYW5nZVN0YXJ0Iiwib25Sb3V0ZUNoYW5nZUNvbXBsZXRlIiwib25Sb3V0ZUNoYW5nZUVycm9yIiwiUGFnZVRvcFByb2dyZXNzQmFyIiwiY29udGFpbmVyIiwicGVyY2VudGFnZSIsImVhc2VTcGVlZCIsImVhc2UiLCJwcm9wVHlwZXMiLCJudW1iZXIiLCJzdHJpbmciLCJkZWZhdWx0VHlwZXMiLCJydW50aW1lQ29uZmlnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7aUJBRWdDQSxr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QUF1Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQWhFOztlQUVlLFMsUUFBQSxHQUFNO0FBQ25COzs7OztBQUdLLGdDQUEyQztBQUNoRFMsZUFBYSxHQUFiQTtBQUNEIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvMS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBQcm9ncmVzcyBCYXIgTG9hZGVyIGZvciBQYWdlc1xyXG4gKiBTb21ldGltZXMgd2hlbiBuYXZpZ2F0aW5nIGJldHdlZW4gcGFnZXMsIE5leHQuanMgbmVlZHMgdG8gZG93bmxvYWRcclxuICogcGFnZXMoY2h1bmtzKSBmcm9tIHRoZSBzZXJ2ZXIgYmVmb3JlIHJlbmRlcmluZyB0aGUgcGFnZSwgYW5kIG1heVxyXG4gKiBuZWVkIHRvIHdhaXQgZm9yIHRoZSBkYXRhLiBEdXJpbmcgdGhpcyB0aW1lIHRoZSBicm93c2VyIG1pZ2h0IGJlIG5vbiByZXNwb25zaXZlLlxyXG4gKlxyXG4gKiBTbyB3aWxsIHNob3cgYSBQYWdlIExvYWRlclxyXG4gKlxyXG4gKiBVc2VzIE5Qcm9ncmVzcyBucG1cclxuICogQHNlZTogaHR0cHM6Ly93d3cubnBtanMuY29tL3BhY2thZ2UvbnByb2dyZXNzXHJcbiAqIGNvbmZpZyBoZXJlOiBodHRwczovL2dpdGh1Yi5jb20vcnN0YWNydXovbnByb2dyZXNzL2Jsb2IvbWFzdGVyL25wcm9ncmVzcy5qcyNMMzFcclxuICpcclxuICovXHJcbmltcG9ydCB7IHN0cmluZywgbnVtYmVyIH0gZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5pbXBvcnQgZ2V0Q29uZmlnIGZyb20gJ25leHQvY29uZmlnJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBOUHJvZ3Jlc3MgZnJvbSAnbnByb2dyZXNzJztcclxuXHJcbmNvbnN0IHsgcHVibGljUnVudGltZUNvbmZpZyB9ID0gZ2V0Q29uZmlnKCk7XHJcblxyXG5sZXQgdGltZXI7XHJcbmxldCBzdGF0ZTtcclxubGV0IGFjdGl2ZVJlcXVlc3RzID0gMDtcclxuY29uc3QgZGVsYXkgPSAyNTA7XHJcblxyXG5mdW5jdGlvbiBsb2FkKCkge1xyXG4gIGlmIChzdGF0ZSA9PT0gJ2xvYWRpbmcnKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBzdGF0ZSA9ICdsb2FkaW5nJztcclxuXHJcbiAgdGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgIE5Qcm9ncmVzcy5zdGFydCgpO1xyXG4gIH0sIGRlbGF5KTsgLy8gb25seSBzaG93IHByb2dyZXNzIGJhciBpZiBpdCB0YWtlcyBsb25nZXIgdGhhbiB0aGUgZGVsYXlcclxufVxyXG5cclxuZnVuY3Rpb24gc3RvcCgpIHtcclxuICBpZiAoYWN0aXZlUmVxdWVzdHMgPiAwKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBzdGF0ZSA9ICdzdG9wJztcclxuXHJcbiAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcclxuICBOUHJvZ3Jlc3MuZG9uZSgpO1xyXG59XHJcblxyXG5OUHJvZ3Jlc3MuY29uZmlndXJlKHsgc2hvd1NwaW5uZXI6IHB1YmxpY1J1bnRpbWVDb25maWcuTlByb2dyZXNzU2hvd1NwaW5uZXIgfSk7XHJcblxyXG5OUHJvZ3Jlc3Muc2V0dGluZ3MgPSB7XHJcbiAgbWluaW11bTogMC4wOCxcclxuICBlYXNpbmc6ICdsaW5lYXInLFxyXG4gIHBvc2l0aW9uVXNpbmc6ICcnLFxyXG4gIHNwZWVkOiAyMDAsXHJcbiAgdHJpY2tsZTogdHJ1ZSxcclxuICB0cmlja2xlU3BlZWQ6IDIwMCxcclxuICBzaG93U3Bpbm5lcjogdHJ1ZSxcclxuICBiYXJTZWxlY3RvcjogJ1tyb2xlPVwiYmFyXCJdJyxcclxuICBzcGlubmVyU2VsZWN0b3I6ICdbcm9sZT1cInNwaW5uZXJcIl0nLFxyXG4gIHBhcmVudDogJ2JvZHknLFxyXG4gIHRlbXBsYXRlOlxyXG4gICAgJzxkaXYgY2xhc3M9XCJiYXJcIiBjbGFzc05hbWU9XCJtci01XCIgcm9sZT1cImJhclwiPjxkaXYgY2xhc3M9XCJwZWdcIj48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPVwic3Bpbm5lclwiIHJvbGU9XCJzcGlubmVyXCI+PGRpdiBjbGFzcz1cInNwaW5uZXItaWNvblwiPjwvZGl2PjwvZGl2PicsXHJcbn07XHJcblxyXG5Sb3V0ZXIub25Sb3V0ZUNoYW5nZVN0YXJ0ID0gKCkgPT4ge1xyXG4gIC8vIGNvbnNvbGUubG9nKCdvblJvdXRlQ2hhbmdlU3RhcnQgdHJpZ2dlcmVkJyk7XHJcbiAgbG9hZCgpO1xyXG59O1xyXG5cclxuUm91dGVyLm9uUm91dGVDaGFuZ2VDb21wbGV0ZSA9ICgpID0+IHtcclxuICAvLyBjb25zb2xlLmxvZygnb25Sb3V0ZUNoYW5nZUNvbXBsZXRlIHRyaWdnZXJlZCcpO1xyXG4gIHN0b3AoKTtcclxufTtcclxuXHJcblJvdXRlci5vblJvdXRlQ2hhbmdlRXJyb3IgPSAoKSA9PiB7XHJcbiAgLy8gY29uc29sZS5sb2coJ29uUm91dGVDaGFuZ2VFcnJvciB0cmlnZ2VyZWQnKTtcclxuICBzdG9wKCk7XHJcbn07XHJcblxyXG5jb25zdCBQYWdlVG9wUHJvZ3Jlc3NCYXIgPSAoeyBjb250YWluZXIsIHBlcmNlbnRhZ2UsIGVhc2VTcGVlZCwgdHJpY2tsZVNwZWVkIH0pID0+IHtcclxuICAvLyAgIGlmIChjb250YWluZXIgIT09ICdkZWZhdWx0Jykge1xyXG4gIC8vICAgICBOUHJvZ3Jlc3MuY29uZmlndXJlKHsgcGFyZW50OiBgIyR7Y29udGFpbmVyfWAgfSk7XHJcbiAgLy8gICB9XHJcbiAgLy8gICBOUHJvZ3Jlc3Muc2V0KHsgcGVyY2VudGFnZSB9KTtcclxuICBOUHJvZ3Jlc3MuY29uZmlndXJlKHsgZWFzZTogJ2Vhc2UnLCBzcGVlZDogeyBzcGVlZDogZWFzZVNwZWVkIH0gfSk7XHJcbiAgTlByb2dyZXNzLmNvbmZpZ3VyZSh7IHRyaWNrbGVTcGVlZDogeyB0cmlja2xlU3BlZWQgfSB9KTtcclxuICByZXR1cm4gbnVsbDtcclxufTtcclxuXHJcblBhZ2VUb3BQcm9ncmVzc0Jhci5wcm9wVHlwZXMgPSB7XHJcbiAgLyoqIFRvIHNldCBhIHByb2dyZXNzIHBlcmNlbnRhZ2UsIGNhbGwgLnNldChuKSwgd2hlcmUgbiBpcyBhIG51bWJlciBiZXR3ZWVuIDAuLjEgKi9cclxuICBwZXJjZW50YWdlOiBudW1iZXIsXHJcbiAgLyoqIEFkanVzdCBhbmltYXRpb24gc2V0dGluZ3MgdXNpbmcgZWFzaW5nIChhIENTUyBlYXNpbmcgc3RyaW5nKSBhbmQgc3BlZWQgKGluIG1zKS4gKGRlZmF1bHQ6IGVhc2UgYW5kIDIwMCkgKi9cclxuICBlYXNlU3BlZWQ6IG51bWJlcixcclxuICAvKiogQWRqdXN0IGhvdyBvZnRlbiB0byB0cmlja2xlL2luY3JlbWVudCwgaW4gbXMuICovXHJcbiAgdHJpY2tsZVNwZWVkOiBudW1iZXIsXHJcbiAgLyoqIFNwZWNpZnkgUGFyZW50IENvbnRhaW5lciwgZGVmYXVsdCBpcyBcIkJvZHlcIiAqL1xyXG4gIGNvbnRhaW5lcjogc3RyaW5nLFxyXG59O1xyXG5cclxuUGFnZVRvcFByb2dyZXNzQmFyLmRlZmF1bHRUeXBlcyA9IHtcclxuICBwZXJjZW50YWdlOiAwLjQsXHJcbiAgZWFzZVNwZWVkOiAyMDAsXHJcbiAgdHJpY2tsZVNwZWVkOiA4MDAsXHJcbiAgY29udGFpbmVyOiAncHJvZ3Jlc3NCYXJMb2FkZXInLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnZVRvcFByb2dyZXNzQmFyO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9uZXh0LXNlcnZlci9saWIvcnVudGltZS1jb25maWcnKVxuIiwibGV0IHJ1bnRpbWVDb25maWc6IGFueVxuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIHJldHVybiBydW50aW1lQ29uZmlnXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRDb25maWcoY29uZmlnVmFsdWU6IGFueSk6IHZvaWQge1xuICBydW50aW1lQ29uZmlnID0gY29uZmlnVmFsdWVcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=