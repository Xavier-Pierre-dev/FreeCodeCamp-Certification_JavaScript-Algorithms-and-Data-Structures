function htmlColorNames(arr) {
    // Only change code below this line
    const startIndex = 0;
    const amountToDelete = 2;
  
    // remove N = amountToDelete element from the array starting at startIndex element 
    // and add "DarkSalmon", "BlanchedAlmond" on them respective place
    arr.splice(startIndex,amountToDelete, "DarkSalmon", "BlanchedAlmond")
  
    // Only change code above this line
    return arr;
  }
  
  console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));
  /*
console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));
[ 'DarkSalmon',
  'BlanchedAlmond',
  'LavenderBlush',
  'PaleTurquoise',
  'FireBrick' ]
  */