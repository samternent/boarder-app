'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  routes: ['home', 'property', 'login'],
  check: function check(route) {
    if (this.routes.indexOf(route) < 0) {
      return 'home';
    } else {
      return route;
    }
  }
};