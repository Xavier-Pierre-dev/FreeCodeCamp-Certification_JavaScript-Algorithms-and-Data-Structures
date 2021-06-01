function titleCase(str) {
    let result = "";
    let temp = str.toLowerCase().split(" ");
    let arr = [];
  
    temp.forEach((value,index)=>{
      let tempValue = value.split('');
      let firstValue = tempValue.shift().toUpperCase();
      tempValue.unshift(firstValue);
      arr.push(tempValue.join(""));
  
      })
    return arr.join(" ");
  }

  function titleCaseRegex(str) {
    return str.toLowerCase().replace(/(^|\s)\S/g, L => L.toUpperCase());
  }
  
  let result = titleCase("I'm a little tea pot");
  console.log(result);