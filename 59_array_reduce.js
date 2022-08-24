// What is reduce?

// The reduce() method os a little bit complicated but we'll break it down step by step.

// The reduce() method is used to calculate a singel value from an array.  In other terms, you reduce an array int a single value.

// Reduce example: sum

// We can reduce the array [5, 10, 50] to the number 20.
// We can redcue the array [2, 4, 3] to the number 9.

// This is one of themost common used cases of reduce(), which is summing the array items.

// Reduce example: multiplicaiton

// We can reduce the array [10, 2, 2] to the number 40(10 * 2 * 2 = 40).

// The reduce() method accepts the reucer which is a callbakc that you have to write.
// The callback can be sum, multiplcation or some other logic that you may think of.

// So reduce is a generic function that will reduce an array int a single value.
// The way it iwll reduce that array into asingle value is configurable by you.  You can configure that in the reducer callback.

//===========================================================================================================================

// Array reduce: sum

// Assuming the grades array below:

let grades = [10, 15, 5]

// Here's how we can calculate its sume with reduce:

let sum = grades.reduce(function (total, current) {
  return total + current
}, 0)

// There's a lot of things happening here, let's break it down:

// 1. We call the .reduce() method on the grades array.
// 2. We assign the result of grades.reduce() to a new variable called sum.
// 3. The reduce method is taking 2 parameters: The reducer and the inital value ( this is the 0 argument passed at the end)

//===========================================================================================================================

// Reducer

// The reducer in this example is:

function (total, current) {
    return total + current
}

// This is the callback that is applied for every item in the array, however, this callback takes 2 parameters: total and current.

// The total is always referring to the last computed value by the reduce function.  You may often see this called as accumulatoor.  And the current is referring to a single item in the array.  

// code that we run

let grades3 = [10, 15, 5]

let sum3 = grades.reduce(function (total, current) {
    return total + current
}, 0);

// 1. The first time the callback runs, total is assigned 0 (because of the inital value) and current will be assigen to the first item of the array.  So total = 0 and current = 10.
// 2. Then we return total + current which is 0 + 10 = 10. Now the new value of total becomes 10.
// 3. The callback runs the second time and this time current = 15 (second item of the array) and total = 10. We return total + current which is 10 + 15 = 25. The current value of total becomes 25.
// 4. The callback runs the third time and this time current = 5 (third item of the array) and total = 25.  We return total + current which is 25 + 5 = 30. 
// 5.  there are no more items in the array, so the reuslt of the reduce is the final value of total which is 30.  Thus the sum is 30.  

//===========================================================================================================================

// Itnital Value

// The .reduce() method accepts 2 parameters: reducer and intialValue(not to be confused byt te 2 parameters of the reducer which are total and current).  


//===========================================================================================================================

let grades4 = [10, 15, 5]

let sum4 = grades.reduce(function (total, current) {
    return total + current
}, 0);

//===========================================================================================================================

// Array reduce: muyltiplication

// Let's say we've got the following numbers and we'd like to multiply them all:
let numbers = [5, 2, 10]

// We can use .reduce() here because we're reducing the entire array into a single number(which is the multiplcation of all these numbers).
let result = numbers.reduce(function (total, current) {
    return total * current
}, 1)
console.log(result) // 100

// Step by Step explantion: 

// 1. the first time .reduce() callback runs, total will have a value of 1 (coming form the starting value) and current will have a value of 5(which is the first item of the array).
// 2. Then we retrn total * current which is 1 * 5 = 5 so the next time the callback runs, total will have a value of 5.
// 3. The second time the callback runs, total is 5 and current is 2(second item of the array). We return total * current which is 5 * 2 = 10.
// 4. The third time the callback runs, total is 10 and current is 10(third item of the array). We return total * current which is 10 * 10 = 100.
// 5. The result of the .reduce() is 100 which is stored in the variable result.  

function sumNumbers(numbers) {
    return numbers.reduce(function (total, current) {
        return total + current
    }, 0)
}
