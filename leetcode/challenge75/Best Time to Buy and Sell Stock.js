//greedy = solving a problem by selecting the best option available at the moment; It doesn't worry whether the current best result will bring the overall optimal result.
var maxProfit = function (prices) {
  let buy = prices[0],
    max_profit = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < buy) {
      buy = prices[i];
    }
    if (prices[i] - buy > max_profit) {
      max_profit = prices[i] - buy;
    }
  }
  return max_profit;
};

/* second solution */

var maxProfit = function (prices) {
  let max_profit = 0;
  let left = 0;
  let right = 1;
  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      let profit = prices[right] - prices[left];
      max_profit = Math.max(max_profit, profit);
    } else {
      left = right;
    }
    right++;
  }
  return max_profit;
};
console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
