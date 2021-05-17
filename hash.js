//Simple hash functions

//Hash function that works on strings only
function hash(key, arrayLen){
  let total = 0;
  let WEIRD_PRIME = 31;
  for(let i=0; i < Math.min(key.length, 100); i++){
    // map "a" to 1, "b" to 2, "c" to 3, etc.
    let char = key[i];
    let value = char.charCodeAt(0) - 96;
    total = (total *WEIRD_PRIME + value) % arrayLen;
  }
  return total;
}