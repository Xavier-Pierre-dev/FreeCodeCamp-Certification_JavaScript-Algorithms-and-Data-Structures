function sumPrimes(num) {
    let arr = [];
    for(let i = 2; i<=num;i++){
      if(isPrimesNumber(i)===true){
        arr.push(i);
      }
    }
  
    let sum = 0;
    console.log(arr);
    arr.forEach((value, index)=>{
      sum += value;
    })
  
    function isPrimesNumber(number){
        for(let i = 1;i<number;i++){
          console.log(`${number} % ${i} = ${number%i}`)
          if((number%i===0) && (i!=1)){
            console.log(i);
            return false;
          }
        }
        return true;
      }
  
    return sum;
  }
  
  sumPrimes(10);