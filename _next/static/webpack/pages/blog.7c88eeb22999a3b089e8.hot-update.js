webpackHotUpdate_N_E("pages/blog",{

/***/ "./components/atoms/cards/BlogTopicImageCard.js":
/*!******************************************************!*\
  !*** ./components/atoms/cards/BlogTopicImageCard.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_StaticImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/StaticImage */ "./components/atoms/images/StaticImage.js");



var _jsxFileName = "D:\\WorkArea\\GitHub\\dtro-devuk-website-nextjs\\components\\atoms\\cards\\BlogTopicImageCard.js",
    _this = undefined;





var BlogTopicImageCard = function BlogTopicImageCard(_ref) {
  var backgroundImage = _ref.backgroundImage,
      imageAlt = _ref.imageAlt,
      metaData = _ref.metaData;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "relative h-64 border-2 shadow rounded-xl bg-brandMain border-accent2",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "py-1 border-b-4 bg-accents2 rounded-tl-xl rounded-tr-xl border-accent2",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "items-center justify-center w-full p-2 mx-auto my-auto text-2xl font-black text-accent2",
          children: [metaData.topic, " Blog"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "relative h-48 ",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "bg-center bg-no-repeat bg-cover",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            alt: imageAlt,
            src: backgroundImage,
            layoutFill: true,
            className: "w-full rounded-bl-lg rounded-br-lg opacity-90 z-1 object-fit: cover"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "flex justify-center w-full h-10 text-2xl bg-transparent border-0 md:text-6xl text-accent2 border-accent2",
      children: "..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_c = BlogTopicImageCard;
BlogTopicImageCard.propTypes = {
  /** Specify the main background image */
  backgroundImage: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"].isRequired,

  /** Specify the alt for the main background image */
  imageAlt: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"].isRequired,

  /** Specify the blogs meta data or subtitle */
  metaData: Object(prop_types__WEBPACK_IMPORTED_MODULE_2__["shape"])({
    /**Specify the Bog Title */
    title: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"].isRequired,

    /**Specify the Bog Sub */
    subTitle: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"].isRequired,

    /**Specify the Blog Topic */
    topic: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"].isRequired,

    /**Specify the Bog CTA */
    cta: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"].isRequired,

    /**Specify the Bog Intro  */
    intro: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"].isRequired,

    /**Specify the Bog Glyphs  */
    glyphBar: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"].isRequired,

    /**Specify the Bog url */
    url: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"].isRequired
  })
};
BlogTopicImageCard.defaultProps = {};
/* harmony default export */ __webpack_exports__["default"] = (BlogTopicImageCard);

var _c;

$RefreshReg$(_c, "BlogTopicImageCard");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hdG9tcy9jYXJkcy9CbG9nVG9waWNJbWFnZUNhcmQuanMiXSwibmFtZXMiOlsiQmxvZ1RvcGljSW1hZ2VDYXJkIiwiYmFja2dyb3VuZEltYWdlIiwiaW1hZ2VBbHQiLCJtZXRhRGF0YSIsInRvcGljIiwicHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsInNoYXBlIiwidGl0bGUiLCJzdWJUaXRsZSIsImN0YSIsImludHJvIiwiZ2x5cGhCYXIiLCJ1cmwiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLE9BQTZDO0FBQUEsTUFBMUNDLGVBQTBDLFFBQTFDQSxlQUEwQztBQUFBLE1BQXpCQyxRQUF5QixRQUF6QkEsUUFBeUI7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7QUFDdEUsc0JBQ0U7QUFBQSw0QkFDRTtBQUFLLGVBQVMsRUFBQyxzRUFBZjtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBQyx3RUFBZjtBQUFBLCtCQUNFO0FBQUssbUJBQVMsRUFBQyx5RkFBZjtBQUFBLHFCQUNHQSxRQUFRLENBQUNDLEtBRFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBTUU7QUFBSyxpQkFBUyxFQUFDLGdCQUFmO0FBQUEsK0JBQ0U7QUFBSyxtQkFBUyxFQUFDLGlDQUFmO0FBQUEsaUNBQ0U7QUFDRSxlQUFHLEVBQUVGLFFBRFA7QUFFRSxlQUFHLEVBQUVELGVBRlA7QUFHRSxzQkFBVSxFQUFFLElBSGQ7QUFJRSxxQkFBUyxFQUFDO0FBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUF5QkU7QUFBSyxlQUFTLEVBQUMsMEdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF6QkY7QUFBQSxrQkFERjtBQStCRCxDQWhDRDs7S0FBTUQsa0I7QUFrQ05BLGtCQUFrQixDQUFDSyxTQUFuQixHQUErQjtBQUM3QjtBQUNBSixpQkFBZSxFQUFFSyxpREFBTSxDQUFDQyxVQUZLOztBQUc3QjtBQUNBTCxVQUFRLEVBQUVJLGlEQUFNLENBQUNDLFVBSlk7O0FBSzdCO0FBQ0FKLFVBQVEsRUFBRUssd0RBQUssQ0FBQztBQUNkO0FBQ0FDLFNBQUssRUFBRUgsaURBQU0sQ0FBQ0MsVUFGQTs7QUFHZDtBQUNBRyxZQUFRLEVBQUVKLGlEQUFNLENBQUNDLFVBSkg7O0FBS2Q7QUFDQUgsU0FBSyxFQUFFRSxpREFBTSxDQUFDQyxVQU5BOztBQU9kO0FBQ0FJLE9BQUcsRUFBRUwsaURBQU0sQ0FBQ0MsVUFSRTs7QUFTZDtBQUNBSyxTQUFLLEVBQUVOLGlEQUFNLENBQUNDLFVBVkE7O0FBV2Q7QUFDQU0sWUFBUSxFQUFFUCxpREFBTSxDQUFDQyxVQVpIOztBQWFkO0FBQ0FPLE9BQUcsRUFBRVIsaURBQU0sQ0FBQ0M7QUFkRSxHQUFEO0FBTmMsQ0FBL0I7QUF3QkFQLGtCQUFrQixDQUFDZSxZQUFuQixHQUFrQyxFQUFsQztBQUVlZixpRkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9ibG9nLjdjODhlZWIyMjk5OWEzYjA4OWU4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBzdHJpbmcsIHNoYXBlIH0gZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBTdGF0aWNJbWFnZSBmcm9tICcuLi9pbWFnZXMvU3RhdGljSW1hZ2UnO1xyXG5cclxuY29uc3QgQmxvZ1RvcGljSW1hZ2VDYXJkID0gKHsgYmFja2dyb3VuZEltYWdlLCBpbWFnZUFsdCwgbWV0YURhdGEgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGgtNjQgYm9yZGVyLTIgc2hhZG93IHJvdW5kZWQteGwgYmctYnJhbmRNYWluIGJvcmRlci1hY2NlbnQyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS0xIGJvcmRlci1iLTQgYmctYWNjZW50czIgcm91bmRlZC10bC14bCByb3VuZGVkLXRyLXhsIGJvcmRlci1hY2NlbnQyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB3LWZ1bGwgcC0yIG14LWF1dG8gbXktYXV0byB0ZXh0LTJ4bCBmb250LWJsYWNrIHRleHQtYWNjZW50MlwiPlxyXG4gICAgICAgICAgICB7bWV0YURhdGEudG9waWN9IEJsb2dcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgaC00OCBcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctY2VudGVyIGJnLW5vLXJlcGVhdCBiZy1jb3ZlclwiPlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgYWx0PXtpbWFnZUFsdH1cclxuICAgICAgICAgICAgICBzcmM9e2JhY2tncm91bmRJbWFnZX1cclxuICAgICAgICAgICAgICBsYXlvdXRGaWxsPXt0cnVlfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCByb3VuZGVkLWJsLWxnIHJvdW5kZWQtYnItbGcgb3BhY2l0eS05MCB6LTEgb2JqZWN0LWZpdDogY292ZXJcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICB7LyogPFN0YXRpY0ltYWdlXHJcbiAgICAgICAgICAgICAgYWx0PXtpbWFnZUFsdH1cclxuICAgICAgICAgICAgICBzcmM9e2JhY2tncm91bmRJbWFnZX1cclxuICAgICAgICAgICAgICBsYXlvdXRGaWxsPXt0cnVlfVxyXG4gICAgICAgICAgICAgIHF1YWxpdHk9ezUwfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtYmwtbGcgcm91bmRlZC1ici1sZyBvcGFjaXR5LTcwIHotMVwiXHJcbiAgICAgICAgICAgIC8+ICovfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgdy1mdWxsIGgtMTAgdGV4dC0yeGwgYmctdHJhbnNwYXJlbnQgYm9yZGVyLTAgbWQ6dGV4dC02eGwgdGV4dC1hY2NlbnQyIGJvcmRlci1hY2NlbnQyXCI+XHJcbiAgICAgICAgLi4uXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbkJsb2dUb3BpY0ltYWdlQ2FyZC5wcm9wVHlwZXMgPSB7XHJcbiAgLyoqIFNwZWNpZnkgdGhlIG1haW4gYmFja2dyb3VuZCBpbWFnZSAqL1xyXG4gIGJhY2tncm91bmRJbWFnZTogc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgLyoqIFNwZWNpZnkgdGhlIGFsdCBmb3IgdGhlIG1haW4gYmFja2dyb3VuZCBpbWFnZSAqL1xyXG4gIGltYWdlQWx0OiBzdHJpbmcuaXNSZXF1aXJlZCxcclxuICAvKiogU3BlY2lmeSB0aGUgYmxvZ3MgbWV0YSBkYXRhIG9yIHN1YnRpdGxlICovXHJcbiAgbWV0YURhdGE6IHNoYXBlKHtcclxuICAgIC8qKlNwZWNpZnkgdGhlIEJvZyBUaXRsZSAqL1xyXG4gICAgdGl0bGU6IHN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgLyoqU3BlY2lmeSB0aGUgQm9nIFN1YiAqL1xyXG4gICAgc3ViVGl0bGU6IHN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgLyoqU3BlY2lmeSB0aGUgQmxvZyBUb3BpYyAqL1xyXG4gICAgdG9waWM6IHN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgLyoqU3BlY2lmeSB0aGUgQm9nIENUQSAqL1xyXG4gICAgY3RhOiBzdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgIC8qKlNwZWNpZnkgdGhlIEJvZyBJbnRybyAgKi9cclxuICAgIGludHJvOiBzdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgIC8qKlNwZWNpZnkgdGhlIEJvZyBHbHlwaHMgICovXHJcbiAgICBnbHlwaEJhcjogc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICAvKipTcGVjaWZ5IHRoZSBCb2cgdXJsICovXHJcbiAgICB1cmw6IHN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIH0pLFxyXG59O1xyXG5cclxuQmxvZ1RvcGljSW1hZ2VDYXJkLmRlZmF1bHRQcm9wcyA9IHt9O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmxvZ1RvcGljSW1hZ2VDYXJkO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9