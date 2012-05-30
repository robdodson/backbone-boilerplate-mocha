define(function(require) {
    var Example = require('modules/example');
    
    describe('Example', function() {
        describe('Photo', function() {
           var photo = new Example.Photo();
           console.log(photo); 
        });
    });
}); 