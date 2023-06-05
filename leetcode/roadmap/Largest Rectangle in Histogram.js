var largestRectangleArea = function (heights, width = 1) {
  let map = new Map(),
    stack = [[0, 0]], // pair (index, height)
    maxArea = 0;
  heights.push(0);
  for (let i = 0; i < heights.length; i++) {
    let start = i;

    while (stack.length && stack[stack.length - 1][1] > heights[i]) {
      let [index, height] = stack.pop();
      maxArea = Math.max(maxArea, height * (i - index));
      start = index;
    }
    stack.push([start, heights[i]]);
  }

  return maxArea;
};

console.log(largestRectangleArea([2, 1, 5, 6, 2, 3]));
console.log(largestRectangleArea([2, 4]));
