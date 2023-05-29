// Time Complexity : O(n*m)
// Space Complexity : O(n*m)

var floodFill = function (image, sr, sc, color) {
  if (image[sr][sc] === color) return image;
  dfs(image, sr, sc, color, image[sr][sc]);
  return image;
};

function dfs(image, sr, sc, color, cur) {
  if (sr < 0 || sr >= image.length || sc < 0 || sc >= image[0]) return;
  if (cur != image[sr][sc]) return;

  image[sr][sc] = color;
  fill(image, sr - 1, sc, color, cur);
  fill(image, sr + 1, sc, color, cur);
  fill(image, sr, sc - 1, color, cur);
  fill(image, sr, sc + 1, color, cur);
}
