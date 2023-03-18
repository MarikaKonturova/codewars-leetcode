/* Preorder traversal is a type of depth-first search (DFS) approach, and DFS problems are generally best solved with a recursive function. */
var preorder = function (root, output = []) {
  if (!root) return output;
  output.push(root.val);
  for (let child of root.children) {
    preorder(child, output);
  }
  return output;
};
console.log(preorder([1, null, 3, 2, 4, null, 5, 6]));
