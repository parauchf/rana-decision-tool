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
/******/ 	__webpack_require__.p = "http://localhost:8091/assets";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM *//** @jsx React.DOM */
	'use strict'
	var React = __webpack_require__(1)
	var Survey = __webpack_require__(2)

	React.render(React.createElement(Survey, null), document.getElementById('content'))

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */'use strict'
	var React = __webpack_require__(1)
	var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
	var tools = __webpack_require__(3)
	var questions = __webpack_require__(4)
	var selections = __webpack_require__(5)

	module.exports = React.createClass({
	    displayName: 'Survey',

	    componentWillMount: function () {
	    	selections.addChangeListener(this._onChange)
	    },

	    _onChange: function () {
	    	this.forceUpdate()
	    },

	    render: function () {
	    	return React.createElement("div", {className: "wrapper"}, 
		    	React.createElement("div", {className: "survey"}, 
		    	React.createElement("h2", null, "Answer some simple questions about your project:"), 
		    	questions.map(function (q, i) {
		    		return React.createElement(Question, {data: q, count: i + 1})
		    	})
		    	), 
		    	React.createElement("div", {className: "tools"}, 
		    	React.createElement("h2", null, "These are the relevant tools:"), 
		    	
		    	tools.filter(function(tool) {
		    		return true
		    	}).map(function (tool, i) {
		    		var active = Object.keys(selections.getAllSelections()).map(function (q) {
		    			return (!(q in tool) || (tool[q] === selections.getSelection(q)))
		    		}).reduce(function (a,b) {return a && b}, true)
		    		
		    		return React.createElement("span", {key: tool.id, className: "tool " + (active ? tool.phase : "grayed")}, tool.name)
		    	}).sort(function(a, b) {
		    		return a.name > b.name
		    	})
		    	
		    	)
	    	)
	    }
	})

	var Question = React.createClass({displayName: "Question",
		getInitialState: function () {
			return {choice: null}
		},

		onChoice: function (e) {
			var q = this.props.data
			selections.setSelection(q.id, e.currentTarget.name)
			this.forceUpdate()
		},

		render: function() {
			var _this = this
			var q = this.props.data
			var id = q.id
	    	var question = q.text
	    	var choices = q.choices
	    	var count = this.props.count

	        return 	React.createElement("div", {key: "q-" + q.id, className: "question"}, 
	        	React.createElement("div", null, " ", React.createElement("span", {className: "num-circle"}, count, ". "), question, " "), 
	        	
	        		choices.map(function (choice) {
	        			var value = selections[q.id]
	        			var active = (selections.getSelection(q.id) === choice.id)
	        			return React.createElement("div", {className: "choice"}, 
	        			React.createElement("label", null, 
	        			React.createElement("span", null, React.createElement("input", {	type: "radio", 
	        							onChange: _this.onChoice, 
	        							checked: active, 
	        							name: choice.id})
	        			), 
	        			React.createElement("span", {className: active ? 'selected' : ''}, 
	        				choice.text
	        			)
	        			)
	        			)
	        		})
	        	
	        )
	    }
	})

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = [
	{"id": 1,"name": "Capital Investment Planning","phase": "financing","LAND_OWNERSHIP": "PUBLIC_LAND"}, 
	{"id": 2,"name": "Intergovernmental Transfers","phase": "financing","LAND_OWNERSHIP": "PUBLIC_LAND"}, 
	{"id": 3,"name": "Developer Exactions and Impact Fees","phase": "financing","LAND_OWNERSHIP": "PRIVATE_LAND"}, 
	{"id": 4,"name": "Betterment Levies","phase": "financing","LAND_OWNERSHIP": "PRIVATE_LAND"}, 
	{"id": 5,"name": "Business Improvement Districts","phase": "financing","LAND_OWNERSHIP": "PRIVATE_LAND","CADASTRE": "HAS_CADASTRE"}, 
	{"id": 6,"name": "Tax Increment Financing (TIF)","phase": "financing","LAND_OWNERSHIP": "PRIVATE_LAND","CAP_MKTS": "ACCESS_TO_CAP_MKTS","TAX": "HAS_TAX","CADASTRE": "HAS_CADASTRE"}, 
	{"id": 7,"name": "Payment-in-Lieu-of-Taxes (PILOT) 7","phase": "financing","CAP_MKTS": "ACCESS_TO_CAP_MKTS","TAX": "HAS_TAX","CADASTRE": "HAS_CADASTRE"}, 
	{"id": 8,"name": "Special Assessment Districts","phase": "financing","LAND_OWNERSHIP": "PRIVATE_LAND","CAP_MKTS": "ACCESS_TO_CAP_MKTS","TAX": "HAS_TAX","CADASTRE": "HAS_CADASTRE"}, 
	{"id": 9,"name": "Density Bonus (inclusionary zoning)","phase": "financing","LAND_OWNERSHIP": "PRIVATE_LAND","CADASTRE": "HAS_CADASTRE","ZONING": "HAS_ZONING"}, 
	{"id": 10,"name": "Upzoning","phase": "financing","LAND_OWNERSHIP": "PRIVATE_LAND","TAX": "HAS_TAX","CADASTRE": "HAS_CADASTRE","ZONING": "HAS_ZONING"}, 
	{"id": 11,"name": "Transferable Development Rights","phase": "financing","LAND_OWNERSHIP": "PRIVATE_LAND","CADASTRE": "HAS_CADASTRE","ZONING": "HAS_ZONING"}, 
	{"id": 12,"name": "Direct Grants","phase": "financing","LAND_OWNERSHIP": "PRIVATE_LAND"}, 
	{"id": 13,"name": "Low-Cost Loans","phase": "financing","LAND_OWNERSHIP": "PRIVATE_LAND"}, 
	{"id": 14,"name": "Tax Incentives","phase": "financing","LAND_OWNERSHIP": "PRIVATE_LAND","TAX": "HAS_TAX","CADASTRE": "HAS_CADASTRE","ZONING": "HAS_ZONING"}, 
	{"id": 15,"name": "Sale or Long-Term Lease of a Municipally-Owned Site through an Arm's Length Transaction","phase": "financing","LAND_OWNERSHIP": "PUBLIC_LAND"}, 
	{"id": 16,"name": "Land Swaps","phase": "financing","LAND_OWNERSHIP": "PUBLIC_LAND"}, 
	{"id": 17,"name": "Sale or Long-Term Lease through a Strategic Negotiated Transaction","phase": "financing","LAND_OWNERSHIP": "PUBLIC_LAND"}, 
	{"id": 18,"name": "Public Land as an \"In Kind\" Payment in Return for Construction of Public Infrastructure","phase": "financing","LAND_OWNERSHIP": "PUBLIC_LAND"}, 
	{"id": 19,"name": "Public Land as an Equity Contribution toward a Joint Venture 19","phase": "financing","LAND_OWNERSHIP": "PUBLIC_LAND"}, 
	{"id": 20,"name": "Land Readjustment","phase": "financing","LAND_OWNERSHIP": "PRIVATE_LAND","CADASTRE": "HAS_CADASTRE","LAND_ASSEMBLAGE": "FRAGMENTED_LAND","ZONING": "HAS_ZONING","EXISTING_COMMUNITY": "HAS_EXISTING_COMMUNITY"}, 
	{"id": 21,"name": "Urban Redevelopment","phase": "financing","LAND_OWNERSHIP": "PRIVATE_LAND","LAND_ASSEMBLAGE": "FRAGMENTED_LAND","ZONING": "HAS_ZONING"}, 
	{"id": 22,"name": "Land Sharing","phase": "planning","INFROMAL_SETTLE": "HAS_INFORMAL_SETTLEMENTS"}, 
	{"id": 23,"name": "Expropriation","phase": "planning","LAND_OWNERSHIP": "PRIVATE_LAND"}, 
	{"id": 24,"name": "The Right of Preemption","phase": "planning","LAND_OWNERSHIP": "PRIVATE_LAND","CADASTRE": "HAS_CADASTRE","EXISTING_COMMUNITY": "HAS_EXISTING_COMMUNITY"}, 
	{"id": 25,"name": "Land Administration","phase": "planning","CADASTRE": "NO_CADASTRE"}, 
	{"id": 26,"name": "Valuation of Public Land","phase": "planning","LAND_OWNERSHIP": "PUBLIC_LAND"}, 
	{"id": 27,"name": "Progressive Taxation of Vacant Land","phase": "planning","LAND_OWNERSHIP": "PRIVATE_LAND","TAX": "HAS_TAX","CADASTRE": "HAS_CADASTRE","ZONING": "HAS_ZONING"}, 
	{"id": 28,"name": "Zoning and Land Use Planning","phase": "planning","ZONING": "NO_ZONING"}, 
	{"id": 29,"name": "Charettes","phase": "planning","INFROMAL_SETTLE": "HAS_INFORMAL_SETTLEMENTS"}, 
	{"id": 30,"name": "Using Technology for Public Participation","phase": "planning"}, 
	{"id": 31,"name": "Site Assessment","phase": "planning","ENVIRON_CONCERNS": "HAS_ENVIRON_CONCERNS"}, 
	{"id": 32,"name": "Site Investigation","phase": "planning","ENVIRON_CONCERNS": "HAS_ENVIRON_CONCERNS"}, 
	{"id": 33,"name": "Environmental Impact Assessment (EIA) and Site Remediation Plan","phase": "planning","ENVIRON_CONCERNS": "HAS_ENVIRON_CONCERNS"}, 
	{"id": 34,"name": "Tools to Mitigate the Undesirable Social Impacts of Urban Regeneration and Resettlement","phase": "planning","EXISTING_COMMUNITY": "HAS_EXISTING_COMMUNITY","INFROMAL_SETTLE": "HAS_INFORMAL_SETTLEMENTS"}, 
	{"id": 35,"name": "Inclusionary Zoning","phase": "financing","EXISTING_COMMUNITY": "HAS_EXISTING_COMMUNITY","INFROMAL_SETTLE": "HAS_INFORMAL_SETTLEMENTS"}, 
	{"id": 36,"name": "Housing Vouchers (or demand-side subsidies) as an Alternative to Inclusionary Zoning","phase": "financing","EXISTING_COMMUNITY": "HAS_EXISTING_COMMUNITY","INFROMAL_SETTLE": "HAS_INFORMAL_SETTLEMENTS"}, 
	{"id": 37,"name": "Macro-Level Scoping","phase": "scoping"}, 
	{"id": 38,"name": "Micro-Level Scoping","phase": "scoping"}, 
	{"id": 39,"name": "The Planning Framework","phase": "planning"}, 
	{"id": 40,"name": "Master Planning","phase": "planning"}, 
	{"id": 41,"name": "Developing Design Standards","phase": "planning"}, 
	{"id": 42,"name": "Setting the Scene","phase": "planning"}, 
	{"id": 43,"name": "Defing the Implementation Process and Institutional Arrangements","phase": "planning"}, 
	{"id": 44,"name": "Defining Early Wins","phase": "planning"}
	]

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = [
		{
			'id': 'CAP_MKTS',
			'text': 'Is there access to capital markets?',
			'choices': [
				{
					'id': 'NO_CAP_MKTS',
					'text': 'No, there is mechanism for public borrowing'
				},
				{
					'id': 'ACCESS_TO_CAP_MKTS',
					'text': 'Yes, the region or municipality can issue debt'
				}
			]
		},
		{
			'id': 'LAND_OWNERSHIP',
			'text': 'Is the land in question publicly owned?',
			'choices': [
				{
					'id': 'PUBLIC_LAND',
					'text': 'Yes, the land is owned by the region or municipality'
				},
				{
					'id': 'PRIVATE_LAND',
					'text': 'No, the land is privately owned'
				}
			]
		},
		{
			'id': 'TAX',
			'text': 'Is there a property tax collection framework in place?',
			'choices': [
				{
					'id': 'HAS_TAX',
					'text': 'Yes, there is a property tax colleciton framework'
				},
				{
					'id': 'NO_TAX',
					'text': 'No, there is no such system'
				}
			]
		},
		{
			'id': 'CADASTRE',
			'text': 'Is there a property cadatastral database or record system?',
			'choices': [
				{
					'id': 'HAS_CADASTRE',
					'text': 'Yes, property cadastre records are available'
				},
				{
					'id': 'NO_CADASTRE',
					'text': 'No, there are no formal records'
				}
			]
		},
		{
			'id': 'LAND_ASSEMBLAGE',
			'text': 'Is the land made up of a single parcel, or fragmented?',
			'choices': [
				{
					'id': 'SINGLE_PARCEL',
					'text': 'A single parcel'
				},
				{
					'id': 'FRAGMENTED_LAND',
					'text': 'Fragmented among several parcels'
				}
			]
		},
		{
			'id': 'ZONING',
			'text': 'Is there a zoning or land use planning framework in place?',
			'choices': [
				{
					'id': 'HAS_ZONING',
					'text': 'There is a zoning or land use planning process already in place'
				},
				{
					'id': 'NO_ZONING',
					'text': 'There is no zoning or land use planning'
				}
			]
		},
		{
			'id': 'ENVIRON_CONCERNS',
			'text': 'Are there environmental concerns with the land?',
			'choices': [
				{
					'id': 'HAS_ENVIRON_CONCERNS',
					'text': 'Yes, environmental concerns have been identified with the land'
				},
				{
					'id': 'NO_ENVIRON_CONCERNS',
					'text': 'No, there are no particular environmental concerns'
				}
			]
		},
		{
			'id': 'EXISTING_COMMUNITY',
			'text': 'Is there an existing community on the land?',
			'choices': [
				{
					'id': 'HAS_EXISTING_COMMUNITY',
					'text': 'Yes, there is an existing community on the land'
				},
				{
					'id': 'NO_EXISTING_COMMUNITY',
					'text': 'No, there is no existing community'
				}
			]
		},
		{
			'id': 'INFROMAL_SETTLE',
			'text': 'Are there informal settlements or renters on the land?',
			'choices': [
				{
					'id': 'HAS_INFORMAL_SETTLEMENTS',
					'text': 'Yes, there are informal settlements or renters on the land'
				},
				{
					'id': 'NO_INFORMAL_SETTLEMENTS',
					'text': 'No, there are no informal settlements or renters'
				}
			]
		}
	]

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var EventEmitter = __webpack_require__(6)
	var assign = __webpack_require__(7)
	var _selections = {}

	var selectionStore = module.exports = assign({}, EventEmitter.prototype, {
		addChangeListener: function (callback) {
			this.on('CHANGE', callback);
		},

		removeChangeListener: function (callback) {
			this.removeListener('CHANGE', callback);
		},

		getSelection: function (option) {
			return _selections[option]
		},

		getAllSelections: function () {
			return _selections
		},

		setSelection: function (option, value) {
			_selections[option] = value
			selectionStore.emit('CHANGE')
		}

	});

/***/ },
/* 6 */
/***/ function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	function EventEmitter() {
	  this._events = this._events || {};
	  this._maxListeners = this._maxListeners || undefined;
	}
	module.exports = EventEmitter;

	// Backwards-compat with node 0.10.x
	EventEmitter.EventEmitter = EventEmitter;

	EventEmitter.prototype._events = undefined;
	EventEmitter.prototype._maxListeners = undefined;

	// By default EventEmitters will print a warning if more than 10 listeners are
	// added to it. This is a useful default which helps finding memory leaks.
	EventEmitter.defaultMaxListeners = 10;

	// Obviously not all Emitters should be limited to 10. This function allows
	// that to be increased. Set to zero for unlimited.
	EventEmitter.prototype.setMaxListeners = function(n) {
	  if (!isNumber(n) || n < 0 || isNaN(n))
	    throw TypeError('n must be a positive number');
	  this._maxListeners = n;
	  return this;
	};

	EventEmitter.prototype.emit = function(type) {
	  var er, handler, len, args, i, listeners;

	  if (!this._events)
	    this._events = {};

	  // If there is no 'error' event listener then throw.
	  if (type === 'error') {
	    if (!this._events.error ||
	        (isObject(this._events.error) && !this._events.error.length)) {
	      er = arguments[1];
	      if (er instanceof Error) {
	        throw er; // Unhandled 'error' event
	      }
	      throw TypeError('Uncaught, unspecified "error" event.');
	    }
	  }

	  handler = this._events[type];

	  if (isUndefined(handler))
	    return false;

	  if (isFunction(handler)) {
	    switch (arguments.length) {
	      // fast cases
	      case 1:
	        handler.call(this);
	        break;
	      case 2:
	        handler.call(this, arguments[1]);
	        break;
	      case 3:
	        handler.call(this, arguments[1], arguments[2]);
	        break;
	      // slower
	      default:
	        len = arguments.length;
	        args = new Array(len - 1);
	        for (i = 1; i < len; i++)
	          args[i - 1] = arguments[i];
	        handler.apply(this, args);
	    }
	  } else if (isObject(handler)) {
	    len = arguments.length;
	    args = new Array(len - 1);
	    for (i = 1; i < len; i++)
	      args[i - 1] = arguments[i];

	    listeners = handler.slice();
	    len = listeners.length;
	    for (i = 0; i < len; i++)
	      listeners[i].apply(this, args);
	  }

	  return true;
	};

	EventEmitter.prototype.addListener = function(type, listener) {
	  var m;

	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');

	  if (!this._events)
	    this._events = {};

	  // To avoid recursion in the case that type === "newListener"! Before
	  // adding it to the listeners, first emit "newListener".
	  if (this._events.newListener)
	    this.emit('newListener', type,
	              isFunction(listener.listener) ?
	              listener.listener : listener);

	  if (!this._events[type])
	    // Optimize the case of one listener. Don't need the extra array object.
	    this._events[type] = listener;
	  else if (isObject(this._events[type]))
	    // If we've already got an array, just append.
	    this._events[type].push(listener);
	  else
	    // Adding the second element, need to change to array.
	    this._events[type] = [this._events[type], listener];

	  // Check for listener leak
	  if (isObject(this._events[type]) && !this._events[type].warned) {
	    var m;
	    if (!isUndefined(this._maxListeners)) {
	      m = this._maxListeners;
	    } else {
	      m = EventEmitter.defaultMaxListeners;
	    }

	    if (m && m > 0 && this._events[type].length > m) {
	      this._events[type].warned = true;
	      console.error('(node) warning: possible EventEmitter memory ' +
	                    'leak detected. %d listeners added. ' +
	                    'Use emitter.setMaxListeners() to increase limit.',
	                    this._events[type].length);
	      if (typeof console.trace === 'function') {
	        // not supported in IE 10
	        console.trace();
	      }
	    }
	  }

	  return this;
	};

	EventEmitter.prototype.on = EventEmitter.prototype.addListener;

	EventEmitter.prototype.once = function(type, listener) {
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');

	  var fired = false;

	  function g() {
	    this.removeListener(type, g);

	    if (!fired) {
	      fired = true;
	      listener.apply(this, arguments);
	    }
	  }

	  g.listener = listener;
	  this.on(type, g);

	  return this;
	};

	// emits a 'removeListener' event iff the listener was removed
	EventEmitter.prototype.removeListener = function(type, listener) {
	  var list, position, length, i;

	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');

	  if (!this._events || !this._events[type])
	    return this;

	  list = this._events[type];
	  length = list.length;
	  position = -1;

	  if (list === listener ||
	      (isFunction(list.listener) && list.listener === listener)) {
	    delete this._events[type];
	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);

	  } else if (isObject(list)) {
	    for (i = length; i-- > 0;) {
	      if (list[i] === listener ||
	          (list[i].listener && list[i].listener === listener)) {
	        position = i;
	        break;
	      }
	    }

	    if (position < 0)
	      return this;

	    if (list.length === 1) {
	      list.length = 0;
	      delete this._events[type];
	    } else {
	      list.splice(position, 1);
	    }

	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);
	  }

	  return this;
	};

	EventEmitter.prototype.removeAllListeners = function(type) {
	  var key, listeners;

	  if (!this._events)
	    return this;

	  // not listening for removeListener, no need to emit
	  if (!this._events.removeListener) {
	    if (arguments.length === 0)
	      this._events = {};
	    else if (this._events[type])
	      delete this._events[type];
	    return this;
	  }

	  // emit removeListener for all listeners on all events
	  if (arguments.length === 0) {
	    for (key in this._events) {
	      if (key === 'removeListener') continue;
	      this.removeAllListeners(key);
	    }
	    this.removeAllListeners('removeListener');
	    this._events = {};
	    return this;
	  }

	  listeners = this._events[type];

	  if (isFunction(listeners)) {
	    this.removeListener(type, listeners);
	  } else {
	    // LIFO order
	    while (listeners.length)
	      this.removeListener(type, listeners[listeners.length - 1]);
	  }
	  delete this._events[type];

	  return this;
	};

	EventEmitter.prototype.listeners = function(type) {
	  var ret;
	  if (!this._events || !this._events[type])
	    ret = [];
	  else if (isFunction(this._events[type]))
	    ret = [this._events[type]];
	  else
	    ret = this._events[type].slice();
	  return ret;
	};

	EventEmitter.listenerCount = function(emitter, type) {
	  var ret;
	  if (!emitter._events || !emitter._events[type])
	    ret = 0;
	  else if (isFunction(emitter._events[type]))
	    ret = 1;
	  else
	    ret = emitter._events[type].length;
	  return ret;
	};

	function isFunction(arg) {
	  return typeof arg === 'function';
	}

	function isNumber(arg) {
	  return typeof arg === 'number';
	}

	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}

	function isUndefined(arg) {
	  return arg === void 0;
	}


/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function ToObject(val) {
		if (val == null) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function ownEnumerableKeys(obj) {
		var keys = Object.getOwnPropertyNames(obj);

		if (Object.getOwnPropertySymbols) {
			keys = keys.concat(Object.getOwnPropertySymbols(obj));
		}

		return keys.filter(function (key) {
			return propIsEnumerable.call(obj, key);
		});
	}

	module.exports = Object.assign || function (target, source) {
		var from;
		var keys;
		var to = ToObject(target);

		for (var s = 1; s < arguments.length; s++) {
			from = arguments[s];
			keys = ownEnumerableKeys(Object(from));

			for (var i = 0; i < keys.length; i++) {
				to[keys[i]] = from[keys[i]];
			}
		}

		return to;
	};


/***/ }
/******/ ]);