/* first take */
var runningSum = function (nums) {
  const res = [];
  const tmp = [];
  for (let i = 0; i < nums.length; i++) {
    tmp.push(nums[i]);
    res.push(tmp.reduce((a, b) => a + b, 0));
  }
  return res;
};

console.log(runningSum([1, 2, 3, 4]));
console.log(runningSum([1, 1, 1, 1, 1]));

/* better */

var runningSum = function (nums) {
  const res = [];
  let sums = 0;
  for (let i = 0; i < nums.length; i++) {
    sums += nums[i];
    res.push(sums);
  }
  return res;
};

console.log(runningSum([1, 2, 3, 4]));
console.log(runningSum([1, 1, 1, 1, 1]));
