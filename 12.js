const reverseString = (str) => [...str].reverse().join("");

console.log(reverseString("abbbacccdd 123"));

const hardCoreReverse = (str) => {
  let result = [];

  for (let i = str.length; i >= 0; i--) {
    result.push(str[i]);
  }
  result = result.join("");

  console.log(result);
  return result;
};

hardCoreReverse("abbass");
