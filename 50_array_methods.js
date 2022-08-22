// Array includes

// array.includes(item)

// say you have an array containing some numbers and you would like to check if that array includes (contains) a certain number.  This means,
// that you want to go through every item of that array and check if a certain number exists.

// You can use the .includes(item) method which return a boolean.

let numbers = [1, 2, 4, 5]

numbers.includes(2) // true
numbers.includes(3) // false

// Notice how this method returns either true or false.

// It will retrn true when the item is found inside the array.
// numbers.inclues(2) returned true because one of the items of the numbers array is 2.

// the numbers.includes(3) returned false because there is no item in the numbers array that is 3.

// array.includes(item) allwos you to check whether the item exists inside the array.
// array.includes(item) returns a boolean.
// array.includes(item) returns true when the item is found insde the array.
// array.includes(item)return false when the item is NOT found inside the array.

function isTestTooEasy(grades) {
  return grades.includes(20)
}

console.log(isTestTooEasy([10, 15, 13, 19])) // should return false
console.log(isTestTooEasy([7, 13, 20, 15])) // should return true

//============================================================

// Array join

// Say you have an array of numbers and you would like to convert that array into a string.
// you want to convert [3, 1, 6] to the string: "3;1;6".  Here's how you can do it:

let numbers1 = [3, 1, 6]
let string = numbers1.join(';') // "3;1;6"

// The array.join(glue) method coverts the array into a string by gluing together the items with the glue that you provide.

// Another common expmale is converting an array into CSV format:

let numbers2 = [3, 1, 6]
let csv = numbers.join(', ') // '3, 1, 6'

// CSV stands for Comma Separted Values and is a popular format as it can be easily imported into Excel.

// without the space character, numbers.join(',') would end up converting the array into the following string: '3,1,6'.

//============================================================

// complete the funciton convertToString such that it returns a string from the grades array it receives.
function convertToString(grades) {
  return grades.join(' & ')
}

console.log(convertToString([10, 15, 13, 19])) // '10 & 15 & 13 & 19'
console.log(convertToString([7, 13, 20, 15])) // '7 & 13 & 20 & 15'
