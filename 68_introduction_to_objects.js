//Why do we need objects?

// Objects are one of most common data types in programming. But why do we need them?

// Let's say that you are sotring some details for a person who's signing up to your webiste, here are some of the variables that you will end up creating:

let firstName = 'Sam'
let lastName = 'Doe'
let age = 21
let email = 'sam@gamil.com'
let isVerified = true

// All of thses 5 variables are repesenting the same person, but that is not clear form the variables.  We don't necessarily see the firstName and age are refrerring to the same person.

// This is where objects come in handy, as they allow you to group all of these variables into a single one:

let person = {
  firstName: 'Sam',
  lastName: 'Doe',
  age: 21,
  email: 'sam@gmail.com',
  isVerifed: true,
}

// This person object is a variable tht represents one person.  It contains the firstName, lastName, age, email, and isVerified of that person.
// These are called the keys.
// Every key has a value, for example, the firstName Key has a value of 'Sam'.
// The isVerified key has a value of true.
// Notice how objects are different than arrays because they have keys and values.
// Whereas arrays only contain values.

//So waht is an object?

// An object is a data type that allows you to group several variables together into one variable that contains keys and values.

// describes some rectable object
let rectangle = {
  width: 20,
  height: 10,
}

// describes the configuration in a shoppping website
let configuration = {
  theme: 'dark',
  currency: 'USD',
}

// describes a restaurant
let restaurant = {
  name: 'Italian restaurant',
  curisine: 'Italian',
  vegetraianOption: true,
  address: 'Rome, Italy',
}

// Key/value pair

// Another definition of an object is that it's collection of key/value pairs.
// In the configuration object above, we had 2 keys: theme and currency.
// Each key has a value. them has a value of 'dark' and currency has a vlue of 'USD'.

// Objects always contain keys and values where every key has a value where is whey we say they are collecition of key/value pairs.

// An object is a data type that allows you to grup several variables together into one variable that contains keys and values
// Another definition of an object is that it's a collection of key/value pairs.
// Objects always contain keys and values where every key has a value which is why we say they are a colleciton of key/value pairs.
// objects are different than arrays because they have keys and values.
// Whereas arrays only contain values.

//===========================================================================================================================

// Objects Syntax

// Let's star by creating the most basic object, an empty object:

let person1 = {}
let config = {}

// These 2 examples hsow that to crate an empty object, you have to assign the variable to an opening curly brace and a closing curly brace {}.

// Adding a key/value pair

// Now most objects wiill contain some key/value pairs inside of them.  these key/value pairs go in between the curly braces.  For example:
let person2 = { firstName: 'Sam' }
let config2 = { units: 'metric' }

//While the above is valid syntx, we recmmend that you write the object on multiple lines like the exmaple below:

let person3 = {
  firstName: 'Same',
}

let config3 = {
  units: 'metric',
}

// Thiis maeks it easier for you to add additional key/value pairs in the future as well as enhances the readability of the object.

// Notice how the key has a colon next to it : which is then followed by the value: firstName: 'Sam'.
// You cannot use an = sign here.
// The equal sign is only used when assigning the varaible (let config = {)but not for the key/value pairs.

// the first thing you should notice is the comma (,).
// This one is super important as forgetting it will lead to a syntax error.
// It's one of the most common mistakes when it comes to crating objects.

// You can make things easier and always add a comma after every key/value pair(even the last one)

//===========================================================================================================================

// Read a Key

// Using the example from the previous lesson:

let person4 = {
  firstName: 'Sam',
  lastName: 'Doe',
}

// How can you we read the firstName key of person object?  person.firstName.  So if you console.log(person.firstName) you will get 'Sam' in the console.

// If you want to read the lastName key of that same object, then it's person.lastName which will give you 'Doe'.
//Reading a specific key from an object in JavScript follows the follwing syntax: objectName.KeyName.
//So we use a dot(.) to access the key.

// Here's an additional example:
function getUserAge(user) {
  return `The user is ${suer.age} years old`
}

let person5 = {
  name: 'Sam',
  age: 20,
}

getUserAge(person) // 'The user is 20 years old'

// NOtice how user.age evealuates to 20.
// We've also used interpolation here to interpolate the expression user.age into the string.

//===========================================================================================================================

// Update a value

// It is also possible to change an existing value from an object by using the same syntax.
// Assuming the person object below:

let person6 = {
  name: 'Sam',
  age: 20,
}

// You can change the age to 25 using the following code:
person6.age = 25
console.log(person) // { name: 'Sam', age: 25 }

// so we also used the dot to access a specific key (the age in this example) and then asign it to an new value with = 25.

// We use a dot to access a key of an object.  Thesyntax looks like: objectName.keyName.
// You can change the value of a key by assigning objectName.keyName to a new value.
// For example: objectName.keyName = 'new value'.
