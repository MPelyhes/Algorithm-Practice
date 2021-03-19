// Algo 1: Reduce Sum
// Return the sum of all numbers in a given array.

const reduceSum = (arr) => {
  return arr.reduce((sum, value) => sum + value, 0);
}

// console.log(reduceSum([1, 2, 3, 4]))

const arrSum = (arr) => {
  let sum = 0;

  for(let num of arr){
    sum += num;
  }

  return sum;
}

// console.log(arrSum([1, 2, 3, 4]))

// The reduce sum function was fisrt solved using a reduce function and then with a for/of functions

// Algo 2: Less than 100
// Given an array of numbers, return a new array that contains all numbers from the original array 
//that are less than 100.

const underOneHundo = (arr) => {
  return arr.filter(num => num < 100)
}

// console.log(underOneHundo([99, 101, 88, 4, 2000, 50]))

const underOneHundoLoop = (arr) => {
  let result = [];
 
  for(let num of arr){
    if(num < 100){
      result.push(num)
    }
  }
 
  return result;
 }

//  console.log(underOneHundo([99, 101, 88, 4, 2000, 50]))

// In the first solution, we filtered the givern array to create a new array that only contains numbers under 100
// In the second solutions, we used a for/of loop to push the numbers under one hundred into a new array

// Algo 3: Map Double
//Given an array of numbers, return a new array whose values are the original array’s value doubled.

const seeingDouble = (arr) => {
  return arr.map((num) => num * 2);
}

// console.log(seeingDouble([4, 2, 5, 99, -4]));

// For this solution we just have to use the map method and multiply each number by 2

//Algo 4: Array Max
// Return the greatest value from an array of numbers.

const toTheMax = (arr) => {
  return Math.max(...arr);
}

// console.log(toTheMax([5, 17, -4, 20, 12]))

const getTheMax = (arr) => {
  let greatestNum = arr[0];

  for(let i = 0; i < arr.length; i++){
    if(arr[i] > greatestNum){
      greatestNum = arr[i]
    }
  }

  return greatestNum;
}

// console.log(getTheMax([5, 17, -4, 20, 12]))

//In the first solution we use the Math.max method and spread the give array into it to find the max
//In the second solution we use a for loop to determine the greatest number

// Algo 5: Reduce: Product
// Given an array of numbers, return the product of all the numbers.

const product = (arr) => {
  return arr.reduce((sum, value) => sum * value)
}

// console.log(product([1, 2, 3, 4]))

//In this solution we simply call the reduce method on the given array and pass it a function that multiplies each value by the accumulator(sum)

//Algo 6: Reverse Array
//Given an array, return a new array that contains the original array’s values in reverse.

const reverse = (arr) => {
  return arr.reverse();
}

// console.log(reverse([1, 2, 3, 4, 5]));

const reverseIt = (arr) => {
  let reverseArr = [];
  for(let num of arr){
    reverseArr.unshift(num)
  }
  return reverseArr;
}

// console.log(reverseIt([1, 2, 3, 4, 5]));

// In the first solution we use the array reverse function method to reverse the entire array
//In the second solution we use unshift method to create a new array with the numbers in reverse order

// Algo 7: Skip It
// Given an array of numbers, return a new array in which only select numbers from the original array are included, based on the following details:
// The new array should always start with the first number from the original array. The next number that should be included depends on what the first number is. The first number dictates how many spaces to the right the computer should move to pick the next number. For example, if the first number is 2, then the next number that the computer should select would be two spaces to the right. This number gets added to the new array. If this next number happens to be a 4, then the next number after that is the one four spaces to the right. And so on and so forth until the end of the array is reached.

const skipIt = (arr) => {
 let result = [];
 let counter = 0;

 for(let i = 0; i < arr.length; i++){
   if(i === counter){
     result.push(arr[i])
     counter += arr[i];
   }
 }

 return result;
}

// console.log(skipIt([2, 1, 3, 2, 5, 1, 2, 6, 2, 7, 1, 5, 6, 3, 2, 6, 2, 1, 2]));

//For this solution we create an empty array to hold the desired numbers. We also set a counter variable to track which numbers to return
//We then use a for loop to iterate over the given array. If the index is equal to the counter, we add the number at that index into our
//result array. We then add that number to the counter. If the index is not equal to the counter we do nothing.

//Algo 8: Reverse String
// Return the reverse of a given string.

const reverseString = (str) => {
  return str.split('').reverse().join('');
}

// console.log(reverseString('abcde'));

//For this solution we use the split method to turn the given string into an array. Each character has its own index, so we can reverse the array and
//then join it back together without spaces between the letters

// Algo 9: Show me the money
// Given a string, return true if the “$” character is contained within the string or false if it is not.

const money = (str) => {
  return str.includes("$") ? true : false;
}

// console.log(money("i hate but i love money i know i know im crazy"))

// For this solution we use a ternary operator to return true if the string includes a $, using the includes method

//Algo 10: Alternate Capitals
//Given a string, return a copy of the original string that has every other character capitalized. (Capitalization should begin with the second character.)

// const alternator = (str) => {
//   let newStr = str.split('');
//   let arr = [];

//   for(let i = 1; i < newStr.length; i + 2){
//     arr.push(newStr[i].toUpperCase())
//   }

//   return arr;
// }

// // console.log(alternator('hello, how are your porcupines today?”'));

//Algo 11: First Duplicate Character 
// Given a string, find the first occurence of two duplicate characters in a row, and return the duplicated character.

const duplicate = (str) => {
  let strArr = str.split('');
  let noDupes = "There don't appear to be any duplicates"

  for(let i = 0; i < strArr.length; i++){
    if(strArr[i] === strArr[i+1]){
      return strArr[i]
    }
  }

  return noDupes;
}

// console.log(duplicate('abcdefghijklmnopqrstuvwxyz'))
//In this solution we turn the given string into an array. Then we create a variable to be returned if there are no duplicates
//Next, we use a for loop to loop over every character of the array until we find a duplicate. We know a character has a duplicate
//next to it if it is identical to the character at the index which follows it

//Algo 12: Reverse Words
// Given a string of words, return a new string that contains the words in reverse order.

const reverseWords = (str) => {
  return str.split(' ').reverse().join(' ')
}

// console.log(reverseWords('popcorn is so cool isn’t it yeah i thought so'))

const reversedWords = (str) => {
  let strSplit = str.split(' ');
  let result = [];

  for(let i = 0; i < strSplit.length; i++){
    result.unshift(strSplit[i]);
  }

  return result.join(' ');
}

// console.log(reversedWords('popcorn is so cool isn’t it yeah i thought so'))

//In the first solution we split the given string into an array, keeping the spacing between words. Then we reverse the array and join it back together.
//In the second solution we also split the given string into an array. We then use a for loop to iterate over the array. We unshift each item into the
//result array to reverse the original order. Finally, we return the result array after turning it into a string.

//Algo 13: Palindrome
//Given a string, return true if it is a palindrome, and false if it is not.

const palindrome = (str) => {
  let reversal = str.split('').reverse().join('');

  if(reversal === str){
    return true;
  }

  return false;
}

// console.log(palindrome('racecars'));
//In this solution we create a variable which holds the reversed version of the original string. 
//We then use an if statement to compare it to the original

//Algo 14: Hamming
//Given two strings of equal length, return the number of characters that are different between the two strings.

const hamming = (str1, str2) => {
  let arr1 = str1.split('');
  let arr2 = str2.split('');
  let counter = 0;

  for(let i = 0; i < arr1.length; i++){
    if(arr1[i] !== arr2[i]){
      counter++
    }
  }

  return counter;
}

// console.log(hamming('ABCDEFG', 'ABCXEOG'));

//For this solution we turn both of the give strings into arrays so that we can iterate over them.
//We create a counter variable which will track the number of differencese. We loop over the first array
//comparing its indices to the comparable indices of the second array. For each difference, we add one to the counter

//Algo 15: Primes
//Write a function that returns whether a given number is a prime number.

const primes = (num) => {

}