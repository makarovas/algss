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

function findSmallest(arr) {
  let smallest = 100000;

  for (let i = 0; i < arr.length; i++) {
    if (smallest < arr[i]) {
      smallest = arr[i];
      if (Array.isArray(arr[i])) {
        findSmallest(arr[i]);
      }
    }
  }
  console.log(smallest);
  return smallest;
}

findSmallest(items);
