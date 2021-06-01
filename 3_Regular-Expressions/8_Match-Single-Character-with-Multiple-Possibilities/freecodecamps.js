let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";

// here we will match every voyel such as : a, e, i, o, u
let vowelRegex = /[aeiou]/gi; // Change this line
let result = quoteSample.match(vowelRegex); // Change this line