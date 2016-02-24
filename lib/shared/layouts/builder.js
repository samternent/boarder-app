'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _canUseDom = require('can-use-dom');

var _canUseDom2 = _interopRequireDefault(_canUseDom);

var _radio = require('../components/radio');

var _radio2 = _interopRequireDefault(_radio);

var _title = require('../components/title');

var _title2 = _interopRequireDefault(_title);

var _text = require('../components/text');

var _text2 = _interopRequireDefault(_text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Styles
if (_canUseDom2.default) {
  require('../../style/builder');
}

// Flux

// Components

var Components = { Radio: _radio2.default, Title: _title2.default, Text: _text2.default };

// Component

var Docs = function (_React$Component) {
  _inherits(Docs, _React$Component);

  function Docs(props) {
    _classCallCheck(this, Docs);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Docs).call(this, props));

    _this.state = {
      components: []
    };
    return _this;
  }

  _createClass(Docs, [{
    key: 'handleAddComponent',
    value: function handleAddComponent(name, e) {
      e.preventDefault();
      var components = this.state.components;
      components.push(_react2.default.createElement(Components[name], { key: 'component_' + components.length }));

      this.setState({
        components: components
      });
    }
  }, {
    key: 'renderPreview',
    value: function renderPreview() {
      var components = this.state.components.map(function (comp, i) {
        return comp;
      });
      return _react2.default.createElement(
        'div',
        { className: 'builder__preview' },
        components
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'contain content builder pure-g' },
        _react2.default.createElement(
          'h2',
          null,
          'Builder'
        ),
        _react2.default.createElement(
          'div',
          { className: 'pure-u-1 pure-u-md-1-6' },
          _react2.default.createElement(
            'ul',
            { className: 'builder__items' },
            _react2.default.createElement(
              'li',
              { className: 'builder__item' },
              _react2.default.createElement(
                'a',
                {
                  className: 'builder__item__link',
                  href: '#',
                  onClick: this.handleAddComponent.bind(this, 'Title')
                },
                ' Add Title '
              )
            ),
            _react2.default.createElement(
              'li',
              { className: 'builder__item' },
              _react2.default.createElement(
                'a',
                {
                  className: 'builder__item__link',
                  href: '#',
                  onClick: this.handleAddComponent.bind(this, 'Text')
                },
                ' Add Text '
              )
            ),
            _react2.default.createElement(
              'li',
              { className: 'builder__item' },
              _react2.default.createElement(
                'a',
                {
                  className: 'builder__item__link',
                  href: '#',
                  onClick: this.handleAddComponent.bind(this, 'Radio')
                },
                ' Add Radios '
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'pure-u-1 pure-u-md-5-6' },
          this.renderPreview()
        )
      );
    }
  }]);

  return Docs;
}(_react2.default.Component);

exports.default = Docs;