/* 
Task

You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

*/

function sortArray(array) {
  // Return a sorted array.
  let posArray = [];
  let oddArr = [];
  let evenArr = [];
  let resArr = [];
  let count = 0;
  let evenCount = 0;
  let oddCount = 0;
  if (array.length < 1) {
    return array;
  }
  for (let i = 0; i < array.length; i++) {
    posArray.push(array[i] % 2 === 0 ? 0 : 1);
    array[i] % 2 === 0 ? evenArr.push(array[i]) : oddArr.push(array[i]);
  }
  oddArr.sort((a, b) => a - b);

  while (count < posArray.length) {
    if (posArray[count] % 2 === 0) {
      resArr.push(evenArr[evenCount]);
      evenCount++;
    } else {
      resArr.push(oddArr[oddCount]);
      oddCount++;
    }
    count++;
  }

  return resArr;
}
console.log(sortArray([5, 3, 2, 8, 1, 4]));
console.log(sortArray([5, 3, 1, 8, 0]));
console.log(sortArray([1, 11, 2, 8, 3, 4, 5]));
console.log(sortArray([]));
function sortArray(array) {
  const odd = array.filter((x) => x % 2).sort((a, b) => a - b);
  return array.map((x) => (x % 2 ? odd.shift() : x));
}
