'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _AppDispatcher = require('../dispatchers/AppDispatcher.js');

var _AppDispatcher2 = _interopRequireDefault(_AppDispatcher);

var _LoginConstants = require('../constants/LoginConstants.js');

var _RouterContainer = require('../services/RouterContainer');

var _RouterContainer2 = _interopRequireDefault(_RouterContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  loginUser: function loginUser(jwt) {
    var savedJwt = localStorage.getItem('jwt');

    _AppDispatcher2.default.dispatch({
      actionType: _LoginConstants.LOGIN_USER,
      jwt: jwt
    });

    if (savedJwt !== jwt) {
      var nextPath = _RouterContainer2.default.get().getCurrentQuery().nextPath || '/';

      _RouterContainer2.default.get().transitionTo(nextPath);
      localStorage.setItem('jwt', jwt);
    }
  },
  logoutUser: function logoutUser() {
    _RouterContainer2.default.get().transitionTo('/login');
    localStorage.removeItem('jwt');
    _AppDispatcher2.default.dispatch({
      actionType: _LoginConstants.LOGOUT_USER
    });
  }
};