const findLongestStr = (str) => {
  let longestStr = 0;
  str.split(" ").forEach((element) => {
    if (longestStr < element.length) {
      longestStr = element.length;
      console.log(longestStr);
    }
  });
  return longestStr;
};

findLongestStr("kljslaqwwqsda skjf wqeqw eadasd 1432");
