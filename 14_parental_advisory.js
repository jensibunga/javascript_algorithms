// Someone made subtitles for a new movie but to make it viewable by children the bad words have to be removed
// make a function that removes the bad words and replaces them with ** characters
// make sure you use the same amount of * as the letters of the word.


// write your code here


function parentalAdvisory(subtitles, badWords) {
  //console.log(badWords[i]);
  var subtitlesArray = subtitles.split(' ');
  for (var i = 0; i < subtitlesArray.length; i++) {
    for (var j = 0; j < badWords.length; j++) {
      if (badWords[j] === subtitlesArray[i]) {
        subtitlesArray[i] = '*'.repeat(badWords.length);
      }

    }
  }
  return subtitlesArray;

}




// do not change this code
var badWords = ["fudge", 'sugar', 'snickerdoodle', 'fiddlesticks', 'darn', 'dangit', 'yuck']
var subtitles = "The snickerdoodle got some sugar and dagnit darn it the fudge was fudging broken as yuck!";
console.log(parentalAdvisory(subtitles, badWords));