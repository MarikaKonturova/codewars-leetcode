/*  
Description:

Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.

The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').
Examples:

toWeirdCase( "String" );//=> returns "StRiNg"
toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"

*/

function toWeirdCase(string) {
  //TODO
 

  const convert = (string) =>
    string
      .split("")
      .map((char, i) => {
        if (i % 2 === 0) {
          return char.toUpperCase();
        } else {
          return char.toLowerCase();
        }
      })
      .join("");

  if (string.split(" ").length >1) {
    const arr = string.split(" ");
    const res = [];
    for (let i = 0; i < arr.length; i++) {
      res.push(convert(arr[i]));
    }
    return res.join(" ");
  }
  return convert(string);
}

console.log(toWeirdCase("This"));
console.log(toWeirdCase("is"));
console.log(toWeirdCase("This is a test"));
console.log(toWeirdCase("JuSt kIdDiNg"));


function toWeirdCase(string){
    return string.split(' ').map(function(word){
      return word.split('').map(function(letter, index){
        return index % 2 == 0 ? letter.toUpperCase() : letter.toLowerCase()
      }).join('');
    }).join(' ');
  }
