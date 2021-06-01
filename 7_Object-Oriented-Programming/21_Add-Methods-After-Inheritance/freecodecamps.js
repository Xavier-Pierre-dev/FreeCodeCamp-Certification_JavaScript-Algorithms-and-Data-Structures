// declare class Animal
function Animal() { }
//Declare prototype eat for animal (method) who will be available for each children
Animal.prototype.eat = function() { console.log("nom nom nom"); };

// declare class Dog
function Dog() { }

// Only change code below this line
// Dog inherits from Animal (Dog is an Animal Children)
Dog.prototype = Object.create(Animal.prototype);
// Dog prototype constructor is set to Dog 
Dog.prototype.constructor = Dog;

// add a method for the class dog
Dog.prototype.bark = function(){
  console.log("Woof!")
}



// Only change code above this line

let beagle = new Dog();