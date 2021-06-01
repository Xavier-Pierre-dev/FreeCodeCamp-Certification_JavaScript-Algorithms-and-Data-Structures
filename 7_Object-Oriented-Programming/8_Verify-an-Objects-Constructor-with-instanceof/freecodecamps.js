function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
  }
  
  // Only change code below this line
  let myHouse = new House(5);
  console.log(myHouse);

  // will return true
  console.log(myHouse instanceof House);