webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");





var Index = function Index(_ref) {
  var counter = _ref.counter,
      username = _ref.username;
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
    next_router__WEBPACK_IMPORTED_MODULE_2___default.a.events.on(event, makeEvent(event));
  });

  function gotoTestB() {
    next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push({
      pathname: '/test/b',
      query: {
        id: 2
      }
    }, '/test/b/2');
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Count: ", counter), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, "Username: ", username));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(function mapStateToProps(state) {
  return {
    counter: state.counter.count,
    username: state.user.username
  };
}, function mapDispatchToProps(dispatch) {})(Index));

/***/ })

})
//# sourceMappingURL=index.js.e4593d8a91c571f8f009.hot-update.js.map