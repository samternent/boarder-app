'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Flux

// Components

// Component

var Radio = function (_React$Component) {
  _inherits(Radio, _React$Component);

  function Radio(props) {
    _classCallCheck(this, Radio);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Radio).call(this, props));

    _this.state = {
      editable: true
    };
    return _this;
  }

  _createClass(Radio, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _reactDom2.default.findDOMNode(this.refs.titleInput).focus();
    }
  }, {
    key: 'handleTitleChange',
    value: function handleTitleChange(e) {
      this.setState({ title: e.target.value });
    }
  }, {
    key: 'handleBlur',
    value: function handleBlur() {
      this.setState({ editable: false });
    }
  }, {
    key: 'handleClick',
    value: function handleClick() {
      var _this2 = this;

      this.setState({ editable: true }, function () {
        _reactDom2.default.findDOMNode(_this2.refs.titleInput).focus();
      });
    }
  }, {
    key: 'renderInput',
    value: function renderInput() {
      return _react2.default.createElement('input', {
        ref: 'titleInput',
        type: 'text',
        placeholder: 'Add a title...',
        value: this.state.title,
        onChange: this.handleTitleChange.bind(this),
        onBlur: this.handleBlur.bind(this)
      });
    }
  }, {
    key: 'renderTitle',
    value: function renderTitle() {
      if (this.state.editable) {
        return this.renderInput();
      }
      return this.state.title;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'h2',
        { onClick: this.handleClick.bind(this) },
        this.renderTitle()
      );
    }
  }]);

  return Radio;
}(_react2.default.Component);

exports.default = Radio;