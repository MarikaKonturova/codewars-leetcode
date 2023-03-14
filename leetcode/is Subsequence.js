var isSubsequence = function (s, t) {
  if (s.length === t.length) {
    return s === t;
  }

  if (!t.length) {
    return false;
  }

  let index = -1;

  for (char of s) {
    let newIndex = t.indexOf(char);
    if (newIndex <= index) {
      return false;
    }
    index = newIndex;
  }
  return true;
};

console.log(isSubsequence("ab", "baab"));

console.log(isSubsequence("abc", "ahbgdc"));
console.log(isSubsequence("axc", "ahbgdc"));
console.log(isSubsequence("axc", "ahbgdc"));
