import React from 'react';
import { renderToString } from 'react-dom/server'

import AppStore from '../shared/flux/app';
import App from '../shared/app';

import routes from '../shared/routes';

var myReactRoute = function (res, route) {
  route = routes.check(route);

  AppStore.setState({ route: route });
  var app = renderToString( <App /> );

  res.render('index.ejs', {
      app   : app,
      route : route || 'home'
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

  app.get('/*',
  function (req, res) {
    myReactRoute(res, req.url.replace('/',''));
  });
};
