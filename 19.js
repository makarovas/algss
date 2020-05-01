function hashTableRunner(arr) {
  let hashTable = {};

  // Object.assign(hashTable, arr);
  hashTable = { ...arr };

  return { hashTable, arr };
}

console.log(hashTableRunner([2, 321, , 43, 24, 23, 4, 234]));

function firstUniqChar(s) {
  const hashTable = {};
  for (let char of s) {
    if (hashTable[char]) hashTable[char]++;
    else hashTable[char] = 1;
  }
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (hashTable[char] == 1) return i;
  }
  return -1;
}

console.log(firstUniqChar("llllllkj213"));
