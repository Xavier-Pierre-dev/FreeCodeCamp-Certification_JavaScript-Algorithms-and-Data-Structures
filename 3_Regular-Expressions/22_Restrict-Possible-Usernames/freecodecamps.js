let username = "JackOfAllTrades";
/*
/((^([a-z]|[A-Z]){2,})+([0-9]*$))
|
((^([a-z]|[A-Z]))+([0-9]{2,}$))/i; 

Explaination :
- ^([a-z]|[A-Z]) => will match if the first character are alphabet
- ^([a-z]|[A-Z]){2,} => will match if the 2 first or more character are alphabet
- ([0-9]{2,}$) => will match if the 2 last character are number
- + => mean AND
- | => mean OR
- () => here to ensure prioritise

*/

let userCheck = /((^([a-z]|[A-Z]){2,})+([0-9]*$))|((^([a-z]|[A-Z]))+([0-9]{2,}$))/i; // Change this line
let result = userCheck.test(username);