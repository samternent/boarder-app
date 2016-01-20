'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _tbgFluxFactory = require('tbg-flux-factory');

var _tbgFluxFactory2 = _interopRequireDefault(_tbgFluxFactory);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _tbgFluxFactory2.default.createStore({
  name: 'user',
  data: {
    token: null,
    expires: null,
    id: null,
    user: null,
    email: null,
    logged_in: false
  },
  actions: {
    view: {
      getUserSession: function getUserSession() {
        var user_state = JSON.parse(localStorage.getItem('jwt'));
        this.setState(user_state);
      },
      login: function login(params) {
        var _this = this;

        (0, _axios2.default)({
          crossOrigin: true,
          url: 'http://localhost:1337/auth/login',
          // url: 'http://boarder-api.herokuapp.com/auth/login',
          method: 'post',
          data: params
        }).then(function (resp) {
          var user_state = {
            token: resp.data.token,
            expires: resp.data.expires,
            id: resp.data.user.id,
            email: resp.data.user.auth.email,
            logged_in: true
          };

          localStorage.setItem('jwt', JSON.stringify(user_state));
          _this.setState(user_state);
        });
      },
      logout: function logout() {
        var _this2 = this;

        (0, _axios2.default)({
          crossOrigin: true,
          url: 'http://localhost:1337/auth/logout',
          // url: 'http://boarder-api.herokuapp.com/auth/logout',
          method: 'post'
        }).then(function (resp) {
          localStorage.removeItem('jwt');
          _this2.setState({
            token: null,
            expires: null,
            id: null,
            user: {},
            email: null,
            logged_in: false
          });
        });
      }
    },
    server: {}
  }
});