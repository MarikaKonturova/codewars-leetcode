var checkInclusion = function (s1, s2) {
  if (s1.length > s2.length) return false;

  let count = Array(26).fill(0);
  let matches = 0;
  for (let i = 0; i < s1.length; i++) {
    count[s1.charCodeAt(i) - 97] += 1;
    count[s2.charCodeAt(i) - 97] -= 1;
  }
  if (count.every((i) => i === 0)) return true;
  for (let i = s1.length; i < s2.length; i++) {
    count[s2.charCodeAt(i) - 97]--;
    count[s2.charCodeAt(i - s1.length) - 97]++;
    if (count.every((i) => i === 0)) return true;
  }
  return false;
};

console.log(checkInclusion("ab", "eidbaooo"));
console.log(checkInclusion("ab", "eidboaoo"));
