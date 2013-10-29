var scope = require('with');
var assert = require('assert');

describe('With', function(){
  it("should extend the scope chain of a statement", function() {
    var fn = scope('name');
    assert(fn({
      name: 'olivier'
    }) === 'olivier');
  });

});

