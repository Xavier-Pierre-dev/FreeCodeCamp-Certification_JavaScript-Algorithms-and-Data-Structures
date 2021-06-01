let quoteSample = "3 blind mice.";

// we match character whose are not voyel or number using the wildcard ^
let myRegex = /[^aeiuo0-9]/gi; // Change this line
let result = quoteSample.match(myRegex); // Change this line