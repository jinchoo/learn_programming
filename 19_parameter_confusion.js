// PARAMETER CONFUSION

// There is a very common confusion to a specific case when it comes to parameters.  So let's break it down.
// Let's take the followig example where we have a funciton double:

function double(number) {
  return number * 2
}

// The function double receives a number parameter and will return its double (times 2).

// Here's how you can use such function:

double(10) // return 20
double(30) // return 60

// You can also create avariable and then pass it to the double function, for example:

function double(number) {
  return number * 2
}

// create a variable grade
let grade = 10

// then pass it to double()
double(grade) // returns 20 (because grade is 10)

// So What's going on here?

// 1.  When you call double(grade), JavaScript will get the value of the grade variable.
// 2.  the value of grade is 10 (it was defined on the line above).
// 3.  then it will call the funciton double and give its number parameter the value 10
// 4.  Which will reutrn number * 2 which is 20.

//===========================================================================================================================

// grade vs. number

// The varaible grade has given the value 10 to the variable number, because number is a parameter.
// However, this does NOT mean that the value of grade and number are the same.

// The variable number is only defined inside the funciton double.  This is what we call variable scope.

//===========================================================================================================================

// PARAMETER CONFUSION

// The common confusion that happens with developers is when you declear a variable with the same name as the parameter.

function double(number) {
  return number * 2
}

let number = 10
double(number) // returns 20

// so here we defined a variable let number = 10 which has the same name as the parameter number.
// However, this changes nothing for JavaScript.  It wills till follow the logic above.
// Which means that let number = 10 is different than the number parameter inside the function.

function double(number2) {
  return number2 * 2
}

let number2 = 10
double(number2) // returns 20
number2 = 50
double(nuumber2) // returns

// When we change the value of number to number = 50.  This is not changing the parameter.
// Because these 2 variables are different.

// so everytime you call double(number) it will take the current value of the variable number, which will then be pased as the paramter of the function.

//===========================================================================================================================

// The parameter is only available inside the function.
// It may be confusing when the name of a variable is the same as a parameter but remember that they are NOT connected.
