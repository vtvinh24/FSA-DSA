// Input: each line contains a number denoting a day's stock price
let arr = args.map(Number);

/*

find right-most max, then find corresponding min to the left
if found, return that value to an array
repeat until the list is done
return max of the array

profit can be made by buying at any point and selling at any point after that

*/

function maxProfit(prices) {
  let profits = [];
  for (let i = 0; i < prices.length; i++) {
    let max = 0;
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[j] > prices[i]) {
        max = Math.max(max, prices[j] - prices[i]);
      }
    }
    profits.push(max);
  }

  return Math.max(...profits);
}

return maxProfit(arr);
