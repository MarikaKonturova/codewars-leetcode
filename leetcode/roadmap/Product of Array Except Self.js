var productExceptSelf = function (nums) {
  let prefix = 1;
  let res = Array(nums.length).fill(1);
  for (let i = 0; i < nums.length; i++) {
    res[i] = prefix;
    prefix *= nums[i];
  }
  postfix = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    res[i] *= postfix;
    postfix *= nums[i];
  }
  return res;
};

console.log(productExceptSelf([1, 2, 3, 4]));
