function Bird(name) {
    this.name = name;
    this.numLegs = 2;
  }
  
  let canary = new Bird("Tweety");
  let ownProps = [];
  // Only change code below this line
  
  for(let property in canary){
    if(canary.hasOwnProperty(property)){
      console.log(property);
      ownProps.push(property);
    }
  }


  // will display the property : [ 'name', 'numLegs' ]
  // different than display this.property = value
  console.log(ownProps)