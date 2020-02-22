const items = [10, 2, 334, 2, 1, , 8];

function search(list, item) {
  let hasItem = false;
  let counter = 0;
  for (let e of list) {
    counter++;
    if (e === item) {
      hasItem = true;
      break;
    }
  }
  return counter;
}

search(items, 8);
// O(n)

console.log(items.sort((a, b) => a - b));

function binary(list, item) {
  let low = 0;
  let high = list.length;
  let counter = 0;
  while (low <= high) {
    counter++;
    let mid = Math.floor((low + high) / 2);
    let guess = list[mid];
    console.log(counter);
    if (guess === item) return true;
    if (guess > item) {
      high = mid - 1;
    } else low = mid + 1;
  }
  console.log(counter);
  return null;
}
