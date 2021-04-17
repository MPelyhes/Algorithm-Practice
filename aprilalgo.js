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

console.log(persistence(999))

//We start by defining the function so that it accepts two parameters, the current/given number and the counter
//which has a default value of zero. If the number is less than 10 we return the counter. Then we turn the number
//into a string so that we can split it into an array. We create a newNum variable which will store and update
//the product of each digit multiplied by the next.  It's initial value is the first digit in the array.
// Next, we use a for loop to set the newNum to be the multiple of newNum by the current digit in the array.
//Finally, we call our function and pass it the newNum and the counter. The process will continue until we 
//have a number that is less than 10. Yay recursion!!!