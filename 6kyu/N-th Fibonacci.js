/* 
N-th Fibonacci
I love Fibonacci numbers in general, but I must admit I love some more than others.

I would like for you to write me a function that when given a number (n) returns the n-th number in the Fibonacci Sequence.

For example:

   nthFibo(4) == 2

Because 2 is the 4th number in the Fibonacci Sequence.

For reference, the first two numbers in the Fibonacci sequence are 0 and 1, and each subsequent number is the sum of the previous two.

*/

//fibonacchi sequence depends on index
//for i in range (i)
//until i>0
//

function nthFibo(n) {
  let n1 = 0,
    n2 = 1,
    nextTerm;
  for (let i = 1; i < n; i++) {
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
  }
  return n1;
}

/* better from codewars

function nthFibo(n) {
  let n1 = 0,
    n2 = 1,
    nextTerm;
  for (let i = 1; i < n; i++) {
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
  }
  return n1;
}
*/
console.log(nthFibo(0));
