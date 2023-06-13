var search = function (nums, target) {
  let l = 0,
    r = nums.length - 1;
  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    if (nums[mid] === target) {
      return mid;
    }
    if (nums[mid] >= nums[l]) {
      if (nums[l] <= target && nums[mid] >= target) {
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    } else {
      if (nums[r] >= target && nums[mid] <= target) {
        l = mid + 1;
      }else{
        r = mid - 1;

      }
    }
  }
  return -1;
};

//console.log(search((nums = [4, 5, 6, 7, 0, 1, 2]), (target = 0)));
console.log(search((nums = [5, 1, 3]), (target = 3)));
