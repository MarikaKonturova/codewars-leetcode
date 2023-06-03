var generateParenthesis = function (n) {
  const res = [];
  const go = (l, r, s) => {
    if (s.length === 2 * n) {
      res.push(s);
      return;
    }
    if (r < l) go(l, r + 1, s + ")");
    if (l < n) go(l + 1, r, s + "(");
  };

  go(0, 0, "");
  return res;
};
console.log(generateParenthesis(3));
