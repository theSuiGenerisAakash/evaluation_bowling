const bowling = require('../bowling');

describe('Testing input for validation:', () => {
  describe('Testing array for validation', () => {
    it('Testing for min array length of 11', () => {
      const arrayMin = [10, 10, 10, 10, 10, 10, 10, 10, 10, 2, 3];
      expect(bowling.verifyArrLen(arrayMin)).toBe(true);
    });
    it('Testing for max array length of 21', () => {
      const arrayMax = [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 10, 2, 3];
      expect(bowling.verifyArrLen(arrayMax)).toBe(true);
    });
    it('Testing an input arrayw with valid length', () => {
      const arrayMax = [1, 2, 1, 2, 1, 2, 1, 2, 6, 4, 10, 1, 2, 1, 2, 1, 2, 10, 2, 3];
      expect(bowling.verifyArrLen(arrayMax)).toBe(true);
    });
  });
  describe('Testing array elements for validity', () => {
    it('Testing the element to be greater than -1', () => {
      const minElem = 0;
      expect(bowling.verifyNum(minElem)).toBe(true);
    });
    it('Testing the element to be lesser than 11', () => {
      const minElem = 11;
      expect(bowling.verifyNum(minElem)).toBe(false);
    });
    it('Testing a valid element', () => {
      const minElem = 3;
      expect(bowling.verifyNum(minElem)).toBe(true);
    });
  });
  describe('Testing validity of throw frames', () => {
    it('Testing valid throw frames with sum less than 10', () => {
      const throwFrame = [3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6];
      expect(bowling.verifyArr(throwFrame)).toBe(true);
    });
    it('Testing valid throw frames with sum 10 or more than 10', () => {
      const throwFrame = [3, 6, 3, 6, 3, 8, 3, 6, 4, 6, 3, 8, 3, 6, 3, 6, 3, 6, 3, 6];
      expect(bowling.verifyArr(throwFrame)).toBe(false);
    });
  });
});
