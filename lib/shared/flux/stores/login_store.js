'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _LoginConstants = require('../constants/LoginConstants');

var _BaseStore2 = require('./BaseStore');

var _BaseStore3 = _interopRequireDefault(_BaseStore2);

var _jwtDecode = require('jwt-decode');

var _jwtDecode2 = _interopRequireDefault(_jwtDecode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LoginStore = function (_BaseStore) {
  _inherits(LoginStore, _BaseStore);

  function LoginStore() {
    _classCallCheck(this, LoginStore);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(LoginStore).call(this));

    _this.subscribe(function () {
      return _this._registerToActions.bind(_this);
    });
    _this._user = null;
    _this._jwt = null;
    return _this;
  }

  _createClass(LoginStore, [{
    key: '_registerToActions',
    value: function _registerToActions(action) {
      switch (action.actionType) {
        case _LoginConstants.LOGIN_USER:
          this._jwt = action.jwt;
          this._user = (0, _jwtDecode2.default)(this._jwt);
          this.emitChange();
          break;
        case _LoginConstants.LOGOUT_USER:
          this._user = null;
          this.emitChange();
          break;
        default:
          break;
      };
    }
  }, {
    key: 'isLoggedIn',
    value: function isLoggedIn() {
      return !!this._user;
    }
  }, {
    key: 'user',
    get: function get() {
      return this._user;
    }
  }, {
    key: 'jwt',
    get: function get() {
      return this._jwt;
    }
  }]);

  return LoginStore;
}(_BaseStore3.default);

exports.default = new LoginStore();