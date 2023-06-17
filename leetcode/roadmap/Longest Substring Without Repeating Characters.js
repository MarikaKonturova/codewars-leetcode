var lengthOfLongestSubstring = function (s) {
  let max = 0;
  let left = 0;
  let set = new Set();
  for (let r = 0; r < s.length; r++) {
    while (set.has(s[r])) {
      set.delete(s[left]);
      left++;
    }
    set.add(s[r]);
    max = Math.max(max, r - left + 1);
  }
  return max;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
