// write a function that turns an array into a multiline string
// for example: ["egg", "bacon", "milk", "cheese"] should print as:
/* output starts here:
egg
bacbon
milk
*/
// you must return a value, not use console.log

// write your code here
function multilinePrint(items) {

  return items.join('\n');
}




// do not touch this code
var items = ["egg", "bacon", "milk", "cheese"];
console.log(multilinePrint(items));
