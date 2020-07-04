"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoginFormDemo = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _addonActions = require("@storybook/addon-actions");

var _addonLinks = require("@storybook/addon-links");

var _LoginForm = _interopRequireDefault(require("./LoginForm"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'LoginForm'
};
exports.default = _default;

var LoginFormDemo = function LoginFormDemo() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "col"
  }, /*#__PURE__*/_react.default.createElement(_LoginForm.default, null))));
};

exports.LoginFormDemo = LoginFormDemo;

//# sourceMappingURL=LoginForm.stories.js.map