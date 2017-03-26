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

	{
	    // 默认值
	    var test = function test(x) {
	        var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'World';

	        console.log(x, y);
	    };

	    test('hello');
	    test('test', 'one');

	    // 注意默认值后面不能有非默认值的参数
	}

	{
	    // 因为length属性的含义是，该函数预期传入的参数个数;length属性的返回值，等于函数的参数个数减去指定了默认值的参数个数。
	    console.log('一个参数', function (a) {}.length);
	    console.log('二个参数', function (a, b, c) {
	        var d = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 7;
	    }.length);
	}

	{
	    var _test = function _test(x) {
	        var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : x;

	        console.log({ x: x, y: y });
	    };

	    // 作用域
	    var a = 'test';

	    _test('kill');
	}

	{
	    // rest参数
	    var _test2 = function _test2() {
	        for (var _len = arguments.length, arg = Array(_len), _key = 0; _key < _len; _key++) {
	            arg[_key] = arguments[_key];
	        }

	        var _iteratorNormalCompletion = true;
	        var _didIteratorError = false;
	        var _iteratorError = undefined;

	        try {
	            for (var _iterator = arg[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                var value = _step.value;

	                console.log(value);
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
	    };

	    _test2(1, 'a', 'b');
	    // 注意，rest 参数之后不能再有其他参数（即只能是最后一个参数），否则会报错。
	}

	{
	    // name属性
	    var testName = function testName() {};

	    console.log(testName.name); // "foo"
	}

	{
	    // 箭头函数
	    var arrow = function arrow(v) {
	        return v * 2;
	    };
	    console.log(arrow.name);
	    console.log(arrow(2));
	    var arrow2 = function arrow2() {
	        return 5;
	    };
	    console.log(arrow2());
	}

	{
	    // 尾调用
	    var tail = function tail(x) {
	        console.log('tail', x);
	    };

	    var fa = function fa(x) {
	        return tail(x);
	    };

	    fa(123);
	}

/***/ }
/******/ ]);