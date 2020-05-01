const itemsToSort = [3, 2, 4, 5, 6, 12, 5];

function findLargestValue(list) {
  let lrg = list[0];
  let indexOfLarge = 0;
  for (let i = 1; i < list.length; i++) {
    if (lrg < list[i]) {
      lrg = list[i];
      indexOfLarge = i;
    }
  }
  // return `${lrg}[${indexOfLarge}]`;
  return indexOfLarge;
}

function selectionSort(list) {
  let newList = [];
  let lrgItem;
  while (list.length) {
    lrgItem = findLargestValue(list);
    newList.push(list[lrgItem]);
    list.splice(lrgItem, 1);
  }
  return newList;
}
console.log(selectionSort(itemsToSort));

// O(n * n) or O (n ^ 2 )
