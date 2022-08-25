// Working with arrays of objects

// While arrays of objects are still arrays, there's a big difference which is the array item is now an object.
// Whereas, we were used to having array items being a number or a string.

// Here's a comparison example:

// array of numbers
let grades = [10, 5, 15, 20]

// get first grade
console.log(grades[0]) // 10

// array of objects
let users = [
  { firstName: 'Sam', lastName: 'Blue' },
  { firstName: 'Charlie', lastName: 'Bon' },
]

// gert first user
console.log(users[0]) // { firstName: 'Sam', lastName: 'Blue' }

// As you can see, getting the first item of the array is done using the same syntax for both arrays.
// However, the array of numbers will return a number, whereas the array of objects will return an object.

// If you'd like to get the firstName of the first user, then you'd have to write:
console.log(users[0].firstName) // 'Sam'

// Visulaize the object

// so we recommend that you add console.log(users), then once you figrue out that you need the first item of the users array, we recommend that you add console.log(users[0])
// this iwll allow you to visulaize the object hat you receive.

// Knowing that you have an object, you will know that you need to use the dot syntax to access one of the properties.

//===========================================================================================================================

// Common mistake

// The most common mistake when it comes to arrays of objects, is trying to access a certain property on the array rather than on the object.

// we can't access users.firstaName because users is an arrya, thus it does not have a property firstName.
// The firstName property is only available on the objects inside the array.

// this is INCORRECT:
console.log(user.firstName) // undefined

// this is CORRECT:
console.log(user[0].firstName)
console.log(user[1].firstName)

//Arrays of objects contain lubjects, which is why you will most often need to access one of the properties on that object
// Make sure to visualize the array and the objects inside tby using console.log throughout you code.
// Common mistake: trying to access an object property on the array rather than on one of the objects inside the array.

//===========================================================================================================================

// Iterating Over them

// Let's take the same example as before and try to iterate on it, using the .forEach() method:

let users1 = [
  {
    firstName: 'Sam',
    lastName: 'Blue',
    age: 21,
  },
  {
    firstName: 'Charlie',
    lastName: 'Bon',
    age: 38,
  },
]

user.forEach(function (user) {
  console.log(user) // one objectr at a time
})

// This will log to the console the first object { firstName: 'Sam', lastName: 'Blue', age: 21},
// and then the second object {firstName: 'Charlie', lastName: 'Bon', age: 38}.

// Say you wanted to log the firstName, then you have to access the .firstName property on the user object:

user.forEach(function (user) {
  console.log(user.firstName)
})

// This will log to the console the first firstname 'Sam', and then the second one which is 'Charlie'.

// Always start with console.log

// It's important to alwasy start with a console.log insdie the .forEach(), especially for arrays of objects as it help you visualize the transition form array of objects to object as well as visulaize the object structure.

//===========================================================================================================================

// Transforming with .map()
// It's also possible to use .map() on arrays of obejcts.
// This may be a little bit trickier to understand but it's quite powerful.
// Let's say we've got the following recipes array of objects:

let recipes = [
  {
    title: 'Pasta pesto',
    preparationMinutes: 30,
    rating: 4.5,
  },
  {
    title: 'Lasagna',
    preparationMinutes: 45,
    rating: 3.9,
  },
]

// and we'd like to create an array of all the recipes names.  The end result will look like this:
;['Pasta pesto', 'Lasagna']

// This is transformation where we transform every object from the array into a string, which is the titel of the recipe.

// So we need to find a function that allows us to transfrom: { title: 'Pasta pesto', preparationsMinutes: 30, ratign: 4.5} to 'Pasta pesto'.

let titles = recipes.map(function (recipe) {
  console.log(recipe) // helps us visualized
  return recipe.title
})

console.log(title) // ['Pasta pesto', 'Lasangn']

// The transformation is that we recievie a recipe object and we return the title with recipe.title!

// When you iterate over an array of objects, you will get an object inside the callback.
// It's importnat to always start with a consol.log inside the .forEach, especially for arrays of lbjects as it help you vsiualize the transiton form array of objects to object as well as visulaize the object structure.
// You can use .map() to convert an array of objects into an array of specific entries for example an array of people into an array of full names.

//===========================================================================================================================

function getSumGrades(grades) {
  let sum = 0
  grades.forEach(function (grade) {
    sum = sum + grade.grade
  })
  return sum
}

function getSumGrades(students) {
  let sum = 0
  students.forEach(function (student) {
    sum = sum + student.learnProgramming.grade
  })
  return sum
}

function getRecipeTitles(recipes) {
  return recipes.map(function (recipes) {
    return recipes.title
  })
}
