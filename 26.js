// eslint-disable-next-line require-jsdoc
function countUniqueValues(arr) {
  if (arr.length === 0) return 0;
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
    console.log(i, j);
  }
  return i + 1;
}

console.log(countUniqueValues([21, 2, 34, 5, 32, 4231, 2, 1, 11, 1, 1, 1, 2, 2, 2, 2, 2, 2]));
