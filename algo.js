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