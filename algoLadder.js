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

const revString = (str) => {
  let newString = "";
  
  for(let i = str.length; i >= 0; i--){
  
    newString += `${str.charAt(i)}`;
  }

  return newString;
}

// console.log(revString("flip me right round"))

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

const foundADupe = (str) => {
  for(let i = 0; i < str.length; i++){
    if(str.charAt(i) === str.charAt(i+1)){
      console.log(str.charAt([i]))
      console.log(str.charAt([i++]))
      return str[i]
    }
  }
}

// console.log(foundADupe("This here cool string is a test"))

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

const palSyndrome = (str) => {
  let pal = ""

  for(let i = str.length; i >= 0; i--){
    pal += str.charAt(i);
  }

  if(pal === str){
    return true
  }

  return false
}

console.log(palSyndrome("racecar"))

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

const fizzyBuzzer = (num) => {
  let result = []

  for(let i = 1; i <= num; i++){
    if(i % 3 === 0 && i % 5 === 0){
      result.push("FIZZBUZZ")
    } else if(i % 3 === 0){
      result.push("FIZZ")
    } else if(i % 5 === 0){
      result.push("BUZZ")
    } else{
      result.push(i)
    }
  }

  return result;
}
// console.log(fizzyBuzzer(100))

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

//Algo 25: Two Sum 1
//Given an array of numbers, return a new array containing just two numbers (from the original array)
// that add up to the number 10. If there are no two numbers that add up to 10, return false.
// Specifically use nested loops to solve this exercise even though there are other approaches as well.

const twoSumOne = (arr) => {
  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr.length; j++){
      if(i !== j && arr[i] + arr[j] === 10){
        return [arr[i], arr[j]]
      }
    }
  }
  return false;
}

// console.log(twoSumOne([2, 5, 3, 1, 0, 7, 11]));

//In this solution, we use a nested for loop to loop through an array. The first loop loops over
//each of the numbers in the given array. Each number is added to every other number in the second
//for loop. We prevent numbers being added to themselves using an if statement to compare the
//indexes. If the two numbers are equal to 10 we return the numbers in an array. If there are
//no numbers which add up to 10, we return false.

//Algo 26: Merge Sorted Arrays
//Given two sorted arrays, merge the second array into the first array while
// ensuring that the first array remains sorted. Do not use any built-in sort methods.

const mergeSorted = (arr1, arr2) => {
  for(let i = 0; i < arr2.length; i++){
    for(let j = 0; j < arr1.length; j++){
      if(arr2[i] > arr1[j] && arr2[i] < arr1[j+1]){
        arr1.splice((j + 1), 0, arr2[i])
      } else if(arr2[i] > arr1[arr1.length - 1]){
        arr1.push(arr2[i])
      } else if(arr2[i] < arr1[0]){
        arr1.unshift(arr2[i])
      }
    }
  }
  return arr1;
}

// console.log(mergeSorted([2, 5, 8], [1, 6, 9]))

//In this solution, we use a nested for loop to loop through the two arrays. The outer
//for loop is for the second array, whose values will be added to the first array. In
//the second for loop we are looping over the first array. Using if statements we compare our
//current arr2 value to the current arr1 value. If the arr2 value is greater than the current arr1
//value and less than the next arr1 value we know that's where we need to insert the arr2
//value. We can use the splice method to insert the arr2 value at the index currently occupied
//by the value that is greater than it. If the arr2 value is greater than all arr1 values
//we can simply push it to the end of arr1. If the arr2 value is less than all arr1 values
//we can simply unshift it to the end arr1.

//Algo 27: 100 Coolio Array
//Given an array of numbers, return true if the array is a "100 Coolio Array", or false if it is not.
// A "100 Coolio Array" meets the following criteria:
// Its first and last numbers add up to 100,
// Its second and second-to-last numbers add up to 100,
// Its third and third-to-last numbers add up to 100,
// and so on and so forth.

const coolio = (arr) => {
  let length = arr.length;
  let arr1 = arr.slice(0, (length / 2))
  let arr2 = arr.slice(length/2).reverse();

  for(let i = 0; i < arr1.length; i++){
    if(arr1[i] + arr2[i] !== 100){
      return false;
    }
  }

  return true;
}

// console.log(coolio([90, 20, 70, 100, 30, 80, 10]))
//In this solution we start by splitting the given array in half using the slice
//method. We reverse the second half of the array to make it easier to loop over
//and add the numbers together at the corresponding index. Using a for loop, we
//add the arr1 and arr2 values at the same index together. If they do not equal
//100 then we return false. Otherwise, at the end of the function, we return true.

//Algo 28: Longest Common Prefix
// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

// const largestCommonPrefix = (arr) => {
//   let longestStr = arr.reduce((str, value) => {
//     if(value.length > str.length){
//       str = value;
//     }
//     return str;
//   })

//   for(let i = 0; i < longestStr.length; i++){

//   }

//   return longestLength.length;
// }

// console.log(largestCommonPrefix(["flower","flow","flight"]))

//Algo 29: Most Frequent Letter
//Given a string, find the most commonly occurring letter.
// Input: “peter piper picked a peck of pickled peppers”
// Output: “p”

const letterFrequency = (str) => {
  let letters = {};
  let modStr = str.split(' ').join('');

  for(let i = 0; i < modStr.length; i++){
    if(!letters.hasOwnProperty(modStr.charAt(i))){
      letters[modStr[i]] = 1;
    } else {
      letters[modStr[i]] += 1;
    }
  }
  
  let counter = 0;
  let result = "";
  for(let key in letters){
    if(letters[key] > counter){
      counter = letters[key];
      result = key;
    }
  }
  return result;
}

// console.log(letterFrequency('peter piper picked a peck of pickled peppers'))

//In this solution we start by creating an empty object which we will use to store
//the different letters as the keys and the number of occurences as the value.
//We then modify the string to remove the spaces. Next, we use a for loop to iterate over
//each letter in the string. If our letters obj does not have a property of the current character
//we add the character as a key with the value of 1. If it already has the character as a key,
//we add 1 to the value. Next, we create a counter and results variable which will track the
//character that has the highest number of occurenses. We check the number of occurences using
//a for in loop. If the number of occuences is higher than the counter variable we update the counter
//and the result variable. In the end we return result.

//Algo 30: Count Votes
//Given an array of strings, return a hash that provides of a count of how many times each string occurs.
const countVotes = (arr) => {
  let votes = {};

  for(let i = 0; i < arr.length; i++){
    if(!votes.hasOwnProperty(arr[i])){
      votes[arr[i]] = 1;
    } else{
      votes[arr[i]] += 1;
    }
  }

  return votes;
}

// console.log(countVotes(["Dewey", "Truman", "Dewey", "Dewey", "Truman", "Truman", "Dewey", "Truman", "Truman", "Dewey", "Dewey"]))

//In this solution, we start by creating an empty object. Then we loop over the given array.
//If our object does not have a property that corresponds to the given array, we add it to
//the object with an initial value of 1. If it does have that property then we add one
//to the value. Finally, we return the object.

//Algo 31: Order the whole menu
// Given a hash, where the keys are strings representing food items, 
// and the values are numbers representing the price of each food, 
// return the amount someone would pay if they'd order one of each food from the entire menu.

const orderUp = (obj) =>{
  let totalPrice = 0;

  for(let key in obj){
    totalPrice += obj[key];
  }

  return totalPrice;
}

// console.log(orderUp( {"hot dog": 2, "hamburger": 3, "steak sandwich": 5, "fries": 3, "cole slaw": 1, "soda": 2}))

//In this solution we start by creating a totalPrice variable which will store the total price
//of purchasing every menu item. Next, we use a for in loop to add the value of each key/vaule
//pair to the totalPrice variable. Finally we return the totalPrice.

//Algo 32: RNA Transcription 
// Given a DNA strand, return its RNA complement (per RNA transcription).
// Both DNA and RNA strands are a sequence of nucleotides. 
// Here we're representing the sequences with single-letter characters (e.g. a sample strand may look like: "AGCA".)
// Given a string representing a DNA strand, provide its transcribed RNA strand, according to the following pattern:
// G becomes C
// C becomes G
// T becomes A
// A becomes U

const rnaTranscription = (str) => {
  const dnaToRna = {
    'G': 'C',
    'C': 'G',
    'T': 'A',
    'A': 'U'
  }

  let rna = [];

  for(let i = 0; i < str.length; i++){
    rna.push(dnaToRna[str[i]]);
  }

  return rna.join('');
}

// console.log(rnaTranscription('ACGTGGTCTTAA'))

//In this solution we start by creating a hash that has the DNA sequence as the key
//with the complementary RNA sequence as the value. We create an empty array, in which
//we will store the RNA strand that corresponds to the given DNA. We use a for loop
//to loop over the DNA strand. We push the value of the key in our object that corresponds
//to current DNA character. Finally, we join the array and return the resulting string.

//Algo 33: Popular Posts
// Given an array of hashes that represent a list of social media posts, 
// return a new array that only contains the posts that have at least 1000 likes.

const popularPosts = (arr) => {
  let topPosts = [];

  for(let post of arr){
    for(let likes in post){
      if(post.hasOwnProperty(likes) && post[likes] >= 1000){
        topPosts.push(post)
      }
    }
  }
  return topPosts;
}

// console.log(popularPosts([
//   {title: 'Me Eating Pizza', submitted_by: "Joelle P.", likes: 1549},
//   {title: 'i never knew how cool i was until now', submitted_by: "Lyndon Johnson", likes: 3},
//   {title: 'best selfie evar!!!', submitted_by: "Patti Q.", likes: 1092},
//   {title: 'Mondays are the worst', submitted_by: "Aunty Em", likes: 644}
//   ]));

 //In this solution we start by creating an empty array, which will hold the most
 //popular posts. Next we use a for/of loop to loop over each obj in the given
 //array. Inside that we use a for/in loop to loop over the properties of the
 //obj. If the object has a property called likes and likes are greater than or equal to 1000
 //then we push that post into our topPosts array. Finally we return the topPosts array.

 //Algo 34: Complete the Data 
//  Given an array of social media posts and a hash of users, return a list of posts 
//  (as an array of hashes) that replaces the submitted_by id number as the person's actual name.

const completeData = (arr, obj) => {
  for(let post of arr){
    for(let key in post){
      for(let id in obj){
        if(post[key] === id){
          post[key] = obj[id]
        }
      }
    }
  }
  return arr;
}

// console.log(completeData([
//   {title: 'Me Eating Pizza', submitted_by: '231', likes: 1549},
//   {title: 'i never knew how cool i was until now', submitted_by: '989', likes: 3},
//   {title: 'best selfie evar!!!', submitted_by: '111', likes: 1092},
//   {title: 'Mondays are the worst', submitted_by: '403', likes: 644}
//   ], {'403': "Aunty Em", '231': "Joelle P.", '989': "Lyndon Johnson", '111': "Patti Q."}))

//In this solution, we start with a for/of loop to iterate over each object
//that is contained in the given array. Then we use a for/in loop to iterate
//over the keys of each post object. Next we use a for/in loop to iterate over the 
//keys in the passed object. If the value of the post object is identical to the
//key of the passed object we change the value of the post object to be equal to
//the value of the passed objects key. Finally we return the array with modified objects.

//Algo 35: Anagrams
//Given two strings, return true if they are anagrams of each other, and false if they are not.
//An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.
//Do not use any built-in sort methods.

const anagrams = (str1, str2) =>{
  if(str1.length !== str2.length){
    return false;
  }

  let obj1 = {};
  let obj2 = {};

  for(let i = 0; i < str1.length; i++){
    if(!obj1.hasOwnProperty(str1[i])){
      obj1[str1[i]] = 1;
    } else {
      obj1[str1[i]] += 1;
    }
}

  for(let i = 0; i < str2.length; i++){
    if(!obj2.hasOwnProperty(str2[i])){
      obj2[str2[i]] = 1;
    } else {
      obj2[str2[i]] += 1;
    }
  }

  for(let char in obj1){
    if(!obj2.hasOwnProperty(char)){
      
      return false;
    } else if(obj1[char] !== obj2[char]){
      return false
    }
  }
  return true;
}

// console.log(anagrams('tommarvoloriddle', 'iamlordvoldemort'));
//In this solution we start by returning false if the strings are not of equal length. 
//Then we create two empty objects to store the letters
//in the two passed strings as the keys, with the number of occurrences as the values.
//Since we are solving without using sort methods, we start by creating two for loops that will 
//loop over their respective strings and add their letters to their respective objects, or add 1 to the
//value if the letter is already in the object. Next we use a for/in loop on each of the
//objects that we have created. We compare the keys and the values of the first object to the second object
//and vice versa. 

// Algo 36: ETL #1
//You are given two parameters, an array and a number. 
// Return a hash whose keys are each of the values from the array parameter, 
// and whose values are the number parameter.

const createObj = (arr, num) => {
  let newObj = {};

  for(let char of arr){
    newObj[char] = num;
  }

  return newObj;
}

// console.log(createObj(["a", "e", "i", "o", "u"], 1))
//In this solution we start by creating an empty object. 
//Next we use a for/of loop to loop over each of the characters in the given array.
//We add each character to the object with a value of the number param.
//Finally, we return the new object

//Algo 37: Flatten Hash
//Given a hash, return a flat array containing all the hash’s keys and values.
 
const flattenHash = (obj) => {
  let hashArr = [];

  for(let key in obj){
    hashArr.push(key, obj[key]);
  }

  return hashArr;
};

// console.log(flattenHash( {'a': 1, 'b': 2, 'c': 3, 'd': 4}))
//In this solution we start by creating an empty array which we will us
// to store the various key/value pairs in the passed obj. Next we use a
//for/in loop to iterate over the object and psuh the key and the value to
//our hashArr. Finally, we return the hashArr.

//Algo 38: Flip Hash
//Given a hash, create a new hash that has the keys and values switched.

const flipHash = (obj) => {
  let flippedHash = {};

  for(let key in obj){
    flippedHash[obj[key]] = key;
  }

  return flippedHash;
}

// console.log(flipHash({'a': 1, 'b': 2, 'c': 3, 'd': 4}))
//In this solution we start by creating an empty object which
//will store the flipped key/value pairs. Next we use a for/in loop 
//to set a key using the passed objects value, with the passed objects
//key set as the value. We return the flippedHash. 

//Algo 39: ETL # 2
//You are given a hash in format #A, and you are to return the same data as a hash using format #B, as specified below:
// Input:
// {1: ["A", "E", "I", "O", "U"]}
// Output:
// {'a'; 1, 'e': 1,'i': 1,'o': 1,'u': 1}

const etl2 = (obj) => {
  let newObj = {};
  
  for(let key in obj){
    for(let value of obj[key]){
      newObj[value.toLowerCase()] = key;
    }
  }

  return newObj;
}

  // console.log(etl2({'1': ["A", "E", "I", "O", "U"]}))
  //In this solution we start by creating an empty object in which we will store
  //our reformatted data.Next, use a for/in loop to iterate over the keys in the given
  //object. Inside that we use a for/of loop to iterate over the array value.
  //We turn the current letter into a lowercase letter and set it as a key on 
  //our newObj with a value of the key of the original obj. Finally,
  //we return the newObj.

  //Algo 40: Complete the Data 2
  // Given an array of social media posts and an array of users, 
  // return a list of posts (as an array of hashes) that replaces 
  // the submitted_by id number as the person's actual name.

  const completeDataTwo = (arr1, arr2) => {
    for(let post of arr1){
      for(let key in post){
        for(let user of arr2){
          for(let id in user){
            if(post[key] === user[id]){
              const propNames = Object.getOwnPropertyNames(user);
              post[key] = user[propNames[1]]
              // console.log(post[key]);
            }
          }
        }
      }
    }
    return arr1;
  }

  // console.log(completeDataTwo([
  //   {title: 'Me Eating Pizza', submitted_by: 231, likes: 1549},
  //   {title: 'i never knew how cool i was until now', submitted_by: 989, likes: 3},
  //   {title: 'best selfie evar!!!', submitted_by: 111, likes: 1092},
  //   {title: 'Mondays are the worst', submitted_by: 403, likes: 644}
  //   ], [
  //     {user_id: 403, name: "Aunty Em"},
  //     {user_id: 231, name: "Joelle P."},
  //     {user_id: 989, name: "Lyndon Johnson"},
  //     {user_id: 111, name: "Patti Q."},
  //     ]))

  //In this solution we start with a for/of loop to iterate over the array of post objects.
  //Then we use a for/in loop to iterate over the keys in each post object. Next, we use a
  //for/of loop to iterate over the array of user objects. Then we use a for/in loop to
  //iterate over the keys in the user objects. IF the post value matches one of the user
  //values, we know we have found the user who made the post. So, we create a variable
  //that will hold an array of property names for the user object, which we get by using
  //the getOwnPropertyNames method. We know that the name property is second, so we will be 
  //able to access it at the first index of propNames. We then change the current post[key] 
  //value to be equal to the user[name] value. (We access the name prop in the propNames arr).
  //Finally, we return the posts array with the modified post objects.

  //Algo 41: Book Organizer
  
  const bookOrganizer = (arr) => {
    let newOrder = [];

    for(let book of arr){
      const propName = Object.getOwnPropertyNames(book)
    }
  }