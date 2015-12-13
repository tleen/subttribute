'use strict';

var expect = chai.expect;
var TIMEOUT = 1000;

describe('subttribute', function(){

  before(function(done){
    // give subttribute time to run
    this.timeout(TIMEOUT + 100);
    setTimeout(done, TIMEOUT);
  });

  describe('set attributes', function(){
    var image1;
    var image2;

    before(function(){
      image1 = document.getElementById('image-one');
      image2 = document.getElementById('image-two');
      expect(image1).to.be.ok;
      expect(image2).to.be.ok;
    });
    
    it('should set attributes on images', function(){
      expect(image1.getAttribute('alt')).to.equal('Some new alt tag');
      expect(image1.getAttribute('class')).to.equal('border border-purple');
      expect(image2.getAttribute('title')).to.equal('Some new title tag');
      expect(image2.getAttribute('class')).to.equal('border border-red');
    });

    it('should reset original attribute', function(){
      expect(image1.getAttribute('title')).to.equal('title text');
      expect(image2.getAttribute('alt')).to.equal('alt text');
    });
    
  });
});
