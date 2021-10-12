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
function calcBuySellday(stockPrices){
    const dayBuy = Math.min(...stockPrices);
    const locationBuy = stockPrices.indexOf(dayBuy) + 1;
    const daySell = Math.max(...stockPrices);
    const locationSell = stockPrices.indexOf(daySell) + 1;
    return `Buy on day  ${locationBuy}  and Sale on day ${locationSell}`
};
console.log(calcBuySellday(stockPrices))


/*Challenge number 3*/
/*given an array of people objects(where each person has a name and a number of pizza slices they're hungry for)and a number of slices
that the pizza can be sliced into, return the number of pizzas you needed to buy*/ 



const namesAndSlices = [
    {name:'joe', slices:8},
    {name:'cassidy', slices:5},
    {name:'cami', slices:3}
];
function pizzaOrder(people, slices){
    const totalSlices = people.reduce((reducedValue, element)=>{
        reducedValue = reducedValue + element.slices;
        return reducedValue;
    }, 0);
    const totalPizzas = Math.ceil(totalSlices / slices);
    return `you need to buy ${totalPizzas} pizzas`;
}
pizzaOrder(namesAndSlices, 8);
pizzaOrder([{name:'santi', slices:3},{names:'sebas',slices:7},{name:'gloria', slices:6}], 12);


/*Challenge number 4
given a string containing only characters x and y, change it into a string such that there are no matching adjacent characters.
you're allowed to delete zero or more  characters in the string. 
find the minimun number of required deletions.*/ 


function everyOther(str) {
    let counter = 0;
    let newStr = str[0];
    for (let i=1; i<str.length;i++) {
        if (str[i] === str[i - 1]) {
            counter = counter + 1;
        } else {
            newStr = newStr + str[i]
        }
    }
    return `we have deleted ${counter} letters, and the new string is ${newStr}`
}
everyOther('xxyxxy');
/* pseudocode exercises*/

/*exercise 1 create a function that receives two numbers, add their value and return the result;*/
function add(a,b){
    var result = 0
    result = a + b 
    return result
}

/*exercise 2 create a function that receives an array of numbers and that multiply each element of the array by zero and return
the new array*/
function multiplication(arr){
    for(let i=0; i<arr.length; i++){
        arr[i] = arr[i] * 0;
    }
    return arr
}
/*exercise 3 create a function that receives an array containing letters
 example: ['a', 'b', 'c'] print 'abc' */
function transform(arr) {
    let str = ''
    for(let i = 0; i < arr.length; i++){
        str = str + arr[i]
    }
    return str
}

/*exercise 4 create a function that receives an array of numbers, counts how many pairs exist and returns the total*/ 

function pairs(arr) {
    let count = 0
    for (let i=0; i<arr.length; i++) {
       if (arr[i] % 2==0) {
       count = count + 1;
       }
    }
    return count
}
/*exercise 5 create a function that calculates the distance between two points
in a 2D space.*/
function distance(x1,y1,x2,y2){
    let a = [x1 , y1]
    let b = [x2 , y2]
    const subtr1 = Math.pow ( (b[0] - a[0]) , 2);
    const subtr2 = Math.pow ( (b[1] - a[1]) , 2);
    const add = subtr1 + subtr2;
    const result = Math.sqrt(add);
    return result
}
