function steamrollArray(arr) {

    arr.forEach((value,index)=>{
      while(arr[index][0]!==undefined){
        if(arr[index].length>1){
        let temp = arr[index];
        //console.log(temp)
        //console.log(arr)
        arr.splice(index,1);
        //console.log(arr);
        temp.forEach((value, index)=>{
          arr.push(steamrollArray([value]));
        })
        //console.log(arr);
        arr = steamrollArray(arr);
  
        }else{
        arr[index]=arr[index][0];
        }
      }
    })
  
    console.log({}.constructor.name) // Object
    console.log([].constructor.name) // Array
    arr.forEach((value,index)=>{
      if(value.constructor.name===[].constructor.name){
        arr.splice(index,1)
      }
    })
    return arr;
    
  
  }
  
  console.log(steamrollArray([1, {}, [3, [[4]]]]));