function spinalCase(str) {

    /*
  It’s the first and the second capturing groups.
  
  In regex, you can put a pattern in brackets (()). The brackets specify a capturing group: whatever matches in that group is “captured”, and then you can use $1, $2 etc to access the first, second etc groups.
  
  /([a-z])([A-Z])/g
  So this captures
  
  one character a-z,
  one character A-Z
  If the whole pattern matches, you can then use the reference to the relevant capturing group
  
  str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
  explaination source : https://forum.freecodecamp.org/t/can-anyone-explain-what-is-the-1-2-in-first-replace-statement-of-solution-1/352574
    */
    console.log(str.replace(/([a-z])([A-Z])/g, "$1 $2"))
  
     return str.replace(/([a-z])([A-Z])/g, "$1 $2").replace(/ +|_/g, "-").toLowerCase();
  
  
  
  }
  
  console.log(spinalCase('ThisIsSpinalTap'));
  console.log(spinalCase('Teletubbies say Eh-oh'));
  console.log(spinalCase('The_Andy_Griffith_Show'));