const assert = require('chai').assert;
const randomNumber = require('@maxday/random-number');
randomNumber.generateNumber
describe('Random number test', function() {
  describe('randomNumber.generateNumber', function() {
    it('should return a number between 0 and 1', function() {
      assert.isAtLeast(randomNumber.generateNumber(), 0);
      assert.isAtMost(randomNumber.generateNumber(), 1);
    });
  });
});