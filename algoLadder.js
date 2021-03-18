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