'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use(_bodyParser2.default.json()); // to support JSON-encoded bodies
app.use(_bodyParser2.default.urlencoded({ // to support URL-encoded bodies
  extended: true
}));

app.use(_express2.default.static(__dirname + '/public'));
app.use('/assets', _express2.default.static(__dirname + '/public'));

var routes = require('./routes')(app);

var port = process.env.PORT || 7000;

app.listen(port, function () {
  console.log('Node app is running on port', port);
});