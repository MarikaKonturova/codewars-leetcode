function tribonacci(signature, n) {
  if (n === 0) {
    return [];
  }
  if (n <= 3) {
    return [...signature].slice(0, n);
  }
  
  let arr = [];
  arr.push(...signature);
  function tribonacci_my(signature, n) {
    while (n - 3 > 0) {
      let [f, s, th] = signature;
      if (f > s || s > th) {
        return [];
      }
      let next = f + s + th;
      arr.push(next);
      return tribonacci_my([s, th, next], n - 1);
    }
  }
  tribonacci_my(signature, n);
  return arr;
}

/* function tribonacci(signature, n) {
  for (var i = 0; i < n - 3; i++) {
    // iterate n times
    signature.push(signature[i] + signature[i + 1] + signature[i + 2]); // add last 3 array items and push to trib
  }
  return signature.slice(0, n); //return trib - length of n
} */

console.log(tribonacci([1, 1, 1], 10));
