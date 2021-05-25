// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums.

let runningSum = (arr) => {
  for(let i = 1; i < arr.length; i++){
    arr[i] = arr[i - 1] + arr[i];
  }
  return arr;
}

console.log(runningSum([3,1,2,10,1]));