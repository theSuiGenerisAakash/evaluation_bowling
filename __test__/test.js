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
    it('Testing an input arrayw with valid length', () => {
      const arrayMax = [1, 2, 1, 2, 1, 2, 1, 2, 6, 4, 10, 1, 2, 1, 2, 1, 2, 10, 2, 3];
      expect(bowling.verifyArr(arrayMax)).toBe(true);
    });
  });
  describe('Testing array elements for validity', () => {
    it('Testing the element to be greater than -1', () => {
      const minElem = 0;
      expect(bowling.verifyNum(minElem)).toBe(true);
    });
  });
});
