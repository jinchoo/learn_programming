// .length property on arrays which retrns the number of items in that array.

let numbers = [10, 30, 10, 40, 10]
let array = [3, 1, 4]

numbers.length // 5
array.length // 3

// Notice how calling the array name followed by .length returns the number of items in that array.
// The .length is a prperty, meaning that it's a value that has already been computed.  It's NOT a funciton which is why you should not put the () afterward.

let temperatures = [-5, 12, 15, 18, 13]
let count = temperatures.length // 5

//Last item

//Get count
// Complete the funciton getCount such that it returns the number of items in the array it receives as a first parameter.

function getCount(items) {
  return items.length
}

//How many items?
// Complete the funciton getMessage such that it returns the following string:
// You have X items where X is the number of items in the items parameter.

function getMessage(items1) {
  return 'You have ' + items1.length + ' items'
}

console.log(getMessage([-5, 12, 15])) // You have 3 items
console.log(getMessage([13, 10])) // You have 2 items
console.log(getMessage([])) // You have 0 items

// The number of items - 1 can be written as the following expression, assuming a variable called  items: items.length -1.
// You can then take that epxression and pit it in between square brackests to read the last item:

let myItems = [10, 20, 30]
myItems[myItems.length - 1] // 30 (last item)

// To better understand this, let's berak it down step by step:
// 1. We define an arry items and assign it to an array containing 3 items.
// 2. the last item is at position 2 because the array index is 0-based
// 3. items.length - 1 is the expression that will always give us the poistion of the last items
// 4. items[items.length -1] allows us to read the last item because the expression items.length -1 gets evaluated and retrns 2.
// 5. The last item is at position 2 in the array.

// Another example

let numbers1 = [10, 30, 20, 40, 30]
let lastItem = numbers1[numbers1.length - 1] // 30

// numbers1.length is 5
// numbers1.length -1 evaluates to 4 (the position of the last item)
// numbers1[numbers1.length -1} returns the last item of the numbers array which is 30.

function getLastTemperatureMessage(temperatures) {
  return `The last temperature is at position ${temperatures.length - 1}`
}
