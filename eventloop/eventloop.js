function sostavChisla(massivChisel, chislo) {
  let s = [];
  massivChisel.sort((a, b) => a - b);
  let j = 0;
  let arr = [];
  let n = 0;
  arr[0] = massivChisel[n];
  let x = massivChisel[n + 1];
  while (x < massivChisel.length) {
    if (
      x === massivChisel.length - 1 &&
      arr.reduce((a, c) => a + c, 0) + massivChisel[x] !== chislo
    ) {
      console.log(n);
      console.log(massivChisel.length - n);
      arr = [];
      arr[0] = massivChisel[n];
      x = massivChisel[massivChisel.length - n];
      continue;
    }
    if (arr.reduce((a, c) => a + c, 0) + massivChisel[x] <= chislo) {
      arr.push(massivChisel[x]);
      console.log(arr);
      x++;
      continue;
    }
    x++;
  }

  return s;
}

function sostavChisla(massivChisel, chislo) {
  let a = 0;
  let b = a + 1;
  let c = b + 1;
  let res = [];
  while (a < massivChisel.length) {
    let arr = [];
    arr[0] = massivChisel[a];

    outer: for (let j = a + 1; j < massivChisel.length; j++) {
      arr[1] = massivChisel[j];
      console.log(arr);
      if (arr.reduce((a, b) => a + b, 0) <= chislo) {
        console.log(arr);
        for (let i = j + 1; i < massivChisel.length; i++) {
          arr.push(massivChisel[i]);
          console.log(arr);
          if (arr.reduce((a, b) => a + b, 0) < chislo) {
            continue;
          }
          if (arr.reduce((a, b) => a + b, 0) === +chislo) {
            console.log(chislo);
            console.log(arr);
            console.log(arr.reduce((a, b) => a + b, 0));
            console.log(arr.reduce((a, b) => a + b, 0) === chislo);
            res.push(arr);
            console.log(res);
            continue outer;
          }
          if (arr.reduce((a, b) => a + b, 0) > chislo) {
            console.log(arr);
            arr = [];
            arr[0] = massivChisel[a];
            console.log(arr);
            continue outer;
          }
        }
      }
    }
    console.log(res);

    a++;
  }
  return res;
}

function sostavChisla(massivChisel, chislo) {
  massivChisel.sort((a, b) => a - b);
  let result = [];

  function findCombinations(combination, target, index) {
    if (target === 0) {
      result.push(combination.slice());
      return;
    }

    for (let i = index; i < massivChisel.length; i++) {
      let currNum = massivChisel[i];
      if (currNum > target) {
        break;
      }
      combination.push(currNum);
      findCombinations(combination, target - currNum, i + 1);
      combination.pop();
    }
  }

  findCombinations([], chislo, 0);
  return result;
}
console.log(
  [
    [1, 2, 3, 4, 5],
    [2, 3, 4, 6],
    [1, 3, 5, 6],
    [4, 5, 6],
    [1, 3, 4, 7],
    [1, 2, 5, 7],
    [3, 5, 7],
    [2, 6, 7],
    [1, 2, 4, 8],
    [3, 4, 8],
    [2, 5, 8],
    [1, 6, 8],
    [7, 8],
  ].length
);

//console.log(sostavChisla([1, 2, 3, 4, 5, 6, 7, 8], 8));
console.log(sostavChisla([7, 8, 3, 4, 5, 6, 1, 2], 15).length);
console.log(sostavChisla([8, 2, 3, 4, 6, 7, 1], 5));
console.log(sostavChisla([8, 2, 3, 4, 6, 7, 1], 99));
/* 

function runTests() {
    const tests = [
    {
      chislo: 5, 
      massivChisel: [8, 2, 3, 4, 6, 7, 1],
      result: [[2, 3], [4, 1]]
    },
    {
      chislo: 99, 
      massivChisel: [8, 2, 3, 4, 6, 7, 1],
      result: []
    },
    {
      chislo: 8, 
      massivChisel: [1, 2, 3, 4, 5, 6, 7, 8],
      result: [[1, 3, 4], [1, 2, 5], [3, 5], [2, 6], [1, 7], [8]]
    },
    {
      chislo: 8, 
      massivChisel: [7, 8, 3, 4, 5, 6, 1, 2],
      result: [[1, 3, 4], [1, 2, 5], [3, 5], [2, 6], [1, 7], [8]]
    },
    {
      chislo: 15, 
      massivChisel: [7, 8, 3, 4, 5, 6, 1, 2],
      result: [[1, 2, 3, 4, 5], [2, 3, 4, 6], [1, 3, 5, 6], [4, 5, 6], [1, 3, 4, 7], [1, 2, 5, 7], [3, 5, 7], [2, 6, 7], [1, 2, 4, 8], [3, 4, 8], [2, 5, 8], [1, 6, 8], [7, 8]]
    },  
    
  ];
*/
