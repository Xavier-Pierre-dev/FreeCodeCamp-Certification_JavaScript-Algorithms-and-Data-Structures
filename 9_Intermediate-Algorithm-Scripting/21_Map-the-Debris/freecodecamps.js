function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    return arr.map(element=> {
      return{
      name:element.name,
      orbitalPeriod: Math.round(2 * Math.PI * Math.sqrt(Math.pow((element.avgAlt + earthRadius), 3) / GM))
      }
      });
  }
  
  console.log(orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]));