function confirmEnding(str, target) {
    // way to use regex with parameter
    let myRegex = `${target}$`;
    let result = str.match(myRegex);
    console.log(result)
    if(result === null){
      return false;
    }
    else{
      return true;
    }
  }
  
  let result = confirmEnding("Bastiana", "an");
  console.log(result)