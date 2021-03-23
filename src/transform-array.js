const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new CustomError('Error');
  }
  const regexp = /(^--double|^--discard)(-next$|-prev$)/;
  let newArray = arr.slice();
  let countRules = 0;
  let i = 0;
  while (i<newArray.length) {
    if (newArray[i].toString().match(regexp) !== null) {
      countRules++;
      switch (newArray[i]) {
        case '--discard-next':
          if (i<newArray.length-1 && newArray[i+1].toString().match(regexp) === null) {
            newArray.splice(i+1, 1);
          }
          console.log(i);
          break;
        case '--discard-prev':
          if (i>0 && newArray[i-1].toString().match(regexp) === null) {
            newArray.splice(i-1, 1);
            i--;
          }
          break;
        case '--double-next':
          if (i<newArray.length-1 && newArray[i+1].toString().match(regexp) === null) {
            newArray.splice(i+1, 0, newArray[i+1]);
          }
          break;
        case '--double-prev':
          if (i>0 && newArray[i-1].toString().match(regexp) === null) {
            newArray.splice(i-1, 0, newArray[i-1]);
            i++;
          }
          break;
        default:
          break;
      }
    }
    i++;
  }
  for (let count=0; count<countRules; count++) {
    for (let i=0; i<newArray.length; i++) {
      if (newArray[i].toString().match(regexp) !== null) {
        newArray.splice(i, 1);
      }
    }
  }
  return newArray;
};