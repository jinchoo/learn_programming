//FUNCTION WITH PARAMETERS

// The syntax is similar to the previous one but this time we'll have parameter inside the parentheses ().

// First Exampe:  1 Parameter

// Let's start with an example where we have 1 parameter, called name.

function getLower(name) {
  return name.toLowerCase()
}

// Notice the:

// 1. function keyword to define a function
// 2. the name of the funciton is lowerCamelCase: getLower
// 3. (name): the parentheses containing the parameter name
// 4. the opeing curly brace: {
// 5. the function body.  In this example, return name.toLowerCase() which returns a copy of the name in lower case.
// 6. the closing curly brace: }

// Second example: 2 or more parameters

// When you have more than 1 parameter, you need to separate them with a , (comma characger).

// let's say for example we have the function sum, which take 2 parameters a and b.  Then the parameters will be separated by a comma: ( a, b).

function sum(a, b) {
  return a + b
}
