function narcissistic(value) {
    let arr = value.toString().split("").map(Number);
    let sum = arr.reduce((acc, cur) => acc + cur ** arr.length, 0);
  
    return sum === value;
  }
  narcissistic(1652);
  