function smallestCommons(arr) {
    arr = arr.sort((a,b)=>{return a - b})
    let tempArr = [];
  
    for(let i = arr[0];i<=arr[1];i++){
      tempArr.push(i);
    }
  
    let currentValue = arr[1];
    let count = 0;
    while(count!==tempArr.length){
      currentValue++;
      count = 0;
    for(let i = 0;i<tempArr.length ;i++){
      if(currentValue%tempArr[i]===0){
        count++;
      }
    }
    }
  
    console.log(tempArr);
    console.log(currentValue);
  
    return currentValue;
  }
  
  smallestCommons([2, 10]);
  