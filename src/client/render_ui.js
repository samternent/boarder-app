// Create a `require` function in the global scope so that scripts that have
// not been webpack'd yet can still access them.
import React from 'react';
import ReactDOM from 'react-dom';


import App from '../shared/app';
import AppStore from '../shared/flux/app'

window.addEventListener('popstate', function(e) {
  if (e.state) {
    e.preventDefault();
    AppStore.setState({ route: e.state.route });
  }
});

var RenderUI = function () {
  var doc   = document;
  var el    = doc.getElementById('archie');
  var route = el.dataset.appRoute;

  AppStore.setState({ route: route });

  ReactDOM.render(<App />, el);
}

module.exports = new RenderUI();
