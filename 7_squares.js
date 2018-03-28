// write some code that prints a square of asterisk with size N * N
// for example: square(5) should show a 5 by 5 square of asterisk
// you don't have to return anything, you can use console.log
/*

*****
*****
*****
*****
*****

*/


// write your code here

function square(number) {

  for (var i = 1; i <= number; i++) {

    console.log('*'.repeat(number));
  }


}

// do not change this code
var number = Math.floor(Math.random() * 11);
square(number);


// write some code that prints a square of asterisk with size N * N
// for example: square(5) should show a 5 by 5 square of asterisk
// you don't have to return anything, you can use console.log
/*

*****
*****
*****
*****
*****

*/


// write your code here

function square(number) {

  //for(var i = 1 ; i <= number ; i++){

  console.log(('*'.repeat(number) + '\n').repeat(number));
  //}


}

// do not change this code
var number = Math.floor(Math.random() * 11);
square(number);

// write some code that prints a square of asterisk with size N * N
// for example: square(5) should show a 5 by 5 square of asterisk
// you don't have to return anything, you can use console.log
/*

*****
*****
*****
*****
*****

*/


// write your code here

function square(number) {

  //for(var i = 1 ; i <= number ; i++){

  console.log('*'.repeat(number).concat('\n').repeat(number));
  //}


}

// do not change this code
var number = Math.floor(Math.random() * 11);
square(number);

// write some code that prints a square of asterisk with size N * N
// for example: square(5) should show a 5 by 5 square of asterisk
// you don't have to return anything, you can use console.log
/*

*****
*****
*****
*****
*****

*/


// write your code here

function square(number) {
  var result = '';
  for (var i = 1; i <= number; i++) {

    for (var j = 1; j <= number; j++) {
      result = result + '*'
    }
    result = result + '\n';

  }

  console.log(result);
}

// do not change this code
var number = Math.floor(Math.random() * 11);
square(number);
