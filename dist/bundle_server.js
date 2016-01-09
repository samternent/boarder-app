/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__dirname, process) {'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _express = __webpack_require__(4);

	var _express2 = _interopRequireDefault(_express);

	var _bodyParser = __webpack_require__(5);

	var _bodyParser2 = _interopRequireDefault(_bodyParser);

	var app = (0, _express2['default'])();

	app.use(_bodyParser2['default'].json()); // to support JSON-encoded bodies
	app.use(_bodyParser2['default'].urlencoded({ // to support URL-encoded bodies
	  extended: true
	}));

	// app.use(express.static(__dirname + '/public'));
	app.use('/assets', _express2['default']['static'](__dirname + '/public'));

	var routes = __webpack_require__(6)(app);

	app.set('port', process.env.PORT || 5000);

	app.listen(app.get('port'), function () {
	  console.log('Node app is running on port', app.get('port'));
	});
	/* WEBPACK VAR INJECTION */}.call(exports, "/", __webpack_require__(2)))

/***/ },
/* 2 */
/***/ function(module, exports) {

	// shim for using process in browser

	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        setTimeout(drainQueue, 0);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("body-parser");

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _sharedFluxApp = __webpack_require__(7);

	var _sharedFluxApp2 = _interopRequireDefault(_sharedFluxApp);

	var _sharedApp = __webpack_require__(10);

	var _sharedApp2 = _interopRequireDefault(_sharedApp);

	var _sharedRoutes = __webpack_require__(9);

	var _sharedRoutes2 = _interopRequireDefault(_sharedRoutes);

	var myReactRoute = function myReactRoute(res, route) {
	  route = _sharedRoutes2['default'].check(route);

	  _sharedFluxApp2['default'].setState({ route: route });
	  var app = _react2['default'].renderToString(_react2['default'].createElement(_sharedApp2['default'], null));

	  res.render('index.ejs', {
	    app: app,
	    route: route || 'home'
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

	  app.get('/*', function (req, res) {
	    myReactRoute(res, req.url.replace('/', ''));
	  });
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _tbgFluxFactory = __webpack_require__(8);

	var _tbgFluxFactory2 = _interopRequireDefault(_tbgFluxFactory);

	var _routes = __webpack_require__(9);

	var _routes2 = _interopRequireDefault(_routes);

	exports['default'] = _tbgFluxFactory2['default'].createStore({
	  name: 'app',
	  data: {
	    route: 'home',
	    logged_in: false
	  },
	  actions: {
	    view: {
	      setRoute: function setRoute(route) {
	        route = _routes2['default'].check(route);

	        if (this.data.route !== route) {
	          history.pushState({ route: route }, null, route);
	        }
	        this.setState({ route: route });
	      }
	    },
	    server: {}
	  }
	});
	module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = require("tbg-flux-factory");

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = {
	  routes: ['home', 'property'],
	  check: function check(route) {
	    if (this.routes.indexOf(route) < 0) {
	      return 'home';
	    } else {
	      return route;
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _layoutsHome = __webpack_require__(11);

	var _layoutsHome2 = _interopRequireDefault(_layoutsHome);

	var _layoutsProperty = __webpack_require__(16);

	var _layoutsProperty2 = _interopRequireDefault(_layoutsProperty);

	// Styles
	// import './style'

	// Flux

	var _tbgFluxFactory = __webpack_require__(8);

	var _tbgFluxFactory2 = _interopRequireDefault(_tbgFluxFactory);

	var _fluxApp = __webpack_require__(7);

	var _fluxApp2 = _interopRequireDefault(_fluxApp);

	// Components

	var _componentsNav = __webpack_require__(17);

	var _componentsNav2 = _interopRequireDefault(_componentsNav);

	//
	var layouts = {
	  'home': _layoutsHome2['default'],
	  'property': _layoutsProperty2['default']
	};

	// Component

	var Archie = (function (_React$Component) {
	  _inherits(Archie, _React$Component);

	  function Archie(props) {
	    _classCallCheck(this, Archie);

	    _get(Object.getPrototypeOf(Archie.prototype), 'constructor', this).call(this, props);
	    this.state = _fluxApp2['default'].getState();
	  }

	  _createClass(Archie, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var that = this;
	      _fluxApp2['default'].addChangeListener(function () {
	        that.setState(_fluxApp2['default'].getState());
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var Layout = layouts[this.state.route];
	      return _react2['default'].createElement(
	        'div',
	        { className: '' },
	        _react2['default'].createElement(_componentsNav2['default'], null),
	        _react2['default'].createElement(Layout, null)
	      );
	    }
	  }]);

	  return Archie;
	})(_react2['default'].Component);

	exports['default'] = Archie;
	module.exports = exports['default'];

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	// Styles
	// import './style'

	// Flux

	var _appsProperties = __webpack_require__(12);

	var _appsProperties2 = _interopRequireDefault(_appsProperties);

	// Components

	var _componentsLocal_link = __webpack_require__(15);

	var _componentsLocal_link2 = _interopRequireDefault(_componentsLocal_link);

	// Component

	var Home = (function (_React$Component) {
	    _inherits(Home, _React$Component);

	    function Home(props) {
	        _classCallCheck(this, Home);

	        _get(Object.getPrototypeOf(Home.prototype), 'constructor', this).call(this, props);
	        this.state = {};
	    }

	    _createClass(Home, [{
	        key: 'render',
	        value: function render() {
	            return _react2['default'].createElement(
	                'div',
	                { className: 'contain content' },
	                _react2['default'].createElement(
	                    _componentsLocal_link2['default'],
	                    { route: 'property' },
	                    'Property page'
	                )
	            );
	        }
	    }]);

	    return Home;
	})(_react2['default'].Component);

	exports['default'] = Home;
	module.exports = exports['default'];

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	// Flux

	var _fluxProperty = __webpack_require__(13);

	var _fluxProperty2 = _interopRequireDefault(_fluxProperty);

	// Components

	// Component

	var Gallery = (function (_React$Component) {
	  _inherits(Gallery, _React$Component);

	  function Gallery(props) {
	    _classCallCheck(this, Gallery);

	    _get(Object.getPrototypeOf(Gallery.prototype), 'constructor', this).call(this, props);
	    _fluxProperty2['default'].Actions.getProperties();
	    this.state = {
	      properties: []
	    };

	    this.doPropertyChange = this.handlePropertyChange.bind(this);
	  }

	  _createClass(Gallery, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      _fluxProperty2['default'].addChangeListener(this.doPropertyChange);
	    }
	  }, {
	    key: 'handlePropertyChange',
	    value: function handlePropertyChange() {
	      this.setState(_fluxProperty2['default'].getState());
	    }
	  }, {
	    key: 'renderProperties',
	    value: function renderProperties() {
	      return this.state.properties.map(function (property, i) {
	        return _react2['default'].createElement(
	          'div',
	          { key: 'property_' + i },
	          _react2['default'].createElement(
	            'h2',
	            null,
	            property.name
	          ),
	          _react2['default'].createElement(
	            'div',
	            null,
	            property.rooms + ' rooms'
	          ),
	          _react2['default'].createElement(
	            'div',
	            null,
	            '£' + property.rent + ' pcm'
	          )
	        );
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        'div',
	        { className: 'properties' },
	        this.renderProperties()
	      );
	    }
	  }]);

	  return Gallery;
	})(_react2['default'].Component);

	exports['default'] = Gallery;
	module.exports = exports['default'];

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _tbgFluxFactory = __webpack_require__(8);

	var _tbgFluxFactory2 = _interopRequireDefault(_tbgFluxFactory);

	var _axios = __webpack_require__(14);

	var _axios2 = _interopRequireDefault(_axios);

	exports['default'] = _tbgFluxFactory2['default'].createStore({
	  name: 'property',
	  data: {},
	  actions: {
	    view: {
	      getProperties: function getProperties() {
	        (0, _axios2['default'])({
	          crossOrigin: true,
	          url: 'http://localhost:1337/property',
	          method: 'get'
	        }).then(this.Actions.handleProperties);
	      }
	    },
	    server: {
	      handleProperties: function handleProperties(resp) {
	        console.log(resp.data);
	        this.setState({ properties: resp.data });
	      }
	    }
	  }
	});
	module.exports = exports['default'];

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = require("axios");

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	// Flux

	var _fluxApp = __webpack_require__(7);

	var _fluxApp2 = _interopRequireDefault(_fluxApp);

	// Components

	// Component

	var LocalLink = (function (_React$Component) {
	  _inherits(LocalLink, _React$Component);

	  function LocalLink(props) {
	    _classCallCheck(this, LocalLink);

	    _get(Object.getPrototypeOf(LocalLink.prototype), 'constructor', this).call(this, props);
	    this.state = {};
	  }

	  _createClass(LocalLink, [{
	    key: '_handleClick',
	    value: function _handleClick(e) {
	      e.preventDefault();
	      _fluxApp2['default'].Actions.setRoute(this.props.route);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        'a',
	        {
	          className: this.props.className,
	          href: this.props.route,
	          onClick: this._handleClick.bind(this)
	        },
	        this.props.children
	      );
	    }
	  }]);

	  return LocalLink;
	})(_react2['default'].Component);

	exports['default'] = LocalLink;
	module.exports = exports['default'];

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	// Styles
	// import './style'

	// Flux

	var _appsProperties = __webpack_require__(12);

	var _appsProperties2 = _interopRequireDefault(_appsProperties);

	var _componentsLocal_link = __webpack_require__(15);

	var _componentsLocal_link2 = _interopRequireDefault(_componentsLocal_link);

	// Components

	// Component

	var Home = (function (_React$Component) {
	    _inherits(Home, _React$Component);

	    function Home(props) {
	        _classCallCheck(this, Home);

	        _get(Object.getPrototypeOf(Home.prototype), 'constructor', this).call(this, props);
	        this.state = {};
	    }

	    _createClass(Home, [{
	        key: 'render',
	        value: function render() {
	            return _react2['default'].createElement(
	                'div',
	                { className: 'contain content' },
	                _react2['default'].createElement(_appsProperties2['default'], null),
	                _react2['default'].createElement(
	                    _componentsLocal_link2['default'],
	                    { route: 'property111' },
	                    'fake link to redirect home'
	                )
	            );
	        }
	    }]);

	    return Home;
	})(_react2['default'].Component);

	exports['default'] = Home;
	module.exports = exports['default'];

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	// Components

	var _local_link = __webpack_require__(15);

	var _local_link2 = _interopRequireDefault(_local_link);

	// Component

	var Nav = (function (_React$Component) {
	  _inherits(Nav, _React$Component);

	  function Nav(props) {
	    _classCallCheck(this, Nav);

	    _get(Object.getPrototypeOf(Nav.prototype), 'constructor', this).call(this, props);
	    this.state = {};
	  }

	  _createClass(Nav, [{
	    key: '_handleClick',
	    value: function _handleClick(e) {
	      e.preventDefault();
	      app.Actions.setRoute(this.props.route);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        'div',
	        { className: 'archie-menu' },
	        _react2['default'].createElement(
	          'div',
	          { className: 'contain' },
	          _react2['default'].createElement(
	            'div',
	            { className: 'archie__logo' },
	            _react2['default'].createElement(
	              _local_link2['default'],
	              { route: 'home' },
	              _react2['default'].createElement('i', { className: 'fa fa-heart red archie__logo__icon' }),
	              _react2['default'].createElement(
	                'span',
	                { className: 'archie__logo__text' },
	                'boarder'
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return Nav;
	})(_react2['default'].Component);

	exports['default'] = Nav;
	module.exports = exports['default'];

/***/ }
/******/ ]);