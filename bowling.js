// Length of array must be greater than or equal to 11 and less than 22
const verifyArrLen = arr => arr.length >= 11 && arr.length <= 21;

// Value of throw should be greater than or equal to 0 and less than 11
const verifyNum = num => num >= 0 && num <= 10;

// Checking for throw frames for sum >= 0 and <10
const verifyArr = function verifyArr(arr) {
  if (arr.every(elem => verifyNum(elem))) {
    let prev = 0;
    let noOfFrames = 0;
    const len = arr.length;
    for (; noOfFrames < 10;) {
      if (arr[prev] + arr[prev + 1] < 10) {
        prev += 2;
      } else if (arr[prev] === 10) {
        prev += 1;
      } else {
        return false;
      }
      noOfFrames += 1;
    }
    if ((arr[prev - 1] === 10 && len - prev === 2) || (arr[prev - 1] !== 10 && prev === len)) {
      return true;
    }
  }
  return false;
};
module.exports = {
  verifyArrLen, verifyNum, verifyArr,
};
