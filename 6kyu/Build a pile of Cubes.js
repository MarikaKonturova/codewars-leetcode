/* 
Your task is to construct a building which will be a pile of n cubes. The cube at the bottom will have a volume of n3 n^3 n3, the cube above will have volume of (n−1)3 (n-1)^3 (n−1)3 and so on until the top which will have a volume of 13 1^3 13.

You are given the total volume m of the building. Being given m can you find the number n of cubes you will have to build?

The parameter of the function findNb (find_nb, find-nb, findNb, ...) will be an integer m and you have to return the integer n such as n3+(n−1)3+(n−2)3+...+13=m n^3 + (n-1)^3 + (n-2)^3 + ... + 1^3 = m n3+(n−1)3+(n−2)3+...+13=m if such a n exists or -1 if there is no such n.
*/
function findNb(m) {
  let sum = 0;
  for (let i = 0; ; i++) {
    if (m > 0) {
      sum = Math.pow(i + 1, 3);
      m = m - sum;
      continue;
    }
    if (m === 0) {
      return i;
    }
    if (m < 0) {
      return -1;
    }
  }
}
console.log(findNb(4183059834009));
console.log(findNb(24723578342962));
console.log(findNb(135440716410000));

function findNb(m) {
  var n = 0;
  while (m > 0) m -= (++n) ** 3;
  return m ? -1 : n;
}
