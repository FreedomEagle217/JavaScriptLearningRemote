//  Monday April 28, 2025  4:42 p.m.   Christopher Jacobo

/*
                    JavaScript BUILT-IN METHODS

    Much like several java functions are widely available without importing
        (eg, System.out.print, Math.pow(), etc ), JavaScript also has widely
        available functions and methods. These "global" methods were determined
        long ago by the language designers. These global methods are available
        without referring to the "built-in" object they are a part of
*/

// decodeURI() and encodeURI()  --- For turning a formatted URL to just text
let uri = "https://www.example.com/submit?name=maaike van putten";
let encodedURI = encodeURI(uri);
console.log("Encoded URI: " + encodedURI);
let decodedURI = decodeURI(encodedURI);
console.log("Decoded URI: " + decodedURI + 
            "\n------------------------------------------------");

// decodeURIComponent() and encodeURIComponent()
//    --- For special characters in URL, such as & and =
let encodedURI2 = encodeURIComponent(uri);
console.log("Encoded Component URI: " + encodedURI2);
let decodedURI2 = decodeURIComponent(uri);
console.log("Decoded Component URI: " + decodedURI2 + 
    "\n------------------------------------------------\n");

// Parsing Numbers - parseInt(), parseFloat()

// eval()   ---     this is an evil function, so many security
//                  breakthroughs occur due to its implementation

//          ARRAY METHODS
let arr = ["grapefruit", 4, "hello", 5.6, true];
function printStuff(element, index){            // For each actions
    console.log("Printing stuff: ", element, 
                " at index: ", index);
}
//          NOTE: for the array function within for each,
//                  parenthesis are NOT used
arr.forEach(printStuff);

//  array_name.filter(otherFunctionName) - .filter() takes a function argument
//                                         If the inner function returns true, 
//                                         then the element remains in the array.
//                                          Else, it is removed
let arr2 = ["squirrel", 5, "Tjed", new Date(), true];
function checkString(element, index){          // Filtering array
    var isAString = (typeof element) === "string";
    return isAString;
}
let filteredArray = arr.filter(checkString);        // NOT working currently
console.log(arr2);
arr2.forEach(e => console.log(typeof e === "string"));

// Checking a condition for ALL elements using:     arrayName.every(innerFunctionName)

// Replacing part of an array using:        array.copyWithin(#, #, #)

// Mapping (changing) array values:         array.map( e => { some action with e} )

// Finding last occurence in array using:       array.lastIndexOf(someElement);

                        // STRING methods
// Concating strings :  stringy1.concat(stringy2)
// String to array:     result = "Hello there"; result.split(" ");
//                    OR  
favoriteFruits = "Strawberry, Watermelon, Grapefruit";
arr_fruits = favoriteFruits.split(", ");
console.log(arr_fruits);
// Array to string:       array = [...]; let x = array.join();

// Finding an index:    array.indexOf(element);     --- returns -1 if NOT found
//                      array.search(element);      --- returns -1 if NOT found

// Creating substrings: string.slice(#, (#) )

// Replacing string parts:  string.replace("stringy", "stringy2");

// .toUpperCase and .toLowerCase()

// .charAt()

// .startsWith(element);
//  .endsWith(element);