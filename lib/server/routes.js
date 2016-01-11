'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _app = require('../shared/flux/app');

var _app2 = _interopRequireDefault(_app);

var _app3 = require('../shared/app');

var _app4 = _interopRequireDefault(_app3);

var _routes = require('../shared/routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var myReactRoute = function myReactRoute(res, route) {
  route = _routes2.default.check(route);

  _app2.default.setState({ route: route });
  var app = (0, _server.renderToString)(_react2.default.createElement(_app4.default, null));

  res.render('index.ejs', {
    app: app,
    route: route || 'home'
  });
};

module.exports = function (app) {

  // put these in public
  app.get('/bundle.js', function (req, res) {
    res.sendfile("./public/bundle_client.js");
  });
  app.get('/style.css', function (req, res) {
    res.sendfile("./public/style.css");
  });

  app.get('/*', function (req, res) {
    myReactRoute(res, req.url.replace('/', ''));
  });
};