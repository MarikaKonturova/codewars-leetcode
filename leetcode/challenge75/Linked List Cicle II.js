var detectCycle = function (head) {
  let slow = head;
  let fast = head;
  while (fast && fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      slow = head;
      while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
      }
      return slow;
    }
  }
  return null;
};

let input = [1, 2, 3];
let head1 = convertToListNode(input);

console.log(detectCycle(head1));

// helpers
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function convertToListNode(input) {
  return input.reverse().reduce((acc, curr) => {
    if (acc == null) {
      acc = new ListNode(curr);
    } else {
      acc = new ListNode(curr, acc);
    }
    return acc;
  }, null);
}
