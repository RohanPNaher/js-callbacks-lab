// Exercise 1

// A fellow student shows you this code.  When he runs it, he expects it to
// wait three seconds, then write "Ding!" to the console.  Instead, it writes
// "Ding!" immediately.  Find the bug and fix it.

let writeDing = function() {
  console.log('Ding!');
}

let timerId = setTimeout(writeDing, 3000);


// Exercise 2

// Javascript arrays have a built-in sort method that can take
// a callback to tell it how to compare the things you want to sort.

// Research the array sort method.

// Write the sorting callback as a named function declaration
let compareLength = function(wordA, wordB){
  return wordA.length - wordB.length
};
// Write the callback function to provide to the sort method so that
// the following code sorts the words from shortest to longest.

const words = ['short', 'medium', 'delicious', 'nice', 'lengthy'];

// The sort method sorts "in place", that is, it modifies the array
let wordClone = [...words]
let wordsSort = wordClone.sort(compareLength);
console.log(wordsSort)
// Check that logging words now outputs
// ["nice", "short", "medium", "lengthy", "delicious"]



// Exercise 3
//
// Filter the words array from above to create a new array
// named longWords that includes only the words with seven or more
// characters

const longerWords = words.filter(word => word.length > 6);
console.log(longerWords)
console.log(words)

// Check that logging longerWords outputs
// ["lengthy", "delicious"]



// Exercise 4

// Code a forEach method:
// 		1. Write a function named forEach.
//		2. The forEach function accepts two args, an array & a callback.
//		3. Code the forEach method to iterate over each element in the array arg (use a for loop).
//		4. For each iteration, invoke the callback arg, passing to it the element and the index of the element.

// Test with this array
const colors = ['red', 'green', 'blue', 'purple'];
// and this callback
function log(elem, idx) {
  console.log(`Index: ${idx} / Element Value: ${elem}`);
}

let forEach = (arg, callback) => {
  for (let i = 0; i < arg.length; i++) {
    callback(arg[i], i)
  }
};
console.log(forEach(colors, log))
// calling forEach(colors, log) should resulting in this output:
// Index: 0 / Element Value: red
// Index: 1 / Element Value: green
// Index: 2 / Element Value: blue
// Index: 3 / Element Value: purple