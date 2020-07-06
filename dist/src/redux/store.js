"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _redux = require("redux");

var _userlist = _interopRequireDefault(require("./reducer/userlist"));

var _reduxThunk = _interopRequireDefault(require("redux-thunk"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (0, _redux.createStore)((0, _redux.combineReducers)({
  userlist: _userlist.default
}), {}, (0, _redux.applyMiddleware)(_reduxThunk.default));

exports.default = _default;

//# sourceMappingURL=store.js.map