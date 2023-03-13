/* 
Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

Rules for a smiling face:

    Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
    A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
    Every smiling face must have a smiling mouth that should be marked with either ) or D

No additional characters are allowed except for those mentioned.

Valid smiley face examples: :) :D ;-D :~)
Invalid smiley faces: ;( :> :} :]
Example
countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;

Note

In case of an empty array return 0. You will not be tested with invalid input (input will always be an array). Order of the face (eyes, nose, mouth) elements will always be the same.
*/

//return the total number of smiling faces in the array
function countSmileys(arr) {
  const eyes = [":", ";"];
  const noses = ["-", "~"];
  const smiles = [")", "D"];
  let count = 0;
  
  const isSmile = (el) => {
    if (eyes.includes(el[0]) && smiles.includes(el.at(-1))) {
      return true;
    }
    return false;
  };

  for (el of arr) {
    if (isSmile(el)) {
      if (el.length === 2) {
        count++;
      }
      if (el.length === 3) {
        if (noses.includes(el[1])) {
          count++;
        }
      }
    }
  }

  return count;
}

console.log(countSmileys([":)", ":(", ":D", ":O", ":;"]));
console.log(countSmileys([";]", ":[", ";*", ":$", ";-D"]));
