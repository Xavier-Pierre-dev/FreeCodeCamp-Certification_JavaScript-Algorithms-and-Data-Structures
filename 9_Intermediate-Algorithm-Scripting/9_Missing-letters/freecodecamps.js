function fearNotLetter(str) {
    console.log(str[0].toLowerCase().charCodeAt())
    console.log(String.fromCharCode(str[0].toLowerCase().charCodeAt()))
    str = str.split("").sort().join("");
    let asciiTemp = str[0].toLowerCase().charCodeAt();
    let result = undefined;
  
    for(let i=0;i<str.length;i++){
      console.log(str[i])
      console.log(asciiTemp)
      if(str[i].toLowerCase().charCodeAt()>((asciiTemp+1))){
        console.log("hello")
        result =  String.fromCharCode((str[i].toLowerCase().charCodeAt()-1))
        console.log(result)
      }
      asciiTemp=str[i].toLowerCase().charCodeAt();
    }
    return result;
  }
  
  console.log(fearNotLetter("abcdefghjklmno"));