// write some code that changes the given shoppinglist to an array
// "  milk, egg,    banana,cheese" to ["milk", "egg", "banana", "cheese"]
// remove any whitespace

function makeShoppingList(items) {
  return items.split(' ').join('').split(',');
}



// do not change this code
var items = "  milk, egg,    banana,cheese";
console.log(makeShoppingList(items));