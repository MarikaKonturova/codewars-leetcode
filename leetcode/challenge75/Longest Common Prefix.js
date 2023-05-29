/* 
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"

Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

 

Constraints:

    1 <= strs.length <= 200
    0 <= strs[i].length <= 200
    strs[i] consists of only lowercase English letters.


*/
function longestCommonPrefix(strs) {
  if (!strs[0]) {
    return "";
  }
  if (strs.length === 1) {
    return strs[0];
  }
  let ans = "";
  for (let i = 0; i < strs[0].length; i++) {
    ans += strs[0][i];
    for (let j = 0; j < strs.length; j++) {
      console.log(ans);
      if (ans !== strs[j].slice(0, i + 1)) {
        return ans.slice(0, -1);
      }
    }
  }
  return ans;
}
console.log(longestCommonPrefix(["flower", "flow", "flight"]));
//console.log(longestCommonPrefix(["dog", "racecar", "car"]));
console.log(longestCommonPrefix([""]));
console.log(longestCommonPrefix(["a", "b"]));
console.log(longestCommonPrefix(["flower", "flower", "flower", "flower"]));
//horizontal scanning
function longestCommonPrefix(strs) {
  if (strs.length == 0) return "";
  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    console.log(prefix);
    console.log(strs[i].indexOf(prefix));
    while (strs[i].indexOf(prefix) != 0) {
      prefix = prefix.substring(0, prefix.length - 1);
      console.log(prefix);
      if (!prefix) return "";
    }
  }
  return prefix;
}
//vertical scanning
function longestCommonPrefix(strs) {
  if (strs == null || strs.length == 0) return "";
  for (let i = 0; i < strs[0].length; i++) {
    let c = strs[0].charAt(i);
    for (let j = 1; j < strs.length; j++) {
      if (i == strs[j].length || strs[j].charAt(i) != c)
        return strs[0].substring(0, i);
    }
  }
  return strs[0];
}
