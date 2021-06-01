function sumAll(arr) {

  let result=0;
  for(let i = Math.min(...arr); i <= Math.max(...arr); i++){
    result += i;
  }
  console.log(result)
  return result;
}

sumAll([5, 10]);