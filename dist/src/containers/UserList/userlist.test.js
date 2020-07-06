"use strict";

var _react = _interopRequireDefault(require("react"));

var _testUtil = require("../../test-util");

var _react2 = require("@testing-library/react");

require("@testing-library/jest-dom");

var _userEvent = _interopRequireDefault(require("@testing-library/user-event"));

var _userlist = _interopRequireDefault(require("./userlist"));

var _msw = require("msw");

var _node = require("msw/node");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// https://mswjs.io/docs/
var apiresponse = {
  "page": 2,
  "per_page": 6,
  "total": 12,
  "total_pages": 2,
  "data": [{
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
  }, {
    "id": 9,
    "email": "tobias.funke@reqres.in",
    "first_name": "Tobias",
    "last_name": "Funke",
    "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/vivekprvr/128.jpg"
  }, {
    "id": 10,
    "email": "byron.fields@reqres.in",
    "first_name": "Byron",
    "last_name": "Fields",
    "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/russoedu/128.jpg"
  }, {
    "id": 11,
    "email": "george.edwards@reqres.in",
    "first_name": "George",
    "last_name": "Edwards",
    "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/mrmoiree/128.jpg"
  }, {
    "id": 12,
    "email": "rachel.howell@reqres.in",
    "first_name": "Rachel",
    "last_name": "Howell",
    "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/hebertialmeida/128.jpg"
  }],
  "ad": {
    "company": "StatusCode Weekly",
    "url": "http://statuscode.org/",
    "text": "A weekly newsletter focusing on software development, infrastructure, the server, performance, and the stack end of things."
  }
};
var server = (0, _node.setupServer)(_msw.rest.get('https://reqres.in/api/users', function (req, res, ctx) {
  return res( // ctx.delay(1000), optional. don't use unless its requried to delay the api. as it slows down test
  ctx.json(apiresponse));
}));
beforeAll(function () {
  return server.listen();
});
afterEach(function () {
  return server.resetHandlers();
});
afterAll(function () {
  return server.close();
});
test("userlist renders properly", function () {
  var _render = (0, _testUtil.render)( /*#__PURE__*/_react.default.createElement(_userlist.default, null)),
      container = _render.container,
      getByText = _render.getByText;

  var button = getByText("Call API");
  expect(button).toBeInTheDocument(); // we have button showing

  expect(container.querySelectorAll("table > tbody > tr").length).toBe(0); // we have empty table
});
test("userlist click calls api and shows loading", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
  var _render2, container, getByText, queryByText, button;

  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _render2 = (0, _testUtil.render)( /*#__PURE__*/_react.default.createElement(_userlist.default, null)), container = _render2.container, getByText = _render2.getByText, queryByText = _render2.queryByText;
          button = getByText("Call API");

          _userEvent.default.click(button);

          expect(getByText("loading..")).toBeInTheDocument(); //on button click we should have loading

          expect(button).not.toBeInTheDocument(); //we should wait for api response to be rendered

          _context.next = 7;
          return (0, _react2.waitFor)(function () {
            return expect(container.querySelectorAll("tbody > tr").length).toBeGreaterThan(1);
          });

        case 7:
          //then we check if table was rendered properly
          expect(container.querySelectorAll("tbody > tr").length).toBe(apiresponse['data'].length);
          expect(queryByText("loading..")).toBeNull(); //loading show go away

          expect(getByText("Call API")).toBeInTheDocument(); //button should show again

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
})));
test("userlist click calls api shows error message properly", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
  return regeneratorRuntime.wrap(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
        case "end":
          return _context2.stop();
      }
    }
  }, _callee2);
})));

//# sourceMappingURL=userlist.test.js.map