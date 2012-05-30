define(function(require) {
  var Example = require('modules/example');
  
  describe('Example', function() {
    describe('Photo', function() {
      var photo = new Example.Photo();
      it('should have proper defaults', function(done) {
          expect(photo.get('src')).to.equal('/images/placeholder.jpg');
          expect(photo.get('caption')).to.equal('Waiting for content...');
          done();
      });
    });
  });
}); 