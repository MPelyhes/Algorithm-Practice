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

console.log(fearNotLetter("abce"));