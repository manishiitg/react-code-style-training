"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LargeButton = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n   font-size: ", ";\n   text-align: center;\n   color: ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ButtonStyle = _styledComponents.default.button.attrs(function (props) {
  return {
    size: props.size || "1em"
  };
})(_templateObject(), function (props) {
  return props.size;
}, function (props) {
  return props.theme.primaryColor;
});

var Button = function Button(props) {
  return /*#__PURE__*/_react.default.createElement(ButtonStyle, _extends({}, props, {
    className: "btn " + (props.className || ""),
    onClick: props.onClick,
    value: props.chidren
  }));
};

Button.defaultProps = {
  onClick: function onClick() {}
};
Button.propTypes = {
  onClick: _propTypes.default.func.isRequired,
  className: _propTypes.default.string,
  children: _propTypes.default.string.isRequired
};
var _default = Button;
exports.default = _default;

var LargeButton = function LargeButton(props) {
  return /*#__PURE__*/_react.default.createElement(Button, _extends({}, props, {
    size: "2em"
  }));
};

exports.LargeButton = LargeButton;
LargeButton.propTypes = _objectSpread({}, Button.propTypes); // export const BootstrapInfoButton = (props) => {
//     return (
//         <BootstrapButton {...props} />
//     )
// }

//# sourceMappingURL=button.js.map