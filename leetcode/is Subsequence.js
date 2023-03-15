var isSubsequence = function (s, t) {
  let index_s = 0;
  let index_t = 0;
  while (index_s < s.length && index_t < t.length) {
    if (s[index_s] === t[index_t]) {
      index_s += 1;
    }
    index_t += 1;
  }
  return index_s === s.length;
};

console.log(isSubsequence("ab", "baab"));

console.log(isSubsequence("abc", "ahbgdc"));
console.log(isSubsequence("axc", "ahbgdc"));
console.log(isSubsequence("axc", "ahbgdc"));
