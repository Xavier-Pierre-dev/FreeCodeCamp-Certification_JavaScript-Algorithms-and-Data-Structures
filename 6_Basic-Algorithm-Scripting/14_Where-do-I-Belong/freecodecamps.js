function getIndexToIns(arr, num) {
    arr.push(num);
    arr.sort((a, b) => a - b);
    return arr.findIndex((element)=> element ==num);
  }
  
  function getIndexToIns_Solution2(arr, num) {
    arr.push(num);
    arr.sort((a, b) => a - b);
    let result = 0;
    for(let i =0; i<arr.length;i++){
      if(arr[arr.length - i - 1]==num){
        result = arr.length - i - 1;      
      }
    }
    return result;
  }
  
  let result = getIndexToIns([2, 5, 10], 15);
  console.log(result)