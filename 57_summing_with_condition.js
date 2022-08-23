// let's say we've got the follwing grades:

let grades = [12, 8, 13, 9, 15]

// And that we'd like to calculate the sum of all the numbers that are above or equal to 10.
// That would be 12 = 13 = 15(we skip the nubmers 8 and 9 because they are below 10).
// How would we write the code for it?

// This requires an if condition because we will need to compare every single grade to the number 10.  So we will have the follwoing condition: grade >= 10.

// So we need to take following code and make some modificaitons to it and add the if condition:

let sum = 0
grades.forEach(function (grade) {
  sum = sum + grade
})

let sum1 = 0
grades.forEach(function (grade) {
  if (grade >= 10) {
    sum1 = sum1 + grade
  }
})

// Notice how the if condition is inside the callback for the .forEach().  That's because the if condition has to run for every item in the array.

// A common mistake is write if(grades >= 10) but that doesn't work.  Because grades is an array and you cannot compare an entire array to a number.
// You have to compare every number, one by one.  Thus why theif condition has to be inside the .forEach() callback.

//===========================================================================================================================

// Breaking up challenges

// First, I'd start by understainding that there are multiple small challenges to be solved here:
// 1. Calculate the sum of numbers
// 2. Finding a way to caluclate the sum of only specifc numbers (thoses that are above 10)

// This is why I would start by calculating the sum of all numbers.  Once I've got his working, I will move on to fixing my code such that it only sums thate numbers that are above 10.

// By doing this, it allows you to slove more complicated challengies by breaking down into smaller pieces.

//===========================================================================================================================
// Sum grades above 10

// Complete the function sumGradesAbove10 such that it returns the sum of all the grades that are 10 or above.

function sumGradesAbove10(grades) {
  let sum = 0
  grades.forEach(function (grade) {
    if (grade >= 10) {
      sum = sum + grade
    }
  })
  return sum
}
