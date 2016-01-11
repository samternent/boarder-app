'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _user = require('../flux/user');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Flux

// Component

var Login = function (_React$Component) {
  _inherits(Login, _React$Component);

  function Login(props) {
    _classCallCheck(this, Login);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Login).call(this, props));

    _this.state = {
      email: null,
      password: null
    };
    return _this;
  }

  _createClass(Login, [{
    key: 'updateEmail',
    value: function updateEmail(e) {
      this.setState({
        email: e.target.value
      });
    }
  }, {
    key: 'updatePassword',
    value: function updatePassword(e) {
      this.setState({
        password: e.target.value
      });
    }
  }, {
    key: 'handleLogin',
    value: function handleLogin(e) {
      e.preventDefault();
      _user2.default.Actions.login(this.state);
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.props.user.email) {
        return null;
      }
      return _react2.default.createElement(
        'div',
        { className: 'login' },
        _react2.default.createElement(
          'form',
          null,
          _react2.default.createElement('input', { className: 'login__input login__input--email', onChange: this.updateEmail.bind(this), type: 'text', placeholder: 'Email' }),
          _react2.default.createElement('input', { className: 'login__input login__input--password', onChange: this.updatePassword.bind(this), type: 'password', placeholder: 'Password' }),
          _react2.default.createElement(
            'button',
            { className: 'login__input login__input--submit', onClick: this.handleLogin.bind(this) },
            'Login'
          )
        )
      );
    }
  }]);

  return Login;
}(_react2.default.Component);

exports.default = Login;