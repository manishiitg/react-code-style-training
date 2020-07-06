"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _userlist = require("../actions/userlist");

var reducer = function reducer() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    "loading": false,
    "data": [],
    "errormsg": ""
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  if (action.type === _userlist.USER_LIST_ACTIONS.USER_API_LOADING) {
    return {
      "loading": true,
      "data": [],
      "errormsg": ""
    };
  } else if (action.type === _userlist.USER_LIST_ACTIONS.USER_API_ERROR) {
    return Object.assign({}, {
      "loading": false,
      "data": [],
      "errormsg": action.payload
    });
  } else if (action.type === _userlist.USER_LIST_ACTIONS.USER_API_SUCCESS) {
    return Object.assign({}, {
      "loading": false,
      "data": action.payload,
      "errormsg": ""
    });
  }

  return data;
};

var _default = reducer;
exports.default = _default;

//# sourceMappingURL=userlist.js.map