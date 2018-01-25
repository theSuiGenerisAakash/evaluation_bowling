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
    it('Testing throw frames with sum 10 or more than 10', () => {
      const throwFrame = [3, 6, 3, 6, 3, 8, 3, 6, 5, 6, 3, 8, 3, 6, 3, 6, 3, 6, 3, 6];
      expect(bowling.verifyArr(throwFrame)).toBe(false);
    });
    it('Testing all strikes', () => {
      const throwFrame = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10];
      expect(bowling.verifyArr(throwFrame)).toBe(true);
    });
    it('Testing invalid strikes array', () => {
      const throwFrame = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10];
      expect(bowling.verifyArr(throwFrame)).toBe(false);
    });
    it('Testing mix of trivial and strikes array', () => {
      const throwFrame = [10, 10, 10, 10, 10, 10, 3, 6, 10, 2, 4, 10, 10, 3, 5];
      expect(bowling.verifyArr(throwFrame)).toBe(false);
    });
    it('Testing 0 score array', () => {
      const throwFrame = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      expect(bowling.verifyArr(throwFrame)).toBe(true);
    });
    it('Testing 0 score invalid array', () => {
      const throwFrame = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      expect(bowling.verifyArr(throwFrame)).toBe(false);
    });
    it('Testing illegal frame for two strikes', () => {
      const throwFrame = [10, 10, 10, 10, 10, 10, 10, 10, 3, 4, 10, 10];
      expect(bowling.verifyArr(throwFrame)).toBe(false);
    });
    it('Testing all spares', () => {
      const throwFrame = [4, 6, 4, 6, 4, 6, 4, 6, 4, 6, 4, 6, 4, 6, 4, 6, 4, 6, 4, 6, 6];
      expect(bowling.verifyArr(throwFrame)).toBe(true);
    });
    it('Testing all spares with invalid 11th frame', () => {
      const throwFrame = [4, 6, 4, 6, 4, 6, 4, 6, 4, 6, 4, 6, 4, 6, 4, 6, 4, 6, 4, 6, 6, 4];
      expect(bowling.verifyArr(throwFrame)).toBe(false);
    });
    it('Testing all spares with only 10 frames', () => {
      const throwFrame = [4, 6, 4, 6, 4, 6, 4, 6, 4, 6, 4, 6, 4, 6, 4, 6, 4, 6, 4];
      expect(bowling.verifyArr(throwFrame)).toBe(false);
    });
    it('Testing invalid spares', () => {
      const throwFrame = [1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 2, 9, 1, 9, 1, 9, 1, 9, 1, 10, 1, 9];
      expect(bowling.verifyArr(throwFrame)).toBe(false);
    });
    it('Testing mix of spares and trivial (less than 10) scores', () => {
      const throwFrame = [1, 9, 2, 4, 1, 9, 1, 9, 1, 9, 0, 9, 1, 9, 1, 9, 1, 9, 1, 4];
      expect(bowling.verifyArr(throwFrame)).toBe(true);
    });
    it('Testing mix of strikes and spares', () => {
      const throwFrame = [1, 9, 2, 4, 1, 9, 1, 9, 1, 9, 0, 9, 1, 9, 1, 9, 1, 9, 1, 4, 1, 9];
      expect(bowling.verifyArr(throwFrame)).toBe(false);
    });
    it('Testing invalid mix of spares and strikes', () => {
      const throwFrame = [1, 9, 10, 1, 9, 10, 1, 9, 4, 6, 5, 5, 1, 9, 1, 9, 10, 1];
      expect(bowling.verifyArr(throwFrame)).toBe(false);
    });
    it('Testing mix of spares, trivial and strikes', () => {
      const throwFrame = [1, 9, 10, 1, 3, 10, 1, 0, 4, 6, 5, 5, 1, 9, 1, 9, 10, 1, 9];
      expect(bowling.verifyArr(throwFrame)).toBe(true);
    });
    it('Testing mix of spares, trivial and strikes - 2', () => {
      const throwFrame = [1, 9, 10, 1, 3, 10, 1, 0, 4, 6, 5, 5, 10, 2, 4, 5, 1];
      expect(bowling.verifyArr(throwFrame)).toBe(true);
    });
    it('Testing invalid mix of spares, trivial and strikes', () => {
      const throwFrame = [10, 10, 0, 0, 0, 0, 10, 3, 6, 7, 2, 4, 6, 1, 1, 3, 7];
      expect(bowling.verifyArr(throwFrame)).toBe(false);
    });
  });
  describe('Testing score function', () => {
    it('Testing sum of an array with trivial frames', () => {
      const trivialArr = [3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6];
      expect(bowling.score(trivialArr)).toBe(90);
    });
    it('Testing all 0 frames array', () => {
      const trivialArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      expect(bowling.score(trivialArr)).toBe(0);
    });
    it('Testing sum of invalid trivial frames array', () => {
      const trivialArr = [0, 0, 0, 0, 0, 0, 0, 0, 3, 4, 5, 4, 2, 1, 6, 1, 4, 2];
      expect(bowling.score(trivialArr)).toBe(-1);
    });
    it('Testing sum of invalid trivial frames array - 2', () => {
      const trivialArr = [0, 0, 0, 0, 0, 0, 0, 0, 3, 4, 6, 10, 1, 6, 1, 4, 2, 10, 10];
      expect(bowling.score(trivialArr)).toBe(-1);
    });
    it('Testing sum of all strikes', () => {
      const trivialArr = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10];
      expect(bowling.score(trivialArr)).toBe(300);
    });
    it('Testing sum of trivial and strikes', () => {
      const trivialArr = [10, 10, 10, 0, 0, 10, 10, 3, 4, 10, 0, 0, 10, 0, 0];
      expect(bowling.score(trivialArr)).toBe(127);
    });
    it('Testing sum of invalid trivial and strikes', () => {
      const trivialArr = [10, 10, 10, 0, 0, 10, 10, 3, 4, 10, 0, 0, 10];
      expect(bowling.score(trivialArr)).toBe(-1);
    });
    it('Testing sum of all spares', () => {
      const trivialArr = [4, 6, 4, 6, 4, 6, 4, 6, 4, 6, 4, 6, 4, 6, 4, 6, 4, 6, 4, 6, 4];
      expect(bowling.score(trivialArr)).toBe(140);
    });
    it('Testing sum of all invalid spares', () => {
      const trivialArr = [4, 6, 4, 6, 4, 6, 4, 6, 4, 6, 4, 6, 4, 6, 4, 6, 4, 6, 4];
      expect(bowling.score(trivialArr)).toBe(-1);
    });
    it('Testing sum of mix of valid spares and trivials', () => {
      const trivialArr = [3, 7, 4, 6, 4, 2, 4, 2, 4, 2, 4, 0, 4, 0, 4, 0, 0, 6, 4, 6, 1];
      expect(bowling.score(trivialArr)).toBe(75);
    });
    it('Testing sum of mix of invalid spares and trivials', () => {
      const trivialArr = [3, 7, 4, 6, 4, 2, 4, 2, 4, 2, 4, 0, 4, 0, 4, 0, 0, 6, 4, 6];
      expect(bowling.score(trivialArr)).toBe(-1);
    });
    it('Testing sum of mix of spares and strikes', () => {
      const trivialArr = [3, 7, 4, 6, 10, 10, 10, 10, 10, 5, 5, 7, 3, 10, 10, 10];
      expect(bowling.score(trivialArr)).toBe(236);
    });
    it('Testing sum of mix of spares and strikes - 2', () => {
      const trivialArr = [10, 10, 10, 10, 10, 10, 10, 10, 10, 3, 7, 10];
      expect(bowling.score(trivialArr)).toBe(273);
    });
    it('Testing sum of mix of invalid spares and strikes', () => {
      const trivialArr = [10, 10, 10, 10, 10, 10, 10, 10, 10, 3, 7, 10, 4];
      expect(bowling.score(trivialArr)).toBe(-1);
    });
  });
});
