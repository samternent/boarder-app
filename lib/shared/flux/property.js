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
  name: 'property',
  data: {},
  actions: {
    view: {
      getProperties: function getProperties() {
        console.log(_tbgFluxFactory2.default.getStore('user').data.token);
        (0, _axios2.default)({
          crossOrigin: true,
          url: 'http://localhost:1337/property',
          // url: 'http://boarder-api.herokuapp.com/property',
          method: 'get'
        }).then(this.Actions.handleProperties);
      }
    },
    server: {
      handleProperties: function handleProperties(resp) {
        this.setState({ properties: resp.data });
      }
    }
  }
});