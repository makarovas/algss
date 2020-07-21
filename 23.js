// eslint-disable-next-line require-jsdoc
function some(arr1, arr2) {
  let isTheSame = false;
  const resultObj = {};
  arr1.length !== arr2.length ?
    isTheSame = false :
    arr1.forEach((num1, index) => {
      const num2 = arr2[index];
      if (num1 == num2) {
        resultObj[index]= isTheSame;
      } else {
        resultObj[index]= isTheSame;
      }
    });
  let checker = [];
  checker = Object.values(resultObj);
  if (checker.map((x)=> x)) {
    isTheSame = true;
  } else {
    isTheSame = false;
  }

  return isTheSame;
}

console.log(some([2, 1, 2], [1, 1, 2]));
