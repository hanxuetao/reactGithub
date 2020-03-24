webpackHotUpdate("static/development/pages/index.js",{

/***/ "./store/store.js":
/*!************************!*\
  !*** ./store/store.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");



var initialState = {
  count: 0
};
var userInitialState = {
  username: 'han'
};
var ADD = 'ADD'; // let count = 1 do not change state directly on reducer.

function counterReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  console.log(state, action);

  switch (action.type) {
    case ADD:
      return {
        count: state.count + (action.num || 1)
      };
    //change whole object instead of using state.count + 1, return state

    default:
      return state;
  }
}

var UPDATE_USERNAME = 'UPDATE_USERNAME';

function userReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : userInitialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case UPDATE_USERNAME:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        // keep other attribute same
        username: action.name
      });

    default:
      return state;
  }
}

var allReducer = Object(redux__WEBPACK_IMPORTED_MODULE_1__["combineReducers"])({
  counter: counterReducer,
  user: userReducer
});
var store = Object(redux__WEBPACK_IMPORTED_MODULE_1__["createStore"])(allReducer, {
  counter: initialState,
  user: userInitialState
}, Object(redux__WEBPACK_IMPORTED_MODULE_1__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_2__["default"])); //action creator

function add(num) {
  return {
    type: ADD,
    num: num
  };
} // console.log(store.getState())


store.dispatch(add(3)); // console.log(store.getState())

store.subscribe(function () {
  console.log('store changed ', store.getState());
});
store.dispatch({
  type: ADD
});
store.dispatch({
  type: UPDATE_USERNAME,
  name: 'DaShaBi'
});
/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ })

})
//# sourceMappingURL=index.js.50286a020826a0ed20fc.hot-update.js.map