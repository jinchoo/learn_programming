// Variables deep dive

const { iteratorSymbol } = require('immer/dist/internal')

// Cannot re-deine a variable
// you cannot re-define a variable once it has been defined.  The code will be invalid.

let name = 'Sam'

//this is Invalid.  it will break with an ERROR.

//let name = 'Alex';

// We cannot re-define or re-declear name again because it has laready been defined.  Sof after the first time you use let for a specific variable name, you cannot use it again.

// If you want ot make the code above vaoid, you can then drop the let keyword form the 2nd time you used the variable name:

let name1 = 'Sam'

// This is valid because we not re-defining.  We're just changing the value.
name = 'Alex'

//===========================================================================================================================

// Variables/Functions are case sensitive

// Case sensitivity means that a lower case characgter and its equvalent upper case character are NOT considered the same.

// For Example:
// 1. assuming case sensitivity: 'sam' and 'SAM' are NOT the same.
// 2. assuming case insensitivity: 'sam' and 'SAM' are the same.

// Hoever variable names and funcitons, are case senstive.

// Which means the following code will NOT work:

let Name2 = 'alex'

// this is a different varaible then Name2.

name = 'sam'

// The difference is very subtle, but Name2(with a capital N) is different than name.  These are 2 different variables.

// And same thing with functions:

function test() {}

// is different than
function Test() {}

// Thus make sure to use the varaible and funciton names exactly how you define them.

//===========================================================================================================================

// CANNOT USE A VARAIBLE BEFORE DECLEARING IT
//  you cannot use a variable before declearing it, the code below will NOT work:

console.log(name4) // this will breake with an ERROR.
let name4 = 'Sam'

//We should have defined the varaible first and then console.log it.

// NAMING CONVENTION

// A naming convention is a set of rules that you should take into consideration when defining the name of a variable and function.

//===========================================================================================================================

// JAVASCRIPT NAMING CONVENTION

// In JavaScript, the naming convention for variables & funcitons is: lowerCamelCase

// This is why when defining a varaible contining the full name, we'd write it as following:

let fullName = 'Alex Doe'

// Note that these are recommendations. Even if you write the variable name as fullname It would still work.  But these recommendations making it easier for other people to understand your code.

// The same naming convention applies to functions:
function getFullName() {
  return 'something'
}

//===========================================================================================================================
