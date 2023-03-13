/* Implement the function unique_in_order which takes 
as argument a sequence and returns a list 
of items without any elements with the same value next 
to each other and preserving the original order of elements. */

var uniqueInOrder = function (iterable) {
  let res = [];
  let arr = iterable;
  if (!Array.isArray(iterable)) {
    arr = iterable.split("");
    console.log(arr);
  }
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      continue;
    }
    res.push(arr[i]);
  }
  return res;
  //your code here - remember iterable can be a string or an array
};
/* BEST */
function uniqueInOrder(it) {
  var result = [];
  var last;

  for (var i = 0; i < it.length; i++) {
    if (it[i] !== last) {
      result.push((last = it[i]));
    }
  }

  return result;
}
