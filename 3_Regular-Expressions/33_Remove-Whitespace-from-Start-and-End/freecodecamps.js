let hello = "   Hello, World!  ";
let wsRegex = /Hello, World!/; // Change this line
let result = hello.match(wsRegex)[0]; // Change this line
console.log(result)



wsRegex = /^\s+|\s+$/g;
let test = hello.replace(wsRegex, "");
console.log(test);