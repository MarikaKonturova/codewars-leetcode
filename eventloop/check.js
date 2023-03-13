const one = () => Promise.resolve("one");

async function myFunc() {
  console.log("In function");
  const res = await one();
  console.log("Still in function");
  console.log(res);
  console.log("the end of the function");
}

console.log("Before function");
myFunc();
console.log("After function");
