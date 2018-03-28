// make a function that will print "ODD" or "EVEN"
// depending if the given number is even or odd

// write your code here

function oddOrEven(number) {
  if (number % 2 === 0) {
    return 'EVEN';
  } else {
    return 'ODD';
  }
}


var number = Math.floor(Math.random() * 11);
console.log('number: ' + number);
console.log(oddOrEven(number));