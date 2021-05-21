//start with a problem that can be solved with dynamic programming and use recursion to solve
//then refactor it to use dynamic programming principles

//Fibonacci sequence
const fibonacci = (num) => {
  if(num < 3) return 1;
  let twoBack = 1;
  let oneBack = 1;
  let sum = 0;

  const fibIt = (start) => {
    sum = (twoBack + oneBack);
    if(start === num) return sum;
    twoBack = oneBack;
    oneBack = sum;
    fibIt(start+1);
  }
  fibIt(2);
  return sum;
}

//Shorter recursive fibonacci (Not as efficient, though)
const fibShort = (num)  => {
  if(num < 2) return 1;
  return fibShort(num -1) + fibShort(num-2);
}

//recursive fibonacci function that takes advantage of memoization
const fibMemo = (n, memo=[]) => {
  console.log("here")
  if(memo[n] !== undefined) return memo[n];
  if(n <= 2) return 1;
  let res = fibMemo(n-1, memo) + fibMemo(n-2, memo);
  memo[n] = res;
  return res;
}

console.log(fibShort(10))
console.log(fibonacci(10))
console.log(fibMemo(10));