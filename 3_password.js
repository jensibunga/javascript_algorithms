// make a function that turns a given string to N asterisk (*)
// for example: "mypassword" is 10 length so show 10 asterisk "**********"

// write your code here

function hiddenPassword(password) {

  return '*'.repeat(password.length);
}



// do not change this code:
var examples = ["a", "ah1A", "81an1", "Aj108ah2na", "8A", "janx9a"];
var password = examples[Math.floor(Math.random() * examples.length)];
console.log(password);
console.log(hiddenPassword(password));