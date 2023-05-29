/* first take */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
var middleNode = function (head) {
  let i = 1;
  let temp = JSON.parse(JSON.stringify(head));
  while (temp.next) {
    i += 1;
    temp = temp.next;
  }
  let count = Math.floor(i / 2);

  for (let y = 0; y < count; y++) {
    head = head.next;
  }
  return head;
};

console.log(middleNode([1, 2, 3, 4, 5]));
console.log(middleNode([1, 2, 3, 4, 5, 6]));
