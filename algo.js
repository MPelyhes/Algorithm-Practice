// Intermediate Algorithm Practice Problems from freeCodeCamp

//Sum All Numbers In a Range

/* We'll pass you an array of two numbers. Return the sum of those two numbers plus 
the sum of all the numbers between them. The lowest number will not always come first.
*/

function sumAll(arr) {
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  let result = 0;

  for(let i = min; i <= max; i++) {
    result += i;
  }
  return result;
}

// console.log(sumAll([1,4]));

// Diff Two Arrays

/* Compare two arrays and return a new array with any items found in one of the two 
given arrays, but not both. In other words, return the symmetric difference of the two arrays.
*/

function diffArray(arr1, arr2) {
  return arr1.concat(arr2).filter((item,_,arr) => arr.lastIndexOf(item) == arr.indexOf(item));
}

// console.log(diffArray([1,2,3,4], [2,4,6,8]));

// Seek & Destroy

/* You will be provided with an initial array (the first argument in the
destroyer function), followed by one or more arguments. Remove all
elements from the initial array that are of the same value as these
arguments. */


function destroyer(arr) {
  let args = Array.from(arguments).slice(1);
  return arr.filter((val) => {
    return !args.includes(val);
  });
}

// console.log(destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan"));


// Wherefore art thou

// Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

function whatIsInAName(collection, source) {
  // We create a variable for the source objects keys
  let srcKeys = Object.keys(source);

  // filter the collection
  return collection.filter((obj) => {
    for (let i = 0; i < srcKeys.length; i++) {
      if (!obj.hasOwnProperty(srcKeys[i]) ||
      obj[srcKeys[i]] !== source[srcKeys[i]]
      ) {
        return false;
      }
    }
    return true;
  })
}

  /* We filter through the collection array, and use a for loop to loop
  through each object in the array. We use an if statement to check if
  the object in the collection doesn't have the key and the property
  value doesn't match the value in source. We return false if the if
  statement is correct, otherwise, we return true.*/

// console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));

// Spinal Tap Case  

// Convert a string to spinal case. Spinal case is all lowercase words joined by dashes

function spinalCase(str) {
  //Split the string at the following conditions: whitespace is encountered, underscore is encoutered, or is followed by an uppercase letter. Join using hyphen. Lowercase the resulting string.

  return str.split(/\s|_|(?=[A-Z])/).join('-').toLowerCase(); 
}

// console.log(spinalCase("This is a sentence to test spinal case"));

// Pig Latin

/*Pig Latin is a way of altering English Words. The rules are as follows:
- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add "ay" to it.
- If a word begins with a vowel, just add "way" at the end.
Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase. */

function translatePigLatin(str) {
  let vowelRegex = /^[aeiou]/;
  let conRegex = /[aeiou]/;
  let index = str.search(conRegex);
  let conStart = str.substring(0,index);
  let vowelEnd = str.substring(index);

  if(vowelRegex.test(str)){
    return str.concat("way")
  } else {
    return vowelEnd + conStart + "ay";
  }
}

/* First, we create regexs to identify strings that start with a vowel,
 and to find the first vowel in a string. Then we create a variable 
 (index) that will store the index of a strings first vowel. Using the 
 substring method, we extract the consonants at the start of a string 
 and store it in a new variable (conStart). Similarly, we create a 
 variable to store the first vowel and all subsequent characters. We 
 then run the str through an if/else statement. If the str starts with a 
 vowel, we return the string and concat "way". Else, we take the
 vowelEnd characters and concat conStart and "ay". */

// console.log(translatePigLatin("mythical"));

// Search and Replace

/* Perform a search and replace on the sentence using the arguments provided and return the new sentence.
-First argument is the sentence to perform the search and replace on.
-Second argument is the word that you will be replacing (before).
-Third argument is what you will be replacing the second argument with (after).
-Note: Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"
*/

function myReplace(str, before, after) {
  
  const replaceRegex = new RegExp(`${before}`);
  const caseRegex = /^[A-Z]/;
  let upperAfter = after.charAt(0).toUpperCase() + after.slice(1);
  let lowerAfter = after.charAt(0).toLowerCase() + after.slice(1)

  if(caseRegex.test(before)) {
    return str.replace(replaceRegex, upperAfter);
  } else {
    after[0].toLowerCase();
    return str.replace(replaceRegex, lowerAfter);
  }
}

/*We start by creating two regular expressions. The first one is created
with a RegExp() constructor, so that the before argument can be
dynamically added. The secod regex checks for if a string starts with
an uppercase letter. We create two vars (upperAfter, lowerAfter) to
mutate the after argument. One changes the first character to
uppercase, the other to lowercase. We use slice() to grab every
character after the first one and concat it to the firs character.
Then we use an if statement to test if before starts with a
capital letter. If it does, we use the replaceRegex to search
the str and replace it with upperAfter. otherwise we replace it
with lowerAfter
*/
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));


