function mutation(arr) {
    arr.forEach((value,index)=>{
      let temp = [...new Set(arr[index].toLowerCase().split("").sort())]
      arr[index]=temp.join("")
    })
    let count = 0;
    for(let i = 0; i < arr[1].length;i++){
      for(let j = 0; j < arr[0].length; j++){
        if(arr[0][j]==arr[1][i]){
          count++
        }
      }
    }
    console.log(count)
    return count==arr[1].length
  }
  
  console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));