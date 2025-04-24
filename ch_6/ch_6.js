/*
    Thursday April 19, 2025  3:42 p.m.   Christopher Jacobo
*/

// This file covers functions: specifically:
// Basic, arguments, return, variable scope, recursive
//      nested, anonumous, callbacks


        // Basic function (declarations)

//  function nameOfFunction() { content }

function sayHello(){
//    let you = prompt("What's your name? ");
//    console.log("Hello, ", you + "!");
}
sayHello();
// Variables can hold functions
let varContainingFunction = function(){
    let varInFunction = "I'm a function";
    console.log(varInFunction);
}
varContainingFunction();
// 3 Rules of Naming Functions:
//  camelCase, descriptive, verb form

        // Arguments and default parameters
function addTwoNumbers(x = 2, y = 3){
    console.log(x+y);
}
addTwoNumbers(4, "hello");
addTwoNumbers(4);
addTwoNumbers();

        // Special Functions: Arrow, Spread and Rest, Return
// Arrows
//      (param, ...) => body
let addTwoNumbersBetter = (x = 10, y = 14) => console.log(x + y);
addTwoNumbersBetter();
let sayHi = () => console.log("Hi!");
sayHi();
const arrTestForEach = ["squirrel", "alpaca", "buddy"];
arrTestForEach.forEach(e => console.log(e));