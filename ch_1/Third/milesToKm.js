// Tuesday April 1, 2025 4:16 p.m. Christopher Jacobo

let mileToKmConversionFactor = 1.60934;

let userNumber = Number(prompt("Please enter the distance you would " + 
                        "like to convert from miles to kilometers."));

let convertedNumber = userNumber * mileToKmConversionFactor;

let message = "The converted distance of ${userNumber} miles is ${convertedNumber} km";

alert(message);


