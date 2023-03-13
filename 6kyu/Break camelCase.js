/* 
Complete the solution so that the function will break up camel casing, using a space between words.
Example

"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""


*/

// complete the function
function solution(string) {
  //push to array camel
  //replace camel to space-camel
  //g флаг ищет всё до конца и кладет в маасив
 console.log(string.match(/[A-Z]/g))
  return string.replace(/[A-Z]/g, " $&");
}
console.log(solution("camelCasing"));
console.log(solution("camelCasingTest"));
