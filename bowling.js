// Length of array must be greater than or equal to 11 and less than 22
const verifyArrLen = arr => arr.length >= 11 && arr.length <= 21;

// Value of throw should be greater than or equal to 0 and less than 11
const verifyNum = num => num >= 0 && num <= 10;

// Checking for throw frames for sum >= 0 and <10
const verifyArr = function verifyArr(arr) {
  if (arr.every(elem => verifyNum(elem))) {
    let prev = 0;
    let curr = 1;
    const len = arr.length;
    for (; prev < len;) {
      if (arr[prev] + arr[curr] < 10) {
        prev += 2;
        curr = prev + 1;
      }
    }
    return true;
  }
  return false;
};
module.exports = {
  verifyArrLen, verifyNum, verifyArr,
};
