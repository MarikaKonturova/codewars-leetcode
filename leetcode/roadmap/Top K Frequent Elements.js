var topKFrequent = function (nums, k) {
  let obj = {};
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    obj[nums[i]] = (obj[nums[i]] || 0) + 1;
  }

  let result = Object.keys(obj).map((key) => [Number(key), obj[key]]);
  let sortedResult = result.sort((a, b) => {
    return b[1] - a[1];
  });
  for (let i = 0; i < k; i++) {
    res.push(sortedResult[i][0]);
  }

  return res;
};

var topKFrequent = function (nums, k, map = new Map()) {
  const bucket = [];
  const result = [];

  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }
  //достаем ключ и значение
  for (let [num, freq] of map) {
    console.log([num, freq]);
    //уже распределяем по частоте d массив, и заполняем ячейки set
    bucket[freq] = (bucket[freq] || new Set()).add(num);
    console.log(bucket[freq]);
  }
  
  for (let i = bucket.length - 1; i >= 0; i--) {
    //идем от самого частого появления
    if (bucket[i]) result.push(...bucket[i]);
    if (result.length === k) break;
  }
  return result;
};
console.log(topKFrequent((nums = [2, 2, 3, 3, 1, 1, 1]), (k = 2)));
//console.log(topKFrequent((nums = [1, 2]), (k = 2)));
