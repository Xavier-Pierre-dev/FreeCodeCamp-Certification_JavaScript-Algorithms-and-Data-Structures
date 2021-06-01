function Dog(name) {
    this.name = name;
  
  }
  Dog.prototype.numLegs = 4;
  // Only change code above this line
  
  let beagle = new Dog("Snoopy");
  console.log(beagle.numLegs)
  console.log(beagle)
  console.log(Dog)
  /*
  4
{ name: 'Snoopy' }
[Function: Dog]
*/