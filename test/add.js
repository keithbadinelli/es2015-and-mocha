const expect = require('chai').expect;
const add = require('../src/add');

describe('add', function() {
 it('should add two numbers', function() {
   expect(add(1, 1)).to.equal(2);
 });
});
