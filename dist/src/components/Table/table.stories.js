"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TableDemo = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _addonActions = require("@storybook/addon-actions");

var _addonLinks = require("@storybook/addon-links");

var _table = _interopRequireDefault(require("./table"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Table'
};
exports.default = _default;

var TableDemo = function TableDemo() {
  var columns = ["id", "email", "first_name", "last_name", "avatar"];
  var rows = [{
    "id": 7,
    "email": "michael.lawson@reqres.in",
    "first_name": "Michael",
    "last_name": "Lawson",
    "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/follettkyle/128.jpg"
  }, {
    "id": 8,
    "email": "lindsay.ferguson@reqres.in",
    "first_name": "Lindsay",
    "last_name": "Ferguson",
    "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/araa3185/128.jpg"
  }];
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react.default.createElement(_table.default, {
    id: "table-test",
    columns: columns,
    rows: rows
  }));
};

exports.TableDemo = TableDemo;

//# sourceMappingURL=table.stories.js.map