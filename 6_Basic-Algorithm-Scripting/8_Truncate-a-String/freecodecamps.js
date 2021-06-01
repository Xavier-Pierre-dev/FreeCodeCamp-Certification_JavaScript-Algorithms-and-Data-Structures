function truncateString(str, num) {
    if(str.length > num){
      str = str.split("").splice(0, num).join("")
      str = str + "..."
    }
    else{
      str = str.split("").splice(0, num).join("")
    }
  
    console.log(str)
    return str;
  }
  
  truncateString("A-tisket a-tasket A green and yellow basket", 8);