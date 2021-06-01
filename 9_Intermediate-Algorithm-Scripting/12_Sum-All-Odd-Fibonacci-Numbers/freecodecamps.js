function sumFibs(num) {
    let fib = [1,1];
    let sum = 2;
    while(fib[fib.length-1]<=num){
      if((fib[fib.length - 1] + fib[fib.length - 2])%2){
        console.log("hello", sum, fib[fib.length - 1] + fib[fib.length - 2])
        if(fib[fib.length - 1] + fib[fib.length - 2]<=num){
        sum += fib[fib.length - 1] + fib[fib.length - 2];
        }
      };
      fib.push(fib[fib.length - 1] + fib[fib.length - 2])
  
    }
  
    console.log(fib)
    return sum;
  }
  
  console.log(sumFibs(1000));