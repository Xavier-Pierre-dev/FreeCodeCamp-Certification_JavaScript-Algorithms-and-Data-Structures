function mixedNumbers(arr) {
    // Only change code below this line
    let beginning = ['I', 2, 'three'];
    let ending = [7, 'VIII', 9];
  
    beginning = beginning.reverse();
    beginning.forEach((value,index)=>{
      arr.unshift(value);
    })
    ending.forEach((value,index)=>{
      arr.push(value);
    })
    // Only change code above this line
    return arr;
  }
  
  console.log(mixedNumbers(['IV', 5, 'six']));