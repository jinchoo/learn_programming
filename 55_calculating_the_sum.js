// The hidden step

// Before we add the first item, the sum was 0.

// So once we're going to write the code that sums an array, we need to tell the programming language that we want to have a variable that will hold the sum.
// But then, we need to give it a certain value.  What would that be?0?1?

// Because it's a sum, we start at 0.

// So coming back to this array: [10, 5, 10].

// 1. We start by saying the sum is 0.
// 2. Then we add the first item, which is 10, so Far the sum is 10.
// 3. Then we add the second item, which is 5.  So far the sum is 15.
// 4. Then we add the third item, which is 10.  So far the sum is 25. The final sum is 25.

// Summing without iteration

let grades = [10, 18, 14, 15]

//define a variable that will hold the sum
let sum = 0

// sum every item in the grades array
sum = sum + grades[0] // sum is 10
sum = sum + grades[1] // sum is 28
sum = sum + grades[2] // sum is 42
sum = sum + grades[3] // sum is 57

// As you can see, eventually we'll use array iteration to get rid of the duplicaiton in the code and make our code more flexible regardless of the number of grades.

sum = sum + grades[0]

// How can the same varaible sum be on the left side the = sign and also on the right side?

// The answer is simple.  Here's how you should read it:
// the new value of sum is going to equal: the old value of sum + grades[0];

// so sum = means that we want to assing a new value to sum.  While you're making that calculation, you can use the old(or current) value of sum.

// so, check out the same code but with comments representing what the old value of sum is:

let grades1 = [10, 18, 14, 15]

// define a variable that will hold the sum
let sum1 = 0

// sum every item in the grades array
sum1 = sum1 + grades[0] // sum = 0 + grades[0]
sum1 = sum1 + grades[1] // sum = 10 + grades[1]
sum1 = sum1 + grades[2] // sum = 18 + grades[2]
sum1 = sum1 + grades[3] // sum = 42 + grades[3]

// notice how usm on the right side of the = sign, represents the old(or current) value of the sum.

// Whenever we calculate the sum, we need to initiate a variable let sum = 0;
// 0 is the default value when calcualting the sum.  Think of it as an empty sum is 0 (or sum of nothing 0)
// The same variable can be used on the left side and right side of the = sign.
// In the case of sum = sum + 10, it means that the new value of sum is = the old value of sum + 10.

//===========================================================================================================================

// Sum with array iteration

// To make our sum code work for arrays of any size, for example, 0 items or 100+ items, we need to use array iteration.

// That's why we replace the sum = sum + grade[0], and sum = sum + grades[1], etc.
// with: sum = sum + grade
// This code goes inside the function(grade) {...} which is the callback that the .forEach receives:

let grades2 = [10, 18, 14, 15]

let sum2 = 0
grades2.forEach(function (grade2) {
  sum2 = sum2 + grade2
})
console.log(sum2) // 57

// Remember how grade2 represents every item in the array, one by one.  Which is why we are able to write: sum = sum + grade2.

// This line of code will run for every single item in the array. One by one.

//===========================================================================================================================

// Parameter Scope

// It's importnat to note that the grade parameter is only available inside funciton(grade){
//....} but not outside!

let grades3 = [10, 18, 14, 15]

let sum3 = 0
// grade3 is NOT defined here
grades3.forEach(function (grade3) {
  // grade is defined here
  summ3 = sum3 + grade3
  // grade is defined here
})
// grade is NOT defined here
console.log(sum3) // 57

// That's because the parameter grade is part of the function(grade {...} which means it is only available inside of that funciton but not outside.

//===========================================================================================================================

// What happens when grades = []

// What would happen if the grades is an empty array?

let grades4 = []

let sum4 = 0
grades4.forEach(function (grade4) {
  sum = sum + grade4
})
console.log(sum4) // 0

// The code deosn't break and the value of sum will be 0 which is great!
// That's because the function we passed .forEach() won't run at all, because there are no items in the grades array.

// This is also why we define let sum = 0; it's not only the default value but it's also the sum in case there are no items in the array.

//===========================================================================================================================

// Common mistake

// A common mistakes is placing let sum = 0 inside the function(grade) { ... } however, that will end up breaking your sum calculation because you are resetting the sum back to 0 for every item in the array.

// So make sure that you define the let sum = 0 before the .forEach().

//===========================================================================================================================

// Wrapping it in a function

// A function calculateSum(array) that takes an array of numbers and returns the sum of items in the array.

// This will alow us to reuse our code with different arrays:

function calculateSum(items) {
  let sum = 0
  items.forEach(function (item) {
    sum = sum + item
  })
  return sum
}

calculateSum([10, 20, 30]) // 60
calculateSum([5, 2]) // 7
calulateSum([]) // 0

// Notice how we are able to reuse our logic with any array of numbers and we'll get back the sum.

// In terms of the code, you can see it's exactly the same as before, we just had to add a return sum at the end of the function calculateSum() so that we return the result of that function.

//===========================================================================================================================

// Calculate total

// Complete the calculateTotal function such that it calculates the sum of the items of the numbers array it recieives as a parameter.

function calculateTotal(numbers) {
  let sum = 0
  numbers.forEAch(function (number) {
    sum = sum + number
  })
  return sum
}

console.log(calculateTotal([10, 20, 30])) // 60
console.log(calculateTotal([5, 2])) // 7
console.log(calculateTotal([])) // 0

// The sum = sum + grade piece of cide can be re-written as: sum += grade.

// the += operator means that it will take the old value and add to it.

// Here's the formula to caculate the average: average = sum / count.

// Classroom app

// 1. the sum of all grades
// 2. the average grade in the classroom

function getSumOfGrades(grades) {
  let sum = 0
  grades.forEach(function (grade) {
    sum = sum + grade
  })
  return sum
}

function getAverageGrade(grades) {
  let sum = 0
  grades.forEach(function (grade) {
    sum = sum + grade
  })
  return sum / grades.length
}
