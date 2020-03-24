webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store/store */ "./store/store.js");








var Index = function Index(_ref) {
  var counter = _ref.counter,
      username = _ref.username,
      rename = _ref.rename,
      add = _ref.add;
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

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, "Count: ", counter), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", null, "Username: ", username), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    value: username,
    onChange: function onChange(e) {
      return rename(e.target.value);
    }
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    onClick: function onClick() {
      return add(counter);
    }
  }, "ADD"));
};

Index.getInitialProps =
/*#__PURE__*/
function () {
  var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref2) {
    var reduxStore;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            reduxStore = _ref2.reduxStore;
            reduxStore.dispatch(Object(_store_store__WEBPACK_IMPORTED_MODULE_6__["add"])(3));
            return _context.abrupt("return", {});

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref3.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(function mapStateToProps(state) {
  return {
    counter: state.counter.count,
    username: state.user.username
  };
}, function mapDispatchToProps(dispatch) {
  return {
    add: function add(num) {
      return dispatch({
        type: 'ADD',
        num: num
      });
    },
    rename: function rename(name) {
      return dispatch({
        type: 'UPDATE_USERNAME',
        name: name
      });
    }
  };
})(Index));

/***/ })

})
//# sourceMappingURL=index.js.10336e1adff1e426edbf.hot-update.js.map