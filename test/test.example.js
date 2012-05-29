define([
  "namespace",

  // Libs
  "jquery",
  "use!backbone",

  // Modules
  "modules/example"
],

function(namespace, $, Backbone, Example) {
  var expect = chai.expect;
  
  describe('Example.Photo', function() {
    describe('defaults', function() {
      /*
      // Use Sinon to replace jQuery's ajax method
      // with a spy. This spy will also come with
      // some success data.
      beforeEach(function() {
        sinon.stub($, 'ajax').yieldsTo('success', {
          count: '100',
          message: 'oh boy, 100 pickles!'
        });
      });

      // Restor jQuery's ajax method to its
      // original state
      afterEach(function() {
        $.ajax.restore();
      });

    */
      it('should have the proper defaults', function(done) {
        var photo = new Example.Photo();
        expect(photo.get('src')).to.equal('/images/placeholder.jpg');
        done();
      });
    });
  });

  return {
    name: 'test.example'
  };

});

