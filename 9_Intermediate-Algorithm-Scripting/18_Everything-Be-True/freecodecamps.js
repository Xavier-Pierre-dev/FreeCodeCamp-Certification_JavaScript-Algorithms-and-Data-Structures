function truthCheck(collection, pre) {
    let bool = true;
    collection.forEach((value,index)=>{
      console.log(value)
      if(Object.keys(value).findIndex((element)=>element===pre)===-1){
        bool=false;
      }
      else{
        console.log(value[pre]);
        if(!value[pre]){
          bool=false
        }
      }
    })
    return bool;
  }
  
  console.log(truthCheck([{"user": "Tinky-Winky"}], "user"));