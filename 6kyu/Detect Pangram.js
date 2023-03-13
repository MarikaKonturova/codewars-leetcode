/* 

A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

*/

function isPangram(string) {
  a = "abcdefghijklmnopqrstuvwxyz".split("");

  let workStr = string
    .replace(/[0-9]/g, "")
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
    .replace(/\s{2,}/g, " ")
    .replace(/\s/g, "")
    .toLowerCase();
  let text = new Set(workStr.split("").sort());
  for (e of a) {
    if (!text.has(e)) {
      return false;
    }
  }
  return true;
}
const string = "The quick brown fox jumps over the lazy dog.";
console.log(isPangram(string));

function isPangram(string) {
  const alphabetList = [..."abcdefghijklmnopqrstuvwxyz"];

  return alphabetList.every((letter) => string.toLowerCase().includes(letter));
}
