// Introduction to functions

// A function is a reausable piece of code that performs some logic and gives you a result.

// For example, a sum funciton is a function that sums 2 numbers and returns the result.
// For example, asuuming we have a funciton sum, then writing sum(3, 5) will give us the sum of 3 and 5 which is 8.

// The function sum will then contain the needed logic to compute the sum of these 2 numbers.

//===========================================================================================================================

// Benefits of functions

// There's an important benefit of functions, which is reusability.

// Once you create that sum, you can call it with differnet values.

sum(1, 3) // 4
sum(2, 4) // 6
sum(6, 3) // 9

function double(number) {
  return number * 2
}

// number is a varable.
// number is a special kind of varaible called a parameter

// in terms of syntax, there ater 4 new things in this example:
// 1. The function keyword
// 2. The parentheses()
// 3. The curly braces {}
// 4. The return keyword

//===========================================================================================================================

// Functiion keyword

// The function keyword is used to define a function.  This allows you to group related code logic together to make a reusable task.

//===========================================================================================================================

// The return keyword

// The last line of that function is return.
// This an important keyword.  return is used to give the reuslt of the function.

// Let's take an exmaple in English:

// What is the result of doubling 4?
// The result is 8.

// By having return number * 2 you're saying that the result of the double function is: number * 2 which in this example whould be 8.

// Note that the return keyword can only be used hinside a function.

//===========================================================================================================================

// Complete the function triple such that it return the triple of the number
function triple(number) {
  return number * 3
}

// The return keyword will give the result of the function triple.

//===========================================================================================================================

// Parameters

// Here's how we call that function:

function double(number) {
  return number * 2
}

double(4) // will return 8
double(3) // will return 6

// This sows the benefit of creating a funcitons as we can now reuse the logic that we have inside the double function.

// Notice how double(4) returns 8 whereas double(3) returns 6.  That's becasue number is a parameter (a special type of varialbe), an dno matter what value it had, we will return number * 2, we will double it.

// Now we want to see the conneciton how the 4 in double(4) becomes the parameter number.

//===========================================================================================================================

// So what is a parameter?

// A parameter isa variable that a funciton receives.

// Most funcitons will use the varaible they receive and will compute the resutl based on it.

function double(number) {
  return number * 2
}

// The funciton double receives a number parameter.  The result of that function is the number multiplied by 2.
// The number variable could have any value, it all depends on the value you provide when you call that function.

//===========================================================================================================================

// Calling functions

function double(number) {
  return number * 2
}

double(5)

//double(5) is an example of how we call that function.
// You are invoking the funciton double and passing the vlaue 5 to the number parameter.

// You can call it again with another parameter, for example: double(10)
// So to call function, you have to write its name(in this example double) and then you need to have the aprentheses() with a value that you want to pass for the parameter. Hence why it looks like: double(5) or double(20).

//===========================================================================================================================

// Call the tirple function while giving the number parameter a value of: 5

function triple(number) {
  return number * 3
}

triple(5)
