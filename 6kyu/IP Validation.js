/* 
Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.
Valid inputs examples:

Examples of valid inputs:
1.2.3.4
123.45.67.89

Invalid input examples:

1.2.3
1.2.3.4.5
123.456.78.90
123.045.067.089

Notes:

    Leading zeros (e.g. 01.02.03.04) are considered invalid
    Inputs are guaranteed to be a single string


*/

function isValidIP(str) {
  if (!str) {
    return false;
  }
  let workStr = str.split(".");
  let count = 0;
  for (let i = 0; i < workStr.length; i++) {
    if (!validateOctet(workStr[i])) {
      return false;
    }
    count++;
  }
  return count === 4;
}

function validateOctet(num) {
  if (!num) {
    return false;
  }
  if (/[^0-9]/.test(num)) {
    return false;
  }
  if (num.length > 1 && num[0] === "0") {
    return false;
  }
  let workNum = Number(num);
  if (workNum > 255 || workNum < 0) {
    return false;
  }
  return true;
}

console.log(isValidIP(".43.102.122"));
console.log(isValidIP("0.0.0.0"));
console.log(isValidIP("12.s55.56.1"));
console.log(isValidIP("137.255.156.100"));
console.log(isValidIP("abc.def.ghi.jkl"));
console.log(isValidIP(""));
console.log(isValidIP(" 1.2.3.4"));
console.log(isValidIP("123.456.789.0"));
console.log(isValidIP("12.34.56"));

function isValidIP(str) {
    return /^(([1-9]?\d|1\d\d|2[0-4]\d|25[0-5])(\.(?!$)|$)){4}$/.test(str);
  }
  function isValidIP(str) {
    return new RegExp(
                           "^(?:[1-9]?[0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])"
                    +"\\.(?:[1-9]?[0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])"
            +"\\.(?:[1-9]?[0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])"
            +"\\.(?:[1-9]?[0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$").test(str);
  }