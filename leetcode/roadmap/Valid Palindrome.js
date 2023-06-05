var isPalindrome = function (s) {
  const regexPattern = /[^a-z0-9]/gi;
  let string = s.toLowerCase().replace(regexPattern, "");
  for (let i = 0, j = string.length - 1; i <= j; i++, j--) {
    if (string.charAt(i) !== string.charAt(j)) {
      return false;
    }
  }
  return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
