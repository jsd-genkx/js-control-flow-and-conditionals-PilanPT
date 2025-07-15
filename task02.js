"use strict";

// TODO: Use if/else to check if it's a number
// (hint: typeof or isNaN)
/*hide my code 
const userInput = null;
// Try changing to "hello", 10, null, NaN

// Use typeof
if (typeof userInput === "number"&&userInput!==isNaN) {console.log("It's a number")}
    
 else { console.log("It's not a number")
}
*/

if (typeof userInput === "number" && !isNaN(userInput)) {
  console.log("It is a number.");
} else {
  console.log("It is NOT a number.");
}
