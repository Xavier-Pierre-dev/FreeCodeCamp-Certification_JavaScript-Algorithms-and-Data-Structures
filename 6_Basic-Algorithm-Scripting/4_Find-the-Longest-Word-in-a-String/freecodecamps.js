function findLongestWordLength(str) {
    let maxLength = 0;
    str.split(" ").forEach((value, index)=>{
      if(maxLength<value.length){
        maxLength = value.length;
      }
    })
    return maxLength;
  }
  
  let result = findLongestWordLength("The quick brown fox jumped over the lazy dog");
  
  console.log(result);