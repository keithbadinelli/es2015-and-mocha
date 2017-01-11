const expect = require('chai').expect;
const asyncFunction = require('../src/asyncFunction');

describe('asyncFunction', function() {
  it('should call the callback', function(done) {
    asyncFunction((err, result) => {
      expect(result).to.equal('done');
      done();
    });
  });

  it('should resolve the promise', function(done) {
    asyncFunction().then((result) => {
      expect(result).to.equal('done');
      done();
    });
  });
});
