// Problem Domain :

// Say you have an array for which the ith element is the price of a given stock on day i. If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit. Note that you cannot sell a stock before you buy one.


// Example : 

// Input - [7,1,5,3,6,4]
// Output - 5
// Explanation - Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5. Not 7-1 = 6, as selling price needs to be larger than buying price.


// Algorithm :

// - Set a default minimum price
// - Keep track of our maximum profit
// - Iterate through the list of stock prices and check if the stock price is lower than the minimum buy price, if so, update that variable
// - If the stock price minus the minBuyPrice is greater than the maxProfit, update that variable
// - Return the maxProfit


// C O D E :

const buyAndSellStock = (prices) => {
    let minBuyPrice = Infinity;
    let maxProfit = 0;

    for (let price of prices) {
        if (price < minBuyPrice) {
            minBuyPrice = price;
        } else if (price - minBuyPrice > maxProfit) {
            maxProfit = price - minBuyPrice;
        }
    }
    return maxProfit;
}

// BIG O :

// O(n) Time Complexity
// O(1) Space Complexity