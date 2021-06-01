  // Setup
  var contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];
  
  function lookUpProfile(name, prop) {
    // Only change code below this line
    var temp = [];
    contacts.forEach((value, index) => {
      if (value["firstName"] === name) {
        if (value.hasOwnProperty(prop)) {
          console.log(value[prop]);
          console.log(contacts[index][prop]);
          temp = value[prop];
          return temp;
        } else {
          temp = ["No such property"];
          return "No such property";
        }
      }
    });
    if (temp.length!=0){
        if(temp[0]==="No such property"){
            return temp[0];
        }
        else{
            return temp;
        }
    }else{
        return "No such contact";
    }
    
  
    // Only change code above this line
  }
  
  console.log(lookUpProfile("Bob", "Number"));