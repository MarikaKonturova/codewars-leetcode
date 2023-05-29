var isValidBST = function (root) {
  return validate(root, -Infinity, Infinity);
};
function validate(node, lower, upper) {
  if (node === null) {
    return true;
  }
  if (lower < node.val && node.val < upper) {
    return (
      validate(node.left, lower, node.val) &&
      validate(node.right, node.val, upper)
    );
  } else {
    return false;
  }
}

/* 
function check =push left.val,curr.val right.val

if(left && right){

}
*/
