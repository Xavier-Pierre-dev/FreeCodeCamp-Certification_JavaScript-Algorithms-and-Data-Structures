function telephoneCheck(str) {
  
  let myRegex = /^((((1\s)|)?)+(((\d{3})|(1\(\d{3}\))|(\(\d{3}\)))?)+((\s|-|)?)+((\d{3}|)?)+((\s|-|)?)+((\d{4})?))$/;

  // this is for avoid a bad result provide by a collision on my regex because otherwise :
  //"555 5555" and "5555555" and "555-5555" will match
  //because 555 will be considered 2 time then the pattern will match 555 5555 like if it's 555 555 5555
  // return str.match(myRegex)!=null
  if(str.match(myRegex)!=null){
    if(str.match(myRegex)[0].length>8){
      return true
    };
  }
  
  return false;
}

let result = telephoneCheck("5555555");
console.log(result);