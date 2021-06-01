let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
  };
  
  // Only change code below this line
  let elemDelete = ["oranges", "plums", "strawberries", "foods"];
  elemDelete.forEach((value, index)=> {
    delete foods[value];
  })
  
  // Only change code above this line
  
  console.log(foods);