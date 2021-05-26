// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums.

const runningSum = (arr) => {
  let newArr = [arr[0]]
  for(let i = 1; i < arr.length; i++){
  newArr.push(newArr[i - 1] + arr[i]);
}
return newArr;
}

// console.log(runningSum([3,1,2,10,1]));

const ipDefang = (str) => {
  let ipArr = str.split('');
  for(let i =0; i < ipArr.length; i++){
    if(ipArr[i] === '.') {
      ipArr[i] = '[.]'
    }
  }
  return ipArr.join('');
}

// console.log(ipDefang("1.1.1.1"))

//Kids with the greatest number of candies
// Given the array candies and the integer extraCandies, where candies[i] represents the number of candies that the ith kid has.
// For each kid check if there is a way to distribute extraCandies among the kids such that he or she can have the greatest number of candies among them. Notice that multiple kids can have the greatest number of candies.

const candyKids = (candies, extraCandies) => {
  let highestNum = 0;
  let output = [];
  for(let el of candies){
    if(el > highestNum){
      highestNum = el;
    }
  }
  for(let el of candies){
    if(el + extraCandies >= highestNum){
      output.push(true)
    } else{
      output.push(false);
    }
  }
  return output;
}

console.log(candyKids([2,3,5,1,3], 3))