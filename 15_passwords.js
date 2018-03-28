// write a password validator function
// a password should have:
// 1. At least 2 capital letters
// 2. At least one character of the list: &^!%@$!*
// 3. At least 8 characters long
// 4. At least 2 numbers
// Your function should return true or false

// write your code here:





// do not change this code

console.log(passwordValid("16")); // false
console.log(passwordValid("aa&1aaaA")); // false
console.log(passwordValid("AAAAAAAA")); // false
console.log(passwordValid("1721771")); // false
console.log(passwordValid("&&&&&&&&&&")); // false
console.log(passwordValid("AB&56")); // false
console.log(passwordValid("15YHabq615a")); // true
