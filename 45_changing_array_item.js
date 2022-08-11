let grades = [5, 3, 8]

//but the first (5) needs to be changed to 6
// 1. Ask yourself:  How can I read that item that I want to change?

// The anser to that is:
grades[0] // returns 5

// 2. Now assing it to the new value with the equal sign (=) and the new value like so:
grades[0] = 6
console.log(grades) // [6, 3, 8]

//Examples with functions

function fixGrade(grades) {
  grades[0] = 6
  return grades
}

// The logic is similar, we just needed to add the return grades at the end of the fucntion so that we cn return the new array.
// Make sure to have that return grades on a new line because the code won't work.

function fixGrades(grades) {
  // This is INCORRECT
  return (grades[0] = 6)
}

// The code above is incorrect because the function will return 6.  The reason for this is that the expression grades[0] = 6 returns 6
// which is why the function will return 6.  However, we need it to return the new array.
// So always perform the operation and then at the end of the function, return the array.

// Increment first temperature
function incrementFirstTemperature(temperatures) {
  temperatures[0] = temperatures[0] + 1
  return temperatures
}

//============================================================

// Change the value of the first temperature recording from -5 to -10

let temperatures = [-5, 12, 15, 18, 13]
temperatures[0] = -10

// output: [-10, 12, 15, 18, 13]

//============================================================

//Increment first temperature

// Complete the funciton incrementFirstTemperature such that:
// 1.  It increments the first temperature from the temperatures array.  This means that if the first temperature was 5, it should become 6.  If it was 8, it should become 9.  No matter what the value was, you should increment it by 1 to the previous one.  YOu cannot hardcode any value here.
// 2.  The function should return the new temperatures array.

function incrementFirstTemperature(temperatures) {
  temperatures[0] = temperatures[0] + 1
  return temperatures
}
