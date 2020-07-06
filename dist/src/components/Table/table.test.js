"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

require("@testing-library/jest-dom");

var _userEvent = _interopRequireDefault(require("@testing-library/user-event"));

var _index = _interopRequireDefault(require("./index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

test("table renders properly", function () {
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

  var tableEle = /*#__PURE__*/_react.default.createElement(_index.default, {
    id: "table-test",
    columns: columns,
    rows: rows
  });

  var _render = (0, _react2.render)(tableEle),
      container = _render.container,
      getByTestId = _render.getByTestId,
      getByRole = _render.getByRole,
      getAllByRole = _render.getAllByRole;

  var renderEle = getByTestId("table-test");
  expect(renderEle).toBeInTheDocument();
  expect(container.querySelectorAll("tbody > tr").length).toBe(rows.length);
  expect(container.querySelectorAll("thead").length).toBe(1);
  expect(container.querySelectorAll("thead > tr > th").length).toBe(columns.length);
  /** can also add more test like checking if value is disabled etc. but its not of much use. */

  /** better to add more test cases to containers */

  /** we should add more ui level test cases here, but there no ui here like hide/show or clicking or loading etc. so not needed */
});

//# sourceMappingURL=table.test.js.map