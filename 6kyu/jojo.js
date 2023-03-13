function binary_search(array, item) {
  let left = 0;
  let right = array.length - 1;
  let mid;
  while (left <= right) {
    mid = Math.round((right - left) / 2 + left);
    if (item === array[mid]) {
      return mid;
    } else if (item < array[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
}
console.log(binary_search([1, 2, 3, 4, 5, 6, 7, 8], 8));

function _binary_search(array, item) {
  let start = 0;
  let end = array.length;
  let middle;
  let found = false;
  let position = -1;
  while (found === false && start <= end) {
    middle = Math.floor((start + end) / 2);
    if (array[middle] === item) {
      found = true;
      position = middle;
      return position;
    }
    if (item < array[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }
  return position;
}
