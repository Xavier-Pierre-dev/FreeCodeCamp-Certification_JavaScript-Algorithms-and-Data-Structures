function Bird() {
    // private 
    let weight = 15;
  
    this.getWeight = function(){
      return weight;
    }
  
  
  }
  
  let Roucool = new Bird();
  console.log(Roucool.getWeight()); // 15
  console.log(Roucool.weight); // undefined