// JavaScript has an if keyword that can use to run some code conditionally.

let grade = 5
if (grade >= 10) {
  console.log('This is a passing grade')
}

//===========================================================================================================================
// When running this program, you will see This is a passing grade on the console.

// There's a couple of new things here:

// the if keyword which is followed by a condition ini between prentheses.
// the condition which is grade >= 10
// curly bracs {} containing the piece of the code that should be run conditionally ( this is called the body of the if)

// You see grade >= 10 is like a question.  It's a question you ask the computer.  In English you would think of it as the following question:  Is the grade more than or equal to 10?
// So in programming, the answer will be either true or false.  Which is a boolean.

// When the answer is true, the body of the if condition (everything between the crly braces after the if) will execute.

// Because grade >= 10 evaluates to true, then the console.log('This is a passing grade') will run.

// If we take anohter example where the condition evaluates to false:

let greade1 = 5

if (grade1 >= 10) {
  console.log('This is a passing grade')
}

// Then we will not see the This is a passing grade in the console because grade >= 10 evaluated to false, thus the whole code between the curly braces {} will be skipped.

//===========================================================================================================================

// if conditiona allow us to do branching in our code.

// Previously, your code would run top to bottom, and every line in your code was guaranteed to running.

let year = 2020
let nextDecade = year + 10
console.log(nextDecade)

// The code starts by running the first line which defines a varaible year.
// Then it would run the second line which defines the varailbe nextDecade.
// And finally, it would run the console.log(nextDecade) which would print 2030 to the console

// However with if conditions, some lines of code may be skipped, depending on the condition:

let age = 15
if (age >= 18) {
  console.log('You can vote')
}

console.log('End of program')

// The code is still from top to bottom, line by line, however not every single line will be executed.  Here's what happens:

// 1.  let age = 15 is executed
// 2.  Then the condition age >= 18 is evaluated.  It results in false.  Ths all the code in between the curly braces (which is { console.log('You can vote') }) will be skipped.
// 3.  console.log('End of program') is executed.

// Notice how we branch on the if condition, This means that the code inside the body of the if may or may not be executed depending on the codintion of the if.
