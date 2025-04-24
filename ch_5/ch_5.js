/*
    Thursday April 10, 2025  9:42 p.m.   Christopher Jacobo
*/

// This file deals with loops:
//      while, do while, for loop, for in loop, for of loop

//  WHILE - done while condition true (could be 0 times)
// while (condition) { code blocks go here }

// DO WHILE - done at least once
// do { code blocks go here} while ();

// FOR
//  for (initialize var; condition; increment statement)
//  { code goes here }

// FOR OF loop - for arrays; can't change values
// for (let variableName of arrayName) {code goes here}

// FOR IN loop
// for (let keyProperty in objectName) {code goes here}
let car = {
    model: "Golf",
    make: "Volkswagen",
    year: 1999,
    color: "black",
};
for (let carProperty in car){
    let prop = carProperty; // Gives model, make, etc
    let value = car[carProperty];   // Gives Golf, Volks, etc
    console.log(`${prop}: ${value}`);
}
    // Making an object into array
//  First a property = key array
let arrFromObject = Object.keys(car);
for (let key of arrFromObject) {
    console.log(key);
}
//  Second, a value array
let arrFromObject2 = Object.values(car);
for (let val of arrFromObject2){
    console.log(val);
}
//  Third, an entries array (keys and values)
let arrFromObject3 = Object.entries(car);
for (const [keyProp, valU] of Object.entries(car))
    console.log(keyProp, ":", valU);

//  BREAK and CONTINUE, and INNER OUTER

//  Break and continue work like Java
//  not good practice for small own code, better for large data
//      that you import and have less control of when looping over

//  Using a break in inner nested statements breaks ONLY inner block
//      and NOT the outer block
/*  outer: for (let group of groups){
                inner:
                for (let member of group){
                    if (member.startsWith("M")){
                        console.log("Found:", member)
                        break outer;
                    }
                }
}
*/
//      Above loop breaks outer for loop and stops when ONE (1)
//          name with an m is found

// Note: outer and inner can be ANY words