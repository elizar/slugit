var slugit = require('../');
var test = require('tap').test;
test('convert title string into a slug', function(t) {
  var titleString = 'The quick brown fox';
  t.type(slugit(titleString), 'string', 'should return a string');
  t.end();
});
