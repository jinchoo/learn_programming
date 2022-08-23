// Array map I

// say you've got an array of grades and you'd like to multiply every single grade by the number 2.

let grades = [10, 15, 13]

// The result of multiplying every item in the array by 2 is the following array: [20, 30, 26]
//(10 became 20, 15 became 30, and 13 became 26).

// Whenever you encounter these scenarios, where you need to transform an existing array into a new one, you should use the .map() method.  
// The .map() method allows you to apply a transformation for every item in an array.  
// Thus the end result will be an array containing the same number of items (but most likely different values for those items).

//===========================================================================================================================
// Array .map()

// let's start with the first example where we need to multiply every number of the array by 2:

let grades1 = [10, 15, 13];

let doubledGrades = grades1.map(function (grade1) {
    return grade1 * 2
})

console.log(doubledGrades) // [20, 30, 26]

//Notice how we call the .map() method on the grades array.
// The .map() method accepts a callback, similarly to the .forEach() method.

function(grade) {
    return grade * 2
}

// Notice how we went form grades to grade (transition from the array into an array item). 
// This funciton returns grade * 2.  This is the tranformation.

// We're saying, I want to make every grade * 2.
// The return keyword is important here becasue this the result of the tranformation.  

// Lastly, the .map() function will return the tranformed array.  This is whhy we assigned the result of grades.map(...) to the new variable let doubledGrades.

// You would get undefined if you used .forEach() in this example.  That's because .forEach(), by definition, always returns undefined.  


// The .map() method allows you to apply a transformation for every item in an array.  Thus the end result will be an array containing the same numbe of items (but most likely different values for those items).  

//===========================================================================================================================

// Array map II

// let's take another example where we would like to subtract 1 from every item in the grades array.  

let grades2 = [10, 15, 13];

let newGrades = grades.map(function (grade) {
    return grade - 1
})

console.log(newGrades) // [9, 14, 12]

//Similary to the previous example, we start by calling .map() on the grades array.

// We decided to use the .map() method because we are transforming the array into a new one.  
// What we mean by that is that we plan on creating a new array based on the previous one.
// This new array will contain the same numbe of items(in our example, 3 grades thus 3 items).

// Inside the .map() method we pass a callback.  This callback receives a single grade and returns grade - 1(this is the transformation).  

// Lastly, we assign the result of grades.map(..) into a new variable newGrades. 

// Mixing up forEach and map

// The common mistakes is mixing up .forEach() and .map().  
// the syntax is similar, and the concept of array iteration is also the same.  
// But the main difference is that .forEach() does NOT return anything. 

// EVen if you place a return inside it, you won't get a new array from the .forEach().

// Thus use the .forEach() when you plan on iterating and .map() when you plan on tranfomring the array into a new one.  


// The function passed to .map() will be applied for every item in the array. 
// This function allows you to transform the item into a new one.
// Common mistakes are forgetting to return and mixing up .forEach() and .map().
// Use the .forEach() when you plan on iterating and .map() when you plan on tranforming the array into a new one.  

//===========================================================================================================================

// Triple Grades
// Complete the function tripleGrades such that it returns an array containing all the grades tripled

function trpleGrades(grades) {
    return grades.map(function (grade) {
        return grade * 3
    })
}