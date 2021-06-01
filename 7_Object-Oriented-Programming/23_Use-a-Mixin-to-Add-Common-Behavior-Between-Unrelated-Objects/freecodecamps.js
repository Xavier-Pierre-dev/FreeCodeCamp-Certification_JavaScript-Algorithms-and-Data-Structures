// object bird
let bird = {
    name: "Donald",
    numLegs: 2
  };
  
  //object boat
  let boat = {
    name: "Warrior",
    type: "race-boat"
  };
  
  // Only change code below this line
  // method who can be by every object
  let glideMixin = function(obj) {
    obj.glide = function(){
      return "glide"
    }
  }
  
  // set the method for bird and boat
  glideMixin(bird);
  glideMixin(boat);
  
  // call the method
  console.log(boat.glide());