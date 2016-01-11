'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _app = require('../shared/app');

var _app2 = _interopRequireDefault(_app);

var _app3 = require('../shared/flux/app');

var _app4 = _interopRequireDefault(_app3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Create a `require` function in the global scope so that scripts that have
// not been webpack'd yet can still access them.

window.addEventListener('popstate', function (e) {
  if (e.state) {
    e.preventDefault();
    _app4.default.setState({ route: e.state.route });
  }
});

var RenderUI = function RenderUI() {
  var doc = document;
  var el = doc.getElementById('archie');
  var route = el.dataset.appRoute;

  _app4.default.setState({ route: route });

  _reactDom2.default.render(_react2.default.createElement(_app2.default, null), el);
};

module.exports = new RenderUI();