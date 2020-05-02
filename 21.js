const items = [1222, 312, 4, 32, 423, 4, 23, 4, 234, 32];
items.sort((a, b) => a - b);

function search(list, item) {
  let low = 0;
  let high = list.length;

  // let hasItem = null;
  let counter = 0;
  // for (let e of list) {
  //   counter++;
  //   if (e === item) {
  //     hasItem = true;
  //     break;
  //   }
  // }

  while (low <= high) {
    counter++;
    console.log(counter);
    let mid = Math.floor((low + high) / 2);
    let guess = list[mid];
    if (guess === item) return true;
    if (guess > item) high = mid - 1;
    else low = mid + 1;
  }
  console.log(counter);
  // return hasItem;
  return null;
}

console.log(search(items, 12));

// o(n)
