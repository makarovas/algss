const findLongestStr = (str) => {
  let longestStr = 0;
  str
    .replace(/[^a-zA-Z]+/g, " ")
    .split(" ")
    .map((element) => {
      if (longestStr < element.length) {
        longestStr = element.length;
        console.log(longestStr);
      }
    });
  return longestStr;
};

findLongestStr("kljslaqwwqsda skjf wqeqw eadasd 1432");
