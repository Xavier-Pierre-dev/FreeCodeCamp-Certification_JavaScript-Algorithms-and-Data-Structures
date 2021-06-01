function whatIsInAName(collection, source) {
    var arr = [];
    console.log(Object.keys(source))
  
    // Only change code below this line
    Object.keys(source).forEach((value, index)=>{
      console.log(value)
      collection = collection.filter(element => element[value]===source[value])
    })
    arr = collection
    console.log(arr);
  
    // Only change code above this line
    return arr;
  }
  
  whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 });