function _findUniq(arr) {
    // do magic
    let dict = {};
    arr.forEach((el) => {
      if (!dict[el]) {
        dict[el] = 0;
      }
      dict[el] = dict[el] + 1;
    });
    return Object.keys(dict).find((key) => dict[key] === 1);
  }
  function findUniq(arr) {
    // do magic
    let dict = {};
    arr.forEach((el) => {
      dict[el] = dict[el] + 1 || 1;
    });
    return Object.keys(dict).find((key) => dict[key] === 1);
  }
  console.log(findUniq([1, 0, 0]));
  