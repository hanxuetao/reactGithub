webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/button/style/css */ "./node_modules/antd/lib/button/style/css.js");
/* harmony import */ var antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/button */ "./node_modules/antd/lib/button/index.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);





/* harmony default export */ __webpack_exports__["default"] = (function () {
  var events = ['routeChangeStart', 'routeChangeComplete', 'routeChangeError', 'beforeHistoryChange', 'hashChangeStart', 'hashChangeComplete'];

  function makeEvent(type) {
    return function () {
      var _console;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      (_console = console).log.apply(_console, [type].concat(args));
    };
  }

  events.forEach(function (event) {
    next_router__WEBPACK_IMPORTED_MODULE_4___default.a.events.on(event, makeEvent(event));
  });

  function gotoTestB() {
    next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push({
      pathname: '/test/b',
      query: {
        id: 2
      }
    }, '/test/b/2');
  }

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/a?id=1",
    as: "/a/1"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, null, "Go Page A")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
    onClick: gotoTestB
  }, "Go Page B"));
});

/***/ })

})
//# sourceMappingURL=index.js.0530ee8be7acc5822f08.hot-update.js.map