'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _property = require('../flux/property');

var _property2 = _interopRequireDefault(_property);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Flux

// Components

// Component

var Gallery = function (_React$Component) {
  _inherits(Gallery, _React$Component);

  function Gallery(props) {
    _classCallCheck(this, Gallery);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Gallery).call(this, props));

    _property2.default.Actions.getProperties();
    _this.state = {
      properties: []
    };

    _this.doPropertyChange = _this.handlePropertyChange.bind(_this);
    return _this;
  }

  _createClass(Gallery, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      _property2.default.addChangeListener(this.doPropertyChange);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _property2.default.removeChangeListener(this.doPropertyChange);
    }
  }, {
    key: 'handlePropertyChange',
    value: function handlePropertyChange() {
      this.setState(_property2.default.getState());
    }
  }, {
    key: 'renderProperties',
    value: function renderProperties() {
      return this.state.properties.map(function (property, i) {
        return _react2.default.createElement(
          'div',
          { key: 'property_' + i, className: 'property' },
          _react2.default.createElement(
            'h3',
            { className: 'property__title' },
            property.name
          ),
          _react2.default.createElement('img', { className: 'property__image', src: 'http://placehold.it/350x150' }),
          _react2.default.createElement(
            'div',
            { className: 'property__rooms' },
            property.rooms + ' rooms'
          ),
          _react2.default.createElement(
            'div',
            { className: 'property__rent' },
            '£' + property.rent + ' pcm'
          )
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'properties' },
        this.renderProperties()
      );
    }
  }]);

  return Gallery;
}(_react2.default.Component);

exports.default = Gallery;