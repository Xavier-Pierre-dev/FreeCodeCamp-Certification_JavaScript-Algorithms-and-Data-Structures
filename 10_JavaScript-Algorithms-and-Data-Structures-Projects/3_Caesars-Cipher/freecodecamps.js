function rot13(str) {
    var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var alpha = "";
    var index = 0;
    for(var i=0;i<str.length;i++){
      console.log(str[i])
      var A = false;
      for(var j=0;j<alphabet.length;j++){
        if(str[i]==alphabet[j]){
          A = true;
          index = j;
          index = (index + 13) % 26;
          alpha+=alphabet[index];
        }
      }
      if(A==false){
        alpha+=str[i];
      }
    }
    
    console.log(alpha)
    return alpha
  }
  
  rot13("SERR PBQR PNZC");