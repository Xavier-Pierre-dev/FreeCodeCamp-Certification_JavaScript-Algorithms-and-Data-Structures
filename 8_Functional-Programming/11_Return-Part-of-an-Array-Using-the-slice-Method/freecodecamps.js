function sliceArray(anim, beginSlice, endSlice) {
    // Only change code below this line
    return anim.slice(beginSlice, endSlice)
  
  
    // Only change code above this line
  }
  var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
  var result = sliceArray(inputAnim, 1, 3);
  console.log(inputAnim); // [ 'Cat', 'Dog', 'Tiger', 'Zebra', 'Ant' ]
  console.log(result);//   [ 'Dog', 'Tiger' ]