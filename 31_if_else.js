// we saw how we can create an if condition.

function getVotingMessage(age) {
  if (age >= 18) {
    return 'You are allowed to vote'
  }
}

// In the case where age >= 18 is true, the function getVotingMessage() will return 'You are allowed to vote'.

// But in all other cases, so when age >= 18 is false, then the funciton returns undefined(implicit return).

// That's because we do not have a return for all the other cases.

getVotingMessage(20) // 'You are allowed to vote'
getVotingMessage(30) // 'You are allowed to vote"
getVotingMessage(10) // undefined

// ELSE

// The else keyword can be used to handle all other cases of an if condition.
// For example, to make the code above return 'YOu are not allowed to vote', when the age >= 18 returns false, you have to add the else keyword like this:

function getVotingMessage(age) {
  if (age >= 18) {
    return 'You are allowed to vote'
  } else {
    return 'You are not allowed to vote'
  }
}

// Notice how afer the closing } of the if (age >= 18 { ... }, we added an else.
// Then this else requires its own opening and closing curly braces else { ... }.

getVotingMessage(20) // 'You are allowed to vote'
getVotingMessage(30) // 'You are allowed to vote'
getVotingMessage(10) // 'You are not allowed to vote'

// As always, its important to remmeber the return keyword, even inside the else.
// If you forget about it, it will return undefined instead.

function isPasswordVaoid(password) {
  if (password.length >= 10) {
    return true
  } else {
    return false
  }
}

//The password is considered valid when it is least 10 characgers long, however, leading and trailing spaces should NOT be counted.
function isPasswordValid(password) {
  if (password.trim().length >= 10) {
    return true
  } else {
    return false
  }
}
