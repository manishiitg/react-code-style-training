"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Table = function Table(_ref) {
  var id = _ref.id,
      columns = _ref.columns,
      rows = _ref.rows;
  return /*#__PURE__*/_react.default.createElement("table", {
    id: id,
    "data-testid": id,
    className: "table"
  }, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", null, columns.map(function (ele, idx) {
    return /*#__PURE__*/_react.default.createElement("th", {
      scope: "col",
      key: id + "-" + idx
    }, ele);
  }))), /*#__PURE__*/_react.default.createElement("tbody", null, rows.map(function (ele, idx) {
    return /*#__PURE__*/_react.default.createElement("tr", {
      key: id + "--" + idx
    }, Object.keys(ele).map(function (innerKey, innerIdx) {
      return /*#__PURE__*/_react.default.createElement("td", {
        key: id + "---" + innerIdx,
        scope: "row"
      }, ele[innerKey]);
    }));
  })));
};

Table.propTypes = {
  id: _propTypes.default.string.isRequired,
  columns: _propTypes.default.arrayOf(_propTypes.default.string).isRequired,
  rows: _propTypes.default.arrayOf(_propTypes.default.object).isRequired
};
var _default = Table;
exports.default = _default;

//# sourceMappingURL=table.js.map