function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype = {
    // Only change code below this line
    numLegs : 4,
    eat: function(){
      console.log("I'm hungry right now!");
  
    },
    describe: function(){
      console.log(`My name is ${this.name} and i have ${this.numLegs} legs.`);
  
    }
  
  };
  
  let terry = new Dog("Terry");
  terry.eat(); //I'm hungry right now!
  terry.describe();// My name is Terry and i have 4 legs.