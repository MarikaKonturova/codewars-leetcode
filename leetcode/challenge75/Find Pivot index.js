/* first take */
var pivotIndex = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    const left = nums.slice(0, i);
    const right = nums.slice(i + 1);
    if (left.reduce((a, b) => a + b, 0) === right.reduce((a, b) => a + b, 0))
      return i;
  }
  return -1;
};

console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
/* better */

var pivotIndex = function (nums) {
  let left = 0;
  let right = nums.reduce((a, b) => a + b, 0);
  for (let i = 0; i < nums.length; i++) {
    const currNum = nums[i];
    right -= currNum;
    if (right === left) {
      return i;
    }
    left += currNum;
  }
  return -1;
};

console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
