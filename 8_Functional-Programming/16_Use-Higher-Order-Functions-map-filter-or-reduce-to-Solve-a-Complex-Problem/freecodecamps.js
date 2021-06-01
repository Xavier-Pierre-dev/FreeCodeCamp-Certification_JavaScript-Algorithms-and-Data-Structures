const squareList = arr => {
    // Only change code below this line
    var listInteger = arr.filter((element)=>(element >0 &&element % 1 === 0));
    console.log(listInteger);
    var listSquare = listInteger.map((element)=>
      element **2
    )
    console.log(listSquare)
    
    return listSquare;
    // Only change code above this line
  };
  
  const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
  console.log(squaredIntegers);