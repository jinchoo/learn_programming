// Pushing variables into an array

// We've always pushed numbers directly into an array, for exameple:

let data = [10, 20]
data.push(15)
console.log(data) // [10, 20, 15]

// You can also pusha  variable into an array, for example:

let data1 = [10, 20]
let number = 15
data.push(number)
console.log(data) //[10, 20, 15]

//Notice how data.push(number) works because number is a variable representing the number 15 which then gets added to the Array.

//============================================================

// 1. submitting a grade works (it should add the grade to the grades array)
function addGrade(grades, grade) {
  grades.push(grade)
  return grades
}

function addGrade(grades, grade) {
  grades.push(grade)
  return grades
}

// 2. the number of tests take is shown.
function getNumberOfGrades(grades) {
  return grades.length
}

// 3. the first submitted grade is shown (first submitted, not the highest).
function getFirstGrade(grades) {
  return grades[0]
}

// 4. the last submitted grade is hown (last submitted, not the lowest).
function getLastGrade(grades) {
  return grades[grades.length - 1]
}
