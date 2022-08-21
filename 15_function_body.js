// FUNCTION BODY

// The function body(which is all the code between the curly braces {} in a function definition).

function sum(a, b) {
  return a + b
}

// The function body is return a + b.

//===========================================================================================================================

// .trim()

// The .trim() method allows us to make a new copy of a stirng while removing leading and trailing speaces from the original string.

// Leading spaces are spaces at the beginning of a string, and trailing spaces are spaces at the end of the string.

// This allows you to go form "  alex  " to "alex".  Notice how the leading and trailing spaces have disappeared.

// The .trim() is often used in forms on websites. When you sign up to some website, they will often .trim() your email becuase users might enter extra spces at the beginning or end of the email by accident.

// Its usage is similar to .toUpperCase() and .toLowerCase():

let email = ' alex@gmail.com '
email.trim() // 'alex@gmail.com'

function getEmail(email) {
  return email.trim()
}

//===========================================================================================================================

// Function body II

// The reason why we lower case the email is because it's case insensitive, meaning that alex@gmail.com is the same eamil as ALEX@GMAIL.COM. So to make sure that they are seen as the same by our website, we always lower case it.

function getEmail(email) {
  let cleaned = email
  cleaned = cleaned.toLowerCase()
  cleaned = cleaned.trim()
  return cleaned
}

// In this function, we receive the emaill parameter, then we create a copy of it and save it in a new variavble called cleaned.

// Then we assign cleaned.toLowerCase() to the cleaned variable.

// This means that we create a copy of cleaned but in lower case, then we save it in the variable cleaned.

// On the next line, we re-assign the value of cleaned to cleaned.trim().

// This means we create a copy of cleaned byt this time trimmed(which means leading and trailing spaces have been remove), and then this becomes the new value of cleaned.

// Finally, we return the value of cleaned.

// 1. Create a variable cleaned.
// 2. Give it the value of: a copy of email but in lower case
// 3.  Change the value of cleaned to a copy of its previous value but this time trimmed.

// RE-ASSIGNING THE VARIABLE

// When you re-assign the varaiable like this:

cleaned = cleaned.trim()

// You are in fact changing the value of cleaned.
//.trim() is only creating a copy of that varaible, but for you to change cleaned, you have to re-assign it to cleaned again.
// So far example, let's look at this wrong example:

// This is WRONG:
function getEmail(email) {
  let cleaned = email
  cleaned.toLowerCase()
  cleaned.trim()
  return cleaned
}

//This code will not do what it's supposed to do.  In face, it will just return the same email it received.  That's because .toLowerCase() and .trim() do not change the original variable, they only create anew copy of it.

// So you have to re-assign them to themselves by writing cleaned = cleaned.toLowerCase() and cleaned = cleaned.trim() to be able to change the value of the cleaned variable.

// ADD CONSOLE.LOGS TO VISUALIZE

// To be able to visualize how these transformations are happening, feel free to add console logs.

function getEmail(email) {
  let cleaned = email
  console.log(cleaned) // will be the same as email
  cleaned = cleaned.toLowerCase()
  console.log(cleaned) // will be in lower case
  cleaned = cleaned.trim()
  console.log(cleaned) // will be without leading/trailing spaces
  return cleaned
}

// Make sure to keep the return cleaned at the end.  Because the return will quit the function and return that value as a result

//===========================================================================================================================

function getName(name) {
  let formatted = name
  formatted = formatted.toUpperCase()
  formatted = formatted.trim()
  return formatted
}

//===========================================================================================================================

// To change the varaiable, you have to re-assign it to itself with the function call.  For example: cleaned = cleaned.trim() will change the value of cleaned and make it trimmed.

// The .trim(), .toLowerCase() and .toUpperCase() methods create new copies of the variable and do not change the original variable.
