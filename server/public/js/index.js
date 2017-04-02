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

	'use strict';

	__webpack_require__(2);

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	{
	  // 定义
	  var parent = function parent() {
	    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'mukewang';

	    _classCallCheck(this, parent);

	    this.name = name;
	  };

	  var v_parent = new parent('v');
	  console.log('name', v_parent.name);
	}

	{
	  // 继承
	  var _parent = function _parent() {
	    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'mukewang';

	    _classCallCheck(this, _parent);

	    this.name = name;
	  };

	  var child = function (_parent2) {
	    _inherits(child, _parent2);

	    function child() {
	      _classCallCheck(this, child);

	      return _possibleConstructorReturn(this, (child.__proto__ || Object.getPrototypeOf(child)).apply(this, arguments));
	    }

	    return child;
	  }(_parent);

	  console.log('child', new child().name);
	}

	{
	  // 继承带参数
	  var _parent3 = function _parent3() {
	    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'mukewang';

	    _classCallCheck(this, _parent3);

	    this.name = name;
	  };

	  var _child = function (_parent4) {
	    _inherits(_child, _parent4);

	    function _child() {
	      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'child';

	      _classCallCheck(this, _child);

	      var _this2 = _possibleConstructorReturn(this, (_child.__proto__ || Object.getPrototypeOf(_child)).call(this, name));

	      _this2.sex = 'male';
	      return _this2;
	    }

	    return _child;
	  }(_parent3);

	  var v_child = new _child('v_child');
	  console.log('child', v_child);
	}

	{
	  // setter 和 getter
	  var Parent = function () {
	    function Parent() {
	      _classCallCheck(this, Parent);

	      this.name = 'test';
	    }

	    _createClass(Parent, [{
	      key: 'longName',
	      get: function get() {
	        return 'mk' + this.name;
	      },
	      set: function set(value) {
	        this.name = value;
	      }
	    }]);

	    return Parent;
	  }();

	  var _v_parent = new Parent();
	  _v_parent.longName = 'net';
	  console.log('getter', _v_parent.longName);
	}

	{
	  // 静态方法
	  var _Parent = function () {
	    function _Parent() {
	      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'parent';

	      _classCallCheck(this, _Parent);

	      this.name = name;
	    }

	    _createClass(_Parent, null, [{
	      key: 'longName',
	      value: function longName() {
	        console.log('longName');
	      }
	    }]);

	    return _Parent;
	  }();

	  var _v_parent2 = new _Parent();
	  _Parent.longName();
	}

	{
	  // 静态属性
	  var _Parent2 = function _Parent2() {
	    _classCallCheck(this, _Parent2);
	  };

	  _Parent2.test = 'test';

	  console.log(new _Parent2().test, _Parent2.test);
	}

/***/ }
/******/ ]);