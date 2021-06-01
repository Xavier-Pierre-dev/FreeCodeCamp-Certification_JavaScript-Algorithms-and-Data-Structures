function quickCheck(arr, elem) {
    // Only change code below this line
    console.log(arr.indexOf(elem))
  
    // arr.indexOf(elem) return -1 if the element doesn't exist inside the array arr
    // ortherwise that will return the index of the element
    if(arr.indexOf(elem)===-1){
      return false;
    }
    else {
      return true;
    }
    // Only change code above this line
  }
  
  console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));