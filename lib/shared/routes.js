'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  routes: ['home', 'chat', 'builder'],
  check: function check(route) {
    if (this.routes.indexOf(route) < 0) {
      return 'home';
    } else {
      return route;
    }
  }
};