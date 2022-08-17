// functions can have 0 or more parameters.
// let's take a look at functions with multiple parameters.

function add(a, b) {
  return a + b
}

// It is okay to call the variables with a single characgter (a and b) because they represent numbers without any special meaning (they do not represent a year, an age, they're just numbers).

// Notice how when we have more than 1 parameter, you have to separate them with a comma: function add(a, b).

//===========================================================================================================================

// Number of parameters

// You can have more than 2 parameters, and the syntx is similar:

function sum(x, y, z) {
  return x + y + z
}

//===========================================================================================================================

// Arguments

// Assuming we've got the function triple and that we're calling that function twice:

function triple(number) {
  return number * 3
}

triple(5)
triple(10)

// The number variable is called a parameter.
// The 5 that is passed to triple in triple(5) is called an argument.
// The 10 that is passed to triple in tirple(10) is called an argument.

// Notice how the argument becomes the parameter

// In tripe(5) the argument 5 becomes the parameter for that function call.  Then the next time we call triple(10), the argument 10 becomes the parameter for that function call.

//===========================================================================================================================

// Variable Scope

// The parameters of a function are only accessible inside that function.  That means form the opening { until the correspoinding closing }.

// number is NOt defined here
function double(number) {
  // number can only be unsed INSIDE this function
  return number * 2
}
// number is NOT defined here

// This concept is called the scope of a variable.
// Parameter is only accessible inside the funciton, but nowhere else.

//===========================================================================================================================

// Store the result of a function
// Since functions return a result, you can in fact store that result in a variable.

function double(number) {
  return number * 2
}

let firstResult = double(4)
let secondResult = double(10)

// Notice how we save the result of double(4) into the variable firstResult.  The variable result now contains the result of the double(4) function call, which is 8.
// The value of firstResult is now 8.
// The secondResult variable has the result of double(10) which is 20.

//===========================================================================================================================

// Calculate the sum of 4 and 5 and store the result in a variable called total.
function sum(a, b) {
  return a + b
}

let total = sum(4, 5)
