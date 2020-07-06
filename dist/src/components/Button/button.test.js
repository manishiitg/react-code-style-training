"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

require("@testing-library/jest-dom/extend-expect");

require("@testing-library/jest-dom");

var _userEvent = _interopRequireDefault(require("@testing-library/user-event"));

var _manishiitgMediumBlog = _interopRequireWildcard(require("@bit/manishiitg.medium-blog.button"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

test('button renders properly', function () {
  var mockClick = jest.fn();

  var button = /*#__PURE__*/_react.default.createElement(_manishiitgMediumBlog.default, {
    onClick: mockClick
  }, "Test Button");

  var _render = (0, _react2.render)(button),
      getByText = _render.getByText;

  var element = getByText("Test Button");
  expect(element).toBeInTheDocument();

  _userEvent.default.click(element);

  expect(mockClick.mock.calls.length).toBe(1);
});
test("large button", function () {
  var mockClick = jest.fn();

  var largebutton = /*#__PURE__*/_react.default.createElement(_manishiitgMediumBlog.LargeButton, {
    onClick: mockClick
  }, "Test Button");

  var _render2 = (0, _react2.render)(largebutton),
      getByText = _render2.getByText;

  var element = getByText("Test Button");
  expect(element).toHaveStyle("font-size:2em");
});

//# sourceMappingURL=button.test.js.map