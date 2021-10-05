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
/*we use the Math.max and Math.min functions to extract the highest and lowest price respectively*/
/*Now that we have located the maximum value and the minimum value,
We proceed to search for the days in which they are located using the indexOf method, passing as parameters the location of the highest price and the lowest price,
we add the +1 since the arrays count the objects from 0,
Thus we determine that day 1 is the value 0 of our array */
/*Now we have located the maximum price, the minimum price and on what days they were, now we are going to print the result in the console.*/
/*Now that we have our base code with static elements,
 we proceed to encapsulate it in a function with variable parameters*/ 
const stockPrices = [ 150, 256, 635, 452, 143, 954, 332];
function calcBuySellday(...stockPrices){
    const dayBuy = Math.min(...stockPrices);
    const locationBuy = stockPrices.indexOf(dayBuy) + 1;
    const daySell = Math.max(...stockPrices);
    const locationSell = stockPrices.indexOf(daySell) + 1;
    return [("Buy on day " + locationBuy),("Sale on day " + locationSell)];
};
calcBuySellday();
console.log(calcBuySellday(...stockPrices))


/*Challenge number 3*/
/*given an array of people objects(where each person has a name and a number of pizza slices they're hungry for)and a number of slices
that the pizza can be sliced into, return the number of pizzas you needed to buy*/ 


const pizzaSize = 8
const namesAndSlices = [
       {name:'joe', slices:8},
       {name:'cassidy', slices:5},
       {name:'cami', slices:3}];
const pizzaSlices = namesAndSlices.map(function(article){
        return article.slices
    });
const totalPizzaSlice = pizzaSlices.reduceRight((before,after)=>{
        return before + after
    });
function pizzaOrder(totalPizzaSlice, pizzaSize){
    return 'You need to buy ' + (totalPizzaSlice / pizzaSize) + ' pizzas'
};
console.log(pizzaOrder(totalPizzaSlice, pizzaSize));
