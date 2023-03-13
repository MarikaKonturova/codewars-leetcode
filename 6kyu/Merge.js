var mergeTwoLists = function (l1, l2) {
  let result = [];
  let item;
  /* while (l1.length > 0 || l2.length > 0) {
    console.log(l1[0], l2[0]);
    if (l1.length === 0) {
      result.push(l1);
      continue;
    } else if (l2.length === 0) {
      result.push(l2);
      continue;
    }
    if (l1[0] === l2[0]) {
      item = l1.pop(0);
      l2.pop(0);
      console.log();
    } else if (l1[0] < l2[0]) {
      item = l1.pop(0);
      console.log(item);
    } else {
      item = l2.pop(0);
      console.log(item);
    }
    result.push(item);
  } */

  let i = 0;
  let y = 0;
  while (i < l1.length || y < l2.length) {
    
    if (l1[0] === l2[0]) {
      result.push(l1[i], l2[y]);
      i++; //?
      y++;
      continue;
    } else if (l1[0] < l2[0]) {
      item = l1[i];
      i++;
    } else {
      item = l2[y]; //?
      y++;
    }
    result.push(item);
  }
  return result;
};

console.log(mergeTwoLists([1, 2, 4, 5, 6], [1, 3, 4]));
