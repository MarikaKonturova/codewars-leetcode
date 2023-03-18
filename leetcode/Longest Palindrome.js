var longestPalindrome = function (s) {
  let dict = {};
  let ans = 0;
  for (let char of s) {
    dict[char] = dict[char] + 1 || 1;
    if (dict[char] % 2 == 0) ans += 2;
  }
  return s.length > ans ? ans + 1 : ans;
};
console.log(longestPalindrome("abccccdd"));
console.log(longestPalindrome("a"));
