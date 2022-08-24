// why are objects important?

// Objects are important because they represent and describe a certain object, element, entity, person, etc.

//Using existing knowledge

// Remmeber that the values in an object are going to be strings, numbers, booleans, etc.

// Which means you can still use your existing knowledge from all the previous chapaters.  So if a value is a string, you can call .toLowerCase() or .toUpperCase() on it.

let user = {
  login: 'jadjourbran',
  id: 2265232,
  type: 'User',
  name: 'Jad Joubran',
}

console.log(user.name) // "Jad Joubran"
console.log(user.name.toLowerCase()) // "jad joubran"
console.log(user.name.toUpperCase()) // "JAD JOUBRAN"
console.log(user.name.length) // 11
console.log(user.name[0]) // "J" (first character)
console.log(user.name[user.name.length - 1]) // "n" (last character)

function getIntials(user) {
  return `${user.firstName[0]}${user.lastName[0]}`
}

// Adding a new key/value pair

let user1 = {
  firstName: 'Sam',
  lastName: 'Doe',
}

user.age = 20
console.log(user) // { firstName: 'Sam', lastName: 'Doe', age: 20 }

// It is also possible to start form an empty object and add key/value pars one by one.

let config = {}

config.currency = 'EUR'
config.theme = 'dark'
console.log(config) // { currency: 'EUR', theme: 'dark' }
