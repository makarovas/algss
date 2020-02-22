const items = [0,12,3,123,1223,4];

function findLargestValue(list) {
  let lrg = list[0];
  let indexOfLarge = 0;
  for(let i = 1; i <= list.length; i++) {
    console.log(lrg)
    if(lrg < list[i]) {
      lrg = list[i];
      indexOfLarge = i;
    }
  }
  return indexOfLarge;
}


function selectionSort(list) {
  let newList = [];
  let lrgItem;
  while(list.length) {
    lrgItem = findLargestValue(list);
    newList.push(list[lrgItem]);
    list.splice(lrgItem, 1);
  }
  return newList;
}

console.log(selectionSort(items))



// O(n x n ) || O(n  ^ 2)