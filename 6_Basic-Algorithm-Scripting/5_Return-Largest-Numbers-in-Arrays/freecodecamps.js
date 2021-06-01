function largestOfFour(arr) {
    let num = 0;
    let result = [];
    arr.forEach((value,index)=>{
      num = value[0];
      value.forEach((subValue, SubIndex)=>{
        if(num<subValue){
          num = subValue;
        }
      })
      result.push(num);
    })
    return result;
  }
  
  let result = largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
  
  console.log(result)