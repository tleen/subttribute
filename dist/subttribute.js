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
/***/ function(module, exports) {

	'use strict';
	/**
	*
	* Script to run in browser context, will scan through title and alt tags
	* look for attribute's hidden inside of those tags in the form:
	* title="actual title | attribute name: attribute value | ..."
	* will then remove those embedded attributes and stick them on the 
	* element.
	*/
	(function(){
	  document.addEventListener('DOMContentLoaded', function(){
	    
	    var elements = [].slice.call(document.querySelectorAll('*[title*="~"], *[alt*="~"]')) || [];
	    
	    elements.forEach(function(e){
	      
	      ['title', 'alt'].forEach(function(name){
		
		var attrs = (e.getAttribute(name) || '').split('~');
		if(attrs.length === 0) return;

		// set initial content as actual attribute
		var entry = attrs.shift();
		e.setAttribute(name, entry.trim());

		// then look for the embedded attributes
		while(entry = (attrs.shift() || '').trim()){
		  var pair = entry.split(':');
		  e.setAttribute(pair.shift().trim(), (pair.shift() || '').trim());
		}
	      });
	    });
	  });
	})();



/***/ }
/******/ ]);