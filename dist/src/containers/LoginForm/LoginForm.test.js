"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

require("@testing-library/jest-dom");

var _userEvent = _interopRequireDefault(require("@testing-library/user-event"));

var _LoginForm = _interopRequireDefault(require("./LoginForm"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

test("login form to render", function () {
  var _render = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_LoginForm.default, null)),
      container = _render.container,
      getByText = _render.getByText;

  expect(getByText("User Name")).toBeInTheDocument();
  expect(getByText("Password")).toBeInTheDocument();
  expect(getByText("Submit")).toBeInTheDocument();
  var usernameEle = container.querySelector("input[id=username]");
  var passwordEle = container.querySelector("input[id=password]");

  _userEvent.default.type(usernameEle, "username");

  _userEvent.default.type(passwordEle, "123");

  _userEvent.default.click(getByText("Submit")); //need some ui updates or api calls or redux state updates to test if form submits

});

//# sourceMappingURL=LoginForm.test.js.map