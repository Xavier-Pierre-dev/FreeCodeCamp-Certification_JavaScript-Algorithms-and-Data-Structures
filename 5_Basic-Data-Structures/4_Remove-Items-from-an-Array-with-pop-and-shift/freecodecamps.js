function popShift(arr) {
    // pop remove the last element of an array and return this value
    let popped = arr.pop(); // Change this line
    
    // shift remove the first element of an array and return this value
    let shifted = arr.shift(); // Change this line
    return [shifted, popped];
  }
  
  // display [ 'challenge', 'complete' ]
  console.log(popShift(['challenge', 'is', 'not', 'complete']));