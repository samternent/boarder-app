'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _tbgFluxFactory = require('tbg-flux-factory');

var _tbgFluxFactory2 = _interopRequireDefault(_tbgFluxFactory);

var _routes = require('../routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _tbgFluxFactory2.default.createStore({
  name: 'app',
  data: {
    route: 'home',
    logged_in: false
  },
  actions: {
    view: {
      setRoute: function setRoute(route) {
        route = _routes2.default.check(route);

        if (this.data.route !== route) {
          history.pushState({ route: route }, null, route);
        }
        this.setState({ route: route });
      }
    },
    server: {}
  }
});