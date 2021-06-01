function diffArray(arr1, arr2) {
    var tempArr = [];
    var arr1NoDuplicate = [... new Set(arr1)]
    var arr2NoDuplicate = [... new Set(arr2)]
    var newArr = [];
    console.log(arr2)
  
    tempArr =[...arr1, ...arr2]
    console.log(tempArr)
    
    tempArr.forEach((value, index)=>{
      var count = 0;
      for(let i = 0; i<tempArr.length;i++){
        if(value === tempArr[i]){
          count++
        }
      }
      if(count===1){
        newArr.push(value)
      }
    })
    console.log(newArr)
  
    return newArr;
  }
  
  console.log(diffArray([1, 2, 3, 7, 5], [1, 2, 3, 4, 5]));