'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  routes: ['home', 'property', 'chat', 'payment', 'docs'],
  check: function check(route) {
    if (this.routes.indexOf(route) < 0) {
      return 'home';
    } else {
      return route;
    }
  }
};