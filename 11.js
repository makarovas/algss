// const filteringAlphabetMethod = (str) => {
//   return str.sort((a, b) => (a.attr > b.attr) - (a.attr < b.attr));
// };

// console.log(filteringAlphabetMethod("lkjkljslkdjfs"));

const filteringAlphabetMethod2 = (str) => str.split("").sort().join("");

console.log(filteringAlphabetMethod2("saame"));

const filteringAlphabetMethod3 = (str) => [...str].sort().join("");

filteringAlphabetMethod3("2131dasdas213131dasda");
