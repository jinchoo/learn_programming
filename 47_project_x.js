// 1. the number of tests taken
function getNumberOfGrades(grades) {
  return grades.length
}

// 2. the first submitted grade (first submitted, not the highest)
function getFirstGrade(grades) {
  return grades[0]
}

// 3.  The last submitted grade (last submitted, not the lowest)
function getLastGrade(grades) {
  return grades[grades.length - 1]
}
