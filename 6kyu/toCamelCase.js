function toCamelCase(str) {
  let arr = [];
  if (str === "") {
    return "";
  }
  arr = str.match(/\d+|[^\d_.-]+/g);
  let res = [];
  res.push(arr[0]);
  for (let i = 1; i < arr.length; i++) {
    res.push(arr[i][0].toUpperCase() + arr[i].substring(1));
  }

  return res.join("");
}
console.log(toCamelCase("the_stealth_warrior"));
