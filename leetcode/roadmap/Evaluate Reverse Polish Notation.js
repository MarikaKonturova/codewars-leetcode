var evalRPN = function (tokens) {
  const array = [];

  for (let num of tokens) {
    if (num === "*") {
      const prev = array.pop();
      const next = array.pop();
      array.push(prev * next);
      continue;
    }
    if (num === "-") {
      const prev = array.pop();
      const next = array.pop();
      array.push(next - prev);
      continue;
    }
    if (num === "+") {
      const prev = array.pop();
      const next = array.pop();
      array.push(prev + next);
      continue;
    }
    if (num === "/") {
      const prev = array.pop();
      const next = array.pop();
      array.push(
        next / prev >= 0 ? Math.floor(next / prev) : Math.ceil(next / prev)
      );
      continue;
    }
    array.push(+num);
  }
  return array;
};

console.log(evalRPN(["2", "1", "+", "3", "*"]));
console.log(evalRPN(["4", "13", "5", "/", "+"]));
console.log(evalRPN(["4","3","-"]));
console.log(
  evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"])
);
