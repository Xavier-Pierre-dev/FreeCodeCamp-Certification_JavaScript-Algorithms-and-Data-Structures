function palindrome(str) {
    // we transform everything in lowercase
    str = str.toLowerCase();
    console.log(str);
  
    // this regex will match only alpha-num for one character
    let myRegex = /[a-z]|[0-9]/g;
    // every match are put inside an array
    let myMatchTab = str.match(myRegex);
    console.log(myMatchTab)
  
    //(myMatchTab.length/2) because we will compare
    // myMatchTab[i] and myMatchTab[myMatchTab.length - 1 - i]
    // so this is for avoid double comparaison
    for(let i = 0; i < (myMatchTab.length/2) ;i++){
      if(myMatchTab[i]!==myMatchTab[myMatchTab.length - 1 - i]){
        return false;
      }
    }
  
    return true;
  }
  
  
  palindrome("eye s 5 dd4");