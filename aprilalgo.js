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