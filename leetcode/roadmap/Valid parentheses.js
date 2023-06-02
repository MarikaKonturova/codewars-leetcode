var isValid = function (s) {
  const stack = [];
  const array = s.split("");
  for (let i = 0; i < array.length; i++) {
    if (i === 0) {
      stack.push(array[i]);
      continue;
    }
    if (array[i] === "(" || array[i] === "[" || array[i] === "{") {
      stack.push(array[i]);
      continue;
    }
    if (check(array[i], stack[stack.length - 1])) {
      stack.pop();
      continue;
    } else {
      return false;
    }
  }
  return !stack.length;
};

const check = (currParent, prevParenth) => {
  const checker = currParent === ")" ? "(" : currParent === "}" ? "{" : "[";
  if (checker === prevParenth) {
    return true;
  }
  return false;
};
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("(])"));
