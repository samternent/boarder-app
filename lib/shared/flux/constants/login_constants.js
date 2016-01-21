'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var BASE_URL = 'http://localhost:1337/';

exports.default = {
  BASE_URL: BASE_URL,
  LOGIN_URL: BASE_URL + 'sessions/create',
  SIGNUP_URL: BASE_URL + 'users',
  LOGIN_USER: 'LOGIN_USER',
  LOGOUT_USER: 'LOGOUT_USER'
};