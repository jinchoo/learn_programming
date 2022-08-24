//implement submitting a grade (it should add the grade to the grades array)

function addGrade(grades, grade) {
  grades.push(grade)
  return grades
}

// show the number of tests taken

function getNumberOfGrades(grades) {
  grades = grades.length
  return grades
}

// show the first submitted grade (first submitted, not the highest)

function getFristGrade(grades) {
  return grades[0]
}

// show the last submitted grade (last submitted, not the lowest)

function getLastGrade(grades) {
  return grades[grades.length - 1]
}

// show the sum of all the grades

function getSumOfGrades(grades) {
  let sum = 0
  grades.forEach(function (grade) {
    sum = sum + grade
  })
  return sum
}

// show the average grade

function getAverageGrade(grades) {
  let sum = 0
  grades.forEach(function (grade) {
    sum = sum + grade
  })
  return sum / grades.length
}

// show the grades raised by (every grade increased by 2 points)

function getRaisedGrades(grades) {
  return grades.map(function (grade) {
    return grade + 2
  })
}
