// 1. submitting a grade works (it should add the grade to the grades array)
function addGrade(grades, grade) {
  grades.push(grade)
  return grades
}

// 2. the number of tests taken is shown.
function getNumberOfGrades(grades) {
  return grades.length
}

// 3.  the first submitted grade is shown (first submitted, not the highest).
function getFirstGrade(grades) {
  return grades[0]
}

//4. the last submitted grade is shown (last submitted, not the lowest).
function getLastGrade(grades) {
  return grades[grades.length - 1]
}

// 5. you can see if the test was too easy (if at least one of the students got a grade of 20)
function isTooEasy(grades) {
  return grades.includes(20)
}

// 6. you can sleect a grade from the dropdown and see if at least one of the studnets got that grade
function getGrade(grades, grade) {
  return grades.includes(grade)
}

// 7. the grades are exported as a CSV (omma-separted values) string.
function getCSV(grades) {
  return grades.join(', ')
}
