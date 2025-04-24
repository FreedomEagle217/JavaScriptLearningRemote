/*
    Thursday April 10, 2025  9:32 p.m.   Christopher Jacobo
*/

// This file deals with Logic Statements:
//      if, if-else, else, conditional ternary, and switch

//  Everything is like Java notation, so pretty simple

//      IF, ELSE-IF, ELSE
let rainChance = 45;

    if (rain == 5){
        console.log("No rain chance today");
    }
    else if (rain == 45){
        console.log("About 50/50 chance of rain today");
    }
    else {
        console.log("Almost guaranteed chance of rain!");
    }


//      CONDITIONAL TERNARY OPERATORS
let age = 18;
age < 18 ? console.log("denied") : console.log("allowed");
    // If age < 18, print denied. else, print allowed

//      SWITCH
let time = 4;
let thingToDo = null;

switch(time) {
    case 2:
  //case i
  // .
  // .
  // .
  // list all cases that apply
        thingToDo = "eat";
        break;
    case 4:
        thingToDo = "sleep";
        break;
    default:
        thingToDo = "look up schedule";
        break;
}