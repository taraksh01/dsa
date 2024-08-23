const prices = [7, 1, 5, 3, 6, 4];

// Time complexity => O(N*N)
// Space complexity => O(1)
function maxProfit(prices: number[]): number {
  let len: number = prices.length;
  let maxProfit: number = 0;
  for (let i = 0; i < len; i++) {
    let buy = prices[i];
    for (let j = i + 1; j < len; j++) {
      maxProfit = Math.max(maxProfit, prices[j] - buy);
    }
  }

  return maxProfit;
}

// Time complexity => O(N)
// Space complexity => O(1)
function betterMaxProfit(prices: number[]): number {
  let len: number = prices.length;
  let maxProfit: number = 0;
  let minPrice: number = prices[0];
  for (let i = 0; i < len; i++) {
    if (minPrice > prices[i]) minPrice = prices[i];
    maxProfit = Math.max(maxProfit, prices[i] - minPrice);
  }

  return maxProfit;
}
console.log(maxProfit(prices));
console.log(betterMaxProfit(prices));
