var reverseList = function (head) {
  let current = head;
  let previous = null;
  while (current) {
    const next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }
  return previous;
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
console.log(reverseList([1, 2, 3, 4, 5]));
