'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _canUseDom = require('can-use-dom');

var _canUseDom2 = _interopRequireDefault(_canUseDom);

var _local_link = require('./local_link');

var _local_link2 = _interopRequireDefault(_local_link);

var _user = require('../flux/user');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Styles
if (_canUseDom2.default) {
  require('../../style/nav');
}

// Components

// Component

var Nav = function (_React$Component) {
  _inherits(Nav, _React$Component);

  function Nav(props) {
    _classCallCheck(this, Nav);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Nav).call(this, props));

    _this.state = {};
    return _this;
  }

  _createClass(Nav, [{
    key: 'handleLogoutClick',
    value: function handleLogoutClick(e) {
      _user2.default.Actions.logout();
    }
  }, {
    key: 'renderLogin',
    value: function renderLogin() {
      if (this.props.user.logged_in) {
        return _react2.default.createElement(
          'div',
          { className: 'pointer', onClick: this.handleLogoutClick.bind(this) },
          _react2.default.createElement('i', { className: 'fa fa-user menu__logo__icon' }),
          _react2.default.createElement(
            'span',
            { className: 'menu__logo__text--logout' },
            'logout ' + this.props.user.email
          )
        );
      }
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement('i', { className: 'fa fa-user red archie__logo__icon' })
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'menu' },
        _react2.default.createElement(
          'div',
          { className: 'contain' },
          _react2.default.createElement(
            'div',
            { className: 'menu__logo' },
            _react2.default.createElement(
              _local_link2.default,
              { route: 'home', currentRoute: this.props.currentRoute },
              _react2.default.createElement('i', { className: 'fa fa-compass menu__logo__icon' }),
              _react2.default.createElement(
                'span',
                { className: 'menu__logo__text' },
                'archie-app'
              )
            )
          ),
          _react2.default.createElement(
            'ul',
            { className: 'menu__items' },
            _react2.default.createElement(
              'li',
              { className: 'menu__items__item' },
              _react2.default.createElement(_local_link2.default, { route: 'home', currentRoute: this.props.currentRoute })
            ),
            _react2.default.createElement(
              'li',
              { className: 'menu__items__item' },
              this.renderLogin()
            )
          )
        )
      );
    }
  }]);

  return Nav;
}(_react2.default.Component);

exports.default = Nav;

Nav.propTypes = { user: _react2.default.PropTypes.object };
Nav.defaultProps = { user: {} };