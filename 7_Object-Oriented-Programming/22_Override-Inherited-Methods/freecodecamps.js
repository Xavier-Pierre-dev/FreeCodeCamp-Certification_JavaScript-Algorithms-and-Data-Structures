function Bird() { }

Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

// Only change code below this line

// override the method fly for children Penguin
Penguin.prototype.fly = function() {
  //console.log("Alas, this is a flightless bird.");
  return "Alas, this is a flightless bird.";
};


// Only change code above this line

let penguin = new Penguin();
console.log(penguin.fly());