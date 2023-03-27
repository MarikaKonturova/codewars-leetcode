var mark = function (grid, i, j, rows, cols) {
  if (i < 0 || i >= rows || j < 0 || j >= cols || grid[i][j] !== "1") return;
  grid[i][j] = "2";
  mark(grid, i + 1, j, rows, cols);
  mark(grid, i, j + 1, rows, cols);
  mark(grid, i - 1, j, rows, cols);
  mark(grid, i, j - 1, rows, cols);
};

var numIslands = function (grid) {
  let rows = grid.length;
  if (!rows) {
    return 0;
  }
  //sakdaposdka
  let cols = grid[0].length;
  let islands_count = 0;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === "1") {
        mark(grid, i, j, rows, cols);
        islands_count++;
      }
    }
  }
  return islands_count
};
