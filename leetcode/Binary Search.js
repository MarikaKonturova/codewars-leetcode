var search = function (nums, target) {
  let high = nums.length - 1;
  let low = 0;
  while (high >= low) {
    let mid = Math.floor((high + low) / 2);
    console.log(nums[mid]);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      high = mid - 1;
    } else if (nums[mid] < target) {
      low = mid + 1;
    }
  }

  return -1;
};

console.log(search([-1, 0, 3, 5, 9, 12], 9));
console.log(search([-1, 0, 3, 5, 9, 12], 2));
