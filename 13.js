const isPalindrome = (str) => {
  let result = false;
  let regEx = /[^\w]/g;

  str = str.toLowerCase().replace(regEx, "");
  let reversedStr = str.split("").reverse().join("");
  if (str === reversedStr) {
    result = true;
  }
  return result;
};

isPalindrome("s, os");
