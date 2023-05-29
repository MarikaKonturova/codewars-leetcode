function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

// with simple array
var mergeTwoLists = function (list1, list2) {
  let index_list1 = 0;
  let index_list2 = 0;
  let res = [];
  while (index_list1 < list1.length || index_list2 < list2.length) {
    if (list1[index_list1] === list2[index_list2]) {
      res.push(list1[index_list1]);
      res.push(list2[index_list2]);
      index_list1 += 1;
      index_list2 += 1;
      continue;
    }
    if (list1[index_list1] < list2[index_list2]) {
      res.push(list1[index_list1]);
      index_list1 += 1;
      continue;
    }
    if (list1[index_list1] > list2[index_list2]) {
      res.push(list2[index_list2]);
      index_list1 += 2;
      continue;
    }
    if (index_list1 > list1.length || !list1.length) {
      res = [...res, ...list2.slice(index_list2)];
      return res;
    }
    if (index_list2 > list2.length || !list2.length) {
      res = [...res, ...list1.slice(index_list1)];
      return res;
    }
  }
  return res;
};

//with ListNode
var mergeTwoLists = function (list1, list2) {
  if (!list1) {
    return list2;
  }
  if (!list2) {
    return list1;
  }
  let head = null;
  let temp = head;
  if (list1.val < list2.val) {
    temp = head = new ListNode(list1.val);
    list1 = list1.next;
  } else {
    temp = head = new ListNode(list2.val);
    list2 = list2.next;
  }

  while (list1 && list2) {
    if (list1.val < list2.val) {
      temp.next = new ListNode(list1.val);
      list1 = list1.next;
      temp = temp.next;
    } else {
      temp.next = new ListNode(list2.val);
      list2 = list2.next;
      temp = temp.next;
    }
  }
  while (list1) {
    temp.next = new ListNode(list1.val);
    list1 = list1.next;
    temp = temp.next;
  }
  while (list2) {
    temp.next = new ListNode(list2.val);
    list2 = list2.next;
    temp = temp.next;
  }
  return head;
};

console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]));
console.log(mergeTwoLists([], [1, 3, 4]));
console.log(mergeTwoLists([], []));
console.log(mergeTwoLists([1, 3, 4], []));
