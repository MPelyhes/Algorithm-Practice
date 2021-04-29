// Write a function, persistence, that takes in a positive parameter num and returns its 
// multiplicative persistence, which is the number of times you must multiply the digits 
// in num until you reach a single digit.

function persistence(num, counter = 0){
  if(num < 10){
    return counter
  }

  let numStr = String(num).split('')
  let newNum = numStr[0];

  for(let i = 1; i < numStr.length; i++){
    newNum = newNum * numStr[i];
  }

  return persistence(newNum, (counter + 1));
}

// console.log(persistence(999))

//We start by defining the function so that it accepts two parameters, the current/given number and the counter
//which has a default value of zero. If the number is less than 10 we return the counter. Then we turn the number
//into a string so that we can split it into an array. We create a newNum variable which will store and update
//the product of each digit multiplied by the next.  It's initial value is the first digit in the array.
// Next, we use a for loop to set the newNum to be the multiple of newNum by the current digit in the array.
//Finally, we call our function and pass it the newNum and the counter. The process will continue until we 
//have a number that is less than 10. Yay recursion!!!

// Don't Drink the Water

// Given a two-dimensional array representation of a glass of mixed liquids, sort the array such that the liquids appear in the glass based on their density. (Lower density floats to the top) The width of the glass will not change from top to bottom.

// ======================
// |   Density Chart    |
// ======================
// | Honey   | H | 1.36 |
// | Water   | W | 1.00 |
// | Alcohol | A | 0.87 |
// | Oil     | O | 0.80 |
// ----------------------

// [                            [
//  ['H', 'H', 'W', 'O'],        ['O','O','O','O']
//  ['W', 'W', 'O', 'W'],  =>    ['W','W','W','W']
//  ['H', 'H', 'O', 'O']         ['H','H','H','H']
//  ]                           ]
 
// The glass representation may be larger or smaller. If a liquid doesn't fill a row, it floats to the top and to the left.

function liquidDensity(arr){
  if(!arr.length){
    return arr;
  }

  const densityTable= {
    "O": 0.8,
    "A": 0.87,
    "W": 1.0,
    "H": 1.36
  }

  if(arr.length === 1){
    return arr.sort( function(a,b){
      
      return densityTable[a] - densityTable[b]
    })

  }

  let hash = {};
  let result = [];
  for(let value of arr){
    for(let i = 0; i < value.length; i++){
      if(!hash.hasOwnProperty(value[i])){
        hash[value[i]] = [value[i]];
      } else{
        hash[value[i]].push(value[i])
      }
    }
  }

  if(hash.hasOwnProperty("O")){
    result.push(hash["O"])
  }

  if(hash.hasOwnProperty("A")){
    result.push(hash["A"])
  }

  if(hash.hasOwnProperty("W")){
    result.push(hash["W"])
  }

  if(hash.hasOwnProperty("H")){
    result.push(hash["H"])
  }

  return result;
}

// console.log(liquidDensity([['A','H','W','O']]));

//This doesn't really work if there are not an equal number of particles for each liquid type...

//Multiple pointers
//Implement a function called countUniqeVariables, which accepts a sorted array, and counts the unique values in the array.
//There can be negative numbers in the array, but it will always be sorted

const countUniqueVariables = (arr) => {
  if(arr.length === 0){
    return 0
  }
  let left = 0;
  let right = 1;

  do{
    if(arr[left] === arr[right]){
      right++
    } else {
      left++
      arr[left] = arr[right]
    }
  } while(right < arr.length)
  console.log(left, right)
  return left + 1;
}

// console.log(countUniqueVariables([1,1,1,1,1,2,3,3,44]));

//Frequency Counter - sameFrequency
//Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.
//The solution must be written in O(N) time complexity

const sameFrequency = (num1, num2) => {
  const str1 = String(num1);
  const str2 = String(num2);
  if(str1.length !== str2.length){
    return false;
  }

  const strToHash = (str) => {
    let hash ={};
    for(let char of str){
      if(hash[char] > 0){
        hash[char]++
      } else {
        hash[char] = 0;
      }
    }
    return hash;
  }

  const hash1 = strToHash(str1);
  const hash2 = strToHash(str2);

  for(let char in hash1){
    if(hash1[char] !== hash2[char]){
      return false;
    }
  }

  return true;
}

// console.log(sameFrequency(182, 281))
// console.log(sameFrequency(34, 14))
// console.log(sameFrequency(35897, 73598));

//Frequency Counter / Multiple Pointers - areThereDupes
//Implement a func called areThereDupes which accepts a variable number of arguments, and checks whether there are any duplicated among
//the arguments passed in. Solved with frequency counter pattern or multiple pointers pattern


//Frequency pattern solution
const areThereDupes = (...args) => {
  let argsHash = {};

  for(let arg of args){
    if(argsHash[arg] > 0){
      return true
    } else {
      argsHash[arg] = 1;
    }
  }

  return false;
}

// console.log(areThereDupes(1, 3, "string", true, 1));

//Are there dupes multiple pointers solution

const areThereDupesPointers = (...args) => {
  args.sort((a,b) => a > b);
  let start = 0;
  let next = 1;

  while(next < args.length){
    if(args[start] === args[next]){
      return true;
    }
    
    start++
    next++
  }
  return false;
}

// console.log(areThereDupesPointers(1, 3, "string", true));

//Mulitple pointers - averagePair
//Write a function that takes in a sorted array of integers and a target average value. Determine if there is a pair of values
//where the average of the pairs equals the target value

const averagePair = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;

  do{
    if((arr[left] + arr[right]) / 2 === target){
      return true;
    } else if((arr[left] + arr[right]) / 2  < target){
      left++
    } else{
      right--
    }
  } while(left < right);

  return false;
}

// console.log(averagePair([1,1,3, 6, 7, 9], 2.5));

//Pointer - isSubsequence
//Write a function that takes in two strings and checks whether the characters in the first string form a subsequence of the chars in the
//second string. In other words the function should check whether the chars in the first string appear somewhere in the second string without their order
//changing.

const isSubsequence = (str1, str2) => {
  let i = 0;
  let j = 0;
  if(!str1){return true};
  do{
    if(str1[i] === str2[j]){
      i++
    };
    if(i === str1.length){
      return true;
    }
    j++
  } while(j < str2.length);

  return false;
}

// console.log(isSubsequence("hello", "hello world"));
// console.log(isSubsequence("sing", "sting"));
// console.log(isSubsequence("abc", "acb"));