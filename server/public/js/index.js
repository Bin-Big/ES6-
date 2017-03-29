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

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	{
	  // 定义
	  var a1 = Symbol();
	  var a2 = Symbol.for('a2');
	  var a3 = Symbol();
	  var a4 = Symbol.for('a2');

	  console.log(a1 === a3, a2 === a4);
	  // 作用
	}

	{
	  var _a = Symbol();
	  var _a2 = Symbol.for('a2');
	  var _a3 = Symbol();
	  var _a4 = Symbol.for('a2');

	  console.log({ a1: Symbol.keyFor(_a), a2: Symbol.keyFor(_a2), a3: Symbol.keyFor(_a3), a4: Symbol.keyFor(_a4) });
	}

	{
	  var _obj;

	  // 使用for...in和for...of都无法遍历到Symbol值的属性，Symbol值作为对象的属性名，
	  // 也无法通过Object.keys()、Object.getOwnPropertyNames()来获取了。
	  // 但是，不同担心，这种平常的需求肯定是会有解决办法的。
	  // 我们可以使用Object.getOwnPropertySymbols()方法获取一个对象上的Symbol属性名。
	  // 也可以使用Reflect.ownKeys()返回所有类型的属性名，包括常规属性名和 Symbol属性名
	  var _a5 = Symbol.for('a1');
	  var _a6 = Symbol('a2');
	  var obj = (_obj = {}, _defineProperty(_obj, _a5, 123), _defineProperty(_obj, _a6, 890), _defineProperty(_obj, 'b', 345), _defineProperty(_obj, 'c', 567), _obj);

	  var _iteratorNormalCompletion = true;
	  var _didIteratorError = false;
	  var _iteratorError = undefined;

	  try {
	    for (var _iterator = Object.entries(obj)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	      var _step$value = _slicedToArray(_step.value, 2),
	          key = _step$value[0],
	          value = _step$value[1];

	      console.log(key, value);
	    }
	  } catch (err) {
	    _didIteratorError = true;
	    _iteratorError = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion && _iterator.return) {
	        _iterator.return();
	      }
	    } finally {
	      if (_didIteratorError) {
	        throw _iteratorError;
	      }
	    }
	  }

	  Object.getOwnPropertySymbols(obj).forEach(function (item) {
	    console.log(obj[item]);
	  });

	  Reflect.ownKeys(obj).forEach(function (item) {
	    console.log(obj[item]);
	  });
	}

/***/ }
/******/ ]);