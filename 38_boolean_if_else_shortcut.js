//Boolean if...else shortcut

function canVote(age) {
  if (age >= 18) {
    return true
  } else {
    return false
  }
}

// The above code can be re-written with a shortcut, completely removing the if..else:

function canVote(age) {
  return age >= 18
}

// if you look at the code with if...else, condition, you're basically saying:
// if(age >= 18) results in true, return true

// else, which means when the same condition age >= 18 returns false, then return false.

// So it's like you're saying, if it's true, retrun ture and if it's false, return false.  So why not return the comparison as is?

//that's why we're able to return age >= 18.  That's becasue age >= 18 is a comparison, which means it's going to retrun a boolean.

//===========================================================================================================================
// canVote(20)

// When we call canVote(20), and we have the function:

function canVote(age) {
  return age >= 18
}

// JavaScript is goin gto evaluate age >= 18 which is goin gto result in true so then the return age >= 18 becomes a retrun true (because the expression age >= 18 results in true).
