webpackHotUpdate("static/development/pages/a.js",{

/***/ "./pages/a.js":
/*!********************!*\
  !*** ./pages/a.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/date/now */ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next-server/dist/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/config */ "./node_modules/next-server/dist/lib/runtime-config.js");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_12__);













var Comp = next_dynamic__WEBPACK_IMPORTED_MODULE_7___default()(function () {
  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ../components/comp */ "./components/comp.jsx"));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ../components/comp */ "./components/comp.jsx")];
    },
    modules: ['../components/comp']
  }
}); // component Comp will be the async component

var _getConfig = next_config__WEBPACK_IMPORTED_MODULE_8___default()(),
    serverRuntimeConfig = _getConfig.serverRuntimeConfig,
    publicRuntimeConfig = _getConfig.publicRuntimeConfig;

var Title = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].h1.withConfig({
  displayName: "a__Title",
  componentId: "sc-2f58lj-0"
})(["color:yellow;font-size:40px;"]);

var A = function A(_ref) {
  var router = _ref.router,
      name = _ref.name,
      time = _ref.time;
  console.log(serverRuntimeConfig, publicRuntimeConfig);
  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Title, null, "This is title ", time), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Comp, null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
    href: "#aaa"
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
    className: "jsx-3318764992" + " " + "link"
  }, "A ", router.query.id, " ", name, " ", process.env.customKey)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a, {
    id: "2249269547"
  }, "a.jsx-3318764992{color:blue;}.link.jsx-3318764992{color:red;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy94dWV0YW9oYW4vRGVza3RvcC9yZWFjdEdpdGh1Yi1tYXN0ZXIvcGFnZXMvYS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErQmlCLEFBR3dCLEFBR0QsVUFDVixDQUhBIiwiZmlsZSI6Ii9Vc2Vycy94dWV0YW9oYW4vRGVza3RvcC9yZWFjdEdpdGh1Yi1tYXN0ZXIvcGFnZXMvYS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7d2l0aFJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgZHluYW1pYyAgZnJvbSAnbmV4dC9keW5hbWljJ1xuaW1wb3J0IGdldENvbmZpZyBmcm9tICduZXh0L2NvbmZpZydcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCdcbmltcG9ydCB7QnV0dG9ufSBmcm9tIFwiYW50ZFwiXG5cbmNvbnN0IENvbXAgPSBkeW5hbWljKGltcG9ydCgnLi4vY29tcG9uZW50cy9jb21wJykpIC8vIGNvbXBvbmVudCBDb21wIHdpbGwgYmUgdGhlIGFzeW5jIGNvbXBvbmVudFxuXG5jb25zdCB7c2VydmVyUnVudGltZUNvbmZpZywgcHVibGljUnVudGltZUNvbmZpZ30gPSBnZXRDb25maWcoKVxuXG5jb25zdCBUaXRsZSA9IHN0eWxlZC5oMWBcbiAgICBjb2xvcjogeWVsbG93O1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbmBcblxuY29uc3QgQSA9ICh7cm91dGVyLCBuYW1lLCB0aW1lfSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKHNlcnZlclJ1bnRpbWVDb25maWcsIHB1YmxpY1J1bnRpbWVDb25maWcpXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPFRpdGxlPlRoaXMgaXMgdGl0bGUge3RpbWV9PC9UaXRsZT5cbiAgICAgICAgICAgIDxDb21wIC8+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiI2FhYVwiPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImxpbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgQSB7cm91dGVyLnF1ZXJ5LmlkfSB7bmFtZX0ge3Byb2Nlc3MuZW52LmN1c3RvbUtleX1cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAgICAgIHtgXG4gICAgICAgICAgICBhIHtcbiAgICAgICAgICAgIGNvbG9yOiBibHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmxpbmsge1xuICAgICAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9XG4gICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XG4gICAgICAgICAgICAgICAge2BcbiAgICAgICAgICAgICBhIHtcbiAgICAgICAgICAgIGNvbG9yOiByZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBgfVxuICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5BLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBtb21lbnQgPSBhd2FpdCBpbXBvcnQoJ21vbWVudCcpIC8vaW1wb3J0IG1vZHVsZSAnbW9tZW50JyBub3QgYXMgZGVmYXVsdFxuICAgIGNvbnN0IHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHJlc29sdmUoe1xuICAgICAgICAgICAgICAgIG5hbWU6ICdoZWxsbycsXG4gICAgICAgICAgICAgICAgdGltZTogbW9tZW50LmRlZmF1bHQoRGF0ZS5ub3coKSAtIDYwICogMTAwMCkuZnJvbU5vdygpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9LCAxMDAwKVxuICAgIH0pXG4gICAgcmV0dXJuIGF3YWl0IHByb21pc2Vcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihBKSJdfQ== */\n/*@ sourceURL=/Users/xuetaohan/Desktop/reactGithub-master/pages/a.js */"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a, {
    id: "179154434"
  }, "a{color:red;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy94dWV0YW9oYW4vRGVza3RvcC9yZWFjdEdpdGh1Yi1tYXN0ZXIvcGFnZXMvYS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5Q2lCLEFBR3VCLFVBQ1YiLCJmaWxlIjoiL1VzZXJzL3h1ZXRhb2hhbi9EZXNrdG9wL3JlYWN0R2l0aHViLW1hc3Rlci9wYWdlcy9hLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt3aXRoUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBkeW5hbWljICBmcm9tICduZXh0L2R5bmFtaWMnXG5pbXBvcnQgZ2V0Q29uZmlnIGZyb20gJ25leHQvY29uZmlnJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50J1xuaW1wb3J0IHtCdXR0b259IGZyb20gXCJhbnRkXCJcblxuY29uc3QgQ29tcCA9IGR5bmFtaWMoaW1wb3J0KCcuLi9jb21wb25lbnRzL2NvbXAnKSkgLy8gY29tcG9uZW50IENvbXAgd2lsbCBiZSB0aGUgYXN5bmMgY29tcG9uZW50XG5cbmNvbnN0IHtzZXJ2ZXJSdW50aW1lQ29uZmlnLCBwdWJsaWNSdW50aW1lQ29uZmlnfSA9IGdldENvbmZpZygpXG5cbmNvbnN0IFRpdGxlID0gc3R5bGVkLmgxYFxuICAgIGNvbG9yOiB5ZWxsb3c7XG4gICAgZm9udC1zaXplOiA0MHB4O1xuYFxuXG5jb25zdCBBID0gKHtyb3V0ZXIsIG5hbWUsIHRpbWV9KSA9PiB7XG4gICAgY29uc29sZS5sb2coc2VydmVyUnVudGltZUNvbmZpZywgcHVibGljUnVudGltZUNvbmZpZylcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8VGl0bGU+VGhpcyBpcyB0aXRsZSB7dGltZX08L1RpdGxlPlxuICAgICAgICAgICAgPENvbXAgLz5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjYWFhXCI+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibGlua1wiPlxuICAgICAgICAgICAgICAgICAgICBBIHtyb3V0ZXIucXVlcnkuaWR9IHtuYW1lfSB7cHJvY2Vzcy5lbnYuY3VzdG9tS2V5fVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICAgICAge2BcbiAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgY29sb3I6IGJsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubGluayB7XG4gICAgICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD5cbiAgICAgICAgICAgICAgICB7YFxuICAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9XG4gICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbkEuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IG1vbWVudCA9IGF3YWl0IGltcG9ydCgnbW9tZW50JykgLy9pbXBvcnQgbW9kdWxlICdtb21lbnQnIG5vdCBhcyBkZWZhdWx0XG4gICAgY29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgICAgICAgbmFtZTogJ2hlbGxvJyxcbiAgICAgICAgICAgICAgICB0aW1lOiBtb21lbnQuZGVmYXVsdChEYXRlLm5vdygpIC0gNjAgKiAxMDAwKS5mcm9tTm93KClcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sIDEwMDApXG4gICAgfSlcbiAgICByZXR1cm4gYXdhaXQgcHJvbWlzZVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKEEpIl19 */\n/*@ sourceURL=/Users/xuetaohan/Desktop/reactGithub-master/pages/a.js */"));
};

A.getInitialProps =
/*#__PURE__*/
Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var moment, promise;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! moment */ "./node_modules/moment/moment.js", 7));

        case 2:
          moment = _context.sent;
          //import module 'moment' not as default
          promise = new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default.a(function (resolve) {
            setTimeout(function () {
              resolve({
                name: 'hello',
                time: moment.default(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_1___default()() - 60 * 1000).fromNow()
              });
            }, 1000);
          });
          _context.next = 6;
          return promise;

        case 6:
          return _context.abrupt("return", _context.sent);

        case 7:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));
/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_6__["withRouter"])(A));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ })

})
//# sourceMappingURL=a.js.cb6593eac858ae2c2e7d.hot-update.js.map