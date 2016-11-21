webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _platformBrowserDynamic = __webpack_require__(1);
	
	var _app = __webpack_require__(370);
	
	document.addEventListener('DOMContentLoaded', function () {
		(0, _platformBrowserDynamic.platformBrowserDynamic)().bootstrapModule(_app.AppModule);
	});

/***/ },

/***/ 370:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.AppModule = undefined;
	
	var _dec, _class;
	
	var _platformBrowser = __webpack_require__(21);
	
	var _core = __webpack_require__(3);
	
	var _router = __webpack_require__(289);
	
	var _myHeader = __webpack_require__(371);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var routes = {};
	var AppModule = exports.AppModule = (_dec = (0, _core.NgModule)({
		imports: [_platformBrowser.BrowserModule, _router.RouterModule.forRoot(routes)],
		declarations: [App, _myHeader.MyHeaderComponent],
		bootstrap: [App]
	}), _dec(_class = function AppModule() {
		_classCallCheck(this, AppModule);
	}) || _class);

/***/ },

/***/ 371:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.MyHeaderComponent = undefined;
	
	var _dec, _class;
	
	var _core = __webpack_require__(3);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var MyHeaderComponent = exports.MyHeaderComponent = (_dec = (0, _core.Component)({
		selector: 'my-header',
		template: '\n\t<h1> My header </h1>\n\t<ul>\n\t\t<li>nav 1</li>\n\t\t<li>nav 2</li>\n\t</ul>\n\t',
		styles: ['ul: {background: #eee}']
	}), _dec(_class = function MyHeaderComponent() {
		_classCallCheck(this, MyHeaderComponent);
	}) || _class);

/***/ }

});
//# sourceMappingURL=app.js.map