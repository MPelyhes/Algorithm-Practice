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

class HashTable {
  constructor(size=53){
    this.keyMap = new Array(size);
  }
  _hash(key){
    let total = 0;
    let WEIRD_PRIME = 31;
    for(let i = 0; i < Math.min(key.length, 100); i++){
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }
  set(key, value){
    const index = this._hash(key);
    if(!this.keyMap[index]){
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }
  get(key){
    const index = this._hash(key);
    if(this.keyMap[index]){
      for(let i = 0; i < this.keyMap[index].length; i++){
        if(this.keyMap[index][i][0] === key){
          return this.keyMap[index][i][1];
        }
      }
    }
    return undefined;
  }
  keys(){
    let keys = [];
    for(let i = 0; i < this.keyMap.length; i++){
      if(this.keyMap[i]){
        for(let el of this.keyMap[i]){
          keys.push(el[0])
        }
      }
    }
    return keys;
  }
  values(){
    let values = [];
    for(let i = 0; i < this.keyMap.length; i++){
      if(this.keyMap[i]){
        for(let el of this.keyMap[i]){
          if(!values.includes(el[1]))
          values.push(el[1])
        }
      }
    }
    return values;
  }
} 