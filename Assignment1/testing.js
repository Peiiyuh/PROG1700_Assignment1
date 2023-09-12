/*
Author: Peiyu HUang
Date: 
Description: 
*/
"use strict";
var readlineSync = require("readline-sync");


// DO NOT EDIT: The main function to house our program code 
function main()
{
    var Orinum = 5208.25537;
    var num = parseFloat(Orinum.toFixed(4));
    var oneRe = parseInt(num/1000); //24
    var twoRe = parseInt(num%1000); //880
    var thrRe
    //math.round
    
    //output
   console.log(oneRe);
   console.log(twoRe);
   console.log(((num-parseInt(num))*1000).toFixed(1));
   console.log(1+2.3+6.8+7.2589);
   
}

// DO NOT EDIT: Trigger our main function to launch the program
if (require.main === module)
{
    main();
}