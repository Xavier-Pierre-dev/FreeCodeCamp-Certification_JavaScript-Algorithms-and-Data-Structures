function translatePigLatin(str) {
    const vowel = ["a", "e", "u", "o", "i"];
    let tempArr = str.split("");
    if(vowel.findIndex(element => element === tempArr[0])===-1){ 
      for(let i=0;(vowel.findIndex(element => element === tempArr[0])===-1) && i < tempArr.length;i++){
        let temp = tempArr.shift();
        tempArr.push(temp)
      }
      tempArr.push("ay")
    }
    else{
      tempArr.push("way")
    }
    console.log(tempArr)
    
    console.log(tempArr.join(""))
    return tempArr.join("");
  }
  
  translatePigLatin("california");