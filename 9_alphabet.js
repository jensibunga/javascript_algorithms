// write a function that returns the Nth letter from the alphabet
// examples:
//  1 => a
//  2 => b
// 26 => z

// write your code here:


function letterForNumber(number) {

  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];


  return alphabet[number - 1];

}



// do not touch this code
var number = Math.floor(Math.random() * 26) + 1;
console.log(letterForNumber(26));
