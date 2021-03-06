function convertToRoman(num) {

    const values = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
    const romanLiterals = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];

    var roman = "";

    for(var i=0;i<values.length;i++) {
        while(num >= values[i]) {
            num -= values[i];
            roman += (romanLiterals[i]);
        }
    }
return roman;
}

convertToRoman(36);

