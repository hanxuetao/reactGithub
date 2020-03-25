webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./lib/withRedux.js":
/*!**************************!*\
  !*** ./lib/withRedux.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/store */ "./store/store.js");




var isServer = typeof window === 'undefined';
var __NEXT_REDUX_STORE__ = '__NEXT_REDUX_STORE__';

function getOrCreateStore(initialState) {
  if (isServer) {
    return create;
  }
}

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

  TestHocComp.getInitialProps = Comp.getInitialProps; //if the hoc package the component, the hoc should inherit getInitialProps from the Component

  return TestHocComp;
});

/***/ })

})
//# sourceMappingURL=_app.js.68fcdd875f1e5365ad08.hot-update.js.map