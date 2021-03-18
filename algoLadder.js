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