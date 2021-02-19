// Intermediate Algorithm Practice Problems from freeCodeCamp

//Sum All Numbers In a Range

/* We'll pass you an array of two numbers. Return the sum of those two numbers plus
the sum of all the numbers between them. The lowest number will not always come first.
*/

function sumAll(arr) {
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  let result = 0;

  for(let i = min; i <= max; i++) {
    result += i;
  }
  return result;
}

// console.log(sumAll([1,4]));

// Diff Two Arrays

/* Compare two arrays and return a new array with any items found in one of the two
given arrays, but not both. In other words, return the symmetric difference of the two arrays.
*/

function diffArray(arr1, arr2) {
  return arr1.concat(arr2).filter((item,_,arr) => arr.lastIndexOf(item) == arr.indexOf(item));
}

// console.log(diffArray([1,2,3,4], [2,4,6,8]));

// Seek & Destroy

/* You will be provided with an initial array (the first argument in the
destroyer function), followed by one or more arguments. Remove all
elements from the initial array that are of the same value as these
arguments. */


function destroyer(arr) {
  let args = Array.from(arguments).slice(1);
  return arr.filter((val) => {
    return !args.includes(val);
  });
}

// console.log(destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan"));


// Wherefore art thou

// Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

function whatIsInAName(collection, source) {
  // We create a variable for the source objects keys
  let srcKeys = Object.keys(source);

  // filter the collection
  return collection.filter((obj) => {
    for (let i = 0; i < srcKeys.length; i++) {
      if (!obj.hasOwnProperty(srcKeys[i]) ||
      obj[srcKeys[i]] !== source[srcKeys[i]]
      ) {
        return false;
      }
    }
    return true;
  })
}

  /* We filter through the collection array, and use a for loop to loop
  through each object in the array. We use an if statement to check if
  the object in the collection doesn't have the key and the property
  value doesn't match the value in source. We return false if the if
  statement is correct, otherwise, we return true.*/

// console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));

// Spinal Tap Case

// Convert a string to spinal case. Spinal case is all lowercase words joined by dashes

function spinalCase(str) {
  //Split the string at the following conditions: whitespace is encountered, underscore is encoutered, or is followed by an uppercase letter. Join using hyphen. Lowercase the resulting string.

  return str.split(/\s|_|(?=[A-Z])/).join('-').toLowerCase();
}

// console.log(spinalCase("This is a sentence to test spinal case"));

// Pig Latin

/*Pig Latin is a way of altering English Words. The rules are as follows:
- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add "ay" to it.
- If a word begins with a vowel, just add "way" at the end.
Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase. */

function translatePigLatin(str) {
  let vowelRegex = /^[aeiou]/;
  let conRegex = /[aeiou]/;
  let index = str.search(conRegex);
  let conStart = str.substring(0,index);
  let vowelEnd = str.substring(index);

  if(vowelRegex.test(str)){
    return str.concat("way")
  } else {
    return vowelEnd + conStart + "ay";
  }
}

/* First, we create regexs to identify strings that start with a vowel,
 and to find the first vowel in a string. Then we create a variable
 (index) that will store the index of a strings first vowel. Using the
 substring method, we extract the consonants at the start of a string
 and store it in a new variable (conStart). Similarly, we create a
 variable to store the first vowel and all subsequent characters. We
 then run the str through an if/else statement. If the str starts with a
 vowel, we return the string and concat "way". Else, we take the
 vowelEnd characters and concat conStart and "ay". */

// console.log(translatePigLatin("mythical"));

// Search and Replace

/* Perform a search and replace on the sentence using the arguments provided and return the new sentence.
-First argument is the sentence to perform the search and replace on.
-Second argument is the word that you will be replacing (before).
-Third argument is what you will be replacing the second argument with (after).
-Note: Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"
*/

function myReplace(str, before, after) {

  const replaceRegex = new RegExp(`${before}`);
  const caseRegex = /^[A-Z]/;
  let upperAfter = after.charAt(0).toUpperCase() + after.slice(1);
  let lowerAfter = after.charAt(0).toLowerCase() + after.slice(1)

  if(caseRegex.test(before)) {
    return str.replace(replaceRegex, upperAfter);
  } else {
    after[0].toLowerCase();
    return str.replace(replaceRegex, lowerAfter);
  }
}

/*We start by creating two regular expressions. The first one is created
with a RegExp() constructor, so that the before argument can be
dynamically added. The secod regex checks for if a string starts with
an uppercase letter. We create two vars (upperAfter, lowerAfter) to
mutate the after argument. One changes the first character to
uppercase, the other to lowercase. We use slice() to grab every
character after the first one and concat it to the firs character.
Then we use an if statement to test if before starts with a
capital letter. If it does, we use the replaceRegex to search
the str and replace it with upperAfter. otherwise we replace it
with lowerAfter
*/
// console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));

// DNA Pairing

/*The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
*/

function pairElement(str) {
  let strArray = str.split('');
  let arr = [];

  for (let i = 0; i < strArray.length; i++ ){
    switch(strArray[i]) {
      case "A":
        arr.push(["A", "T"]);
        break;
      case "T":
        arr.push(["T", "A"]);
        break;
      case "G":
        arr.push(["G", "C"]);
        break;
      case "C":
        arr.push(["C", "G"]);
        break
    }
  return arr;
}
}

/*We turn the str into an array and store it in a new variable(strArray). Then we create an empty array variable (arr) to be modified and
returned. We use a for loop to loop through each index of strArray.
Using a switch statement, we push the base pair array that corresponds
to each case. We return arr at the end, which now holds all the base
pairs for the initial str. */

// console.log(pairElement("ATCGA"));

// Sorted Union

/* Write a function that takes two or more arrays and returns a new
array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in
their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the
final array should not be sorted in numerical order.
*/

function uniteUnique(arr) {

 let finalArr = [];

 for(let i = 0; i < arguments.length; i++) {
  let arrArgs = arguments[i];

  for(let j = 0; j < arrArgs.length; j++){
    let indexVal = arrArgs[j];

    if(finalArr.indexOf(indexVal) < 0) {
      finalArr.push(indexVal);
    }
  }
 }
 return finalArr;
}

/* We create empty array finalArr to store the final result.
Loop through the arguments object in the outer loop and store it in arrArgs.The inner loop is used to loop through individual array elements.
If the element doesn’t already exist in finalArr, we add it.
Return finalArr.
*/

// console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));

// Convert HTML Entities

/*Convert the characters &, <, >, " (double quote), and ' (apostrophe),
in a string to their corresponding HTML entities.*/

function convertHTML(str) {
  let arrayStr = str.split('');

  for(let i = 0; i < arrayStr.length; i++){
    switch(arrayStr[i]) {
      case "&":
        arrayStr.splice(i, 1, "&amp;");
        break;
      case "<":
        arrayStr.splice(i, 1, "&lt;");
        break;
      case ">":
        arrayStr.splice(i, 1, "&gt;");
        break;
      case `"`:
        arrayStr.splice(i, 1, "&quot;");
        break;
      case "'":
        arrayStr.splice(i, 1, "&apos;");
         break;
  }
  }
  return arrayStr.join('');
}

/*Assign arrayStr to str.split(''), which creates an array containing each individual character in the passed string.
Pass each character in the newly created array into a switch() statement.
Replace the HTML entities with their corresponding HTML entity string (i.e. '&' becomes '&amp;' in line 51)
temp.join('') converts the array of characters into a string to be returned.
*/

// console.log(convertHTML("Sixty > twelve"));

// Sum All Odd Fibonacci Numbers

/* Given a positive integer num, return the sum of all odd Fibonacci
numbers that are less than or equal to num.*/

function sumFibs(num) {
  let prevNumber = 0;
  let currNumber = 1;
  let result = 0;

  while (currNumber <= num) {
    if (currNumber % 2 !==0) {
      result += currNumber;
    }

    currNumber +=prevNumber;
    prevNumber = currNumber - prevNumber;
  }

  return result;
}

// console.log(18);

/*We create a variable to keep record of the current and previous numbers along with the result that will be returned.
We use a while loop to make sure we do not go over the number given as parameter.
We use the modulo operand to check if the current number is odd or even. If it is odd, add it to the result.
We complete the Fibonacci circle by rotating getting the next number and swapping values after.
Return the result.
*/

// Sum All Primes

/*A prime number is a whole number greater than 1 with exactly two
divisors: 1 and itself. For example, 2 is a prime number because it is
only divisible by 1 and 2. In contrast, 4 is not prime since it is
divisible by 1, 2 and 4.

Rewrite sumPrimes so it returns the sum of all prime numbers that are
less than or equal to num.
*/

function sumPrimes(num) {
  let i = 1;
  let sum = 0;
  while (i <= num) {
    if (isPrime(i)) {
      sum += i;
    }
    i++;
  }
  return sum;
}
//function to check if a number is prime or not
function isPrime(x) {
  for (let i = 2; i < x; i++) {
    if (x % i === 0) return false;
  }
  return x !== 1 && x !== 0;
}

/*Create a function to check if a number is prime or not.
Declare two variables. One to keep us within the limit of the given
number and the other to store the sum of numbers to be returned.
Create a loop to check all numbers lesser than or equal to the given
number.
Check if a number is prime and add it to the value of sum.
Return the value of sum once the loop exits.*/
// console.log(sumPrimes(10));

// Drop It

/*Given the array arr, iterate through and remove each
element starting from the first element (the 0 index)
until the function func returns true when the iterated
element is passed through it.

Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.
*/

function dropElements(arr, func) {
let times = arr.length;

 for(let i = 0; i < times; i++) {
   if(func(arr[0])) {
     break;
    } else {
      arr.shift();
    }
}
return arr;
}
/*Create a for loop to check each element.
Then check for the function given if true then stop, otherwise remove
that element.
return the array.*/

// console.log(dropElements([1, 2, 3], function(n) {return n > 2 }));

// Alternate Drop it Algo.
// I did not come up with it, but I like it better than mine

function dropElements(arr, func) {
  while (arr.length > 0 && !func(arr[0])) {
    arr.shift();
  }
  return arr;
}

// test here
// console.log(dropElements([1, 2, 3], function(n) {return n > 2 }));

// Steamroller

// Flatten a nested array. You must account for varying levels of nesting. Do not use flat() or flatMap()

function steamrollArray(arr) {
  let result = [];

  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr.length; i++) {
      result.push(arr[i][j])
    }
  }
  return result;
}

// console.log(steamrollArray([1, [2], [3, [[4]]]]));

// Missing Letters

/* Find the missing letter in the passed letter range and return it.
If all letters are present in the range, return undefined. */

function fearNotLetter(str) {
  for(let i = 1; i < str.length; i++) {
    if( str.charCodeAt(i) - str.charCodeAt(i-1) > 1) {
      return String.fromCharCode(str.charCodeAt(i-1) + 1);
    }
  }
}

/* We begin by looping over the string. We check if the difference in char codes between adjacent characters in the string is more than 1 (check ASCII table). We return the missing character (+1 from where the gap was detected) */

// console.log(fearNotLetter("abce"));

// Everything Be True

/*Check if the predicate (second argument) is truthy on all elements of
a collection (first argument). In other words, you are given an array
collection of objects. The predicate pre will be an object property and
you need to return true if its value is truthy. Otherwise, return false.*/

function truthCheck(collection, pre) {
  for(let i = 0; i < collection.length; i++) {
    if (!collection[i][pre]) {
      return false;
    }
  }
  return true;
};

/* We use a for loop to loop through each object in the collection argument. Using an if statement, we check each index, and if it is not true that it contains pre we return false. Otherwise, we return true.  */
// console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age"));

// Arguments Optional

/*Create a function that sums two arguments together. If only one
argument is provided, then return a function that expects one argument
and returns the sum. For example, addTogether(2, 3) should return 5, and
addTogether(2) should return a function. Calling this returned function
with a single argument will then return the sum:
var sumTwoAnd = addTogether(2);
sumTwoAnd(3) returns 5.
If either argument isn't a valid number, return undefined. */

function addTogether() {
 var a = arguments[0];
 var b = arguments[1];
 function isNum(num) {
   return Number.isInteger(num);
 }

 if(isNum(a)){
   if(isNum(b))
     return a + b;
   else if(!b)
   return function(b) {
     if (isNum(b))
     return a + b;
   }
 }
}
/* We start by creating variables to hold the first two arguments that
are passed through. Then we create a function (isNum) that checks if an
input is an integer. With an if statement, we check if the first
argument is a number, using our isNum function. If it is, we check if
the second argument is a number. If they both are, we return the sum of
the first and second arguments. Else ff there is only one argument, we
reutrn a function.*/

// console.log(addTogether(2,3));

// Make a Person

/*Fill in the object constructor with the following methods below:
getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)
Run the tests to see the expected output for each method. The methods
that take an argument must accept only one argument and it has to be a
string. These methods must be the only available means of interacting
with the object. */

var Person = function(firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
  var fullName = firstAndLast;

  this.getFirstName = function() {
    return fullName.split(" ")[0];
  };

  this.getLastName = function() {
    return fullName.split(" ")[1];
  };

  this.getFullName = function() {
    return fullName;
  };

  this.setFirstName = function(name) {
    fullName = name + " " + fullName.split(" ")[1];
  };

  this.setLastName = function(name) {
    fullName = fullName.split(" ")[0] + " " + name;
  };

  this.setFullName = function(name) {
    fullName = name;
  };
};

// var bob = new Person('Bob Ross');
// bob.getFullName();


//Stop gninnipS My sdroW!

/*Write a function that takes in a string of one or more words, and
returns the same string, but with all five or more letter words reversed
(Just like the name of this Kata). Strings passed in will consist of
only letters and spaces. Spaces will be included only when more than one
word is present.
Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef
sroirraw" spinWords( "This is a test") => returns "This is a test"
spinWords( "This is another test" )=> returns "This is rehtona test" */

function spinWords(str){
  let arrWords = str.split(' ');
  let result = [];

  for(let i = 0;  i < arrWords.length;  i++){
    if(arrWords[i].length >= 5) {
      let reversed =arrWords[i].split('').reverse().join('');
      result.push(reversed)
    } else {
      result.push(arrWords[i])
    }
 }
return result.join(' ');
}

// console.log(spinWords('Hey fellow warriors'));

// Quarter of the Year

/* Given a month as an integer from 1 to 12, return to which quarter of
the year it belongs as an integer number.
For example: month 2 (February), is part of the first quarter; month 6
(June), is part of the second quarter; and month 11 (November), is part of
the fourth quarter. */

// const quarterOf = (month) => {
//   if (month <= 3) {
//     return 1
//   } else if (month <= 6) {
//     return 2
//   } else if (month <= 9) {
//     return 3
//   } else if (month <= 12) {
//     return 4
//   }

// }

/* We use if/else if statement to define the range of the months for
each quarter of the year. We return the quarter (1-4) for the month that
is passed through  */

// Better Solution Found on CodeWars

const quarterOf =m=> Math.ceil(m / 3);

// console.log(quarterOf(7));

/*Create a function that takes 2 positive integers in form of a string as an input, and outputs the sum (also as a string):

  sumStr("4", "5")    // should output "9"
  sumStr("34", "5")   // should output "39"
If either input is an empty string, consider it as zero. */

function sumStr(a,b) {
  return String(Number(a)+Number(b));
}

// console.log(parseInt('8', ''));

/*Create a function that converts US dollars (USD) to Chinese Yuan (CNY)
. The input is the amount of USD as an integer, and the output should be
a string that states the amount of Yuan followed by 'Chinese Yuan'
For Example:
  usdcny(15) // => '101.25 Chinese Yuan'
  usdcny(465) // => '3138.75 Chinese Yuan'
The conversion rate you should use is 6.75 CNY for every 1 USD. All
numbers shold be rounded to the nearest hundredth (e.g. 21.00 NOT 21.0
or 21) */

function usdcny(usd) {
  return (usd * 6.75).toFixed(2).concat(' Chinese Yuan');

}

/* We multiply the usd by the provided conversionrate, and use the
toFixed() method so that the output returns to the nearest hundredth.
Then we concat the string. */

// console.log(typeof usdcny(465));

// Multiples of 3 or 5

/*If we list all the natural numbers below 10 that are multiples of 3 or
5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Finish the solution so that it returns the sum of all the multiples of 3
or 5 below the number passed in.
Note: If the number is a multiple of both 3 and 5, only count it once.
Also, if a number is negative, return 0(for languages that do have them/*/

  function solution(number){
    let arr = [];
    let result = [0];

    for(let i = 1; i < number; i++){
      arr.push(i);
    } if(number <= 0) {
      arr.push(0);
    }

    for(let i = 0; i < arr.length; i++){
      if((Number.isInteger(arr[i] / 3)) || (Number.isInteger(arr[i] / 5)) ) {
        result.push(arr[i]);
      }
    }

     return result.reduce((accumulator, currentValue) => accumulator + currentValue);
  }

  /*We start by creating an empty array, which we will fill with all the
  numbers betwee one and number. We also create a result array with an 
  initial value of 0 (The initial value prevents us from returning an 
  error if no value is passed through when the function is called). Next 
  we use a for loop to add every number between 1 and number to the arr 
  array. If the number is less than or equal to 0, we push 0 to arr. Then 
  we use another for loop to check each arr value to see if it is a 
  multiple of 3 or 5. If it is, we push it to our result array. Finally, 
  we use the reduce method on the result array to sum all the values and 
  return the sum. 
   */

  // console.log(solution(25));

  // Convert String to Camel Case
  /*Complete the method/function so that it converts dash/underscore
  delimited words into camel casing. The first word within the output 
  should be capitalized only if the original word was capitalized 
  (known as Upper Camel Case, also often referred to as Pascal case). */

  function toCamelCase(str){
    
    let replaceStr = str.replace(/[^a-zA-Z0-9]+/g, ' ').toLowerCase().split(' ');
    let firstChar = str.slice(0,1);
    let result = replaceStr.map((val) => {
      return val.replace(val.charAt(0), val.charAt(0).toUpperCase())
    })
    let finalStr = result.join('');

    return finalStr.replace(/[a-zA-Z]/, firstChar);
  }

// console.log(toCamelCase('the-Stealth-Warrior'));

// Friend or foe?

/*Make a program that filters a list of strings and returns a list
with only your friends name in it.
If a name has exactly 4 letters in it, you can be sure that it has
to be a friend of yours! Otherwise, you can be sure he's not...
Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"] */

function friend(friends){
  let friendArr = [];
  
  for(let i = 0; i < friends.length; i++){
    if(friends[i].length === 4){
      friendArr.push(friends[i]);
    }
  }
  return friendArr;
}

/* We start by creating an empty array (friendArr), which will be
used to hold the names of friends. Then we use a for loop to 
navigate through the passed through array. Any value with the 
exact length of 4 is pushed to the friendArr. We then return the 
friendArr. */

// console.log(friend(["Ryan", "Kieran", "Jason", "Yous"]));

// Find the Odd Int

/*Given an array of integers, find the one that appears an odd
number of times.
There will always be only one integer that appears an odd number
of times. */

function findOdd(A) {
  return A.reduce((a, b) => a ^ b)
}
// Did not write this algorithm. Nead to read up on xor.
// console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]));

// Map the Debris

/*Return a new array that transforms the elements' average altitude into
their orbital periods (in seconds).The array will contain objects in the
format {name: 'name', avgAlt: avgAlt}.
The values should be rounded to the nearest whole number. The body being orbited is Earth.The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2. */

function orbitalPeriod(arr) {
  let GM = 398600.4418;
  let earthRadius = 6367.4447;


  return arr.map(obj => {
    return {
      name: obj.name,
      orbitalPeriod: Math.round(2 * Math.PI * Math.sqrt(Math.pow((obj.avgAlt + earthRadius), 3) / GM))
    }
  });
}

// console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));


// Writing a number guessing game

// let maximum = parseInt(prompt('Enter the maximum number!'));
// while(!maximum) {
//   maximum = parseInt(prompt('Enter a valid number!'));
// }

// const targetNum = Math.floor(Math.random() * maximum) + 1;

// let guess = prompt('Enter your first guess');
// let attempts = 1;

// while(parseInt(guess) !== targetNum){
//   if(guess === 'q') break;
//   attempts++;
//   if(guess > targetNum){
//     guess = prompt('Too high! Enter a new guess.')
//   } else {
//     guess = prompt('Too low! Enter a new guess.')
//   }

// if(guess === 'q'){
//   console.log('Ok, you are quitting')
// } else {
// console.log(`You got it! It took you ${attempts} attempts.`);
// }

// Does my number look big in this?
/*A Narcissistic Number is a positive number which is the sum of its own
digits, each raised to the power of the number of digits in a given base. 
In this Kata, we will restrict ourselves to decimal (base 10).
For example, take 153 (3 digits), which is narcisstic:
    1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
and 1652 (4 digits), which isn't:
    1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938
The Challenge:
Your code must return true or false depending upon whether the given
number is a Narcissistic number in base 10.
Error checking for text strings or other invalid inputs is not required, only valid positive non-zero integers will be passed into the function. */

function narcissistic(value) {
  let strNumArr = value.toString().split('');
  let sum = 0;

  for(let num of strNumArr){
    sum += Number(num) ** strNumArr.length;
  }
  
  if(sum === value){
    return true;
  }
  return false;
}

/* We start by converting the number passed in to a string, which we then split into an array.
This allows us to seperate each digit of the number. We then instantiate a sum variable, which
will hold the sum of our for of loop. We then use a for of statement to loop through each number
from our array. Using the Number method, we convert each digit back to a number, which we raise
to the power of the arrays length (which is the number of digits in the original number). We add
this to the sum. Finally, if the final sum equals the initial value, we return true. Otherwise, 
we return false.
*/
// console.log(narcissistic(153));



// IQ Test

/* Bob is preparing to pass IQ test. The most frequent task in this test is to find out which 
one of the given numbers differs from the others. Bob observed that one number usually differs 
from the others in evenness. Help Bob — to check his answers, he needs a program that among the 
given numbers finds one that is different in evenness, and return a position of this number.
! Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the 
elements start from 1 (not 0) */

function iqTest(numbers){
  let numArr = numbers.split(' ');
  const isEven = numArr.filter(number => number % 2 === 0);
  const isOdd = numArr.filter(number => number % 2 !== 0);
  let diffNum = 0;
  
  if(isEven.length < isOdd.length){
    diffNum = Number(isEven);
  } else {
    diffNum = Number(isOdd);
  }

  return numArr.indexOf(diffNum.toString()) + 1;
}

/* We start by splitting the string of numbers that is passed through, so we can work with them
as an array. Next, we create two variables (isEven and isOdd) In isEven we filter the array into
a new array which only contains the even numbers. We do the opposite in isOdd, creating an array
of odd numbers. Next, we use an if/else statement to compare the length of the filtered arrays.
Since we know there will only be one different value, we cover the value of the shorter array to
a number which is stored in the diffNum variable. Finally, we return the index of the diffNum variable
(converted to a string) and add 1.
 */

// console.log(iqTest("2 4 7 8 10"));

// Bouncing Balls

/* A child is playing with a ball on the nth floor of a tall building. The height of this floor, h, is known.
He drops the ball out of the window. The ball bounces (for example), to two-thirds of its height (a bounce of 0.66).
His mother looks out of a window 1.5 meters from the ground.
How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing?
Three conditions must be met for a valid experiment:
Float parameter "h" in meters must be greater than 0
Float parameter "bounce" must be greater than 0 and less than 1
Float parameter "window" must be less than h.
If all three conditions above are fulfilled, return a positive integer, otherwise return -1.
Note:
The ball can only be seen if the height of the rebounding ball is strictly greater than the window parameter.*/

function bouncingBall(h,  bounce,  window) {
  let counter = 0;
  let bounceHeight
  
  while(h > window){
     h * bounce;
     counter++
  }

  return counter;
}

// Array Diff

/*Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
It should remove all values from list a, which are present in list b.
arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:
arrayDiff([1,2,2,2,3],[2]) == [1,3] */

function arrayDiff(a, b) {
  let result = [];
  for(let i = 0; i < a.length; i++){
      if(!b.includes(a[i])){
        result.push(a[i])
      } 
  }
  return result;
}

// console.log(arrayDiff([], [4,5]));
// console.log(arrayDiff([3,4], [3]));
// console.log(arrayDiff([1,8,2], []));

// Smallest common multiple

/* Find the smallest common multiple of the provided
parameters that can be evenly divided by both, as well 
as by all sequential numbers in the range between these 
parameters.
The range will be an array of two numbers that will not 
necessarily be in numerical order.
For example, if given 1 and 3, find the smallest common 
multiple of both 1 and 3 that is also evenly divisible 
by all numbers between 1 and 3. The answer here would 
be 6. */

function smallestCommons(arr) {
  arr.sort(function(a, b) {
    return b - a;
  });

  let rangeArr =[];

  for(let i = arr[0]; i >= arr[1]; i--){
    rangeArr.push(i);
  }

  let quot = 0;
  let loop = 1;
  let i;

  do {
    quot = rangeArr[0] * loop * rangeArr[1];
    for(i = 2; i < rangeArr.length; i++){
      if(quot % rangeArr[i] !==0){
        break;
      } 
    }

    loop++;
 } while(i !== rangeArr.length);

 return quot;
}

// console.log(smallestComm([1,5]));

// Steamroller
// Flatten a nested array. You must account for varying levels of nesting.
//Your solution should not use the Array.prototype.flat() or Array.prototype.flatMap() methods.

function steamrollArray(arr) {
  function flatDeep(arr, d = 1) {
    return d > 0 ? arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) 
    : val), [])
    : arr.slice();
 };
  
  return flatDeep(arr, Infinity);
}

/* I did not write this algorithm! It was taken from MDN's page on flat() 
method. Saving it here to come back to reference.*/

// console.log(steamrollArray([1, [2], [3, [[4]]]]));

// Binary Agents
//Return an English translated sentence of the passed binary string. The binary string will be space separated.

function binaryAgent(str) {
  let binaryArr = str.split(' ');
  let decimalArr = [];
  let wordArr = [];

  for(let digit of binaryArr){
    decimalArr.push(parseInt(digit, 2))
  }
  for(let decimal of decimalArr){
    wordArr.push(String.fromCharCode(decimal))
  }
  return wordArr.join('');
}

/* We start by splitting the string into an array. We also create two empty
arrays which will hold values pushed from for/of loops. In the first for/of
loop, we convert the binary value into a decimal value using parseInt. We
then take the array of decimals and convert them to a string from the charCode
at that decimal value. We then join and return the array of characters */

// console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));

// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

function digital_root(n) {
  let num = n;

  if(num < 10){
    return num
  } else {
    let numArr = [];
    let numString = num.toString().split('');

    for(number of numString){
      numArr.push(Number(number));
    }
     num = numArr.reduce(( accumulator, currentValue ) => accumulator + currentValue, 0)
     return digital_root(num)
  }
}

// console.log(digital_root(456))

function stockList(listOfArt, listOfCat){
  if (!listOfArt.length || !listOfCat.length) return ''
  return listOfCat.map(w => {
    const s = listOfArt.reduce((a, b) => a + (b.charAt(0) === w ? +b.split(' ')[1] : 0), 0)
    return `(${w} : ${s})`
  }).join(' - ')
}

// console.log(stockList(["ABAR 200", "CDXE 500", "BKWR 250", "BTSQ 890", "DRTY 600"], ["A", "B"]))

//Detect Pangram

// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(string){
  const alphabet =["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  let result =0;

  for(let letter of alphabet){
    if(string.indexOf(letter) >= 0 || string.indexOf(letter.toUpperCase()) >= 0 ){
      result++
    } 
  }

  if(result === 26){
    return true;
  } else{
    return false;
  }
}

// console.log(isPangram("Cwm fjord bank glyphs vext quiz"))

// Polycarpus works as a DJ in the best Berland nightclub, and he often uses dubstep music in his performance. Recently, he has decided to take a couple of old songs and make dubstep remixes from them.

// Let's assume that a song consists of some number of words (that don't contain WUB). To make the dubstep remix of this song, Polycarpus inserts a certain number of words "WUB" before the first word of the song (the number may be zero), after the last word (the number may be zero), and between words (at least one between any pair of neighbouring words), and then the boy glues together all the words, including "WUB", in one string and plays the song at the club.

// For example, a song with words "I AM X" can transform into a dubstep remix as "WUBWUBIWUBAMWUBWUBX" and cannot transform into "WUBWUBIAMWUBX".

// Recently, Jonny has heard Polycarpus's new dubstep track, but since he isn't into modern music, he decided to find out what was the initial song that Polycarpus remixed. Help Jonny restore the original song.

// Input
// The input consists of a single non-empty string, consisting only of uppercase English letters, the string's length doesn't exceed 200 characters

// Output
// Return the words of the initial song that Polycarpus used to make a dubsteb remix. Separate the words with a space.

function songDecoder(song){
  let regex = /(WUB)+/g;
  return song.replace(regex, ' ').trim();
}

// console.log(songDecoder("AWUBWUBWUBBWUBWUBWUBC"));

// Perimeter of squares in a rectangle

// The drawing shows 6 squares the sides of which have a length of 1, 1, 2, 3, 5, 8. 
// It's easy to see that the sum of the perimeters of these squares is : 4 * (1 + 1 + 2 + 3 + 5 + 8) = 4 * 20 = 80
// Could you give the sum of the perimeters of all the squares in a rectangle when there are n + 1 squares disposed in the same manner as in the drawing:
// 

function perimeter(n) {
  if(n === 0){
    return 4;
  } else {
  let totalSquares = n + 1;
  let counter = 0;
  let perimeters =[0, 1];
  do {
    counter++;
    perimeters.push(perimeters[counter] + perimeters[counter -1]);
  } while (perimeters.length  <= totalSquares);

  return perimeters.reduce(( accumulator, currentValue ) => accumulator + currentValue, 0) * 4;
}
}

// console.log(perimeter(7));