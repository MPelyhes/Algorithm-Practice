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

// function whatIsInAName(collection, source) {
//   var arr = [];
//   // Only change code below this line
//   // for(let i = 0; i < collection.length; i++) {
//   //   if(collection[i].hasOwnProperty(source)) {
//   //     arr.push(collection[i])
//   //   }
//   // }
//   var srcKeys = Object.keys(source);
//   var srcVals = Object.values(source);
//   // Only change code above this line
//   return srcKeys.concat(srcVals);
// }

// console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));

// Spinal Tap Case  

// Convert a strring to spinal case. Spinal case ia all lowercase words joined by dashes

function spinalCase(str) {
  //Split the string at the following conditions: whitespace is encountered, underscore is encoutered, or is followed by an uppercase letter. Join using hyphen. Lowercase the resulting string.

  return str.split(/\s|_|(?=[A-Z])/).join('-').toLowerCase();

 
}

console.log(spinalCase("This is a sentence to test spinal case"));

