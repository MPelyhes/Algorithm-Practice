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

//For this solution we turn both of the given strings into arrays so that we can iterate over them.
//We create a counter variable which will track the number of differencese. We loop over the first array
//comparing its indices to the comparable indices of the second array. For each difference, we add one to the counter

//Algo 15: Primes
//Write a function that returns whether a given number is a prime number.

const primes = (num) => {
 if(num <= 1) return false;
 if(num === 2) return true;

 for(let i = 2; i < num; i++){
   if(num % i === 0){
     return false
   }
 }
 
 return true;
} 

// console.log(primes(55));

//For this solution we start by checking if a number is less than or equal to 1, which would mean it is not prime. 
//Next we check if the number is equal to 2, since that is the only even prime number.
// Then we use a for loop to check every number between two and the given number. If the given number divided by i is
// zero, then we know it is not a prime number. If it makes it all the way through the for loop we know it is a prime number

// Algo 16: FizzBuzz!
//Write a function that prints out every number from 1 to N, with the following exceptions:
// If the number is divisible by 3, print out "FIZZ".
// If the number is divisible by 5, print out "BUZZ".
// If the number is divisible by both 3 and 5, print out "FIZZBUZZ".

const fizzBuzz = (num) => {
  let result = [];

  for(let i = 1; i <= num; i++){
    if(Number.isInteger(i/3) && Number.isInteger(i/5)){
      result.push("FIZZBUZZ");
    } else if(Number.isInteger(i/3)){
      result.push("FIZZ")
    } else if(Number.isInteger(i/5)){
      result.push("BUZZ")
    } else{
      result.push(i);
    }
  }

  return result;
}

// console.log(fizzBuzz(100));

//Algo 17: Leap Year
// Given a year, report if it is a leap year.
// The tricky thing here is that a leap year in the Gregorian calendar occurs:
// on every year that is evenly divisible by 4
// except every year that is evenly divisible by 100
// unless the year is also evenly divisible by 400
// For example, 1997 is not a leap year, but 1996 is. 1900 is not a leap year, but 2000 is.

const leapYear = (num) => {
  if(Number.isInteger(num/100) && !Number.isInteger(num/400)){
    return false;
  } else if(Number.isInteger(num/4)){
    return true;
  }
  
  return false;
}

// console.log(leapYear(200));

//For this solution we start by checking for the one instance in which a number divisible by four is not a leap year
//Next we check if the number is divisible by four. If it is, then we have ourselves a leap year! Otherwise, we return false.

//Algo 18: Fibonacci Numbers
// Write a function that gives the Nth number of the Fibonacci Sequence. 
// The Fibonacci sequence begins with 0 and 1, and every number thereafter is the sum of the previous two numbers. 
// So the sequence goes like this:
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, and so on until infinity...

const fibonacci = (num) => {
  if(num === 1) return 0;
  if(num === 2) return 1;

  let arr = [0, 1];
  let counter = 1
  
  for(let i = 2; i <= num; i++){
    counter = (arr[i-1] + arr[i-2]);
    arr.push(counter);
  }

  return counter;
}

// console.log(fibonacci(100))

//In this solution, we start by returning the first two numbers of the fibonacci sequence, if they are given as an argumetn.
//Next, we create an array which holds the first two numbers of the sequence. Then we create a counter, which begins ar the secong
//number of the sequence. Then we use a for loop to add the two previous fibonacci numbers together, until we have the correlating
//fibonacci number for the argument passed in. We tracke the fibonacci numbers by adding them to our array.

//Algo 19: Multiples of 3 & 5
//If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

const multiples = (num) => {
  let sum = 0;

  for(let i = 0; i < num; i++){
    if(Number.isInteger(i/3) || Number.isInteger(i/5)){
      sum += i
    }
  }

  return sum;
}

// console.log(multiples(100));

//For this solution we start by creating a variable that will hold the sum of all numbers that are divisble by either 3 or 5
//Next we use a for loop to check every number between 0 and the given number to see if it is divisible by 3 or 5
//If it is divisble then we add it to the sum variable, which we return at the end

//Algo 20: Collatz conjecture
//The Collatz Conjecture or 3x+1 problem can be summarized as follows:
// Take any positive integer n. If n is even, divide n by 2 to get n / 2. If n is odd, multiply n by 3 and add 1 to get 3n + 1. Repeat the process indefinitely. The conjecture states that no matter which number you start with, you will always reach 1 eventually.
// Given a number n, return the number of steps required to reach 1.


const collatzConjecture = (num) => {
  let steps = 0;

  do{
    if(num % 2 === 0){
      num = num / 2;
      steps++
    } else {
      num = num * 3 + 1;
      steps++
    }
  } while(num > 1);

  return steps;
}

// console.log(collatzConjecture(100))

//In this solution we start by creating a variable to keep track of the number of steps 
//Next we run a do/while loop and if a number is even we divide it by two and add 1 to steps
//If the number is odd we mulitply it by three and add one and increase steps.
// We keep repeating that until the num is 1 and then we return the number of steps

// Algo 21: Largest Palindrome Product
// A palindromic number reads the same both ways. 
// The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
// Find the largest palindrome made from the product of two 3-digit numbers.
const largestPalindrome = () => {

}

//Algo 22: Array Mesh 1
// Given two arrays of strings, return a new string that contains every combination 
// of a string from the first array concatenated with a string from the second array.

const arrayMesh = (arr1, arr2) => {
  let result = [];

  for(let i = 0; i < arr1.length; i++){
    for(let j = 0; j < arr2.length; j++){
      result.push(arr1[i] + arr2[j])
    }
  }

  return result;
}

// console.log(arrayMesh(["a", "b", "c"], ["d", "e", "f", "g"]));

//In this solution we start by creating an empty array which we will use to store every
//combination of string concatenation. Next we use a for loop to loop over each index of our 
//first given array. Inside that for loop we create another for loop to loop over every index
//of the second given array. In this second loop we push every combination of srtings to our result array.
//Finally, we return the result.

//Algo 23: Array Mesh 2
//Given ONE array of strings, return a new array that contains every combination of each string with every other string in the array.

const arrayMeshTwo = (arr) => {
  let result = [];

  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr.length; j++){
      if(arr[i] !== arr[j]){
        result.push(arr[i] + arr[j])
      }
    }
  }

  return result;
}

// console.log(arrayMeshTwo(["a", "b", "c", "d"]));

//Algo 24: Largest Profuct
//Find the largest product of any two numbers within a given array.

const largestProduct = (arr) => {
  let result = [];

  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr.length; j++){
      if(i < j){
        result.push(arr[i] * arr[j])
      }
    }
  }

  return result.reduce((prod, value) => {
    if(value > prod){
      prod = value;
    }
    return prod;
  });
}

// console.log(largestProduct([5, -2, 1, -9, -7, 2, 6]));

//In this solution we start by creating an array to hold all of the products.
//Next, we create a for loop to go over each number in the array. We run another for loop
//inside of the first loop. If the index[i] is less than the index[j] we multiply arr[i] * arr[j].
//This prevents us from multiplying numbers by themselves, and keeps us from duplicating product values
//in our result array. Next we use the reduce method on our result array. Our accumulator is going to
//be our largest product, which we return at the end. Using an if statement we compare the current value to the 
//product, and if it is greater we set the largest product equal to value.