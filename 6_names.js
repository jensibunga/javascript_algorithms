// write a function that glues a person's names together
// it should return the fullname of the person
// for example: ["sebastiaan", "de", "geus"] becomes "sebastiaan de geus"


// write your code here
function makeFullName(names) {
  return names.join(' ');
}



// do not change this code
var names = ["jen", "jensha", "veneracion", "sibunga"];
console.log(makeFullName(names));