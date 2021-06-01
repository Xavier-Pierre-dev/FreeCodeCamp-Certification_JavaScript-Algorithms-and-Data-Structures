let quoteSample = "Blueberry 3.141592653s are delicious.";

//match [h-2] and [2-6]
let myRegex = /[h-s2-6]/gi; // Change this line
let result = quoteSample.match(myRegex); // Change this line