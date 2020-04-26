// const evenNumbersFilter = (arr) => {
//   return arr.filter((x) => x > 224);
// };

// const result = evenNumbersFilter([1321, 3, 1, 43, 432]);

// console.log(result);

// const arraySearchEven = (array) => {
//   let result = [];
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 === 0) {
//       result.push(array[i]);
//     } else continue;
//   }
//   console.log(result);
//   return result;
// };

// arraySearchEven([432, 432, 4, 23, 4, 453, 45, 543]);

// const repeatFn = (str) => (num) => {
//   let result = str;
//   for (let i = 0; i < num; i++) {
//     result += str;
//   }
//   console.log(result);
//   return result;
// };

// repeatFn("some")(4);

const repeatFnTimes = (str) => (times) => {
  if (times <= 0) {
    return str;
  } else {
    let result;
    for (let i = 0; i <= times; i++) {
      result.push(str);
    }
    return result.join().replace(/,/g, "");
  }
};

repeatFnTimes("some")(4);
