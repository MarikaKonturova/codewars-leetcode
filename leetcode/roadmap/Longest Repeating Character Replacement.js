var characterReplacement = function (s, k) {
  count = {};
  res = 0;
  l = 0;
  for (let r = 0; r < s.length; r++) {
    count[s[r]] = 1 + count[s[r]] || 1;
    while (r - l + 1 - Math.max(...Object.values(count)) > k) {
      count[s[l]] -= 1;
      l += 1;
    }
    res = Math.max(res, r - l + 1);
  }
  return res;
};
