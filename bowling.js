// Length of array must be greater than or equal to 11 and less than 22
const verifyArr = arr => arr.length >= 11 && arr.length <= 21;

// Min value of throw should be greater than or equal to 0
const verifyNum = num => num >= 0;

module.exports = {
  verifyArr, verifyNum,
};
