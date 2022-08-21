// if conditions syntax

if (age >= 18) {
  return true
}

// This if condition would make sense in the following function:

function canVote(age) {
  if (age >= 18) {
    return true
  }
}

// BREAKING DOWN THE SYNTAX

// 1. We start with if keyword
// 2. followed by open parenthesis (
// 3. then the condition.  Which is for example age >= 18 or could grade === 10 depending on what you're checking in the if condition.
// 4. then followed by a closing parenthesis )
// 5. then followed by an open curly brace {.  This denotes the start of the if block.  Which determines what would happen if the ocndition inside the fi was true.
// 6. You could have whatever expression here.  We didn't learn about expression yet, but you could return here if your were in a function, or change the value of a variable.
// 7. finall, you should close the opening curly brace with a closing one: }

function isPositive(number) {
  if (number >= 0) {
    return true
  }
}

console.log(isPositive(5))
console.log(isPositive(-10))
