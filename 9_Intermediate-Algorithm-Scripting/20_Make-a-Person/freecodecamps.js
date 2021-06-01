var Person = function(firstAndLast) {
    // Only change code below this line
    // Complete the method below and implement the others similarly
    var fullName = firstAndLast;
  
    this.setFullName = function(name){
      console.log(name)
      fullName = name;
    }
  
    this.setFirstName = function(name){
      console.log(name)
      fullName = name + " " + fullName.split(" ")[1];
    }
  
    this.setLastName = function(name){
      //console.log(name)
      fullName = fullName.split(" ")[0] + " " + name ;
    }
  
    
    this.getFullName = function() {
      return fullName;
    };
  
    this.getFirstName = function(){
      //console.log(fullName.split(" ")[0]);
      return fullName.split(" ")[0]
    };
  
    this.getLastName = function(){
      return fullName.split(" ")[1]
    };
  
    //return firstAndLast;
  };
  
  var bob = new Person('Bob Ross');
  bob.getFirstName();
  //console.log(bob.setFirstName("Haskell"));