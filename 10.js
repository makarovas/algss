// const arrayFilterWithoutStrings = (array) => {
//   let resultStr = [];
//   let resultNum = [];

//   for (let i = 0; i < array.length; i++) {
//     if (!isNaN(array[i])) {
//       resultStr.push(array[i]);
//     } else {
//       resultNum.push(array[i]);
//     }
//   }
//   console.log(resultStr, resultNum);
//   return { resultStr, resultNum };
// };

// arrayFilterWithoutStrings(["sdklj2131", "dsfskldj", 23, 2342]);

const res = (arr) => {
  let filteredArray = [];
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    if (typeof arr[i] === "number") {
      filteredArray.push(arr[i]);
    }
  }

  return filteredArray;
};

console.log(res(["2312kljl3kj21", 23, 3232, 324]));

const filterArray = (arr) => {
  let result = [];
  result = arr.filter((x) => typeof x === "number");
  return result;
};

console.log(filterArray(["2312kljl3kj21", 432, 4, 32]));
