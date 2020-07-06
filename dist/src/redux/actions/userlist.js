"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.apiLoadingAction = apiLoadingAction;
exports.apiSuccessAction = apiSuccessAction;
exports.apiErrorAction = apiErrorAction;
exports.callUserListApi = exports.USER_LIST_ACTIONS = void 0;
var CALL_USER_LIST_API = "call_user_list_api";
var USER_API_LOADING = "user_list_api_loading";
var USER_API_SUCCESS = "user_list_api_success";
var USER_API_ERROR = "user_list_api_error";
var USER_LIST_ACTIONS = {
  USER_API_LOADING: USER_API_LOADING,
  USER_API_SUCCESS: USER_API_SUCCESS,
  USER_API_ERROR: USER_API_ERROR,
  CALL_USER_LIST_API: CALL_USER_LIST_API
};
exports.USER_LIST_ACTIONS = USER_LIST_ACTIONS;

function apiLoadingAction() {
  return {
    type: USER_API_LOADING
  };
}

function apiSuccessAction(userlist) {
  return {
    type: USER_API_SUCCESS,
    payload: userlist
  };
}

function apiErrorAction(err) {
  return {
    type: USER_API_ERROR,
    payload: err.toString()
  };
}

var callUserListApi = function callUserListApi() {
  return function (dispatch, state) {
    dispatch(apiLoadingAction());
    fetch("https://reqres.in/api/users?page=1").then(function (data) {
      return data.json().then(function (value) {
        if (value.hasOwnProperty("data")) {
          dispatch(apiSuccessAction(value.data));
        } else {
          throw value;
        }
      });
    }).catch(function (err) {
      dispatch(apiErrorAction(err));
    });
  };
};

exports.callUserListApi = callUserListApi;

//# sourceMappingURL=userlist.js.map