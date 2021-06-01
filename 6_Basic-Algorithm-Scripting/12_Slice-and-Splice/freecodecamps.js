function frankenSplice(arr1, arr2, n) {
    let local = arr2.slice();
    local.splice(n, 0, ...arr1);
    return local;
  }
  
  console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));