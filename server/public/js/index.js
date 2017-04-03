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
	  // 基本定义
	  var ajax = function ajax(callback) {
	    console.log('执行');
	    setTimeout(function () {
	      callback && callback();
	    }, 1000);
	  };

	  ajax(function () {
	    console.log('timeout1');
	  });
	}

	{
	  // promise
	  var _ajax = function _ajax() {
	    console.log('执行2');
	    return new Promise(function (resolve, reject) {
	      setTimeout(function () {
	        resolve();
	      }, 1000);
	    });
	  };

	  _ajax().then(function () {
	    console.log('promise', 'timeout2');
	  });
	}

	{
	  // 多步调用
	  var _ajax2 = function _ajax2() {
	    console.log('执行3');
	    return new Promise(function (resolve, reject) {
	      setTimeout(function () {
	        resolve();
	      }, 1000);
	    });
	  };
	  _ajax2().then(function () {
	    return new Promise(function (resolve, reject) {
	      setTimeout(function () {
	        resolve();
	      }, 1000);
	    });
	  }).then(function () {
	    console.log('timeout3');
	  });
	}

	{
	  var _ajax3 = function _ajax3(num) {
	    console.log('执行3');
	    return new Promise(function (resolve, reject) {
	      if (num > 5) {
	        resolve();
	      } else {
	        throw new Error('出错了');
	      }
	    });
	  };

	  _ajax3(6).then(function () {
	    console.log(6);
	  }).catch(function (err) {
	    console.log('catch', err);
	  });

	  _ajax3(3).then(function () {
	    console.log(3);
	  }).catch(function (err) {
	    console.log('catch', err);
	  });
	}

/***/ }
/******/ ]);