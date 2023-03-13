/* 
Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.

Examples:

encrypt("012345", 1)  =>  "135024"
encrypt("012345", 2)  =>  "135024"  ->  "304152"
encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

encrypt("01234", 1)  =>  "13024"
encrypt("01234", 2)  =>  "13024"  ->  "32104"
encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"

Together with the encryption function, you should also implement a decryption function which reverses the process.

If the string S is an empty value or the integer N is not positive, return the first argument without changes.

*/

function encrypt(text, n) {
  if (n <= 0 ||  !text) {
    return text;
  }
 
  let i = 0;
  let res = text.split("");
  while (i < n) {
    let oddArr = res.filter((el, i) => i % 2 !== 0);
    let evenArr = res.filter((el, i) => i % 2 === 0);
    res = [...oddArr, ...evenArr];
    i++;
  }
  return res.join("");
}

function decrypt(encryptedText, n) {
  if (n <= 0 || !encryptedText) {
    return encryptedText;
  }
  let evenCount = 0;
  if (encryptedText.length % 2 === 0) {
    evenCount = encryptedText.length / 2;
  }
  if (encryptedText.length % 2 !== 0) {
    evenCount = Math.floor(encryptedText.length / 2);
  }
  let res = encryptedText.split("");

  let i = 0;
  while (i < n) {
    let e = 0;
    let o = 0;
    let oddArr = res.slice(0, evenCount);
    let evenArr = res.slice(evenCount);
    for (let i = 0; i < encryptedText.length; i++) {
      if (i % 2 === 0) {
        res[i] = evenArr[e];
        e++;

        continue;
      }
      if (i % 2 !== 0) {
        res[i] = oddArr[o];

        o++;
        continue;
      }
    }

    i++;
  }
  return res.join("");
}
/* console.log(decrypt("This is a test!", 0)); */
console.log(decrypt("", 1));
console.log(decrypt("s eT ashi tist!", 2));
console.log(decrypt(" Tah itse sits!", 3));
console.log(decrypt("This is a test!", 4));
console.log(decrypt("This is a test!", -1));
console.log(decrypt("hskt svr neetn!Ti aai eyitrsig", 1));

console.log(encrypt("This is a test!", 0));
console.log(encrypt("This is a test!", 0));
console.log(encrypt("This is a test!", 1));
console.log(encrypt("This is a test!", 2));
console.log(encrypt("This is a test!", 3));
console.log(encrypt("This is a test!", 4));
console.log(encrypt("This is a test!", -1));
console.log(encrypt("This kata is very interesting!", 1));

function encrypt(text, n) {
    console.log(text, n);
    if (!text || n <= 0) return text; 
    while (n--) {
      let ans = '';
      for (let i = 1; i < text.length; i += 2) {
        ans += text[i];
      }
      for (let i = 0; i < text.length; i += 2) {
        ans += text[i];
      }
      text = ans;
    }
    return text;
  }
  
  function decrypt(encryptedText, n) {
    if (!encryptedText || n <= 0) return encryptedText;
    const ans = new Array(encryptedText.length);
    while (n--) {
      let j = 0;
      for (let i = 1; i < ans.length; i += 2) {
        ans[i] = encryptedText[j++];
      }
      for (let i = 0; i < ans.length; i += 2) {
        ans[i] = encryptedText[j++];
      }
      encryptedText = ans.join('');
    }
    return encryptedText;
  }