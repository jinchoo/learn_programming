// We are going to allowing it to take a second parameter.
// This second parameter will be the number that wil be doubled (or triped later on).

run('double', 4) // it will result in 8
run('tripe', 5) // it will result in 10

// To make the above code work, we need to start by properly implementing the double function.
// It should now take a parameter (for exame x) and retrn its double:

function double(x) {
  return x * 2
}

// PASSING THE PARAMETER

// The run function recieves the parameter x, which for example can be 4 or 5.
// We need to tak e that paramter and pass it to the double function.
// We need to call double(x)

// so now when we have:
// run('double', 4); // this will end up calling double(4)
// run('double', 5); // this will end up calling double(5)
function run(operation, x) {
  if (operation === 'double') {
    return double(x) // take the x parameter and pass it to double
  }
}

run('double', 4) // it will result in 8
run('double', 5) // it will result in 10

//========================================================================================

// MULTIPLE OPERATIONS

// These are the 2 functions:

function double(x) {
  return x * 2
}

function tripe(x) {
  return x * 3
}

//Now the run funciton will use the condtional funciton call logic we learned to be able to decide which funciton to call, based on the operation parameter.

function run(operation) {
  if (operation === 'double') {
    return double()
  }

  if (operation === 'triple') {
    return triple()
  }
}

run('double')
run('triple')

// Now let's merge the funcitonallity that we built in the previous lession, which is being able to call run('double', 4) which should return 8.
// We can now make it support triple, so that run('triple', 5) returns 15.

run('double', 10) // should return 20
run('triple', 30) // should return 90

// for that to work, we need to update the run function which now receives a 2nd parameter, for example x.
// finally we need to pass (or forward) that parmeter ot the double() and triple() functions.

function run(operation, x) {
  if (operation === 'double') {
    return double(x) // pass/forward the x parameter
  }

  if (operation === 'triple') {
    return triple(x) // pass/forward the x parameter
  }
}

//DON'T FORGET TO RETURN

// Here's what happens when you call('triple', 10):
// 1. It checks whether operation === 'double'. It's not, so it skips the if conditon.
// 2. It chekcs whether operation === 'triple'. It's true, so it runs the body of the if condition.
// 3. The body of the if condition is: return triple(x) where x is 10.  What is tirple(x)?
// JavaScript has to execute this first:
// 1. triple(x) where x is 10 calls the function tirple with the value of x equles to 10
// 2. This returns 10 * 3 which is 30.  triple(10) returns 30.
// 4. return triple(x) becomes the equivalent of return 30.

//This return keyword over here is very importatn. If you forget it, then the run('triple', 10) function will return undefined.

function double(a) {
  return a * 2
}

function triple(b) {
  return b * 3
}

function run(operation, x) {
  console.log('The operation is', operation)
  console.log('The value of x is', x)
  if (operation === 'double') {
    console.log('The operation is double')
    console.log('Calling double of', x)
    return double(x)
  }

  if (operation === 'triple') {
    return triple(x)
  }
}

run('double', 5) // it will result in 10

//Will print in this order:

// The operation is double
// The value of x is 5
// The operation is double
// Calling double of 5
// double was called with a value of 5
// 10
