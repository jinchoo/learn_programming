// You can get the number of items in the array by accessing the .length property, you can iterate wity .forEach() or transform the arry into a new one with .map().

student.grades.forEach(function (grade) {
  console.log(grade)
})

// Now let;s break down the student.grades.forEach() bit:

// 1. student is the object
// 2. .grades allows us to access the grades key.
// 3. Since the student.grades is an array, we can iterate over it by calling .forEach() on it.

// Objects can contain any data type, including arrays.
// When a key/value pair contains an array, you can use all your existing array knowldege on that value.

//===========================================================================================================================

// The function getNumberOfTags such that it returns the number of tags for the game it receives as a parameter.

function getNumberOfTags(game) {
  return game.tags.length
}

// The function getFirstGrade such that it returns the first grade received by the student.

function getFristGrade(student) {
  return student.grades[0]
}

// the function getLastGrade such that it returns the last grade received by the student.

function getLastGrade(student) {
  return student.grades[student.grades.length - 1]
}

// the function getSumOfGrades cuh that it returns the sum of all the grades

function getSumOfGrades(student) {
  let sum = 0
  student.grades.forEach(function (grade) {
    sum = sum + grade
  })
  return sum
}

//===========================================================================================================================

// Property vs. Method

// It is also possible for an object to contain a function.

let user = {
  firstName: 'Sam',
  lastName: 'Doe',
  age: 21,
  canVote: function () {
    return age >= 18
  },
}

// you can call that function by accessing the key canVote and then adding the parentheses afterward:

user.canVote(30) // true

// Now that we've defined most of the poossible values an object key can take it's ttime to make the distnciton between property and method.
// When the key has a vlue that is either a string, number, boolean, array, or bject then it's called a property.
// whereas, when the key has a value that is a function (for example the canVote) then we say that it's a method.

// This is why often see people referring to the firstName property, and the age property, and the canVote Method.

// An object can also contain a funciton, we call that a method
// When the key has a value that is either a string, number, boolean, array, or object then it's called a property.
// When the key has a vlue that is a function then we say tht's a method.
// When calling a method, don't forget to add prentheses at the end.
