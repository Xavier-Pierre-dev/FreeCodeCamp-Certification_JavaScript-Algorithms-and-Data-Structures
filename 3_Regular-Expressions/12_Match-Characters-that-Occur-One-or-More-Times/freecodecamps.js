let difficultSpelling = "Mississippi";

// will match s and ss, or sss, or ssss...
let myRegex = /s+/g; // Change this line
let result = difficultSpelling.match(myRegex);