/* 
Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.
Example 1:

a1 = ["arp", "live", "strong"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns ["arp", "live", "strong"]
Example 2:

a1 = ["tarp", "mice", "bull"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns []
Notes:

    Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.
    In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.
    Beware: In some languages r must be without duplicates.


*/
/* 
function inArray(array1, array2) {
  let r = [];
  main: for (let i = 0; i < array1.length; i++) {
    for (let y = 0; y < array2.length; y++) {
      if (array2[y].includes(array1[i])) {
        r.push(array1[i]);
        continue main;
      }
    }
  }

  return r.sort();
}
*/
function inArray(array1, array2) {
  let newArr2 = array2.join(" ");

  let r = [];
  array1.forEach((el) => {
    const regex = new RegExp(`${el}`);
    console.log(regex);
    const found = newArr2.match(regex);
    if (found) {
      r.push(found[0]);
    }
  });
  return r.sort();
}
a2 = ["lively", "alive", "harp", "sharp", "armstrong"];
a1 = ["xyz", "live", "strong"];
a1 = ["live", "strong", "arp"]
//  a1 = ["tarp", "mice", "bull"]
console.log(inArray(a1, a2));
