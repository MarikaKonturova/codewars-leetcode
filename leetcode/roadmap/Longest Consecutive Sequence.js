var longestConsecutive = function (nums) {
  const array = nums.sort((a, b) => a - b);
  if (array.length < 1) {
    return 0;
  }
  let maxCount = 1;
  let count = 1;
  for (let i = 1; i < array.length; i++) {
    if (array[i] - array[i - 1] === 1) {
      count += 1;
      if (count > maxCount) maxCount = count;
    } else if (array[i] === array[i - 1]) {
      continue;
    } else {
      count = 1;
    }
  }
  return maxCount;
};

console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));
console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
console.log(longestConsecutive([1, 2, 0, 1]));
