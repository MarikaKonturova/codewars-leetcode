var twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const complement = target - num;
    const sumIdex = map.get(complement);
    const isTarget = map.has(complement);
    if (isTarget) return [i, sumIdex];
    map.set(num, i);
  }
  return [-1, 1];
};

/* 
var twoSum = function (nums, target) {
  if (nums.length < 2 ) {
    return null;
  }
  for (let i = 0; i < nums.length; i++) {
    let resIndex = -1;
    const ans = nums.find((el, index) => {
      if (index !== i) {
        resIndex = index;
        return target === nums[i] + el;
      }
    });
    if (ans || ans ===0) {
      return [i, resIndex];
    }
  }
};
*/
