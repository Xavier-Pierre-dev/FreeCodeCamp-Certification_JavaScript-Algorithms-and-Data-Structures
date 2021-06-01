let exampleStr = "Let's have fun with regular expressions!";

// we use a wildcard "."
// point is a wildcard whose allow us to match any one character
let unRegex = /.un/; // Change this line
let result = unRegex.test(exampleStr);