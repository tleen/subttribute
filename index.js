'use strict';
/**
*
* Script to run in browser context, will scan through title and alt tags
* look for attribute's hidden inside of those tags in the form:
* title="actual title ~ attribute name: attribute value ~ ..."
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

