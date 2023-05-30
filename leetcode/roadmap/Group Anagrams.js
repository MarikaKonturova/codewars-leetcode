var groupAnagrams = function (strs, map = new Map()) {
  if (strs.length < 1) return [];
  for (let word of strs) {
    const orderedWord = reorder(word);
    const values = map.get(orderedWord) || [];
    values.push(word);
    map.set(orderedWord, values);
  }

  return [...map.values()];
};

const reorder = (word) => word.split("").sort().join("");
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
