'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _home = require('./layouts/home');

var _home2 = _interopRequireDefault(_home);

var _property = require('./layouts/property');

var _property2 = _interopRequireDefault(_property);

var _login = require('./layouts/login');

var _login2 = _interopRequireDefault(_login);

var _tbgFluxFactory = require('tbg-flux-factory');

var _tbgFluxFactory2 = _interopRequireDefault(_tbgFluxFactory);

var _app = require('./flux/app');

var _app2 = _interopRequireDefault(_app);

var _user = require('./flux/user');

var _user2 = _interopRequireDefault(_user);

var _nav = require('./components/nav');

var _nav2 = _interopRequireDefault(_nav);

var _tray = require('./components/tray');

var _tray2 = _interopRequireDefault(_tray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Styles
// import './style'

// Flux

// Components

//
var layouts = {
  'home': _home2.default,
  'property': _property2.default,
  'login': _login2.default
};

// Component

var Archie = function (_React$Component) {
  _inherits(Archie, _React$Component);

  function Archie(props) {
    _classCallCheck(this, Archie);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Archie).call(this, props));

    _this.state = {
      app: _app2.default.getState(),
      user: _user2.default.getState()
    };
    return _this;
  }

  _createClass(Archie, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var that = this;
      _app2.default.addChangeListener(function () {
        that.setState({ app: _app2.default.getState() });
      });
      _user2.default.addChangeListener(function () {
        that.setState({ user: _user2.default.getState() });
      });

      _user2.default.Actions.getUserSession();
    }
  }, {
    key: 'render',
    value: function render() {
      var Layout = layouts[this.state.app.route];
      return _react2.default.createElement(
        'div',
        { className: '' },
        _react2.default.createElement(_nav2.default, { currentRoute: this.state.route, user: this.state.user }),
        _react2.default.createElement(_tray2.default, null),
        _react2.default.createElement(Layout, null)
      );
    }
  }]);

  return Archie;
}(_react2.default.Component);

exports.default = Archie;