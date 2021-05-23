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
          className: "bg-center",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            alt: imageAlt,
            src: backgroundImage,
            width: "100%",
            height: "100%",
            className: "object-fill border-2 border-pink-500 rounded-bl-lg rounded-br-lg opacity-90 z-1"
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
      lineNumber: 33,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hdG9tcy9jYXJkcy9CbG9nVG9waWNJbWFnZUNhcmQuanMiXSwibmFtZXMiOlsiQmxvZ1RvcGljSW1hZ2VDYXJkIiwiYmFja2dyb3VuZEltYWdlIiwiaW1hZ2VBbHQiLCJtZXRhRGF0YSIsInRvcGljIiwicHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsInNoYXBlIiwidGl0bGUiLCJzdWJUaXRsZSIsImN0YSIsImludHJvIiwiZ2x5cGhCYXIiLCJ1cmwiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLE9BQTZDO0FBQUEsTUFBMUNDLGVBQTBDLFFBQTFDQSxlQUEwQztBQUFBLE1BQXpCQyxRQUF5QixRQUF6QkEsUUFBeUI7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7QUFDdEUsc0JBQ0U7QUFBQSw0QkFDRTtBQUFLLGVBQVMsRUFBQyxzRUFBZjtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBQyx3RUFBZjtBQUFBLCtCQUNFO0FBQUssbUJBQVMsRUFBQyx5RkFBZjtBQUFBLHFCQUNHQSxRQUFRLENBQUNDLEtBRFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBTUU7QUFBSyxpQkFBUyxFQUFDLGdCQUFmO0FBQUEsK0JBQ0U7QUFBSyxtQkFBUyxFQUFDLFdBQWY7QUFBQSxpQ0FDRTtBQUNFLGVBQUcsRUFBRUYsUUFEUDtBQUVFLGVBQUcsRUFBRUQsZUFGUDtBQUdFLGlCQUFLLEVBQUMsTUFIUjtBQUlFLGtCQUFNLEVBQUMsTUFKVDtBQUtFLHFCQUFTLEVBQUM7QUFMWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQTBCRTtBQUFLLGVBQVMsRUFBQywwR0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQTFCRjtBQUFBLGtCQURGO0FBZ0NELENBakNEOztLQUFNRCxrQjtBQW1DTkEsa0JBQWtCLENBQUNLLFNBQW5CLEdBQStCO0FBQzdCO0FBQ0FKLGlCQUFlLEVBQUVLLGlEQUFNLENBQUNDLFVBRks7O0FBRzdCO0FBQ0FMLFVBQVEsRUFBRUksaURBQU0sQ0FBQ0MsVUFKWTs7QUFLN0I7QUFDQUosVUFBUSxFQUFFSyx3REFBSyxDQUFDO0FBQ2Q7QUFDQUMsU0FBSyxFQUFFSCxpREFBTSxDQUFDQyxVQUZBOztBQUdkO0FBQ0FHLFlBQVEsRUFBRUosaURBQU0sQ0FBQ0MsVUFKSDs7QUFLZDtBQUNBSCxTQUFLLEVBQUVFLGlEQUFNLENBQUNDLFVBTkE7O0FBT2Q7QUFDQUksT0FBRyxFQUFFTCxpREFBTSxDQUFDQyxVQVJFOztBQVNkO0FBQ0FLLFNBQUssRUFBRU4saURBQU0sQ0FBQ0MsVUFWQTs7QUFXZDtBQUNBTSxZQUFRLEVBQUVQLGlEQUFNLENBQUNDLFVBWkg7O0FBYWQ7QUFDQU8sT0FBRyxFQUFFUixpREFBTSxDQUFDQztBQWRFLEdBQUQ7QUFOYyxDQUEvQjtBQXdCQVAsa0JBQWtCLENBQUNlLFlBQW5CLEdBQWtDLEVBQWxDO0FBRWVmLGlGQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Jsb2cuNGNjYTI1OGRkYzZhMmIxYWRiNWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHN0cmluZywgc2hhcGUgfSBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IFN0YXRpY0ltYWdlIGZyb20gJy4uL2ltYWdlcy9TdGF0aWNJbWFnZSc7XHJcblxyXG5jb25zdCBCbG9nVG9waWNJbWFnZUNhcmQgPSAoeyBiYWNrZ3JvdW5kSW1hZ2UsIGltYWdlQWx0LCBtZXRhRGF0YSB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgaC02NCBib3JkZXItMiBzaGFkb3cgcm91bmRlZC14bCBiZy1icmFuZE1haW4gYm9yZGVyLWFjY2VudDJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTEgYm9yZGVyLWItNCBiZy1hY2NlbnRzMiByb3VuZGVkLXRsLXhsIHJvdW5kZWQtdHIteGwgYm9yZGVyLWFjY2VudDJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHctZnVsbCBwLTIgbXgtYXV0byBteS1hdXRvIHRleHQtMnhsIGZvbnQtYmxhY2sgdGV4dC1hY2NlbnQyXCI+XHJcbiAgICAgICAgICAgIHttZXRhRGF0YS50b3BpY30gQmxvZ1xyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBoLTQ4IFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgIGFsdD17aW1hZ2VBbHR9XHJcbiAgICAgICAgICAgICAgc3JjPXtiYWNrZ3JvdW5kSW1hZ2V9XHJcbiAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcclxuICAgICAgICAgICAgICBoZWlnaHQ9XCIxMDAlXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvYmplY3QtZmlsbCBib3JkZXItMiBib3JkZXItcGluay01MDAgcm91bmRlZC1ibC1sZyByb3VuZGVkLWJyLWxnIG9wYWNpdHktOTAgei0xXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgey8qIDxTdGF0aWNJbWFnZVxyXG4gICAgICAgICAgICAgIGFsdD17aW1hZ2VBbHR9XHJcbiAgICAgICAgICAgICAgc3JjPXtiYWNrZ3JvdW5kSW1hZ2V9XHJcbiAgICAgICAgICAgICAgbGF5b3V0RmlsbD17dHJ1ZX1cclxuICAgICAgICAgICAgICBxdWFsaXR5PXs1MH1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWJsLWxnIHJvdW5kZWQtYnItbGcgb3BhY2l0eS03MCB6LTFcIlxyXG4gICAgICAgICAgICAvPiAqL31cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIHctZnVsbCBoLTEwIHRleHQtMnhsIGJnLXRyYW5zcGFyZW50IGJvcmRlci0wIG1kOnRleHQtNnhsIHRleHQtYWNjZW50MiBib3JkZXItYWNjZW50MlwiPlxyXG4gICAgICAgIC4uLlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5CbG9nVG9waWNJbWFnZUNhcmQucHJvcFR5cGVzID0ge1xyXG4gIC8qKiBTcGVjaWZ5IHRoZSBtYWluIGJhY2tncm91bmQgaW1hZ2UgKi9cclxuICBiYWNrZ3JvdW5kSW1hZ2U6IHN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIC8qKiBTcGVjaWZ5IHRoZSBhbHQgZm9yIHRoZSBtYWluIGJhY2tncm91bmQgaW1hZ2UgKi9cclxuICBpbWFnZUFsdDogc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgLyoqIFNwZWNpZnkgdGhlIGJsb2dzIG1ldGEgZGF0YSBvciBzdWJ0aXRsZSAqL1xyXG4gIG1ldGFEYXRhOiBzaGFwZSh7XHJcbiAgICAvKipTcGVjaWZ5IHRoZSBCb2cgVGl0bGUgKi9cclxuICAgIHRpdGxlOiBzdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgIC8qKlNwZWNpZnkgdGhlIEJvZyBTdWIgKi9cclxuICAgIHN1YlRpdGxlOiBzdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgIC8qKlNwZWNpZnkgdGhlIEJsb2cgVG9waWMgKi9cclxuICAgIHRvcGljOiBzdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgIC8qKlNwZWNpZnkgdGhlIEJvZyBDVEEgKi9cclxuICAgIGN0YTogc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICAvKipTcGVjaWZ5IHRoZSBCb2cgSW50cm8gICovXHJcbiAgICBpbnRybzogc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICAvKipTcGVjaWZ5IHRoZSBCb2cgR2x5cGhzICAqL1xyXG4gICAgZ2x5cGhCYXI6IHN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgLyoqU3BlY2lmeSB0aGUgQm9nIHVybCAqL1xyXG4gICAgdXJsOiBzdHJpbmcuaXNSZXF1aXJlZCxcclxuICB9KSxcclxufTtcclxuXHJcbkJsb2dUb3BpY0ltYWdlQ2FyZC5kZWZhdWx0UHJvcHMgPSB7fTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJsb2dUb3BpY0ltYWdlQ2FyZDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==