//Advanced interpolation

function getMessage(age) {
  return `You are currently ${age} years old.  Next year, you will be ${
    age + 1
  } years old.`
}

// Notice how we are able to interolate the expression age + 1 inside the ${} of the string.
// That's because this is an epxression that will eventually evaluate to anumber.

function getWelcomeMessage(name) {
  return `Welcome ${name.toLowerCase()}`
}

// name.toLowerCase() is an epxression that evaluates to a string.

// This would give us the same result:

function getWelcomeMessage(name) {
  let result = name.toLowerCase()

  return `Welcome ${result}`
}

// You can interpolate expression not just variables.
