// Array forEach

let grades = [10, 18, 14, 15]

grades.forEach(function (grade) {
  console.log(grade)
})

// output on the console:
// 10
// 18
// 14
// 15

// array.forEach()
// The .forEach() method allows us to iterate over an array.

// What the forEach does is that it allows you to run a funciton for every item of an array.

// For example, if we write the following function:
function logGrade(grade) {
  console.log(grade)
}

// This is a function that seems to accept one grade and it will log it to the console.

// Now let's pass this function to the .forEach() method and see what's going to happen:

let grades1 = [14, 10, 18]

grades.forEach(function logGrade(grade) {
  console.log(grade)
})

// Now, this funciton logGrade will be called for every item in the array.
// This waht the .forEach() does.

// So for the above code, when JavaScript encourters grades.forEach(), it's going to do the following:

// 1. Take the first itme of the array, which is 14, and run the function logGrade while passing it the number 14.
// 2. Then it'll take the second item of the arry, which is 10, and run the function logGrade while passing it the number 10.
// 3. And the same for the last item of the array, which is 18.

// so the above code, translated into:

logGrade(14)
logGrade(10)
logGrade(18)

// The .forEach() mehtod allows us to iterate over an array
// The function that you pass to the .forEach() will get called for every item of the array.

//============================================================

// Callback

// When calling funcitons, we've been used to calling them with a number, a string or a boolean.
// For example: canVote(20).
// We passed to the canVote an argument which is 20 and that is a number

//You may have notice, that with the .forEach(), we passed a function

// We call this funciton a callback because this funciton is being called back automatically by the JavaScript.

// A callback function is afunction that is passed as an argument and that will be called by the programming lagnuage.

//============================================================

// Dropping the function name

// When writing the callback for the .forEach method, you can actually remove the function name completely, that's because this function won't be re-used anywhere else, it's meaningless to give it a name.

let grades2 = [14, 10, 18]

grades2.forEach(function logGrade(grade) {
  console.log(grade)
})

// can be re-written by dripping the function name:

let grades3 = [14, 10, 18]
grades.forEach(function (grade) {
  console.log(grade)
})

// We do recommend that you drop the function name.  When you drop the function name, it's often referred to as anonymous funciton, which is a funciton wiout a name.

// A callback function is a function that is passed as an argument and that will be called by the programming laguage.
// An anonymous function is a function without a name.
// When iterating voer an array, you have to stop thinking about the array and start thinking about one of the array items.
