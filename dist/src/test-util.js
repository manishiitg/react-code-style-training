"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  render: true
};
exports.render = render;

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

Object.keys(_react2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _react2[key];
    }
  });
});

var _reactRedux = require("react-redux");

var _store = _interopRequireDefault(require("./redux/store"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function render(ui) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var renderOptions = _extends({}, _ref);

  function Wrapper(_ref2) {
    var children = _ref2.children;
    return /*#__PURE__*/_react.default.createElement(_reactRedux.Provider, {
      store: _store.default
    }, children);
  }

  return (0, _react2.render)(ui, _objectSpread({
    wrapper: Wrapper
  }, renderOptions));
} // re-export everything

//# sourceMappingURL=test-util.js.map