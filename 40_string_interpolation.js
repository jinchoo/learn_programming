// Interpolation requires 2 steps

// To write interpolation correctly, rememeber that interpolation requires 2 steps:

// 1. The stirng has to be a template string (which means, written using the backtick character). It does NOT work with string created witht he double-quotes.
// 2. Wrap the vaiable with ${ and then }.

let firstName = 'Alex'
let lastName = 'Doe'

let message = `Hello ${firstName}, ${lastName}` // Hello Alex, Doe

// javaScript is not able to tell that you mean name as a variable unless you wrap it with ${ } which becomes ${name}.

//========================================================================================

function getAgeDescription(age) {
  return `You are currently ${age} years old`
}
