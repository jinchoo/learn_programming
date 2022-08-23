// forEach syntax:

//To make it easier, try to distnguish between the 2 components of array iteration:

// 1. The .forEach() function call
// 2. The function passed to the forEach.  

let grade = [10, 18, 14, 15];

grades.forEach(function (grade) {
    console.log(grade)
})

// 1. the .forEach call is:
grades.forEach()

// 2. the function passed to the forEach is:
function(grade) {
    console.log(grade)
}

//============================================================

// Plural to Singular

// Whe iterating over an array, you're always going form an array of several items into iterating over them one by one.  

// 1. maker sure your array name is plural.
// 2. And make sure the function you pass to the forEach has the parameter in the singular. 

// When iterating over an array of frades, the parameter inside the ufnciton passed to the forEAch Should be grade (singular of grades).

let temperatures = [10, 18, 14, 15];

temperatures.forEach(function (temperature) {
    console.log(temperature)
});

//Notice how we went form tempeatures (array, inplueral) to temperature(array item, in singular).  This will help you shift form array to array item. 

