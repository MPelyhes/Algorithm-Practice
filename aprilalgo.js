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

//Sliding window - maxSubarraySum
//Given an array of integers and a number, write a function called maxSubarraySum which finds the maximum sum of a subarray with the length of the number passed to the function
//A subarray must consist of consecutive elements from the original array.

function maxSubarraySum(arr, num){
  let maxSum = 0;
  let tempSum = 0;

  if(arr.length < num){return null}
  for(let i = 0; i < num; i++){
      maxSum += arr[i];
  }
 
  tempSum = maxSum;
 
  for(let i = num; i < arr.length; i++){
      tempSum = (tempSum - arr[i - num] + arr[i]);
      maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

// console.log(maxSubarraySum([100, 200, 300, 400], 2));

const minSubarrayLen = (nums, sum) => {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;

  while (start < nums.length){
    //if the current window doesn't add up to the given
    //sum then move the window to the right
    if(total < sum && end < nums.length){
      total += nums[end];
      end++
    }
    // if current window adds up to at least
    //the sum given then we can shrink the window
    else if(total >= sum){
      minLen = Math.min(minLen, end-start);
      total -= nums[start];
      start++
    }
    //current total less than required total but we reach the end
    else{
      break;
    }
  }

  return minLen === Infinity ? 0 : minLen;
}

// console.log(minSubarrayLen([2,3,1,2,4,3], 7));

const findLongestSubstring = (str) => {
  if(!str.length) return null;

  let start = 0;
  let seen = {};
  let longest = 1;

  for(let i = 0; i <str.length; i++){
    let char = str[i];
    if(seen[char]){
      start = Math.max(start, seen[char])
    }
    //index - beginning of substring + (to include current in count)
    longest = Math.max(longest, i - start + 1);
    // store the index of the next char so as not to double count
    seen[char] = i + 1;
  }

  return longest;
}

// console.log(findLongestSubstring("rithmschool"));

const power = (base, exponent) => {
  if(exponent === 0) return 1;
  let result = base;

  const powerHelper = (base, exponent) => {
    if(exponent === 1){
      return result;
    } else {
      result *= base;
      exponent--;
      return powerHelper(base, exponent);
    }
  }

  return powerHelper(base, exponent);
}

// console.log(power(3,9));

const factorial = (num) => {
  if(num < 0) return null;
  let product = 1;

  const factorialHelper = (num) => {
    if(num <= 1){
      return product;
    } else {
      product *= num;
      num--;
      return factorialHelper(num);
    }
  }
  return factorialHelper(num);
}

// console.log(factorial(0))

const productOfArray = (arr) => {
  let product = 1;

  const productHelper = (arr) => {
    if(!arr.length){
      return product;
    } else{ 
      product *= arr[0];
      return productHelper(arr.slice(1))
    }
  }

  return productHelper(arr);
}
 
// console.log(productOfArray([1,2,3,10]))

//Write a function which accepts a number and adds up all the numbers from zero to the number passed to the function

const recursiveRange = (num) => {
  let sum = 0;

  const helper = (num) => {
    if(num === 0){
      return sum;
    } else {
      sum += num;
      num--;
      return helper(num);
    }
  }

  return helper(num);
}

// console.log(recursiveRange(10));

//Write a recursive function which accepts a number and returns the nth number in the fibonacci sequence

const fib = (num) => {
  if(num <= 1) return 1;

  let secondLastNum = 1;
  let lastNum = 1;
  let sum = 0;

  const helper = (num) => {
    console.log(sum);
    if(num <= 2){
      return sum;
    } else {
      sum = lastNum + secondLastNum;
      secondLastNum = lastNum
      lastNum = sum;
      num--;
      return helper(num);
    }
  };

  return helper(num);
}

console.log(fib(35));