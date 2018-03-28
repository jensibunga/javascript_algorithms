// try to make a function that shows the following on the console.log
// it should write N rows and increase each row of asterisk by 1 starting at 1 up to N
/*

*
**
***
****
*****
******
*******
********

*/

// write your code here

function slide(n) {
  var x = '';
  for (var i = 1; i <= n; i++) {
    x = x + '*'.repeat(i) + '\n';


  }
  return x;
}






// do not change this code
var n = Math.floor(Math.random() * 20) + 1
console.log(slide(n));
