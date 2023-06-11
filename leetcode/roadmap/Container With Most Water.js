var maxArea = function (height) {
  let area = 0;
  for (let l = 0, r = height.length - 1; l < r; ) {
    let square = (r - l) * Math.min(height[l], height[r]);
    if (area < square) {
      area = square;
    }
    height[r] > height[l] ? l++ : r--;
  }
  return area;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
