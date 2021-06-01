var arr = [];
function rangeOfNumbers(startNum, endNum) {
  if(startNum===endNum){
    arr.push(startNum);
    return arr;
  }else if(startNum < endNum ){
    arr.push(startNum);
    return rangeOfNumbers(startNum + 1,endNum)
  }
  return [];
};