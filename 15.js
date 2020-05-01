function counter(n) {
  console.log(n);
  if (n === 10) {
    return;
  } else return counter(n + 1);
}

counter(0);

const items = [
  [12, 3212, 32, , 4],
  [32, 32, 4, , 5, 5],
];

const array = [1, 2, 3, 4, 5];
function findBiggest(arr) {
  let biggest = 0;
  for (let i = 0; i < arr.length; i++) {
    if (biggest < arr[i]) {
      biggest = arr[i];
    }
  }
  console.log(biggest);
  return biggest;
}

findBiggest(array);
