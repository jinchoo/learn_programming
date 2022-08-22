// Sting + String

// Real-life example

// Le'ts take a real-life example with a funciton that greets the user.  The examples below will make more sense because they're in a function, so you will see how we're able to create a new string based on the parameter it receives.

function greetUser(name) {
  return 'Hello ' + name
}

// This is a function that takes aname parameter and returns 'Hello ' + name.

console.log(greetUser('Sam')) // 'Hello Sam'
console.log(greetUser('Alex')) // 'Hello Alex'

// Notice how we get this reusable functionality form this function.  this one of the most important aspects of a function, it aims to slove a problem while often taking into consideration the parameter (configuration) it receives.
