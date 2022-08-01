// Array.push();

// A method is a function that you can call on a certain data structure.

// Add item to an array

let numbers = [];

//and you would like to add the number 10 to that array.
numbers.push(10);

//The .push(item) method adds(or pushes) an item into an existing array.

let numbers1 = [];
console.log(numbers1) // []

numbers1.push(10)
console.log(numbers1) // [10]

numbers1.push(15)
console.log(numbers1) // [10, 15]

numbers1.push(13)
console.log(numbers1) // [10, 15, 13]

// .length gets updated every time
// The .length property is alwasy reflects the number of items in the array.  

// The .push(item) method adds (or pushes) an item into an existing array.
// The .length property always reflects the correct number of items insdie the array.  

// What does .push() return?

// The methods and functions that you call, will always return something.  Even if it's undefined.

// .toUpperCase() method will always return a string.

let name = 'alex';
console.log(name.toUpperCase()) // 'ALEX'

// The .push(item) method returns the new length of the array.  So it returns a number.  
let numbers2 = [];

console.log(numbers2.push(10)) // 1 (the new length of the array)
console.log(numbers2) // [10]

console.log(numbers2.push(15)) // 2 (the new length of the array)
console.log(numbers2) // [10, 15]

console.log(numbers2.push(13)) // 3 (the new length of the array)
console.log(numbers2) // [10, 15, 13]

// This means that if we assign the result of .push() into a variable, it will be a number representing the new length of the array.

let numbers3 = [10, 20];

let value = numbers.push(15)
console.log(value) // 3 (new length of the array)

//we have a funciton addTemperature that receives an array of temperatures and we're expected to add the temperature 10.  
//so we need to call temperatures.push(10)
//most of the functions we write though will need to return someting or else they will return undefined.  

// By looking at the sample usage, we can see that we expect this funciton to return the new array with the item pushed into it. 
// A very common mistake
function addTemperature(temperatures) {
    return temperatures.push(10)
}

//Take a moment, and think why does this NOT satifsfy the requirements of returning the new array?  What will this funcition return instead?
// This funciton will always retturn a number, which is the new length of the array.  But we don't really need that.  We need the new array.  Which is why this has to be rewritten as 2 separtate instrucitons:
// 1.push the number 10 into the array
// 2.return the array(which now has the new item)

//thus the correct answer is:
function addTemperature(temperatures) {
    temperatures.push(10)
    return temperatures
}

// Notice how we return temperatures after we call .push().  Rather than returning the result of .push().  That's all because .push() returns the new length of the array.  


function addGrade(grades) {
    grades.push(18)
    return grades
}

function addTemperature1(temperatures) {
    temperatrues.push(-6)
    return temperatures
};

//Pushing variables into an array
let data = [10, 20];
data.push(15);
console.log(data) // [10, 20, 15]

// You can also push a variable into an array.
let data1 = [10, 20];
let number = 15;
data1.push(number);
console.log(data) // [10, 20, 15]

// Notice how data.push(number) works because number is a variable representing the number 15 which then goets added to the array.  

// 1.submitting a grade works (it should add the grade to the grades array)
function addGrade(grades, grade) {
    grades.push(grade)
    return grades
};

//2. the number of tests taken is shown.
function getNumberofGrades(grades) {
    return grades.length
};

//3. the first submitted grade is shown (firstsubmitted, not the highest).
function getFristGrade(grades) {
    return grades[0]
}

//4. the last submitted grade is shown (last submitted, not the lowest).
function getLastGrade(grades) {
    return grades[grades.length -1]
}
