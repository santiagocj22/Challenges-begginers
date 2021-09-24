/*Challenge number 1*/
/*given a string s and a charactre c return the number of ocurrences of c in s*/
const tittle = "How many letters will be repeated in this sentence?";
/*declarated ocurrences function that receive two arguments text which is a string and letter which is a character */
function Ocurrences(tittle, letter){
   /*called split method from string that divides a string into substrings*/
   /*the ocurrence is the resulted sunstring length minus one*/ 
    return tittle.split(letter).length -1;
}
console.log(Ocurrences(tittle, "e"));




/*Challenge number 2*/
/*We have a volatile market where prices go up and down every day,
This is a stock of prices and we will determine which day is best to buy and sell*/
const stockPrices = [ 150, 256, 635, 452, 143, 954, 332];
/*we use the Math.max and Math.min functions to extract the highest and lowest price respectively*/
const daySale = Math.max(...stockPrices);
const dayBuy = Math.min(...stockPrices);
/*Now that we have located the maximum value and the minimum value,
We proceed to search for the days in which they are located using the indexOf method, passing as parameters the location of the highest price and the lowest price,
we add the +1 since the arrays count the objects from 0,
Thus we determine that day 1 is the value 0 of our array */
const locationBuy = stockPrices.indexOf(dayBuy) + 1;
const locationSale = stockPrices.indexOf(daySale) + 1;
/*Now we have located the maximum price, the minimum price and on what days they were, now we are going to print the result in the console.*/
const stockBuySale = ["buy on day " + locationBuy, "sale on day " + locationSale];
console.log(stockBuySale);
/*Now that we have our base code with static elements,
 we proceed to encapsulate it in a function with variable parameters*/ 

function calcBuySellday(...stockPrices){
    const dayBuy = Math.min(...stockPrices);
    const locationBuy = stockPrices.indexOf(dayBuy) + 1;
    const daySell = Math.max(...stockPrices);
    const locationSell = stockPrices.indexOf(daySell) + 1;
    return [("Buy on day " + locationBuy),("Sale on day " + locationSell)];
};
calcBuySellday();