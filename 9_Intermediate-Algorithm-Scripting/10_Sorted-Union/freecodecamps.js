function uniteUnique(...arg) {
    console.log(arg)
    let arr = [];
    console.log(arg.map(element => arr = [...arr, ...element]));
    //var temp = arr
    var monSet = [...new Set(arr)]
    return monSet ;
  }
  
  uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1], [22]);