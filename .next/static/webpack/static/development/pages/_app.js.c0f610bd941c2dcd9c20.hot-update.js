webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./lib/test-hoc.js":
/*!*************************!*\
  !*** ./lib/test-hoc.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = (function (Comp) {
  function TestHocComp(_ref) {
    var Component = _ref.Component,
        pageProps = _ref.pageProps,
        rest = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["Component", "pageProps"]);

    // const name = name + '123'
    console.log(Component, pageProps);

    if (pageProps) {
      pageProps.test = '123';
    }

    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Comp, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      Component: Component,
      pageProps: pageProps
    }, rest));
  }

  TestHocComp.getInitialProps = Comp.getInitialProps;
  return;
});

/***/ })

})
//# sourceMappingURL=_app.js.c0f610bd941c2dcd9c20.hot-update.js.map