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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Styles
if (_canUseDom2.default) {
  require('../../style/tray');
}

// Components

// Component

var Tray = function (_React$Component) {
  _inherits(Tray, _React$Component);

  function Tray(props) {
    _classCallCheck(this, Tray);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Tray).call(this, props));

    _this.state = {};
    return _this;
  }

  _createClass(Tray, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'tray' },
        _react2.default.createElement(
          'div',
          { className: 'tray__logo' },
          _react2.default.createElement('i', { className: 'fa fa-compass tray__logo__icon' }),
          _react2.default.createElement(
            'div',
            { className: 'tray__logo__text' },
            'archie-app'
          )
        ),
        _react2.default.createElement(
          'ul',
          { className: 'tray__items' },
          _react2.default.createElement(
            'li',
            { className: 'tray__item' },
            _react2.default.createElement(
              _local_link2.default,
              { route: 'builder', currentRoute: this.props.currentRoute },
              _react2.default.createElement('i', { className: 'fa fa-home' }),
              _react2.default.createElement(
                'span',
                { className: 'tray__item__label' },
                'Builder'
              )
            )
          ),
          _react2.default.createElement(
            'li',
            { className: 'tray__item' },
            _react2.default.createElement(
              _local_link2.default,
              { route: 'chat', currentRoute: this.props.currentRoute },
              _react2.default.createElement('i', { className: 'fa fa-comment' }),
              _react2.default.createElement(
                'span',
                { className: 'tray__item__label' },
                'Chat'
              )
            )
          )
        )
      );
    }
  }]);

  return Tray;
}(_react2.default.Component);

exports.default = Tray;