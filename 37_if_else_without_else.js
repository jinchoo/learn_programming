// if...else without else

function canVote(age) {
  if (age >= 18) {
    return true
  } else {
    return false
  }
}

// Can be rewritten as following:
function canVote(age) {
  if (age >= 18) {
    return true
  }
  return false
}

// Thses 2 code snippets work exactly the same.  Notice how the second example was able to achieve an if...else without using the else keyword.

// 1. let's start with canVote(20) as an example. age >= 18 results in true when age is 20.  In that case the funciton returns true.  Remember that the return keyword will quit the funciton so the rest of the fuctions will not be executed.

// 2. Now if we call canVote(5), age >= 18 results in false when age is 5.  So the body of the if condition won't execute.  Now that the if condition is skipped, the only line left in that funciton is return false so the function returns false.

// And rememver that this happens because of the return keyword which will always quit or exit the function with the value that was returned.

// And don't forget that the return keyword can only be used inside funcitons, which means this pattern only works in functions.
