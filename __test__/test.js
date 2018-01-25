const bowling = require('../bowling');

describe('Testing input for validation:', () => {
  describe('Testing array for validation', () => {
    it('Testing for min array length of 11', () => {
      const arrayMin = [10, 10, 10, 10, 10, 10, 10, 10, 10, 2, 3];
      expect(bowling.verifyArr(arrayMin)).toBe(true);
    });
    it('Testing for max array length of 21', () => {
      const arrayMax = [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 10, 2, 3];
      expect(bowling.verifyArr(arrayMax)).toBe(true);
    });
  });
});
