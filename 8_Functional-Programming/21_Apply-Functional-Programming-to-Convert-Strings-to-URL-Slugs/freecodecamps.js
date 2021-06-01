// Only change code below this line
function urlSlug(title) {
    var myRegex = /(\w)(\w|\W)+(\w)/;
    var filter = title.match(myRegex);
    console.log(filter);
    console.log(filter[0].split(/\W+/).join("-").toLowerCase());
    return filter[0].split(/\W+/).join("-").toLowerCase();
  
  
  }
  // Only change code above this line