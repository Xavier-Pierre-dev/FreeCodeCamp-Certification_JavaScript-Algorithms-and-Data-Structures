function Dog(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 4;
  
  }
  
  
  let terrier = new Dog("terrier", "brown");
  // that will display inside the console
  // { name: 'terrier', color: 'brown', numLegs: 4 }
  console.log(terrier);