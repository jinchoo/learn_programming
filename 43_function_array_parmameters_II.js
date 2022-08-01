
// We can more or less assume that items is an array here because we're returning the first item from the array.  
function getFirstItem(items) {
    return items[0];
}


// string interpolation
function getFullName(names) {
    return `${names[0]} ${names[1]}`;
}

getFullName(["John", "Doe"]);


//the lsat item of an array is always going to be positioned one number less than the total number or items.  

//string concatenation
function fullName(names) {
    return names[0] + " " + names[1]
};

fullName(["Sam", "Doe"]);


function calculateDifference(firstRectangle, secondRectangle) {
    console.log('first rectangle', firstRectangle);
    console.log('second rectangle', secondRectangle)
    
    //To be on the safe side, it's often better to write the () which dictate the order of the Mathematical operations. 
    return (firstRectange[0] * firstRectange[1]) - (secondRectangle[0] * secondRectangle[1]);
}

