/* 
Build Tower

Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.
*/

function towerBuilder(nFloors) {
  // build here
  let arr = [];
  let strChar = 2 * nFloors - 1;
  let strStars = 1;
  let resStr = "";

  while (strStars <= strChar) {
    let strSpace = Math.floor((strChar - strStars) / 2);
    resStr = " ".repeat(strSpace) + "*".repeat(strStars) + " ".repeat(strSpace);
    arr.push(resStr);
    strStars += 2;
  }
  return arr;
}
console.log(towerBuilder(1));
console.log(towerBuilder(2));
console.log(towerBuilder(3));
