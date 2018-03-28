// You are making a website for people with bad eyesight.
// to make it easier to read their name change it like this
// "Sebastiaan" => "S.E.B.A.S.T.I.A.A.N"


// write your code here
function readable(name) {
  return name.split('').join('.').toUpperCase();
}


// do not change this code
var name = "Sibunga";
console.log(readable(name));