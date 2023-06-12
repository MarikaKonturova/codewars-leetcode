var trap = function (height) {
  let maxL = 0;
  let maxR = height[height.length - 1];
  let count = 0;
  for (let l = 0, r = height.length - 1; l < r; ) {
    if (height[l] <= height[r]) {
      if (maxL - height[l] > 0) {
        count += maxL - height[l];
      }
      if (maxL < height[l]) {
        maxL = height[l];
      }
      l++;
    } else {
      if (maxR - height[r] > 0) {
        count += maxR - height[r];
      }
      if (maxR < height[r]) {
        maxR = height[r];
      }
      r--;
    }
  }
  return count;
};
