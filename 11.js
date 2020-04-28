// const filteringAlphabetMethod = (str) => {
//   return str.sort((a, b) => (a.attr > b.attr) - (a.attr < b.attr));
// };

// console.log(filteringAlphabetMethod("lkjkljslkdjfs"));

const filteringAlphabetMethod2 = (str) => str.split("").sort().join("");

console.log(filteringAlphabetMethod2("saame"));
