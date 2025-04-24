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
// Spread Operator
let spreadArr = [2, 3, 4];
let messageArray = [1, ...spreadArr,5, 6];  
                // Contents of an array are appended to an array
console.log(messageArray);

let spreadNumbersAdd = [54, 9];
addTwoNumbers(...spreadNumbersAdd); 
                // Use contents of an array as function arguments
                // by appending. Whatever overflows is ignored
// Rest (parameter)
function restTester(param1, ...param2){
    console.log(param1, param2);
}
restTester("hi", "there", "How are you?");
                // Prints as an param1 and params 2 and 3 as
                //      as a printed array
// Return function values
function AddTwoNumsAndReturn(x, y){
    return x + y;
}
let result = AddTwoNumsAndReturn(1, 3)
console.log(result);
// Return with arrow functions
let addTwoNumsArrow = (x, y) => x + y;
let result2 = addTwoNumsArrow(12, 15);
console.log(result2);
let printVariousMessages = () => {
    console.log("Last function with arrows");
    console.log("Cool, huh?");
}
printVariousMessages();

        // Variable scope
/*      let vs var
        *block-scoped = {scope}
                * function-scoped
*/
// Const -> Block-scoped
// Functions and inner blocks will prefer to use more
//      local variables rather than global

// IIFE (Immediately Invoked Function Expression)
(function () {
    console.log("This is an IIFE");
})();  // Note this makes a function with no name, and calls it
       //   can be done with an arrow function too
       //   (()=>{ function_actions } )();

// Recursive functions
function factorial(number){
    if (number < 0)
        return 1;
    if (number == 0){
        return 1; }
    else if (number == 1) {
        return number; }
    else {
        return (number * factorial(--number) ) }
}
let factorialTest = factorial(8);
console.log("The factorial of 8 (ie, 8!) is : ", factorialTest);
factorialTest = factorial(20);
console.log("The factorial of 20 (20!) is : ", factorialTest);
// Nested functions : one could define a function within another
        //  but just use lambda functions; they're much easier
// Anonymous functions
let functionVariable = function(){
    console.log("A named variable to hold an anonymous function");
}
functionVariable(); // Naming an anonymous funct var and calling it
// Function callbacks : calling a function within another
let innerFunctionVariable = function(){
    console.log("Inner function called within an outer function");
}
let outerFunctionVariable = function(){
    console.log("Outer function called");
    innerFunctionVariable();
    console.log("Outer function finished");
}
outerFunctionVariable();