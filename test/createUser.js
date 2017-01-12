const expect = require('chai').expect;
const createUser = require('../src/createUser');

const firstName = 'John';
const lastName = 'Smith';

describe('createUser', function () {
  // Run once before test cases
  before(function () {
    this.user = createUser({
      firstName,
      lastName,
    });
  });

  it('should assign first and last name', function () {
    expect(this.user.firstName).to.equal(firstName);
    expect(this.user.lastName).to.equal(lastName);
  });

  //Nested describe for a method or other subset of functionality
  describe('#fullName', function () {
    // Run once before test cases
    before(function() {
      this.fullName = this.user.fullName();
    });

    it('should return a string', function () {
      expect(this.fullName).to.be.a('string');
    });

    it('should return the user\'s full name', function () {
      expect(this.fullName).to.equal(`${firstName} ${lastName}`);
    });
  });
});
