function bouncer(arr) {
    let result = [];
    arr.forEach((value, index)=>{
      if(value){
        result.push(value)
      }
    })
    return result;
  }
  
  console.log(bouncer([7, "ate", "", false, 9]));