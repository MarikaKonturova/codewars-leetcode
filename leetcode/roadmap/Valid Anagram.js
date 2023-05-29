var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  let obj = {};
  for (const letter of s) { // O(n)
    if (obj[letter]) {
      obj[letter] += 1; // O(1)
    } else {
      obj[letter] = 1;
    }
  }
  for (const letter of t) {
    if (obj[letter]) {
      obj[letter] -= 1;
    } else {
      return false;
    }
  }
  return Object.values(obj).every((value) => value == 0); //O(n)
};

console.log(isAnagram("anagram", "nagaram"));
