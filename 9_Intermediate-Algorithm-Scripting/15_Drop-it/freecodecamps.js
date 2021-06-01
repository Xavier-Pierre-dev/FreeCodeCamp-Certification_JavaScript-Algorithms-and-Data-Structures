function dropElements(arr, func) {
    let bool = false;
    let tempArr = [...arr];
    for(let i = 0; i<arr.length && bool===false;i++){
      if(!func(arr[i])){
        tempArr.shift();
      }
      else{
        bool=true;
      }
    };
    
    return tempArr;
  }
  
  console.log(dropElements([0, 1, 0, 1], function(n) {return n === 1;}));