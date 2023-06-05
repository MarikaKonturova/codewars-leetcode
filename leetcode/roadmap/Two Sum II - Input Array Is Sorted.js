var twoSum = function (numbers, target) {
  for (let index1 = 0, index2 = numbers.length - 1; index1 < index2; ) {
    let sum = numbers[index1] + numbers[index2];
    if (sum === target) return [++index1, ++index2];
    else sum > target ? index2-- : index1++;
  }
};
console.log(twoSum((numbers = [2, 7, 11, 15]), (target = 9)));
console.log(twoSum((numbers = [2, 3, 4]), (target = 6)));
