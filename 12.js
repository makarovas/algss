const reverseString = (str) => [...str].reverse().join("");

console.log(reverseString("abbbacccdd 123"));

const hardCoreReverse = (str) => {
  let result = [];
  for (let i = str.length - 1; i >= 0; i--) {
    result.push(str[i]);
  }
  return result.join("");
};

hardCoreReverse("aaabbass");
