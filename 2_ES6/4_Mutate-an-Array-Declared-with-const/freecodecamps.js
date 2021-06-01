function freezeObj() {
    const MATH_CONSTANTS = {
      PI: 3.14
    };
    // Only change code below this line
    // we freeze the object so every change on this object will result in a error
    Object.freeze(MATH_CONSTANTS)
  
    // Only change code above this line
    try {
        //we try a change on the object so like we freeze it, we will catch an error and display it
      MATH_CONSTANTS.PI = 99;
    } catch(ex) {
      console.log(ex);
    }
    return MATH_CONSTANTS.PI;
  }
  const PI = freezeObj();