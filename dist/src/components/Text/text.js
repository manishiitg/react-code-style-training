"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _textModules = _interopRequireDefault(require("./text.modules.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 
 * 
 * @example
 * import React from 'react';
import Text from '@bit/manishiitg.medium-blog.text';

export default (
	<Text text='hello2'/>
)
 */
var Text = function Text(_ref) {
  var text = _ref.text;
  return /*#__PURE__*/_react.default.createElement("span", {
    className: _textModules.default.green
  }, text);
};

Text.propTypes = {
  "text": _propTypes.default.string.isRequired
};
var _default = Text;
exports.default = _default;

//# sourceMappingURL=text.js.map