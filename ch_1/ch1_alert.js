
alert("Saying hi from a different file!");

// Let's ask the user how they're doing.
prompt("Hi, how are you?");

// Declaring variables: var (scope throughout script)
//                      let (scope only in the brackets it is defined)

// Types
// Strings
var firstname = "Mikey";
let language = "JavaScript";
// NOTE: the following is NOT an apostrophe: `(above tab) != '(same button as quotes)
let message = `Let\'s learn ${language}`;    // Backticks are like Java Format
                                            //  specifiers
                                            //  ie, Template literals
// Numbers: 2 types
//  Number is everything, BigInt is for integers between
var x = 2;
let y = 5;
let z = -4.5;
let bigNr = 90071992547409920n;
//  BigInt are incompatible with Number operations, UNLESS typecasting
const PI = 3.14159;

// Symbol  - to mark variables that have the same type and value the same as 
//              different
let sym1 = Symbol("Js is fun");
let sym2 = Symbol("Js is fun");
console.log("These two Symbols are the same:", sym1 == sym2);

// Undefined    - generally shouldn't used this
let unassigned; // unassigned = undefined
let terribleThingToDo = undefined;  // unassigned == terribleThingToDO: true

// Null
let empty = null; // MUCH better to assign null than allow undefined




// Checking types
let testVariable = 1;
let variableTypeTest2 = typeof(testVariable);
        // Equivalent:  typeof testVariable;
// Some types: string, number, bigint, boolean, symbol, undefined
// printing a unknown = null, yields object. That is a bug forever. 



// Converting between types
//      Use String(), Number(), Boolean()
let nullToNr = null;
nullToNr = Number(nullToNr); // Yields 0
let strToNr = "";
strToNr = Number(strToNr);  // Yields 0
let strToNr2 = "hello";
strToNr2 = Number(strToNr2); // strToNr2 = NaN, but is type number
// Any string converted to boolean is true
//      except "", null, and undefined; they all yield false

// Operators  -   all the usual: PEMDAS, unary operators (in/decrement
//                                                           post and pre)
//                                  assignment ops (x**=3 <=> x = x**3),
//                                  comparison operators (==, !=, !==, >, <=),
//                                  &&, ||, ! (not)