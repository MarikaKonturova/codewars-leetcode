/* Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
The array will always contain letters in only one case */

function findMissingLetter(array) {
  let arr = array;
  let alphabet = "";
  if (arr[0].toLowerCase() === arr[0]) {
    alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  } else {
    alphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
  }
  for (let i = 0; i < alphabet.length; i++) {
    if (arr.includes(alphabet[i])) {
      if (!(arr.includes(alphabet[i]) && arr.includes(alphabet[i + 1]))) {
        return alphabet[i + 1];
      }
    }
  }
}
console.log(findMissingLetter(["a", "b", "c", "d", "f"])); //e
console.log(findMissingLetter(["O", "Q", "R", "S"])); //p

function findMissingLetter(array) {
  const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split(
    ""
  );
  const start = alphabet.indexOf(array[0]);
  return alphabet
    .slice(start, start + array.length)
    .find((el) => !array.includes(el));
}
