function countOnline(usersObj) {
    // Only change code below this line
    let counter = 0;
    for(let user in usersObj){
      console.log(user)
      console.log(usersObj[user])
      console.log(usersObj[user]["online"])
  
      if(usersObj[user]["online"] === true){
        counter = counter + 1;
      }
    }
    console.log(counter);
    return counter;
  
    // Only change code above this line
  }
  
  