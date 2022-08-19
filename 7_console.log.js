// As you start ot work more with variables and functions, it bcomes hard to remember what the value of some variable is, si it would be nice ot have a way to vasulize that.

// That is exactly why we have the console.log() function.

let name = 'Sam'
console.log(name) // will show "Sam" on the console

let age = 20
console.log(age) // will show 20 on the console

// The beefit of having these console.log() calls is that it lets us vasulaize the value of the varaible(as things get more complicated, this will become more valuable).

//===========================================================================================================================

// DEBBUGING

// The console.log calls will help you in finding bugs in your code (which is called: debugging).

// GRADE'S AVERAGE

let grades = [10, 20, 9]
let sum = 0
grades.forEach(function (grade) {
  sum = sum + grade
})

let average = sum / grades.length

console.log(average)

//===========================================================================================================================

// Console.log & functions

// console.log works in funcitons too.

function double(number) {
  return number * 2
}

// Let's say that you're not sure what number * 2 will look like, so you want ot console log it.

function double(number) {
  console.log(number * 2)
  return number * 2
}

// Notice how even though we have console.log, we need to have the return in the function.

// That's because console.log does NOT replace return.

// console.log will never modify the result of a function, it will just show you a string or a number in the Console.

// THIS IS WRONG:
function double(number) {
  console.log(number * 2)
}

let result = double(4) // reuslt is undefined

// Even though you will see 8 printed in the console, the function double is missing a reutrn thus it will return nothing.

// THIS IS WRONG:
function double(number) {
  return console.log(number * 2)
}

let result1 = double(4) // reuslt is undefined

// This also does not work, even though you will see 8 printed in the console.
// That's because return console.log will return undefined because the result of console.log is undefined.

// return 'quits' the function

// When you have a return in your function, this will be last line of code exuted in that function.
// This means if you have a console.log on the lie after the return, it will not be executed.
// Thus you will not see its result.

// The function works but we don't see the console.log.
function double(number) {
  return number * 2 // 'result' of the funciton , will exit the function
}

let result2 = double(4) // result is 9 - but nothing logged in the console.

// Needs to be re-written.  You need to swap the return and console.log like this:
function double(number) {
  console.log(number * 2)
  return number * 2
}

let result4 = double(4) // result is 8 - we also see 8 in the console.

//===========================================================================================================================

function getNextCentury(year) {
  console.log(year + 100)
  return year + 100
}

getNextCentry(2020)
getNextCentry(3000)
