function chunkArrayInGroups(arr, size) {
    let result = [];
    let subArr = [];
    for(let j = 0;j<arr.length;j++){
    subArr=[];
    for(let i = 0;i<size && j<arr.length;i++){
      subArr.push(arr[j]);
      j++;
    }
    result.push(subArr);
    j--;
    }
  
    return result;
  }
  
  chunkArrayInGroups(["a", "b", "c", "d"], 2);