

let grades = [5, 3, 8];

//but the first (5) needs to be changed to 6
// 1. Ask yourself:  How can I read that item that I want to change?

// The anser to that is:
grades[0] // returns 5

// 2. Now assing it to the new value with the equal sign (=) and the new value like so:
grades[0] = 6;
console.log(grades) // [6, 3, 8]

//Examples with functions

function fixGrade(grades) {
    grades[0] = 6;
    return grades;
}

// The logic is similar, we just needed to add the return grades at the end of the fucntion so that we cn return the new array.  
// Make sure to have that return grades on a new line because the code won't work. 

// Increment first temperature
function incrementFirstTemperature(temperatures) {
    temperatures[0] = temperatures[0] + 1;
    return temperatures;
}