let text = "<h1>Winter is coming</h1>";


let myRegex = /<.*?>/; // will match <h1>
let myRegex2 = /<\/.*?>/; // will match </h1>


let result = text.match(myRegex);



console.log(result)


//more test :

// interesting pattern
 let text = "<h1>Winter<code>bo</code> is coming</h1><code>Winter is coming</code>";
 let myRegex = /(<\/[a-z0-9]*>)|<[a-z0-9]*>/gi; // Change this line
 let result = text.match(myRegex);
 console.log(result)
// [ '<h1>', '<code>', '</code>', '</h1>', '<code>', '</code>' ]

 let newRegex = /<code>.*?<\/code>/;
 result = text.match(newRegex);
 console.log(result)

// will display :
/*
 [ '<code>bo</code>',
  index: 10,
  input: '<h1>Winter<code>bo</code> is coming</h1><code>Winter is coming</code>',
  groups: undefined ]
  */