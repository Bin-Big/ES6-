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

	{
	  // Set的定义
	  var list = new Set();
	  list.add(5);
	  list.add(7);

	  console.log('zize', list.size);
	}

	{
	  // Set的定义
	  var arr = [1, 2, 3, 4, 5];
	  var _list = new Set(arr);
	  console.log('size', _list.size);
	}

	{
	  // Set的元素是唯一的
	  var _list2 = new Set();
	  _list2.add(1);
	  _list2.add(2);
	  _list2.add(1);
	  console.log('list', _list2);

	  // 去重
	  var _arr = [1, 2, 3, 1, 2];
	  var list2 = new Set(_arr);
	  console.log('list unique', list2);

	  var arr2 = [1, 2, 3, 1, '2'];
	  var list3 = new Set(arr2);
	  console.log('不换转换数据类型', list3);
	}

	{
	  // Set实例的几个方法
	  var _arr2 = ['add', 'delete', 'clear', 'has'];

	  var _list3 = new Set(_arr2);

	  console.log('has', _list3.has('add'));
	  console.log('delete', _list3.delete('add'), _list3);

	  _list3.clear();

	  console.log('list', _list3);
	}

	{
	  // Set实例的读取
	  // keys()：返回键名的遍历器
	  // values()：返回键值的遍历器
	  // entries()：返回键值对的遍历器
	  // forEach()：使用回调函数遍历每个成员
	  var _arr3 = ['add', 'delete', 'clear', 'has'];
	  var _list4 = new Set(_arr3);

	  var _iteratorNormalCompletion = true;
	  var _didIteratorError = false;
	  var _iteratorError = undefined;

	  try {
	    for (var _iterator = _list4.keys()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	      var key = _step.value;

	      console.log('keys', key);
	    }
	    // 也可以省略values
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

	  var _iteratorNormalCompletion2 = true;
	  var _didIteratorError2 = false;
	  var _iteratorError2 = undefined;

	  try {
	    for (var _iterator2 = _list4[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	      var value = _step2.value;

	      console.log('values', value);
	    }
	  } catch (err) {
	    _didIteratorError2 = true;
	    _iteratorError2 = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion2 && _iterator2.return) {
	        _iterator2.return();
	      }
	    } finally {
	      if (_didIteratorError2) {
	        throw _iteratorError2;
	      }
	    }
	  }

	  var _iteratorNormalCompletion3 = true;
	  var _didIteratorError3 = false;
	  var _iteratorError3 = undefined;

	  try {
	    for (var _iterator3 = _list4.entries()[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	      var _step3$value = _slicedToArray(_step3.value, 2),
	          _key = _step3$value[0],
	          _value = _step3$value[1];

	      console.log('entries', [_key, _value]);
	    }
	  } catch (err) {
	    _didIteratorError3 = true;
	    _iteratorError3 = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion3 && _iterator3.return) {
	        _iterator3.return();
	      }
	    } finally {
	      if (_didIteratorError3) {
	        throw _iteratorError3;
	      }
	    }
	  }

	  _list4.forEach(function (item) {
	    return console.log('forEach', item);
	  });
	}

	{

	  // weakSet
	  var weakList = new WeakSet();
	  var arg = {};

	  weakList.add(document);
	  weakList.add(arg);

	  console.log('has-document', weakList.has(document));
	  console.log('has-arg', weakList.has(arg));

	  console.log('delete', weakList.delete(document), weakList);

	  // 没有size属性，不能遍历，弱引用
	}

	{
	  // JavaScript的对象（Object），
	  // 本质上是键值对的集合（Hash结构），
	  // 但是传统上只能用字符串当作键。这给它的使用带来了很大的限制。
	  var map = new Map();

	  var _arr4 = ['123'];

	  map.set(_arr4, 456);

	  console.log('map', map, map.get(_arr4));
	}

	{
	  // Map定义可以带参数
	  var _map = new Map([['a', 123], ['b', 345, 'c', 456]]);

	  console.log('arg', _map);

	  console.log('size', _map.size);
	  console.log('get', _map.get('a'));
	  console.log('delete', _map.delete('a'), _map);
	  console.log('clear', _map.clear(), _map);
	  // keys()：返回键名的遍历器。
	  // values()：返回键值的遍历器。
	  // entries()：返回所有成员的遍历器。
	  // forEach()：遍历Map的所有成员
	}

	{
	  var weakmap = new WeakMap();

	  var o = {};

	  weakmap.set(o, 123);
	  console.log('weakmap', weakmap.get(o));

	  // weakmap.set('12','34');
	  // 没有size属性，不能遍历，不能clear
	}

/***/ }
/******/ ]);