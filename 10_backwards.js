// The words in the message are written down backwards
// make a function that turns them in the right order and add spaces


// write your code here
function backwards(words) {
  var newWords = [];

  for (var i = words.length - 1; i >= 0; i--) {
    newWords.push(words[i]);
    //console.log(i);
  }
  return newWords.join(' ');

}




// do not change this code
var words = ['!', 'world', 'lovely', 'hello'];
console.log(backwards(words));
