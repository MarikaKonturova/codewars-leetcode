/* 

The set of words is given. Words are joined if the last letter of one word and the first letter of another word are the same. Return true if all words of the set can be combined into one word. Each word can and must be used only once. Otherwise return false.
Input

Array of 3 to 7 words of random length. No capital letters.
Example true

Set: excavate, endure, desire, screen, theater, excess, night.
Millipede: desirE EndurE ExcavatE ExcesS ScreeN NighT Theater.
Example false

Set: trade, pole, view, grave, ladder, mushroom, president.
Millipede: presidenT Trade.


*/

function solution(words) {
  let res = [];
  let resToDelete = [];
  let resWas = 1;
  let resBekame = 1;
  for (let i = 0; i < words.length; i++) {
    console.log(words[i]);
    res.push(words[i]);
    let arr = [...words].filter((w) => !res.includes(w));
    console.log(arr)
    for (let word = i; word < words.length; word++) {
      console.log(word);
      console.log(arr);
      const found = arr.find(
        (w) => w[0] === res[length - 1][length - 1]
        /* words[word][words[word].length - 1] */
      );

      if (found) {
        console.log(found);
        res.push(found);
        console.log(res);
        arr = arr.filter((w) => w !== words[word]);
        resBekame++;
      }
    }
    if (resWas === resBekame) {
      res.pop();
    }
  }

  return res;
}

console.log(
  solution([
    "excavate",
    "endure",
    "desire",
    "screen",
    "theater",
    "excess",
    "night",
  ])
);


/* right answer*/

function solution(words, current = "") {
    if (words.length === 0) {
      return true;
    }
    for (let i = 0; i < words.length; i++) {
      if (current.length === 0 || current[current.length - 1] === words[i][0]) {
        if (solution(words.slice(0, i).concat(words.slice(i + 1)), current + words[i])) {
          return true;
        }
      }
    }
    return false;
  }