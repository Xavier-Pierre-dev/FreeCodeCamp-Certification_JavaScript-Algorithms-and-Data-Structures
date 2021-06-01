function myReplace(str, before, after) {
    console.log(before[0].match(/[A-Z]/)!==null);
    let arrBefore = before.split("");
    let arrAfter = after.split("")
    for(let i = 0; i<Math.min(arrBefore.length,arrAfter.length);i++){
      console.log(arrBefore[i]);
      if(arrBefore[i].match(/[A-Z]/)!==null){
        arrAfter[i] = arrAfter[i].toUpperCase()
      }
      else{
        arrAfter[i] = arrAfter[i].toLowerCase()
      }
    }
    after = arrAfter.join("");
    before = arrBefore.join("");
    console.log(after)
    return str.replace(before, after);
  }
  
  myReplace("I think we should look up there", "up", "Down");