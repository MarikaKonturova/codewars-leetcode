/* first take */

var validateIsomorphicByMap = function (s, t) {
  const mapa = new Map();

  for (let i = 0; i < s.length; i++) {
    if (!mapa.has(s[i])) {
      mapa.set(s[i], t[i]);
      continue;
    }
    if (mapa.get(s[i]) !== t[i]) {
      return false;
    }
  }
  return true;
};

var isIsomorphic = function (s, t) {
  if (new Set(s).size !== new Set(t).size) {
    return false;
  }

  if (!validateIsomorphicByMap(s, t)) {
    return false;
  }

  return true;
};

console.log(isIsomorphic("egg", "add"));
console.log(isIsomorphic("foo", "bar"));
console.log(isIsomorphic("paper", "title"));
console.log(isIsomorphic("bbbaaaba", "aaabbbba"));
console.log(isIsomorphic("badc", "baba"));
