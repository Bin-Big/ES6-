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
	    console.log('timeout');
	  });

	  var ajax2 = function ajax2() {
	    console.log('执行2');
	    return new Promise(function (resolve, reject) {
	      setTimeout(function () {
	        resolve();
	      }, 1000);
	    });
	  };

	  ajax2().then(function () {
	    console.log('timeout2');
	  });

	  // 如果想执行多个步骤
	  ajax2().then(function () {
	    console.log('timeout2');
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
	  // catch
	  var _ajax = function _ajax(num) {
	    return new Promise(function (resolve, reject) {
	      if (num > 5) {
	        resolve();
	      } else {
	        throw new Error('出错了');
	      }
	    });
	  };

	  _ajax(6).then(function () {
	    console.log('6');
	  }).catch(function (err) {
	    console.log(err);
	  });
	  _ajax(3).then(function () {
	    console.log('6');
	  }).catch(function (err) {
	    console.log(err);
	  });
	}

/***/ }
/******/ ]);