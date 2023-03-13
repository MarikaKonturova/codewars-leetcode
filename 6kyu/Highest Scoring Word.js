/* 
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

For example, the score of abad is 8 (1 + 2 + 1 + 4).

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.

*/

function high(x) {
  const alpha = [...Array(26)].map((e, i) => i + 65); //Array.from(Array(10)) === [...Array(10)]
  let dict = {};
  alpha.forEach((e, i) => {
    dict[String.fromCharCode(e).toLowerCase()] = i + 1;
  });
  let word = "";
  let arrStr = x.split(" ");
  let max = -1;
  for (let i = 0; i < arrStr.length; i++) {
    let sum = 0;
    for (char of arrStr[i]) {
      sum += dict[char];
    }
    if (sum > max) {
      max = sum;
      word = arrStr[i];
    }
  }
  return word;
}

console.log(high("man i need a taxi up to ubud"));
console.log(high("what time are we climbing up the volcano"));
console.log(high("take me to semynak"));

function high(words) {
  const alpha = " abcdefghijklmnopqrstuvwxyz";
  const score = (word) =>
    word.split("").reduce((a, b) => a + alpha.indexOf(b), 0);

  return words
    .split(" ")
    .map((word, pos) => ({ word: word, pos: pos, score: score(word) }))
    .sort((a, b) => a.score - b.score /* || b.pos - a.pos */)
    .pop().word;
}
