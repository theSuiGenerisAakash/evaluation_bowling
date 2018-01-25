const bowling = require('../bowling');

describe('Testing input for validation:', () => {
  describe('Testing array for validation', () => {
    it('Testing for min array length of 11', () => {
      const arrayMin = [10, 10, 10, 10, 10, 10, 10, 10, 10, 2, 3];
      expect(bowling.verifyArr(arrayMin)).toBe(true);
    });
  });
});
