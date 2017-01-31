webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _platformBrowserDynamic = __webpack_require__(1);
	
	var _app = __webpack_require__(23);
	
	var _app2 = _interopRequireDefault(_app);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	document.addEventListener('DOMContentLoaded', function () {
	  (0, _platformBrowserDynamic.platformBrowserDynamic)().bootstrapModule(_app2.default);
	});

/***/ },

/***/ 23:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _dec, _class;
	
	var _core = __webpack_require__(3);
	
	var _platformBrowser = __webpack_require__(21);
	
	var _common = __webpack_require__(22);
	
	var _app = __webpack_require__(24);
	
	var _user = __webpack_require__(377);
	
	var _user2 = _interopRequireDefault(_user);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var _default = (_dec = (0, _core.NgModule)({
	  imports: [_platformBrowser.BrowserModule, _user2.default, _common.CommonModule],
	  declarations: [_app.AppComponent],
	  bootstrap: [_app.AppComponent] }), _dec(_class = function _default() {
	  _classCallCheck(this, _default);
	}) || _class);

	exports.default = _default;

/***/ },

/***/ 24:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.AppComponent = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _dec, _class; // app.component.js
	
	
	var _core = __webpack_require__(3);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var AppComponent = exports.AppComponent = (_dec = (0, _core.Component)({
	  selector: 'app',
	  template: '\n<div class="body">\n  <header>\n  \t<h1> THIS IS THE HEADER {{ name }} </h1>\n  </header>\n  <main>\n  \t<div>\n  \t\t<user-list></user-list>\n  \t</div>\n  \t<aside>\n  \t\tsome sidemenu\n  \t</aside>\n  </main>\n</div>\n    ',
	  styles: [__webpack_require__(25)],
	  encapsulation: _core.ViewEncapsulation.None
	}), _dec(_class = function () {
	  function AppComponent() {
	    _classCallCheck(this, AppComponent);
	
	    this.name = 'world';
	  }
	
	  _createClass(AppComponent, [{
	    key: 'updateName',
	    value: function updateName(event) {
	      console.log(event);
	      this.name = event;
	    }
	  }]);

	  return AppComponent;
	}()) || _class);

/***/ },

/***/ 25:
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(26);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },

/***/ 26:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(27)();
	// imports
	
	
	// module
	exports.push([module.id, "body {\n  margin: 0; }\n\n* {\n  box-sizing: border-box; }\n\n.body {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column; }\n\nheader {\n  background: #eee;\n  height: 20%; }\n\nmain {\n  flex: 1;\n  display: flex;\n  width: 100%;\n  height: 100%; }\n  main > div {\n    flex: 1; }\n\naside {\n  width: 20%;\n  height: 100%;\n  background: #eef; }\n", ""]);
	
	// exports


/***/ },

/***/ 27:
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },

/***/ 377:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _user = __webpack_require__(378);
	
	var _user2 = _interopRequireDefault(_user);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _user2.default;

/***/ },

/***/ 378:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = undefined;
	
	var _dec, _class;
	
	var _core = __webpack_require__(3);
	
	var _common = __webpack_require__(22);
	
	var _users = __webpack_require__(379);
	
	var _userList = __webpack_require__(380);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var _default = (_dec = (0, _core.NgModule)({
		imports: [_common.CommonModule],
		declarations: [_userList.UserListComponent],
		exports: [_userList.UserListComponent],
		providers: [_users.UsersService]
	}), _dec(_class = function _default() {
		_classCallCheck(this, _default);
	}) || _class);

	exports.default = _default;

/***/ },

/***/ 379:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.UsersService = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _dec, _class;
	
	var _core = __webpack_require__(3);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var UsersService = exports.UsersService = (_dec = (0, _core.Injectable)(), _dec(_class = function () {
		function UsersService() {
			_classCallCheck(this, UsersService);
	
			this.users = [{
				firstName: 'poop',
				lastName: 'peee'
			}, {
				firstName: 'Falko',
				lastName: 'Krause'
			}];
		}
	
		_createClass(UsersService, [{
			key: 'add',
			value: function add(user) {
				this.users.push(user);
			}
		}, {
			key: 'remove',
			value: function remove(user) {
				this.users = this.users.filter(function (u) {
					return u.firstName != user.firstName;
				});
			}
		}]);

		return UsersService;
	}()) || _class);

/***/ },

/***/ 380:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.UserListComponent = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _dec, _class;
	
	var _core = __webpack_require__(3);
	
	var _users = __webpack_require__(379);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var UserListComponent = exports.UserListComponent = (_dec = (0, _core.Component)({
		selector: 'user-list',
		template: '\n\t<ul>\n\t\t<li *ngFor="let user of users">\n\t\t\t{{ user.firstName }} {{ user.lastName }}\n\t\t</li>\n\t</ul>\n\t'
	}), _dec(_class = function () {
		_createClass(UserListComponent, null, [{
			key: 'parameters',
			get: function get() {
				return [[_users.UsersService]];
			}
		}]);
	
		function UserListComponent(usersService) {
			_classCallCheck(this, UserListComponent);
	
			this.users = usersService.users;
			this.notify = new _core.EventEmitter(false);
		}
	
		return UserListComponent;
	}()) || _class);

/***/ }

});
//# sourceMappingURL=app.js.map