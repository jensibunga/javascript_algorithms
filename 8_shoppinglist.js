// I made a shopping list but by accidentally ripped it in two
// can you put the items and numbers back together
// [1, 10, 3, 2] ["milk", "egg", "apples", "chocolat bars"]
// output should be:
// ["1 milk", "10 eggs", "3 apples", "2 chocolat bars"]



// write your code here:


function repairList(numbers, items) {
  var newArray = [];
  for (var i = 0; i < numbers; i++) {
    //console.log(numbers[i]);
    //console.log(items);
    newArray.push(numbers[i] + ' ' + items[i]);

  }
  return newArray;
}


// do not change this code:
var numbers = [1, 10, 3, 2];
var items = ["milk", "egg", "apples", "chocolat bars"];
console.log(repairList(numbers, items));