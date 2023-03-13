/* 
Description:

Define a function that takes an integer argument and returns a logical value true or false depending on if the integer is a prime.

Per Wikipedia, a prime number ( or a prime ) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
Requirements

    You can assume you will be given an integer input.
    You can not assume that the integer will be only positive. You may be given negative numbers as well ( or 0 ).
    NOTE on performance: There are no fancy optimizations required, but still the most trivial solutions might time out. Numbers go up to 2^31 ( or similar, depending on language ). Looping all the way up to n, or n/2, will be too slow.

Example

is_prime(1)   false 
is_prime(2)   true  
is_prime(-1)  false 

*/

function isPrime(num) {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
    console.log(s);
    console.log(num % i);
    if (num % i === 0) return false;
  }

  return num > 1;
}


/* 

If a number n is not a prime, it can be factored into two factors a and b:

n = a * b

Now a and b can't be both greater than the square root of n, since then the product a * b would be greater than sqrt(n) * sqrt(n) = n. So in any factorization of n, at least one of the factors must be smaller than the square root of n, and if we can't find any factors less than or equal to the square root, n must be a prime.
 */
console.log(isPrime(16));
