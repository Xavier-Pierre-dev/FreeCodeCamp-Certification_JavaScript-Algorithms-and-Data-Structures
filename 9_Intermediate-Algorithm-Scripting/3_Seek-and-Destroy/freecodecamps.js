function destroyer(arr, ...arg) {
    arg.map(item => arr = arr.filter((element)=>element !== item))
  
    console.log(arr)
    return arr;
  }
  
  destroyer([1, 2, 3, 1, 2, 3], 2, 3);