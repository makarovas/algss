function groupAnagrams(strs) {
  const ht = {};
  for (let str of strs) {
    const sorted = (str = [...str].sort().join(""));
    if (ht[sorted]) ht[sorted].push(str);
    else ht[sorted] = [str];
  }
  return Object.values(ht);
}

console.log(groupAnagrams("sljkljklasldkjjlkkkk"));
