// At a party a prize is awarded to the person with the longest name
// write a function that returns the person with the longest name


// write your code here

function longestName(names) {
  var longName = names[0];
  for (var i = 0; i < names.length; i++) {
    if (names[i] > longName) {
      longName = names[i];
    }
  }
  return longName;
}


// do not change this code
var names = ['Jen', 'Sebastiaan', 'Sebastiaan jr.', 'Jensha', 'Jen Jensha'];
console.log(longestName(names));
