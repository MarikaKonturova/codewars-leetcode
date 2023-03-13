/* 

*/

// Return the output array, and ignore all non-op characters
function parse(data) {
  let count = 0;
  let res = [];
  for (char of data) {
    if (char === "i") {
      count++;
      continue;
    }
    if (char === "d") {
      count--;
      continue;
    }
    if (char === "s") {
      count = count ** 2;
      continue;
    }
    if (char === "o") {
      res.push(count);
      continue;
    }
  }
  return res;
}

console.log(parse("iiisdoso"));
console.log(parse("iiisxxxdoso"));

function parse(data) {
    let res = [];
  
    data.split('').reduce((cur, s) => {
      if (s === 'i') cur++;
      if (s === 'd') cur--;
      if (s === 's') cur = Math.pow(cur, 2);
      if (s === 'o') res.push(cur);
      
      return cur;
    }, 0);
    
    return res;
  }