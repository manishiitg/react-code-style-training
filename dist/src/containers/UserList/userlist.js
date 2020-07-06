"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

var _userlist = require("./../../redux/actions/userlist");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _manishiitgReusableTraining = _interopRequireDefault(require("@bit/manishiitg.reusable-training.table"));

var _button = _interopRequireDefault(require("../../components/Button/button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserList = function UserList(_ref) {
  var userlist = _ref.userlist,
      callApi = _ref.callApi;
  var columns = ["id", "email", "first_name", "last_name", "avatar"];
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_manishiitgReusableTraining.default, {
    id: "userlist",
    columns: columns,
    rows: userlist.data
  }), userlist.loading ? "loading.." : /*#__PURE__*/_react.default.createElement(_button.default, {
    onClick: callApi,
    className: "btn-primary"
  }, "Call API"), userlist.errormsg);
};

UserList.propTypes = {
  callApi: _propTypes.default.func.isRequired,
  userlist: _propTypes.default.shape({
    data: _propTypes.default.arrayOf(_propTypes.default.shape({
      id: _propTypes.default.number.isRequired,
      email: _propTypes.default.string.isRequired,
      first_name: _propTypes.default.string.isRequired,
      last_name: _propTypes.default.string.isRequired,
      avatar: _propTypes.default.string.isRequired
    })),
    loading: _propTypes.default.bool.isRequired,
    errormsg: _propTypes.default.string.isRequired
  })
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    userlist: state.userlist
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    callApi: function callApi() {
      dispatch((0, _userlist.callUserListApi)());
    }
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(UserList);

exports.default = _default;

//# sourceMappingURL=userlist.js.map