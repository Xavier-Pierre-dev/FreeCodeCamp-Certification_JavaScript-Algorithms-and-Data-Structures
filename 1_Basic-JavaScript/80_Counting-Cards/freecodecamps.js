var count = 0;
var tab = [[2, 3, 4, 5, 6],[7, 8, 9],[	10, 'J', 'Q', 'K', 'A']]
var tabCount = [1,0,-1]

function cc(card) {
  // Only change code below this line
  tab.forEach((value,index)=>{
    value.forEach((sub_value,sub_index)=>{
      if(card===sub_value){
        count += tabCount[index]
        console.log(count)

      }
    })
  })

        if(count>0){
          console.log(""+count + " Bet")
          return count + " Bet"
        }
        else{
          console.log(""+count + " Hold")
          return count + " Hold"
        } 

  return "Change Me";
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');