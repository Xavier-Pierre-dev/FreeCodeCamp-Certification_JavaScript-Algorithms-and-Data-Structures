function repeatStringNumTimes(str, num) {
    let arr = []
    for(let i = num; i > 0; i--){
      arr.push(...str)
    }
    return arr.join("");
  }
  
  repeatStringNumTimes("abc", 3);