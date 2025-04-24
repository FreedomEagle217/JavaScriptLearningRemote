/*
    Thursday April 10, 2025  2:45 p.m.   Christopher Jacobo
*/

// This file deals with Multiple Values: Arrays and Objects

// To run, use command:     node file_name
//  DON'T use file_name.js

//      ARRAYS
arr1 = ["black", "orange", "pink"]; // Avoid = new Array("thing",...)
arr2 = ["black", 5, true]   // Arrays can hold multiple types

let thingys = arr2[0];

let thingys2 = 5;
arr2[0] = thingys2;     // Overwriting elements
let arr2Length = arr2.length;   // Length of array: 0 -> # of items -1
for (i =0; i <= arr2.length -1; i++ ){
    console.log(typeof arr2[i]);    // Prints type of element
}
// One could access a non-existent element like arr2[-4] but 
//      that is NOT a good practice

// Printing function for later
function printArray(array){
    console.log(array);
}

// Array Methods
let favoriteFruits = ["grapefruit", "orange", "lemon"];
favoriteFruits.push("tangerine"); // Pushes value to the end
printArray(favoriteFruits); // Print
favoriteFruits.splice(2, 2, "apple", "banana");
    // At index 2 (after index 1), delete 2, and add (apple, banana)
printArray(favoriteFruits);

// Deleting Arrays
let otherFavoriteFruits = ["grapefruit", "dragonfruit"];
favoriteFruits = favoriteFruits.concat(otherFavoriteFruits);
    // Concatenate another array
favoriteFruits.pop();   // Removes last element and caches it for use
favoriteFruits.shift(); // Removes the first element
// You could also use array_name.splice(1,3);
let favoriteFruitsLength = favoriteFruits.length;
delete favoriteFruits[favoriteFruitsLength - 1];
    // Not a function but deletes the element but leaves the place
    //  ie, empties the element so ther is [..., <1 empty item]
printArray(favoriteFruits);

// Finding values
let arr8 = [2, 6, 7, 8 ];
let findValue = arr8.find(function(e) {return e == 6});
    // Defines a function 
let findValue2 = arr8.find(e => e ==10 );
    // Lambda function that finds a value
let foundMessage = `Found: ${findValue} , ${findValue2}`;
console.log(foundMessage);
    // FInding index
let foundIndex = arr8.indexOf(6);
console.log(`Found: ${findValue} at index ${foundIndex}`);
let foundIndex2 = arr8.indexOf(10);
console.log(foundIndex2); // Displays -1, does NOT break system! cool
    // Finding the index of the second occurence 
let findIndex = arr8.indexOf(6, 2);

let animals = ["dog", "horse", "cat","platypus", "dog"];
let lastDog = animals.lastIndexOf("dog"); 
    // index of the last occurence of dog

    // Sorting arrays (#s and Strings)
console.log(animals.sort());
    // Reversing: does not sort, just reverses index
let numArray4 = [1, 15, -7, 8, 20];
console.log(`numArray4: ${numArray4}`);
console.log(`Reversed numArray4: ${numArray4.reverse()}`);

    // MultiDimensional Arrays
let arrOfArrays = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
    // Could be done with var arrays two (eg, arr = [arr1, ...] )
console.log(arrOfArrays);
let middleValue = arrOfArrays[1][1];
console.log(`Middle value: ${middleValue}`);


//      OBJECTS
let dog = {
    dogName: "Goliath",
    weight: 2.4,
    color: "brown",
    breed: "pitbull",
    age: 10,
    burglarBiter: true
    };
    // Define an object with multiple characteristics
    //      no class instance needed like Java
console.log(dog);
    // Accessing object's values = properties
let dogColor1 = dog["color"]; // dog.color <==> dog["color"]
console.log(`${dog.dogName}'s color: ${dog["color"]}`);
    // Updating object's properties
dog["color"] = "brown";
dog.weight = 80;
dog.breed = 4;  // Automatic changing of TYPE! Cool, no crash

    // Objects in Objects
let company = {
    cName: "Healthy Candy",
    cAddress: {
        streetNumber: 14033,
        zipCode: 79928
    }
}
    // Arrays in objects
    // Objects in arrays
    // Objects in arrays in objects